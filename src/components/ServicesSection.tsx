
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "אתר לעסק",
      icon: "📦",
      description: "אתר תדמית מעוצב, מותאם לנייד, עם וואטסאפ, מפה וטופס.",
      price: "החל מ־950 ש״ח",
      buttonText: "מה זה כולל",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני מעוניין באתר לעסק שלי. אשמח לשמוע פרטים נוספים ולראות דוגמאות.",
      linkTo: "/business-website",
    },
    {
      title: "דף נחיתה מעוצב תוך 48 שעות*",
      icon: "🎯",
      description: "עמוד אחד מושך, מכירתי ומיידי, להצגת שירות או מבצע.",
      price: "החל מ־490 ש״ח",
      buttonText: "מה זה כולל",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני רוצה דף נחיתה מעוצב לעסק שלי – עמוד אחד להצגת מבצע/שירות. אפשר לשלוח לי פרטים?",
      linkTo: "/focused-landing-page",
    },
    {
      title: "אפליקציה עסקית פשוטה",
      icon: "📱",
      description: "אפליקציה בהתאמה אישית לעסק קטן – קטלוג, תורים, ניהול לקוחות ועוד.",
      price: "החל מ־1,500 ש״ח",
      buttonText: "מה זה כולל",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני מעוניין באפליקציה בסיסית לעסק שלי. אשמח להבין מה האפשרויות ומה העלות.",
      linkTo: "/business-app",
    },
  ];

  return (
    <section className="py-16 px-4" id="services">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
          השירותים שלנו
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="animate-fade-in" 
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ServiceCard {...service} />
            </div>
          ))}
        </div>
        <p className="text-center mt-8 text-gray-600 font-assistant">* המחירים וזמן האספקה תלויים באפיון צרכי הלקוח</p>
      </div>
    </section>
  );
};

export default ServicesSection;
