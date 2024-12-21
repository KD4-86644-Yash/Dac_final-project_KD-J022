import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/footer.css";

function Footer() {
    return ( 
        <footer className="bg-white text-dark pt-5 pb-3">
            <div className="container">
                <div className="row">
                    {/* Column 1: Logo & Name */}
                    <div className="col-md-3">
                        <div className="logo">
                            <img src="your-logo-url.png" alt="Logo" className="img-fluid mb-3" />
                            <h4 className="text-elegant">Elegant Weddings</h4>
                        </div>
                    </div>

                    {/* Column 2: Social Media with Icons */}
                    <div className="col-md-3">
                        <h5>Follow Us</h5>
                        <ul className="list-unstyled">
                            <li>
                                <a href="https://www.facebook.com" className="text-dark d-flex align-items-center">
                                    <FontAwesomeIcon icon={faFacebook} className="mr-2" />
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com" className="text-dark d-flex align-items-center">
                                    <FontAwesomeIcon icon={faInstagram} className="mr-2" />
                                    Instagram
                                </a>
                            </li>
                            <li>
                                <a href="https://www.twitter.com" className="text-dark d-flex align-items-center">
                                    <FontAwesomeIcon icon={faTwitter} className="mr-2" />
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com" className="text-dark d-flex align-items-center">
                                    <FontAwesomeIcon icon={faLinkedin} className="mr-2" />
                                    LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Column 3: Services */}
                    <div className="col-md-3">
                        <h5>Our Services</h5>
                        <ul className="list-unstyled">
                            <li><a href="/wedding-planning" className="text-dark">Wedding Planning</a></li>
                            <li><a href="/venue-booking" className="text-dark">Venue Booking</a></li>
                            <li><a href="/decorations" className="text-dark">Decorations</a></li>
                            <li><a href="/photography" className="text-dark">Photography</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Navbar */}
                    <div className="col-md-3">
                        <h5>Quick Links</h5>
                        <ul className="list-unstyled">
                            <li><a href="/" className="text-dark">Home</a></li>
                            <li><a href="/about" className="text-dark">About Us</a></li>
                            <li><a href="/contact" className="text-dark">Contact</a></li>
                            <li><a href="/blog" className="text-dark">Blog</a></li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Copyright Section: Separate Row with Grey Background */}
            <div className="copyright">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Elegant Weddings. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
     );
}

export default Footer;