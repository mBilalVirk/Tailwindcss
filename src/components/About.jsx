import { React, useEffect } from "react";

const About = () => {
  useEffect(() => {
    document.title = "About"; // Change the page title
  }, []);
  return (
    <div className="mt-[100px] py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left side (Image) */}
          <div className="w-full md:w-1/2 mb-8 md:mb-0">
            <img
              className="rounded-lg shadow-lg"
              src="https://via.placeholder.com/400x267"
              alt="About Us"
            />
          </div>

          {/* Right side (Content) */}
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl font-bold text-gray-800 mb-4">About Us</h2>
            <p className="text-gray-600 mb-6">
              We are passionate about delivering the best products and services
              to our customers. Our team is made up of experienced professionals
              committed to innovation and excellence. We strive to build strong
              relationships and create value for our clients in everything we
              do.
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li className="mb-2">Dedicated Team of Experts</li>
              <li className="mb-2">Over 10 Years of Experience</li>
              <li className="mb-2">Customer-Centric Approach</li>
            </ul>
            <a
              href="#"
              className="inline-block bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
