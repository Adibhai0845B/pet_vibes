/*import React from 'react';
import ineed from './ineed.jpg';
function Header() {
  return (
    <header className="p-8 bg-white-100">
      <div className="container flex items-center justify-between mx-auto">
        <div className="flex items-center">
          <img src="https://e7.pngegg.com/pngimages/35/114/png-clipart-dog-cat-paw-decal-paw-print-animals-pet-thumbnail.png" alt="Logo" className="h-12" />
          <span className="ml-4 text-xl font-bold text-black ">The Pet Vibes</span>
          <hr className="my-8 border-t-2 border-purple-700" />
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#home" className="px-4 text-2xl text-black">Home</a></li>
            <li><a href="#about" className="px-4 text-2xl text-black">About Us</a></li>
            <li><a href="#services" className="px-4 text-2xl text-black">Categories</a></li>
            <li><a href="#contact" className="px-4 text-2xl text-black">Contact</a></li>
          </ul>
        </nav>
      </div>
      <hr></hr>
      <div className="flex items-center justify-between mt-8 " style={{ backgroundImage: `url(${ineed})`, }}>
        <div className='ml-72'>
        <img src="https://th.bing.com/th/id/OIP.GQ5thXeQkyIPgEwE8K9l-QHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="Pet" className="mr-8 h-72 rounded-3xl"  />
         </div>
        <div className="ml-10 text-right mr-80">
          <h1 className="text-6xl font-bold text-purple-500">One-stop destination for all</h1>
          <h1 className="py-2 text-5xl font-bold text-purple-500"> things pet-related</h1>
          <div>
          <p className="mt-4 text-2xl font-bold text-purple-400">Discover the best experiences for your pet!</p>
          </div>
          <button className="w-1/4 px-4 py-2 mt-4 mr-40 text-xl font-bold text-white bg-yellow-500 rounded-3xl">Join Us  </button>
        </div>
      </div>
    </header>
  );
}

export default Header; */ 
import React from 'react';
import ineed from './ineed.jpg';

function Header() {
  return (
    <header className="p-8 bg-white-100">
      <div className="container flex flex-col items-center justify-between mx-auto lg:flex-row">
        <div className="flex items-center mb-4 lg:mb-0">
          <img 
            src="https://e7.pngegg.com/pngimages/35/114/png-clipart-dog-cat-paw-decal-paw-print-animals-pet-thumbnail.png" 
            alt="Logo" 
            className="h-8 sm:h-10 md:h-12" 
          />
          <span className="ml-2 text-lg font-bold text-black sm:ml-4 sm:text-xl">The Pet Vibes</span>
        </div>
        <nav>
          <ul className="flex flex-col space-y-2 lg:flex-row lg:space-y-0 lg:space-x-4">
            <li><a href="#home" className="px-2 text-lg text-black sm:px-4 sm:text-2xl">Home</a></li>
            <li><a href="#about" className="px-2 text-lg text-black sm:px-4 sm:text-2xl">About Us</a></li>
            <li><a href="#services" className="px-2 text-lg text-black sm:px-4 sm:text-2xl">Categories</a></li>
            <li><a href="#contact" className="px-2 text-lg text-black sm:px-4 sm:text-2xl">Contact</a></li>
          </ul>
        </nav>
      </div>
      <hr className="my-8 border-t-2 border-purple-700" />
      <div className="flex flex-col items-center justify-between mt-8 lg:flex-row" style={{ backgroundImage: `url(${ineed})` }}>
        <div className="mb-4 lg:mb-0 lg:ml-72">
          <img 
            src="https://th.bing.com/th/id/OIP.GQ5thXeQkyIPgEwE8K9l-QHaEo?w=316&h=197&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
            alt="Pet" 
            className="w-48 h-48 sm:w-64 sm:h-64 md:w-72 md:h-72 rounded-3xl" 
          />
        </div>
        <div className="text-center lg:text-right lg:mr-80">
          <h1 className="text-3xl font-bold text-purple-500 sm:text-4xl md:text-6xl">One-stop destination for all</h1>
          <h1 className="py-2 text-2xl font-bold text-purple-500 sm:text-3xl md:text-5xl">things pet-related</h1>
          <p className="mt-4 text-lg font-bold text-purple-400 sm:text-xl md:text-2xl">Discover the best experiences for your pet!</p>
          <button className="w-full px-4 py-2 mt-4 text-lg font-bold text-white bg-yellow-500 sm:w-3/4 md:w-1/4 sm:text-xl rounded-3xl">Join Us</button>
        </div>
      </div>
    </header>
  );
}

export default Header;
