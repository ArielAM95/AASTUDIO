
import React from 'react';
import ExampleCard from './ExampleCard';
import { LucideIcon } from "lucide-react";

interface Example {
  title: string;
  description: string;
  url: string;
  linkText: string;
  category: string;
  categoryColor: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
}

interface ExamplesGridProps {
  examples: Example[];
}

const ExamplesGrid = ({ examples }: ExamplesGridProps) => {
  return (
    <section className="px-4 mb-20">
      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <ExampleCard
              key={index}
              {...example}
              index={index}
            />
          ))}
        </div>
        
        {examples.length === 0 && (
          <div className="text-center py-16">
            <p className="text-gray-500 text-lg">לא נמצאו דוגמאות בקטגוריה זו</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default ExamplesGrid;
