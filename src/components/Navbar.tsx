
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold font-rubik text-custom-purple">Web<span className="text-custom-turquoise">Studio</span></div>
          
          {/* Mobile menu button */}
          <button className="md:hidden" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6 text-custom-purple"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
          
          {/* Desktop menu */}
          <div className="hidden md:flex gap-8">
            <a href="#services" className="text-gray-700 hover:text-custom-purple font-medium transition-colors">
              שירותים
            </a>
            <a href="#faq" className="text-gray-700 hover:text-custom-purple font-medium transition-colors">
              שאלות נפוצות
            </a>
            <a href="#contact" className="text-gray-700 hover:text-custom-purple font-medium transition-colors">
              צור קשר
            </a>
          </div>
          
          {/* Contact button */}
          <a
            href="https://wa.me/972545308505"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-block bg-custom-purple text-white px-5 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium"
          >
            דברו איתנו
          </a>
        </div>
        
        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 md:hidden">
            <div className="flex flex-col space-y-3 pb-3">
              <a
                href="#services"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                שירותים
              </a>
              <a
                href="#faq"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                שאלות נפוצות
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={toggleMenu}
              >
                צור קשר
              </a>
              <a
                href="https://wa.me/972545308505"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-custom-purple text-white px-4 py-2 rounded-lg hover:bg-opacity-90 transition-colors font-medium inline-block text-center"
                onClick={toggleMenu}
              >
                דברו איתנו
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
