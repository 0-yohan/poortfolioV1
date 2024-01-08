import React from 'react';
// import { Link } from 'react-router-dom';
import me from "./assets/me-mask.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Header from "./Header";
import instagram from './assets/instagram.png';


const About = () => {
  return (
    <div className='bg-black text-white'>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 md:pl-32 ">
        {/* Your Photo and Information */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mt-32">
          <img src={me} alt="Me" className="w-full md:w-1/2 max-w-md rounded-full mb-8 md:mb-0" />

          <div className="md:w-1/2 pl-8">
            <h1 className="text-3xl font-bold mb-4">Your Name</h1>
            <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-8">
          <a href='https://github.com/0-yohan' target='_blank' rel="noreferrer"><img src={github} alt="GitHub" className="h-8" /></a>
          <a href='https://www.linkedin.com/in/am3n/' target='_blank' rel="noreferrer"> <img src={linkedin} alt="LinkedIn" className="h-8" /></a>
          <a href='https://www.instagram.com/imameenbtw/' target='_blank' rel="noreferrer"><img src={instagram} alt="Instagram" className="h-8" /></a>
          
          {/* Add other social links */}
        </div>
      </div>
    </div>
  );
};

export default About;
