import React, { useState } from "react";

export default function BoostConversionsSection() {
  const [activeTab, setActiveTab] = useState("payment");

  const tabs = [
    { id: "fullpage", label: "Full-page pop-up" },
    { id: "carousel", label: "Carousel banner" },
    { id: "cart", label: "Cart upsell" },
    { id: "payment", label: "Payment switch" },
  ];

  const tabContent = {
    fullpage: {
      title: "Full-page pop-up",
      description:
        "Capture attention with immersive full-screen advertisements that appear at strategic moments.",
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=400&fit=crop",
    },
    carousel: {
      title: "Carousel banner",
      description:
        "Showcase multiple products or offers in an engaging scrollable carousel format.",
      image:
        "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=500&h=400&fit=crop",
    },
    cart: {
      title: "Cart upsell",
      description:
        "Increase average order value with targeted product recommendations at checkout.",
      image:
        "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=500&h=400&fit=crop",
    },
    payment: {
      title: "Payment switch",
      description: "Become a foodpanda payment provider of choice at checkout.",
      image:
        "https://images.unsplash.com/photo-1556742393-d75f468bfcb0?w=500&h=400&fit=crop",
    },
  };

  const currentContent = tabContent[activeTab];

  return (
    <section className="py-16 md:py-24 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Boost in-app consideration and conversions
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-[#ff2b85] text-white shadow-lg shadow-pink-200"
                  : "bg-white text-gray-700 border border-gray-200 hover:border-pink-300 hover:text-[#ff2b85]/90"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              {currentContent.title}
            </h3>
            <p className="text-gray-600 text-lg leading-relaxed">
              {currentContent.description}
            </p>
          </div>
          <div className="order-1 md:order-2">
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-100 to-purple-100 rounded-3xl blur-2xl opacity-60"></div>
              <img
                src={currentContent.image}
                alt={currentContent.title}
                className="relative rounded-2xl shadow-xl w-full h-64 md:h-80 object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
