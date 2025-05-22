
import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Function to scroll to top when navigating to a new page
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  // Function to handle scrolling to sections or navigate to home page sections
  const handleSectionClick = (sectionId: string) => {
    if (location.pathname === "/") {
      // If on home page, scroll to the section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
        if (isMenuOpen) {
          setIsMenuOpen(false);
        }
      }
    } else {
      // If not on home page, navigate to home page with section hash
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="bg-white py-4 px-6 shadow-md sticky top-0 z-50">
      <div className="container mx-auto max-w-6xl">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold font-rubik">
            <Link to="/" onClick={scrollToTop}>
              <img 
                src="/lovable-uploads/009364ae-1b0c-4271-a068-88cc03111697.png" 
                alt="Logo" 
                className="h-10 w-auto"
              />
            </Link>
          </div>
          
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
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("services");
              }} 
              className="text-gray-700 hover:text-custom-purple font-medium transition-colors"
            >
              שירותים
            </a>
            <Link to="/focused-landing-page" className="text-gray-700 hover:text-custom-purple font-medium transition-colors" onClick={scrollToTop}>
              דף נחיתה מעוצב
            </Link>
            <Link to="/business-website" className="text-gray-700 hover:text-custom-purple font-medium transition-colors" onClick={scrollToTop}>
              אתר עסקי
            </Link>
            <Link to="/business-app" className="text-gray-700 hover:text-custom-purple font-medium transition-colors" onClick={scrollToTop}>
              אפליקציה עסקית
            </Link>
            <Link to="/digital-advertising" className="text-gray-700 hover:text-custom-purple font-medium transition-colors" onClick={scrollToTop}>
              פרסום דיגיטלי
            </Link>
            <a 
              href="#" 
              onClick={(e) => {
                e.preventDefault();
                handleSectionClick("faq");
              }} 
              className="text-gray-700 hover:text-custom-purple font-medium transition-colors"
            >
              שאלות נפוצות
            </a>
            <Link to="/contact" className="text-gray-700 hover:text-custom-purple font-medium transition-colors" onClick={scrollToTop}>
              צור קשר
            </Link>
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
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick("services");
                }}
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
              >
                שירותים
              </a>
              <Link
                to="/focused-landing-page"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
              >
                דף נחיתה מעוצב
              </Link>
              <Link
                to="/business-website"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
              >
                אתר עסקי
              </Link>
              <Link
                to="/business-app"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
              >
                אפליקציה עסקית
              </Link>
              <Link
                to="/digital-advertising"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
              >
                פרסום דיגיטלי
              </Link>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleSectionClick("faq");
                }}
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
              >
                שאלות נפוצות
              </a>
              <Link
                to="/contact"
                className="text-gray-700 hover:text-custom-purple font-medium py-2 transition-colors"
                onClick={() => {
                  scrollToTop();
                  toggleMenu();
                }}
              >
                צור קשר
              </Link>
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
