interface SkillsProps {
  skills: string[];
  compact?: boolean;
}

function Skills({ skills, compact = false }: SkillsProps) {
  return (
    <div className={`flex flex-wrap gap-2 ${compact ? 'mt-2' : 'grid grid-cols-2 md:grid-cols-4 gap-4'}`}>
      {skills.map((skill) => (
        <span key={skill} className="bg-green-200 text-black px-2 py-1 rounded text-sm shadow-md hover:shadow-lg transition-shadow duration-200">
          {skill}
        </span>
      ))}
    </div>
  );
}

export default Skills;