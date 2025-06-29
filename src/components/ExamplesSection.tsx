
import { HoverPeek } from "@/components/ui/link-preview";
import { ExternalLink, Globe, Zap, Users, ShoppingCart, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

const ExamplesSection = () => {
  const examples = [{
    title: "ענבל טיפוח ויופי",
    description: "דף נחיתה מהמם מושך וצבעוני שמותאם לקהל נשי ומיועד לעודד פניה בוואטסאפ",
    url: "https://preview--inbal-touch-design.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "דף נחיתה",
    categoryColor: "bg-pink-500",
    icon: Users,
    gradient: "from-pink-500/10 to-purple-500/10"
  }, {
    title: "דף מבצע שיווקי",
    description: "דף נחיתה ממוקד למבצע שיווקי מיוחד, עם טופס לאיסוף לידים",
    url: "https://review.ofair.co.il",
    linkText: "ראה דוגמה חיה",
    category: "מבצע",
    categoryColor: "bg-orange-500",
    icon: Zap,
    gradient: "from-orange-500/10 to-red-500/10"
  }, {
    title: "אתר להזמנת נופש בסאן מרינו",
    description: "אתר יפיפה להזמנת מקום בנופש, עם מערכת הזמנות, אוטומציות מלאות ועיצוב יפיפה",
    url: "https://preview--m-539974.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "אתר עסקי",
    categoryColor: "bg-blue-500",
    icon: Globe,
    gradient: "from-blue-500/10 to-cyan-500/10"
  }, {
    title: "דף נחיתה לאיסוף לידים עסקיים",
    description: "מופט ישראל בחרו לפנות לחברות הייטק ולהציע מתנות איכותיות לעובדים, דף עם אוטומציות ללידים וקו מובהק להשארת פרטים",
    url: "https://preview--moft-tech-gifts.lovable.app/",
    linkText: "ראה דוגמה חיה",
    category: "B2B",
    categoryColor: "bg-green-500",
    icon: ShoppingCart,
    gradient: "from-green-500/10 to-emerald-500/10"
  }];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-gray-50 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-custom-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-custom-turquoise rounded-full blur-3xl animate-pulse" style={{
          animationDelay: "2s"
        }}></div>
      </div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-custom-purple/10 text-custom-purple px-4 py-2 rounded-full text-sm font-medium mb-6 border border-custom-purple/20">
            <Zap size={16} />
            עבודות שכבר מביאות תוצאות
          </div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik">
            דוגמאות מהעבודות שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            עברו עם העכבר על הקישורים כדי לראות תצוגה מקדימה חיה של הפרויקטים שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <div key={index} className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${example.gradient} backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in`} style={{
                animationDelay: `${index * 0.1}s`
              }}>
                {/* Glassmorphism overlay */}
                <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                
                {/* Card content */}
                <div className="relative z-10 p-8">
                  {/* Category badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center gap-2 ${example.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                      <IconComponent size={14} />
                      {example.category}
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <ExternalLink size={20} className="text-custom-purple" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-custom-purple mb-4 font-rubik group-hover:text-opacity-80 transition-colors">
                    {example.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-700 mb-6 leading-relaxed text-lg">
                    {example.description}
                  </p>

                  {/* Link with preview */}
                  <HoverPeek url={example.url} peekWidth={400} peekHeight={250}>
                    <a href={example.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3 bg-custom-purple hover:bg-custom-purple/90 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105">
                      {example.linkText}
                      <ExternalLink size={18} className="transition-transform group-hover:translate-x-1" />
                    </a>
                  </HoverPeek>
                </div>

                {/* Hover glow effect */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-purple/10 via-transparent to-custom-turquoise/10 rounded-2xl"></div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA with new button */}
        <div className="text-center mt-16">
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <div className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-6 py-3 rounded-full shadow-lg border border-gray-200">
              <span className="text-gray-600 font-medium">רוצים לראות עוד דוגמאות?</span>
            </div>
            <Link 
              to="/examples"
              className="inline-flex items-center gap-3 bg-custom-purple hover:bg-custom-purple/90 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
            >
              ראו את כל הדוגמאות
              <ArrowLeft size={20} className="transition-transform group-hover:-translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
