import { useEffect, useState } from "react";
import "./AdminSkills.css";
import { getSkills, createSkill, deleteSkill } from "../../api/skillsApi";
import SkillForm from "./SkillForm/SkillForm";
import SkillStats from "./SkillStats/SkillStats";
import SkillGrid from "./SkillGrid/SkillGrid";
import DeleteModal from "../DeleteModal/DeleteModal";

function AdminSkills() {
  const [skills, setSkills] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [skillToDelete, setSkillToDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: "",
    category: "",
    display_order: "",
  });

  useEffect(() => {
    loadSkills();
  }, []);

  async function loadSkills() {
    const data = await getSkills();
    setSkills(data);
  }

  function handleChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  function handleAddClick() {
    setFormData({
      name: "",
      category: "",
      display_order: "",
    });
    setShowForm(true);
  }

  async function handleSubmit(e) {
    e.preventDefault();

    const payload = {
      name: formData.name,
      category: formData.category || null,
      display_order: formData.display_order
        ? Number(formData.display_order)
        : 0,
    };

    await createSkill(payload);
    await loadSkills();

    setShowForm(false);
    setFormData({
      name: "",
      category: "",
      display_order: "",
    });
  }

  function handleDelete(id) {
    setSkillToDelete(id);
  }

  async function confirmDelete() {
    if (!skillToDelete) return;

    await deleteSkill(skillToDelete);
    await loadSkills();
    setSkillToDelete(null);
  }

  const total = skills.length;

  const categoriesCount = new Set(
    skills.map((skill) => skill.category).filter(Boolean)
  ).size;

  const topCategory =
    skills.find((skill) => skill.category)?.category || "N/A";

  return (
    <div className="admin-page admin-skills">
      <div className="admin-certificate-top">
        <div>
          <p className="admin-certificate-kicker">admin / skills</p>
          <h1 className="admin-certificate-title">Skills</h1>
          <p className="admin-certificate-subtitle">{total} skills stored</p>
        </div>

        <button className="add-certificate-btn" onClick={handleAddClick}>
          + Add Skill
        </button>
      </div>

      <div className="admin-stats">
        <SkillStats value={total} label="Total" />
        <SkillStats value={categoriesCount} label="Categories" />
        <SkillStats value={topCategory} label="Top Category" />
      </div>

      {showForm && (
        <div className="skill-modal">
          <SkillForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
            setShowForm={setShowForm}
          />
        </div>
      )}

      <div className="skills-vault">
        <div className="skills-vault-header">
          <p className="skill-section-kicker">Skills.Vault</p>
        </div>

        <SkillGrid skills={skills} handleDelete={handleDelete} />
      </div>

      {skillToDelete && (
        <DeleteModal
          isOpen={skillToDelete}
          title="Delete Skill?"
          message={`Are you sure you want to delete "${
            skills.find((skill) => skill.id === skillToDelete)?.name ||
            "this skill"
          }"?`}
          onConfirm={confirmDelete}
          onCancel={() => setSkillToDelete(null)}
        />
      )}
    </div>
  );
}

export default AdminSkills;