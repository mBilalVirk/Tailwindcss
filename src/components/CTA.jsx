import React from "react";

const CTA = () => {
  return (
    <div className="relative mx-auto max-w-6xl mt-20 p-6">
      <div
        className="rounded-xl p-1 shadow-lg"
        style={{
          backgroundImage:
            "linear-gradient(to right bottom, rgb(79, 70, 229) 0%, rgb(165, 56, 164) 50%, rgb(220, 38, 38) 100%)",
        }}
      >
        <div className="rounded-lg bg-black/80 backdrop-blur-lg p-8">
          <div className="flex flex-wrap items-center justify-between gap-6 sm:gap-10 px-6 sm:px-10 py-10 lg:flex-nowrap">
            <div className="lg:max-w-lg">
              <h2 className="block w-full pb-4 bg-gradient-to-b from-white to-gray-400 bg-clip-text font-extrabold text-transparent text-4xl sm:text-5xl tracking-tight">
                Enhancing Productivity with Artificial Intelligence
              </h2>
              <p className="mt-4 text-lg bg-transparent font-medium leading-relaxed tracking-wide text-gray-400">
                Natural Language Processing (NLP): The SmartAI Assistant
                understands and interprets natural language commands, allowing
                users to communicate with it effortlessly.
              </p>
            </div>
            <div className="flex items-center justify-center gap-6 mt-6 lg:mt-0">
              <button className="bg-gradient-to-r from-violet-600 to-purple-500 hover:from-purple-500 hover:to-red-500 text-white button-text flex items-center justify-center whitespace-nowrap rounded-lg shadow-md transition-all duration-300 ease-in-out transform hover:scale-105 px-12 py-3 w-56 sm:w-72 text-sm sm:text-base tracking-wide p-5">
                Get Started
              </button>
              <button className="flex items-center justify-center whitespace-nowrap rounded-lg border border-zinc-700 bg-zinc-900 text-center text-white shadow-md backdrop-blur-md transition-all hover:bg-zinc-800 transform hover:scale-105 px-12 py-3 w-56 sm:w-72 text-sm sm:text-base tracking-wide p-5">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;
