import React, { useState, useEffect } from "react";
import axios from "axios";

const Blogs = () => {
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    document.title = "Blogs"; // Change the page title
  }, []);
  useEffect(() => {
    axios
      .get("http://localhost:8000/api/blogs")
      .then((response) => {
        setBlogs(response.data);
        setSelectedBlog(response.data[0]); // Select the first blog by default
      })
      .catch((error) => {
        console.error("There was an error fetching the blogs!", error);
      });
  }, []);

  // Function to filter blogs by category
  const filterByCategory = (category) => {
    axios
      .get(`http://localhost:8000/api/blogs/category/${category}`)
      .then((response) => {
        setBlogs(response.data);
        setSelectedBlog(response.data[0]); // Select the first blog of the filtered category
      })
      .catch((error) => {
        console.error("There was an error filtering the blogs!", error);
      });
  };

  return (
    <div className="flex flex-col mt-[100px] container mx-auto">
      {selectedBlog && (
        <>
          <div className="py-8">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-gray-800 mb-2">
                {selectedBlog.title}
              </h1>
              <p className="text-gray-600">
                Published on{" "}
                {new Date(selectedBlog.published_at).toDateString()}
              </p>
            </div>
          </div>
          <div className="bg-white py-8">
            <div className="container mx-auto px-4 flex flex-col md:flex-row">
              <div className="w-full md:w-3/4 px-4">
                <img
                  src={selectedBlog.image}
                  alt="Blog Featured"
                  className="mb-8"
                />
                <div className="prose max-w-none">
                  {JSON.parse(selectedBlog.content).map((paragraph, index) => (
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
                    {blogs.map((blog) => (
                      <li key={blog.id} className="mb-2">
                        <a
                          href="#"
                          className="text-gray-700 hover:text-gray-900"
                          onClick={(e) => {
                            e.preventDefault();
                            setSelectedBlog(blog);
                          }}
                        >
                          {blog.title}
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
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900"
                        onClick={(e) => {
                          e.preventDefault();
                          filterByCategory("Technology");
                        }}
                      >
                        Technology
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900"
                        onClick={(e) => {
                          e.preventDefault();
                          filterByCategory("Nature");
                        }}
                      >
                        Nature
                      </a>
                    </li>
                    <li className="mb-2">
                      <a
                        href="#"
                        className="text-gray-700 hover:text-gray-900"
                        onClick={(e) => {
                          e.preventDefault();
                          filterByCategory("Cooking");
                        }}
                      >
                        Cooking
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Blogs;
