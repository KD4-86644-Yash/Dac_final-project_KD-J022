import Footer from "../../Component/Footer";
import NavBar from "../../Component/NavBar";
import FoodList from "../../Component/Services/Food/FoodList";


function Food(){
    return(
        <div>
        <NavBar/>       
        {/* <FoodList/>         */}
        <FoodList/>
        <Footer/>
        </div>

    );
}
export default Food;


