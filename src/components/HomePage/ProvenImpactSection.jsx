import React from "react";

export default function ProvenImpactSection() {
  const cases = [
    {
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=400&h=300&fit=crop",
      title:
        "40% increase in orders during peak hours with targeted placements",
      buttonText: "Read more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1466637574441-749b8f19452f?w=400&h=300&fit=crop",
      title:
        "3x growth in new customer acquisition through strategic campaigns",
      buttonText: "Read more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1559329007-40df8a9345d8?w=400&h=300&fit=crop",
      title: "25% boost in average order value with personalized promotions",
      buttonText: "Read more",
    },
    {
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
      title: "50% reduction in customer acquisition costs with panda ads",
      buttonText: "Read more",
    },
  ];

  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center text-gray-900 mb-12">
          Proven impact with panda ads
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {cases.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl text-gray-900 font-bold mb-4 min-h-[60px]">
                  {item.title}
                </p>
                <button className="bg-[#ff2b85] hover:bg-[#ff2b85] text-white px-8 py-2 rounded-full text-md font-semibold transition-colors w-max">
                  {item.buttonText}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
