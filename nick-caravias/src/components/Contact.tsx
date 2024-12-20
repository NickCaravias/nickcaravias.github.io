import emailIcon from '../assets/email.svg';
import githubIcon from '../assets/github-octocat.svg';

function Contact() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8">
      <h2 className="text-2xl text-center max-w-3xl mb-8 font-headers">
        Please feel free to email me or contribute to one of my open source repositories
      </h2>
      
      <div className="flex gap-8">
        <a 
          href="mailto:nick.caravias@gmail.com"
          className="transform transition-transform hover:scale-110"
          aria-label="Email"
        >
          <div className="w-16 h-16 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex items-center justify-center">
            <img 
              src={emailIcon} 
              alt="Email"
              className="w-12 h-12"
            />
          </div>
        </a>

        <a 
          href="https://github.com/NickCaravias"
          target="_blank"
          rel="noopener noreferrer"
          className="transform transition-transform hover:scale-110"
          aria-label="GitHub"
        >
          <div className="w-16 h-16 rounded-full bg-white shadow-md hover:shadow-lg transition-shadow duration-200 p-4 flex items-center justify-center">
            <img 
              src={githubIcon} 
              alt="GitHub"
              className="w-12 h-12"
            />
          </div>
        </a>
      </div>
    </div>
  );
}

export default Contact;