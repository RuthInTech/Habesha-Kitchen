import "../styles/about.css";

export default function About() {
    return (
        <section className="about-page">
            {/* Hero Section */}
            <div className="about-hero">
                <h1>About Habesha Kitchen</h1>
                <p>Celebrating authentic Ethiopian cuisine and culture.</p>
            </div>

            {/* Our Story */}
            <div className="about-section story">
                <img
                    src="images/int design.jpg"
                    alt="Ethiopian dishes"
                />
                <div className="text">
                    <h2>Our Story</h2>
                    <p>
                        Welcome to Habesha Kitchen, where every dish is a celebration of Ethiopian heritage. Our journey began with a simple dream: to share the rich, bold flavors of our homeland with food lovers everywhere.

                        Our recipes have been passed down through generations, each one carrying the warmth and love of Ethiopian home cooking. We use only the finest spices, imported directly from Ethiopia, to create authentic flavors that transport you to the highlands of Addis Ababa.

                        At Habesha Kitchen, dining is more than just eating—it's an experience. Gather around our traditional mesob, tear off a piece of our spongy injera, and discover why Ethiopian cuisine is loved around the world.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="about-section mission">
                <div className="card">
                    <h3>Our Mission</h3>
                    <p>
                        To provide authentic Ethiopian dishes made with love and fresh
                        ingredients, keeping tradition alive.
                    </p>
                </div>
                <div className="card">
                    <h3>Our Vision</h3>
                    <p>
                        To create an immersive dining experience that honors Ethiopian
                        culture and delights every guest.
                    </p>
                </div>
            </div>

            {/* Ethiopian Flavors */}
            <div className="about-section culture">
                <h2>Ethiopian Flavors</h2>
                <div className="flavors-grid">
                    <img
                        src="images/doro.jpg"
                        alt="Doro Wot"
                    />
                    <img
                        src="images/shiro.jpg"
                        alt="shiro"
                    />
                    <img
                        src="images/buna.jpg"
                        alt="Ethiopian coffee"
                    />
                </div>
            </div>
        </section>
    );
}
