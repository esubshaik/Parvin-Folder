from pymongo import MongoClient
from urllib.parse import quote_plus

username = 'xpressresumebuilder'
password = 'Parvin@7864'
encoded_username = quote_plus(username)
encoded_password = quote_plus(password)

# Initialize MongoDB client with encoded credentials
client = MongoClient('mongodb+srv://'+encoded_username+':'+encoded_password+'@xpress-resume-builder.w2epkdk.mongodb.net/?retryWrites=true&w=majority&appName=xpress-resume-builder')

db = client.test  # Use a test database

try:
    # Try to list databases
    print(client.list_database_names())
except Exception as e:
    print(f"An error occurred: {e}")
