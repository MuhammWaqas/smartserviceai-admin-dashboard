import { useState } from "react";
import ProviderTable from "./ProviderTable";
import ProviderModal from "./ProviderModal";
import Modal from "react-bootstrap/Modal";

export default function Provider() {
    const [showProviderModal, setShowProviderModal] = useState(false);
    const [isCurrentEditModalOpen, setIsCurrentEditModalOpen] = useState(false);

    const handleClose = () => {
        setShowProviderModal(false);
        setIsCurrentEditModalOpen(false);
    };
    const handleShow = () => setShowProviderModal(true);

    return (
        <>
            <h5 className="fw-bold page-header">Providers Management</h5>

            <div className="d-flex justify-content-end align-items-center mb-3 mt-2">
                {/* Left side title */}

                {/* Right side actions */}
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search profiles..."
                        style={{ width: "220px" }}
                    // value={search}
                    // onChange={(e) => {
                    //     setPage(1);
                    //     setSearch(e.target.value);
                    // }}
                    />
                    < button
                        className="btn btn-success primary"
                        type="button"
                        onClick={() => {
                            setIsCurrentEditModalOpen(false);
                            handleShow();
                        }}
                    >
                        <i className="fas fa-plus me-2"></i> Add Provider
                    </button>
                </div>
            </div>

            {/* Table */}
            <ProviderTable />

            <Modal show={showProviderModal} onHide={handleClose} className="modal-md">
                <Modal.Header className="primary">
                    <Modal.Title className="color-white fw-bold">
                        {isCurrentEditModalOpen ? "Edit Department" : "Add Provider"}
                    </Modal.Title>
                    <button
                        type="button"
                        className="btn-close"
                        onClick={handleClose}
                        aria-label="Close"
                    ></button>
                </Modal.Header>
                <Modal.Body>
                    <ProviderModal
                        // onSave={handleSave}
                        // department={selectedDepartment}
                        onCancel={handleClose}
                    />
                </Modal.Body>
            </Modal>
        </>
    );
}
