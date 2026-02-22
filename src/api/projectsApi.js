const BASE_URL = "http://127.0.0.1:8000/api";

export async function getProjects() {
  const res = await fetch(`${BASE_URL}/projects`);
  if (!res.ok) throw new Error(`GET failed (${res.status})`);
  return res.json();
}

export async function createProject(payload) {
  const res = await fetch(`${BASE_URL}/projects`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`POST failed (${res.status})`);
  return res.json();
}

export async function deleteProject(id) {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error(`DELETE failed (${res.status})`);
  return true;
}



export async function updateProject(id, payload) {
  const res = await fetch(`${BASE_URL}/projects/${id}`, {
    method: "PUT", 
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`PUT /projects/${id} failed (${res.status})`);
  return res.json();
}



