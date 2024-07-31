import React from 'react';

const blogs = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR515oznNgiGj3dD01gQFy5jRV8WpHXpQFgOQ&s', 
    title: 'TRAVEL'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDFp3dmPTGj1xOEuSlAt-ilTfBOmYfth5hQ&s", 
    title: 'NUTRITION'
  },
  {
    image: 'https://th.bing.com/th/id/OIP.GeAA0FO3BwC_e47_zDJbsgHaEo?w=271&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7', // replace with actual image URL
    title: 'SENIOR DOG CARE'
  },
  {
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/16/1/shutterstock_1862856634.jpg.rend.hgtvcom.1280.1280.suffix/1655430860853.jpeg', // replace with actual image URL
    title: 'BEHAVIOUR'
  }
];

const Blogs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white ">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">INTERESTING BLOGS</h2>
      <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col items-center ">
            <img src={blog.image} alt={blog.title} className="object-cover w-64 h-64 rounded-t-lg" />
            <div className="w-64 gap-4 p-4 bg-yellow-500 rounded-b-lg">
              <h3 className="text-lg font-bold text-center text-black">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;

/*import React from 'react';

const blogs = [
  {
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR515oznNgiGj3dD01gQFy5jRV8WpHXpQFgOQ&s', 
    title: 'TRAVEL'
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgDFp3dmPTGj1xOEuSlAt-ilTfBOmYfth5hQ&s", 
    title: 'NUTRITION'
  },
  {
    image: '', // replace with actual image URL
    title: 'SENIOR DOG CARE'
  },
  {
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/fullset/2022/6/16/1/shutterstock_1862856634.jpg.rend.hgtvcom.1280.1280.suffix/1655430860853.jpeg', 
    title: 'BEHAVIOUR'
  }
];

const Blogs = () => {
  return (
    <div className="flex flex-col items-center p-8 bg-white">
      <h2 className="mb-8 text-3xl font-bold text-gray-800">INTERESTING BLOGS</h2>
      <div className="grid grid-cols-1 gap-11 md:grid-cols-2 lg:grid-cols-4">
        {blogs.map((blog, index) => (
          <div key={index} className="flex flex-col items-center">
            <img src={blog.image} alt={blog.title} className="object-cover w-64 h-64 rounded-t-lg" />
            <div className="w-64 gap-4 p-4 bg-yellow-500 rounded-b-lg">
              <h3 className="text-lg font-bold text-center text-black">{blog.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
*/