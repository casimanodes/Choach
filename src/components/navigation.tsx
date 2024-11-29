'use client';

import { useState } from "react";
import { Link } from "react-router-dom"; // React Router Link
import { ChevronDown, Menu, User, X } from "lucide-react";
import { Logo } from "./Logo";

const navItems = [
  {
    title: "Fitness",
    path: "/fitness",
    subItems: [
      { title: "Krafttraining", items: ["Anfänger", "Fortgeschrittene"] },
      { title: "Cardio", items: ["HIIT", "Ausdauer"] },
    ],
  },
  {
    title: "Speedcubing",
    path: "/rctotorial",
    subItems: [
      { title: "Techniken", items: ["CFOP", "Roux"] },
      { title: "Wettkämpfe", items: ["Vorbereitung", "Strategie"] },
    ],
  },
  {
    title: "Schlagball",
    path: "/schlagball",
    subItems: [
      { title: "Grundlagen", items: ["Wurftechnik", "Fangen"] },
      { title: "Taktik", items: ["Offensive", "Defensive"] },
    ],
  },
  {
    title: "Ernährung",
    path: "/ernährung",
    subItems: [
      { title: "Diäten", items: ["Low-Carb", "Vegan"] },
      { title: "Supplements", items: ["Proteine", "Vitamine"] },
    ],
  },
  { title: "Forum", path: "/", subItems: [] },
];

export function Navigation() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Logo />

          {/* Mobile Menu Button */}
          <div className="flex items-center space-x-4 md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-gray-600 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary"
            >
              {menuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Main Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <div key={item.title} className="relative group">
                <Link
                  to={item.path} // React Router's `to` instead of `href`
                  className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
                >
                  {item.title}
                  {item.subItems.length > 0 && (
                    <ChevronDown className="inline-block ml-1 w-4 h-4" />
                  )}
                </Link>
                {/* Dropdown for sub-items */}
                {item.subItems.length > 0 && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                    <div className="py-1">
                      {item.subItems.map((subItem) => (
                        <div key={subItem.title} className="group/sub">
                          <Link
                            to="/"
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                          >
                            {subItem.title}
                          </Link>
                          <div className="absolute left-full top-0 mt-0 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 opacity-0 invisible group-hover/sub:opacity-100 group-hover/sub:visible transition-all duration-200">
                            <div className="py-1">
                              {subItem.items.map((subSubItem) => (
                                <Link
                                  key={subSubItem}
                                  to="/"

                                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-primary"
                                >
                                  {subSubItem}
                                </Link>
                              ))}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* User Icon */}
          <div>
            <button className="text-gray-600 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200">
              <User className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <div key={item.title} className="mb-4">
                <Link
                  to={item.path} // React Router's `to` for navigation
                  className="text-gray-600 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {item.title}
                </Link>
                {item.subItems.length > 0 && (
                  <div className="ml-4 mt-2">
                    {item.subItems.map((subItem) => (
                      <div key={subItem.title} className="mb-2">
                        <Link
                          to="/"

                          className="text-gray-500 hover:text-primary block px-3 py-2 rounded-md text-sm font-medium"
                        >
                          {subItem.title}
                        </Link>
                        <div className="ml-4 mt-1">
                          {subItem.items.map((subSubItem) => (
                            <Link
                              key={subSubItem}
                              to="/"

                              className="text-gray-400 hover:text-primary block px-3 py-2 rounded-md text-xs"
                            >
                              {subSubItem}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
