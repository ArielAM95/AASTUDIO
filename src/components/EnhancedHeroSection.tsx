
import { ArrowLeft, Sparkles, Zap, Rocket } from "lucide-react";
import { useState, useEffect } from "react";

const EnhancedHeroSection = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
    
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleContactClick = () => {
    window.open("https://wa.me/972545308505?text=שלום, ראינו את דף הנחיתה ואנחנו רוצים לקבל פרטים כלליים על השירותים שלכם.", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900 to-black">
      
      {/* Animated background */}
      <div className="absolute inset-0">
        {/* Moving gradient orbs */}
        <div 
          className="absolute w-96 h-96 bg-gradient-to-r from-custom-purple/30 to-custom-turquoise/30 rounded-full blur-3xl animate-pulse"
          style={{
            left: `${20 + mousePosition.x * 0.02}%`,
            top: `${10 + mousePosition.y * 0.02}%`,
            animationDuration: '4s'
          }}
        />
        <div 
          className="absolute w-80 h-80 bg-gradient-to-r from-custom-turquoise/20 to-custom-purple/20 rounded-full blur-3xl animate-pulse"
          style={{
            right: `${10 + mousePosition.x * 0.015}%`,
            bottom: `${20 + mousePosition.y * 0.015}%`,
            animationDuration: '6s',
            animationDelay: '2s'
          }}
        />
        
        {/* Floating particles */}
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-ping"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${2 + Math.random() * 3}s`
            }}
          />
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="grid grid-cols-12 grid-rows-12 h-full w-full">
            {[...Array(144)].map((_, i) => (
              <div 
                key={i} 
                className="border border-white/10 transition-all duration-1000 hover:bg-white/5"
                style={{ animationDelay: `${i * 0.01}s` }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <div className="text-center">
          
          {/* Badge */}
          <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <Sparkles className="w-4 h-4 text-custom-turquoise animate-pulse" />
            <span className="text-white/90 text-sm font-medium">פתרונות דיגיטליים מתקדמים</span>
            <Zap className="w-4 h-4 text-custom-purple animate-pulse" />
          </div>

          {/* Main headline */}
          <h1 className={`text-4xl md:text-7xl font-black mb-8 transform transition-all duration-1000 delay-200 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            <span className="bg-gradient-to-r from-white via-custom-turquoise to-custom-purple bg-clip-text text-transparent font-rubik leading-tight">
              נבנה לכם את החלום
            </span>
            <br />
            <span className="text-white font-rubik">
              הדיגיטלי שלכם
            </span>
          </h1>

          {/* Subtitle */}
          <p className={`text-lg md:text-2xl mb-12 text-white/80 max-w-4xl mx-auto leading-relaxed transform transition-all duration-1000 delay-400 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            אם אין לכם זמן להתעסק עם עיצובים, טכנולוגיה ותוכן – אנחנו כאן כדי לעשות את זה בשבילכם, 
            <span className="text-custom-turquoise font-medium"> בעברית, מהר, ובמחיר שלא תמצאו במקום אחר</span>
          </p>

          {/* CTA Section */}
          <div className={`flex flex-col sm:flex-row items-center justify-center gap-6 transform transition-all duration-1000 delay-600 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            <button 
              onClick={handleContactClick} 
              className="group relative px-8 py-4 bg-gradient-to-r from-custom-purple to-custom-turquoise text-white font-bold rounded-xl shadow-2xl hover:shadow-custom-purple/25 transition-all duration-300 hover:scale-105 overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-custom-turquoise to-custom-purple opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-3">
                <Rocket className="w-5 h-5 group-hover:animate-bounce" />
                דברו איתנו עכשיו
                <ArrowLeft size={20} className="rtl:rotate-90 group-hover:translate-x-1 transition-transform" />
              </div>
            </button>

            <div className="flex items-center gap-4 text-white/60">
              <div className="flex -space-x-2">
                {[...Array(3)].map((_, i) => (
                  <div 
                    key={i} 
                    className="w-10 h-10 bg-gradient-to-br from-custom-purple to-custom-turquoise rounded-full border-2 border-white/20 animate-pulse"
                    style={{ animationDelay: `${i * 0.5}s` }}
                  />
                ))}
              </div>
              <span className="text-sm">
                <span className="text-custom-turquoise font-bold">30+</span> פרויקטים מוצלחים
              </span>
            </div>
          </div>

          {/* Stats */}
          <div className={`grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 transform transition-all duration-1000 delay-800 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            {[
              { number: "48", label: "שעות", desc: "זמן אספקה ממוצע" },
              { number: "₪450", label: "החל מ", desc: "לדף נחיתה" },
              { number: "₪950", label: "אתר תדמית", desc: "מרהיב ומקצועי" }
            ].map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-custom-turquoise/50 transition-all duration-300 hover:bg-white/10">
                  <div className="text-3xl md:text-4xl font-black text-custom-turquoise mb-2 font-rubik">
                    {stat.number}
                  </div>
                  <div className="text-white font-medium mb-1">{stat.label}</div>
                  <div className="text-white/60 text-sm">{stat.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default EnhancedHeroSection;
