import React from "react";

export default function DisplayAdsSection() {
  const ads = [
    {
      title: "Homescreen ad",
      description:
        "Reach millions of customers at the beginning of their purchase journey",
      image:
        "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=300&h=400&fit=crop",
    },
    {
      title: "Order tracking page ad",
      description:
        "Drive engagement and results without disrupting their ordering experience",
      image:
        "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=300&h=400&fit=crop",
    },
    {
      title: "Shopping ad",
      description: "Boost conversions on pandamart and foodpanda shops",
      image:
        "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=300&h=400&fit=crop",
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Reach high-value customers
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            with in-app display ads
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {ads.map((ad, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group"
            >
              {/* Phone Mockup */}
              <div className="relative mb-8">
                <div className="w-48 h-80 bg-gray-900 rounded-[2.5rem] p-2 shadow-2xl transform group-hover:scale-105 transition-transform duration-300">
                  <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden relative">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-gray-900 rounded-b-xl z-10"></div>
                    {/* Screen Content */}
                    <img
                      src={ad.image}
                      alt={ad.title}
                      className="w-full h-full object-cover"
                    />
                    {/* Ad Banner Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#ff2b85]/90 to-transparent p-4">
                      <div className="bg-white rounded-lg p-2 shadow-lg">
                        <div className="flex items-center gap-2">
                          <div className="w-8 h-8 bg-pink-100 rounded-full flex items-center justify-center">
                            <span className="text-[#ff2b85] text-xs font-bold">
                              AD
                            </span>
                          </div>
                          <div className="text-left">
                            <p className="text-xs font-medium text-gray-900">
                              Special Offer
                            </p>
                            <p className="text-[10px] text-gray-500">
                              Up to 50% off
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {ad.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
                {ad.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
