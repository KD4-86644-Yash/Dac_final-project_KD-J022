
import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import for navigation
import "../../../css/services/HeaderBar.css"; // Import CSS

const HeaderBar = ({
  title = "Wedding Decoration", // Default title
  resultCount = "0", // Default result count
  breadcrumbs = [], // Default empty array
  searchPlaceholder = "Search..." // Default search placeholder
}) => {
  const [view, setView] = useState("List"); // Tracks List/Grid view
  const [searchQuery, setSearchQuery] = useState(""); // Tracks search input

  return (
    <div className="header-bar">
      {/* Breadcrumb Navigation */}
      <nav className="breadcrumb" aria-label="breadcrumb">
        {breadcrumbs.length > 0 ? (
          breadcrumbs.map((breadcrumb, index) => (
            <span key={index}>
              <Link to={breadcrumb.path} className="breadcrumb-link">{breadcrumb.name}</Link>
              {index < breadcrumbs.length - 1 && <span className="arrow">&gt;</span>}
            </span>
          ))
        ) : (
          <span className="breadcrumb-link">Home</span>
        )}
      </nav>

      {/* Title & Results Count */}
      <div className="title-section">
        <h1 className="animated-title">{title}</h1>
        <p>
          Showing <strong>{resultCount} results</strong> as per your search criteria
        </p>
      </div>

      {/* Search & View Options */}
      <div className="search-section">
        {/* Search Box */}
        <div className="search-box">
          <i className="bi bi-search"></i>
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* View Toggle Buttons */}
        <div className="view-options">
          <button
            className={`view-btn ${view === "List" ? "active" : ""}`}
            onClick={() => setView("List")}
          >
            <i className="bi bi-list"></i> List
          </button>
          <button
            className={`view-btn ${view === "Grid" ? "active" : ""}`}
            onClick={() => setView("Grid")}
          >
            <i className="bi bi-grid-3x3-gap"></i> Grid
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBar;





















// import React, { useState } from "react";
// import { Link } from "react-router-dom"; // Add this import if using React Router
// import "../../../css/services/HeaderBar.css";



// const SoundSystemHeader = () => {
//   const [view, setView] = useState("List");

//   return (
//     <div className="header-bar">
//       {/* Breadcrumb Navigation */}
//       <div className="breadcrumb">
//         <Link to="/" className="breadcrumb-link">Home</Link>
//         <span className="arrow">&gt;</span>
//         <Link to="/vendors" className="breadcrumb-link">Vendors</Link>
//       </div>

//       {/* Title Section */}
//       <div className="title-section">
//         <h1 className="animated-title">Wedding Decoration</h1>
//         <p>
//           Showing <strong>35,110 results</strong> as per your search criteria
//         </p>
//       </div>

//       {/* Search Section */}
//       <div className="search-section">
//         {/* Search Box */}
//         <div className="search-box">
//           <i className="bi bi-search"></i>
//           <input type="text" placeholder="Search Wedding Venues..." />
//         </div>

//         {/* View Options */}
//         <div className="view-options">
//           <button
//             className={`view-btn ${view === "List" ? "active" : ""}`}
//             onClick={() => setView("List")}
//           >
//             <Link to="/venues/list">
//               <i className="bi bi-list"></i> List
//             </Link>
//           </button>
//           <button
//             className={`view-btn ${view === "Grid" ? "active" : ""}`}
//             onClick={() => setView("Grid")}
//           >
//             <Link to="/venues/grid">
//               <i className="bi bi-grid-3x3-gap"></i> Grid
//             </Link>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SoundSystemHeader;