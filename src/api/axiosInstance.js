import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  
  headers: {
    "Content-Type": "application/json",
  },// Your backend URL
});
console.log("BASE URL:", process.env.NEXT_PUBLIC_API_URL);

// Attach token automatically to every request (browser only)
axiosInstance.interceptors.request.use(
  (config) => {
    // Check if we are in the browser
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },

  (error) => Promise.reject(error)
);

export default axiosInstance;
