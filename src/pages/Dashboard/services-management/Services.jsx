import { useState } from "react";
import ServicesTable from "./ServicesTable";
import ServicesModal from "./ServicesModal";
import Modal from "react-bootstrap/Modal";

export default function Services() {
  const [showServiceModal, setShowServiceModal] = useState(false);
  const [editService, setEditService] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [refreshTable, setRefreshTable] = useState(false); // trigger table refresh

  const handleEdit = (service) => {
    setEditService(service);
    setIsEditing(true);
    setShowServiceModal(true);
  };

  const handleClose = () => {
    setShowServiceModal(false);
    setEditService(null);
    setIsEditing(false);
  };

  const handleCreatedOrUpdated = () => {
    setRefreshTable((prev) => !prev); // trigger table refresh
    handleClose();
  };

  return (
    <>
      <h5 className="fw-bold page-header">Services Management</h5>

      <div className="d-flex justify-content-end align-items-center mb-3">
        <div className="d-flex flex-wrap align-items-center gap-2">
          <input
            type="text"
            className="form-control"
            placeholder="Search services..."
            style={{ width: "220px" }}
          />
          <button
            className="btn btn-success primary"
            type="button"
            onClick={() => {
              setIsEditing(false);
              setEditService(null);
              setShowServiceModal(true);
            }}
          >
            <i className="fas fa-plus me-2"></i> Add Service
          </button>
        </div>
      </div>

      <ServicesTable onEdit={handleEdit} refresh={refreshTable} />

      <Modal show={showServiceModal} onHide={handleClose} className="modal-md">
        <Modal.Header className="primary">
          <Modal.Title className="color-white fw-bold">
            {isEditing ? "Edit Service" : "Add Service"}
          </Modal.Title>
          <button type="button" className="btn-close" onClick={handleClose} aria-label="Close"></button>
        </Modal.Header>
        <Modal.Body>
          <ServicesModal
            editService={editService}
            onCancel={handleClose}
            onCreated={handleCreatedOrUpdated}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}
