import logo from "../assets/logo.png";
import {
    FaInstagram,
    FaLinkedin,
    FaGithub,
    FaXTwitter
} from "react-icons/fa6";

function Footer() {
    return (
        <footer className="footer">

            <div className="footer-container">

                {/* Brand Section */}
                <div className="footer-brand">
                    <img
                        src={logo}
                        alt="TravelMate Logo"
                        className="footer-logo"
                    />

                    <p>
                        Plan Less. Explore More.
                        Your all-in-one travel companion for smarter journeys.
                    </p>

                    <div className="social-icons">

                        <a href="#">
                            <FaInstagram />
                        </a>

                        <a href="#">
                            <FaLinkedin />
                        </a>

                        <a href="#">
                            <FaGithub />
                        </a>

                        <a href="#">
                            <FaXTwitter />
                        </a>

                    </div>
                </div>

                {/* Company */}
                <div className="footer-links">
                    <h3>Company</h3>

                    <ul>
                        <li>About Us</li>
                        <li>Careers</li>
                        <li>Blog</li>
                        <li>Contact</li>
                    </ul>
                </div>

                {/* Support */}
                <div className="footer-links">
                    <h3>Support</h3>

                    <ul>
                        <li>Help Center</li>
                        <li>FAQs</li>
                        <li>Privacy Policy</li>
                        <li>Terms & Conditions</li>
                    </ul>
                </div>

                {/* Newsletter */}
                <div className="footer-newsletter">
                    <h3>Newsletter</h3>

                    <p>
                        Get travel tips and updates directly in your inbox.
                    </p>

                    <div className="newsletter-box">
                        <input
                            type="email"
                            placeholder="Enter your email"
                        />

                        <button>
                            Subscribe
                        </button>
                    </div>
                </div>

            </div>

            <div className="footer-bottom">
                <p>
                    © {new Date().getFullYear()} TravelMate.
                    All rights reserved.
                </p>
            </div>

        </footer>
    );
}

export default Footer;