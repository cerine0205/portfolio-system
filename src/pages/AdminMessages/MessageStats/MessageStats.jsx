import "./MessageStats.css";

function MessageStats({ value, label }) {
  return (
    <div className="message-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default MessageStats;