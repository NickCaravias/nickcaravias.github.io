import Project from '../components/Project';
import k3ClusterImage from '../assets/k3-cluster.jpg';
import pythonIcon from '../assets/python.svg';
import dockerIcon from '../assets/docker.svg';
import kubernetesIcon from '../assets/k8s.webp';
import rasperryPiIcon from '../assets/raspberry-pi.svg';
import helmIcon from '../assets/helm.svg';
import jupterIcon from '../assets/jupyter.svg';
import bashIcon from '../assets/bash.png';


function Portfolio() {
  const projects = [
    {
      title: "PyHelmGen",
      description: "PyPi library for generating Helm charts from docker-compose files. This package is used to abstract the complexity of Kubernetes deployments and provide a simple way to get applications on Kubernetes for web developers.",
      technologies: [
        { icon: pythonIcon, name: "Python" },
        { icon: dockerIcon, name: "Docker" },
        { icon: helmIcon, name: "Helm" }
      ],
      githubUrl: "https://github.com/NickCaravias/py-helm-gen",
      pypiUrl: "https://pypi.org/project/pyhelmgen/"
    },
    {
      title: "Raspberry Pi Kubernetes cluster",
      description: "I used four Raspberry Pi Model B 4s to create a Kubernetes cluster. On the Pis I used Raspberry Pi OS Lite and installed K3s, a lightweight distribution of Kubernetes.",
      technologies: [
        { icon: kubernetesIcon, name: "Kubernetes" },
        { icon: dockerIcon, name: "Docker" },
        { icon: rasperryPiIcon, name: "Raspberry Pi" },
        { icon: helmIcon, name: "Helm" }
      ],
      image: k3ClusterImage
    },
    {
      title: "Project Twit Lit",
      description: "I completed this during my research in undergraduate. I wrote Bash scrips to call Twitter’s developer API, aggregate and sort the data. Then I generated word cluster topics using Word2Vec and Latent Dirichlet Analysis. ",
      technologies: [
        { icon: pythonIcon, name: "Python" },
        { icon: bashIcon, name: "Bash" },
        { icon: jupterIcon, name: "Jupyter Notebook" }
      ],
      githubUrl: "https://github.com/NickCaravias/TwitLitSource",
      pageUrl: "https://twitlit.github.io/blog.html"
    },
  ];

  return (
    <>
      <div className="flex items-center justify-center min-h-[30vh] mb-4">
      <h2 className="text-4xl font-bold text-center py-8 mb-12">
        Portfolio 
      </h2>
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