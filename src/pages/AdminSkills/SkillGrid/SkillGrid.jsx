import SkillCard from "../SkillCard/SkillCard";
import "./SkillGrid.css";

function SkillGrid({ skills, handleDelete }) {

  if (skills.length === 0) {
    return (
      <p className="empty-certificate">
        No skills yet.
      </p>
    );
  }

  return (
    <div className="certificate-grid">
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