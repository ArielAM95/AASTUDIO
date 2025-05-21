
import React, { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQSection = () => {
  const faqs: FAQItem[] = [
    {
      question: "כמה זמן לוקח להקים אתר?",
      answer: "הקמת אתר בסיסי אורכת החל מ-48 שעות מרגע קבלת כל החומרים. אתרים מורכבים יותר עשויים לקחת עד שבוע.",
    },
    {
      question: "מה כולל דף המבצע?",
      answer: "דף מבצע כולל עיצוב מותאם אישית, טופס השארת פרטים, תמונות ותוכן שיווקי ממיר. הדף יהיה מותאם למובייל ולדסקטופ ומוכן לפרסום.",
    },
    {
      question: "האם האתר יהיה מותאם לנייד?",
      answer: "בוודאי! כל האתרים והדפים שאנחנו מפתחים מותאמים באופן מלא למכשירים ניידים, טאבלטים ומחשבים.",
    },
    {
      question: "האם אוכל לערוך את התכנים באתר בעצמי?",
      answer: "כן, האתרים שלנו מגיעים עם ממשק ניהול פשוט שמאפשר לך לערוך טקסטים, להחליף תמונות ולעדכן פרטי התקשרות בקלות.",
    },
    {
      question: "מה קורה אחרי שהאתר עולה לאוויר?",
      answer: "אנחנו מציעים חבילות תחזוקה חודשיות הכוללות עדכוני אבטחה, גיבויים ותמיכה טכנית. תוכל לבחור את החבילה המתאימה לצרכים שלך.",
    },
    {
      question: "האם אתם מספקים אוטומציות עסקיות?",
      answer: "כן, בעלות סמלית תקבלו מאיתנו שני אוטומציות עסקיות לדף הנחיתה שלכם כמובן בהתאם לדרישות וחיובים נוספים.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 px-4 bg-gray-50" id="faq">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
          שאלות נפוצות
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md overflow-hidden animate-fade-in"
              style={{ animationDelay: `${0.1 * index}s` }}
            >
              <button
                className="w-full p-6 text-right flex justify-between items-center"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-custom-purple">
                  {faq.question}
                </span>
                <span className="text-custom-purple">
                  {openIndex === index ? "−" : "+"}
                </span>
              </button>
              <div
                className={`px-6 pb-6 text-gray-600 ${
                  openIndex === index ? "block" : "hidden"
                }`}
              >
                {faq.answer}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
