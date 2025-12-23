import React from "react";

export default function BrandsSection() {
  const brands = [
    {
      name: "Coca-Cola",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Coca-Cola_logo.svg/200px-Coca-Cola_logo.svg.png",
    },
    {
      name: "McDonald's",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/McDonald%27s_Golden_Arches.svg/200px-McDonald%27s_Golden_Arches.svg.png",
    },
    {
      name: "Subway",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5c/Subway_2016_logo.svg/200px-Subway_2016_logo.svg.png",
    },
    {
      name: "Visa",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/200px-Visa_Inc._logo.svg.png",
    },
    {
      name: "Mars",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/df/Mars_Logo.svg/200px-Mars_Logo.svg.png",
    },
    {
      name: "Pepsi",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/Pepsi_logo_2014.svg/200px-Pepsi_logo_2014.svg.png",
    },
    {
      name: "Unilever",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Unilever.svg/200px-Unilever.svg.png",
    },
    {
      name: "Nestle",
      logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d8/Nestl%C3%A9.svg/200px-Nestl%C3%A9.svg.png",
    },
  ];

  return (
    <div className="bg-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-gray-900 mb-12">
          Brands excelling with us
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex justify-center items-center grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-8 w-auto object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
