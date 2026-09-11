const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

const api = async (endpoint, options = {}) => {
    const token = localStorage.getItem("token");

    const response = await fetch(`${API_URL}${endpoint}`, {
        ...options,
        headers: {
            "Content-Type": "application/json",
            ...(token && {
                Authorization: `Bearer ${token}`,
            }),
            ...options.headers,
        },
    });

    const data = await response.json();

    if (!response.ok) {
        throw new Error(data.message || "Something went wrong");
    }

    return data;
};

export const registerUser = (userData) =>
    api("/api/auth/register", {
        method: "POST",
        body: JSON.stringify(userData),
    });

export const loginUser = (credentials) =>
    api("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
    });

export const getCurrentUser = () =>
    api("/api/auth/me");

export default api;