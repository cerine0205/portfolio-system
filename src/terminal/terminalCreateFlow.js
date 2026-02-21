export function handleCreateInput({ value, email, draft, projects }) {
  const v = value.trim();
  const userLine = { text: `${email}:~$ ${v}`, className: "command" };

  // 1) name
  if (!draft.projectName) {
    return {
      nextDraft: { ...draft, projectName: v },
      lines: [userLine, { text: "Enter description:", className: "info" }],
      done: false,
    };
  }

  // 2) description
  if (!draft.projectDesciption) {
    return {
      nextDraft: { ...draft, projectDesciption: v },
      lines: [userLine, { text: "Enter year (e.g., 2024):", className: "info" }],
      done: false,
    };
  }

  // 3) year
  if (!draft.projectDate) {
    const yearNum = Number(v);
    if (Number.isNaN(yearNum)) {
      return {
        nextDraft: draft,
        lines: [userLine, { text: "Year must be a number. Try again:", className: "error" }],
        done: false,
      };
    }

    return {
      nextDraft: { ...draft, projectDate: yearNum },
      lines: [userLine, { text: 'Featured? (yes/no):', className: "info" }],
      done: false,
    };
  }

  // 4) featured
  if (draft.Featured === undefined) {
    const lower = v.toLowerCase();
    const featured = lower === "yes"|| lower === "true" || lower === "1";

    return {
      nextDraft: { ...draft, Featured: featured },
      lines: [userLine, { text: "Enter tags (comma separated):", className: "info" }],
      done: false,
    };
  }

  // 5) tags
  if (!draft.projectTags) {
    const tags = v.split(",").map(t => t.trim()).filter(Boolean);

    return {
      nextDraft: { ...draft, projectTags: tags },
      lines: [userLine, { text: "Enter image path (or leave empty):", className: "info" }],
      done: false,
    };
  }

  // 6) image + finish
  if (!draft.projectImage) {
    const img = v || "";

    const newProject = {
      id: projects.length + 1,
      image: img,
      name: draft.projectName,
      featured: draft.Featured,
      year: draft.projectDate,
      description: draft.projectDesciption,
      tags: draft.projectTags,
    };

    return {
      nextDraft: {},
      lines: [userLine, { text: "Project created successfully!", className: "success" }],
      done: true,
      newProject,
    };
  }

  return { nextDraft: draft, lines: [], done: false };
}