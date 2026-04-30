import { useEffect, useState } from "react";
import { getProviderBookings, updateBookingStatus } from "../../../api/bookingService";

export default function ProviderBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    //  FETCH BOOKINGS
    const fetchBookings = async () => {
        try {
            setLoading(true);
            const data = await getProviderBookings();
            setBookings(data);
        } catch (err) {
            console.error(err);
            setError("Failed to load bookings");
        } finally {
            setLoading(false);
        }
    };

    // UPDATE STATUS
    const handleStatusUpdate = async (id, status) => {
        try {
            await updateBookingStatus(id, status);
            fetchBookings();
        } catch (err) {
            alert("Status update failed");
        }
    };

    // GOOGLE MAP NAVIGATION
    const openMap = (lat, lng) => {
        if (!lat || !lng) return;

        window.open(
            `https://www.google.com/maps/dir/?api=1&destination=${lat},${lng}`,
            "_blank"
        );
    };

    useEffect(() => {
        fetchBookings();
    }, []);

    // STATUS COLORS
    const getBadge = (status) => {
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
        <div className="container mt-3">
            {/* ERROR */}
            {error && <div className="alert alert-danger">{error}</div>}

            {/* LOADING */}
            {loading && <p>Loading bookings...</p>}

            {/* TABLE */}
            <div className="table-responsive">

                <table className="table table-bordered table-hover align-middle">

                    <thead className="table-dark">
                        <tr>
                            <th>#</th>
                            <th>Service</th>
                            <th>User</th>
                            <th>Location</th>
                            <th>Date & Time</th>
                            <th>Status</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>

                        {!loading && bookings.length === 0 ? (
                            <tr>
                                <td colSpan={7} className="text-center">
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
                                        <strong>{b.service_id?.name || "N/A"}</strong>
                                    </td>

                                    {/* USER */}
                                    <td>
                                        <div>
                                            <strong>{b.user_id?.username}</strong>
                                            <br />
                                            <small>{b.user_id?.email}</small>
                                        </div>
                                    </td>

                                    {/* LOCATION */}
                                    <td>
                                        <small>{b.address?.street}</small>
                                        <br />
                                        <button
                                            className="btn btn-sm btn-outline-primary mt-1"
                                            onClick={() =>
                                                openMap(b.address?.lat, b.address?.lng)
                                            }
                                        >
                                            📍 Navigate
                                        </button>
                                    </td>

                                    {/* DATE */}
                                    <td>
                                        {new Date(b.date).toLocaleDateString()}
                                        <br />
                                        <small>{b.time}</small>
                                    </td>

                                    {/* STATUS */}
                                    <td>
                                        <span className={`badge ${getBadge(b.status)}`}>
                                            {b.status}
                                        </span>
                                    </td>

                                    {/* ACTIONS */}
                                    <td className="d-flex gap-1 flex-wrap">

                                        {b.status === "pending" && (
                                            <>
                                                <button
                                                    className="btn btn-sm btn-primary"
                                                    onClick={() =>
                                                        handleStatusUpdate(b._id, "accepted")
                                                    }
                                                >
                                                    Accept
                                                </button>

                                                <button
                                                    className="btn btn-sm btn-danger"
                                                    onClick={() =>
                                                        handleStatusUpdate(b._id, "cancelled")
                                                    }
                                                >
                                                    Reject
                                                </button>
                                            </>
                                        )}

                                        {b.status === "accepted" && (
                                            <button
                                                className="btn btn-sm btn-info"
                                                onClick={() =>
                                                    handleStatusUpdate(b._id, "in-progress")
                                                }
                                            >
                                                Start Work
                                            </button>
                                        )}

                                        {b.status === "in-progress" && (
                                            <button
                                                className="btn btn-sm btn-success"
                                                onClick={() =>
                                                    handleStatusUpdate(b._id, "completed")
                                                }
                                            >
                                                Complete
                                            </button>
                                        )}

                                        {b.status === "completed" && (
                                            <span className="text-success small">
                                                ✔ Done
                                            </span>
                                        )}

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