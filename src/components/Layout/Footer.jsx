import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { IoChevronUp } from "react-icons/io5";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-16 pb-8 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* TOP GRID */}
        <div className="flex items-center gap-3 mb-6">
          <img src="./images/foodpanda_logo_2023.svg" alt="" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* LOGO + NAVIGATE */}
          <div>
            <h4 className="font-semibold mb-4">Our company</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                About foodpanda
              </li>
              <li className="hover:text-white cursor-pointer">
                Privacy policy
              </li>
            </ul>
          </div>

          {/* COLLABORATE */}
          <div>
            <h4 className="font-semibold mb-4">panda ads</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="hover:text-white cursor-pointer">
                Retail media solutions
              </li>
              <li className="hover:text-white cursor-pointer">
                Media kit generator
              </li>
              <li className="hover:text-white cursor-pointer">Case studies</li>
              <li className="hover:text-white cursor-pointer">
                Industry Insights
              </li>
              <li className="hover:text-white cursor-pointer">Newsroom</li>
              <li className="hover:text-white cursor-pointer">
                Pau-Pau marketer personality quiz
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Get in touch!</h4>
            <button className="px-6 py-2.5 cursor-pointer rounded-full text-sm font-semibold bg-[#ff2b85] text-white transition-all duration-500 ">
              Get in touch!
            </button>
          </div>

          {/* SOCIALS */}
          <div className="">
            <h4 className="font-semibold mb-4">Contact us</h4>
            <a className="hover:text-pink-500 cursor-pointer">
              <FaLinkedinIn size={20} />
            </a>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between text-gray-400 text-sm gap-4">
          <p>Copyright © 2025 foodpanda</p>
        </div>
      </div>

      {/* SCROLL TO TOP */}
      {/* <button
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-6 cursor-pointer right-6 bg-[#ff2b85] hover:bg-[#ff2b85]/90
        text-white p-3 rounded-md shadow-lg transition"
      >
        <IoChevronUp size={22} />
      </button> */}
    </footer>
  );
}
