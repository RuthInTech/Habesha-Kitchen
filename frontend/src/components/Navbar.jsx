import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

export default function Navbar() {
    return (
        <nav className="navbar">
            <div className="nav-left">
                <span className="logo-primary">Habesha</span>{" "}
                <span className="logo-secondary">Kitchen</span>
            </div>

            <div className="nav-links">
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/menu">Menu</NavLink>
                <NavLink to="/contact">Contact</NavLink>
            </div>

            <button className="reserve-btn reserve" onClick={() => navigate("/contact")} >
                Reserve Table
            </button>


        </nav>
    );
}
