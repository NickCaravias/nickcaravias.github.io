import React from 'react';

interface TechnologyIcon {
  icon: string;
  name: string;
}

interface ProjectProps {
  title: string;
  description: string;
  technologies: TechnologyIcon[];
  githubUrl?: string;
  demoUrl?: string;
  image?: string;
}

function Project({ title, description, technologies, githubUrl, demoUrl, image }: ProjectProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="p-6 flex gap-6">
        <div className="flex-1">
          <h3 className="text-2xl font-headers font-bold mb-2">{title}</h3>
          <p className="text-gray-600 mb-4">{description}</p>
          <div className="flex flex-wrap gap-4 mb-4">
            {technologies.map((tech) => (
              <div key={tech.name} className="group relative">
                <div className="w-12 h-12 rounded-full bg-white shadow-md hover:shadow-lg transition-all duration-200 p-2 flex items-center justify-center">
                  <img 
                    src={tech.icon} 
                    alt={tech.name}
                    className="w-8 h-8 object-contain"
                  />
                </div>
                <span className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 
                               opacity-0 group-hover:opacity-100 transition-opacity duration-200 
                               text-sm text-gray-600 whitespace-nowrap">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
          <div className="flex space-x-4">
            {githubUrl && (
              <a 
                href={githubUrl} 
                className="text-green-600 hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                GitHub
              </a>
            )}
            {demoUrl && (
              <a 
                href={demoUrl} 
                className="text-green-600 hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                PyPi page
              </a>
            )}
          </div>
        </div>
        {image && (
          <div className="flex-shrink-0 w-48">
            <img 
              src={image} 
              alt={title}
              className="w-full h-48 object-cover rounded-lg shadow-md"
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default Project;