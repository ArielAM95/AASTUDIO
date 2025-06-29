
import React from 'react';
import { ExternalLink, LucideIcon } from "lucide-react";
import { HoverPeek } from "@/components/ui/link-preview";

interface ExampleCardProps {
  title: string;
  description: string;
  url: string;
  linkText: string;
  category: string;
  categoryColor: string;
  icon: LucideIcon;
  gradient: string;
  image: string;
  index: number;
}

const ExampleCard = ({ 
  title, 
  description, 
  url, 
  linkText, 
  category, 
  categoryColor, 
  icon: IconComponent, 
  gradient, 
  image, 
  index 
}: ExampleCardProps) => {
  return (
    <div
      className={`group relative rounded-2xl overflow-hidden bg-gradient-to-br ${gradient} backdrop-blur-sm border border-white/20 hover:border-white/40 transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl animate-fade-in`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Glassmorphism overlay */}
      <div className="absolute inset-0 bg-white/60 backdrop-blur-sm"></div>
      
      {/* Image placeholder */}
      <div className="relative z-10 h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center">
        <img 
          src={image} 
          alt={title}
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
          <div className={`inline-flex items-center gap-2 ${categoryColor} text-white px-3 py-1 rounded-full text-sm font-medium shadow-lg`}>
            <IconComponent size={14} />
            {category}
          </div>
          <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <ExternalLink size={18} className="text-custom-purple" />
          </div>
        </div>

        {/* Title */}
        <h3 className="text-xl font-bold text-custom-purple mb-3 font-rubik group-hover:text-opacity-80 transition-colors">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-700 mb-6 leading-relaxed text-sm line-clamp-3">
          {description}
        </p>

        {/* Link with preview */}
        <HoverPeek url={url} peekWidth={350} peekHeight={200}>
          <a
            href={url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-custom-purple hover:bg-custom-purple/90 text-white font-medium px-4 py-2 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl group-hover:scale-105 text-sm"
          >
            {linkText}
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
};

export default ExampleCard;
