import React from 'react';

function Services() {
  return (
    <section id="services" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Services We Offer</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-4">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="data:image/jpeg;base64,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" alt="Pet Boarding" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Boarding</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdAFo0k7DfPp5L2ysBtrxJvrfe2zLLDBKaqQ&s" alt="Pet Cafe" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Cafes</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="data:image/jpeg;base64,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" alt="Pet Events" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Events</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <br></br>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQW6_Q3w_YBumzEtRiHc-th_QYqDhDvEgYljA&s" alt="Pet Boarding" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Boarding</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPrk6jwwQe16lzUYWYJ3EpzbNEkieuAcLb2A&s" alt="Pet Cafe" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Cafes</h3>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTk8hbnYsb6049JTiTshc9IbHZhz5koPExFBQ&s" alt="Pet Events" className="object-cover w-full h-32 rounded-lg" />
            <h3 className="mt-4 text-lg font-semibold text-gray-700">Pet Events</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;