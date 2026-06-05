import { useEffect, useState } from "react";
import { getProviderBookings, updateBookingStatus } from "../../../api/bookingService";
import ChatModal from "../../../components/chat/ChatModal";

export default function ProviderBookings() {
    const [bookings, setBookings] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");
    const [chatBooking, setChatBooking] = useState(null);

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
            accepted: "bg-primary text-white",
            "in-progress": "bg-info text-dark",
            completed: "bg-success text-white",
            cancelled: "bg-danger text-white",
        };
        return map[status] || "bg-secondary text-white";
    };

    // Custom miniature tracking timeline for rows
    const renderMiniTimeline = (status) => {
        if (status === "cancelled") {
            return null;
        }

        const stages = ["pending", "accepted", "in-progress", "completed"];
        const currentIdx = stages.indexOf(status);

        return (
            <div className="d-flex flex-column align-items-center mt-2" style={{ minWidth: "120px" }}>
                <div className="d-flex align-items-center w-100 justify-content-between position-relative px-1" style={{ height: "12px" }}>
                    {/* Background Line */}
                    <div className="position-absolute start-0 end-0" style={{ height: "2px", backgroundColor: "#e2e8f0", top: "5px", zIndex: 0 }}></div>
                    {/* Active Line */}
                    <div className="position-absolute start-0" style={{ height: "2px", backgroundColor: "#0d6efd", top: "5px", width: `${(currentIdx / 3) * 100}%`, zIndex: 0, transition: "width 0.3s ease" }}></div>
                    
                    {stages.map((stage, idx) => {
                        const isDone = idx <= currentIdx;
                        return (
                            <div 
                                key={idx} 
                                className="rounded-circle"
                                style={{
                                    width: "10px",
                                    height: "10px",
                                    backgroundColor: isDone ? "#0d6efd" : "#ffffff",
                                    border: `1.5px solid ${isDone ? "#0d6efd" : "#94a3b8"}`,
                                    zIndex: 1,
                                    cursor: "help"
                                }}
                                title={stage.toUpperCase()}
                            ></div>
                        );
                    })}
                </div>
            </div>
        );
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
                                        <div className="d-flex flex-column align-items-center">
                                            <span className={`badge ${getBadge(b.status)}`}>
                                                {b.status}
                                            </span>
                                            {renderMiniTimeline(b.status)}
                                        </div>
                                    </td>

                                    {/* ACTIONS */}
                                    <td>
                                        <div className="d-flex gap-1 flex-wrap">
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
                                                <span className="text-success small fw-semibold">
                                                    ✔ Done
                                                </span>
                                            )}

                                            {b.status !== "cancelled" && (
                                                <button
                                                    className="btn btn-sm btn-outline-primary d-flex align-items-center gap-1"
                                                    onClick={() => setChatBooking(b)}
                                                >
                                                    💬 Chat
                                                </button>
                                            )}
                                        </div>
                                    </td>

                                </tr>
                            ))
                        )}

                    </tbody>

                </table>
            </div>

            {/* CHAT MODAL */}
            <ChatModal
                isOpen={!!chatBooking}
                onClose={() => setChatBooking(null)}
                bookingId={chatBooking?._id}
                clientName={chatBooking?.user_id?.username}
                serviceName={chatBooking?.service_id?.name}
            />
        </div>
    );
}