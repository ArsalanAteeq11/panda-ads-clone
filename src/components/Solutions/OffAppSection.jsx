import React from "react";

export default function OffAppSection() {
  const solutions = [
    {
      title: "Marketing channels",
      description: "Boost your reach with foodpanda's digital channels",
      icon: (
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-400 to-pink-600 rounded-2xl transform rotate-6"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-pink-600"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Rider bags",
      description: "Put your brand in the fast lane with OOH campaigns",
      icon: (
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-red-400 to-pink-500 rounded-2xl transform -rotate-6"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-red-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-red-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Product sampling",
      description: "Boost product awareness and drive sales",
      icon: (
        <div className="w-24 h-24 relative">
          <div className="absolute inset-0 bg-gradient-to-br from-orange-400 to-yellow-400 rounded-2xl transform rotate-3"></div>
          <div className="absolute inset-0 bg-white rounded-2xl shadow-lg flex items-center justify-center">
            <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center">
              <svg
                className="w-6 h-6 text-orange-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
                />
              </svg>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section className="py-16 md:py-24 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
            Amplify your campaigns
          </h2>
          <h3 className="text-2xl md:text-4xl font-bold text-gray-900">
            with off-app advertising solutions
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {solutions.map((solution, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center group cursor-pointer"
            >
              <div className="mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {solution.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-3">
                {solution.title}
              </h4>
              <p className="text-gray-600 text-sm leading-relaxed">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
