import './SkillStats.css';

function SkillStats({ value, label }) {
  return (
    <div className="certificate-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default SkillStats;