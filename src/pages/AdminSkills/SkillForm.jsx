import './AdminSkills.css';
import '../adminShared.css';

function SkillForm({ handleSubmit, handleChange, formData, setShowForm }) {
  return (
    <div
      className="admin-panel-modal"
      onClick={() => setShowForm(false)}
    >
      <div
        className="admin-panel-form-card"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="admin-panel-form-kicker">
          Add.Skill
        </p>

        <form className="admin-panel-form" onSubmit={handleSubmit}>

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

          <div className="admin-panel-form-actions">

            <button type="submit">
              Create
            </button>

            <button
              type="button"
              className="admin-panel-cancel-btn"
              onClick={() => setShowForm(false)}
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