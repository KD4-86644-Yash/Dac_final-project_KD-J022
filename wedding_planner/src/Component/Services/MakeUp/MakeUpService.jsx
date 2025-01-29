import React from "react";
import { Link } from "react-router-dom"; // React Router for navigation

import  makeup1 from "../../../image/makeup1.jpg";
import  makeup2 from "../../../image/makeup2.png";
import  makeup3 from "../../../image/makeup3.jpg";

import "../../../css/services/food.css";


import MakeUpHeader from './MakeUpHeader';
// import MakeUp from './../../../Screen/services/MakeUp';

const MakeUpService = () => {
  return (
    <div className="container my-4">

        <MakeUpHeader/>

      {/* Page Header */}
      {/* <h1 class="text-center page-title">Decoration Services</h1>
      <p className="text-center page-description">
        Explore our wide range of decoration services for weddings, parties, and grand events. Tailored to make your special moments unforgettable.
      </p> */}

      {/* Card 1 */}
      <div className="card mb-4 decoration-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={makeup1}
              className="img-fluid rounded-start decoration-img"
              alt="Rajhans Greens"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Rajhans Greens</h5>
                  <p className="card-location">
                    <i className="bi bi-geo-alt"></i> Kanakapura Road, Bangalore
                  </p>
                  <p className="card-text">Banquet Halls, Marriage Garden</p>
                </div>
              </div>
              <p className="card-text">
                ₹ 1,50,000 per head
              </p>
              <p className="card-text">
                  ⭐ 4.5 / 5 <br />
                  <span className="badge bg-success">Available</span>
              </p>

              <p className="card-description">
                Rajhans Greens, a luscious venue based in Bangalore, is perfect
                for the grand affair like your wedding.
              </p>
              <Link to="/decoration/rajhans-greens" className="btn btn-pink">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 2 */}
      <div className="card mb-4 decoration-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={makeup2}
              className="img-fluid rounded-start decoration-img"
              alt="Bravura Gold Resort"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">Bravura Gold Resort</h5>
                  <p className="card-location">
                    <i className="bi bi-geo-alt"></i> Partapur, Meerut
                  </p>
                  
                </div>
              </div>
              <p className="card-text">
                ₹ 1,50,000 per head
              </p>
              
              <p className="card-text">
                  ⭐ 4.5 / 5 <br />
                  <span className="badge bg-success">Available</span>
              </p>
              <p className="card-description">
                Bravura Gold Resort is one of the largest and most beautiful
                venues located in Meerut.
              </p>
              <Link
                to="/decoration/bravura-gold-resort"
                className="btn btn-pink"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Card 3 */}
      <div className="card mb-4 decoration-card">
        <div className="row g-0">
          <div className="col-md-4">
            <img
              src={makeup3}
              className="img-fluid rounded-start decoration-img"
              alt="The Lalit Ashok"
            />
          </div>
          <div className="col-md-8">
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-start">
                <div>
                  <h5 className="card-title">The Lalit Ashok</h5>
                  <p className="card-location">
                    <i className="bi bi-geo-alt"></i> Seshadripuram, Bangalore
                  </p>
                  
                </div>
              </div>
              <p className="card-text">
                ₹ 1,50,000 per head
              </p>
              <p className="card-text">
                  ⭐ 4.5 / 5 <br />
                  <span className="badge bg-success">Available</span>
              </p>
              <p className="card-description">
                The Lalit Ashok offers one of the most prestigious venues in
                Bangalore with world-class facilities.
              </p>
              <Link to="/decoration/the-lalit-ashok" className="btn btn-pink">
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MakeUpService;
