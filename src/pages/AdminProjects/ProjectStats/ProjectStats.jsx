

import './ProjectStats.css';

function ProjectStats({ value, label }) {
  return (
    <div className="admin-project-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default ProjectStats;