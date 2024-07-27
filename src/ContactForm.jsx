import React from 'react';
function ContactForm() {
  return (
    <section id="contact" className="py-12 bg-purple-100 ">
      <div className="container flex mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">We Would Love to Have You Onboard</h2>
        <form className="max-w-lg px-5 mx-auto mt-8 bg-purple-400 rounded-lg">
          <h1 className='text-2xl font-bold text-white'>Join us</h1>
          <div className="grid grid-cols-1 gap-4">
            <input type="text" placeholder="Business Name" className="px-4 py-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Your Name" className="px-4 py-2 border border-gray-300 rounded" />
            <input type="email" placeholder="Email" className="px-4 py-2 border border-gray-300 rounded" />
            <input type="text" placeholder="Phone" className="px-4 py-2 border border-gray-300 rounded" />
            <textarea placeholder="What to register as" className="px-4 py-2 border border-gray-300 rounded"></textarea>
          </div>
          <button className="px-4 py-2 mt-4 text-white bg-yellow-600 rounded">Submit</button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
