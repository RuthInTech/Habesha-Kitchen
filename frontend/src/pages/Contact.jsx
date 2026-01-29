import { useState } from "react";
import "../styles/contact.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        date: "",
        time: "",
        notes: "",
    });

    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            const response = await fetch("http://localhost:5000/api/mail/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    name: formData.name,
                    email: formData.email,
                    date: `${formData.date} at ${formData.time}`,
                    people: "Not specified",
                    phone: formData.phone,
                    notes: formData.notes,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setStatus("Reservation sent successfully 🍽️");
                setFormData({
                    name: "",
                    email: "",
                    phone: "",
                    date: "",
                    time: "",
                    notes: "",
                });
            } else {
                setStatus(data.error || "Something went wrong");
            }
        } catch (error) {
            console.error(error);
            setStatus("Cannot connect to server 😭");
        }
    };

    return (
        <div className="contact-page">
            <section className="contact-hero">
                <h1>Get in Touch</h1>
                <p>We'd love to welcome you to Habesha Kitchen</p>
            </section>

            <section className="contact-wrapper">
                {/* LEFT */}
                <div className="contact-details">
                    <h2>Visit Us</h2>
                    <p>
                        Experience authentic Ethiopian cuisine filled with warmth,
                        culture, and unforgettable flavors.
                    </p>

                    <div className="contact-box">
                        <span>📍</span>
                        <div>
                            <h4>Location</h4>
                            <p>Addis Ababa, Bole</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span>📞</span>
                        <div>
                            <h4>Phone</h4>
                            <p>+251 945 879 653</p>
                        </div>
                    </div>

                    <div className="contact-box">
                        <span>📧</span>
                        <div>
                            <h4>Email</h4>
                            <p>lehasetruth@gmail.com</p>
                        </div>
                    </div>
                </div>

                {/* RIGHT */}
                <div className="reserve-card">
                    <h2>Reserve a Table</h2>

                    <form onSubmit={handleSubmit}>
                        <input
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                        />

                        <input
                            type="email"
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                            required
                        />

                        <input
                            name="phone"
                            placeholder="Phone Number"
                            value={formData.phone}
                            onChange={handleChange}
                            required
                        />

                        <div className="row">
                            <input
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleChange}
                                required
                            />

                            <input
                                type="time"
                                name="time"
                                value={formData.time}
                                onChange={handleChange}
                            />
                        </div>

                        <textarea
                            name="notes"
                            placeholder="Special requests"
                            value={formData.notes}
                            onChange={handleChange}
                        />

                        <button type="submit">Reserve Now</button>
                    </form>

                    {status && <p className="form-status">{status}</p>}
                </div>
            </section>
        </div>
    );
}
