
import { HoverPeek } from "@/components/ui/link-preview";
import { useEffect, useState, useRef } from "react";
import { Globe, Smartphone, ShoppingCart, Palette, Code, Rocket } from "lucide-react";

const ExamplesSection = () => {
  const [visibleCards, setVisibleCards] = useState<boolean[]>(new Array(6).fill(false));
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  const examples = [
    {
      title: "ענבל טיפוח ויופי",
      description: "דף נחיתה מהמם מושך וצבעוני שמותאם לקהל נשי ומיועד לעודד פניה בוואטסאפ",
      url: "https://preview--inbal-touch-design.lovable.app/",
      linkText: "ראה דוגמה חיה",
      icon: Palette,
      gradient: "from-pink-400 to-purple-500"
    },
    {
      title: "דף מבצע שיווקי",
      description: "דף נחיתה ממוקד למבצע שיווקי מיוחד, עם טופס לאיסוף לידים",
      url: "https://review.ofair.co.il",
      linkText: "ראה דוגמה חיה",
      icon: Rocket,
      gradient: "from-orange-400 to-red-500"
    },
    {
      title: "דף עסקי לשירותים",
      description: "דף נחיתה להצגת שירותים עסקיים עם קריאה לפעולה ברורה",
      url: "https://biz.ofair.co.il",
      linkText: "ראה דוגמה חיה",
      icon: Globe,
      gradient: "from-blue-400 to-cyan-500"
    },
    {
      title: "אתר מסחרי לתעופה",
      description: "אתר מודרני ומותאם למובייל עם מערכת הצעות מחיר מתקדמת",
      url: "https://preview--airfq-aero-bid-nexus.lovable.app/",
      linkText: "ראה דוגמה חיה",
      icon: Code,
      gradient: "from-green-400 to-teal-500"
    },
    {
      title: "אפליקציה מובייל",
      description: "ממשק משתמש אינטואיטיבי עם חווית משתמש מעולה למובייל",
      url: "https://preview--inbal-touch-design.lovable.app/",
      linkText: "ראה דוגמה חיה",
      icon: Smartphone,
      gradient: "from-indigo-400 to-purple-500"
    },
    {
      title: "חנות אונליין",
      description: "פלטפורמת מכירות עם עיצוב מודרני ומערכת תשלומים מאובטחת",
      url: "https://biz.ofair.co.il",
      linkText: "ראה דוגמה חיה",
      icon: ShoppingCart,
      gradient: "from-emerald-400 to-green-500"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardsRef.current.findIndex(card => card === entry.target);
            if (index !== -1) {
              setTimeout(() => {
                setVisibleCards(prev => {
                  const newVisible = [...prev];
                  newVisible[index] = true;
                  return newVisible;
                });
              }, index * 150);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardsRef.current.forEach(card => {
      if (card) observer.observe(card);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-4 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* Parallax background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-32 h-32 bg-custom-purple rounded-full animate-pulse"></div>
        <div className="absolute bottom-40 right-20 w-20 h-20 bg-custom-turquoise rounded-full animate-bounce"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-purple-400 transform rotate-45 animate-spin" style={{ animationDuration: '20s' }}></div>
      </div>

      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik">
            גלריית הפרויקטים שלנו
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            עברו עם העכבר על הכרטיסיות כדי לראות תצוגה מקדימה חיה של הפרויקטים המדהימים שיצרנו
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-custom-purple to-custom-turquoise mx-auto mt-6 rounded-full"></div>
        </div>
        
        {/* Desktop Layout - Grid */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <div 
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`group relative transform transition-all duration-700 ${
                  visibleCards[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  perspective: '1000px'
                }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 hover:rotate-x-2 group-hover:scale-105 overflow-hidden">
                  
                  {/* Gradient header with icon */}
                  <div className={`h-24 bg-gradient-to-r ${example.gradient} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10"></div>
                    <div className="absolute top-4 right-4 p-3 bg-white/20 backdrop-blur-sm rounded-full border border-white/30">
                      <IconComponent className="w-6 h-6 text-white drop-shadow-sm" />
                    </div>
                    
                    {/* Animated background shapes */}
                    <div className="absolute -top-2 -right-2 w-20 h-20 bg-white/10 rounded-full animate-ping"></div>
                    <div className="absolute bottom-2 left-4 w-8 h-8 bg-white/20 rounded-full animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="p-6 relative">
                    <h3 className="text-xl font-bold text-custom-purple mb-3 font-rubik group-hover:text-opacity-80 transition-colors">
                      {example.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed text-sm">
                      {example.description}
                    </p>
                    
                    {/* Preview link with hover effect */}
                    <HoverPeek 
                      url={example.url}
                      peekWidth={320}
                      peekHeight={200}
                    >
                      <a
                        href={example.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-custom-purple hover:text-opacity-80 font-medium group relative overflow-hidden"
                      >
                        <span className="relative z-10 transition-transform group-hover:translate-x-1">
                          {example.linkText}
                        </span>
                        <svg 
                          className="w-4 h-4 transition-transform group-hover:translate-x-1 group-hover:scale-110" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            strokeWidth={2} 
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" 
                          />
                        </svg>
                        
                        {/* Animated underline */}
                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-custom-purple transition-all duration-300 group-hover:w-full"></span>
                      </a>
                    </HoverPeek>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-custom-purple/5 to-custom-turquoise/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                  
                  {/* 3D depth effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
                </div>

                {/* Floating elements on hover */}
                <div className="absolute -inset-2 bg-gradient-to-r from-custom-purple/20 to-custom-turquoise/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10 blur-xl"></div>
              </div>
            );
          })}
        </div>

        {/* Mobile Layout - Card Style with 16:9 Aspect Ratio */}
        <div className="md:hidden space-y-6">
          {examples.map((example, index) => {
            const IconComponent = example.icon;
            return (
              <div
                key={index}
                ref={el => cardsRef.current[index] = el}
                className={`group relative transform transition-all duration-700 ${
                  visibleCards[index] 
                    ? 'translate-y-0 opacity-100 scale-100' 
                    : 'translate-y-8 opacity-0 scale-95'
                }`}
                style={{ 
                  transitionDelay: `${index * 100}ms`
                }}
              >
                <div className="relative bg-white rounded-3xl shadow-xl overflow-hidden mx-4">
                  
                  {/* Header with title and description */}
                  <div className="p-6 pb-4">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`p-2 rounded-full bg-gradient-to-r ${example.gradient}`}>
                        <IconComponent className="w-5 h-5 text-white" />
                      </div>
                      <span className="text-xs text-gray-500 font-medium">Live</span>
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 mb-3 font-rubik">
                      {example.title}
                    </h3>
                    
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {example.description}
                    </p>
                  </div>

                  {/* 16:9 Preview Container */}
                  <div className="relative mx-6 mb-6">
                    <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200 shadow-inner">
                      <HoverPeek 
                        url={example.url}
                        peekWidth={400}
                        peekHeight={225}
                      >
                        <div className="w-full h-full relative group cursor-pointer">
                          {/* Preview placeholder with gradient */}
                          <div className={`w-full h-full bg-gradient-to-br ${example.gradient} relative overflow-hidden`}>
                            
                            {/* Simulated browser interface */}
                            <div className="absolute top-3 left-3 right-3 bg-white/90 backdrop-blur-sm rounded-lg p-2">
                              <div className="flex items-center gap-2">
                                <div className="flex gap-1">
                                  <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                                  <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                                  <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                                </div>
                                <div className="flex-1 bg-gray-100 rounded px-2 py-1">
                                  <div className="text-xs text-gray-500 truncate">{example.url}</div>
                                </div>
                              </div>
                            </div>

                            {/* Content preview area */}
                            <div className="absolute bottom-4 left-4 right-4 space-y-2">
                              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 border border-white/30">
                                <div className="flex items-center gap-2 mb-2">
                                  <IconComponent className="w-4 h-4 text-white" />
                                  <div className="text-white text-xs font-medium">תצוגה מקדימה</div>
                                </div>
                                <div className="grid grid-cols-3 gap-1">
                                  <div className="h-2 bg-white/30 rounded"></div>
                                  <div className="h-2 bg-white/50 rounded"></div>
                                  <div className="h-2 bg-white/40 rounded"></div>
                                </div>
                              </div>
                            </div>

                            {/* Animated overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                            
                            {/* Play button overlay */}
                            <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                              <div className="w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                                <svg className="w-5 h-5 text-gray-700 mr-0.5" fill="currentColor" viewBox="0 0 24 24">
                                  <path d="M8 5v14l11-7z"/>
                                </svg>
                              </div>
                            </div>
                          </div>
                        </div>
                      </HoverPeek>
                    </div>
                  </div>

                  {/* Action buttons */}
                  <div className="px-6 pb-6">
                    <a
                      href={example.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-gradient-to-r from-custom-purple to-custom-turquoise text-white py-3 px-4 rounded-xl font-medium text-center block hover:shadow-lg hover:scale-105 transition-all duration-200"
                    >
                      {example.linkText}
                    </a>
                  </div>

                  {/* Bottom indicator dots */}
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-custom-purple rounded-full"></div>
                    <div className="w-1.5 h-1.5 bg-gray-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom decorative element */}
        <div className="text-center mt-16">
          <div className="inline-flex items-center gap-4 px-6 py-3 bg-white/60 backdrop-blur-sm rounded-full border border-white/30 shadow-lg">
            <div className="w-2 h-2 bg-custom-purple rounded-full animate-pulse"></div>
            <span className="text-gray-600 font-medium">עוד פרויקטים בדרך...</span>
            <div className="w-2 h-2 bg-custom-turquoise rounded-full animate-pulse" style={{ animationDelay: '0.5s' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
