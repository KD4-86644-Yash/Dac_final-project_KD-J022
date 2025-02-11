import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import InvitesHeader from "./InvitesHeader";

// Import images
import invites1 from "../../../image/invites.jpg";
import invites2 from "../../../image/invites2.jpg";
import invites3 from "../../../image/invites3.jpg";

const images = [invites1, invites2, invites3]; // Array of images

const InvitesServices = () => {
  const [inviteServices, setInviteServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/invites-service/get")
      .then((response) => {
        setInviteServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching invite services:", error);
        setError("Failed to load invitation services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <InvitesHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {inviteServices.length === 0 && !error ? (
        <p className="text-center">Loading invitation services...</p>
      ) : (
        inviteServices.map((invite, index) => (
          <div key={invite.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start decoration-img"
                  alt={invite.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{invite.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {invite.city}
                      </p>
                      <p className="card-text">₹ {invite.price} per card</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">Rating: {invite.rating}</span>
                    <span className="badge bg-success">{invite.availability}</span>
                  </p>
                  <p className="card-description">{invite.details}</p>
                  <Link to={`/invites/${invite.id}`} className="btn btn-pink">
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

export default InvitesServices;












































// import React from "react";
// import { Link } from "react-router-dom"; // React Router for navigation

// import  invites from "../../../image/invites.jpg";
// import  invites2 from "../../../image/invites2.jpg";
// import  invites3 from "../../../image/invites3.jpg";

// import "../../../css/services/food.css";



// import InvitesHeader from './InvitesHeader';

// const InvitesServices = () => {
//   return (
//     <div className="container my-4">

//         <InvitesHeader/>

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
//               src={invites}
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
                  
//                 </div>
//               </div>
//               <p className="card-text">
//               ₹ 1,500 per card
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
//               src={invites2}
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
                  
//                 </div>
//               </div>
//               <p className="card-text">
//               ₹ 1,500 per card
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
//               src={invites3}
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
                  
//                 </div>
//               </div>
//               <p className="card-text">
//                 ₹ 1,500 per card
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

// export default InvitesServices;
