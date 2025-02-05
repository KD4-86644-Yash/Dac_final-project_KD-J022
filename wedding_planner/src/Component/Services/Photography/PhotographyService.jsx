import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import PhotographyHeader from "./PhotographyHeader";

// Import images
import Photo1 from "../../../image/photography1.jpg";
import Photo2 from "../../../image/photography2.jpg";
import Photo3 from "../../../image/photography3.jpg";

const images = [Photo1, Photo2, Photo3]; // Array of images

const PhotographyService = () => {
  const [photographyServices, setPhotographyServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/photo/get")
      .then((response) => {
        setPhotographyServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching photography services:", error);
        setError("Failed to load photography services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <PhotographyHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {photographyServices.length === 0 && !error ? (
        <p className="text-center">Loading photography services...</p>
      ) : (
        photographyServices.map((service, index) => (
          <div key={service.id} className="card mb-4 photography-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start photography-img"
                  alt={service.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{service.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {service.location}
                      </p>
                      <p className="card-text">{service.description}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">Rating: {service.rating}</span>
                    <span className="badge bg-secondary">₹ {service.price} per day</span>
                  </p>
                  <Link to={`/photography/${service.id}`} className="btn btn-pink">
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default PhotographyService;