import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
const TermsOfService = () => {
  return <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto max-w-4xl py-12 px-4">
        <h1 className="text-3xl font-bold mb-8 font-rubik">תנאי שימוש</h1>
        
        <div className="space-y-6 font-assistant">
          <section>
            <p>ברוכים הבאים לאתר של AA_WebSudio. האתר מופעל על ידי AA_WebSudio (&quot;אנחנו&quot;, &quot;אותנו&quot;, או &quot;שלנו&quot;). בבקשה קרא בעיון את תנאי השימוש הבאים (&quot;תנאים&quot;) לפני שאתה משתמש באתר שלנו.</p>
            <p className="mt-2">השימוש שלך באתר מהווה הסכמה לתנאים אלה. אם אינך מסכים לתנאים אלה, אנא אל תשתמש באתר.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">השימוש באתר</h2>
            <p>אתה מסכים להשתמש באתר רק למטרות חוקיות ובאופן שאינו מפר על זכויות של אחרים או מגביל או מונע את השימוש והנאה באתר על ידי צד שלישי כלשהו.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">הזמנת שירותים</h2>
            <p>כאשר אתה מזמין שירותים דרך האתר שלנו, אתה מתחייב כי:</p>
            <ul className="list-disc mr-6 mt-2 space-y-1">
              <li>כל המידע שאתה מספק הוא מדויק ומלא.</li>
              <li>יש לך את הסמכות והיכולת המשפטית להתחייב לתנאים אלה.</li>
              <li>אתה משתמש באתר בשמך או בשם הארגון שבשמו אתה מוסמך לפעול.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">תשלום ומחירים</h2>
            <p>המחירים לשירותים שלנו מוצגים באתר. אנו שומרים לעצמנו את הזכות לשנות את המחירים בכל עת. כל המחירים אינם כוללים מע"מ, אלא אם צוין אחרת.</p>
            <p className="mt-2">המחירים וזמן האספקה תלויים באפיון צרכי הלקוח. המחירים המוצגים הם מחירי בסיס והמחיר הסופי עשוי להשתנות בהתאם לדרישות הספציפיות שלך.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">תכולת העבודה והתוצרים</h2>
            <p>אנו מתחייבים לספק את השירותים כמתואר בהסכם השירות שייחתם בינינו. כל שינוי בתכולת העבודה עשוי להוביל לשינויים במחיר ובלוח הזמנים.</p>
            <p className="mt-2">כל התוצרים הסופיים יועברו ללקוח רק לאחר תשלום מלא. אנו שומרים לעצמנו את הזכות להשתמש בעבודות שפותחו עבורך כחלק מתיק העבודות שלנו, אלא אם הוסכם אחרת בכתב.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">קניין רוחני</h2>
            <p>כל זכויות הקניין הרוחני באתר ובתוכנו, למעט התוכן שסופק על ידך, הם הרכוש של WebSudio או המעניקים שלנו.</p>
            <p className="mt-2">לאחר תשלום מלא עבור השירותים, אתה תקבל רישיון לא בלעדי להשתמש בתוצרים הסופיים למטרות העסקיות שלך.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">אחריות מוגבלת</h2>
            <p>אנו עושים מאמצים סבירים להבטיח שהמידע באתר שלנו מדויק ועדכני, אך איננו מתחייבים שהאתר יהיה חף מטעויות או זמין ללא הפרעה.</p>
            <p className="mt-2">השירותים שלנו מסופקים "כמות שהם" ואין אנו מציעים כל אחריות, מפורשת או משתמעת, לגבי התאמתם למטרה מסוימת.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">הגבלת חבות</h2>
            <p>במידה המרבית המותרת על פי החוק, WebSudio לא תהיה אחראית לכל נזק ישיר, עקיף, מקרי, תוצאתי או מיוחד הנובע מהשימוש או אי-יכולת להשתמש בשירותים שלנו.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">סיום התקשרות</h2>
            <p>אנו רשאים להפסיק או להשעות את הגישה שלך לאתר ולשירותים שלנו ללא הודעה מוקדמת בשל הפרת תנאים אלה או מכל סיבה אחרת שאנו רואים כמתאימה.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">שינויים בתנאי השימוש</h2>
            <p>אנו שומרים לעצמנו את הזכות לשנות תנאים אלה בכל עת. שינויים כאלה יהיו תקפים מיד לאחר פרסומם באתר. המשך השימוש באתר לאחר פרסום שינויים כאלה מהווה הסכמה לתנאים המתוקנים.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">דין חל וסמכות שיפוט</h2>
            <p>תנאים אלה יהיו כפופים לחוקי מדינת ישראל וכל סכסוך הנובע מהם יהיה כפוף לסמכות השיפוט הבלעדית של בתי המשפט בישראל.</p>
          </section>

          <section>
            <h2 className="text-xl font-bold mb-3 font-rubik">צור קשר</h2>
            <p>אם יש לך שאלות לגבי תנאי שימוש אלו, אנא צור איתנו קשר ב:</p>
            <p className="mt-2">אימייל: ariel@amgroup.co.il</p>
            <p>טלפון: 054-5308505</p>
          </section>
          
          <p className="text-sm text-gray-500 mt-8">תאריך עדכון אחרון: 20 במאי, 2025</p>
        </div>
      </main>
      <Footer />
    </div>;
};
export default TermsOfService;