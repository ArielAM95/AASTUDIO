
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-4xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 font-rubik">מדיניות פרטיות</h1>
        
        <div className="space-y-6 font-assistant">
          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">מבוא</h2>
            <p>אנו ב-WebStudio ("אנחנו", "אותנו", "שלנו") מכבדים את פרטיותך ומחויבים להגן על הנתונים האישיים שלך. מדיניות פרטיות זו תסביר כיצד אנו אוספים, משתמשים ומגנים על הנתונים האישיים שלך כאשר אתה משתמש באתר שלנו או בשירותים שלנו.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">מידע שאנו אוספים</h2>
            <p>אנו עשויים לאסוף את סוגי המידע הבאים:</p>
            <ul className="list-disc mr-6 mt-2 space-y-1">
              <li>מידע אישי כגון שם, כתובת דוא"ל ומספר טלפון שאתה מספק לנו כאשר אתה יוצר קשר או מזמין את השירותים שלנו.</li>
              <li>מידע טכני על מכשירך, כגון כתובת ה-IP, סוג דפדפן ומערכת הפעלה.</li>
              <li>מידע על השימוש שלך באתר, כולל העמודים שביקרת בהם והשירותים שהתעניינת בהם.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">כיצד אנו משתמשים במידע שלך</h2>
            <p>אנו משתמשים במידע שאנו אוספים למטרות הבאות:</p>
            <ul className="list-disc mr-6 mt-2 space-y-1">
              <li>לספק ולנהל את השירותים שהזמנת מאיתנו.</li>
              <li>לענות על שאלות או בקשות שלך.</li>
              <li>לשפר את האתר והשירותים שלנו.</li>
              <li>לשלוח לך מידע על שירותים חדשים או הצעות מיוחדות (רק אם הסכמת לקבל תקשורת שיווקית).</li>
              <li>לעמוד בחובות משפטיות ורגולטוריות.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">שיתוף המידע שלך</h2>
            <p>אנו לא מוכרים או משכירים את המידע האישי שלך לצדדים שלישיים. עם זאת, אנו עשויים לשתף מידע עם:</p>
            <ul className="list-disc mr-6 mt-2 space-y-1">
              <li>ספקי שירות שעובדים בשמנו לסייע בתפעול האתר או השירותים שלנו.</li>
              <li>הרשויות המוסמכות כאשר אנו מחויבים לעשות זאת על פי חוק.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">אבטחת המידע שלך</h2>
            <p>אנו נוקטים אמצעים טכניים וארגוניים מתאימים כדי להגן על המידע האישי שלך מפני אובדן, גישה בלתי מורשית או שינוי. עם זאת, חשוב לציין כי אין שיטת העברה באינטרנט או שיטת אחסון אלקטרונית שהיא בטוחה ב-100%.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">Cookies</h2>
            <p>אנו משתמשים ב-cookies ובטכנולוגיות דומות כדי לשפר את החוויה שלך באתר שלנו. Cookies הם קבצי טקסט קטנים שמאוחסנים במכשיר שלך. הם מאפשרים לנו לזהות את המכשיר שלך ולזכור פרטים מסוימים על הביקורים שלך.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">הזכויות שלך</h2>
            <p>בהתאם לחוקי הגנת המידע החלים, יש לך זכויות מסוימות בנוגע למידע האישי שלך, כולל:</p>
            <ul className="list-disc mr-6 mt-2 space-y-1">
              <li>זכות לגשת למידע האישי שלך.</li>
              <li>זכות לתקן מידע שגוי.</li>
              <li>זכות למחוק את המידע שלך בנסיבות מסוימות.</li>
              <li>זכות להגביל את העיבוד של המידע שלך.</li>
              <li>זכות להתנגד לעיבוד המידע שלך.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">שינויים במדיניות הפרטיות</h2>
            <p>אנו עשויים לעדכן את מדיניות הפרטיות הזו מעת לעת. נפרסם כל שינוי באתר שלנו ונעדכן את תאריך העדכון האחרון.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">צור קשר</h2>
            <p>אם יש לך שאלות בנוגע למדיניות פרטיות זו או לאופן שבו אנו מטפלים במידע האישי שלך, אנא צור איתנו קשר ב:</p>
            <p className="mt-2">אימייל: ariel@amgroup.co.il</p>
            <p>טלפון: 054-5308505</p>
          </section>
          
          <p className="text-sm text-gray-500 mt-8">תאריך עדכון אחרון: 20 במאי, 2025</p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default PrivacyPolicy;
