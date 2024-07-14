import { React, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import t1 from "../Assets/template-1.jpg";
import logo from "../Assets/logo.png";
import profile from "../Assets/profile.png";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';

 
const Main = () => {
    const navigate = useNavigate();
    const fetchData = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            try {
                const response = await axios.get('http://127.0.0.1:5000/check', {
                    headers: {
                        Authorization: `Bearer ${token}`
                    }
                });
                if (response.status !== 200) {
                    localStorage.removeItem('token');
                    navigate('/login');
                }
            } catch (error) {
                console.error('Fetch data error:', error);
            }
        } else {
            console.log('User is not logged in.');
            navigate('/login');
        }
    };
    useEffect(() => {
        fetchData();
    }, [])

    const handleReload = () => {
        window.location.reload();
      };
    
      const handleLogout = () => {
        // Implement logout functionality here
        console.log('Logout clicked');
        localStorage.removeItem('token');
        navigate('/login');
      }; 

    return (
        <div className='w-full h-lvh pl-4 text-black bg-gray-50'>
            {/* <h4 className='flex justify-center text-6xl font-semibold text-black pb-6'>Successfully Logged In!</h4> */}
            <div className='flex flex-row justify-between w-full'> 
            <div
                className='w-48 h-24'
                style={{ backgroundImage: `url(${logo})`, backgroundSize: 'cover' }}
            >
            </div>
            <div className='justify-end self-end flex flex-row space-x-4 h-24 content-center items-center mr-20'>
                <Link className='text-purple-700 font-semibold'>Home</Link>
                <Link className='text-purple-700 font-semibold'>About Us</Link>
                <Link className='text-purple-700 font-semibold'>Services</Link>
                <Link className='text-purple-700 font-semibold'>Contact Us</Link>
            
            <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton  className='w-12 h-12 mx-2'
                style={{ backgroundImage: `url(${profile})`, backgroundSize: 'cover' }}>
           
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="absolute right-0 z-10 mt-2 w-36 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
      >
        <div className="py-1">
          <MenuItem>
            <button
              onClick={handleReload}
              className="block w-full px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-100"
            >
              Refresh
            </button>
          </MenuItem>
          <MenuItem>
            <button
              onClick={handleLogout}
              className="block w-full px-4 py-2 font-semibold text-sm text-gray-700 hover:bg-gray-100"
            >
              Logout
            </button>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
            </div>
            
            </div>

            <hr className='font-semibold text-lg text-gray-400 w-full'></hr>
            <div className='items-center content-center flex flex-col justify-center mt-10'>


                <p className='font-semibold text-xl my-2 text-gray-500 m-4' >Available Templates</p>
                <div
                    className='w-60 h-80 border-2 border-gray-400 rounded-lg m-4 bg-white content-center'
                    style={{ backgroundImage: `url(${t1})`, backgroundSize: 'cover' }}
                >

                </div>
                <button
                    type="submit"
                    class=" bg-white border-2 border-purple-700 hover:bg-purple-700 text-purple-700 hover:text-white focus:ring-2 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 px-5 w-full sm:w-auto self-center"
                    onClick={()=>navigate('/template1')}
                >
                    Choose Template
                </button>
            </div>
        </div>

    )
}
export default Main;