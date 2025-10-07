'use client'
import React, { useState } from 'react';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    surname: '',
    email: '',
    phone: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Add form submission logic here
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 to-blue-300 flex flex-col items-center justify-center p-6">
      <div className="max-w-3xl w-full bg-white shadow-2xl rounded-lg overflow-hidden mb-12">
        <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white text-center py-8">
          <h1 className="text-4xl font-bold">Contact Us</h1>
          <p className="mt-2 text-lg">We'd love to hear from you! Please fill out the form below.</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="p-8 space-y-6"
        >
          <div className="relative">
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div className="relative">
            <label htmlFor="surname" className="block text-sm font-medium text-gray-700">
              Surname
            </label>
            <input
              type="text"
              id="surname"
              name="surname"
              value={formData.surname}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your surname"
            />
          </div>
          <div className="relative">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div className="relative">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="mt-1 p-3 w-full border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Enter your phone number"
            />
          </div>
          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-800 text-white py-3 px-4 rounded-lg font-semibold hover:shadow-lg hover:scale-105 transition duration-300"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Company Details */}
      <div className="max-w-4xl w-full bg-white shadow-2xl rounded-lg p-8">
        <h2 className="text-3xl font-bold mb-6 text-center text-blue-800">Our Contact Details</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Address</h3>
            <p className="text-gray-600 mt-2">123 Healthcare Street, Seoul, South Korea</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Phone</h3>
            <p className="text-gray-600 mt-2">+82 10 4440 1082</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Email</h3>
            <p className="text-gray-600 mt-2">info@medihelpkorea.com</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-blue-700">Follow Us</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://www.instagram.com/medihelpkorea?igsh=MXU1dXpvcDBidmpiZQ==" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">Facebook</a>
              <a href="https://www.instagram.com/medihelpkorea?igsh=MXU1dXpvcDBidmpiZQ==" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:underline">Twitter</a>
              <a href="https://www.instagram.com/medihelpkorea?igsh=MXU1dXpvcDBidmpiZQ==" target="_blank" rel="noopener noreferrer" className="text-pink-600 hover:underline">Instagram</a>
              <a href="https://www.instagram.com/medihelpkorea?igsh=MXU1dXpvcDBidmpiZQ==" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:underline">LinkedIn</a>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <h3 className="text-lg font-semibold text-blue-700">Find Us on the Map</h3>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.915345123456!2d126.9782913153169!3d37.5665359797986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357ca2d0f1234567%3A0x123456789abcdef!2sSeoul%2C%20South%20Korea!5e0!3m2!1sen!2skr!4v1691234567890!5m2!1sen!2skr"
            width="100%"
            height="300"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            className="rounded-lg shadow-md"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
