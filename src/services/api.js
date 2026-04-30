import axios from "axios";

const API = "http://localhost/student-api"; // WAMP path

export const getStudents = () => axios.get(`${API}/read.php`);
export const addStudent = (data) => axios.post(`${API}/create.php`, data);
export const updateStudent = (data) => {
    return axios.post(`${API}/update.php`, { ...data, id: Number(data.id) });
};

export const deleteStudent = (id) => axios.post(`${API}/delete.php`, { id });
