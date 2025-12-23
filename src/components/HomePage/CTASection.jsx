import React from "react";

export default function CTASection() {
  return (
    <div className="bg-[#fdf2f7] py-16 px-6">
      <div className="flex items-center justify-center gap-8 mx-auto ">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 ">
          Start advertising with panda ads today!
        </h2>
        <button className="bg-[#ff2b85] hover:bg-[#ff2b85]/90 text-white px-8 py-3 rounded-full text-base font-medium transition-colors">
          Get Started
        </button>
      </div>
    </div>
  );
}
