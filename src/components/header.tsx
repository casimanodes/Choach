import React from "react";

const Header = () => {
  return (
    <header className="fixed top-0 left-0 w-full shadow-header bg-header z-[999] transition-all duration-700">
      <nav className="flex items-center justify-between h-header container mx-auto px-4">
        <div className="flex items-center h-full">
          {/* SVG Logo */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 456 208"
            className="fill-first h-16 w-24 -translate-x-4"
          >
            <path d="M130.2,100.5c7.2,1.6,14.6,1.3,21.9,0.8c5.9-0.4,11.6-2.1,16.3-5.9c0.7-0.6,1.1-0.2,1.7,0.2 ..." />
            <path d="M332.9,101.5c5.3,0,10.6,0,15.9,0c2.9,0,3.1-0.3,3.1-3.1c0.1-19.7,0.1-39.4,0.2-59.1 ..." />
          </svg>

          {/* Navigation Links */}
          <ul className="flex gap-4">
            <li className="text-sm font-medium text-title">Vorschule</li>
            <li className="text-sm font-medium text-title">Schwimmlernkurs</li>
            <li className="text-sm font-medium text-title">Seepferdchen</li>
            <li className="text-sm font-medium text-title">Clubs</li>
          </ul>
        </div>

        <div className="flex items-center gap-4">
          <div className="nav__toggle relative w-8 h-8">
            <i className="ri-menu-line absolute inset-0 grid place-items-center text-lg text-title"></i>
            <i className="ri-close-line absolute inset-0 grid place-items-center text-lg text-title opacity-0"></i>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
