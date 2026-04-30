import axiosInstance from "./axiosInstance";

export const getServices = async () => {
  const res = await axiosInstance.get("/services");
  return res.data;
};

export const createService = async (serviceData) => {
  const res = await axiosInstance.post("/services", serviceData);
  return res.data;
};

export const updateService = async (id, serviceData) => {
  const res = await axiosInstance.patch(`/services/${id}`, serviceData);
  return res.data;
};

export const deleteService = async (id) => {
  const res = await axiosInstance.delete(`/services/${id}`);
  return res.data;
};
