
import { useState, useRef, useEffect } from "react";
import { Play, Pause, ExternalLink, Heart, Share, Eye } from "lucide-react";

interface Project {
  id: number;
  title: string;
  description: string;
  url: string;
  category: string;
  views: string;
  likes: string;
}

const TikTokGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  const projects: Project[] = [
    {
      id: 1,
      title: "ענבל טיפוח ויופי",
      description: "דף נחיתה אלגנטי לעסק יופי וטיפוח עם עיצוב נשי ומודרן",
      url: "https://preview--inbal-touch-design.lovable.app/",
      category: "דף נחיתה",
      views: "12.5K",
      likes: "2.3K"
    },
    {
      id: 2,
      title: "דף מבצע שיווקי",
      description: "דף נחיתה ממוקד למבצע עם קריאה לפעולה ברורה ואיסוף לידים",
      url: "https://review.ofair.co.il",
      category: "מבצע",
      views: "8.7K",
      likes: "1.8K"
    },
    {
      id: 3,
      title: "דף עסקי לשירותים",
      description: "דף עסקי מקצועי להצגת שירותים עם טפסי יצירת קשר",
      url: "https://biz.ofair.co.il",
      category: "עסקי",
      views: "15.2K",
      likes: "3.1K"
    },
    {
      id: 4,
      title: "אתר מסחרי לתעופה",
      description: "אתר מתקדם עם מערכת הצעות מחיר ודפי מוצר מורכבים",
      url: "https://preview--airfq-aero-bid-nexus.lovable.app/",
      category: "אתר מתקדם",
      views: "22.1K",
      likes: "4.5K"
    },
    {
      id: 5,
      title: "דף נחיתה טכנולוגי",
      description: "עיצוב מודרני לחברת טכנולוגיה עם ממשק משתמש חדשני",
      url: "https://preview--inbal-touch-design.lovable.app/",
      category: "טכנולוגיה",
      views: "18.9K",
      likes: "3.7K"
    },
    {
      id: 6,
      title: "אתר תדמית מקצועי",
      description: "אתר תדמית איכותי לעסק עם גלריית עבודות ודף צוות",
      url: "https://biz.ofair.co.il",
      category: "תדמית",
      views: "31.4K",
      likes: "6.2K"
    }
  ];

  const scrollToIndex = (index: number) => {
    if (itemRefs.current[index]) {
      itemRefs.current[index]?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
      });
      setCurrentIndex(index);
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = itemRefs.current.findIndex(ref => ref === entry.target);
            if (index !== -1) {
              setCurrentIndex(index);
            }
          }
        });
      },
      { threshold: 0.7 }
    );

    itemRefs.current.forEach(ref => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-20 bg-black relative overflow-hidden">
      <div className="container mx-auto max-w-md relative">
        <h2 className="text-3xl font-bold text-center mb-8 text-white font-rubik">
          גלריית הפרויקטים שלנו
        </h2>
        
        {/* TikTok-style vertical scroll */}
        <div 
          ref={containerRef}
          className="h-[80vh] overflow-y-auto snap-y snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {projects.map((project, index) => (
            <div
              key={project.id}
              ref={el => itemRefs.current[index] = el}
              className="h-full snap-center relative flex items-center justify-center mb-4"
            >
              {/* Main video-like container */}
              <div className="relative w-full max-w-sm h-[70vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
                
                {/* Background gradient with brand colors */}
                <div className="absolute inset-0 bg-gradient-to-br from-custom-purple/20 to-custom-turquoise/10"></div>
                
                {/* Preview area - inline website preview */}
                <div className="relative h-3/4 overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 relative cursor-pointer group">
                    
                    {/* Embedded website preview */}
                    <div className="absolute inset-4 bg-white rounded-lg overflow-hidden shadow-lg">
                      <div className="h-6 bg-gray-100 flex items-center px-2 gap-1">
                        <div className="w-2 h-2 bg-red-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                      </div>
                      
                      {/* Actual website preview iframe */}
                      <iframe
                        src={project.url}
                        className="w-full h-full border-0 pointer-events-none"
                        loading="lazy"
                        title={project.title}
                      />
                    </div>

                    {/* Play button overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg">
                        <Play className="w-6 h-6 text-black mr-1" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom info section */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <div className="flex items-end justify-between">
                    
                    {/* Left side - project info */}
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-xs bg-custom-purple/20 text-custom-turquoise px-2 py-1 rounded-full backdrop-blur-sm border border-custom-turquoise/30">
                          {project.category}
                        </span>
                      </div>
                      
                      <h3 className="text-white font-bold text-lg mb-1 font-rubik">
                        {project.title}
                      </h3>
                      
                      <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
                        {project.description}
                      </p>
                      
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-custom-turquoise text-sm font-medium hover:text-white transition-colors"
                      >
                        ראה פרויקט
                        <ExternalLink size={14} />
                      </a>
                    </div>

                    {/* Right side - TikTok-style actions */}
                    <div className="flex flex-col items-center gap-4 ml-4">
                      
                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                          <Heart className="w-5 h-5 text-custom-turquoise" />
                        </div>
                        <span className="text-white text-xs">{project.likes}</span>
                      </button>

                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                          <Eye className="w-5 h-5 text-custom-turquoise" />
                        </div>
                        <span className="text-white text-xs">{project.views}</span>
                      </button>

                      <button className="flex flex-col items-center gap-1 group">
                        <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                          <Share className="w-5 h-5 text-custom-turquoise" />
                        </div>
                      </button>
                      
                    </div>
                  </div>
                </div>

                {/* Progress indicator */}
                <div className="absolute top-4 left-4 right-16 flex gap-1">
                  {projects.map((_, i) => (
                    <div
                      key={i}
                      className={`h-1 flex-1 rounded-full transition-all duration-300 ${
                        i === currentIndex ? 'bg-custom-turquoise' : 'bg-white/30'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => scrollToIndex(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                currentIndex === index ? 'bg-custom-turquoise w-6' : 'bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TikTokGallery;
