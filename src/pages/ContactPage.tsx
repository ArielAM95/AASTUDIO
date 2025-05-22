
import React from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-custom-purple mb-6 font-rubik">
              דברו איתנו
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              נשמח לשמוע מכם ולעזור לכם להפוך את הרעיון העסקי שלכם למציאות דיגיטלית. 
              מלאו את הטופס ונחזור אליכם בהקדם.
            </p>
          </div>
        </div>
      </section>
      
      {/* Contact Info Section */}
      <section className="py-12 px-4 bg-white">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-custom-purple rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 8V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">טלפון</h3>
              <p className="text-gray-600"><a href="tel:+972545308505" className="hover:text-custom-purple">054-530-8505</a></p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-custom-purple rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">אימייל</h3>
              <p className="text-gray-600"><a href="mailto:info@aa-websudio.co.il" className="hover:text-custom-purple">info@aa-websudio.co.il</a></p>
            </div>
            
            <div className="bg-gray-50 p-6 rounded-xl shadow-sm text-center">
              <div className="w-12 h-12 mx-auto mb-4 flex items-center justify-center bg-custom-purple rounded-full text-white">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">שעות פעילות</h3>
              <p className="text-gray-600">א'-ה': 9:00 - 18:00</p>
              <p className="text-gray-600">ו': 9:00 - 14:00</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default ContactPage;
