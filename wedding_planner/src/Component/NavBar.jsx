import { Link, useNavigate } from "react-router-dom";
import "../css/nav.css";
import 'bootstrap-icons/font/bootstrap-icons.css';
import logo from "../image/logo.jpg";
import { useEffect, useState } from "react";

function NavBar() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    // Check if user is logged in (Example: using localStorage)
    useEffect(() => {
        const user = localStorage.getItem("user"); // Assuming user data is stored
        if (user) {
            setIsLoggedIn(true);
        }
    }, []);

    const onLogout = () => {
        localStorage.removeItem("user"); // Remove user session
        setIsLoggedIn(false);
        navigate("/login"); // Redirect to login
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-gradient py-3">
            <div className="container-fluid">
                {/* Logo and Brand */}
                <a className="navbar-brand d-flex align-items-center" href="#">
                    <img src={logo} alt="Logo" width="40" height="40" className="me-2 rounded-circle" />
                    <span className="fw-bold fs-4 text-pink">Dream Weddings</span>
                </a>

                {/* Toggler Button */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* Navbar Links */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link text-dark active" aria-current="page" to="/">
                                Home
                            </Link>
                        </li>
                        <li className="nav-item dropdown">
                            <Link className="nav-link dropdown-toggle text-dark" role="button" data-bs-toggle="dropdown" aria-expanded="false" to="/services">
                                Services
                            </Link>
                            <ul className="dropdown-menu">
                                <li><a className="dropdown-item" href="/services/locationservice">Venues</a></li>
                                <li><a className="dropdown-item" href="/services">Catering</a></li>
                                <li><a className="dropdown-item" href="/services/decorationservice">Decor</a></li>
                                <li><a className="dropdown-item" href="/services/sound-system-service">Sound System</a></li>
                                <li><a className="dropdown-item" href="/services/mehndi-service">Mehndi</a></li>
                            </ul>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/contact-us">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link text-dark" to="/about-us">About Us</Link>
                        </li>
                    </ul>

                    {/* Search, Cart, and Profile/Login Buttons */}
                    <form className="d-flex" role="search">
                        <button
                            className="btn btn-outline-success fw-bold px-4 rounded-pill me-3"
                            type="button"
                            onClick={() => navigate("/cart")}
                        >
                            <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
                        </button>

                        {isLoggedIn ? (
                            // Show Profile button if user is logged in
                            <button
                                onClick={() => navigate("/profile")}
                                className="btn btn-primary fw-bold px-4 rounded-pill"
                                type="button"
                            >
                                Profile
                            </button>
                        ) : (
                            // Show Get Started button if user is not logged in
                            <button
                                onClick={() => navigate("/login")}
                                className="btn btn-pink fw-bold px-4 rounded-pill"
                                type="button"
                            >
                                Get Started
                            </button>
                        )}

                        {/* Logout Button (Only if user is logged in) */}
                        {isLoggedIn && (
                            <button
                                onClick={onLogout}
                                className="btn btn-danger fw-bold px-4 rounded-pill ms-3"
                                type="button"
                            >
                                Logout
                            </button>
                        )}
                    </form>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;

// import { Link, useNavigate } from "react-router-dom";
// import "../css/nav.css";
// import 'bootstrap-icons/font/bootstrap-icons.css';
// import logo from "../image/logo.jpg";


// function NavBar() {

//     const navigate = useNavigate();
//     const onLogout = ()=>{
//         navigate("/login");
//     }

    
//     return ( 
//       <nav class="navbar navbar-expand-lg navbar-light bg-gradient py-3">
//   <div class="container-fluid">
//     {/* <!-- Logo and Brand --> */}
//     <a class="navbar-brand d-flex align-items-center" href="#">
//       <img
//         src={logo}
//         alt="Logo"
//         width="40"
//         height="40"
//         class="me-2 rounded-circle"
//       />
//       <span class="fw-bold fs-4 text-pink">Dream Weddings</span>
//     </a>

//     {/* <!-- Toggler Button --> */}
//     <button
//       class="navbar-toggler"
//       type="button"
//       data-bs-toggle="collapse"
//       data-bs-target="#navbarSupportedContent"
//       aria-controls="navbarSupportedContent"
//       aria-expanded="false"
//       aria-label="Toggle navigation"
//     >
//       <span class="navbar-toggler-icon"></span>
//     </button>

//     {/* <!-- Navbar Links --> */}
//     <div class="collapse navbar-collapse" id="navbarSupportedContent">
//       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
//         <li class="nav-item">
//           <Link className="nav-link text-dark active" aria-current="page" to="/">
//             Home
//           </Link>
//         </li>
//         <li class="nav-item dropdown">
//           <Link
//             className="nav-link dropdown-toggle text-dark"
//             role="button"
//             data-bs-toggle="dropdown"
//             aria-expanded="false"
//             to="/services">
//             Services
//           </Link>
//           <ul class="dropdown-menu">
//             <li>
//               <a class="dropdown-item" href="/services/locationservice">Venues</a>
//             </li>
//             <li>
//               <a class="dropdown-item" href="/services">Catering</a>
//             </li>
//             <li>
//               <a class="dropdown-item" href="/services/decorationservice">Decor</a>
//             </li>
//             <li>
//               <a class="dropdown-item" href="/services/sound-system-service">Sound System</a>
//             </li>

//             <li>
//               <a class="dropdown-item" href="/services/mehndi-service">Mehndi</a>
//             </li>
//           </ul>
//         </li>
//         <li class="nav-item">
//           <Link className="nav-link text-dark" to="/gallery">Gallery</Link>
//         </li>
//         <li class="nav-item">
//           <Link className="nav-link text-dark" to="/contact-us">Contact</Link>
//         </li>
//         <li class="nav-item">
//           <Link className="nav-link text-dark" to="/about-us">About Us</Link>
//         </li>
//       </ul>

//       {/* <!-- Search and Login Button --> */}
//       <form class="d-flex" role="search">
//       <button
//                             className="btn btn-outline-success fw-bold px-4 rounded-pill me-3"
//                             type="button"
//                             onClick={() => navigate("/cart")} // Link to cart page
//                         >
//                             <i className="bi bi-cart" style={{ fontSize: "1.5rem" }}></i>
//                         </button>
//         <button
//           onClick={onLogout}
//           class="btn btn-pink fw-bold px-4 rounded-pill"
//           type="submit"
//         >
//           Get Started
//         </button>
//       </form>
//     </div>
//   </div>
// </nav>
//      );
// }

// export default NavBar;
