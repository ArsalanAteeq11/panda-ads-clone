import React from "react";
import HeroSection from "../components/Solutions/HeroSection";
import FooterCTA from "../components/Solutions/FooterCTA";

const Insights = () => {
  const cards = [
    {
      title: "Whitepaper: Retail media – the revolution of advertising in Asia",
      image: "./images/11.jpeg", // apni image ka path
      button: "Download",
    },
    {
      title: "Report: Delivery & retail trends in APAC 2023",
      image: "./images/12.jpeg", // apni image ka path
      button: "Download",
    },
  ];

  return (
    <>
      <HeroSection
        title="Discover the latest insights"
        desc="Tap into the pulse of the advertising industry with the latest trends and consumer insights."
      />
      <section className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {cards.map((card, i) => (
            <div key={i} className="flex flex-col">
              {/* Image */}
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-64 object-cover"
                />
              </div>

              {/* Content */}
              <h3 className="mt-6 text-2xl font-bold leading-snug">
                {card.title}
              </h3>

              {/* Button */}
              <button className="mt-6 w-fit bg-[#ff2b85] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff2b85]/90 transition">
                {card.button}
              </button>
            </div>
          ))}
        </div>
      </section>
      <FooterCTA
        text="Start advertising with panda ads today!"
        button="Get in touch"
      />
    </>
  );
};

export default Insights;
