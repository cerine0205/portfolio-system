import './AdminCertificates.css';
import '../adminShared.css';

function CertCard({ cert, handleEdit, handleDelete }) {
  return (
    <div className="certificate-card admin-panel-card">
      <div className="certificate-card-content">

        <h3 className="certificate-card-title">
          {cert.title}
        </h3>

        <p className="certificate-card-issuer">
          {cert.issuer || "Unknown Issuer"}
        </p>

        <div className="certificate-meta">
          {cert.year && (
            <span className="certificate-year">
              {cert.year}
            </span>
          )}

          {cert.link && (
            <a
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              className="certificate-link"
            >
              View
            </a>
          )}
        </div>

      </div>

      <div className="admin-panel-card-actions">

        <button
          className="edit-certificate-btn"
          onClick={() => handleEdit(cert)}
        >
          Edit
        </button>

        <button
          className="delete-btn"
          onClick={() => handleDelete(cert.id)}
        >
          ×
        </button>

      </div>
    </div>
  );
}

export default CertCard;