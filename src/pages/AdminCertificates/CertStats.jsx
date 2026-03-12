import './AdminCertificates.css';
import '../adminShared.css';

function CertStats({ value, label }) {
  return (
    <div className="admin-panel-stat-card">
      <h3>{value}</h3>
      <p>{label}</p>
    </div>
  );
}

export default CertStats;