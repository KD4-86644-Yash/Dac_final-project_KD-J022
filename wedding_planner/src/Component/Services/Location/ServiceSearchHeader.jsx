import React from "react";
// import "../../css/services/HeaderBar.css"; // Import the styles

import "../../../css/services/HeaderBar.css";

const HeaderBar = () => {
  return (
    <div className="header-bar">
      <div className="breadcrumb">
        <span>Home</span> <span className="arrow">&gt;</span> <span>Vendors</span>
      </div>
      <div className="title-section">
        <h1>Wedding Venues</h1>
        <p>
          Showing <strong>35,110 results</strong> as per your search criteria
        </p>
      </div>
      <div className="search-section">
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input type="text" placeholder="Search Wedding Venues..." />
        </div>
        <div className="view-options">
          <button className="view-btn">
            <i className="bi bi-list"></i> List
          </button>
          <button className="view-btn">
            <i className="bi bi-grid-3x3-gap"></i> Grid
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;
