import React from 'react';
import './styles.css'; 

const ContactForm = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-purple-50">
      <div className="absolute inset-0 h-40 mt-40 bg-purple-200"></div>
      <div className="relative z-10 flex flex-col items-center w-full md:flex-row">
        <div className="flex flex-col items-center justify-center w-full px-8 md:w-1/2">
          <h2 className="text-5xl font-bold text-center text-red-500 md:text-left">WE WOULD LOVE TO HAVE YOU ONBOARD</h2>
          <p className="mt-4 text-xl font-bold text-center text-black md:text-left">Reach out to us for more details</p>
        </div>
        <div className="flex justify-center w-full mt-8 md:w-1/2 md:mt-0">
          <div className="p-6 bg-purple-400 rounded-lg shadow-lg w-80 transition-bg-color hover:bg-purple-500">
            <h3 className="mb-4 text-2xl font-bold text-center text-white">JOIN US!</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Business Name" className="w-full p-3 font-bold text-black bg-purple-300 rounded-md focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 font-bold bg-purple-300 rounded-md focus:outline-none" />
              <input type="tel" placeholder="Phone no." className="w-full p-3 font-bold text-black bg-purple-300 rounded-md focus:outline-none" />
              <select className="w-full p-3 bg-purple-300 rounded-md focus:outline-none">
                <option>Want to register as</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <button type="submit" className="justify-center p-3 ml-24 text-white bg-yellow-500 rounded-md focus:outline-none hover:bg-yellow-600">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

/*import React from 'react';
import './styles.css'; 

const ContactForm = () => {
  return (
    <div className="relative flex flex-col items-center justify-center p-8 bg-purple-50">
      <div className="absolute inset-0 h-40 mt-40 bg-purple-200 md:h-full md:mt-0"></div>
      <div className="relative z-10 flex flex-col items-center w-full md:flex-row md:items-start md:justify-between">
        <div className="flex flex-col items-center justify-center w-full px-8 md:w-1/2">
          <h2 className="text-5xl font-bold text-center text-red-500 md:text-left">WE WOULD LOVE TO HAVE YOU ONBOARD</h2>
          <p className="mt-4 text-xl font-bold text-center text-black md:text-left">Reach out to us for more details</p>
        </div>
        <div className="flex justify-center w-full mt-8 md:w-1/2 md:mt-0">
          <div className="p-6 bg-purple-400 rounded-lg shadow-lg w-80 transition-bg-color hover:bg-purple-500">
            <h3 className="mb-4 text-2xl font-bold text-center text-white">JOIN US!</h3>
            <form className="space-y-4">
              <input type="text" placeholder="Business Name" className="w-full p-3 font-bold text-black bg-purple-300 rounded-md focus:outline-none" />
              <input type="email" placeholder="Email" className="w-full p-3 font-bold bg-purple-300 rounded-md focus:outline-none" />
              <input type="tel" placeholder="Phone no." className="w-full p-3 font-bold text-black bg-purple-300 rounded-md focus:outline-none" />
              <select className="w-full p-3 bg-purple-300 rounded-md focus:outline-none">
                <option>Want to register as</option>
                <option>Option 1</option>
                <option>Option 2</option>
              </select>
              <button type="submit" className="w-full p-3 text-white bg-yellow-500 rounded-md focus:outline-none hover:bg-yellow-600 md:ml-24 md:w-auto">SUBMIT</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
*/