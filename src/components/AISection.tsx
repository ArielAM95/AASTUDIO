
import React from "react";
import { ArrowRight } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const AISection = () => {
  return (
    <section className="py-16 md:py-24 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-custom-purple mb-4 font-rubik">
            הגיע הזמן לנצל את מהפכת ה-AI לטובת העסק שלכם
          </h2>
          <p className="text-lg md:text-xl text-gray-700 max-w-3xl mx-auto">
            אנחנו משתמשים בטכנולוגיות בינה מלאכותית מתקדמות כדי לבנות לכם אתר, דף נחיתה או אפילו אפליקציה 
            במחירים הכי טובים ובמהירות שלא תאמינו.
          </p>
        </div>

        <div className="mt-16">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8">
            {/* Step 1 */}
            <Card className="relative w-full md:w-1/3 border-2 border-custom-purple border-opacity-20 shadow-md">
              <div className="absolute -top-4 right-4 bg-custom-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                1
              </div>
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-bold text-custom-purple mb-3">שיחת אפיון קצרה</h3>
                <p className="text-gray-700">
                  סוגרים מה אתם צריכים בדיוק לאחר שיחה קצרה שבה נבין את הצרכים העסקיים שלכם.
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight size={30} className="text-custom-purple hidden md:block rtl:rotate-180" />
              <ArrowRight size={30} className="text-custom-purple md:hidden rotate-90" />
            </div>

            {/* Step 2 */}
            <Card className="relative w-full md:w-1/3 border-2 border-custom-purple border-opacity-20 shadow-md">
              <div className="absolute -top-4 right-4 bg-custom-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                2
              </div>
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-bold text-custom-purple mb-3">בחירת אופציה מועדפת</h3>
                <p className="text-gray-700">
                  שולחים לכם שלוש אופציות לבחירה, כולן מותאמות לצרכים שלכם ולתקציב שהגדרתם.
                </p>
              </CardContent>
            </Card>

            <div className="flex items-center justify-center py-2 md:py-0">
              <ArrowRight size={30} className="text-custom-purple hidden md:block rtl:rotate-180" />
              <ArrowRight size={30} className="text-custom-purple md:hidden rotate-90" />
            </div>

            {/* Step 3 */}
            <Card className="relative w-full md:w-1/3 border-2 border-custom-purple border-opacity-20 shadow-md">
              <div className="absolute -top-4 right-4 bg-custom-purple text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-lg">
                3
              </div>
              <CardContent className="pt-8 pb-6 px-6">
                <h3 className="text-xl font-bold text-custom-purple mb-3">סגירת פרטים אחרונים</h3>
                <p className="text-gray-700">
                  נשאר רק לסגור את הפרטים הקטנים ואנחנו מתחילים לעבוד!
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mt-14 text-center bg-custom-purple bg-opacity-5 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-custom-purple mb-4">
            התכנים, העיצוב והמלל - עלינו!
          </h3>
          <p className="text-lg text-gray-700">
            אנחנו מתעסקים בכל הפרטים הקטנים כדי שתוכלו להתמקד בעסק שלכם.
            טכנולוגיות AI מאפשרות לנו לעבוד במהירות וביעילות, תוך יצירת תוצר מקצועי ואיכותי.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AISection;
