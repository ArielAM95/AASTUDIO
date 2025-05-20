
import React, { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    marketingConsent: false,
    privacyConsent: false,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target as HTMLInputElement;
    const checked = type === "checkbox" ? (e.target as HTMLInputElement).checked : undefined;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.privacyConsent) {
      toast({
        title: "שגיאה",
        description: "יש לאשר את תנאי השימוש כדי להמשיך",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would normally send the data to your backend
    toast({
      title: "הטופס נשלח בהצלחה",
      description: "ניצור איתך קשר בהקדם",
    });
    
    // Reset form
    setFormData({
      fullName: "",
      email: "",
      phone: "",
      message: "",
      marketingConsent: false,
      privacyConsent: false,
    });
  };

  const handleWhatsApp = () => {
    const message = `שם: ${formData.fullName}%0Aטלפון: ${formData.phone}%0Aאימייל: ${formData.email}%0Aהודעה: ${formData.message}`;
    window.open(`https://wa.me/972545308505?text=${message}`, "_blank");
  };

  return (
    <section className="py-16 px-4 turquoise-gradient" id="contact">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
          צרו איתנו קשר
        </h2>
        <div className="bg-white p-8 rounded-xl shadow-lg">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                  שם מלא *
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-custom-purple focus:border-transparent"
                />
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  טלפון *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-custom-purple focus:border-transparent"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                אימייל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-custom-purple focus:border-transparent"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                מה תרצו שנעזור לכם?
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-custom-purple focus:border-transparent"
              ></textarea>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="marketingConsent"
                  name="marketingConsent"
                  checked={formData.marketingConsent}
                  onChange={handleChange}
                  className="mt-1 ml-2 h-4 w-4 border-gray-300 rounded text-custom-purple focus:ring-custom-purple"
                />
                <label htmlFor="marketingConsent" className="block text-sm text-gray-600">
                  אני מסכים/ה לקבל עדכונים ומידע שיווקי בדוא"ל ובהודעות טקסט
                </label>
              </div>
              
              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="privacyConsent"
                  name="privacyConsent"
                  checked={formData.privacyConsent}
                  onChange={handleChange}
                  required
                  className="mt-1 ml-2 h-4 w-4 border-gray-300 rounded text-custom-purple focus:ring-custom-purple"
                />
                <label htmlFor="privacyConsent" className="block text-sm text-gray-600">
                  קראתי ואני מסכים/ה למדיניות הפרטיות *
                </label>
              </div>
            </div>
            
            <div className="flex flex-col md:flex-row gap-4">
              <button
                type="submit"
                className="bg-custom-purple text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all flex-1"
              >
                שליחת טופס
              </button>
              <button
                type="button"
                onClick={handleWhatsApp}
                className="bg-green-500 text-white py-3 px-6 rounded-lg font-medium hover:bg-opacity-90 transition-all flex-1 flex justify-center items-center gap-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                    clipRule="evenodd"
                  />
                </svg>
                שליחה בוואטסאפ
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
