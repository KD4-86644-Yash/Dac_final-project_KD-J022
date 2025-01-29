import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import SoundSystemList from "../../Component/Services/SoundSystem/SoundSystemList";


function SoundSystemService() {
    return ( 
        <div>
            <NavBar/>       
        <SoundSystemList/>        
        <Footer/>
        </div>
     );
}

export default SoundSystemService;
