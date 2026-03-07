const BASE_URL = "http://127.0.0.1:8000/api";

// get all messages (admin)
export async function getMessages() {
  const res = await fetch(`${BASE_URL}/messages`);

  if (!res.ok) throw new Error(`GET failed (${res.status})`);

  return res.json();
}


// send message (visitor)
export async function createMessage(payload) {
  const res = await fetch(`${BASE_URL}/messages`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`POST failed (${res.status})`);

  return res.json();
}


// delete message (admin)
export async function deleteMessage(id) {
  const res = await fetch(`${BASE_URL}/messages/${id}`, {
    method: "DELETE",
  });

  if (!res.ok) throw new Error(`DELETE failed (${res.status})`);

  return true;
}


// mark message as read (admin)
export async function markMessageAsRead(id) {
  const res = await fetch(`${BASE_URL}/messages/${id}/read`, {
    method: "PATCH",
  });

  if (!res.ok) throw new Error(`PATCH failed (${res.status})`);

  return res.json();
}