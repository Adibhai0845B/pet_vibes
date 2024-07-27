import React from 'react';

function AboutUs() {
  return (
    <section id="about" className="py-12 bg-purple-50">
      <div className="container flex flex-col items-center mx-auto md:flex-row">
        <div className="md:w-1/2">
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRv7bT3iucXC9az6edjys0dNtz3WAXNYGD2SA&s" alt="About Us" className="rounded-lg" />
        </div>
        <div className="mt-8 md:w-1/2 md:mt-0 md:pl-8">
          <h2 className="text-3xl font-bold text-purple-700">Who Are We?</h2>
          <p className="mt-4 text-purple-600">
            We understand that your pets aren’t just animals; they are cherished members of your family, deserving only the absolute best. In a world flooded with options, finding the perfect pet service provider is like navigating a jungle without a compass. That's where we come in.
          </p>
          <ul className="mt-4 space-y-2 text-purple-600">
            <li>Trusted Connections</li>
            <li>Community Approved Providers</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
