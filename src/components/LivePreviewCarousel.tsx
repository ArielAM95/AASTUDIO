
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
    }, 5000); // Scroll every 5 seconds

    return () => clearInterval(autoScroll);
  }, [api]);

  return (
    <section className="py-12 px-4 bg-gradient-to-br from-purple-50 to-turquoise-50">
      <div className="container mx-auto max-w-5xl">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-custom-purple mb-3 font-rubik">
            דוגמאות מעבודות שלנו
          </h2>
          <p className="text-gray-600 max-w-xl mx-auto">
            צפו בדוגמאות של אתרים ודפי נחיתה שיצרנו ללקוחות שלנו
          </p>
        </div>

        <Carousel
          setApi={setApi}
          className="w-full max-w-4xl mx-auto"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {exampleSites.map((site, index) => (
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/4">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Mobile frame container - made smaller */}
                    <div className="relative mx-auto w-full max-w-[160px] bg-gray-900 rounded-xl p-1.5 shadow-lg">
                      {/* Mobile screen */}
                      <div className="bg-white rounded-lg overflow-hidden relative" style={{ aspectRatio: '9/16' }}>
                        {/* Status bar */}
                        <div className="h-3 bg-gray-100 flex items-center justify-center">
                          <div className="flex space-x-0.5">
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Website preview */}
                        <div className="h-full relative bg-gradient-to-br from-purple-100 to-turquoise-100">
                          {site.url.includes('inbal-touch-design') ? (
                            <iframe
                              src={site.url}
                              className="w-full h-full border-0 pointer-events-none"
                              title={site.title}
                              style={{ 
                                transform: 'scale(0.25)', 
                                transformOrigin: 'top left', 
                                width: '400%', 
                                height: '400%' 
                              }}
                              loading="lazy"
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-custom-purple/20 to-custom-turquoise/20">
                              <div className="text-center p-2">
                                <div className="w-8 h-8 bg-custom-purple/30 rounded mx-auto mb-1"></div>
                                <div className="text-xs text-gray-600">דוגמה</div>
                              </div>
                            </div>
                          )}
                          {/* Overlay to prevent interaction */}
                          <div className="absolute inset-0 bg-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Card info - made more compact */}
                    <div className="p-4 flex-1 flex flex-col">
                      <div className="mb-2">
                        <span className="inline-block bg-custom-purple text-white text-xs px-2 py-0.5 rounded-full">
                          {site.category}
                        </span>
                      </div>
                      <h3 className="text-sm font-bold text-custom-purple mb-2 font-rubik leading-tight">
                        {site.title}
                      </h3>
                      <p className="text-gray-600 mb-3 text-xs leading-relaxed flex-1">
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
                          size="sm"
                          className="w-full border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white transition-colors text-xs"
                        >
                          צפה באתר
                          <ExternalLink size={12} className="mr-1" />
                        </Button>
                      </a>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>

        <div className="text-center mt-6">
          <p className="text-gray-600 mb-3 text-sm">
            רוצים לראות איך האתר שלכם יכול להיראות?
          </p>
          <a
            href="https://wa.me/972545308505?text=שלום, ראיתי את הדוגמאות ואני רוצה לקבל פרטים על יצירת אתר דומה"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-custom-purple hover:bg-opacity-90 text-white font-medium px-6 py-2 text-sm">
              בואו נתחיל לעבוד!
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default LivePreviewCarousel;
