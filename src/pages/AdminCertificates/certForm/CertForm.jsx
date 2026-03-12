import "./CertForm.css";

function CertForm({
  handleSubmit,
  handleChange,
  formData,
  setShowForm,
  editingCertificate,
  setEditingCertificate,
}) {
  return (
    <div
      className="certificate-form-overlay"
      onClick={() => {
        setShowForm(false);
        setEditingCertificate(null);
      }}
    >
      <div
        className="certificate-form-card"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="certificate-section-kicker">
          {editingCertificate ? "Edit.Certificate" : "Add.Certificate"}
        </p>

        <form className="certificate-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={formData.title}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="issuer"
            placeholder="Issuer"
            value={formData.issuer}
            onChange={handleChange}
          />

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
          />

          <input
            type="text"
            name="link"
            placeholder="Certificate Link"
            value={formData.link}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Image URL"
            value={formData.image}
            onChange={handleChange}
          />

          <div className="certificate-form-actions">
            <button type="submit">
              {editingCertificate ? "Update" : "Create"}
            </button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setShowForm(false);
                setEditingCertificate(null);
              }}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CertForm;