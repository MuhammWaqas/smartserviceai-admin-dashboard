import { NavLink } from "react-router-dom";

const menuItems = [
    { title: "Users", iconClass: "uil-home", href: "/users-management" },
    { title: "Providers", iconClass: "uil-home", href: "/providers-management" },
    { title: "Services", iconClass: "uil-home", href: "/services-management" },
    { title: "Bookings", iconClass: "uil-home", href: "/bookings-management" },
    { title: "Payment", iconClass: "uil-home", href: "/payment-management" },

    {
        title: "CMS",
        iconClass: "uil-user",
        dropdown: [
            { label: "Home", icon: "clock", href: "/delayed_test" },
            { label: "About Us", icon: "trash-2", href: "/delete_record" },
        ],
    },
];

function DropdownItem({ label, icon, href }) {
    return (
        <li>
            <NavLink
                to={href}
                className={({ isActive }) =>
                    `dropdown-item ${isActive ? "active" : ""}`
                }
            >
                <div className="dropdown-item-wrapper">
                    <span
                        className="me-2"
                        data-feather={icon}
                        style={{ width: 16, height: 16 }}
                    />
                    {label}
                </div>
            </NavLink>
        </li>
    );
}

export default function NavMenu() {
    return (
        <ul className="navbar-nav navbar-nav-top">
            {menuItems.map((item) => {
                if (item.dropdown) {
                    return (
                        <li key={item.title} className="nav-item dropdown">
                            <a
                                href="#!"
                                className="nav-link dropdown-toggle lh-1 color-white"
                                data-bs-toggle="dropdown"
                            >
                                <span
                                    className={`uil fs-8 color-white me-2 ${item.iconClass}`}
                                />
                                {item.title}
                            </a>

                            <ul className="dropdown-menu">
                                {item.dropdown.map((sub) => (
                                    <DropdownItem key={sub.label} {...sub} />
                                ))}
                            </ul>
                        </li>
                    );
                }

                // NORMAL LINK
                return (
                    <li key={item.title} className="nav-item">
                        <NavLink
                            to={item.href}
                            className={({ isActive }) =>
                                `nav-link lh-1 color-white ${isActive ? "active" : ""}`
                            }
                        >
                            <span
                                className={`uil fs-8 color-white me-2 ${item.iconClass}`}
                            />
                            {item.title}
                        </NavLink>
                    </li>
                );
            })}
        </ul>
    );
}
