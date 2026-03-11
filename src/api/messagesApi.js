const BASE_URL = "http://127.0.0.1:8000/api";

/*----------------admin functions----------------*/
export async function getMessages() {
  const res = await fetch(`${BASE_URL}/messages`, {
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
},
  });

if (!res.ok) throw new Error(`GET failed (${res.status})`);

return res.json();
}

export async function deleteMessage(id) {
  const res = await fetch(`${BASE_URL}/messages/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  });

  if (!res.ok) throw new Error(`DELETE failed (${res.status})`);

  return true;
}

export async function markMessageAsRead(id) {
  const res = await fetch(`${BASE_URL}/messages/${id}/read`, {
    method: "PATCH",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  });

  if (!res.ok) throw new Error(`PATCH failed (${res.status})`);

  return res.json();
}


/*----------------visitor function----------------*/
export async function createMessage(payload) {
  const res = await fetch(`${BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`POST failed (${res.status})`);

  return res.json();
}
