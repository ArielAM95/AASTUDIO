
import React from "react";
import { ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Example {
  title: string;
  description: string;
  imageUrl: string;
  linkUrl: string;
}

interface ExampleShowcaseProps {
  title: string;
  examples: Example[];
}

const ExampleShowcase = ({ title, examples }: ExampleShowcaseProps) => {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-purple-50">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-12 font-rubik text-custom-purple">
          {title}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {examples.map((example, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all">
              <div className="h-48 overflow-hidden">
                <img 
                  src={example.imageUrl} 
                  alt={example.title} 
                  className="w-full h-full object-cover transition-transform hover:scale-105"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80";
                  }}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-custom-purple mb-2">{example.title}</h3>
                <p className="text-gray-600 mb-4">{example.description}</p>
                <a href={example.linkUrl} target="_blank" rel="noopener noreferrer">
                  <Button variant="outline" className="w-full border-custom-purple text-custom-purple hover:bg-custom-purple hover:text-white">
                    צפה בדוגמה
                    <ExternalLink size={16} />
                  </Button>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExampleShowcase;
