import UserFormTable from "./UserFormTable";

export default function UserForm() {

    return (
        <>
            <h5 className="fw-bold page-header">Users Management</h5>

            {/* Top bar */}
            <div className="d-flex justify-content-end align-items-center mb-3">
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search profiles..."
                        style={{ width: "220px" }}
                    />
                </div>
            </div>

            {/* Table */}
            <UserFormTable />
        </>
    );
}
