import React from "react";

export default function PowerUpSection() {
  return (
    <div className="bg-gray-50 py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
          Power up your visibility & engagement
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                <img src="./images/1.png" alt="" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Premium exposure
            </h3>
            <p className="text-lg text-gray-600">
              Reach millions of hungry customers actively browsing our platform
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                <img src="./images/2.png" alt="" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Elevated revenue solutions
            </h3>
            <p className="text-lg text-gray-600">
              Drive orders and increase sales with targeted advertising
              campaigns
            </p>
          </div>

          <div className="text-center">
            <div className="flex justify-center mb-12">
              <div className="w-20 h-20 bg-pink-100 rounded-full flex items-center justify-center">
                <img src="./images/3.png" alt="" />
              </div>
            </div>
            <h3 className="font-bold text-xl text-gray-900 mb-2">
              Performance-based pricing
            </h3>
            <p className="text-lg text-gray-600">
              Pay only for results with our flexible pricing models
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
