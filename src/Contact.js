// Contact.js
import React, { useState } from 'react';
import axios from 'axios';
import github from "./assets/github.png";
import linkedin from "./assets/linkedin.png";
import Header from "./Header";
import instagram from './assets/instagram.png';



const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/.netlify/functions/sendMail', formData);

      console.log(response.data.message);
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };


  return (
    <div className="bg-black text-white">
      {/* Your existing header component */}
      <Header/>

      {/* Contact Form */}
      <div className="max-w-screen-xl mx-auto p-8 mt-24">
        <h1 className="text-3xl font-bold mb-8">Contact Me</h1>

        <form onSubmit={handleSubmit} className="flex flex-col space-y-4 content-center text-black">
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
          <button type="submit" className="bg-blue-500 text-white font py-2 px-4 rounded-md w-150 mx-auto hover:bg-blue-700">
            Send Message
          </button>
        </form>
      </div>
      <div className="flex space-x-4 mt-8 justify-center">
          <a href='https://github.com/0-yohan' target='_blank' rel="noreferrer"><img src={github} alt="GitHub" className="h-8" /></a>
          <a href='https://www.linkedin.com/in/am3n/' target='_blank' rel="noreferrer"> <img src={linkedin} alt="LinkedIn" className="h-8" /></a>
          <a href='https://www.instagram.com/imameenbtw/' target='_blank' rel="noreferrer"><img src={instagram} alt="Instagram" className="h-8" /></a>
        </div>
    </div>
  );
};

export default Contact;
