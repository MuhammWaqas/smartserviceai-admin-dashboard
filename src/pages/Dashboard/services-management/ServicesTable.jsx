import { useEffect, useState } from "react";
import { FaTrash, FaPenToSquare, FaCheck, FaXmark } from "react-icons/fa6";
import { getServices, deleteService, updateServiceStatus } from "../../../api/adminServices";

export default function ServicesTable({ onEdit, refresh }) {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchServices = async () => {
    setLoading(true);
    setError("");
    try {
      const data = await getServices();
      setServices(data);
    } catch (err) {
      setError("Failed to fetch services");
    }
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this service?")) return;

    try {
      await deleteService(id);
      setServices(services.filter((s) => s._id !== id));
    } catch (err) {
      console.error(err);
      setError("Failed to delete service");
    }
  };

  const handleStatusChange = async (id, status) => {
    try {
      await updateServiceStatus(id, status);
      alert(`Service ${status} successfully!`);
      fetchServices(); // refresh table
    } catch (err) {
      console.error(err);
      alert('Error updating status');
    }
  };

  useEffect(() => {
    fetchServices();
  }, [refresh]); // refresh table when parent triggers

  if (loading) return <p>Loading services...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card shadow-sm border-0">
      <div className="card-body p-0">
        <div className="table-responsive" style={{ maxHeight: "62vh", overflowY: "scroll" }}>
          <table className="table table-bordered mb-0">
            <thead>
              <tr style={{ backgroundColor: "#1c2765", color: "white" }}>
                <th>Sr.</th>
                <th>Name</th>
                <th>Category</th>
                <th>Price</th>
                <th>Status</th>
                <th>Provider Name</th>
                <th>Image</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {services.length > 0 ? services.map((service, index) => (
                <tr key={service._id}>
                  <td>{index + 1}</td>
                  <td>{service.name}</td>
                  <td>{service.category}</td>
                  <td>{service.price}</td>
                  <td>{service.status}</td>
                  <td>{service.provider?.username || "N/A"}</td>
                  <td>
                    {service.images?.length > 0 && (
                      <img
                        src={`https://smartservicebackend-production.up.railway.app/uploads/services/${service.images[0]}`}
                        alt={service.name}
                        width={50}
                      />
                    )}
                  </td>
                  <td>
                    <div className="d-flex gap-2 justify-content-center">
                      <FaPenToSquare style={{ cursor: "pointer" }} onClick={() => onEdit(service)} />
                      <FaTrash
                        style={{ cursor: "pointer", color: "red" }}
                        onClick={() => handleDelete(service._id)}
                      />
                      {/* Approve icon */}
                      {service.status !== "approved" && (
                        <FaCheck
                          style={{ cursor: "pointer", color: "green" }}
                          title="Approve"
                          onClick={() => handleStatusChange(service._id, "approved")}
                        />
                      )}

                      {/* Reject icon */}
                      {service.status !== "rejected" && (
                        <FaXmark
                          style={{ cursor: "pointer", color: "red" }}
                          title="Reject"
                          onClick={() => handleStatusChange(service._id, "rejected")}
                        />
                      )}
                    </div>
                  </td>
                  {/* <td>
                    {service.status !== 'approved' && (
                      <button onClick={() => handleStatusChange(service._id, 'approved')}>
                        Approve
                      </button>
                    )}
                    {service.status !== 'rejected' && (
                      <button onClick={() => handleStatusChange(service._id, 'rejected')}>
                        Reject
                      </button>
                    )}
                  </td> */}
                </tr>
              )) : (
                <tr>
                  <td colSpan="7" className="text-center">No services found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
