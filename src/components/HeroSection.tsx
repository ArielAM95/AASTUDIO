
import { ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/972545308505?text=שלום, ראינו את דף הנחיתה ואנחנו רוצים לקבל פרטים כלליים על השירותים שלכם.", "_blank");
  };

  return (
    <section className="hero-gradient py-16 md:py-24 px-4 rounded-b-3xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik leading-tight">
              אנחנו נבנה לכם דף נחיתה או אתר לפי הצורך שלכם בימים בודדים ובלי לקרוע את הכיס
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              אם אין לכם זמן להתעסק עם עיצובים, טכנולוגיה ותוכן – אנחנו כאן כדי לעשות את זה בשבילכם, בעברית, מהר, ובמחיר שלא תמצאו במקום אחר.
            </p>
            <button 
              onClick={handleContactClick} 
              className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              דברו איתנו עכשיו
              <ArrowLeft size={18} className="rtl:rotate-90" />
            </button>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative w-full h-80 md:h-96">
              {/* Animated background shapes */}
              <div className="absolute inset-0 overflow-hidden rounded-2xl">
                {/* Main gradient circle */}
                <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-br from-custom-purple to-purple-600 rounded-full opacity-20 animate-pulse"></div>
                
                {/* Secondary gradient circle */}
                <div className="absolute bottom-1/4 right-1/4 w-24 h-24 bg-gradient-to-br from-custom-turquoise to-teal-500 rounded-full opacity-30 animate-pulse" style={{ animationDelay: "1s" }}></div>
                
                {/* Floating squares */}
                <div className="absolute top-1/3 right-1/3 w-8 h-8 bg-custom-purple rounded transform rotate-45 opacity-40 animate-bounce" style={{ animationDelay: "0.5s" }}></div>
                <div className="absolute bottom-1/3 left-1/3 w-6 h-6 bg-custom-turquoise rounded transform rotate-45 opacity-50 animate-bounce" style={{ animationDelay: "1.5s" }}></div>
                
                {/* Code-like lines */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 space-y-2">
                  <div className="h-2 w-20 bg-gradient-to-r from-custom-purple to-transparent rounded opacity-60 animate-pulse"></div>
                  <div className="h-2 w-16 bg-gradient-to-r from-custom-turquoise to-transparent rounded opacity-50 animate-pulse" style={{ animationDelay: "0.3s" }}></div>
                  <div className="h-2 w-24 bg-gradient-to-r from-purple-400 to-transparent rounded opacity-40 animate-pulse" style={{ animationDelay: "0.6s" }}></div>
                  <div className="h-2 w-12 bg-gradient-to-r from-teal-400 to-transparent rounded opacity-70 animate-pulse" style={{ animationDelay: "0.9s" }}></div>
                </div>
                
                {/* Floating dots */}
                <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-custom-purple rounded-full opacity-60 animate-ping"></div>
                <div className="absolute bottom-1/6 left-1/6 w-3 h-3 bg-custom-turquoise rounded-full opacity-50 animate-ping" style={{ animationDelay: "2s" }}></div>
                <div className="absolute top-2/3 right-1/6 w-1.5 h-1.5 bg-purple-400 rounded-full opacity-70 animate-ping" style={{ animationDelay: "1s" }}></div>
              </div>
              
              {/* Main container with glass effect */}
              <div className="relative z-10 w-full h-full bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20 shadow-xl flex items-center justify-center">
                <div className="text-center">
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-custom-purple to-custom-turquoise rounded-lg flex items-center justify-center shadow-lg">
                    <div className="w-8 h-8 bg-white rounded opacity-80"></div>
                  </div>
                  <h3 className="text-xl font-bold text-custom-purple mb-2 font-rubik">יצירה דיגיטלית</h3>
                  <p className="text-gray-600 text-sm">טכנולוגיה מתקדמת<br />עיצוב מודרני</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
