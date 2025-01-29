import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/Screen/Home';

import DeshBoard from './Screen/Deshboard';
import Gallery from './Screen/Gallery';

import MainService from './Screen/MainService';
import Logins from './Screen/Login';
import User from './Screen/User';
import Vendor from './Screen/Vendor';

import AboutUs from './Screen/AboutUs';
import ContactUs from './Screen/ContactUs';
// import LocationList from './Component/Services/Location/LocationList';
import LocationService from './Screen/services/LocatonService';
import DecorationService from './Screen/services/DecorationService';
import Cart from './Component/Cart/Cart';
import VendorDeskboard from './Screen/VendorDeskboard';
import USerDeskboard from './Screen/UserDeskboard';
import PhotographerProfile from './Screen/services/Subservices/PhotographerProfile';

import MakeUp from './Screen/services/MakeUp';
import Photography from './Screen/services/Photography';
import Invites from './Screen/services/Invites';
import Food from './Screen/services/Food';

function App() {
  return (
    <div className="container--fluid">
      
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/gallery' element = {<Gallery />} />
        <Route path ='/desh' element = {<DeshBoard />} />

        <Route path ='/services' element = {<MainService />} />
        <Route path ='/login' element = {<Logins />} />
        <Route path ='/user' element = {<User />} />
        <Route path ='/vendor' element = {<Vendor />} />

        <Route path ='/about-us' element = {<AboutUs />} />
        <Route path ='/contact-us' element = {<ContactUs />} />

        <Route path ='/services/locationservice' element = {<LocationService />} />  
        <Route path ='/services/decorationservice' element={<DecorationService/>} />
                
        <Route path='/services/food' element ={<Food/>}/>
        <Route path='/services/MakeUp' element ={<MakeUp/>}/>
        <Route path='/services/Invites' element ={<Invites/>}/>
        <Route path='/services/Photography' element ={<Photography/>}/>
        
        <Route path ='/cart' element = {<Cart />} />

        <Route path ='/vendor_profile' element = {<VendorDeskboard />} />
        <Route path ='/user_profile' element = {<USerDeskboard />} />
        <Route path ='/photographerprofile' element = {<PhotographerProfile />} />        

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
