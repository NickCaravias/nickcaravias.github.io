// import Introduction.tsx from nick-caravias/src/pages/Introduction.tsx
import Introduction from './Introduction';
import Skills from './Skills';

function About() {
  return (
    <div className="p-8">      
      <Introduction />
      
      <h2 className="text-2xl font-bold mt-6 mb-2">Experience</h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
        
        <div className="ml-8">
          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2023</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded">Estee Lauder Companies</h3>
              <p className="italic">Software Engineer – Senior Analyst | July 2023 - Present</p>
              <p className="italic">Developer – Analyst | July 2022 – July 2023</p>
              <p className="italic">Software Engineering Intern | Summer 2021</p>
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2022</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded">Quantum-Si</h3>
              <p className="italic">Data Modeling, Mining, Prediction Intern | Winter 2021 - 2022</p>
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2021</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded">Upside Foods (previously Memphis Meats)</h3>
              <p className="italic">Software Engineering Intern | Winter 2020 – Spring 2021</p>
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2020</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded">Project Twitter Literature</h3>
              <p className="italic">Student Researcher | Fall 2020 – Spring 2021</p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center mb-8">
        <h2 className="text-2xl text-center max-w-3xl">Skills</h2>
      </div>
      <Skills />
    </div>
  );
}

export default About;