
import React, { useState } from 'react';
import { ExternalLink, Globe, Zap, Users, ShoppingCart, Filter } from "lucide-react";
import { HoverPeek } from "@/components/ui/link-preview";
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const ExamplesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const examples = [
    {
      title: "ענבל טיפוח ויופי",
      description: "דף נחיתה מהמם מושך וצבעוני שמותאם לקהל נשי ומיועד לעודד פניה בוואטסאפ",
      url: "https://preview--inbal-touch-design.lovable.app/",
      linkText: "ראה דוגמה חיה",
      category: "דף נחיתה",
      categoryColor: "bg-pink-500",
      icon: Users,
      gradient: "from-pink-500/10 to-purple-500/10",
      image: "/lovable-uploads/911f1943-de7e-41a1-a1e8-beabba2570d5.png"
    },
    {
      title: "דף מבצע שיווקי",
      description: "דף נחיתה ממוקד למבצע שיווקי מיוחד, עם טופס לאיסוף לידים ועיצוב מושך שמעודד המרות",
      url: "https://review.ofair.co.il",
      linkText: "ראה דוגמה חיה",
      category: "מבצע",
      categoryColor: "bg-orange-500",
      icon: Zap,
      gradient: "from-orange-500/10 to-red-500/10",
      image: "/placeholder.svg"
    },
    {
      title: "אתר להזמנת נופש בסאן מרינו",
      description: "אתר יפיפה להזמנת מקום בנופש, עם מערכת הזמנות מתקדמת, אוטומציות מלאות ועיצוב משתמש מדהים",
      url: "https://preview--m-539974.lovable.app/",
      linkText: "ראה דוגמה חיה",
      category: "אתר עסקי",
      categoryColor: "bg-blue-500",
      icon: Globe,
      gradient: "from-blue-500/10 to-cyan-500/10",
      image: "/placeholder.svg"
    },
    {
      title: "דף נחיתה לאיסוף לידים עסקיים - מופט",
      description: "מופט ישראל בחרו לפנות לחברות הייטק ולהציע מתנות איכותיות לעובדים. דף עם אוטומציות מתקדמות ללידים וקו מובהק להשארת פרטים",
      url: "https://preview--moft-tech-gifts.lovable.app/",
      linkText: "ראה דוגמה חיה",
      category: "B2B",
      categoryColor: "bg-green-500",
      icon: ShoppingCart,
      gradient: "from-green-500/10 to-emerald-500/10",
      image: "/placeholder.svg"
    }
  ];

  const categories = [
    { id: 'all', name: 'כל הדוגמאות', count: examples.length },
    { id: 'דף נחיתה', name: 'דפי נחיתה', count: examples.filter(ex => ex.category === 'דף נחיתה').length },
    { id: 'אתר עסקי', name: 'אתרים עסקיים', count: examples.filter(ex => ex.category === 'אתר עסקי').length },
    { id: 'מבצע', name: 'דפי מבצעים', count: examples.filter(ex => ex.category === 'מבצע').length },
    { id: 'B2B', name: 'פתרונות B2B', count: examples.filter(ex => ex.category === 'B2B').length }
  ];

  const filteredExamples = selectedCategory === 'all' 
    ? examples 
    : examples.filter(example => example.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      
      {/* Hero Section */}
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

      {/* Filter Section */}
      <section className="px-4 mb-12">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  selectedCategory === category.id
                    ? 'bg-custom-purple text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                }`}
              >
                <Filter size={16} />
                {category.name}
                <span className={`text-xs px-2 py-1 rounded-full ${
                  selectedCategory === category.id
                    ? 'bg-white/20 text-white'
                    : 'bg-gray-100 text-gray-500'
                }`}>
                  {category.count}
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Examples Grid */}
      <section className="px-4 mb-20">
        <div className="container mx-auto max-w-7xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredExamples.map((example, index) => {
              const IconComponent = example.icon;
              return (
                <div
                  key={index}
                  className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${example.gradient} backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {/* Glassmorphism overlay */}
                  <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
                  
                  {/* Image placeholder */}
                  <div className="relative z-10 h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
                    <img 
                      src={example.image} 
                      alt={example.title}
                      className="w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = "/placeholder.svg";
                      }}
                    />
                  </div>
                  
                  {/* Card content */}
                  <div className="relative z-10 p-6">
                    {/* Category badge */}
                    <div className="flex items-center justify-between mb-4">
                      <div className={`inline-flex items-center gap-2 ${example.categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
                        <IconComponent size={14} />
                        {example.category}
                      </div>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <ExternalLink size={18} className="text-custom-purple" />
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold text-custom-purple mb-3 font-rubik group-hover:text-opacity-80 transition-colors">
                      {example.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-3">
                      {example.description}
                    </p>

                    {/* Link with preview */}
                    <HoverPeek url={example.url} peekWidth={350} peekHeight={200}>
                      <a
                        href={example.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple/90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 text-sm"
                      >
                        {example.linkText}
                        <ExternalLink size={16} className="transition-transform group-hover:translate-x-1" />
                      </a>
                    </HoverPeek>
                  </div>

                  {/* Hover glow effect */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                    <div className="absolute inset-0 bg-gradient-to-r from-custom-purple/10 via-transparent to-custom-turquoise/10 rounded-2xl"></div>
                  </div>
                </div>
              );
            })}
          </div>
          
          {filteredExamples.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">לא נמצאו דוגמאות בקטגוריה זו</p>
            </div>
          )}
        </div>
      </section>

      {/* Contact Form */}
      <ContactForm />
      
      <Footer />
    </div>
  );
};

export default ExamplesPage;
