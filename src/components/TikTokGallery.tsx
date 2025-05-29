
import { useState, useRef, useEffect } from "react";
import { projects } from "@/data/projects";
import ProjectCard from "@/components/project/ProjectCard";
import ProgressIndicator from "@/components/project/ProgressIndicator";
import NavigationDots from "@/components/project/NavigationDots";

const TikTokGallery = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

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
              <div className="relative">
                <ProjectCard project={project} />
                <ProgressIndicator total={projects.length} current={currentIndex} />
              </div>
            </div>
          ))}
        </div>

        <NavigationDots 
          total={projects.length} 
          current={currentIndex} 
          onDotClick={scrollToIndex} 
        />
      </div>
    </section>
  );
};

export default TikTokGallery;
