export default function ThemeToggle() {
    return (
        <div className="theme-control-toggle fa-ion-wait pe-2 theme-control-toggle-slim">
            <input
                className="form-check-input ms-0 theme-control-toggle-input"
                id="themeControlToggle"
                type="checkbox"
                data-theme-control="phoenixTheme"
                defaultValue="dark"
            />
            <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-light"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
            >
                <span className="d-none d-sm-flex flex-center" style={{ height: 16, width: 16 }}>
                    <span className="me-1 icon" data-feather="moon" />
                </span>
                <span className="fs-9 fw-bold">Dark</span>
            </label>
            <label
                className="mb-0 theme-control-toggle-label theme-control-toggle-dark"
                htmlFor="themeControlToggle"
                data-bs-toggle="tooltip"
                data-bs-placement="left"
                title="Switch theme"
            >
                <span className="d-none d-sm-flex flex-center" style={{ height: 16, width: 16 }}>
                    <span className="me-1 icon" data-feather="sun" />
                </span>
                <span className="fs-9 fw-bold">Light</span>
            </label>
        </div>
    );
}