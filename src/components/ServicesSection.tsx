
import ServiceCard from "./ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      title: "אתר לעסק תוך 48 שעות",
      icon: "📦",
      description: "אתר תדמית מעוצב, מותאם לנייד, עם וואטסאפ, מפה וטופס.",
      price: "החל מ־950 ש״ח",
      buttonText: "אני רוצה אתר תוך 48 שעות",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני מעוניין באתר לעסק שלי תוך 48 שעות. אשמח לשמוע פרטים נוספים ולראות דוגמאות.",
    },
    {
      title: "דף מבצע ממוקד",
      icon: "🎯",
      description: "עמוד אחד מושך, מכירתי ומיידי, להצגת שירות או מבצע.",
      price: "החל מ־490 ש״ח",
      buttonText: "אני רוצה דף מבצע",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני רוצה דף מבצע לעסק שלי – עמוד אחד להצגת מבצע/שירות. אפשר לשלוח לי פרטים?",
      linkTo: "/focused-landing-page",
    },
    {
      title: "אפליקציה עסקית פשוטה",
      icon: "📱",
      description: "אפליקציה בהתאמה אישית לעסק קטן – קטלוג, תורים, ניהול לקוחות ועוד.",
      price: "החל מ־1,500 ש״ח",
      buttonText: "אני רוצה אפליקציה",
      whatsappLink: "https://wa.me/972545308505?text=שלום, אני מעוניין באפליקציה בסיסית לעסק שלי. אשמח להבין מה האפשרויות ומה העלות.",
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
      </div>
    </section>
  );
};

export default ServicesSection;
