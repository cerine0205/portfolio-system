import { useState } from "react";
import './AdminProjects.css';
import '../adminShared.css';


function ProjectForm({
  handleSubmit,
  handleChange,
  formData,
  setShowForm,
  editingProject,
  setEditingProject,
}) {
  const [openSection, setOpenSection] = useState("basic");

  function toggleSection(sectionName) {
    setOpenSection(openSection === sectionName ? "" : sectionName);
  }

  return (
    <div
      className="admin-project-form-overlay"
      onClick={() => {
        setShowForm(false);
        setEditingProject(null);
      }}
    >
      <div
        className="admin-project-form-card admin-panel-form-card"
        onClick={(e) => e.stopPropagation()}
      >
        <p className="admin-project-form-kicker admin-panel-form-kicker">
          {editingProject ? "Edit.Project" : "Add.Project"}
        </p>

        <form className="admin-project-form" onSubmit={handleSubmit}>
          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("basic")}
            >
              <span>Basic Info</span>
              <span>{openSection === "basic" ? "−" : "+"}</span>
            </button>

            {openSection === "basic" && (
              <div className="admin-project-form-section-body">
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
                  min="1"
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
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("technical")}
            >
              <span>Technical Info</span>
              <span>{openSection === "technical" ? "−" : "+"}</span>
            </button>

            {openSection === "technical" && (
              <div className="admin-project-form-section-body">
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

                <textarea
                  name="features"
                  placeholder="One feature per line"
                  value={formData.features}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("caseStudy")}
            >
              <span>Case Study</span>
              <span>{openSection === "caseStudy" ? "−" : "+"}</span>
            </button>

            {openSection === "caseStudy" && (
              <div className="admin-project-form-section-body">
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
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("architecture")}
            >
              <span>Architecture</span>
              <span>{openSection === "architecture" ? "−" : "+"}</span>
            </button>

            {openSection === "architecture" && (
              <div className="admin-project-form-section-body">
                <textarea
                  name="architecture"
                  placeholder="System Architecture description"
                  value={formData.architecture}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="architecture_image"
                  placeholder="Architecture Diagram URL"
                  value={formData.architecture_image}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("extra")}
            >
              <span>Extra Details</span>
              <span>{openSection === "extra" ? "−" : "+"}</span>
            </button>

            {openSection === "extra" && (
              <div className="admin-project-form-section-body">
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
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("links")}
            >
              <span>Links</span>
              <span>{openSection === "links" ? "−" : "+"}</span>
            </button>

            {openSection === "links" && (
              <div className="admin-project-form-section-body">

                <input
                  type="text"
                  name="repo"
                  placeholder="Repository URL (for non-web projects)"
                  value={formData.repo}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="frontend_repo"
                  placeholder="Frontend Repo URL"
                  value={formData.frontend_repo}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="backend_repo"
                  placeholder="Backend Repo URL"
                  value={formData.backend_repo}
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
                  name="demo_url"
                  placeholder="Demo Video URL"
                  value={formData.demo_url}
                  onChange={handleChange}
                />

                <input
                  type="text"
                  name="presentation_url"
                  placeholder="Presentation URL"
                  value={formData.presentation_url}
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
            )}
          </div>

          <div className="admin-project-form-section">
            <button
              type="button"
              className="admin-project-form-section-header"
              onClick={() => toggleSection("refactor")}
            >
              <span>Refactor Notes</span>
              <span>{openSection === "refactor" ? "−" : "+"}</span>
            </button>

            {openSection === "refactor" && (
              <div className="admin-project-form-section-body">
                <textarea
                  name="refactor_notes"
                  placeholder="Refactoring notes or improvements"
                  value={formData.refactor_notes}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="admin-project-form-actions admin-panel-form-actions">
            <button type="submit">
              {editingProject ? "Update" : "Create"}
            </button>

            <button
              type="button"
              className="admin-cancel-btn admin-panel-cancel-btn"
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
    </div>
  );
}

export default ProjectForm;