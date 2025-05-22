
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";

const DigitalAdvertisingSection = () => {
  const platforms = [
    {
      name: "גוגל",
      icon: "🔍",
      description: "פרסום ממומן במנוע החיפוש הגדול בעולם וברשת התוכן של גוגל"
    },
    {
      name: "פייסבוק",
      icon: "👥",
      description: "קמפיינים ממוקדים ברשת החברתית הגדולה עם יכולות פילוח מתקדמות"
    },
    {
      name: "אינסטגרם",
      icon: "📸",
      description: "מודעות ויזואליות וסטוריז ממומנים לחשיפה מקסימלית לקהל צעיר ואיכותי"
    },
    {
      name: "יוטיוב",
      icon: "🎥",
      description: "פרסומות וידאו לפני ובמהלך צפייה בתכנים פופולריים"
    }
  ];

  return (
    <section className="py-16 px-4 turquoise-gradient">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-4 font-rubik text-custom-purple">
          פרסום דיגיטלי בכל הפלטפורמות
        </h2>
        <p className="text-center text-gray-700 mb-12 max-w-3xl mx-auto">
          קמפיינים ממומנים בכל הפלטפורמות המובילות עם תוצאות מדידות, 
          ניהול מקצועי והחזר השקעה מקסימלי לעסק שלכם.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
          {platforms.map((platform, index) => (
            <Card key={index} className="service-card border-0 shadow-md hover:shadow-lg bg-white/80 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="text-4xl mb-4">{platform.icon}</div>
                <h3 className="font-rubik font-bold text-lg mb-3">{platform.name}</h3>
                <p className="text-gray-600">{platform.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex justify-center mt-8">
          <Link to="/digital-advertising">
            <Button className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-6 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl text-lg">
              למידע נוסף ותמחור
              <ArrowLeft size={18} />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DigitalAdvertisingSection;
