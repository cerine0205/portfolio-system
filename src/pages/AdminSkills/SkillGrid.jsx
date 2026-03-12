import SkillCard from "./SkillCard";
import './AdminSkills.css';
import '../adminShared.css';

function SkillGrid({ skills, handleDelete }) {

  if (skills.length === 0) {
    return (
      <p className="admin-panel-empty">
        No skills yet.
      </p>
    );
  }

  return (
    <div className="skills-grid">
      {skills.map((skill) => (
        <SkillCard
          key={skill.id}
          skill={skill}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default SkillGrid;