
import React from 'react';
import { Zap } from "lucide-react";

const ExamplesHero = () => {
  return (
    <section className="pt-24 pb-16 px-4 relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-10 left-10 w-72 h-72 bg-custom-purple rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-custom-turquoise rounded-full blur-3xl animate-pulse" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto max-w-7xl relative z-10 text-center">
        <div className="inline-flex items-center gap-2 bg-custom-purple/10 text-custom-purple px-4 py-2 rounded-full text-sm font-medium mb-6 border border-custom-purple/20">
          <Zap size={16} />
          פורטפוליו מלא של עבודות מוכחות
        </div>
        
        <h1 className="text-5xl md:text-6xl font-bold text-custom-purple mb-6 font-rubik">
          הדוגמאות שלנו
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-12">
          עיינו בפרויקטים שכבר מביאים תוצאות אמיתיות ללקוחות שלנו. כל פרויקט תוכנן בקפידה להשיג מטרות עסקיות ספציפיות
        </p>
      </div>
    </section>
  );
};

export default ExamplesHero;
