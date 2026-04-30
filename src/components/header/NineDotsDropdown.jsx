export default function NineDotsDropdown() {
    return (
        <li className="nav-item dropdown">
            <a
                className="nav-link"
                id="navbarDropdownNindeDots"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-haspopup="true"
                data-bs-auto-close="outside"
                aria-expanded="false"
            >
                <svg
                    width={10}
                    height={10}
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle cx={2} cy={2} r={2} fill="currentColor" />
                    <circle cx={2} cy={8} r={2} fill="currentColor" />
                    <circle cx={2} cy={14} r={2} fill="currentColor" />
                    <circle cx={8} cy={8} r={2} fill="currentColor" />
                    <circle cx={8} cy={14} r={2} fill="currentColor" />
                    <circle cx={14} cy={8} r={2} fill="currentColor" />
                    <circle cx={14} cy={14} r={2} fill="currentColor" />
                    <circle cx={8} cy={2} r={2} fill="currentColor" />
                    <circle cx={14} cy={2} r={2} fill="currentColor" />
                </svg>
            </a>
            <div
                className="dropdown-menu dropdown-menu-end navbar-dropdown-caret py-0 dropdown-nine-dots shadow border"
                aria-labelledby="navbarDropdownNindeDots"
            >
                <div className="card bg-body-emphasis position-relative border-0">
                    <div
                        className="card-body pt-3 px-3 pb-0 overflow-auto scrollbar"
                        style={{ height: "20rem" }}
                    >
                        <div className="row text-center align-items-center gx-0 gy-0">
                            <div className="col-4">
                                <a
                                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                    href="#!"
                                >
                                    <img src="../assets/img/nav-icons/behance.webp" alt="" width={30} />
                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Behance</p>
                                </a>
                            </div>
                            <div className="col-4">
                                <a
                                    className="d-block bg-body-secondary-hover p-2 rounded-3 text-center text-decoration-none mb-3"
                                    href="#!"
                                >
                                    <img src="../assets/img/nav-icons/google-cloud.webp" alt="" width={30} />
                                    <p className="mb-0 text-body-emphasis text-truncate fs-10 mt-1 pt-1">Cloud</p>
                                </a>
                            </div>
                            {/* Add more icons here if needed */}
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}