import React, { useState } from "react";
import { Link } from "react-router-dom"; // Add this import if using React Router
import "../../../css/services/HeaderBar.css";
// import MakeUp from './../../../Screen/services/MakeUp';


const MakeUpHeader = () => {
  const [view, setView] = useState("List");

  return (
    <div className="header-bar">
      {/* Breadcrumb Navigation */}
      <div className="breadcrumb">
        <Link to="/" className="breadcrumb-link">Home</Link>
        <span className="arrow">&gt;</span>
        <Link to="/vendors" className="breadcrumb-link">Vendors</Link>
      </div>

      {/* Title Section */}
      <div className="title-section">
        <h1 className="animated-title">Wedding MakeUp Service</h1>
        <p>
          Showing <strong>35,110 results</strong> as per your search criteria
        </p>
      </div>

      {/* Search Section */}
      <div className="search-section">
        {/* Search Box */}
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search Wedding Venues..." />
        </div>

        {/* View Options
        <div className="view-options">
          <button
            className={`view-btn ${view === "List" ? "active" : ""}`}
            onClick={() => setView("List")}
          >
            <Link to="/venues/list">
              <i className="bi bi-list"></i> List
            </Link>
          </button>
          <button
            className={`view-btn ${view === "Grid" ? "active" : ""}`}
            onClick={() => setView("Grid")}
          >
            <Link to="/venues/grid">
              <i className="bi bi-grid-3x3-gap"></i> Grid
            </Link>
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default MakeUpHeader;
