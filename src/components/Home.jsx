// src/components/Hero.jsx
import React from "react";

const Home = () => {
  return (
    <div className=" text-black py-20 h-full container mx-auto">
      <div className="container mx-auto px-6">
        <div className="text-center">
          <h1 className="text-5xl  mb-4 font-myFont">
            Welcome to Our Blog Website
          </h1>
          <p className="text-xl mb-8 mb-4 font-bold tracking-wide">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Reprehenderit est quo illum architecto accusamus fugiat unde.
            Facilis, quis ipsam, fuga beatae ipsa mollitia perferendis est,
            architecto at nam blanditiis sequi eaque nesciunt minus quia ea
            aperiam ratione autem facere numquam. Nesciunt quia corporis ipsa
            odio rem tempora pariatur aspernatur iusto?
          </p>
          <a
            href="#services"
            className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Home;
