import React from "react";

export default function FooterCTA({ text, button }) {
  return (
    <section className="bg-[#ff2b85] py-15 px-6">
      <div className="mx-auto flex flex-col md:flex-row items-center justify-center gap-20">
        <h2 className="text-white text-2xl md:text-5xl font-bold text-center md:text-left">
          {text}
        </h2>
        <button className="bg-white text-[#ff2b85] px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition-colors whitespace-nowrap">
          {button}
        </button>
      </div>
    </section>
  );
}
