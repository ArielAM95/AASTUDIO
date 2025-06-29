
import { ArrowLeft, Zap, Clock, Star } from "lucide-react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/972545308505?text=שלום, ראינו את דף הנחיתה ואנחנו רוצים לקבל פרטים כלליים על השירותים שלכם.", "_blank");
  };
  
  return (
    <section className="hero-gradient py-16 md:py-24 px-4 rounded-b-3xl overflow-hidden relative">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-custom-purple rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-custom-turquoise rounded-full blur-xl animate-pulse" style={{
          animationDelay: "1s"
        }}></div>
        <div className="absolute top-1/2 left-1/3 w-20 h-20 bg-custom-purple rounded-full blur-lg animate-pulse" style={{
          animationDelay: "2s"
        }}></div>
      </div>
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-custom-purple/10 text-custom-purple px-4 py-2 rounded-full text-sm font-medium mb-6 border border-custom-purple/20">
              <Zap size={16} />
              האתר שלכם מוכן תוך 48 שעות!
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-custom-purple mb-6 font-rubik leading-tight">
              <span className="block">תפסיקו לחלום</span>
              <span className="block text-indigo-600">תתחילו לבנות</span>
              <span className="block text-2xl md:text-3xl font-normal mt-2">את הדף שיביא לכם לקוחות</span>
            </h1>
            
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              בעוד העולם מתלבט, אנחנו בונים. <strong>דפי נחיתה ואתרים</strong> שממירים ביקורים ללקוחות משלמים - 
              <span className="text-custom-purple font-semibold"> מהר, ובמחיר שיתן לכם רק לחייך.</span>
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mb-8 px-0">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-lg shadow-sm">
                <Clock className="text-custom-turquoise" size={20} />
                <span className="font-semibold text-gray-800">48 שעות</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm py-2 rounded-lg shadow-sm px-[27px]">
                <Star className="text-custom-purple" size={20} />
                <span className="font-semibold text-gray-800">החל מ-490₪</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button onClick={handleContactClick} className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-4 px-8 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-xl hover:scale-105 text-lg">
                בואו נתחיל עכשיו
                <ArrowLeft size={20} className="rtl:-rotate90" />
              </button>
              <Link to="/examples" className="border-2 border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white font-medium py-4 px-8 rounded-xl transition-all flex items-center justify-center gap-2">
                ראו דוגמאות
                <span className="text-lg">👀</span>
              </Link>
            </div>
          </div>
          
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
            <div className="relative">
              {/* Multiple background layers for depth */}
              <div className="absolute inset-0 bg-gradient-to-br from-custom-purple to-custom-turquoise rounded-3xl opacity-20 transform rotate-6 scale-105"></div>
              <div className="absolute inset-0 bg-gradient-to-tl from-custom-turquoise to-custom-purple rounded-3xl opacity-15 transform -rotate-3 scale-110"></div>
              <div className="absolute inset-0 bg-custom-purple rounded-3xl opacity-10 transform rotate-1 scale-95"></div>
              
              {/* Main image */}
              <div className="relative z-10 bg-white rounded-2xl p-4 shadow-2xl">
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="צוות מקצועי בונה אתרים" className="rounded-xl w-full h-64 md:h-80 object-cover" />
                
                {/* Floating cards */}
                <div className="absolute -top-4 -right-4 bg-white rounded-lg shadow-lg p-3 animate-bounce" style={{
                  animationDelay: "0.5s"
                }}>
                  <div className="text-2xl">⚡</div>
                  <div className="text-xs font-semibold text-custom-purple">מהיר</div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-3 animate-bounce" style={{
                  animationDelay: "1s"
                }}>
                  <div className="text-2xl">💎</div>
                  <div className="text-xs font-semibold text-custom-turquoise">איכותי</div>
                </div>
                
                <div className="absolute top-1/2 -left-6 bg-white rounded-lg shadow-lg p-3 animate-bounce" style={{
                  animationDelay: "1.5s"
                }}>
                  <div className="text-2xl">🎯</div>
                  <div className="text-xs font-semibold text-custom-purple">ממוקד</div>
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
