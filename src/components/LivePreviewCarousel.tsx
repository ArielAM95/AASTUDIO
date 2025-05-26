
import React, { useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { type CarouselApi } from "@/components/ui/carousel";

interface ExampleSite {
  title: string;
  description: string;
  url: string;
  category: string;
}

const exampleSites: ExampleSite[] = [
  {
    title: "ענבל טיפוח ויופי",
    description: "דף נחיתה מהמם ומושך לעסק טיפוח ויופי",
    url: "https://preview--inbal-touch-design.lovable.app/",
    category: "דף נחיתה"
  },
  {
    title: "אתר עסקי מקצועי",
    description: "אתר עסקי שלם עם כל הפונקציות הנדרשות",
    url: "https://example-business.com",
    category: "אתר עסקי"
  },
  {
    title: "דף נחיתה למכירות",
    description: "דף נחיתה ממוקד המיועד להגדלת מכירות",
    url: "https://example-sales.com",
    category: "דף נחיתה"
  },
  {
    title: "אתר תיק עבודות",
    description: "אתר תיק עבודות מעוצב לאמנים ויוצרים",
    url: "https://example-portfolio.com",
    category: "תיק עבודות"
  }
];

const LivePreviewCarousel = () => {
  const [api, setApi] = React.useState<CarouselApi>();

  useEffect(() => {
    if (!api) {
      return;
    }

    // Auto-scroll functionality
    const autoScroll = setInterval(() => {
      if (api.canScrollNext()) {
        api.scrollNext();
      } else {
        api.scrollTo(0);
      }
    }, 4000); // Scroll every 4 seconds

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-purple-50 to-turquoise-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-custom-purple mb-4 font-rubik">
            דוגמאות מעבודות שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            צפו בדוגמאות של אתרים ודפי נחיתה שיצרנו ללקוחות שלנו - כולם מעוצבים בקפידה ומותאמים למובייל
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-5xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {exampleSites.map((site, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <CardContent className="p-0">
                    {/* Mobile frame container */}
                    <div className="relative mx-auto w-full max-w-[280px] bg-gray-900 rounded-[2.5rem] p-2 shadow-xl">
                      {/* Mobile screen */}
                      <div className="bg-white rounded-[2rem] overflow-hidden relative" style={{ aspectRatio: '9/19.5' }}>
                        {/* Status bar */}
                        <div className="h-6 bg-gray-100 flex items-center justify-center">
                          <div className="flex space-x-1">
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Website iframe */}
                        <div className="h-full relative">
                          <iframe
                            src={site.url}
                            className="w-full h-full border-0 pointer-events-none"
                            title={site.title}
                            style={{ transform: 'scale(0.4)', transformOrigin: 'top left', width: '250%', height: '250%' }}
                          />
                          {/* Overlay to prevent interaction */}
                          <div className="absolute inset-0 bg-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Card info */}
                    <div className="p-6">
                      <div className="mb-2">
                        <span className="inline-block bg-custom-purple text-white text-xs px-2 py-1 rounded-full">
                          {site.category}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold text-custom-purple mb-2 font-rubik">
                        {site.title}
                      </h3>
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                        {site.description}
                      </p>
                      <a
                        href={site.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <Button 
                          variant="outline" 
                          className="w-full border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white transition-colors"
                        >
                          צפה באתר המלא
                          <ExternalLink size={16} className="mr-2" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>

        <div className="text-center mt-8">
          <p className="text-gray-600 mb-4">
            רוצים לראות איך האתר שלכם יכול להיראות?
          </p>
          <a
            href="https://wa.me/972545308505?text=שלום, ראיתי את הדוגמאות ואני רוצה לקבל פרטים על יצירת אתר דומה"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-custom-purple hover:bg-opacity-90 text-white font-medium px-8 py-3">
              בואו נתחיל לעבוד!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewCarousel;
