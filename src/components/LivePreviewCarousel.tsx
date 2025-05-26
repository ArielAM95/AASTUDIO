
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

  const renderMobilePreview = (site: ExampleSite) => {
    if (site.url.includes('inbal-touch-design')) {
      return (
        <iframe
          src={site.url}
          className="w-full h-full border-0 pointer-events-none"
          title={site.title}
          style={{ 
            transform: 'scale(0.2)', 
            transformOrigin: 'top left', 
            width: '500%', 
            height: '500%' 
          }}
          loading="lazy"
        />
      );
    }
    
    // Mock content for other examples
    return (
      <div className="w-full h-full bg-gradient-to-br from-purple-100 to-blue-100 p-2">
        <div className="bg-white rounded-lg p-2 mb-2 shadow-sm">
          <div className="h-1 bg-custom-purple rounded mb-1"></div>
          <div className="h-1 bg-gray-200 rounded mb-1"></div>
          <div className="h-1 bg-gray-200 rounded w-3/4"></div>
        </div>
        <div className="bg-white rounded-lg p-2 mb-2 shadow-sm">
          <div className="h-8 bg-gradient-to-r from-custom-purple to-custom-turquoise rounded mb-1"></div>
        </div>
        <div className="grid grid-cols-2 gap-1">
          <div className="bg-white rounded p-1">
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
          <div className="bg-white rounded p-1">
            <div className="h-4 bg-gray-200 rounded"></div>
          </div>
        </div>
        <div className="absolute bottom-2 left-2 right-2">
          <div className="bg-custom-purple text-white text-center py-1 rounded text-xs">
            {site.category}
          </div>
        </div>
      </div>
    );
  };

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
              <CarouselItem key={index} className="pl-2 md:pl-4 md:basis-1/2 lg:basis-1/3">
                <Card className="bg-white shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden h-full">
                  <CardContent className="p-0 flex flex-col h-full">
                    {/* Mobile frame container - even smaller */}
                    <div className="relative mx-auto w-full max-w-[120px] bg-gray-900 rounded-lg p-1 shadow-lg">
                      {/* Mobile screen */}
                      <div className="bg-white rounded-md overflow-hidden relative" style={{ aspectRatio: '9/16' }}>
                        {/* Status bar */}
                        <div className="h-2 bg-gray-100 flex items-center justify-center">
                          <div className="flex space-x-0.5">
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                            <div className="w-0.5 h-0.5 bg-gray-400 rounded-full"></div>
                          </div>
                        </div>
                        
                        {/* Website preview */}
                        <div className="h-full relative">
                          {renderMobilePreview(site)}
                          {/* Overlay to prevent interaction */}
                          <div className="absolute inset-0 bg-transparent"></div>
                        </div>
                      </div>
                    </div>

                    {/* Card info - more compact */}
                    <div className="p-3 flex-1 flex flex-col">
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
                          <ExternalLink size={10} className="mr-1" />
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
