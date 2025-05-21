import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExampleShowcase from "@/components/ExampleShowcase";

const FocusedLandingPage = () => {
  const handleContactClick = () => {
    window.open("https://wa.me/972545308505?text=שלום, אני רוצה דף מבצע לעסק שלי – עמוד אחד להצגת מבצע/שירות. אפשר לשלוח לי פרטים?", "_blank");
  };
  
  const examples = [
    {
      title: "דף מבצע שיווקי",
      description: "דף נחיתה ממוקד למבצע שיווקי מיוחד, עם טופס לאיסוף לידים",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "https://review.ofair.co.il"
    },
    {
      title: "דף עסקי לשירותים",
      description: "דף נחיתה להצגת שירותים עסקיים עם קריאה לפעולה ברורה",
      imageUrl: "https://images.unsplash.com/photo-1534670007418-bc0108e58e5d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      linkUrl: "https://biz.ofair.co.il"
    }
  ];

  return <div className="min-h-screen bg-gradient-to-br from-white to-purple-50">
      {/* Navbar */}
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-12 md:py-20 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-8 md:mb-0 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik">
                דף מבצע ממוקד
              </h1>
              <p className="text-lg md:text-xl mb-6 text-gray-700">
                עמוד אחד מושך, מכירתי ומיידי, להצגת שירות או מבצע מיוחד.
                הדף מעוצב בצורה ממוקדת כדי להוביל את הלקוחות שלך להמרה.
              </p>
              <div className="bg-custom-turquoise/10 rounded-lg p-5 mb-6">
                <h3 className="font-bold text-xl text-custom-purple mb-2">למי זה מתאים?</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>לעסקים שרוצים לקדם מבצע או שירות ספציפי</li>
                  <li>למי שרוצה לאסוף לידים בצורה פשוטה ואפקטיבית</li>
                  <li>לבעלי עסקים שרוצים להציג שירות חדש</li>
                </ul>
              </div>
              <div className="font-bold text-2xl mb-6 text-custom-purple">החל מ־490 ש״ח</div>
              <button onClick={handleContactClick} className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                אני רוצה דף נחיתה
                <ArrowLeft size={18} className="rtl:rotate90" />
              </button>
            </div>
            <div className="md:w-1/2 animate-fade-in" style={{
            animationDelay: "0.2s"
          }}>
              <div className="relative">
                <div className="absolute inset-0 bg-custom-purple rounded-2xl opacity-10 transform rotate-3"></div>
                <div className="absolute inset-0 bg-custom-turquoise rounded-2xl opacity-10 transform -rotate-3"></div>
                <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="דף מבצע ממוקד" className="rounded-2xl shadow-lg relative z-10 w-full" />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Features Section */}
      <section className="py-12 px-4 turquoise-gradient">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
            מה כולל דף המבצע?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">🎯</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">עיצוב ממוקד המרות</h3>
                <p className="text-gray-600">
                  עיצוב מודרני וממוקד מטרה שנבנה להמרות גבוהות ולהובלת הגולש לפעולה
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">📱</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">מותאם לנייד ולדסקטופ</h3>
                <p className="text-gray-600">
                  הדף מותאם באופן מושלם לכל סוגי המכשירים - מובייל, טאבלט ומחשב
                </p>
              </CardContent>
            </Card>
            <Card className="border-0 shadow-lg hover:shadow-xl transition-all">
              <CardContent className="pt-6">
                <div className="text-4xl mb-4">⚡</div>
                <h3 className="text-xl font-bold text-custom-purple mb-3">מהירות הקמה</h3>
                <p className="text-gray-600">
                  הדף מוכן תוך ימים ספורים כולל עיצוב, תוכן וחיבור לטפסים ולוואטסאפ
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
      
      {/* Examples Section */}
      <ExampleShowcase title="דוגמאות לדפי נחיתה שיצרנו" examples={examples} />
      
      {/* CTA Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-custom-purple rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 font-rubik">
              מוכנים להקים דף מבצע ממוקד ואפקטיבי?
            </h2>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto">
              פנו אלינו עכשיו ונחזור אליכם תוך 24 שעות עם הצעה מותאמת לדף המבצע שלכם
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
export default FocusedLandingPage;
