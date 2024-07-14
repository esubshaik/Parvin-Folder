import { React, useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import t1 from "../Assets/template-1.jpg";
import logo from "../Assets/logo.png";
import profile from "../Assets/profile.png";
import { Menu, MenuButton, MenuItems, MenuItem } from '@headlessui/react';
import { Document, Page, Text, View, StyleSheet, BlobProvider, PDFRenderer, PDFViewer } from '@react-pdf/renderer';
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import MyDocument from './MyDocument.js'
// Create Document Component



const Template1 = () => {
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
  }, []);

  const handleReload = () => {
    window.location.reload();
  };

  const handleLogout = () => {
    // Implement logout functionality here
    console.log('Logout clicked');
    localStorage.removeItem('token');
    navigate('/login');
  };
  const options = [
    "Personal Info", "Career Objective", "Education", "Project Experience", "Work Experience", "Technical Skills", "Certifications", "Internships", "Achievements", "Curricular Activities", "Strengths", "Hobbies", "Declaration"
  ]

  const [visit, setvisit] = useState(0);




  const [personalInfo, setPersonalInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });
  const handlePersonalChange = (e) => {
    const { name, value } = e.target;
    setPersonalInfo({
      ...personalInfo,
      [name]: value,
    });
  };
  const [careerObjective, setCareerObjective] = useState("");

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
              <MenuButton className='w-12 h-12 mx-2'
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

      <div className='flex flex-row w-full h-full'>
        <div className='w-[50%] my-6'>
          {
            options?.map((option, index) => (
              <button key={index}
                className={`p-4 m-2 font-semibold rounded-lg border-2 ${visit === index ? 'bg-white text-purple-700 border-purple-700' : 'text-white bg-purple-700 border-white'}`}
                onClick={() => setvisit(index)}
              >
                {option}
              </button>
            ))
          }
          <div className='my-4 border border-gray-400 h-[40%] w-full rounded-lg '>
            {
              visit === 0 ? <div>
                <div className='flex flex-row justify-around mt-10 items-center'>
                  <label htmlFor="name" className='font-semibold text-base text-gray-500'>Full Name :</label>
                  <input
                    type='text'
                    id="name"
                    name='name'
                    className='w-64 h-10 border-2 border-purple-700 rounded-lg pl-4'
                    placeholder='Enter full name'
                    value={personalInfo.name}
                    onChange={(e) => handlePersonalChange(e)}
                  />
                </div>
                <div className='flex flex-row justify-around mt-10 items-center'>
                  <label htmlFor="email" className='font-semibold text-base text-gray-500'>Email-Id:</label>
                  <input
                    type='email'
                    id="email"
                    name='email'
                    className='w-64 h-10 border-2 border-purple-700 rounded-lg pl-4'
                    placeholder='Enter email'
                    value={personalInfo.email}
                    onChange={(e) => handlePersonalChange(e)}
                  />
                </div>
                <div className='flex flex-row justify-around mt-10 items-center'>
                  <label htmlFor="phone" className='font-semibold text-base text-gray-500'>Phone No :</label>
                  <input
                    type='text'
                    id="phone"
                    name='phone'
                    className='w-64 h-10 border-2 border-purple-700 rounded-lg pl-4'
                    placeholder='Enter phone number'
                    value={personalInfo.phone}
                    onChange={(e) => handlePersonalChange(e)}
                  />
                </div>
              </div> : visit == 1 ? <div>
                <div className='flex flex-row justify-around items-center mt-5 text-start'>
                  <label htmlFor="cob" className='font-semibold text-base text-gray-500'>Career Objective :</label>
                  <textarea
                    name='cob'
                    id='cob'
                    type='text'
                    className='text-start w-3/4 content-start text-wrap h-56 border-2 border-purple-700 rounded-lg p-4'
                    value={careerObjective}
                    onChange={(e) => setCareerObjective(e.target.value)}
                  />
                </div>

              </div> : null
            }
          </div>

        </div>
        <PDFViewer className="w-[55%] bg-gray-50 h-full mx-4" showToolbar={false}>
          <MyDocument pInfo={personalInfo} cob={careerObjective} />
        </PDFViewer>
        {/* <BlobProvider document={<MyDocument name={"Parvin"} />} >
          {({ blob, url, loading, error }) => {
            return (
              loading ? 'Loading document...' :
                error ? 'Error loading document.' :
                  <DocViewer documents={[
                    {
                      uri: url,
                      fileName: "myresume",
                    },
                  ]} style={{ width: 600, height: '100%', border: '2px solid gray' }}  config={{
                    header: {
                      disableHeader: false,
                    },
                    pdfZoom: {
                      defaultZoom: 0.8, // 1 as default,
                      zoomJump: 0.1, // 0.1 as default,
                    },

                  }} />
            );
          }}
        </BlobProvider> */}
      </div>
    </div>

  )
}
export default Template1;