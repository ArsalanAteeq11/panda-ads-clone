import React from "react";

export default function HeroSection({ title, desc }) {
  return (
    <section className="bg-gray-50 py-16 md:py-20 px-12">
      <div className="mx-auto">
        <h1 className="text-3xl md:text-[54px] font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-gray-600 text-lg md:text-xl">{desc}</p>
      </div>
    </section>
  );
}
