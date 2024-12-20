import { useEffect, useState } from 'react';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

function App() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.5 }
    );

    document.querySelectorAll('section').forEach((section) => {
      observer.observe(section);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      <section id="home" className="min-h-screen">
        <Home />
      </section>
  
      <nav className="sticky top-4 mx-auto w-[600px] 
                      bg-gradient-to-r from-green-400 to-emerald-500 
                      rounded-full shadow-lg z-50">
        <div className="px-4">
          <div className="flex justify-center items-center h-14">
            <div className="flex space-x-8">
              {['home', 'experience', 'portfolio', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`px-4 py-2 font-medium rounded-lg transition-all duration-200 ease-in-out
                    ${activeSection === section 
                      ? 'bg-white text-emerald-600' 
                      : 'text-white hover:bg-white/10'}`}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>
      </nav>
  
      <section id="experience" className="min-h-screen">
        <Experience />
      </section>
  
      <section id="portfolio" className="min-h-screen">
        <Portfolio/>
      </section>
  
      <section id="contact" className="min-h-screen">
        <Contact />
      </section>
    </div>
  );
}

export default App;