import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import LocationList from "../../Component/Services/Location/LocationList";



function LocationService(){
    return(
        <div>
        <NavBar/>        
        <LocationList/>        
        <Footer/>
        </div>

    );
}
export default LocationService;


