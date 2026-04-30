import { useEffect, useState } from "react";
import { getProviderBookings, updateBookingStatus, deleteBooking } from "../../../api/bookingService";
import {
    FaCheck,
    FaPlay,
    FaCheckCircle,
    FaTimes,
    FaTrash
} from "react-icons/fa";


export default function ProviderBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    const fetchBookings = async () => {
        try {
            setLoading(true);
            const data = await getProviderBookings();
            setBookings(data);
        } catch (err) {
            setError("Failed to load bookings");
        } finally {
            setLoading(false);
        }
    };

    const handleStatusUpdate = async (id, status) => {
        try {
            await updateBookingStatus(id, status);
            fetchBookings();
        } catch (err) {
            alert("Status update failed");
        }
    };

    const handleDelete = async (id) => {
        try {
            if (!confirm("Are you sure you want to delete this booking?")) return;

            await deleteBooking(id);
            fetchBookings(); // refresh list
        } catch (err) {
            alert("Delete failed");
        }
    };


    useEffect(() => {
        fetchBookings();
    }, []);

    // STATUS BADGE FUNCTION
    const getStatusBadge = (status) => {
        const map = {
            pending: "bg-warning text-dark",
            accepted: "bg-primary",
            "in-progress": "bg-info text-dark",
            completed: "bg-success",
            cancelled: "bg-danger",
        };

        return map[status] || "bg-secondary";
    };

    return (
        <div className="container mt-2">

            {/* <h5 className="fw-bold mb-3">Provider Bookings</h5> */}

            {error && <div className="alert alert-danger">{error}</div>}
            {loading && <p>Loading bookings...</p>}

            <div className="table-responsive">

                <table className="table table-bordered table-hover align-middle">

                    <thead className="table-light">
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>User</th>
                            <th>Provider</th>
                            <th>Address</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>

                        {!loading && bookings.length === 0 ? (
                            <tr>
                                <td colSpan={8} className="text-center">
                                    No bookings found
                                </td>
                            </tr>
                        ) : (
                            bookings.map((b, index) => (
                                <tr key={b._id}>

                                    {/* INDEX */}
                                    <td>{index + 1}</td>

                                    {/* SERVICE */}
                                    <td>
                                        {b.service_id?.name || "N/A"}
                                    </td>

                                    {/* USER */}
                                    <td>
                                        <div>
                                            <strong>{b.user_id?.username || "N/A"}</strong>
                                            <br />
                                            <small>{b.user_id?.email}</small>
                                        </div>
                                    </td>

                                    {/* PROVIDER */}
                                    <td>
                                        {b.provider_id?.username || "N/A"}
                                    </td>

                                    {/* ADDRESS */}
                                    <td>
                                        <small>
                                            {b.address?.street}
                                        </small>
                                        <br />
                                        <small className="text-muted">
                                            {b.address?.lat?.toFixed(4)}, {b.address?.lng?.toFixed(4)}
                                        </small>
                                    </td>

                                    {/* DATE */}
                                    <td>
                                        {new Date(b.date).toLocaleDateString()}
                                        <br />
                                        <small>{b.time}</small>
                                    </td>

                                    {/* STATUS */}
                                    <td>
                                        <span className={`badge ${getStatusBadge(b.status)}`}>
                                            {b.status}
                                        </span>
                                    </td>

                                    {/* ACTION */}
                                    <td className="d-flex gap-2 flex-wrap">

                                        {b.status === "pending" && (
                                            <button
                                                className="btn btn-sm btn-primary"
                                                onClick={() => handleStatusUpdate(b._id, "accepted")}
                                            >
                                                <FaCheck />
                                            </button>
                                        )}

                                        {b.status === "accepted" && (
                                            <button
                                                className="btn btn-sm btn-info text-white"
                                                onClick={() => handleStatusUpdate(b._id, "in-progress")}
                                            >
                                                <FaPlay />
                                            </button>
                                        )}

                                        {b.status === "in-progress" && (
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() => handleStatusUpdate(b._id, "completed")}
                                            >
                                                <FaCheckCircle />
                                            </button>
                                        )}

                                        {b.status !== "completed" && (
                                            <button
                                                className="btn btn-sm btn-warning text-white"
                                                onClick={() => handleStatusUpdate(b._id, "cancelled")}
                                            >
                                                <FaTimes />
                                            </button>
                                        )}

                                        <button
                                            className="btn btn-sm btn-outline-danger"
                                            onClick={() => handleDelete(b._id)}
                                        >
                                            <FaTrash />
                                        </button>

                                    </td>


                                </tr>
                            ))
                        )}

                    </tbody>

                </table>
            </div>
        </div>
    );
}