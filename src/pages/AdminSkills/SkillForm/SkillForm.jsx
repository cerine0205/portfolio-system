import "./SkillForm.css";

function SkillForm({ handleSubmit, handleChange, formData, setShowForm }) {
  return (
    <div
      className="certificate-form-overlay"
      onClick={() => {
        setShowForm(false);
      }}
    >
      <div
        className="certificate-form-card"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="certificate-section-kicker">Add.Skill</p>

        <form className="certificate-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Skill Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="category"
            placeholder="Category"
            value={formData.category}
            onChange={handleChange}
          />

          <input
            type="number"
            name="display_order"
            placeholder="Display Order"
            value={formData.display_order}
            onChange={handleChange}
            min="0"
          />

          <div className="certificate-form-actions">
            <button type="submit">Create</button>

            <button
              type="button"
              className="cancel-btn"
              onClick={() => {
                setShowForm(false);
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

export default SkillForm;