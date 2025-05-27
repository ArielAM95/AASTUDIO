
import { HoverPeek } from "@/components/ui/link-preview";

const ExamplesSection = () => {
  const examples = [
    {
      title: "דף נחיתה ממוקד",
      description: "דף נחיתה יעיל שממיר מבקרים ללקוחות פוטנציאליים",
      url: "https://example-landing.com",
      linkText: "ראה דוגמה חיה"
    },
    {
      title: "אתר עסקי מקצועי",
      description: "אתר מלא לעסק עם ניהול תוכן ופונקציונליות מתקדמת",
      url: "https://example-business.com",
      linkText: "ראה דוגמה חיה"
    },
    {
      title: "אפליקציית ווב",
      description: "אפליקציה מתקדמת עם ממשק משתמש אינטואיטיבי",
      url: "https://example-app.com",
      linkText: "ראה דוגמה חיה"
    },
    {
      title: "חנות דיגיטלית",
      description: "פלטפורמת מכירות מקוונת עם מערכת תשלומים מאובטחת",
      url: "https://example-ecommerce.com", 
      linkText: "ראה דוגמה חיה"
    }
  ];

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-purple mb-4 font-rubik">
            דוגמאות מהעבודות שלנו
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            עברו עם העכבר על הקישורים כדי לראות תצוגה מקדימה חיה של הפרויקטים שלנו
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {examples.map((example, index) => (
            <div 
              key={index}
              className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-xl font-bold text-custom-purple mb-3 font-rubik">
                {example.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                {example.description}
              </p>
              <HoverPeek 
                url={example.url}
                peekWidth={300}
                peekHeight={200}
              >
                <a
                  href={example.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-custom-purple hover:text-opacity-80 font-medium underline decoration-dotted hover:decoration-solid transition-all"
                >
                  {example.linkText}
                  <svg 
                    className="w-4 h-4" 
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
                </a>
              </HoverPeek>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExamplesSection;
