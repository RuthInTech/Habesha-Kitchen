import "../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container">

                {/* About */}
                <div>
                    <h3>Habesha Kitchen</h3>
                    <p>Authentic Ethiopian flavors made with love.</p>
                </div>

                {/* Quick Links */}
                <div>
                    <h3>Quick Links</h3>
                    <div className="footer-links">
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/menu">Menu</Link>
                        <Link to="/contact">Contact</Link>
                    </div>
                </div>

                {/* Contact */}
                <div className="footer-contact">
                    <h3>Contact</h3>
                    <p><a href="#">📧: lehasetruth@gmail.com</a></p>
                    <p>📞: +251 945879653</p>
                    <p>🕒: 9AM-10PM</p>
                </div>

            </div>

            <p style={{ textAlign: "center", marginTop: "30px", opacity: 0.7 }}>
                © 2026 Habesha Kitchen. All rights reserved.
            </p>
        </footer>
    );
};

export default Footer;
