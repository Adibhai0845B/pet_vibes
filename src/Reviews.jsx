import React from 'react';
function Reviews() {
  return (
    <section id="reviews" className="py-12 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold text-gray-800">Customer Reviews</h2>
        <div className="grid grid-cols-1 gap-8 mt-8 md:grid-cols-2 lg:grid-cols-3">
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
            <div className="mt-4 text-yellow-500">★★★★★</div>
            <p className="mt-2 text-gray-700">Lora Smith</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
            <div className="mt-4 text-yellow-500">★★★★★</div>
            <p className="mt-2 text-gray-700">Lora Smith</p>
          </div>
          <div className="p-6 bg-white rounded-lg shadow-lg">
            <p className="text-gray-600">"It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."</p>
            <div className="mt-4 text-yellow-500">★★★★★</div>
            <p className="mt-2 text-gray-700">Lora Smith</p>
          </div>
          {/* Repeat similar blocks for more reviews */}
        </div>
      </div>
    </section>
  );
}
export default Reviews;
