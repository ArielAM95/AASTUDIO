
import { ExternalLink, Heart, Share, Eye } from "lucide-react";
import { Project } from "@/types/project";

interface ProjectCardProps {
  project: Project;
}

const ProjectCard = ({ project }: ProjectCardProps) => {
  return (
    <div className="relative w-full max-w-sm h-[70vh] rounded-2xl overflow-hidden bg-black shadow-2xl">
      {/* Background gradient with brand colors */}
      <div className="absolute inset-0 bg-gradient-to-br from-custom-purple/20 to-custom-turquoise/10"></div>
      
      {/* Preview area - inline website preview */}
      <div className="relative h-3/4 overflow-hidden">
        <div className="w-full h-full bg-gradient-to-br from-gray-900 to-gray-800 relative">
          {/* Embedded website preview */}
          <div className="absolute inset-4 bg-white rounded-lg overflow-hidden shadow-lg">
            <div className="h-6 bg-gray-100 flex items-center px-2 gap-1">
              <div className="w-2 h-2 bg-red-400 rounded-full"></div>
              <div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
            </div>
            
            {/* Actual website preview iframe */}
            <iframe
              src={project.url}
              className="w-full h-full border-0 pointer-events-none"
              loading="lazy"
              title={project.title}
            />
          </div>
        </div>
      </div>

      {/* Bottom info section */}
      <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
        <div className="flex items-end justify-between">
          
          {/* Left side - project info */}
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs bg-custom-purple/20 text-custom-turquoise px-2 py-1 rounded-full backdrop-blur-sm border border-custom-turquoise/30">
                {project.category}
              </span>
            </div>
            
            <h3 className="text-white font-bold text-lg mb-1 font-rubik">
              {project.title}
            </h3>
            
            <p className="text-white/80 text-sm leading-relaxed mb-3 line-clamp-2">
              {project.description}
            </p>
            
            <a
              href={project.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-custom-turquoise text-sm font-medium hover:text-white transition-colors"
            >
              ראה פרויקט
              <ExternalLink size={14} />
            </a>
          </div>

          {/* Right side - TikTok-style actions */}
          <div className="flex flex-col items-center gap-4 ml-4">
            
            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                <Heart className="w-5 h-5 text-custom-turquoise" />
              </div>
              <span className="text-white text-xs">{project.likes}</span>
            </button>

            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                <Eye className="w-5 h-5 text-custom-turquoise" />
              </div>
              <span className="text-white text-xs">{project.views}</span>
            </button>

            <button className="flex flex-col items-center gap-1 group">
              <div className="w-12 h-12 bg-custom-purple/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-custom-purple/30 group-hover:bg-custom-purple/30 transition-all">
                <Share className="w-5 h-5 text-custom-turquoise" />
              </div>
            </button>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
