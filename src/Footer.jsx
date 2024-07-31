import React from 'react';
import as from './as.png';

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white ">
      <hr />
      <div className="container flex items-center justify-between py-3 mx-auto">
        <div className="flex items-center">
          <img
            src="https://e7.pngegg.com/pngimages/35/114/png-clipart-dog-cat-paw-decal-paw-print-animals-pet-thumbnail.png"
            alt="Logo"
            className="h-12"
          />
          <span className="ml-4 text-xl font-bold text-black">THE PET VIBES</span>
        </div>
        <div className="relative flex ml-32 space-x-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${as}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1, // Adjust this value to control the opacity
              zIndex: 0,
            }}
          ></div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">COMPANY</h2>
            <ul className="mt-5">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="relative z-10">
            <h2 className="text-2xl font-bold">SERVICES</h2>
            <ul className="mt-5">
              <li><a href="#" className="hover:underline">Pet Boarding</a></li>
              <li><a href="#" className="hover:underline">Pet Events</a></li>
              <li><a href="#" className="hover:underline">Pet Cafes</a></li>
            </ul>
          </div>
        </div>
      </div>
      <p className="ml-80">TPV is on a mission to be your trusted bridge, connecting pet owners with passionate</p>
      <p className="ml-80">and skilled pet service providers. With us, pet parents can discover a World of Services</p>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm">&copy; 2024, thepetvibes.com</p>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
/*import React from 'react';
import as from './as.png';

const Footer = () => {
  return (
    <footer className="text-gray-600 bg-white">
      <hr />
      <div className="container flex flex-col items-center justify-between py-3 mx-auto md:flex-row">
        <div className="flex items-center mb-4 md:mb-0">
          <img
            src="https://e7.pngegg.com/pngimages/35/114/png-clipart-dog-cat-paw-decal-paw-print-animals-pet-thumbnail.png"
            alt="Logo"
            className="h-12"
          />
          <span className="ml-4 text-xl font-bold text-black">THE PET VIBES</span>
        </div>
        <div className="relative flex flex-col items-center space-x-0 md:flex-row md:space-x-16">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${as}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.1,
              zIndex: 0,
            }}
          ></div>
          <div className="relative z-10 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">COMPANY</h2>
            <ul className="mt-5 space-y-2 text-center md:text-left">
              <li><a href="#" className="hover:underline">About</a></li>
              <li><a href="#" className="hover:underline">Contact</a></li>
              <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            </ul>
          </div>
          <div className="relative z-10 mb-8 md:mb-0">
            <h2 className="text-2xl font-bold">SERVICES</h2>
            <ul className="mt-5 space-y-2 text-center md:text-left">
              <li><a href="#" className="hover:underline">Pet Boarding</a></li>
              <li><a href="#" className="hover:underline">Pet Events</a></li>
              <li><a href="#" className="hover:underline">Pet Cafes</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center md:text-left">
        <p className="ml-4 md:ml-80">TPV is on a mission to be your trusted bridge, connecting pet owners with passionate</p>
        <p className="ml-4 md:ml-80">and skilled pet service providers. With us, pet parents can discover a World of Services</p>
      </div>
      <div className="container mx-auto mt-8 text-center">
        <p className="text-sm">&copy; 2024, thepetvibes.com</p>
      </div>
      <hr />
    </footer>
  );
};

export default Footer;
*/