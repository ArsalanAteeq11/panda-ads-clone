import React from "react";

export default function MediaKitSection() {
  return (
    <section className="py-16 md:py-24 px-6 bg-gray-100">
      <div className="max-w-6xl mx-auto">
        <div className="bg-white rounded-3xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2">
            {/* Content */}
            <div className="p-8 md:p-12 flex flex-col justify-center">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
                Get your custom
              </h2>
              <h3 className="text-2xl md:text-3xl font-bold text-[#ff2b85] mb-6">
                panda ads media kit
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Share your email campaign with us and receive a tailored media
                kit straight to your inbox — easy peasy.
              </p>
              <button className="bg-[#ff2b85] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#ff2b85]/90 transition-colors w-fit shadow-lg shadow-pink-200">
                Get started
              </button>
            </div>

            {/* Illustration */}
            <div className="relative bg-gradient-to-br from-pink-50 to-pink-100 p-8 flex items-center justify-center min-h-[300px]">
              {/* Rocket Illustration */}
              <div className="relative">
                {/* Rocket Body */}
                <div className="w-32 h-48 relative">
                  {/* Main Body */}
                  <div className="absolute bottom-0 w-full h-40 bg-gradient-to-b from-[#ff2b85] to-[#ff2b85]/80 rounded-t-full rounded-b-lg"></div>
                  {/* Window */}
                  <div className="absolute top-12 left-1/2 -translate-x-1/2 w-12 h-12 bg-white rounded-full shadow-inner flex items-center justify-center">
                    <div className="w-8 h-8 bg-gradient-to-br from-blue-200 to-blue-400 rounded-full"></div>
                  </div>
                  {/* Tip */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[20px] border-r-[20px] border-b-[30px] border-l-transparent border-r-transparent border-b-pink-400"></div>
                  {/* Fins */}
                  <div className="absolute bottom-0 -left-4 w-6 h-16 bg-[#ff2b85] rounded-l-lg transform -skew-y-12"></div>
                  <div className="absolute bottom-0 -right-4 w-6 h-16 bg-[#ff2b85] rounded-r-lg transform skew-y-12"></div>
                  {/* Flames */}
                  <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex gap-1">
                    <div className="w-4 h-12 bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent rounded-full animate-pulse"></div>
                    <div className="w-6 h-16 bg-gradient-to-b from-yellow-300 via-orange-400 to-transparent rounded-full animate-pulse"></div>
                    <div className="w-4 h-12 bg-gradient-to-b from-yellow-400 via-orange-500 to-transparent rounded-full animate-pulse"></div>
                  </div>
                </div>
                {/* Stars */}
                <div className="absolute -top-4 -left-8 w-2 h-2 bg-[#ff2b85] rounded-full"></div>
                <div className="absolute top-8 -right-12 w-3 h-3 bg-[#ff2b85] rounded-full"></div>
                <div className="absolute -bottom-4 -left-12 w-2 h-2 bg-pink-200 rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
