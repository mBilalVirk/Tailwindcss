import React, { useState } from "react";

const Blogs = () => {
  const BlogsData = [
    {
      id: 1,
      title: "Exploring the Beauty of Nature",
      date: "April 4, 2023",
      image: "http://unsplash.it/600/400?random&gravity=center",
      content: [
        "Nature offers a beautiful respite from the busy city life. The fresh air and breathtaking landscapes bring peace and tranquility.",
        "In this blog, we will explore the most beautiful natural wonders that you can visit around the world.",
        "Whether you enjoy hiking through forests, walking along beaches, or simply enjoying a picnic in a park, nature has something for everyone.",
      ],
    },
    {
      id: 2,
      title: "The Future of Artificial Intelligence",
      date: "May 15, 2023",
      image: "http://unsplash.it/600/400?random&gravity=center",
      content: [
        "Artificial Intelligence (AI) is transforming industries and redefining the future of work and technology.",
        "In this blog, we delve into the latest advancements in AI and its potential impact on society.",
        "From self-driving cars to personalized healthcare, AI is set to revolutionize our daily lives in the coming decades.",
      ],
    },
    {
      id: 3,
      title: "Mastering the Art of Cooking",
      date: "June 30, 2023",
      image: "http://unsplash.it/600/400?random&gravity=center",
      content: [
        "Cooking is not just about making food; it is an art form that requires creativity, passion, and skill.",
        "In this blog, we will share tips and recipes that can help you become a master in the kitchen.",
        "Whether you are a beginner or an experienced cook, there's always something new to learn in the world of culinary arts.",
      ],
    },
    {
      id: 4,
      title: "Top Travel Destinations for 2024",
      date: "July 10, 2023",
      image: "https://dummyimage.com/600x400.png?text=PlaceHolder",
      content: [
        "With the world opening up again, many are eager to explore new travel destinations.",
        "This blog highlights the top travel destinations for 2024, including hidden gems and popular tourist spots.",
        "From tropical beaches to cultural landmarks, these destinations are perfect for your next adventure.",
      ],
    },
  ];

  // State to keep track of the selected blog
  const [selectedBlog, setSelectedBlog] = useState(BlogsData[0]);

  return (
    <div className="flex flex-col mt-[100px] container mx-auto">
      <div className="py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-gray-800 mb-2">
            {selectedBlog.title}
          </h1>
          <p className="text-gray-600">Published on {selectedBlog.date}</p>
        </div>
      </div>
      <div className="bg-white py-8">
        <div className="container mx-auto px-4 flex flex-col md:flex-row">
          <div className="w-full md:w-3/4 px-4">
            <img
              src={selectedBlog.image}
              alt="Blog Featured Image"
              className="mb-8"
            />
            <div className="prose max-w-none">
              {selectedBlog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/4 px-4">
            <div className="bg-gray-100 p-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Recent Posts
              </h2>
              <ul className="list-none">
                {BlogsData.map((recentBlog) => (
                  <li key={recentBlog.id} className="mb-2">
                    {/* Clicking on the title will update the selectedBlog state */}
                    <a
                      href="#"
                      className="text-gray-700 hover:text-gray-900"
                      onClick={() => setSelectedBlog(recentBlog)}
                    >
                      {recentBlog.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-gray-100 p-4 mt-4">
              <h2 className="text-xl font-bold text-gray-800 mb-4">
                Categories
              </h2>
              <ul className="list-none">
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Technology
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Nature
                  </a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-gray-700 hover:text-gray-900">
                    Cooking
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
