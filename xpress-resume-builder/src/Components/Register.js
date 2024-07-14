import { React } from 'react';
import bg from "../Assets/main-bg.jpg";
import {
  Link,
} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import BasicModal from './modal';

const Register = () => {
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [otp, setotp] = useState('');
  const[uotp,setuotp] = useState(null);
  const[temp,settemp] = useState(null);
  const [open,setopen] = useState(false);

  const handleOTP = async (event) => {
    
    event.preventDefault();
    try {
      setloading(true);
      
      settemp(null);
      const response = await axios.post('http://127.0.0.1:5000/send_otp', {
        email: email,
      });
      if(response.data){
        settemp("OTP sent successfully!");
        setotp(response.data.otp);
      }
      
    } catch (error) {
      console.error('Error logging in', error);
    }
    finally{
      setloading(false);
    }
  }
  const handleSubmit = async (event) => {
    event.preventDefault();
    if(otp !== uotp){
      alert("OTP doesn't match, please try again!");
    }
    else{
      try {
        setloading(true);
        settemp("OTP matched successfully!");
        const response = await axios.post('http://127.0.0.1:5000/register', {
          email: email,
          password:password
        });
        if(response.status === 201){
          setopen(true);
          console.log('message', response.data);
        }
        
      } catch (error) {
        console.error('Error logging in', error);
      }
      finally{
        setloading(false);
      }
    }
  }


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='w-full h-lvh pt-24'>
      <h4 className='flex justify-center text-6xl font-semibold text-white pb-6'>XPRESS RESUME BUILDER</h4>
      {!open? <div className=' justify-start'>
        <div class="flex justify-center">
          <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 class="text-2xl font-bold pb-5">Register</h2>
            <form>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="john@mail.com"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="*********"
                  required
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className='flex flex-col items-center justify-center'>
              <BarLoader color="purple" height={4} width={100} loading={loading} className='my-4' />
              <div className='flex flex-row items-center'>
              <button
                  type="submit"
                  className="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 sm:w-auto"
                  onClick={(e) => handleOTP(e)}
                  disabled={loading}
                >
                  Send OTP
                </button>
                <p3 className="ml-2 text-sm">
                  {temp}
                </p3>
              </div>
                
              </div>
              {
                otp === '' || otp  === undefined ?
            null : <div>
            <div class="mb-4">
              <label for="otp" class="block mb-2 text-sm font-medium">OTP</label>
              <input
                type="numeric"
                id="otp"
                class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-1/2 py-2.5 px-4"
                placeholder="******"
                required
                onChange={(e) => setuotp(e.target.value)}
              />
            </div>


            <div class="flex items-center justify-between mb-4">
              <button
                type="submit"
                class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
              onClick={(e)=>handleSubmit(e)}
              >
                Submit
              </button>
              <div class="flex items-center text-sm">
                <p>Already have an Account?</p> &nbsp;
                <Link to="/login" className='font-semibold'>Login</Link>
              </div>
            </div>
          </div> 
}
            </form>
          </div>
        </div>
      </div> :<BasicModal open={open} setOpen = {setopen}/> }
      
    </div>
  )
}
export default Register;