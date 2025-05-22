
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import ContactForm from "@/components/ContactForm";

const DigitalAdvertisingPage = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-24 px-4 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 animate-fade-in">
              <h1 className="text-3xl md:text-5xl font-bold text-custom-turquoise mb-6 font-rubik leading-tight">
                פרסום דיגיטלי <span className="text-custom-purple">שמביא תוצאות</span> לעסק שלך
              </h1>
              <p className="text-lg md:text-xl mb-8 text-gray-300 leading-relaxed">
                ניהול קמפיינים מקצועי בכל הפלטפורמות הדיגיטליות, מותאם למטרות העסק והתקציב שלכם. 
                מודדים כל שקל, ממקסמים החזר השקעה ומגדילים מכירות.
              </p>
              <Button onClick={() => window.location.href = "https://wa.me/972545308505?text=שלום, אני מעוניין בפרטים על שירותי הפרסום הדיגיטלי שלכם."} 
                className="bg-custom-turquoise hover:bg-opacity-90 text-gray-900 font-medium py-3 px-8 rounded-lg flex items-center gap-2 transition-all shadow-lg hover:shadow-xl">
                לשיחת ייעוץ חינם
              </Button>
            </div>
            <div className="md:w-1/2 mt-10 md:mt-0 animate-fade-in" style={{ animationDelay: "0.2s" }}>
              <div className="relative">
                <div className="absolute inset-0 bg-custom-purple rounded-2xl opacity-10 transform rotate-3"></div>
                <div className="absolute inset-0 bg-custom-turquoise rounded-2xl opacity-10 transform -rotate-3"></div>
                <img 
                  src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
                  alt="פרסום דיגיטלי" 
                  className="rounded-2xl shadow-lg relative z-10 w-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Platforms Section */}
      <section className="py-20 px-4 bg-gray-800">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 font-rubik text-custom-turquoise">
            הפלטפורמות שאנחנו מנהלים
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            צוות המומחים שלנו מנהל קמפיינים בכל הפלטפורמות הדיגיטליות המובילות, 
            עם התמחות ספציפית לכל פלטפורמה וקהל היעד שלה.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <PlatformCard
              name="Google Ads"
              description="מנוע החיפוש, יוטיוב, רשת התצוגה ועוד"
              image="https://images.unsplash.com/photo-1573804633927-bfcbcd909acd?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              benefits={["חיפוש אקטיבי", "כוונות רכישה", "תנועה איכותית"]}
            />
            
            <PlatformCard
              name="Meta Ads"
              description="פייסבוק, אינסטגרם, מסנג'ר ומטא"
              image="https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              benefits={["פילוח קהלים מדויק", "פורמטים מגוונים", "חשיפה רחבה"]}
            />
            
            <PlatformCard
              name="TikTok"
              description="קמפיינים ויראליים לדור הצעיר"
              image="https://images.unsplash.com/photo-1596558450268-9c27524ba856?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              benefits={["קהל צעיר", "ויראליות", "מעורבות גבוהה"]}
            />
            
            <PlatformCard
              name="LinkedIn"
              description="פרסום לעסקים ואנשי מקצוע"
              image="https://images.unsplash.com/photo-1616469829941-c7200edec809?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
              benefits={["B2B", "קהל איכותי", "ממוקד עסקית"]}
            />
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-gray-800 to-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 font-rubik text-custom-purple">
            היתרונות של קמפיינים דיגיטליים
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            פרסום דיגיטלי מאפשר לכם לייעל תקציבים, להגיע לקהל יעד ממוקד ולמדוד כל שקל שאתם משקיעים.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <BenefitCard
              title="מדידת ROI מדויקת"
              description="ראו בדיוק כמה לקוחות ומכירות הביא כל קמפיין, כמה עלה כל לקוח ומה ההחזר על ההשקעה."
              icon="📊"
            />
            
            <BenefitCard
              title="פילוח קהל מתקדם"
              description="הגיעו בדיוק לאנשים שמתאימים למוצר או לשירות שלכם, לפי גיל, מיקום, תחומי עניין והתנהגות."
              icon="🎯"
            />
            
            <BenefitCard
              title="גמישות בתקציב"
              description="התחילו בקטן והגדילו בהדרגה, עם יכולת לשנות ולהתאים את התקציב בכל רגע נתון."
              icon="💰"
            />
            
            <BenefitCard
              title="מהירות והתאמה בזמן אמת"
              description="שינויים והתאמות בקמפיין בזמן אמת, לפי ביצועים והזדמנויות חדשות בשוק."
              icon="⚡"
            />
            
            <BenefitCard
              title="הגדלת המודעות למותג"
              description="בניית נוכחות דיגיטלית חזקה וזכירות מותגית, שתומכת בכל מאמצי השיווק שלכם."
              icon="👁️"
            />
            
            <BenefitCard
              title="מעקב מתחרים"
              description="קבלו תובנות על פעילות המתחרים שלכם והישארו תמיד צעד אחד לפניהם."
              icon="🔍"
            />
          </div>
        </div>
      </section>
      
      {/* Case Studies Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl font-bold text-center mb-4 font-rubik text-custom-turquoise">
            סיפורי הצלחה
          </h2>
          <p className="text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            לקוחות שלנו שהגדילו מכירות והגיעו ללקוחות חדשים באמצעות קמפיינים דיגיטליים.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <CaseStudyCard
              title="רשת חנויות אופנה"
              stats={{
                roi: "350%",
                trafficIncrease: "210%",
                leadCost: "40₪"
              }}
              description="הגדלנו את המכירות באונליין ב-135% תוך 3 חודשים באמצעות קמפיינים בפייסבוק וגוגל, עם החזר השקעה של פי 3.5."
              image="https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
            
            <CaseStudyCard
              title="משרד עורכי דין"
              stats={{
                roi: "280%",
                trafficIncrease: "175%",
                leadCost: "85₪"
              }}
              description="הבאנו למשרד מעל 50 לקוחות חדשים בחודש באמצעות מערך פרסום בגוגל ולינקדאין, עם עלות רכישה נמוכה פי 2 מהממוצע בענף."
              image="https://images.unsplash.com/photo-1521791055366-0d553872125f?ixlib=rb-4.0.3&auto=format&fit=crop&w=500&q=80"
            />
          </div>
          
          <div className="mt-12 text-center">
            <Button onClick={() => window.location.href = "https://wa.me/972545308505?text=שלום, ראיתי את סיפורי ההצלחה שלכם ואשמח לשמוע איך אפשר ליישם זאת בעסק שלי."} 
              className="bg-custom-purple hover:bg-opacity-90 text-white font-medium py-3 px-8 rounded-lg flex mx-auto items-center gap-2 transition-all shadow-lg hover:shadow-xl">
              רוצה להיות הסיפור הבא? דברו איתנו
            </Button>
          </div>
        </div>
      </section>
      
      {/* Contact Form Section */}
      <ContactForm id="contact" />
      
      <Footer />
    </div>
  );
};

