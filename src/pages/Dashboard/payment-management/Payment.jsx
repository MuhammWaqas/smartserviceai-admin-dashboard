import PaymentTable from "./PaymentTable";

export default function Bookings() {

    return (
        <>
            <h5 className="fw-bold page-header">Payment Management</h5>

            {/* Top bar */}
            <div className="d-flex justify-content-end align-items-center mb-6">
                <div className="d-flex flex-wrap align-items-center gap-2">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Search profiles..."
                        style={{ width: "220px" }}
                    />
                </div>
            </div>

            <div className="px-3 mb-6 mt-4">
                <div className="row justify-content-between">
                    <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end border-bottom pb-4 pb-xxl-0 ">
                        <span className="uil fs-5 lh-1 uil-envelope text-primary" />
                        <h1 className="fs-5 pt-3">2,800</h1>
                        <p className="fs-9 mb-0">Total Revenue</p>
                    </div>
                    <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-end-xxl-0 border-bottom-xxl-0 border-end-md border-bottom pb-4 pb-xxl-0">
                        <span className="uil fs-5 lh-1 uil-envelope-upload text-info" />
                        <h1 className="fs-5 pt-3">1,866</h1>
                        <p className="fs-9 mb-0">Admin Commission</p>
                    </div>
                    <div className="col-6 col-md-4 col-xxl-2 text-center border-translucent border-start-xxl border-bottom-xxl-0 border-bottom border-end border-end-md-0 pb-4 pb-xxl-0 pt-4 pt-md-0">
                        <span className="uil fs-5 lh-1 uil-envelopes text-primary" />
                        <h1 className="fs-5 pt-3">1,366</h1>
                        <p className="fs-9 mb-0">Pending Payouts</p>
                    </div>
                </div>
            </div>

            {/* Table */}
            <PaymentTable />
        </>
    );
}
