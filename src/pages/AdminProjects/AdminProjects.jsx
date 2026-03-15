import { useEffect, useState } from "react";
import "./AdminProjects.css";
import "../adminShared.css";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projectsApi";
import ProjectStats from "./ProjectStats";
import ProjectGrid from "./ProjectGrid";
import ProjectForm from "./ProjectForm";
import DeleteModal from "../DeleteModal/DeleteModal";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [projectToDelete, setProjectToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    year: "",
    featured: false,
    status: "",
    team_size: "",
    tech_stack: "",
    image: "",
    problem: "",
    solution: "",
    challenges: "",
    results: "",
    repo: "",
    frontend_repo: "",
    backend_repo: "",
    live_url: "",
    report_url: "",
    demo_url: "",
    presentation_url: "",
    role: "",
    duration: "",
    type: "",
    tags: "",
    screenshots: "",
    features: "",
    architecture: "",
    architecture_image: "",
    refactor_notes: "",
  });

  useEffect(() => {
    loadProjects();
  }, []);

  async function loadProjects() {
    const data = await getProjects();
    setProjects(data);
  }

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  }

  function resetForm() {
    setFormData({
      name: "",
      description: "",
      year: "",
      featured: false,
      status: "",
      team_size: "",
      tech_stack: "",
      image: "",
      problem: "",
      solution: "",
      challenges: "",
      results: "",
      repo: "",
      frontend_repo: "",
      backend_repo: "",
      live_url: "",
      report_url: "",
      demo_url: "",
      presentation_url: "",
      role: "",
      duration: "",
      type: "",
      tags: "",
      screenshots: "",
      features: "",
      architecture: "",
      architecture_image: "",
      refactor_notes: "",
    });
  }

  function handleAddClick() {
    setEditingProject(null);
    resetForm();
    setShowForm(true);
  }

  function handleEdit(project) {
    setEditingProject(project);
    setFormData({
      name: project.name || "",
      description: project.description || "",
      year: project.year || "",
      featured: project.featured || false,
      status: project.status || "",
      team_size: project.team_size || "",
      tech_stack: project.tech_stack ? project.tech_stack.join(", ") : "",
      image: project.image || "",
      problem: project.problem || "",
      solution: project.solution || "",
      challenges: project.challenges || "",
      results: project.results || "",
      repo: project.repo || "",
      frontend_repo: project.frontend_repo || "",
      backend_repo: project.backend_repo || "",
      live_url: project.live_url || "",
      report_url: project.report_url || "",
      demo_url: project.demo_url || "",
      presentation_url: project.presentation_url || "",
      role: project.role || "",
      duration: project.duration || "",
      type: project.type || "",
      tags: project.tags ? project.tags.map((tag) => tag.name).join(", ") : "",
      screenshots: project.screenshots
        ? project.screenshots.map((shot) => shot.image).join(", ")
        : "",
      features: project.features ? project.features.join("\n") : "",
      architecture: project.architecture || "",
      architecture_image: project.architecture_image || "",
      refactor_notes: project.refactor_notes || "",
    });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name: formData.name,
      description: formData.description,
      year: Number(formData.year),
      featured: formData.featured,
      status: formData.status || null,
      team_size: formData.team_size ? Number(formData.team_size) : null,
      tech_stack: formData.tech_stack
        ? formData.tech_stack.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
      image: formData.image || null,
      problem: formData.problem || null,
      solution: formData.solution || null,
      challenges: formData.challenges || null,
      results: formData.results || null,
      repo: formData.repo || null,
      frontend_repo: formData.frontend_repo || null,
      backend_repo: formData.backend_repo || null,
      live_url: formData.live_url || null,
      report_url: formData.report_url || null,
      demo_url: formData.demo_url || null,
      presentation_url: formData.presentation_url || null,
      role: formData.role || null,
      duration: formData.duration || null,
      type: formData.type || null,
      tags: formData.tags
        ? formData.tags.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
      screenshots: formData.screenshots
        ? formData.screenshots.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
      features: formData.features
        ? formData.features.split("\n").map((item) => item.trim()).filter(Boolean)
        : [],
      architecture: formData.architecture || null,
      architecture_image: formData.architecture_image || null,
      refactor_notes: formData.refactor_notes || null,
    };

    if (editingProject) {
      await updateProject(editingProject.id, payload);
    } else {
      await createProject(payload);
    }

    await loadProjects();
    setShowForm(false);
    setEditingProject(null);
    resetForm();
  }

  function handleDelete(id) {
    setProjectToDelete(id);
  }

  async function confirmDelete() {
    if (!projectToDelete) return;
    await deleteProject(projectToDelete);
    await loadProjects();
    setProjectToDelete(null);
  }

  const total = projects.length;
  const featuredCount = projects.filter((project) => project.featured).length;
  const completedCount = projects.filter(
    (project) => project.status?.toLowerCase() === "completed"
  ).length;

  return (
    <div className="admin-page admin-projects">
      <div className="admin-projects-top admin-panel-top">
        <div>
          <p className="admin-projects-kicker admin-panel-kicker">
            admin / projects
          </p>

          <h1 className="admin-title admin-panel-title">
            Projects
          </h1>

          <p className="admin-subtitle admin-panel-subtitle">
            {total} projects stored
          </p>
        </div>

        <button
          className="add-project-btn admin-panel-add-btn"
          onClick={handleAddClick}
        >
          + Add Project
        </button>
      </div>

      <div className="admin-stats">
        <ProjectStats value={total} label="Total" />
        <ProjectStats value={featuredCount} label="Featured" />
        <ProjectStats value={completedCount} label="Completed" />
      </div>

      {showForm && (
        <div className="project-modal admin-panel-modal">
          <ProjectForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            setShowForm={setShowForm}
            editingProject={editingProject}
            setEditingProject={setEditingProject}
          />
        </div>
      )}

      <div className="projects-vault admin-panel-vault">
        <div className="projects-vault-header admin-panel-vault-header">
          <p className="project-section-kicker admin-panel-section-kicker">
            Projects.Vault
          </p>
        </div>

        <ProjectGrid
          projects={projects}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      </div>

      {projectToDelete && (
        <DeleteModal
          isOpen={projectToDelete}
          title="Delete Project?"
          message={`Are you sure you want to delete "${projects.find((p) => p.id === projectToDelete)?.name || "this project"
            }"?`}
          onConfirm={confirmDelete}
          onCancel={() => setProjectToDelete(null)}
        />
      )}
    </div>
  );
}

export default AdminProjects;