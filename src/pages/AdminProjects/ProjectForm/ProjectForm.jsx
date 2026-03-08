
import "./ProjectForm.css";

function ProjectForm({
  handleSubmit,
  handleChange,
  formData,
  setShowForm,
  editingProject,
  setEditingProject,
}) {
  return (
    <div className="admin-project-form-card">
      <p className="admin-project-form-kicker">
        {editingProject ? "Edit.Project" : "Add.Project"}
      </p>

      <form className="admin-project-form" onSubmit={handleSubmit}>
        <div className="admin-project-form-section">
          <p className="admin-project-form-section-title">Basic Info</p>

          <input
            type="text"
            name="name"
            placeholder="Project Name"
            value={formData.name}
            onChange={handleChange}
            required
          />

          <textarea
            name="description"
            placeholder="Description"
            value={formData.description}
            onChange={handleChange}
            required
          />

          <input
            type="number"
            name="year"
            placeholder="Year"
            value={formData.year}
            onChange={handleChange}
            required
            min="2000"
            max="2100"
          />

          <input
            type="text"
            name="status"
            placeholder="Status"
            value={formData.status}
            onChange={handleChange}
          />

          <input
            type="number"
            name="team_size"
            placeholder="Team Size"
            value={formData.team_size}
            onChange={handleChange}
          />

          <label className="admin-project-checkbox">
            <input
              type="checkbox"
              name="featured"
              checked={formData.featured}
              onChange={handleChange}
            />
            Featured Project
          </label>
        </div>

        <div className="admin-project-form-section">
          <p className="admin-project-form-section-title">Technical Info</p>

          <input
            type="text"
            name="tech_stack"
            placeholder="Tech Stack (React, Laravel, MySQL)"
            value={formData.tech_stack}
            onChange={handleChange}
          />

          <input
            type="text"
            name="tags"
            placeholder="Tags (Frontend, Fullstack, API)"
            value={formData.tags}
            onChange={handleChange}
          />

          <input
            type="text"
            name="screenshots"
            placeholder="Screenshots URLs (comma separated)"
            value={formData.screenshots}
            onChange={handleChange}
          />

          <input
            type="text"
            name="image"
            placeholder="Main Image URL"
            value={formData.image}
            onChange={handleChange}
          />
        </div>

        <div className="admin-project-form-section">
          <p className="admin-project-form-section-title">Case Study</p>

          <textarea
            name="problem"
            placeholder="Problem"
            value={formData.problem}
            onChange={handleChange}
          />

          <textarea
            name="solution"
            placeholder="Solution"
            value={formData.solution}
            onChange={handleChange}
          />

          <textarea
            name="challenges"
            placeholder="Challenges"
            value={formData.challenges}
            onChange={handleChange}
          />

          <textarea
            name="results"
            placeholder="Results"
            value={formData.results}
            onChange={handleChange}
          />
        </div>

        <div className="admin-project-form-section">
          <p className="admin-project-form-section-title">Extra Details</p>

          <input
            type="text"
            name="role"
            placeholder="Role"
            value={formData.role}
            onChange={handleChange}
          />

          <input
            type="text"
            name="duration"
            placeholder="Duration"
            value={formData.duration}
            onChange={handleChange}
          />

          <input
            type="text"
            name="type"
            placeholder="Type"
            value={formData.type}
            onChange={handleChange}
          />
        </div>

        <div className="admin-project-form-section">
          <p className="admin-project-form-section-title">Links</p>

          <input
            type="text"
            name="github_url"
            placeholder="GitHub URL"
            value={formData.github_url}
            onChange={handleChange}
          />

          <input
            type="text"
            name="live_url"
            placeholder="Live Demo URL"
            value={formData.live_url}
            onChange={handleChange}
          />

          <input
            type="text"
            name="report_url"
            placeholder="Report URL"
            value={formData.report_url}
            onChange={handleChange}
          />
        </div>

        <div className="admin-project-form-actions">
          <button type="submit">
            {editingProject ? "Update" : "Create"}
          </button>

          <button
            type="button"
            className="admin-cancel-btn"
            onClick={() => {
              setShowForm(false);
              setEditingProject(null);
            }}
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}

export default ProjectForm;