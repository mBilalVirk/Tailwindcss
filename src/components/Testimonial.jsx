// src/components/Testimonials.js
import React from "react";

const testimonials = [
  {
    id: 1,
    name: "John Doe",
    title: "CEO of Company",
    image: "https://via.placeholder.com/150",
    quote:
      "This product has changed my life for the better! Highly recommend to everyone.",
  },
  {
    id: 2,
    name: "Jane Smith",
    title: "CTO of Another Company",
    image: "https://via.placeholder.com/150",
    quote: "Amazing service and support. Couldn't ask for more.",
  },
  {
    id: 3,
    name: "Joseph ",
    title: "CTO of Another Company",
    image: "https://via.placeholder.com/150",
    quote: "Amazing service and support. Couldn't ask for more.",
  },
  // Add more testimonials here
];

const Testimonials = () => {
  return (
    <div className=" py-12 mx-4">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="lg:text-7xl text-4xl md:text-5xl font-bold tracking-tight text-gray-900 text-center">
          Whats Our
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-blue-800 to-gray-900">
            Customer Says
          </span>
        </h1>
        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 sm:grid-col ">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  className="w-16 h-16 rounded-full"
                  src={testimonial.image}
                  alt={testimonial.name}
                />
                <div>
                  <h3 className="text-lg font-medium text-gray-900">
                    {testimonial.name}
                  </h3>
                  <p className="text-sm text-gray-500">{testimonial.title}</p>
                </div>
              </div>
              <p className="mt-4 text-gray-600">{testimonial.quote}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
