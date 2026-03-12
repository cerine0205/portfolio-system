import './AdminMessages.css';
import '../adminShared.css';

function MessageStats({ value, label }) {
  return (
    <div className="message-stat-card admin-panel-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default MessageStats;