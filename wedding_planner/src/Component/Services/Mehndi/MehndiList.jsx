import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import MehndiHeader from "./MehndiHeader";

// Import images
import mehndi1 from "../../../image/mehndi1.png";
import mehndi2 from "../../../image/mehndi2.jpg";
import mehndi3 from "../../../image/mehndi3.png";

const images = [mehndi1, mehndi2, mehndi3]; // Array of images

const MehndiList = () => {
  const [mehndiServices, setMehndiServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/mehndi-service/get")
      .then((response) => {
        setMehndiServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching Mehndi services:", error);
        setError("Failed to load Mehndi services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <MehndiHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {mehndiServices.length === 0 && !error ? (
        <p className="text-center">Loading Mehndi services...</p>
      ) : (
        mehndiServices.map((mehndi, index) => (
          <div key={mehndi.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start decoration-img"
                  alt={mehndi.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{mehndi.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {mehndi.city}
                      </p>
                      <p className="card-text">{mehndi.discription}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">{mehndi.type}</span>
                    <span className="badge bg-secondary">Rating: {mehndi.rating}</span>
                    <span className="badge bg-secondary">₹ {mehndi.price}</span>
                  </p>
                  <p className="card-description">{mehndi.details}</p>
                  <Link to={`/mehndi/${mehndi.id}`} className="btn btn-pink">
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

export default MehndiList;


// import React from "react";
// import { Link } from "react-router-dom"; // React Router for navigation

// import mehndi1 from "../../../image/mehndi1.png";
// import mehndi2 from "../../../image/mehndi2.jpg";
// import mehndi3 from "../../../image/mehndi3.png";

// // import "../css/services/DecorationCards.css";


// import MehndiHeader from "./MehndiHeader";

// const MehndiList = () => {
//   return (
//     <div className="container my-4">

//         <MehndiHeader/>

//       {/* Page Header */}
//       {/* <h1 class="text-center page-title">Decoration Services</h1>
//       <p className="text-center page-description">
//         Explore our wide range of decoration services for weddings, parties, and grand events. Tailored to make your special moments unforgettable.
//       </p> */}

//       {/* Card 1 */}
//       <div className="card mb-4 decoration-card">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={mehndi1}
//               className="img-fluid rounded-start decoration-img"
//               alt="Rajhans Greens"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <h5 className="card-title">Rajhans Greens</h5>
//                   <p className="card-location">
//                     <i className="bi bi-geo-alt"></i> Kanakapura Road, Bangalore
//                   </p>
//                   <p className="card-text">Banquet Halls, Marriage Garden</p>
//                 </div>
//               </div>
//               <p className="card-text">
//                 <span className="badge bg-secondary">100 Rooms</span>
//                 <span className="badge bg-secondary">Indoor</span>
//                 <span className="badge bg-secondary">Outdoor</span>
//               </p>
//               <p className="card-description">
//                 Rajhans Greens, a luscious venue based in Bangalore, is perfect
//                 for the grand affair like your wedding.
//               </p>
//               <Link to="/decoration/rajhans-greens" className="btn btn-pink">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Card 2 */}
//       <div className="card mb-4 decoration-card">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={mehndi2}
//               className="img-fluid rounded-start decoration-img"
//               alt="Bravura Gold Resort"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <h5 className="card-title">Bravura Gold Resort</h5>
//                   <p className="card-location">
//                     <i className="bi bi-geo-alt"></i> Partapur, Meerut
//                   </p>
//                   <p className="card-text">
//                     4-Star & Above Wedding Hotels
//                   </p>
//                 </div>
//               </div>
//               <p className="card-text">
//                 Veg: ₹ 2,100 per plate<br />
//                 Non-Veg: ₹ 2,399 per plate
//               </p>
//               <p className="card-text">
//                 <span className="badge bg-secondary">64 Rooms</span>
//                 <span className="badge bg-secondary">Indoor</span>
//                 <span className="badge bg-secondary">Outdoor</span>
//               </p>
//               <p className="card-description">
//                 Bravura Gold Resort is one of the largest and most beautiful
//                 venues located in Meerut.
//               </p>
//               <Link
//                 to="/decoration/bravura-gold-resort"
//                 className="btn btn-pink"
//               >
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Card 3 */}
//       <div className="card mb-4 decoration-card">
//         <div className="row g-0">
//           <div className="col-md-4">
//             <img
//               src={mehndi3}
//               className="img-fluid rounded-start decoration-img"
//               alt="The Lalit Ashok"
//             />
//           </div>
//           <div className="col-md-8">
//             <div className="card-body">
//               <div className="d-flex justify-content-between align-items-start">
//                 <div>
//                   <h5 className="card-title">The Lalit Ashok</h5>
//                   <p className="card-location">
//                     <i className="bi bi-geo-alt"></i> Seshadripuram, Bangalore
//                   </p>
//                   <p className="card-text">5-Star Banquet</p>
//                 </div>
//               </div>
//               <p className="card-text">
//                 ₹ 15,00,000 Rental cost
//               </p>
//               <p className="card-text">
//                 <span className="badge bg-secondary">150 Rooms</span>
//                 <span className="badge bg-secondary">Indoor</span>
//                 <span className="badge bg-secondary">Outdoor</span>
//               </p>
//               <p className="card-description">
//                 The Lalit Ashok offers one of the most prestigious venues in
//                 Bangalore with world-class facilities.
//               </p>
//               <Link to="/decoration/the-lalit-ashok" className="btn btn-pink">
//                 View Details
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default MehndiList;
