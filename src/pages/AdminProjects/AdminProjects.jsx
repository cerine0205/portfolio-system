

import { useEffect, useState } from "react";
import "./AdminProjects.css";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
} from "../../api/projectsApi";

import ProjectStats from "./ProjectStats/ProjectStats";
import ProjectGrid from "./ProjectGrid/ProjectGrid";
import ProjectForm from "./ProjectForm/ProjectForm";

function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState(null);

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
    github_url: "",
    live_url: "",
    report_url: "",
    role: "",
    duration: "",
    type: "",
    challenges: "",
    results: "",
    tags: "",
    screenshots: "",
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
      github_url: "",
      live_url: "",
      report_url: "",
      role: "",
      duration: "",
      type: "",
      challenges: "",
      results: "",
      tags: "",
      screenshots: "",
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
      github_url: project.github_url || "",
      live_url: project.live_url || "",
      report_url: project.report_url || "",
      role: project.role || "",
      duration: project.duration || "",
      type: project.type || "",
      challenges: project.challenges || "",
      results: project.results || "",
      tags: project.tags ? project.tags.map((tag) => tag.name).join(", ") : "",
      screenshots: project.screenshots
        ? project.screenshots.map((shot) => shot.image).join(", ")
        : "",
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
      status: formData.status || undefined,
      team_size: formData.team_size ? Number(formData.team_size) : undefined,
      tech_stack: formData.tech_stack
        ? formData.tech_stack.split(",").map((item) => item.trim()).filter(Boolean)
        : undefined,
      image: formData.image || undefined,
      problem: formData.problem || undefined,
      solution: formData.solution || undefined,
      github_url: formData.github_url || undefined,
      live_url: formData.live_url || undefined,
      report_url: formData.report_url || undefined,
      role: formData.role || undefined,
      duration: formData.duration || undefined,
      type: formData.type || undefined,
      challenges: formData.challenges || undefined,
      results: formData.results || undefined,
      tags: formData.tags
        ? formData.tags.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
      screenshots: formData.screenshots
        ? formData.screenshots.split(",").map((item) => item.trim()).filter(Boolean)
        : [],
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

  async function handleDelete(id) {
    await deleteProject(id);
    await loadProjects();
  }

  const total = projects.length;
  const featuredCount = projects.filter((project) => project.featured).length;
  const completedCount = projects.filter(
    (project) => project.status?.toLowerCase() === "completed"
  ).length;

  return (
    <div className="admin-page admin-projects">
      <div className="admin-projects-top">
        <div>
          <p className="admin-projects-kicker">admin / projects</p>
          <h1 className="admin-title">Projects</h1>
          <p className="admin-subtitle">{total} projects stored</p>
        </div>

        <button className="add-project-btn" onClick={handleAddClick}>
          + Add Project
        </button>
      </div>

      <div className="admin-stats">
        <ProjectStats value={total} label="Total" />
        <ProjectStats value={featuredCount} label="Featured" />
        <ProjectStats value={completedCount} label="Completed" />
      </div>

      {showForm && (
        <div className="project-modal">
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



    <div className="projects-vault">
  <div className="projects-vault-header">
    <p className="project-section-kicker">Projects.Vault</p>
  </div>

  <ProjectGrid
    projects={projects}
    handleEdit={handleEdit}
    handleDelete={handleDelete}
  />
</div>

    </div>
  );
}

export default AdminProjects;