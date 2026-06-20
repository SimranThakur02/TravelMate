import logo from "../assets/logo.png";

function Navbar() {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <img src={logo} alt="TravelMate" className="logo" />
            </div>

            <ul className="nav-links">
                <li>Explore</li>
                <li>Destinations</li>
                <li>Features</li>
                <li>About</li>
            </ul>

            <button className="nav-btn">
                Get Started
            </button>
        </nav>
    );
}

export default Navbar;