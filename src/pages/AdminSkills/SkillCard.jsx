import './AdminSkills.css';
import '../adminShared.css';

function SkillCard({ skill, handleDelete }) {
  return (
    <div className="skill-card admin-panel-card">
      <div className="skill-card-content">
        <h3 className="skill-card-title">
          {skill.name}
        </h3>

        <p className="skill-card-category">
          {skill.category || "General"}
        </p>
      </div>

      <div className="admin-panel-card-actions">
        <button
          className="delete-btn"
          onClick={() => handleDelete(skill.id)}
        >
          ×
        </button>
      </div>
    </div>
  );
}

export default SkillCard;