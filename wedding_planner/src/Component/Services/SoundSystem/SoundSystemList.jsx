import React, { useEffect, useState } from "react";
import axios from "axios";
import SoundSystemHeader from "./SoundSystemHeader";

// Import images
import Sound1 from "../../../image/Sound1.jpg";
import Sound2 from "../../../image/Sound2.jpg";
import Sound3 from "../../../image/Sound3.jpg";

const images = [Sound1, Sound2, Sound3]; // Array of images

const SoundSystemList = () => {
  const [soundServices, setSoundServices] = useState([]);
  const [error, setError] = useState(null);
  const [addedToCart, setAddedToCart] = useState({}); // Track cart status for each service

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/sound-system-service/get")
      .then((response) => {
        setSoundServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sound services:", error);
        setError("Failed to load sound services. Please try again later.");
      });
  }, []);

  const handleAddToCart = async (soundId, userId) => {
    const cartItem = {
      serviceId: soundId,
      quantity: 1, // Default quantity
    };

    try {
      await axios.post(`http://localhost:7070/services/sound-system-service/cart/${soundId}/${userId}`, cartItem);
      setAddedToCart((prev) => ({ ...prev, [soundId]: true })); // Mark as added
    } catch (error) {
      console.error("Error adding to cart:", error);
      alert("Failed to add item to cart. Please try again.");
    }
  };

  return (
    <div className="container my-4">
      <SoundSystemHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {soundServices.length === 0 && !error ? (
        <p className="text-center">Loading sound system services...</p>
      ) : (
        soundServices.map((sound, index) => (
          <div key={sound.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start decoration-img"
                  alt={sound.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{sound.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {sound.city}
                      </p>
                      <p className="card-text">{sound.discription}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">{sound.type}</span>
                    <span className="badge bg-secondary">Rating: {sound.rating}</span>
                    <span className="badge bg-secondary">₹ {sound.price}</span>
                  </p>
                  <p className="card-description">{sound.details}</p>

                  <button
                    className="btn btn-pink"
                    onClick={() => handleAddToCart(sound.id, sound.vendorId, 1)} // Pass vendorId & userId (Replace 1 with actual user ID)
                    disabled={addedToCart[sound.id]}
                  >
                    {addedToCart[sound.id] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default SoundSystemList;







// import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
// import axios from "axios";
// import SoundSystemHeader from "./SoundSystemHeader";

// // Import images
// import Sound1 from "../../../image/Sound1.jpg";
// import Sound2 from "../../../image/Sound2.jpg";
// import Sound3 from "../../../image/Sound3.jpg";

// const images = [Sound1, Sound2, Sound3]; // Array of images

// const SoundSystemList = () => {
//   const [soundServices, setSoundServices] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     axios
//       .get("http://localhost:7070/services/sound-system-service/get")
//       .then((response) => {
//         setSoundServices(response.data);
//       })
//       .catch((error) => {
//         console.error("Error fetching sound services:", error);
//         setError("Failed to load sound services. Please try again later.");
//       });
//   }, []);

//   return (
//     <div className="container my-4">
//       <SoundSystemHeader />

//       {error && <p className="text-center text-danger">{error}</p>}

//       {soundServices.length === 0 && !error ? (
//         <p className="text-center">Loading sound system services...</p>
//       ) : (
//         soundServices.map((sound, index) => (
//           <div key={sound.id} className="card mb-4 decoration-card">
//             <div className="row g-0">
//               <div className="col-md-4">
//                 <img
//                   src={images[index % images.length]} // Assign images sequentially
//                   className="img-fluid rounded-start decoration-img"
//                   alt={sound.name}
//                 />
//               </div>
//               <div className="col-md-8">
//                 <div className="card-body">
//                   <div className="d-flex justify-content-between align-items-start">
//                     <div>
//                       <h5 className="card-title">{sound.name}</h5>
//                       <p className="card-location">
//                         <i className="bi bi-geo-alt"></i> {sound.city}
//                       </p>
//                       <p className="card-text">{sound.discription}</p>
//                     </div>
//                   </div>
//                   <p className="card-text">
//                     <span className="badge bg-secondary">{sound.type}</span>
//                     <span className="badge bg-secondary">Rating: {sound.rating}</span>
//                     <span className="badge bg-secondary">₹ {sound.price}</span>
//                   </p>
//                   <p className="card-description">{sound.details}</p>
//                   <Link to={`/sound-system/${sound.id}`} className="btn btn-pink">
//                     View Details
//                   </Link>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))
//       )}
//     </div>
//   );
// };

// export default SoundSystemList;



/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SoundSystemHeader from "./SoundSystemHeader";

// Import images
import Sound1 from "../../../image/Sound1.jpg";
import Sound2 from "../../../image/Sound2.jpg";
import Sound3 from "../../../image/Sound3.jpg";

const images = [Sound1, Sound2, Sound3]; // Array of images

const SoundSystemList = () => {
  const [soundServices, setSoundServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/sound-system-service/get")
      .then((response) => {
        setSoundServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sound services:", error);
        setError("Failed to load sound services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <SoundSystemHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {soundServices.length === 0 && !error ? (
        <p className="text-center">Loading sound system services...</p>
      ) : (
        soundServices.map((sound, index) => (
          <div key={sound.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start decoration-img"
                  alt={sound.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{sound.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {sound.city}
                      </p>
                      <p className="card-text">{sound.discription}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">{sound.type}</span>
                    <span className="badge bg-secondary">Rating: {sound.rating}</span>
                    <span className="badge bg-secondary">₹ {sound.price}</span>
                  </p>
                  <p className="card-description">{sound.details}</p>
                  <Link to={`/sound-system/${sound.id}`} className="btn btn-pink">
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

export default SoundSystemList;




/*import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import SoundSystemHeader from "./SoundSystemHeader";

// Import images
import Sound1 from "../../../image/Sound1.jpg";
import Sound2 from "../../../image/Sound2.jpg";
import Sound3 from "../../../image/Sound3.jpg";

const images = [Sound1, Sound2, Sound3]; // Array of images

const SoundSystemList = () => {
  const [soundServices, setSoundServices] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:7070/services/sound-system-service/get")
      .then((response) => {
        setSoundServices(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sound services:", error);
        setError("Failed to load sound services. Please try again later.");
      });
  }, []);

  return (
    <div className="container my-4">
      <SoundSystemHeader />

      {error && <p className="text-center text-danger">{error}</p>}

      {soundServices.length === 0 && !error ? (
        <p className="text-center">Loading sound system services...</p>
      ) : (
        soundServices.map((sound, index) => (
          <div key={sound.id} className="card mb-4 decoration-card">
            <div className="row g-0">
              <div className="col-md-4">
                <img
                  src={images[index % images.length]} // Assign images sequentially
                  className="img-fluid rounded-start decoration-img"
                  alt={sound.name}
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <div className="d-flex justify-content-between align-items-start">
                    <div>
                      <h5 className="card-title">{sound.name}</h5>
                      <p className="card-location">
                        <i className="bi bi-geo-alt"></i> {sound.city}
                      </p>
                      <p className="card-text">{sound.discription}</p>
                    </div>
                  </div>
                  <p className="card-text">
                    <span className="badge bg-secondary">{sound.type}</span>
                    <span className="badge bg-secondary">Rating: {sound.rating}</span>
                    <span className="badge bg-secondary">₹ {sound.price}</span>
                  </p>
                  <p className="card-description">{sound.details}</p>
                  <Link to={`/sound-system/${sound.id}`} className="btn btn-pink">
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

export default SoundSystemList;



*/
// import React from "react";
// import { Link } from "react-router-dom"; // React Router for navigation
// import Sound1 from  "../../../image/Sound1.jpg";
// import Sound2 from  "../../../image/Sound2.jpg";
// import Sound3 from  "../../../image/Sound3.jpg";

// // import "../css/services/DecorationCards.css";

// import SoundSystemHeader from "./SoundSystemHeader";

// const SoundSystemList = () => {
//   return (
//     <div className="container my-4">

//         <SoundSystemHeader/>

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
//               src={Sound1}
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
//               src={Sound2}
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
//               src={Sound3}
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

// export default SoundSystemList;
//