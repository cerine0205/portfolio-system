import CertCard from "../CertCard/CertCard";
import "./CertGrid.css";

function CertGrid({
  certificates,
  handleEdit,
  handleDelete }) {

  if (certificates.length === 0) {
    return (
      <p className="empty-certificates">
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