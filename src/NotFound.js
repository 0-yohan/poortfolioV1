import React from 'react';
import { Link } from 'react-router-dom';
import anotherOneBitesTheDust from './assets/anotheronebitesthedust.png';

const NotFound = () => {
  return (

    <div className="bg-white flex flex-col items-center justify-center h-screen">
      {/* Centered Image */}
      <img src={anotherOneBitesTheDust} alt="404 Error" className="h-80 mb-4" />

      {/* Error Text */}
      <div className="text-center">
        <p className="text-2xl font-bold mb-2">Oops! You seem to be lost.</p>
        <p className="mb-4">Here are some helpful links:</p>

        {/* Helpful Links */}
        <nav className="flex flex-col items-center text-blue-600 font-medium">
          <Link to="/" className="mb-2">Home</Link>
          <Link to="/projects" className="mb-2">Projects</Link>
          <Link to="/experience" className="mb-2">Experience</Link>
          <Link to="/contact" className="mb-2">Contact</Link>
        </nav>
      </div>
    </div>
  );
};

export default NotFound;
