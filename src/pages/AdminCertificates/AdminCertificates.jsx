import { useEffect, useState } from "react";
import "./AdminCertificates.css";
import {
  getCertificates,
  createCertificate,
  updateCertificate,
  deleteCertificate,
} from "../../api/certificatesApi";

import CertForm from "./certForm/CertForm";
import CertStats from "./CertStats/CertStats";
import CertGrid from "./CertGrid/CertGrid";
import DeleteModal from "../DeleteModal/DeleteModal";

function AdminCertificates() {
  const [certificates, setCertificates] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingCertificate, setEditingCertificate] = useState(null);
  const [certificateToDelete, setCertificateToDelete] = useState(null);

  const [formData, setFormData] = useState({
    title: "",
    issuer: "",
    year: "",
    link: "",
    image: "",
  });

  useEffect(() => {
    loadCertificates();
  }, []);

  async function loadCertificates() {
    const data = await getCertificates();
    setCertificates(data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddClick() {
    setEditingCertificate(null);
    setFormData({
      title: "",
      issuer: "",
      year: "",
      link: "",
      image: "",
    });
    setShowForm(true);
  }

  function handleEdit(cert) {
    setEditingCertificate(cert);
    setFormData({
      title: cert.title || "",
      issuer: cert.issuer || "",
      year: cert.year || "",
      link: cert.link || "",
      image: cert.image || "",
    });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      title: formData.title,
      issuer: formData.issuer || null,
      year: formData.year ? Number(formData.year) : null,
      link: formData.link || null,
      image: formData.image || null,
    };

    if (editingCertificate) {
      await updateCertificate(editingCertificate.id, payload);
    } else {
      await createCertificate(payload);
    }

    await loadCertificates();

    setShowForm(false);
    setEditingCertificate(null);

    setFormData({
      title: "",
      issuer: "",
      year: "",
      link: "",
      image: "",
    });
  }

  function handleDelete(id) {
    setCertificateToDelete(id);
  }

  async function confirmDelete() {
    if (!certificateToDelete) return;

    await deleteCertificate(certificateToDelete);
    await loadCertificates();
    setCertificateToDelete(null);
  }

  const total = certificates.length;

  const issuersCount = new Set(
    certificates
      .map((cert) => cert.issuer)
      .filter(Boolean)
  ).size;

  const latestYear =
    certificates.length > 0
      ? Math.max(...certificates.map((cert) => cert.year || 0))
      : "N/A";

  return (
    <div className="admin-page admin-certificates">
      <div className="admin-certificates-top">
        <div>
          <p className="admin-certificates-kicker">admin / certificates</p>
          <h1 className="admin-certificates-title">Certificates</h1>
          <p className="admin-certificates-subtitle">
            {total} credentials stored
          </p>
        </div>

        <button className="add-certificate-btn" onClick={handleAddClick}>
          + Add Certificate
        </button>
      </div>

      <div className="admin-stats">
        <CertStats value={total} label="Total" />
        <CertStats value={issuersCount} label="Issuers" />
        <CertStats value={latestYear} label="Latest Year" />
      </div>

      {showForm && (
        <div className="certificate-modal">
          <CertForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            setShowForm={setShowForm}
            editingCertificate={editingCertificate}
            setEditingCertificate={setEditingCertificate}
          />
        </div>
      )}

      <div className="certificates-vault">
        <div className="certificates-vault-header">
          <p className="certificate-section-kicker">Certificates.Vault</p>
        </div>

        <CertGrid
          certificates={certificates}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />

      </div>


      {certificateToDelete && (
        <DeleteModal
          isOpen={certificateToDelete}
          title="Delete Certificate?"
          message={`Are you sure you want to delete "${certificates.find((cert) => cert.id === certificateToDelete)?.title || "this certificate"
            }"?`}
          onConfirm={confirmDelete}
          onCancel={() => setCertificateToDelete(null)}
        />
      )}


    </div>
  );
}

export default AdminCertificates;