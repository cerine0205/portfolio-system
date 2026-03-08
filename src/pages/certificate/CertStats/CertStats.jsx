
import './CertStats.css';

function CertStats({
    value,
    label }) {

    return (
        <div className="certificate-stat-card">
            <h3>{value}</h3>
            <p>{label}</p>
        </div>
    );


}

export default CertStats;