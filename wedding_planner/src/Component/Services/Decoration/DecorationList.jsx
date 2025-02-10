import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "../../../css/services/DecorationCard.css";
import DecorationHeader from "./DecorationHeader";

const DecorationList = () => {
  const [decorations, setDecorations] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/service/Decoration/get")
      .then((response) => {
        setDecorations(response.data);
      })
      .catch((error) => {
        console.error("Error fetching decorations:", error);
        setError("Failed to load decoration services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <DecorationHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {decorations.length === 0 && !error ? (
        <p className="text-center">Loading decoration services...</p>
      ) : (
        decorations.map((decoration) => (
          <div key={decoration.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={`/image/${decoration.image}`} // Fetch from public folder
                  className="img-fluid rounded-start decoration-img"
                  alt={decoration.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{decoration.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {decoration.city}
                      </p>
                      <p className="card-text">{decoration.discription}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">Rating: {decoration.rating}</span>
                    <span className="badge bg-secondary">₹ {decoration.price} per event</span>
                  </p>
                  <p className="card-text">
                    <span className={`badge ${decoration.status === "Available" ? "bg-success" : "bg-danger"}`}>
                      {decoration.status}
                    </span>
                  </p>
                  <Link to={`/decoration/${decoration.id}`} className="btn btn-pink">
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

export default DecorationList;















// import React from "react";
// import { Link } from "react-router-dom"; // React Router for navigation
// import Location2 from  "../../../image/location2.png";
// import location1 from "../../../image/location1.jpeg";
// import Location3  from  "../../../image/location3.png";

// import "../../../css/services/DecorationCard.css";

// import DecorationHeader from "./DecorationHeader";

// const DecorationList = () => {
//   return (
//     <div className="container my-4">

//         <DecorationHeader/>

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
//               src={location1}
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
//                 ₹ 15,00,000 Rental cost
//               </p>
//               <p className="card-text">
//                   ⭐ 4.5 / 5 <br />
//                   <span className="badge bg-success">Available</span>
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
//               src={Location2}
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
//                 ₹ 15,00,000 Rental cost
//               </p>
//               <p className="card-text">
//                   ⭐ 4.5 / 5 <br />
//                   <span className="badge bg-success">Available</span>
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
//               src={Location3}
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
//                   ⭐ 4.5 / 5 <br />
//                   <span className="badge bg-success">Available</span>
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

// export default DecorationList;
