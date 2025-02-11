import "../../../css/services/Subservices/venue.css";
import { useState } from "react";

function VenueSubService() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className="vendor-page">
            {/* Header Section */}
            <div className="header-section">
                <img
                    src="https://via.placeholder.com/800x400"
                    alt="Venue Banner"
                    className="vendor-banner"
                />
                <div className="vendor-details">
                    <h1 className="vendor-name">Grand Royal Banquet</h1>
                    <p className="vendor-subtext">(Exquisite Venue for Weddings & Events)</p>
                    <p className="vendor-location">
                        <i className="bi bi-geo-alt-fill"></i> MG Road, Bangalore
                        <span className="view-map">(View on Map)</span>
                    </p>
                    <div className="vendor-rating">
                        <span className="rating-score">4.8</span>
                        <span className="reviews">120 reviews</span>
                    </div>
                </div>
            </div>

            {/* Pricing Section */}
            <div className="pricing-section">
                <h3>Pricing & Capacity</h3>
                <div className="pricing-details">
                    <p><strong>₹1,50,000</strong> per event - Banquet Hall</p>
                    <p><strong>₹2,50,000</strong> per event - Outdoor Lawn</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h3>Hi Grand Royal Banquet,</h3>
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
                        <label>Event Details</label>
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
                        Gallery
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
                            <h3>Venue Gallery</h3>
                            <div className="album-grid">
                                <img src="https://via.placeholder.com/150" alt="Venue 1" />
                                <img src="https://via.placeholder.com/150" alt="Venue 2" />
                                <img src="https://via.placeholder.com/150" alt="Venue 3" />
                            </div>
                        </div>
                    )}
                    {activeTab === "about" && (
                        <div className="about-section">
                            <h3>About Grand Royal Banquet</h3>
                            <p>
                                Grand Royal Banquet is an elegant venue offering world-class facilities
                                for weddings, corporate events, and social gatherings.
                            </p>
                            <h4>Facilities & Services</h4>
                            <ul>
                                <li>Spacious Banquet Hall</li>
                                <li>Outdoor Lawn</li>
                                <li>Catering Services</li>
                                <li>Decor & Lighting</li>
                            </ul>
                            <h4>Key Information</h4>
                            <p><strong>Location:</strong> Bangalore</p>
                            <p><strong>Payment Terms:</strong> 50% Advance</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div className="reviews-section">
                            <h3>Reviews</h3>
                            <div className="rating-distribution">
                                <p>4.8 - Excellent (120 Reviews)</p>
                                <div className="rating-bar">
                                    <span style={{ width: "95%" }}></span>
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

export default VenueSubService;
