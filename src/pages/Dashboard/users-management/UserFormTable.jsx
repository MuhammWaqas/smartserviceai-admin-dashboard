import { useState, useEffect } from "react";
import { FaRegTrashCan, FaPenToSquare } from "react-icons/fa6";
import axiosInstance from "../../../api/axiosInstance";

export default function StudentFormTable({ onEdit }) {
    const [students, setStudents] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchStudents = async () => {
            try {
                const response = await axiosInstance.get("/users");
                setStudents(response.data);
            } catch (error) {
                console.error("Error fetching students:", error.response?.data || error);
            } finally {
                setLoading(false);
            }
        };

        fetchStudents();
    }, []);

    // Handle Block/Unblock
    const handleBlockToggle = async (student) => {
        try {
            const newStatus = !student.isBlocked; // flip current status
            const response = await axiosInstance.patch(`/users/block/${student._id}`, {
                isBlocked: newStatus,
            });

            // update local state
            setStudents(prev =>
                prev.map(s => (s._id === student._id ? response.data.user : s))
            );
        } catch (error) {
            console.error(error);
        }
    };

    const handleProviderActivate = async (student) => {
        try {
            const providerStatus = !student.isProviderActive;

            const response = await axiosInstance.patch(
                `/users/activate-provider/${student._id}`,
                { isProviderActive: providerStatus } // <-- match backend key
            );

            // Update state
            setStudents(prev =>
                prev.map(s =>
                    s._id === student._id ? response.data.user : s
                )
            );
        } catch (error) {
            console.error("Error activating provider:", error);
        }
    };



    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="card shadow-sm border-0">
            <div className="card-body p-0">
                <div
                    className="table-responsive"
                    style={{ maxHeight: "62vh", overflowY: "scroll" }}
                >
                    <table className="table table-bordered mb-0">
                        <thead>
                            <tr style={{ backgroundColor: "#1c2765", color: "white" }}>
                                <th>Sr.</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Role</th>
                                <th>Status</th>
                                <th>Provider</th>
                                <th>Action</th>
                            </tr>
                        </thead>

                        <tbody>
                            {students.length > 0 ? (
                                students.map((student, index) => (
                                    <tr key={student._id}>
                                        <td>{index + 1}</td>
                                        <td>{student.username}</td>
                                        <td>{student.email}</td>
                                        <td>{student.role?.name}</td>
                                        <td>{student.isBlocked ? "Blocked" : "Active"}</td>
                                        <td>{student.isProviderActive ? "Provider" : student.role?.name}</td>

                                        <td>
                                            <div className="d-flex gap-2 justify-content-center">
                                                {/* <FaPenToSquare
                                                    onClick={() => onEdit && onEdit(student)}
                                                    style={{ fontSize: "20px", cursor: "pointer" }}
                                                />
                                                <FaRegTrashCan
                                                    style={{
                                                        fontSize: "20px",
                                                        cursor: "pointer",
                                                        color: "red",
                                                    }}
                                                /> */}
                                                <button
                                                    className={`btn btn-sm ${student.isBlocked ? "btn-success" : "btn-warning"
                                                        }`}
                                                    onClick={() => handleBlockToggle(student)}
                                                >
                                                    {student.isBlocked ? "Unblock" : "Block"}
                                                </button>

                                                <button
                                                    className={`btn btn-sm ${student.isProviderActive ? "btn-secondary" : "btn-primary"
                                                        }`}
                                                    onClick={() => handleProviderActivate(student)}
                                                >
                                                    {student.isProviderActive ? "Provider Active" : "Make Provider"}
                                                </button>

                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No users found
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}
