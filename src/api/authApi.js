const BASE_URL = "http://127.0.0.1:8000/api";

export async function login(payload) {

    const res = await fetch(`${BASE_URL}/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload)
    });

    if (!res.ok) {
        throw new Error("Login failed");
    }

    return res.json();
}


export async function logout(token) {

    const res = await fetch(`${BASE_URL}/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        }
    });

    if (!res.ok) {
        throw new Error("Logout failed");
    }

    return res.json();
}