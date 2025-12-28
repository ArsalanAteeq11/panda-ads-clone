import React from "react";
import FooterCTA from "../components/Solutions/FooterCTA";
import HeroSection from "../components/Solutions/HeroSection";

const CaseStudies = () => {
  const caseStudies = [
    {
      category: "CPG | AWARENESS & SALES",
      title:
        "Driving growth: Coca-Cola leveraged retail media channels to boost sales",
      description:
        "While The Coca-Cola Company has numerous ongoing partnerships with foodpanda in the Philippines, one campaign that really stood out in increasing the brand’s penetration, transactions and sales across online and offline platforms was its #BetterwithCoke campaign on foodpanda.",
      image: "/images/case-1.jpeg",
      reverse: false,
    },
    {
      category: "ENTERTAINMENT | ACQUISITION",
      title:
        "Amazon Prime Video and foodpanda’s impressive entertainment strategy",
      description:
        "We have all experienced the combination of binge watching while munching on our favourite snacks and meals during the holiday season. The entertainment giant decided to jump on board foodpanda’s platform to raise the brand’s visibility in the lives of local people.",
      image: "/images/case-2.jpeg",
      reverse: true,
    },
    {
      category: "CPG | PRODUCT LAUNCH",
      title:
        "Mars Wrigley found the perfect audience for its new product with panda ads",
      description:
        "Eclipse mints are made by Mars Wrigley, the world’s leading manufacturer of chocolate, chewing gum, mints and fruity confections. That’s where panda ads came in to set up the right mix of audience targeting and creative media.",
      image: "/images/case-3.jpeg",
      reverse: false,
    },
    {
      category: "SPORTS | BRAND AWARENESS",
      title:
        "Under Armour teamed up with panda ads to drive awareness and brand love",
      description:
        "Under Armour partnered with panda ads for a situational marketing campaign that took full advantage of the excitement of one of the world’s most-watched sporting events.",
      image: "/images/case-4.jpg",
      reverse: true,
    },
  ];
  return (
    <>
      <HeroSection
        title="Discover case studies"
        desc="Explore success stories from our brand partners across verticals like CPG (FMCG), banking & finance, travel, retail, and more."
      />
      <section className="max-w-7xl mx-auto px-6 py-20 space-y-24">
        {caseStudies.map((item, i) => (
          <div
            key={i}
            className={`grid grid-cols-1 lg:grid-cols-2 gap-14 items-center ${
              item.reverse ? "lg:flex-row-reverse" : ""
            }`}
          >
            {/* Image */}
            <div className={`${item.reverse ? "lg:order-2" : ""}`}>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-[340px] object-cover"
                />
              </div>
            </div>

            {/* Content */}
            <div className={`${item.reverse ? "lg:order-1" : ""}`}>
              <p className="text-sm font-semibold text-[#ff2b85] mb-3">
                {item.category}
              </p>

              <h3 className="text-2xl lg:text-3xl font-bold leading-snug mb-4">
                {item.title}
              </h3>

              <p className="text-gray-600 leading-relaxed mb-8">
                {item.description}
              </p>

              <button className="bg-[#ff2b85] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#ff2b85]/90 transition">
                Read more
              </button>
            </div>
          </div>
        ))}
      </section>
      <FooterCTA
        text="Start advertising with panda ads today!"
        button="Get in touch"
      />
    </>
  );
};

export default CaseStudies;
