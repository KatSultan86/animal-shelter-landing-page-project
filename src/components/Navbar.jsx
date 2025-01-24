

export default function Navbar() {
    return (
        <nav className="navbar navbar-dark bg-primary navbar-expand-lg sticky-top">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    Happy Tails
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav ms-auto">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        <a className="nav-link" href="#">
                            Adopt
                        </a>
                        <a className="nav-link" href="#">
                            Contact
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    )

}