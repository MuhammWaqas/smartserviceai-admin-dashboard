export default function NotificationDropdown() {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link"
                id="navbarDropdownNotification"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                data-bs-auto-close="outside"
                aria-haspopup="true"
                aria-expanded="false"
            >
                <span className="d-inline-block" style={{ height: 12, width: 12 }}>
                    <span data-feather="bell" style={{ height: 12, width: 12 }} />
                </span>
            </a>
            <div
                className="dropdown-menu dropdown-menu-end notification-dropdown-menu py-0 shadow border navbar-dropdown-caret"
                id="navbarDropdownNotfication"
                aria-labelledby="navbarDropdownNotfication"
            >
                <div className="card position-relative border-0">
                    <div className="card-header p-2">
                        <div className="d-flex justify-content-between">
                            <h5 className="text-body-emphasis mb-0">Notifications</h5>
                            <button className="btn btn-link p-0 fs-9 fw-normal" type="button">
                                Mark all as read
                            </button>
                        </div>
                    </div>
                    <div className="card-body p-0">
                        <div className="scrollbar-overlay" style={{ height: "27rem" }}>
                            <div className="px-2 px-sm-3 py-3 notification-card position-relative read border-bottom">
                                <div className="d-flex align-items-center justify-content-between position-relative">
                                    <div className="d-flex">
                                        <div className="avatar avatar-m status-online me-3">
                                            <img
                                                className="rounded-circle"
                                                src="../assets/img/team/40x40/30.webp"
                                                alt=""
                                            />
                                        </div>
                                        <div className="flex-1 me-sm-3">
                                            <h4 className="fs-9 text-body-emphasis">Jessie Samson</h4>
                                            <p className="fs-9 text-body-highlight mb-2 mb-sm-3 fw-normal">
                                                <span className="me-1 fs-10">💬</span>Mentioned you in a comment.
                                                <span className="ms-2 text-body-quaternary text-opacity-75 fw-bold fs-10">
                                                    10m
                                                </span>
                                            </p>
                                            <p className="text-body-secondary fs-9 mb-0">
                                                <span className="me-1 fas fa-clock" />
                                                <span className="fw-bold">10:41 AM </span>August 7,2021
                                            </p>
                                        </div>
                                    </div>
                                    <div className="dropdown notification-dropdown">
                                        <button
                                            className="btn fs-10 btn-sm dropdown-toggle dropdown-caret-none transition-none"
                                            type="button"
                                            data-bs-toggle="dropdown"
                                            data-boundary="window"
                                            aria-haspopup="true"
                                            aria-expanded="false"
                                            data-bs-reference="parent"
                                        >
                                            <span className="fas fa-ellipsis-h fs-10 text-body" />
                                        </button>
                                        <div className="dropdown-menu py-2">
                                            <a className="dropdown-item" href="#!">
                                                Mark as unread
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add more notifications here if needed */}
                        </div>
                    </div>
                    <div className="card-footer p-0 border-top border-translucent border-0">
                        <div className="my-2 text-center fw-bold fs-10 text-body-tertiary text-opactity-85">
                            <a className="fw-bolder" href="../pages/notifications.html">
                                Notification history
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}