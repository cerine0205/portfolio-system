import './AdminSkills.css';
import '../adminShared.css';

function SkillStats({ value, label }) {
  return (
    <div className="admin-panel-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default SkillStats;