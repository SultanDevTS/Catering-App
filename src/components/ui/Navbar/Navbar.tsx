/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import type { NavItem } from "../../../types";
import { Link } from "react-router-dom";

export const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const NavItems: NavItem[] = [
    { path: "/", label: "Home" },
    { path: "/menu", label: "Menu / Meal Plans" },
    { path: "/subscription", label: "Subscription" },
    { path: "/contact", label: "Contact Us" },
  ];
  const isActiveLink = (path: string) => {
    return location.pathname === path;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const closeMenu = () => {
    setIsMenuOpen(false);
  };
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center" onClick={closeMenu}>
            <div className="text-2xl font-bold text-green-600 hover:text-green-700 transition-colors">
              🍽️ SEA Catering
            </div>
          </Link>

          {/* Desktop */}
          <nav className="hidden md:flex space-x-1">
            {NavItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
                  isActiveLink(item.path)
                    ? "bg-green-100 text-green-700 shadow-sm"
                    : "text-gray-700 hover:bg-green-600 hover:bg-green-50"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* mobile */}
        <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-lg text-gray-700 hover:text-green-600 hover:bg-green-50 focus:outline-none focus:ring-2 focus:ring-green-500 transition-colors"
              aria-label="Toggle menu"
            >
              <div className="w-6 h-6 flex flex-col justify-center items-center">
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${
                  isMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`bg-current block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${
                  isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'
                }`}></span>
              </div>
            </button>
          </div>
        </div>
        {/* Mobile navigation */}
        <div className={`md:hidden transtion-all duration-300 ease-in-out ${
            isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden`}>
            <nav className='py-4 space-y-2'>
                {NavItems.map((item) => (
                    <Link
                    key={item.path}
                    to={item.path}
                    onClick={closeMenu}
                    className={`block px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                        isActiveLink(item.path) 
                        ? 'bg-green-100 tex-green-700 shadow-sm border-l-4 border-green-500' : 
                        'text-gray-700 hover:text-green-600 hover:bg-green-50 hover:border-l-4 hover:border-green-300'
                    }`}
                    >
                        {item.label}
                    </Link>
                ))}

            </nav>
        </div>
      </div>
    </header>
  );
};
