import React from 'react';

interface ProjectProps {
  title: string;
  description: string;
  technologies: string[];
  githubUrl: string;
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
          <div className="flex flex-wrap gap-2 mb-4">
            {technologies.map((tech) => (
              <span key={tech} className="bg-green-200 px-3 py-1 rounded-full text-sm">
                {tech}
              </span>
            ))}
          </div>
          <div className="flex space-x-4">
            <a 
              href={githubUrl} 
              className="text-green-600 hover:text-green-800"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            {demoUrl && (
              <a 
                href={demoUrl} 
                className="text-green-600 hover:text-green-800"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link
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