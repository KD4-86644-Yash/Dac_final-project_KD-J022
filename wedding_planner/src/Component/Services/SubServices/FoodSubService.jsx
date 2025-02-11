import "../../../css/services/Subservices/food.css";
import { useState } from "react";

function FoodSubService() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className="vendor-page">
            {/* Header Section */}
            <div className="header-section">
                <img
                    src="https://t4.ftcdn.net/jpg/06/39/80/75/360_F_639807553_uwUKbAadh2moLIRDQo4vzYJo1CeQLNYH.jpg"
                    alt="Food Banner"
                    className="vendor-banner"
                />
                <div className="vendor-details">
                    <h1 className="vendor-name">Gourmet Catering Services</h1>
                    <p className="vendor-subtext">(Formerly known as Royal Feasts)</p>
                    <p className="vendor-location">
                        <i className="bi bi-geo-alt-fill"></i> MG Road, Bangalore
                        <span className="view-map">(View on Map)</span>
                    </p>
                    <div className="vendor-rating">
                        <span className="rating-score">4.8</span>
                        <span className="reviews">95 reviews</span>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-section">
                <h3>Per Event Price Estimate</h3>
                <div className="pricing-details">
                    <p><strong>₹1,500</strong> per plate - Vegetarian</p>
                    <p><strong>₹2,000</strong> per plate - Non-Vegetarian</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h3>Hi Gourmet Catering Services,</h3>
                <form>
                    <div className="form-group">
                        <label>Full Name*</label>
                        <input type="text" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Email Address*</label>
                        <input type="email" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Event Date*</label>
                        <input type="date" className="form-control" required />
                    </div>
                    <div className="form-group">
                        <label>Details about my event</label>
                        <textarea className="form-control" rows="3"></textarea>
                    </div>
                    <div className="form-group whatsapp-notify">
                        <label>
                            <input type="checkbox" /> Notify me on WhatsApp
                        </label>
                    </div>
                    <button type="submit" className="btn btn-primary">Send Message</button>
                </form>
            </div>

            {/* Tabs Section */}
            <div className="tabs-section">
                <ul className="tabs">
                    <li
                        className={activeTab === "projects" ? "active" : ""}
                        onClick={() => setActiveTab("projects")}
                    >
                        Menus
                    </li>
                    <li
                        className={activeTab === "about" ? "active" : ""}
                        onClick={() => setActiveTab("about")}
                    >
                        About
                    </li>
                    <li
                        className={activeTab === "reviews" ? "active" : ""}
                        onClick={() => setActiveTab("reviews")}
                    >
                        Reviews
                    </li>
                </ul>
                <div className="tab-content">
                    {activeTab === "projects" && (
                        <div className="projects-section">
                            <h3>Our Signature Menus</h3>
                            <div className="menu-grid">
                                <img src="https://via.placeholder.com/150" alt="Menu 1" />
                                <img src="https://via.placeholder.com/150" alt="Menu 2" />
                                <img src="https://via.placeholder.com/150" alt="Menu 3" />
                            </div>
                        </div>
                    )}
                    {activeTab === "about" && (
                        <div className="about-section">
                            <h3>About Gourmet Catering Services</h3>
                            <p>
                                Gourmet Catering Services is known for its exquisite cuisine
                                and impeccable service, catering for weddings, corporate
                                events, and private parties.
                            </p>
                            <h4>Services Provided</h4>
                            <ul>
                                <li>Customized Menus</li>
                                <li>Live Counters</li>
                                <li>Buffet and Plated Service</li>
                                <li>Theme-Based Catering</li>
                            </ul>
                            <h4>Key Information</h4>
                            <p><strong>Based in:</strong> Bangalore</p>
                            <p><strong>Payment Terms:</strong> 30% Advance</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div className="reviews-section">
                            <h3>Reviews</h3>
                            <div className="rating-distribution">
                                <p>4.8 - Excellent (95 Reviews)</p>
                                <div className="rating-bar">
                                    <span style={{ width: "96%" }}></span>
                                </div>
                            </div>
                            <form className="review-form">
                                <h4>Write a Review</h4>
                                <label>
                                    Your Rating:
                                    <select>
                                        <option value="5">5 - Excellent</option>
                                        <option value="4">4 - Good</option>
                                        <option value="3">3 - Average</option>
                                        <option value="2">2 - Poor</option>
                                        <option value="1">1 - Terrible</option>
                                    </select>
                                </label>
                                <textarea
                                    placeholder="Tell us about your experience"
                                    rows="4"
                                ></textarea>
                                <button type="submit" className="btn-submit">
                                    Submit Review
                                </button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default FoodSubService;
