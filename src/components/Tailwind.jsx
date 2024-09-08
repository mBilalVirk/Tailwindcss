import React from "react";

export default function Tailwind() {
  return (
    <div>
      <h1 className="border-4 border-green-600 lg:text-3xl md:text-lg sm:text-3xl mb-1 font-myFont ">
        Hello World
      </h1>
      <h1 className="text-vuejs-900 line-through ">Hello World</h1>
      <h1 className="bg-[#e76652]">Hello World</h1>
      <h1 className="text-4xl underline decoration-wavy decoration-red-400 underline-offset-2 leading-loose">
        Title1
      </h1>
      {/* This above heading underline with different decoration you can explor much more */}
      <h2 className="text-2xl">Title2</h2>
      <h3 className="text-xl"> Title3</h3>
      <p className="text-base truncate">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        voluptate, tempore sit accusantium eligendi id? Debitis itaque obcaecati
        eaque mollitia tenetur, asperiores neque. Sapiente, ipsa.
      </p>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        voluptate, tempore sit accusantium eligendi id? Debitis itaque obcaecati
        eaque mollitia tenetur, asperiores neque. Sapiente, ipsa.
      </p>
      <p className="text-xs note">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam
        voluptate, tempore sit accusantium eligendi id? Debitis itaque obcaecati
        eaque mollitia tenetur, asperiores neque. Sapiente, ipsa.
      </p>
    </div>
  );
}
