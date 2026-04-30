export default function SearchIcon() {
    return (
        <a className="nav-link" href="#" data-bs-toggle="modal" data-bs-target="#searchBoxModal">
            <span className="d-inline-block" style={{ height: 12, width: 12 }}>
                <span data-feather="search" style={{ height: 12, width: 12 }} />
            </span>
        </a>
    );
}