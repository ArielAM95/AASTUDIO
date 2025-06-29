
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  // Function to scroll to top when navigating
  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

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
                <Link 
                  to="/privacy-policy" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
                  מדיניות פרטיות
                </Link>
              </li>
              <li>
                <Link 
                  to="/terms-of-service" 
                  className="text-gray-300 hover:text-white transition-colors"
                  onClick={scrollToTop}
                >
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
                <a href="https://www.facebook.com/profile.php?id=61576245820554#" target="_blank" rel="noopener noreferrer" className="bg-[#3b5998] hover:bg-[#2d4473] h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <Facebook size={20} />
                </a>
                <a href="https://www.instagram.com/aa_websudio/" target="_blank" rel="noopener noreferrer" className="bg-[#E4405F] hover:bg-[#d32d57] h-10 w-10 rounded-full flex items-center justify-center transition-colors">
                  <Instagram size={20} />
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
