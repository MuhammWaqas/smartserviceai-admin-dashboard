import axios from "axios";

const axiosInstance = axios.create({
   baseURL: import.meta.env.VITE_API_URL, // Your backend URL
});

// console.log("BASE URL:", meta.env.VITE_API_URL);
// Attach token automatically to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("access_token");
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

export default axiosInstance;
