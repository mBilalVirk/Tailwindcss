import React from "react";
import { Link } from "react-router-dom";
const PageNotFound = () => {
  return (
    <>
      <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-indigo-600 font-myFont text-3xl ">
            404
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-gray-600">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={"/"}
              className="bg-gradient-to-r md:flex from-purple-500 via-pink-500 to-red-500 text-white py-1 px-6 rounded-full shadow-lg hover:shadow-xl transition-transform transform hover:scale-105 hover:bg-gradient-to-l focus:outline-none focus:ring-4 focus:ring-pink-300 font-bold"
            >
              Go back home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
};

export default PageNotFound;
