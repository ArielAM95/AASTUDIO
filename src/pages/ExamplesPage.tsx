
import React, { useState } from 'react';
import ContactForm from "@/components/ContactForm";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ExamplesHero from "@/components/examples/ExamplesHero";
import CategoryFilter from "@/components/examples/CategoryFilter";
import ExamplesGrid from "@/components/examples/ExamplesGrid";
import { examples, categories } from "@/data/examplesData";

const ExamplesPage = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const filteredExamples = selectedCategory === 'all' 
    ? examples 
    : examples.filter(example => example.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-50">
      <Navbar />
      <ExamplesHero />
      <CategoryFilter 
        categories={categories}
        selectedCategory={selectedCategory}
        onCategoryChange={setSelectedCategory}
      />
      <ExamplesGrid examples={filteredExamples} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default ExamplesPage;
