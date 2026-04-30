import React from 'react'

export default function Profile() {
    return (
        <>
            <div className="container-small mt-6">
                <div className="row align-items-center justify-content-between g-3 mb-4">
                    <div className="col-auto">
                        <h2 className="mb-0">Profile</h2>
                    </div>
                    <div className="col-auto">
                        <div className="row g-2 g-sm-3">
                            <div className="col-auto">
                                <button className="btn btn-phoenix-danger">
                                    <span className="fas fa-trash-alt me-2" />
                                    Delete customer
                                </button>
                            </div>
                            <div className="col-auto">
                                <button className="btn btn-phoenix-secondary">
                                    <span className="fas fa-key me-2" />
                                    Reset password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row g-3 mb-6">
                    <div className="col-12 col-lg-8">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed pb-4">
                                    <div className="row align-items-center g-3 g-sm-5 text-center text-sm-start">
                                        <div className="col-12 col-sm-auto">
                                            <input className="d-none" id="avatarFile" type="file" />
                                            <label
                                                className="cursor-pointer avatar avatar-5xl"
                                                htmlFor="avatarFile"
                                            >
                                                <img
                                                    className="rounded-circle"
                                                    src="../../../assets/img/team/15.webp"
                                                    alt=""
                                                />
                                            </label>
                                        </div>
                                        <div className="col-12 col-sm-auto flex-1">
                                            <h3>Ansolo Lazinatov</h3>
                                            <p className="text-body-secondary">Joined 3 months ago</p>
                                            <div>
                                                <a className="me-2" href="#!">
                                                    <span className="fab fa-linkedin-in text-body-quaternary text-opacity-75 text-primary-hover" />
                                                </a>
                                                <a className="me-2" href="#!">
                                                    <span className="fab fa-facebook text-body-quaternary text-opacity-75 text-primary-hover" />
                                                </a>
                                                <a href="#!">
                                                    <span className="fab fa-twitter text-body-quaternary text-opacity-75 text-primary-hover" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex flex-between-center pt-4">
                                    <div>
                                        <h6 className="mb-2 text-body-secondary">Total Spent</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">$894</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Last Order</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">1 week ago</h4>
                                    </div>
                                    <div className="text-end">
                                        <h6 className="mb-2 text-body-secondary">Total Orders</h6>
                                        <h4 className="fs-7 text-body-highlight mb-0">97 </h4>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-4">
                        <div className="card h-100">
                            <div className="card-body">
                                <div className="border-bottom border-dashed">
                                    <h4 className="mb-3">
                                        Default Address
                                        <button className="btn btn-link p-0" type="button">
                                            {" "}
                                            <span className="fas fa-edit fs-9 ms-3 text-body-quaternary" />
                                        </button>
                                    </h4>
                                </div>
                                <div className="pt-4 mb-7 mb-lg-4 mb-xl-7">
                                    <div className="row justify-content-between">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight">Address</h5>
                                        </div>
                                        <div className="col-auto">
                                            <p className="text-body-secondary">
                                                Vancouver, British Columbia
                                                <br />
                                                Canada
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-top border-dashed pt-4">
                                    <div className="row flex-between-center mb-2">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Email</h5>
                                        </div>
                                        <div className="col-auto">
                                            <a className="lh-1" href="mailto:shatinon@jeemail.com">
                                                shatinon@jeemail.com
                                            </a>
                                        </div>
                                    </div>
                                    <div className="row flex-between-center">
                                        <div className="col-auto">
                                            <h5 className="text-body-highlight mb-0">Phone</h5>
                                        </div>
                                        <div className="col-auto">
                                            <a href="tel:+1234567890">+1234567890</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}
