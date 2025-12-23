import React from "react";

export default function HeroSection() {
  return (
    <div className="bg-white py-16 px-6">
      <div className="mx-auto text-center">
        <h1 className="text-3xl md:text-4xl font-bold  mb-4">
          Boost your brand with Asia's largest
          <br />
          food and grocery delivery network*
        </h1>

        <div className="flex flex-col md:flex-row justify-center items-center gap-12 md:gap-50 mt-12">
          <div>
            <h2 className="text-4xl md:text-7xl font-bold ">125M</h2>
            <p className=" text-2xl font-bold ">app downloads</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-7xl font-bold ">11</h2>
            <p className=" text-2xl font-bold">markets</p>
          </div>
          <div>
            <h2 className="text-4xl md:text-7xl font-bold ">400+</h2>
            <p className="text-2xl font-bold">cities</p>
          </div>
        </div>
      </div>
    </div>
  );
}
