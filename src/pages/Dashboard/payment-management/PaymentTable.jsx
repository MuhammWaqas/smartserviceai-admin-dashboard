import { useState } from "react";
import { FaRegTrashCan } from "react-icons/fa6";

export default function BookingsTable({ onEdit }) {
    const [students, setStudents] = useState([
        {
            id: 1,
            name: "Ali Khan",
            course: "ali@gmail.com",
            program: "Admin",
            status: "Active",
            date: "10-2-2026",
        },
        {
            id: 2,
            name: "Ahmed Raza",
            course: "ahmed@gmail.com",
            program: "User",
            status: "Inactive",
            date: "10-2-2026",
        },
        {
            id: 3,
            name: "Sara Noor",
            course: "sara@gmail.com",
            program: "User",
            status: "Active",
            date: "10-2-2026",
        },
    ]);

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
                                <th>Transaction ID</th>
                                <th>User</th>
                                <th>Provider</th>
                                <th>Amount</th>
                                <th>Status</th>
                                <th>Method</th>
                                <th>Date</th>
                                {/* <th>Action</th> */}
                            </tr>
                        </thead>

                        <tbody>
                            {students.length > 0 ? (
                                students.map((student, index) => (
                                    <tr key={student.id}>
                                        <td>{index + 1}</td>
                                        <td>{student.name}</td>
                                        <td>{student.course}</td>
                                        <td>{student.program}</td>
                                        <td>{student.status}</td>
                                        <td>{student.date}</td>
                                        {/* <td>
                                            <div className="d-flex gap-2 justify-content-center">
                                                <FaRegTrashCan
                                                    style={{
                                                        fontSize: "20px",
                                                        cursor: "pointer",
                                                        color: "red",
                                                    }}
                                                />
                                            </div>
                                        </td> */}
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="text-center">
                                        No students found
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
