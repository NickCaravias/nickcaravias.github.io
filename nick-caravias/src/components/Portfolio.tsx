import Project from '../components/Project';
import k3ClusterImage from '../assets/k3-cluster.jpg';

function Portfolio() {
  const projects = [
    {
      title: "PyHelmGen",
      description: "Python library for generating Helm charts from docker-compose files. This package is used to abstract the complexity of Kubernetes Helm charts and provide a simple way to deploy applications to Kubernetes for web developers.",
      technologies: ["Python", "Helm", "Docker"],
      githubUrl: "https://github.com/NickCaravias/py-helm-gen",
      demoUrl: "https://pypi.org/project/pyhelmgen/"
    },
    {
      title: "Raspberry Pi Kubernetes cluster",
      description: "I used four Raspberry Pis",
      technologies: ["K8s", "Docker", "Raspberry Pi"],
      image: k3ClusterImage
    },
  ];

  return (
    <>
    <div className="flex items-center justify-center min-h-[30vh] mb-4">
      <h5 className="text-2xl text-center max-w-3xl">
        Projects
      </h5>
    </div>

      <div className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Project key={project.title} {...project} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Portfolio;