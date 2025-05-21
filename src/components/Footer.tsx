import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="bg-gray-900 text-white py-10 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4 font-rubik">Web<span className="text-custom-turquoise">SUDIO</span></h3>
            <p className="text-gray-300 mb-4 font-assistant">
              אנחנו מתמחים בבניית אתרים, דפי נחיתה ואפליקציות עסקיות פשוטות לעסקים קטנים ובינוניים.
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-rubik">קישורים מהירים</h3>
            <ul className="space-y-2 font-assistant">
              <li>
                <a href="#services" className="text-gray-300 hover:text-white transition-colors">
                  שירותים
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-white transition-colors">
                  שאלות נפוצות
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-white transition-colors">
                  צור קשר
                </a>
              </li>
              <li>
                <Link to="/privacy-policy" className="text-gray-300 hover:text-white transition-colors">
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link to="/terms-of-service" className="text-gray-300 hover:text-white transition-colors">
                  תנאי שימוש
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-bold mb-4 font-rubik">צרו קשר</h3>
            <div className="font-assistant">
              <p className="text-gray-300 mb-2">טלפון: 054-5308505</p>
              <p className="text-gray-300 mb-4">אימייל: ariel@amgroup.co.il</p>
              <div className="flex gap-4">
                <a href="https://wa.me/972545308505" target="_blank" rel="noopener noreferrer" className="bg-green-600 hover:bg-green-700 h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path fillRule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clipRule="evenodd" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#3b5998] hover:bg-[#2d4473] h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] hover:bg-[#d32d57] h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 font-assistant">
          <p>© {currentYear} WebSUDIO. כל הזכויות שמורות</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
