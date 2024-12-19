import backgroundImage from '../assets/home-background.jpg';
import githubIcon from '../assets/github-octocat.svg';
import linkedinIcon from '../assets/linkedin.svg';
import emailIcon from '../assets/email.svg';

function Home() {
  return (
    <div className="relative h-screen w-full bg-white">
      <div 
        className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          filter: "brightness(0.7)"
        }}
      />
      
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent"
        style={{ zIndex: 5 }}
      />
      
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white">
        <h1 className="text-6xl font-headers font-bold mb-4 tracking-tight uppercase">
          Nick Caravias
        </h1>
        <h2 className="text-2xl font-content font-light mb-8">
          Full Stack Software Engineer
        </h2>
        
        <div className="flex space-x-6">
          <a 
            href="https://github.com/NickCaravias" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <img src={githubIcon} alt="GitHub" className="w-8 h-8 invert" />
          </a>
          <a 
            href="https://www.linkedin.com/in/nick-caravias/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="transform transition-transform hover:scale-110"
          >
            <img src={linkedinIcon} alt="LinkedIn" className="w-8 h-8 invert" />
          </a>
          <a 
            href="mailto:nick.caravias@gmail.com"
            className="transform transition-transform hover:scale-110"
          >
            <img src={emailIcon} alt="Email" className="w-8 h-8 invert" />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;