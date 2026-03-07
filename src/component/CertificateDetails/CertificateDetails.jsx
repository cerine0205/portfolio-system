import "./CertificateDetails.css";

function CertificateDetails({ selectedCertificate, setActivePage }) {

  if (!selectedCertificate) return null;

  return (
    <div className="certificate-details">

      <button
        className="back-btn"
        onClick={() => setActivePage("About")}
      >
        ← Back
      </button>

      <h1>{selectedCertificate.title}</h1>

      {selectedCertificate.image && (
        <img
          src={selectedCertificate.image}
          alt={selectedCertificate.title}
          className="cert-image"
        />
      )}

      <div className="cert-info">

        {selectedCertificate.issuer && (
          <p><strong>Issuer:</strong> {selectedCertificate.issuer}</p>
        )}

        {selectedCertificate.year && (
          <p><strong>Year:</strong> {selectedCertificate.year}</p>
        )}

      </div>

      {selectedCertificate.link && (
        <a
          href={selectedCertificate.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cert-link"
        >
          View Certificate
        </a>
      )}

    </div>
  );
}

export default CertificateDetails;