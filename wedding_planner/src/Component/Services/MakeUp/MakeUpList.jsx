import React, { useState } from "react";
import "../../../css/services/MakeUService.css"
// import { FaMapMarkerAlt, FaStar } from "react-icons/fa";
// import MakeUp from "../../../Screen/services/MakeUp";
import MakeUpHeader from "./MakeUpHeader";


// import "../../../css/services/food.css";

const MakeupService = () => {
  const services = [
    {
      id: 1,
      name: "Ammani Makeovers",
      location: "Chennai",
      price: "₹10,000",
      perFunction: "per function",
      rating: 5.0,
      reviews: 27,
      type: "Freelance Artist",
      image: "/wedding_planner/src/image/makeup1.jpg",
    },
    {
      id: 2,
      name: "Glow Bridal Studio",
      location: "Mumbai",
      price: "₹15,000",
      perFunction: "per function",
      rating: 4.8,
      reviews: 32,
      type: "Bridal Makeup Specialist",
      image: "/wedding_planner/src/image/makeup2.jpg",
    },
    {
      id: 3,
      name: "Divine Beauty",
      location: "Delhi",
      price: "₹12,500",
      perFunction: "per function",
      rating: 4.9,
      reviews: 40,
      type: "Luxury Bridal Services",
      image: "/wedding_planner/src/image/makeup3.jpg",
    },
    {
      id: 4,
      name: "Sparkle Makeovers",
      location: "Bangalore",
      price: "₹9,500",
      perFunction: "per function",
      rating: 4.7,
      reviews: 20,
      type: "Budget-Friendly",
      image: "/wedding_planner/src/image/makeup3.jpg",
    },
  ];

  return (
    <div className="makeup-service-list">
        <MakeUpHeader/>

      {services.map((service) => (
        <div key={service.id} className="makeup-card">
          <div className="image-container">
            <img src={service.image} alt={service.name} />
          </div>

          <div className="details">
            <h2>{service.name}</h2>
            <p className="location">
    📍 {service.location}
    </p>
<p className="price">
    ₹{service.price} <span>{service.perFunction}</span>
</p>
<div className="rating">
    ⭐ {service.rating} ({service.reviews} reviews)
</div>
<p className="type">{service.type}</p>


            <button className="contact-btn">Send Message</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MakeupService;