// Component for platform cards in the Platforms section
const PlatformCard = ({ name, description, image, benefits }) => (
  <div className="bg-gray-700 rounded-xl overflow-hidden hover:shadow-lg transition-all">
    <div className="h-40 overflow-hidden">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <div className="p-6">
      <h3 className="text-xl font-bold mb-2 text-white">{name}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="space-y-2">
        {benefits.map((benefit, index) => (
          <li key={index} className="flex items-center gap-2">
            <Check size={16} className="text-custom-turquoise" />
            <span className="text-gray-300 text-sm">{benefit}</span>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

// Component for benefit cards in the Benefits section
const BenefitCard = ({ title, description, icon }) => (
  <div className="bg-gray-800 rounded-xl p-6 hover:shadow-lg transition-all border border-gray-700">
    <div className="text-4xl mb-4">{icon}</div>
    <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
    <p className="text-gray-300">{description}</p>
  </div>
);

// Component for case study cards in the Case Studies section
const CaseStudyCard = ({ title, stats, description, image }) => (
  <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg transition-all border border-gray-700">
    <div className="flex flex-col md:flex-row">
      <div className="md:w-2/5">
        <img src={image} alt={title} className="h-full w-full object-cover" />
      </div>
      <div className="p-6 md:w-3/5">
        <h3 className="text-xl font-bold mb-3 text-white">{title}</h3>
        <div className="grid grid-cols-3 gap-2 mb-4">
          <div className="text-center p-2 bg-gray-700 rounded-lg">
            <p className="text-xs text-gray-400">ROI</p>
            <p className="text-xl font-bold text-custom-turquoise">{stats.roi}</p>
          </div>
          <div className="text-center p-2 bg-gray-700 rounded-lg">
            <p className="text-xs text-gray-400">גידול בתנועה</p>
            <p className="text-xl font-bold text-custom-purple">{stats.trafficIncrease}</p>
          </div>
          <div className="text-center p-2 bg-gray-700 rounded-lg">
            <p className="text-xs text-gray-400">עלות לליד</p>
            <p className="text-xl font-bold text-custom-turquoise">{stats.leadCost}</p>
          </div>
        </div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  </div>
);

export default DigitalAdvertisingPage;
