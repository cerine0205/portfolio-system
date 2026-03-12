import CertCard from "./CertCard";
import './AdminCertificates.css';
import '../adminShared.css';

function CertGrid({ certificates, handleEdit, handleDelete }) {

  if (certificates.length === 0) {
    return (
      <p className="empty-certificates admin-panel-empty">
        No certificates yet.
      </p>
    );
  }

  return (
    <div className="certificates-grid">
      {certificates.map((cert) => (
        <CertCard
          key={cert.id}
          cert={cert}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}
    </div>
  );
}

export default CertGrid;