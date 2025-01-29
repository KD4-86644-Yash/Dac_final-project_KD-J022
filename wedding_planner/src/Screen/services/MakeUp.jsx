import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";

import MakeupService from './../../Component/Services/MakeUp/MakeUpService';

function MakeUp(){
    return(
        <div>
        <NavBar/>       
        <MakeupService/>        
        <Footer/>
        </div>

    );
}
export default MakeUp;


