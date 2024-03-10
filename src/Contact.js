// Contact.js
import React, { useState } from 'react';
// import axios from 'axios';
import github from "./assets/github.png";
// import email from "./assets/email.png";
import linkedin from "./assets/linkedin.png";
import Header from "./Header";
import instagram from './assets/instagram.png';
import {useEffect } from 'react';
import Loading from './Loading';
import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { Helmet } from 'react-helmet';
// import emailjs from 'emailjs-com';



const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await axios.post('/.netlify/functions/sendMail', formData);

  //     console.log(response.data.message);
  //   } catch (error) {
  //     console.error('Error submitting form:', error);
  //   }
  // };
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate an asynchronous operation (e.g., fetching data)
    const fetchData = async () => {
      // Perform data fetching logic here

      // Set loading to false once data is fetched
      setIsLoading(false);
    };

    fetchData();
  }, []);

  // Render the loading component if still loading
  if (isLoading) {
    return <Loading />;
  }

  const sendEmail = (e) => {
    e.preventDefault();
  
    emailjs.sendForm(
      process.env.REACT_APP_SERVICE_ID,
      process.env.REACT_APP_TEMPLATE_ID,
      form.current,
      process.env.REACT_APP_PUBLIC_KEY
    )
      .then(
        (response) => {
          console.log('Success:', response);
          alert('Message successfully sent!');
          window.location.reload(false);
        },
        (error) => {
          console.error('Failed to send the message:', error);
          alert('Failed to send the message, please try again');
        }
      );
  };
  

  return (
    <div className="bg-black text-white">
      <Helmet>
        <title>Portfolio | Contact</title>
      </Helmet>
      
      <Header/>

      {/* Contact Form */}
      <div className="max-w-screen-xl mx-auto p-8 mt-24">
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

        <form ref={form} onSubmit={sendEmail} name="contact" method="POST" className="flex flex-col space-y-4 content-center text-black">
  {/* Name */}
  <input
  type="text"
  name="name"
  value={formData.name}
  onChange={handleChange}
  placeholder="Your Name"
  className="p-2 border border-white rounded-md"
  required
  />
  {/* Email */}
  <input
    type="email"
    name="email"
    value={formData.email}
    onChange={handleChange}
    placeholder="Your Email"
    className="p-2 border border-white rounded-md"
    required
  />

  {/* Message */}
  <textarea
    name="message"
    value={formData.message}
    onChange={handleChange}
    placeholder="Your Message"
    rows="8"
    className="p-2 border border-white rounded-md resize-none"
    required
  />

  {/* Submit Button */}
  <button type="submit" value="Send" className="bg-blue-500 text-white font py-2 px-4 rounded-md w-150 mx-auto hover:bg-blue-700">
    Send Message
  </button>
</form>

      </div>
      <div className='flex justify-center'>
        Or mail me @ <div className='text-blue-500 mx-1'>afor1m3en@gmail.com</div>
      </div>
      <div className="flex space-x-4 mt-8 justify-center">
          <a href='https://github.com/0-yohan' target='_blank' rel="noreferrer"><img src={github} alt="GitHub" className="h-8" /></a>
          <a href='https://www.linkedin.com/in/am3n/' target='_blank' rel="noreferrer"> <img src={linkedin} alt="LinkedIn" className="h-8" /></a>
          <a href='https://www.instagram.com/imameenbtw/' target='_blank' rel="noreferrer"><img src={instagram} alt="Instagram" className="h-8" /></a>
          {/* <button onClick={() => window.location = 'mailto:afor1m3en@gmail.com'}><img src={email} alt='Email' className='h-8'/></button> */}
          {/* <a href='https://github.com/0-yohan' target='_blank' rel="noreferrer"><img src={email} alt="Email" className="h-8" /></a> */}
        </div>
    </div>
  );
};

export default Contact;
