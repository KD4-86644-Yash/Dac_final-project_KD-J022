import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
// import NavBar from "../NavBar";
import "../../../css/services/Subservices/photographer.css"; 

function PhotoDetails() {
    const { serviceId } = useParams(); // Get serviceId from URL
    const [photo, setPhoto] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchPhoto = async () => {
            try {
                const response = await axios.get(`http://localhost:7070/services/photo/photo-single/${serviceId}`);
                setPhoto(response.data);
            } catch (err) {
                setError("Failed to load photo details.");
            } finally {
                setLoading(false);
            }
        };
        fetchPhoto();
    }, [serviceId]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">{error}</p>;

    return (
        <div>
            <div className="photo-container">
                <img src={photo.imageUrl} alt={photo.name} className="photo-image" />
                <div className="photo-details">
                    <h2>{photo.name}</h2>
                    <p>{photo.description}</p>
                    <p className="photo-price">Price: ₹{photo.price}</p>
                </div>
            </div>
        </div>
    );
}

export default PhotoDetails;




// import "../../../css/services/Subservices/photographer.css";
// import { useState } from "react";

// function PhotoGraperpage() {
//     const [activeTab, setActiveTab] = useState("projects");

//     return (
//         <div className="vendor-page">
//             {/* Header Section */}
//             <div className="header-section">
//                 <img
//                     src="https://t4.ftcdn.net/jpg/06/39/80/75/360_F_639807553_uwUKbAadh2moLIRDQo4vzYJo1CeQLNYH.jpg"
//                     alt="Wedding Banner"
//                     className="vendor-banner"
//                 />
//                 <div className="vendor-details">
//                     <h1 className="vendor-name">The Art of Light Studios</h1>
//                     <p className="vendor-subtext">(Formerly known as Shivam Clicks)</p>
//                     <p className="vendor-location">
//                         <i className="bi bi-geo-alt-fill"></i> Indira Nagar, Lucknow
//                         <span className="view-map">(View on Map)</span>
//                     </p>
//                     <div className="vendor-rating">
//                         <span className="rating-score">5.0</span>
//                         <span className="reviews">80 reviews</span>
//                     </div>
//                 </div>
//             </div>

//             {/* Pricing Section */}
//             <div className="pricing-section">
//                 <h3>Per Day Price Estimate</h3>
//                 <div className="pricing-details">
//                     <p><strong>₹20,000</strong> per day - Photo Package</p>
//                     <p><strong>₹30,000</strong> per day - Photo + Video</p>
//                 </div>
//             </div>

//             {/* Contact Form */}
//             <div className="contact-form">
//                 <h3>Hi The Art of Light Studios,</h3>
//                 <form>
//                     <div className="form-group">
//                         <label>Full Name*</label>
//                         <input type="text" className="form-control" required />
//                     </div>
//                     <div className="form-group">
//                         <label>Email Address*</label>
//                         <input type="email" className="form-control" required />
//                     </div>
//                     <div className="form-group">
//                         <label>Function Date*</label>
//                         <input type="date" className="form-control" required />
//                     </div>
//                     <div className="form-group">
//                         <label>Details about my wedding</label>
//                         <textarea className="form-control" rows="3"></textarea>
//                     </div>
//                     <div className="form-group whatsapp-notify">
//                         <label>
//                             <input type="checkbox" /> Notify me on WhatsApp
//                         </label>
//                     </div>
//                     <button type="submit" className="btn btn-primary">Send Message</button>
//                 </form>
//             </div>

//             {/* Tabs Section */}
//             <div className="tabs-section">
//                 <ul className="tabs">
//                     <li
//                         className={activeTab === "projects" ? "active" : ""}
//                         onClick={() => setActiveTab("projects")}
//                     >
//                         Projects
//                     </li>
//                     <li
//                         className={activeTab === "about" ? "active" : ""}
//                         onClick={() => setActiveTab("about")}
//                     >
//                         About
//                     </li>
//                     <li
//                         className={activeTab === "reviews" ? "active" : ""}
//                         onClick={() => setActiveTab("reviews")}
//                     >
//                         Reviews
//                     </li>
//                 </ul>
//                 <div className="tab-content">
//                     {activeTab === "projects" && (
//                         <div className="projects-section">
//                             <h3>Albums Uploaded</h3>
//                             <div className="album-grid">
//                                 {/* Replace with dynamic images */}
//                                 <img src="https://via.placeholder.com/150" alt="Album 1" />
//                                 <img src="https://via.placeholder.com/150" alt="Album 2" />
//                                 <img src="https://via.placeholder.com/150" alt="Album 3" />
//                             </div>
//                         </div>
//                     )}
//                     {activeTab === "about" && (
//                         <div className="about-section">
//                             <h3>About The Art of Light Studios</h3>
//                             <p>
//                                 The Art of Light Studios is a renowned wedding photography
//                                 company based in Lucknow, specializing in candid and
//                                 traditional photography styles.
//                             </p>
//                             <h4>Services Provided</h4>
//                             <ul>
//                                 <li>Candid Photography</li>
//                                 <li>Traditional Videography</li>
//                                 <li>Wedding Albums</li>
//                                 <li>Pre-Wedding Shoots</li>
//                             </ul>
//                             <h4>Key Information</h4>
//                             <p><strong>Based in:</strong> Lucknow</p>
//                             <p><strong>Payment Terms:</strong> 25% Advance</p>
//                         </div>
//                     )}
//                     {activeTab === "reviews" && (
//                         <div className="reviews-section">
//                             <h3>Reviews</h3>
//                             <div className="rating-distribution">
//                                 <p>5.0 - Excellent (80 Reviews)</p>
//                                 <div className="rating-bar">
//                                     <span style={{ width: "100%" }}></span>
//                                 </div>
//                             </div>
//                             <form className="review-form">
//                                 <h4>Write a Review</h4>
//                                 <label>
//                                     Your Rating:
//                                     <select>
//                                         <option value="5">5 - Excellent</option>
//                                         <option value="4">4 - Good</option>
//                                         <option value="3">3 - Average</option>
//                                         <option value="2">2 - Poor</option>
//                                         <option value="1">1 - Terrible</option>
//                                     </select>
//                                 </label>
//                                 <textarea
//                                     placeholder="Tell us about your experience"
//                                     rows="4"
//                                 ></textarea>
//                                 <button type="submit" className="btn-submit">
//                                     Submit Review
//                                 </button>
//                             </form>
//                         </div>
//                     )}
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default PhotoGraperpage;