
import React from 'react';

const WhatsAppButton = () => {
  const handleWhatsAppClick = () => {
    const message = "שלום! אני מעוניין/ת לשמוע עוד על השירותים שלכם";
    const phoneNumber = "972545308505";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <button
        onClick={handleWhatsAppClick}
        className="bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110"
        title="צרו קשר בווצאפ"
      >
        <img 
          src="/lovable-uploads/f2cfdeae-6414-4d7f-b84a-5563778e83d1.png" 
          alt="WhatsApp" 
          className="w-8 h-8"
        />
      </button>
    </div>
  );
};

export default WhatsAppButton;
