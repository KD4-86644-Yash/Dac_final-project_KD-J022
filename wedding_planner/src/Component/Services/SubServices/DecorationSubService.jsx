import "../../../css/services/Subservices/decoration.css";
import { useState } from "react";

function DecorationSubService() {
    const [activeTab, setActiveTab] = useState("projects");

    return (
        <div className="vendor-page">
            {/* Header Section */}
            <div className="header-section">
                <img
                    src="https://example.com/decoration-banner.jpg"
                    alt="Decoration Banner"
                    className="vendor-banner"
                />
                <div className="vendor-details">
                    <h1 className="vendor-name">Elegant Event Decor</h1>
                    <p className="vendor-subtext">Specializing in wedding and event decorations</p>
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
                <h3>Pricing Packages</h3>
                <div className="pricing-details">
                    <p><strong>₹50,000</strong> - Basic Package</p>
                    <p><strong>₹1,00,000</strong> - Premium Package</p>
                </div>
            </div>

            {/* Contact Form */}
            <div className="contact-form">
                <h3>Hi Elegant Event Decor,</h3>
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
                            <h3>Past Decorations</h3>
                            <div className="album-grid">
                                <img src="https://via.placeholder.com/150" alt="Project 1" />
                                <img src="https://via.placeholder.com/150" alt="Project 2" />
                                <img src="https://via.placeholder.com/150" alt="Project 3" />
                            </div>
                        </div>
                    )}
                    {activeTab === "about" && (
                        <div className="about-section">
                            <h3>About Elegant Event Decor</h3>
                            <p>
                                Elegant Event Decor is a premier event decoration company based in Bangalore, specializing in bespoke wedding and corporate event styling.
                            </p>
                            <h4>Services Offered</h4>
                            <ul>
                                <li>Wedding Decorations</li>
                                <li>Floral Arrangements</li>
                                <li>Theme-Based Decor</li>
                                <li>Corporate Event Styling</li>
                            </ul>
                            <h4>Key Information</h4>
                            <p><strong>Based in:</strong> Bangalore</p>
                            <p><strong>Payment Terms:</strong> 50% Advance</p>
                        </div>
                    )}
                    {activeTab === "reviews" && (
                        <div className="reviews-section">
                            <h3>Customer Reviews</h3>
                            <p>4.8 - Excellent (120 Reviews)</p>
                            <div className="rating-bar">
                                <span style={{ width: "96%" }}></span>
                            </div>
                            <form className="review-form">
                                <h4>Leave a Review</h4>
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
                                <textarea placeholder="Share your experience" rows="4"></textarea>
                                <button type="submit" className="btn-submit">Submit Review</button>
                            </form>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default DecorationSubService;
