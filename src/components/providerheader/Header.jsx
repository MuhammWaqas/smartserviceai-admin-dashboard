import { useEffect } from "react";
import { Link } from "react-router-dom";
import feather from "feather-icons";
import UserDropdown from "./UserDropdown";
import NineDotsDropdown from "./NineDotsDropdown";
import NotificationDropdown from "./NotificationDropdown";
import SearchIcon from "./SearchIcon";
import NavMenu from "./NavMenu";
import ThemeToggle from "./ThemeToggle";

export default function Header() {

    useEffect(() => {
        feather.replace();
    }, []);

    return (
        <nav
            className="navbar navbar-top fixed-top navbar-slim justify-content-between navbar-expand-lg primary"
            id="navbarComboSlim"
            data-navbar-top="combo"
            data-move-target="#navbarVerticalNav"
        >
            <div className="navbar-logo p-3">
                <button
                    className="btn navbar-toggler navbar-toggler-humburger-icon hover-bg-transparent"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarTopCollapse"
                    aria-controls="navbarTopCollapse"
                    aria-expanded="false"
                    aria-label="Toggle Navigation"
                >
                    <span className="navbar-toggle-icon">
                        <span className="toggle-line" />
                    </span>
                </button>
                <Link className="navbar-brand me-1 me-sm-3" to="/">
                    <div className="d-flex align-items-center"  style={{ marginLeft: "-17%",color:'#283890'}}>
                        <h1 className="logo-text fw-bold ms-2 d-none d-sm-block color-white"
                            >Smart Services</h1>
                    </div>
                </Link>

            </div>

            <div
                className="collapse navbar-collapse navbar-top-collapse order-1 order-lg-0 justify-content-center"
                id="navbarTopCollapse"
            >
                <NavMenu />
            </div>

            <ul className="navbar-nav navbar-nav-icons flex-row">
                <li className="nav-item">
                    <ThemeToggle />
                </li>
                <li className="nav-item">
                    <SearchIcon />
                </li>
                <NotificationDropdown />
                <NineDotsDropdown />
                <UserDropdown />
            </ul>
        </nav>
    );
}
