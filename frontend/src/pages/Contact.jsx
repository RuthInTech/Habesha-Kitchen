import "../styles/contact.css";

export default function Contact() {
    return (
        <div className="contact-page">

            {/* HERO */}
            <section className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We'd love to welcome you to Habesha Kitchen</p>
            </section>

            {/* CONTENT */}
            <section className="contact-wrapper">

                {/* LEFT */}
                <div className="contact-details">
                    <h2>Visit Us</h2>

                    <p>
                        Step into a warm Ethiopian dining experience filled with tradition,
                        culture, and unforgettable flavors.
                    </p>

                    <div className="contact-box">
                        <span>📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>Ethiopia, Addis Ababa, Bole Area</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span>📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p> +251 945879653</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span>📧</span>
                        <div>
                            <h4>Email</h4>
                            <p><a href="#">lehasetruth@gmail.com</a></p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="reserve-card">
                    <h2>Reserve a Table</h2>

                    <form>
                        <input type="text" placeholder="Full Name" />
                        <input type="email" placeholder="Email" />
                        <input type="tel" placeholder="Phone Number" />

                        <div className="row">
                            <input type="date" />
                            <input type="time" />
                        </div>

                        <textarea rows="4" placeholder="Special requests (optional)" />

                        <button>Reserve Now</button>
                    </form>
                </div>

            </section>
        </div>
    );
}
