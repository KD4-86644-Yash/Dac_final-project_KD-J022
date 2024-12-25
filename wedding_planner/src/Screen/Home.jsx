import AboutUs from "../Component/AboutUs.jsx";
import Footer from "../Component/Footer.jsx";
import NavBar from "../Component/NavBar.jsx";
import Gallery from "../Component/Gallery.jsx";
import Location from "../Component/Location.jsx";
import Millstone from "../Component/Millstone.jsx";
import OurService from "../Component/OurServices.jsx";
import HomeSilder from "../Component/Slider.jsx";
import Testamonial from "../Component/Testemonial.jsx";

function Home() {
    return ( 
        <div>
            <NavBar />
            <HomeSilder />
            <Millstone />
            <AboutUs />
            <br /> 
            <OurService />
            <br />
            <br />
            <Location />
            <br />
            <Gallery />
            <br />
            <Testamonial />
            <br />
            <br />
            <Footer />
        </div>
     );
}

export default Home;