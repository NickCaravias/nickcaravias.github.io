// import Introduction.tsx from nick-caravias/src/pages/Introduction.tsx
import Introduction from './Introduction';
import Skills from './Skills';

function About() {
  const jobSkills = {
    esteeLauder2023: ["JavaScript", "Node.js", "Python", "React", "Vue.js", "Azure", "Docker", "K8s", "MySQL", "Postgres"],
    quantumSi: ["Python", "PyTorch", "SQL", "Data Mining"],
    esteeLauder2021: ["PHP", "Laravel", "MySQL"],
    upsideFoods: ["Python","TensorFlow", "Flask", "MySQL", ],
    twitterLiterature: ["Python", "NLP", "Data Analysis"]
  };

  return (
    <div className="p-8">      
      <Introduction />
      
      <h2 className="text-4xl font-bold text-center py-8 mb-12">
        Experience 
      </h2>
      <div className="relative">
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-green-200"></div>
        
        <div className="ml-8">
          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2022</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded shadow-md">Estee Lauder Companies</h3>
              <p>Software Engineer – Senior Analyst </p>
              <p>Developer – Analyst </p>
              <Skills skills={jobSkills.esteeLauder2023} compact />
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2021</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded shadow-md">Quantum-Si</h3>
              <p>Data Modeling, Mining, Prediction Intern </p>
              <Skills skills={jobSkills.quantumSi} compact />
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2021</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded shadow-md">Estee Lauder Companies</h3>
              <p>Software Engineering Intern </p>
              <Skills skills={jobSkills.esteeLauder2021} compact />
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2020</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded shadow-md">Upside Foods (previously Memphis Meats)</h3>
              <p>Software Engineering Intern</p>
              <Skills skills={jobSkills.upsideFoods} compact />
            </div>
          </div>

          <div className="relative mb-8">
            <div className="absolute left-4 top-6 w-8 h-0.5 bg-green-200"></div>
            <div className="absolute left-16 top-3 font-bold text-gray-600">2020</div>
            <div className="mb-4 ml-32">
              <h3 className="text-xl font-bold bg-green-200 p-2 rounded shadow-md">Project Twitter Literature</h3>
              <p>Student Researcher</p>
              <Skills skills={jobSkills.twitterLiterature} compact />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;