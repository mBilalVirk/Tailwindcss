import React from "react";

const Contact = () => {
  return (
    <div className="py-16 px-4 mt-[100px] font-bold">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-3xl font-bold font-myFont text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600  mb-8">
          Have any questions? Feel free to reach out!
        </p>
        <form>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
            </div>
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-gray-700">Subject</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Write your message here..."
            ></textarea>
          </div>
          <div className="mt-6 text-center">
            <button
              type="submit"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
