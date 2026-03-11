const BASE_URL = "http://127.0.0.1:8000/api";

/*----------------admin functions----------------*/
export async function createCertificate(payload) {
  const res = await fetch(`${BASE_URL}/certificates`, {
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

export async function deleteCertificate(id) {
  const res = await fetch(`${BASE_URL}/certificates/${id}`, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    },
  });

  if (!res.ok) throw new Error(`DELETE failed (${res.status})`);
  return true;
}

export async function updateCertificate(id, payload) {
  const res = await fetch(`${BASE_URL}/certificates/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
      "Authorization": `Bearer ${localStorage.getItem("token")}`
    }, body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`PUT /certificates/${id} failed (${res.status})`);
  return res.json();
}


/*----------------visitor function----------------*/
export async function getCertificates() {
  const res = await fetch(`${BASE_URL}/certificates`, {
    headers: {
      "Accept": "application/json",
    },
  });
  if (!res.ok) throw new Error(`GET failed (${res.status})`);
  return res.json();
}


