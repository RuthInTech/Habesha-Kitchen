import "../styles/hero.css";
import { useNavigate } from "react-router-dom";

export default function Home() {
    const navigate = useNavigate();

    return (
        <section className="hero">
            <div className="hero-content">
                <h1>Welcome to Habesha Kitchen</h1>
                <p>Authentic Ethiopian flavors made with love and tradition.</p>
                <div className="hero-buttons">
                    <button onClick={() => navigate("/menu")} className="hero-btn">
                        Explore Our Menu
                    </button>
                    <button onClick={() => navigate("/contact")} className="hero-btn reserve">
                        Reserve Table
                    </button>
                </div>
            </div>
        </section>
    );
}
