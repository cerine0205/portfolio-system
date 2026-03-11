const BASE_URL = "http://127.0.0.1:8000/api";

/*----------------admin functions----------------*/
export async function createSkill(payload) {
  const res = await fetch(`${BASE_URL}/skills`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`POST failed (${res.status})`);
  return res.json();
}

export async function deleteSkill(id) {
  const res = await fetch(`${BASE_URL}/skills/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  });

  if (!res.ok) throw new Error(`DELETE failed (${res.status})`);
  return true;
}

/*----------------visitor function----------------*/
export async function getSkills() {
  const res = await fetch(`${BASE_URL}/skills`, {
    headers: {
      "Accept": "application/json"
    }
  });

  if (!res.ok) throw new Error(`GET failed (${res.status})`);

  const data = await res.json();
  return data.skills; // لأن الباك يرجع { skills: [...] }
}