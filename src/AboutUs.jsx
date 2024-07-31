import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-purple-100">
      <h2 className="text-2xl font-bold text-red-500 ml-60">WHO ARE WE?</h2>
      <div className="flex flex-col items-center w-full md:flex-row">
        <div className="flex flex-col items-center w-full md:w-1/2">
          <div className="relative items-center md:w-1/4">
            <div className="absolute w-48 bg-yellow-500 h-96 -left-2 ml-36"></div>
            <img src="https://th.bing.com/th/id/OIP.5aKhA8rhSGnJzNnkGJgtLwHaLH?rs=1&pid=ImgDetMain" alt="Pet" className="relative object-cover mb-4 rounded-lg w-60 h-60" />
            <img src="https://th.bing.com/th?id=OIP.89LoFPju3rdgyk8r-G_gOQHaFD&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Pet Owner" className="relative object-cover rounded-lg ml-52 h-28" />
          </div>
        </div>
        <div className="w-full md:w-1/2 mr-96md:pl-8">
          <div>
            <p className="mb-4 text-xl text-gray-700 ">
              We understand that your pets aren't just animals; they are cherished members of your family, deserving only the absolute best. In a world flooded with options, finding the perfect pet service provider is like navigating a jungle without a compass. That's where we come in - ThePetVibes; connecting pet parents to a world of boarding houses, clinics, pet care services, and town events they didn't know they needed!
            </p>
            <p className="mb-4 text-xl text-gray-700">
              ThePetVibes is not just a platform; it's a community that understands the unique needs of your furry friends and builds relationships based on trust, love & commitment.
            </p>
            <p className="text-2xl font-bold text-purple-600">👉🏻 TRUSTED CONNECTIONS</p>
            <p className="text-2xl font-bold text-purple-600">👉🏻 COMMUNITY APPROVED PROVIDERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

/*import React from 'react';

const AboutUs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-purple-100">
      <h2 className="text-2xl font-bold text-red-500 md:ml-60">WHO ARE WE?</h2>
      <div className="flex flex-col items-center w-full mt-4 md:flex-row">
        <div className="relative flex flex-col items-center w-full md:w-1/2">
          <div className="absolute w-48 bg-yellow-500 h-96 -z-10 md:-left-2 md:ml-36"></div>
          <img src="https://th.bing.com/th/id/OIP.5aKhA8rhSGnJzNnkGJgtLwHaLH?rs=1&pid=ImgDetMain" alt="Pet" className="relative object-cover mb-4 rounded-lg w-60 h-60" />
          <img src="https://th.bing.com/th?id=OIP.89LoFPju3rdgyk8r-G_gOQHaFD&w=302&h=206&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2" alt="Pet Owner" className="relative object-cover rounded-lg h-28 md:ml-52" />
        </div>
        <div className="w-full mt-8 md:mt-0 md:w-1/2 md:pl-8">
          <div>
            <p className="mb-4 text-xl text-gray-700">
              We understand that your pets aren't just animals; they are cherished members of your family, deserving only the absolute best. In a world flooded with options, finding the perfect pet service provider is like navigating a jungle without a compass. That's where we come in - ThePetVibes; connecting pet parents to a world of boarding houses, clinics, pet care services, and town events they didn't know they needed!
            </p>
            <p className="mb-4 text-xl text-gray-700">
              ThePetVibes is not just a platform; it's a community that understands the unique needs of your furry friends and builds relationships based on trust, love & commitment.
            </p>
            <p className="text-2xl font-bold text-purple-600">👉🏻 TRUSTED CONNECTIONS</p>
            <p className="text-2xl font-bold text-purple-600">👉🏻 COMMUNITY APPROVED PROVIDERS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
*/