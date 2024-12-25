import AboutUs from "../Component/AboutUs";
import Footer from "../Component/Footer";
import Gallery from "../Component/Gallery";
import Location from "../Component/Location";
import Millstone from "../Component/Millstone";
import NavBar from "../Component/NavBar";
import OurService from "../Component/OurServices";
import HomeSilder from "../Component/Slider";
import Testamonial from "../Component/Testemonial";

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