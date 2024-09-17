import React, { useState, useEffect } from "react";
import axios from "axios";

const Contact = () => {
  useEffect(() => {
    document.title = "Contact Us"; // Change the page title
  }, []);

  // Form state
  const [formData, setFormData] = useState({
    full_name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Error state
  const [errors, setErrors] = useState({});

  // Success message state
  const [successMessage, setSuccessMessage] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Validate the form
  const validate = () => {
    let tempErrors = {};
    if (!formData.full_name) tempErrors.full_name = "Full Name is required.";
    if (!formData.email) {
      tempErrors.email = "Email Address is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = "Email Address is invalid.";
    }
    if (!formData.subject) tempErrors.subject = "Subject is required.";
    if (!formData.message) tempErrors.message = "Message is required.";

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0; // If no errors, return true
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form inputs before sending
    if (validate()) {
      try {
        const response = await axios.post(
          "http://localhost:8000/api/contact",
          formData
        );

        // Handle successful response
        setSuccessMessage(response.data.message);
        setFormData({ full_name: "", email: "", subject: "", message: "" }); // Clear the form
        setErrors({}); // Clear errors
      } catch (error) {
        // Handle error response (if any)
        console.error("There was an error!", error);
      }
    }
  };

  return (
    <div className="py-16 px-4 mt-[100px] font-bold">
      <div className="max-w-3xl mx-auto ">
        <h2 className="text-3xl font-bold font-myFont text-center text-gray-800 mb-6">
          Contact Us
        </h2>
        <p className="text-center text-gray-600  mb-8">
          Have any questions? Feel free to reach out!
        </p>
        {/* Success Message */}
        {successMessage && (
          <div className="mt-2 text-center text-green-500">
            {successMessage}
          </div>
        )}
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1  md:grid-cols-2 gap-6">
            <div>
              <label className="block mb-2 text-gray-700">Full Name</label>
              <input
                type="text"
                name="full_name"
                value={formData.full_name}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Your Name"
              />
              {errors.full_name && (
                <p className="text-red-500">{errors.full_name}</p>
              )}
            </div>
            <div>
              <label className="block mb-2 text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="you@example.com"
              />
              {errors.email && <p className="text-red-500">{errors.email}</p>}
            </div>
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-gray-700">Subject</label>
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Subject"
            />
            {errors.subject && <p className="text-red-500">{errors.subject}</p>}
          </div>
          <div className="mt-6">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="6"
              placeholder="Write your message here..."
            ></textarea>
            {errors.message && <p className="text-red-500">{errors.message}</p>}
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
