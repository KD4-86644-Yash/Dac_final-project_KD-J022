import { Link, useNavigate } from "react-router-dom";
import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/nav.css";

function NavBar() {

    const navigate = useNavigate();
    const onLogout = ()=>{
        navigate("/");
    }


    return ( 
      <nav class="navbar navbar-expand-lg navbar-light bg-gradient py-3">
  <div class="container-fluid">
    {/* <!-- Logo and Brand --> */}
    <a class="navbar-brand d-flex align-items-center" href="#">
      <img
        src="https://as1.ftcdn.net/v2/jpg/03/10/96/54/1000_F_310965497_c5PmGRIs8e9mq1GliU4eSt4vKqHd9Pyc.jpg"
        alt="Logo"
        width="40"
        height="40"
        class="me-2 rounded-circle"
      />
      <span class="fw-bold fs-4 text-pink">Dream Weddings</span>
    </a>

    {/* <!-- Toggler Button --> */}
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarSupportedContent"
      aria-controls="navbarSupportedContent"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    {/* <!-- Navbar Links --> */}
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <Link className="nav-link text-dark active" aria-current="page" to="/">
            Home
          </Link>
        </li>
        <li class="nav-item dropdown">
          <Link
            className="nav-link dropdown-toggle text-dark"
            role="button"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            to="/services"
          >
            Services
          </Link>
          <ul class="dropdown-menu">
            <li>
              <a class="dropdown-item" href="#">Venues</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Catering</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Decor</a>
            </li>
            <li>
              <a class="dropdown-item" href="#">Photography</a>
            </li>
          </ul>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-dark" to="/">Packages</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-dark" to="/">Testimonials</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-dark" to="/">Contact</Link>
        </li>
        <li class="nav-item">
          <Link className="nav-link text-dark" to="/">About Us</Link>
        </li>
      </ul>

      {/* <!-- Search and Login Button --> */}
      <form class="d-flex" role="search">
        <button
          onClick={onLogout}
          class="btn btn-pink fw-bold px-4 rounded-pill"
          type="submit"
        >
          Get Started
        </button>
      </form>
    </div>
  </div>
</nav>


    //     <nav class="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
    //   <div class="container-fluid">
    //     <a class="navbar-brand" href="#">
    //       <img
    //         src="https://as1.ftcdn.net/v2/jpg/03/10/96/54/1000_F_310965497_c5PmGRIs8e9mq1GliU4eSt4vKqHd9Pyc.jpg"
    //         alt="Logo"
    //         width="30"
    //         height="30"
    //         class="d-inline-block align-text-top"
    //       />
    //         MyStore
    //     </a>
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
    //     <div class="collapse navbar-collapse" id="navbarSupportedContent">
    //       <ul class="navbar-nav me-auto mb-2 mb-lg-0">
    //         <li class="nav-item">
    //           <Link className="nav-link" aria-current="page" to="/">
    //             Categories
    //           </Link>
    //         </li>
    //         <li class="nav-item dropdown">
    //           <Link
    //             className="nav-link dropdown-toggle"
    //             role="button"
    //             data-bs-toggle="dropdown"
    //             aria-expanded="false"
    //             to="/product"
    //           >
    //             Products
    //           </Link>
    //           <ul class="dropdown-menu">
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Vanue
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Food
    //               </a>
    //             </li>
    //             <li>
    //               <a class="dropdown-item" href="#">
    //                 Dj
    //               </a>
    //             </li>
    //           </ul>
    //         </li>
    //         <li class="nav-item">
    //           <Link className="nav-link" to="/">
    //             Users
    //           </Link>
    //         </li>
    //         <li class="nav-item">
    //           <Link className="nav-link" to="/">
    //             Orders
    //           </Link>
    //         </li>
    //       </ul>
    //       <form class="d-flex" role="search">
    //         <button
    //           onClick={onLogout}
    //           class="btn btn-outline-success"
    //           type="submit"
    //         >
    //           Log In
    //         </button>
    //       </form>
    //     </div>
    //   </div>
    // </nav>
     );
}

export default NavBar;