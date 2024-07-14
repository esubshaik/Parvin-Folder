from urllib.parse import quote_plus
from flask import Flask, request, jsonify
from flask_restful import Api, Resource, reqparse
from flask_jwt_extended import (
    JWTManager, jwt_required, create_access_token,
    get_jwt_identity
)
from flask_mail import Mail, Message
from pymongo import MongoClient
import random
import string 
from flask_cors import CORS
# Initialize Flask app
app = Flask(__name__)
app.config['JWT_SECRET_KEY'] = 'xpressresumebuilder'  # Change this in production
app.config['MAIL_SERVER'] = 'smtp.gmail.com'
app.config['MAIL_PORT'] = 587  # Port for TLS
app.config['MAIL_USERNAME'] = 'xpressresumebuilder@gmail.com'
app.config['MAIL_PASSWORD'] = 'beyf vjel zzpt pwbg'
app.config['MAIL_USE_TLS'] = True
app.config['MAIL_USE_SSL'] = False
app.config['MAIL_DEFAULT_SENDER'] = 'codewithesub@gmail.com'
jwt = JWTManager(app)
mail = Mail(app)

CORS(app)
# Encode username and password for MongoDB URI
username = 'xpressresumebuilder'
password = 'Parvin@7864'
encoded_username = quote_plus(username)
encoded_password = quote_plus(password)

# Initialize MongoDB client with encoded credentials
#Check Network Access

client = MongoClient(f'mongodb+srv://{encoded_username}:{encoded_password}@xpress-resume-builder.w2epkdk.mongodb.net/?retryWrites=true&w=majority&appName=xpress-resume-builder')
db = client['xpressresumebuilder']


if 'users' not in db.list_collection_names():
    db.create_collection('users')


# Helper functions
def generate_otp(length=6):
    return ''.join(random.choices(string.digits, k=length))

# Resource classes
class Register(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        email = args['email']
        password = args['password']

        if db.users.find_one({'email': email}):
            return {'message': 'User already exists'}, 400

        db.users.insert_one({
            'email': email,
            'password': password  # In production, password should be hashed
        })

        return {'message': 'User registered successfully'}, 201

class Login(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True)
        parser.add_argument('password', type=str, required=True)
        args = parser.parse_args()

        email = args['email']
        password = args['password']

        user = db.users.find_one({'email': email, 'password': password})
        print(user)
        if user:
            access_token = create_access_token(identity=email)
            return {'access_token': access_token}, 200
        else:
            return {'message': 'Invalid credentials'}, 401

class SendOTP(Resource):
    def post(self):
        parser = reqparse.RequestParser()
        parser.add_argument('email', type=str, required=True)
        args = parser.parse_args()

        email = args['email']
        otp = generate_otp()

        # Send OTP via email
        msg = Message('Your OTP', recipients=[email])
        msg.body = f'Your OTP is: {otp}'
        mail.send(msg)

        return {'otp': otp}, 200

# API routes

def verify_token():
    try:
        current_user = get_jwt_identity()
        if current_user:
            # Proceed with the POST request logic for registered users
            # Example: Check if the user exists in your database
            user = db.users.find_one({'email': current_user})
            if user:
                # User exists, continue with the POST logic
                return True
            else:
                return False  # User not registered
        else:
            return False  # No valid identity found
    except Exception as e:
        print(e)
        return False  # Token verification or database query failed

class CheckReg(Resource):
    @jwt_required()
    def post(self):
        if verify_token():
            # Token is valid and user is registered
            # Perform your POST request logic here
            return {'message': 'POST request successful'}, 200
        else:
            return {'message': 'Unauthorized'}, 401

api = Api(app)
api.add_resource(Register, '/register')
api.add_resource(Login, '/login')
api.add_resource(SendOTP, '/send_otp')
api.add_resource(CheckReg,'/check')

if __name__ == '__main__':
    app.run(debug=True)
