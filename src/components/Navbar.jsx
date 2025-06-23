import React, { useState } from "react";
import { HiX, HiMenu } from "react-icons/hi";

const Navbar = () => {
  // State for links
  const [activeLink, setActiveLink] = useState("#home");
  //   Menu for mobile devices
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // logo, navlink, button
  const navLinks = [
    {
      href: "#home",
      label: "Home",
    },
    {
      href: "#about",
      label: "About Us",
    },
    {
      href: "#services",
      label: "Our Services",
    },
    {
      href: "#testimonials",
      label: "Testimonials",
    },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/85 backdrop-blur-lg z-100 border-b border-gray-100 shadow-xs">
      <div className="w-full container mx-auto flex items-center justify-between px-4 sm:px-6 lg:px-8 md:h-20 h-14">
        {/* Logo */}
        <div className="flex items-center gap-1 cursor-pointer">
          <div className="w-4 h-4 bg-blue-600 rounded-full opacity-75 hover:opacity-100"></div>
          <div className="w-4 h-4 -ml-2 bg-red-500 rounded-full opacity-100 hover:opacity-75"></div>
        </div>

        {/* Mobile menu btn */}

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? (
            <HiX className="size-6" />
          ) : (
            <HiMenu className="size-6" />
          )}
        </button>

        {/* Desktop navitems */}
        <div className="hidden md:flex gap-10">
          {navLinks.map((navItem, index) => {
            return (
              <a
                href={navItem.href}
                // after: pseudo class to add underline effects
                className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-blue-500 after:transition-all ${
                  activeLink === navItem.href
                    ? "text-blue-500 after:w-full"
                    : "text-gray-600 hover:text-gray-800"
                }`}
                onClick={() => setActiveLink(navItem.href)}
              >
                {navItem.label}
              </a>
            );
          })}
        </div>

        {/* Get in touch btn for CTA */}
        <button className="hidden md:block bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-200 ">
          <a href="#newsletter">Get in Touch</a>
        </button>

        {/* mobile menu */}
      </div>

      {/* Mobile menu items */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 px-6">
          <div className="container mx-auto space-y-2 py-4">
            {navLinks.map((linkItem, index) => {
              return (
                <a
                  className={`block text-sm font-medium py-4 ${
                    activeLink == linkItem.href
                      ? " text-blue-500"
                      : "text-gray-600 hover:text-gray-800"
                  }`}
                  onClick={() => {
                    setActiveLink(linkItem.href);
                    setIsMenuOpen(false);
                  }}
                  href={linkItem.href}
                >
                  {linkItem.label}
                </a>
              );
            })}
            <button className="w-full bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 text-sm font-medium transition-all hover:shadow-md hover:shadow-blue-200 cursor-pointer my-4">
              <a href="#newsletter">Get in Touch</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
