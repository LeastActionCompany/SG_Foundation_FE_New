import axios from "axios";

const defaultBaseUrl = import.meta.env.DEV
  ? "http://localhost:5000/api"
  : "https://sg-foundation-be.onrender.com/api";

const API = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL?.trim() || defaultBaseUrl,
});

API.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      return Promise.reject(error);
    }

    error.response = {
      data: {
        error:
          error.code === "ECONNABORTED"
            ? "The request timed out."
            : "Could not reach the API server. Make sure the backend is running and the API URL is correct.",
      },
    };

    return Promise.reject(error);
  }
);

// Donation APIs
export const createOrder = (data) =>
  API.post("/donation/create-order", data);

export const verifyPayment = (data) =>
  API.post("/donation/verify", data);

// Contact
export const submitContact = (data) =>
  API.post("/contact", data);

// Volunteer
export const submitVolunteer = (data) =>
  API.post("/volunteer", data);

export const adminLogin = (data) =>
  API.post("/admin/login", data);

export const getAdminDashboardData = (token) =>
  API.get("/admin/dashboard", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
