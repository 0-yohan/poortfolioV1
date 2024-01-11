import React, { useState, useEffect } from 'react';
import me from "./assets/me-mask.jpg";
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Header from "./Header";
import instagram from './assets/instagram.png';
import Loading from './Loading';

const About = () => {
  const [isLoading, setIsLoading] = useState(true);
  const greetings = ['Hello', 'Hey', 'Hola', 'Salam'];
  const [currentGreeting, setCurrentGreeting] = useState(0);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform your data fetching logic here

      // Set loading to false once data is fetched
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Update the greeting every 2 seconds
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length);
    }, 2000);

    return () => clearInterval(intervalId);
  },);

  // Render the loading component if still loading
  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className='bg-black text-white'>
      <Header />

      <div className="flex flex-col items-center justify-center min-h-screen px-4 md:px-8 md:pl-32">
        {/* Your Photo and Information */}
        <div className="flex flex-col md:flex-row items-center md:space-x-8 mt-32">
          <img src={me} alt="Me" className="w-full md:w-1/2 max-w-md rounded-full mb-8 md:mb-0" />

          <div className="md:w-1/2 pl-4 text-center md:text-left">
            <h1 className="text-4xl font-bold mb-4 text-blue-600">{greetings[currentGreeting]}</h1>
            <p className="text-lg mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              <br />Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.</p>

            {/* Download Resume Button */}
            <a
              href="https://drive.google.com/file/d/1_gcFmMgekkCpwolHaJC4Fdq_gtt-DOqz/view?usp=sharing"  // Replace with the actual path to your resume
              download="YourResume.pdf"
              className="bg-black text-white text-bold border-2 border-blue-500 mt-6 px-6 py-3 rounded-lg hover:bg-blue-500 hover:text-black transition duration-300 inline-block"
            >
              Résumé
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex space-x-4 mt-8 justify-center">
          <a href='https://github.com/0-yohan' target='_blank' rel="noreferrer"><img src={github} alt="GitHub" className="h-8" /></a>
          <a href='https://www.linkedin.com/in/am3n/' target='_blank' rel="noreferrer"> <img src={linkedin} alt="LinkedIn" className="h-8" /></a>
          <a href='https://www.instagram.com/imameenbtw/' target='_blank' rel="noreferrer"><img src={instagram} alt="Instagram" className="h-8" /></a>
        </div>
      </div>
    </div>
  );
};

export default About;
