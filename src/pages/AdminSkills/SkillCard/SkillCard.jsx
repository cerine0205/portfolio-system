import "./SkillCard.css";

function SkillCard({ skill, handleDelete }) {
  return (
    <div className="certificate-card">

      <div className="certificate-card-content">
        <h3 className="certificate-card-title">
          {skill.name}
        </h3>

        <p className="certificate-card-category">
          {skill.category || "General"}
        </p>
      </div>

      <div className="certificate-card-actions">
        <button
          className="delete-certificate-btn"
          onClick={() => handleDelete(skill.id)}
        >
          ×
        </button>
      </div>

    </div>
  );
}

export default SkillCard;