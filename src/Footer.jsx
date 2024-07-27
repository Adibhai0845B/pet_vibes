import React from 'react';

function Footer() {
  return (
    <footer className="py-8 bg-purple-100">
      <div className="container mx-auto text-center">
        <p className="text-purple-700">&copy; 2024 The Pet Vibes. All Rights Reserved.</p>
           
        <div className='flex justify-center'>
        <ul className="justify-center mt-4 space-x-4 ">
          <li>Company</li>
          <li><a href="#home" className="text-purple-700">Home</a></li>
          <li><a href="#about" className="text-purple-700">About Us</a></li>
          <li><a href="#services" className="text-purple-700">Categories</a></li>
          <li><a href="#contact" className="text-purple-700">Contact</a></li>
        </ul>
        <ul className="justify-center mt-4 space-x-4 px-9">
          <li>Services</li>
          <li><a href="#home" className="text-purple-700">Pet</a></li>
          <li><a href="#about" className="text-purple-700">Pet</a></li>
          <li><a href="#services" className="text-purple-700">Pet Caring</a></li>
          <li><a href="#contact" className="text-purple-700">Pet Filtering</a></li>
        </ul>
      </div>
      </div>
    </footer>
  );
}

export default Footer;
