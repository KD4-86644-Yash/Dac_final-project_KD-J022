import Footer from "../Component/Footer";
import NavBar from "../Component/NavBar";
import "../css/AboutUs/AboutUs.css";
import aboutmini1 from "../../src/image/aboutmini1.jpeg";
import aboutmini2 from "../../src/image/aboutmini2.jpg";
import aboutmini5 from "../../src/image/aboutmini5.jpg";


function AboutUs () {
    return ( <div>
        <NavBar/>
        <div>
        <div className="about-container">
      {/* Header Section */}
      <div className="about-header">
        <div className="header-background">
          <h1>About Us</h1>
          
        </div>
      </div>

      {/* Content Section */}
      <div className="about-content">
        <div className="about-left">
          {/* Left Section */}
          <div className="about-cards">
            <div className="card">
              <img
                src={aboutmini1}
                alt="Team Collaboration"
              />
            </div>
            <div className="card">
              <img
                src={aboutmini2}
                alt="Document Analysis"
              />
            </div>
          </div>

          {/* Experience Section */}
          <div className="experience">
            <h1>25+</h1>
            <p>Years of Experience</p>
          </div>
        </div>

        {/* Right Section */}
        <div className="about-info">
          <h3>About Ritaxes</h3>
          <h2>Innovative Strategies for Tax Prosperity</h2>
          <p>
            Duis et dolor vel neque faucibus tincidunt. Nulla semper condimentum
            tellus in ultricies. Nunc tempor ipsum nec fermentum consequat.
          </p>
          <ul>
            <li>Curabitur gravida sem</li>
            <li>Mauris tempor ac erat</li>
            <li>Fusce eleifend lectus</li>
            <li>Fusce non sodales dui</li>
            <li>Class aptent taciti</li>
            <li>Nam elementum semper</li>
          </ul>
          <button className="learn-more">Learn More</button>
        </div>
      </div>

      {/* Vision, Mission, History Section */}
      <div className="vision-mission-history">
        <div className="vmh-left">
          <div className="vmh-card">
            <h3>Our Vision</h3>
            <p>
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>
          <div className="vmh-card">
            <h3>Our Mission</h3>
            <p>
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>
          <div className="vmh-card history">
            <h3>Our History</h3>
            <p>
              Fusce sed pellentesque dui. Nunc lacinia, nibh vitae gravida
              condimentum, turpis neque commodo mauris, id rutrum lacus nisl a
              risus.
            </p>
          </div>
        </div>
        <div className="vmh-right">
          <h2>Our Plan Makes You Feel More Comfortable in Tax Management</h2>
          <p>
            Nulla semper condimentum tellus in ultricies. Nunc tempor ipsum nec
            fermentum consequat. Cras et felis ultricies.
          </p>
         <a href="/contact-us"> <button className="contact-us">Contact Us</button></a>
        </div>
      </div>
    </div>
    
        <main>
             {/* Third Section */}
      <div className="third-section">
        <div className="third-section-row">
          <div className="third-section-image">
            <img
              src={aboutmini5   }
              alt="Teamwork"
              className="team-image"
            />
          </div>
          <div className="third-section-content">
            <h2>We're Here to Help You Achieve Your Goals</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="/contact-us"><button className="contact-button">Contact Us</button></a>
          </div>
        </div>

        <div className="third-section-cards">
          <div className="third-card">
            <div className="icon-container">
              <i className="fas fa-cogs"></i>
            </div>
            <h3>Commitment</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="third-card">
            <div className="icon-container">
              <i className="fas fa-balance-scale"></i>
            </div>
            <h3>Honesty</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
          <div className="third-card">
            <div className="icon-container">
              <i className="fas fa-chart-line"></i>
            </div>
            <h3>Growth</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
              tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
          </div>
        </div>
      </div>
        </main>
    
        </div>
        
        <Footer/>
    </div> );
}

export default AboutUs;