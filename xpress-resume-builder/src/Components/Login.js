import { React } from 'react';
import bg from "../Assets/main-bg.jpg";
import {
  Link,
} from "react-router-dom";
import { useState } from 'react';
import axios from 'axios';
import { BarLoader } from 'react-spinners';
import { useNavigate } from 'react-router-dom';
import UnBasicModal from './unmodal';


const Login = () => {
  const navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [open,setopen] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setloading(true);
      const response = await axios.post('http://127.0.0.1:5000/login', {
        email: email,
        password: password
      });
      if (response.status === 200) {
        localStorage.setItem('token', response.data.access_token);
        console.log('message', response.data.access_token);
        setTimeout(() => {
          setloading(false);
          navigate('/main');
        }, 2000);
      }
    } catch (error) {
      console.error('Error logging in', error);
      setloading(false);
      setopen(true);
    }
    
  }


  return (
    <div style={{ backgroundImage: `url(${bg})` }} className='w-full h-lvh pt-24'>
      <h4 className='flex justify-center text-6xl font-semibold text-white pb-6'>XPRESS RESUME BUILDER</h4>
      { open ?
        <UnBasicModal open={open} setOpen = {setopen}/> :
        <div className=''>
        <div class="flex justify-center">
          <div class="w-96 backdrop-blur-lg bg-opacity-80 rounded-lg shadow-lg p-5 bg-gray-900 text-white">
            <h2 class="text-2xl font-bold pb-5">Sign In</h2>
            <form>
              <div class="mb-4">
                <label for="email" class="block mb-2 text-sm font-medium">Your email</label>
                <input
                  type="email"
                  id="email"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="john@mail.com"
                  required
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="mb-4">
                <label for="password" class="block mb-2 text-sm font-medium">Your password</label>
                <input
                  type="password"
                  id="password"
                  class="bg-gray-100 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 w-full py-2.5 px-4"
                  placeholder="*********"
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <div class="flex items-center justify-between mb-4">
                <div className='flex flex-col'>
                  <BarLoader color="purple" height={4} width={100} loading={loading} className='my-4' />
                  <button
                    type="submit"
                    class="text-white bg-purple-600 hover:bg-purple-700 focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto"
                    onClick={(e) => handleSubmit(e)}
                  >
                    Submit
                  </button>
                </div>

                <div class="flex items-center text-sm">
                  <p>Dont have an Account?</p> &nbsp;
                  <Link to="/register" className='font-semibold'>  Register</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
      }
      
    </div>
  )
}
export default Login;