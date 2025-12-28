import React from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Solutions", path: "/solutions" },

    {
      name: "Resources",
      dropdown: [
        { name: "Insights", path: "/insights" },
        { name: "Case Studies", path: "/case-studies" },
        { name: "News Room", path: "/newsroom" },
      ],
    },
    {
      name: "Tools",
      dropdown: [
        {
          name: "Media Kit Generator",
          external: true,
          path: "https://mediakit-pandaadsfoodpanda.vercel.app/",
        },
      ],
    },
  ];

  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  return (
    <nav className="shadow-md w-full h-16.75 flex items-center justify-between px-4 md:px-16  transition-all duration-500 ">
      {/* Logo */}
      <img
        src="./images/foodpanda_panda-ads_logo.svg"
        alt=""
        className="cursor-pointer h-8"
      />

      {/* Desktop Right */}
      <div className="hidden lg:flex items-center gap-32  ">
        <div className="hidden md:flex items-center text-sm gap-4">
          {navLinks.map((link, i) => (
            <div key={i} className="relative group">
              <NavLink
                to={link.path}
                className="font-semibold flex items-center gap-1  "
              >
                {link.name}
              </NavLink>

              {link.dropdown && (
                <div className="absolute left-0 top-full mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                  {link.dropdown.map((item, j) =>
                    item.external ? (
                      <a
                        key={j}
                        href={item.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 block text-sm hover:bg-gray-100 border-b last:border-b-0"
                      >
                        {item.name}
                      </a>
                    ) : (
                      <NavLink
                        key={j}
                        to={item.path}
                        className="block px-4 py-2 text-sm hover:bg-gray-100"
                      >
                        {item.name}
                      </NavLink>
                    )
                  )}
                </div>
              )}
            </div>
          ))}

          <button
            onClick={() => navigate("/contact-us")}
            className="px-6 py-2.5 cursor-pointer rounded-full text-sm font-semibold ml-4 bg-[#ff2b85] text-white transition-all duration-500 "
          >
            Contact Us
          </button>
        </div>
        <svg
          className="h-6 w-6 text-black transition-all duration-500"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex items-center gap-3 lg:hidden">
        <svg
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="h-6 w-6 cursor-pointer"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <line x1="4" y1="6" x2="20" y2="6" />
          <line x1="4" y1="12" x2="20" y2="12" />
          <line x1="4" y1="18" x2="20" y2="18" />
        </svg>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed z-50 top-0 left-0 w-full h-screen bg-white text-base flex flex-col lg:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4"
          onClick={() => setIsMenuOpen(false)}
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            viewBox="0 0 24 24"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        {navLinks.map((link, i) => (
          <div key={i} className="relative group">
            <NavLink
              to={link.path}
              className="font-semibold flex items-center gap-1  "
            >
              {link.name}
            </NavLink>

            {link.dropdown && (
              <div className="absolute left-0 top-full mt-3 w-44 bg-white shadow-lg rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                {link.dropdown.map((item, j) =>
                  item.external ? (
                    <a
                      key={j}
                      href={item.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 block text-sm hover:bg-gray-100 border-b last:border-b-0"
                    >
                      {item.name}
                    </a>
                  ) : (
                    <NavLink
                      key={j}
                      to={item.path}
                      className="block px-4 py-2 text-sm hover:bg-gray-100"
                    >
                      {item.name}
                    </NavLink>
                  )
                )}
              </div>
            )}
          </div>
        ))}
        <button
          onClick={() => navigate("/contact-us")}
          className="px-6 py-2.5 cursor-pointer rounded-full text-sm font-semibold ml-4 bg-[#ff2b85] text-white transition-all duration-500 "
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
}
