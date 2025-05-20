
import { ArrowLeft } from "lucide-react";

const HeroSection = () => {
  const handleContactClick = () => {
    window.open(
      "https://wa.me/972545308505?text=שלום, ראינו את דף הנחיתה ואנחנו רוצים לקבל פרטים כלליים על השירותים שלכם.",
      "_blank"
    );
  };

  return (
    <section className="hero-gradient py-16 md:py-24 px-4 rounded-b-3xl">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 animate-fade-in">
            <h1 className="text-3xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik leading-tight">
              אתר, דף מכירה או אפליקציה – הכל מוכן לכם תוך ימים
            </h1>
            <p className="text-lg md:text-xl mb-8 text-gray-700 leading-relaxed">
              אם אין לכם זמן להתעסק עם עיצובים, טכנולוגיה ותוכן – אנחנו כאן כדי לעשות את זה בשבילכם, בעברית, מהר, ובמחיר שלא תמצאו במקום אחר.
            </p>
            <button
              onClick={handleContactClick}
              className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl"
            >
              דברו איתנו עכשיו
              <ArrowLeft size={18} className="rtl:rotate-180" />
            </button>
          </div>
          <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <div className="relative">
              <div className="absolute inset-0 bg-custom-purple rounded-2xl opacity-10 transform rotate-3"></div>
              <div className="absolute inset-0 bg-custom-turquoise rounded-2xl opacity-10 transform -rotate-3"></div>
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                alt="אנשים עובדים על מחשב"
                className="rounded-2xl shadow-lg relative z-10 w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
