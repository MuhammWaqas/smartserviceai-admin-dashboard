import axios from "axios";

const baseURL = "https://gardezi-lab-backend-1-zlp6.onrender.com/api";
// const baseURL = "http://127.0.0.1:5000/api"

const httpClient = {
  get: async (url, params = {}) => {
    try {
      const response = await axios.get(`${baseURL}${url}`, {
        params
      });
      return response.data;
    } catch (error) {
      console.error("GET Error:", error);
      throw error;  
    }
  },

  post: async (url, data = {}) => {
    try {
      const response = await axios.post(`${baseURL}${url}`, data,
        {
          headers: {
            "Content-Type": "application/json",
          }
        }
      );
      return response.data;
    } catch (error) {
      console.error("POST Error:", error);
      throw error;
    }
  },

  put: async (url, data = {}) => {
    try {
      const response = await axios.put(`${baseURL}${url}`, data, {
        headers: {
          "Content-Type": "application/json",
        }
      });
      return response.data;
    } catch (error) {
      console.error("PUT Error:", error);
      throw error;
    }
  },

  delete: async (url) => {
    try {
      const response = await axios.delete(`${baseURL}${url}`);
      return response.data;
    } catch (error) {
      console.error("DELETE Error:", error);
      throw error;
    }
  },
};

export default httpClient;
