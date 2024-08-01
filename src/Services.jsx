/*import React from 'react';
function Services() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="mb-8 text-4xl font-bold">SERVICES WE OFFER</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-100 bg-opacity-50 rounded-lg">
              <h3 className="text-4xl font-bold text-purple-500">PET BOARDING</h3>
              <svg className="w-6 h-6 mt-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img src="https://th.bing.com/th/id/OIP.8F-jnzPoMXYGBPRv3Q4ikwHaEc?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" className="object-cover w-full h-64 rounded-lg shadow-md" />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-white"></h3>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-100 bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-500">PET CAFES</h3>
              <svg className="w-6 h-6 mt-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk6jwwQe16lzUYWYJ3EpzbNEkieuAcLb2A&s" className="object-cover w-full h-64 rounded-lg shadow-md" />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex items-center justify-center bg-purple-100 bg-opacity-50 rounded-2xl">
              <h3 className="text-3xl font-bold text-purple-500">PET EVENTS</h3>
              <svg className="w-6 h-6 mt-2 text-purple-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8hbnYsb6049JTiTshc9IbHZhz5koPExFBQ&s" className="object-cover w-full h-64 rounded-lg shadow-md" />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
              <h3 className="text-3xl font-bold text-white"></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
*/
import React from 'react';
import './styles.css'; 
function Services() {
  return (
    <section className="py-12 bg-gray-100">
      <div className="container px-4 mx-auto text-center">
        <h2 className="mb-8 text-3xl font-bold sm:text-4xl">SERVICES WE OFFER</h2>
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-100 bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-500 sm:text-3xl md:text-4xl">PET BOARDING</h3>
              <svg className="w-4 h-4 mt-2 text-purple-500 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://th.bing.com/th/id/OIP.8F-jnzPoMXYGBPRv3Q4ikwHaEc?w=296&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7" 
              className="object-cover w-full h-48 rounded-lg shadow-md sm:h-56 md:h-64" 
              alt="Pet Boarding"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-white"></h3>
            </div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-100 bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-500 sm:text-3xl">PET CAFES</h3>
              <svg className="w-4 h-4 mt-2 text-purple-500 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk6jwwQe16lzUYWYJ3EpzbNEkieuAcLb2A&s" 
              className="object-cover w-full h-48 rounded-lg shadow-md sm:h-56 md:h-64" 
              alt="Pet Cafes"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg"></div>
          </div>
          <div className="relative">
            <div className="absolute inset-0 flex flex-col items-center justify-center bg-purple-100 bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-purple-500 sm:text-3xl md:text-4xl">PET EVENTS</h3>
              <svg className="w-4 h-4 mt-2 text-purple-500 sm:w-5 sm:h-5 md:w-6 md:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
              </svg>
            </div>
          </div>
          <div className="relative">
            <img 
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8hbnYsb6049JTiTshc9IbHZhz5koPExFBQ&s" 
              className="object-cover w-full h-48 rounded-lg shadow-md sm:h-56 md:h-64" 
              alt="Pet Events"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-opacity-50 rounded-lg">
              <h3 className="text-2xl font-bold text-white"></h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
