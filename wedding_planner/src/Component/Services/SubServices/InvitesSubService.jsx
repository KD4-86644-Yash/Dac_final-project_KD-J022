import "../../../css/services/Subservices/invites.css";
import { useState } from "react";

function InvitesSubService() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className="vendor-page">
            {/* Header Section */}
            <div className="header-section">
                <img
                    src="https://t4.ftcdn.net/jpg/06/39/80/75/360_F_639807553_uwUKbAadh2moLIRDQo4vzYJo1CeQLNYH.jpg"
                    alt="Invites Banner"
                    className="vendor-banner"
                />
                <div className="vendor-details">
                    <h1 className="vendor-name">Elegant Invites</h1>
                    <p className="vendor-subtext">(Formerly known as Royal Invitations)</p>
                    <p className="vendor-location">
                        <i className="bi bi-geo-alt-fill"></i> Connaught Place, Delhi
                        <span className="view-map">(View on Map)</span>
                    </p>
                    <div className="vendor-rating">
                        <span className="rating-score">4.8</span>
                        <span className="reviews">65 reviews</span>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-section">
                <h3>Price Estimate</h3>
                <div className="pricing-details">
                    <p><strong>₹100</strong> per card - Standard Invitation</p>
                    <p><strong>₹200</strong> per card - Premium Invitation</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h3>Hi Elegant Invites,</h3>
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
                        <label>Details about my invitation</label>
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
                        Projects
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
                            <h3>Invitation Designs</h3>
                            <div className="album-grid">
                                <img src="https://via.placeholder.com/150" alt="Design 1" />
                                <img src="https://via.placeholder.com/150" alt="Design 2" />
                                <img src="https://via.placeholder.com/150" alt="Design 3" />
                            </div>
                        </div>
                    )}
                    {activeTab === "about" && (
                        <div className="about-section">
                            <h3>About Elegant Invites</h3>
                            <p>
                                Elegant Invites specializes in creating beautiful and unique wedding invitations
                                with a touch of sophistication.
                            </p>
                            <h4>Services Provided</h4>
                            <ul>
                                <li>Custom Invitations</li>
                                <li>Luxury Wedding Cards</li>
                                <li>Personalized E-Invites</li>
                                <li>Calligraphy Services</li>
                            </ul>
                            <h4>Key Information</h4>
                            <p><strong>Based in:</strong> Delhi</p>
                            <p><strong>Payment Terms:</strong> 50% Advance</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div className="reviews-section">
                            <h3>Reviews</h3>
                            <div className="rating-distribution">
                                <p>4.8 - Excellent (65 Reviews)</p>
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

export default InvitesSubService;
