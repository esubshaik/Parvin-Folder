import {React} from 'react';
import bg from "../Assets/main-bg.jpg";
import { useState, useEffect } from 'react';
import {
  Link,
} from "react-router-dom";



const Home=()=>{
  const [text, setText] = useState('');
  const fullText = "Build your Resume at a faster pace!";
  const typingSpeed = 70; // Adjust typing speed (ms)

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      setText((prev) => {
        // Ensure we add the correct character
        const newText = fullText.slice(0, index + 1);
        index++;
        return newText;
      });

      if (index >= fullText.length) {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer); // Cleanup on component unmount
  }, []); // Cleanup on component unmount

    return(
        <div style={{ backgroundImage: `url(${bg})` }} className='w-full h-lvh pt-48 text-white'>
        <h4 className='flex justify-center text-6xl font-semibold text-white pb-6'>XPRESS RESUME BUILDER</h4>
        <p2 className='flex justify-center text-2xl'>{text}</p2>
        <div class="flex justify-center text-4xl mt-10">
          <Link to="/login" className='font-semibold border-white rounded-lg border-2 p-2 hover:border-black hover:text-black hover:bg-white '>Try Now!</Link>
        </div>
        </div>
    )
}
export default Home;