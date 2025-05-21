import React from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const BusinessAppPage = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/972545308505?text=שלום, אני מעוניין באפליקציה בסיסית לעסק שלי. אשמח להבין מה האפשרויות ומה העלות.", "_blank");
  };
  return <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik">
                אפליקציה עסקית פשוטה
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">
                אפליקציה בהתאמה אישית לעסק קטן – קטלוג, תורים, ניהול לקוחות ועוד.
                פתרון דיגיטלי מתקדם במחיר משתלם.
              </p>
              <div className="bg-custom-turquoise/10 rounded-lg p-5 mb-6">
                <h3 className="font-bold text-xl text-custom-purple mb-2">למי זה מתאים?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>עסקים שרוצים לתת שירות מתקדם ללקוחות</li>
                  <li>בעלי עסקים שרוצים לייעל תהליכים פנימיים</li>
                  <li>בתי עסק הזקוקים לניהול מלאי או הזמנות</li>
                </ul>
              </div>
              <div className="font-bold text-2xl mb-6 text-custom-purple">החל מ־1,500 ש״ח</div>
              <button onClick={handleContactClick} className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                אני רוצה אפליקציה
                <ArrowLeft size={18} className="rtl:rotate90" />
              </button>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="relative">
                <div className="absolute inset-0 bg-custom-purple rounded-2xl opacity-10 transform rotate-3"></div>
                <div className="absolute inset-0 bg-custom-turquoise rounded-2xl opacity-10 transform -rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1551650975-87deedd944c3?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="אפליקציה עסקית פשוטה" className="rounded-2xl shadow-lg relative z-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-4 turquoise-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
            מה כוללת האפליקציה?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📲</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">חווית משתמש מעולה</h3>
                <p className="text-gray-600">
                  ממשק משתמש אינטואיטיבי וקל לשימוש המותאם ללקוחות העסק שלך
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🔧</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">התאמה אישית</h3>
                <p className="text-gray-600">
                  האפליקציה מותאמת לצרכים הספציפיים של העסק שלך, עם פיתוח ייעודי
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📊</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">ניתוח נתונים</h3>
                <p className="text-gray-600">
                  אפשרות למעקב אחר פעילות המשתמשים וקבלת דו"חות וניתוחים
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-custom-purple rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rubik">
              מוכנים לפתח אפליקציה מותאמת לעסק שלכם?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              פנו אלינו עכשיו ונחזור אליכם תוך 24 שעות עם הצעה מותאמת לאפליקציה העסקית שלכם
            </p>
            <button onClick={handleContactClick} className="bg-white hover:bg-gray-100 text-custom-purple font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all mx-auto">
              דברו איתנו עכשיו
              <ArrowLeft size={18} className="rtl:rotate90" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <ContactForm />

      {/* Footer */}
      <Footer />
    </div>;
};
export default BusinessAppPage;