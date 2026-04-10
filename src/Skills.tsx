const skills = [
  'Portrait Photography', 'Event Coverage', 'Wedding Photography', 
  'Adobe Lightroom', 'Adobe Photoshop', 'Color Grading', 
  'Studio Lighting', 'Drone Photography', 'Commercial Photography', 
  'Storytelling'
];

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>Expertise & Tools</h2>
      <ul className="skills-list">
        {skills.map(skill => <li key={skill}>{skill}</li>)}
      </ul>
    </section>
  );
};

export default Skills;