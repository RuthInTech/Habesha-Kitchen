import React, { useState } from "react";
import "../styles/menu.css"; // THIS stays in styless folder

const menuItems = [
    { id: 1, name: "Doro Wat", description: "Spicy chicken stew", price: "500birr", category: "meat", image: "images/doro.jpg" },
    { id: 2, name: "Kitfo", description: "Minced raw beef with spices", price: "700birr", category: "meat", image: "images/kitfo.jpg" },
    { id: 3, name: "Shiro", description: "Chickpea stew", price: "200birr", category: "vegetarian", image: "images/shiro.jpg" },
    { id: 4, name: "Tej", description: "Honey wine", price: "300birr", category: "beverages", image: "images/tej.jpg" },
    { id: 5, name: "Tibs", description: "Sautéed meat", price: "400birr", category: "meat", image: "images/tibs2.jpg" },
    { id: 6, name: "Buna", description: "coffee", price: "40birr", category: "beverages", image: "images/coffee2.jpg" },
    { id: 7, name: "Wine", description: "Wine", price: "1200birr", category: "beverages", image: "images/wine2.jpg" },
    { id: 8, name: "Byaynet", description: "A wholesome Ethiopian food, perfect for fasting dishes and nutritious meals.", price: "450birr", category: "vegetarian", image: "images/vege.jpg" },
    { id: 9, name: "Beer", description: "Beer made of wheat", price: "80birr", category: "beverages", image: "images/beer.jpg" },
    { id: 10, name: "Tere Sega(Raw Meat)", description: "premium Ethiopian raw beef, fresh, tender, and bursting with flavor.", price: "2000birr", category: "meat", image: "images/tere sega.jpg" },
    { id: 11, name: "Soft Drinks", description: "Refreshing flavors in every sip", price: "100birr", category: "beverages", image: "images/soft-drinks.jpg" },
    { id: 12, name: "Thilo", description: "Thilo is a traditional Tigrayan dish made of spiced, slow-cooked meat", price: "780birr", category: "meat", image: "images/Tihlo.jpg" },
    { id: 13, name: "Misir Wot", description: "lentil stew", price: "200birr", category: "vegetarian", image: "images/misir.jpg" },

];

export default function Menu() {
    const [filter, setFilter] = useState("all");

    const filteredItems = filter === "all" ? menuItems : menuItems.filter(item => item.category === filter);

    return (
        <div className="menu-page" style={{ paddingTop: "80px" }}>
            {/* Hero Section */}
            <div className="menu-hero">
                <div className="menu-hero-content">
                    <h1>Our Menu</h1>
                    <p>Discover the authentic flavors of Ethiopia</p>
                    <div className="menu-hero-decoration"></div>
                </div>
            </div>

            {/* Filters Section */}
            <div className="menu-filters-wrapper">
                <div className="menu-filters">
                    <button onClick={() => setFilter("all")} className={filter === "all" ? "active" : ""}>
                        <span>All</span>
                    </button>
                    <button onClick={() => setFilter("meat")} className={filter === "meat" ? "active" : ""}>
                        <span>Meat</span>
                    </button>
                    <button onClick={() => setFilter("vegetarian")} className={filter === "vegetarian" ? "active" : ""}>
                        <span>Vegetarian</span>
                    </button>
                    <button onClick={() => setFilter("beverages")} className={filter === "beverages" ? "active" : ""}>
                        <span>Beverages</span>
                    </button>
                </div>
            </div>

            {/* Menu Grid */}
            <div className="menu-container">
                {filteredItems.map((item, index) => (
                    <div
                        key={item.id}
                        className="menu-card"
                        style={{ animationDelay: `${index * 0.1}s` }}
                    >
                        <div className="menu-card-image-wrapper">
                            <img src={item.image} alt={item.name} />
                            <div className="menu-card-overlay">
                                <span className="menu-card-category">{item.category}</span>
                            </div>
                        </div>
                        <div className="menu-card-content">
                            <h3>{item.name}</h3>
                            <p>{item.description}</p>
                            <div className="menu-card-footer">
                                <span className="menu-card-price">{item.price}</span>

                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
