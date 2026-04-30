import axiosInstance from "./axiosInstance";

// PROVIDER BOOKINGS
export const getProviderBookings = async () => {
    const res = await axiosInstance.get("/bookings");
    return res.data;
};

export const updateBookingStatus = async (id, status) => {
    const res = await axiosInstance.patch(`/bookings/${id}`, {
        status,
    });
    return res.data;
};

export const deleteBooking = async (id) => {
    const res = await axiosInstance.delete(`/bookings/${id}`);
    return res.data;
};