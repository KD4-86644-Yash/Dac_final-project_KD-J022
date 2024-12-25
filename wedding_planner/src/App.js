import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/Screen/Home';

import DeshBoard from './Screen/Deshboard';
import Gallery from './Screen/Gallery';
import AboutUs from './Screen/AboutUs';
import ContactUs from './Screen/ContactUs';
// import LocationList from './Component/Services/Location/LocationList';
import LocationService from './Screen/services/LocatonService';
import DecorationService from './Screen/services/DecorationService';
import Cart from './Component/Cart/Cart';
import VendorDeskboard from './Screen/VendorDeskboard';
import USerDeskboard from './Screen/UserDeskboard';
function App() {
  return (
    <div className="container--fluid">
      
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/gallery' element = {<Gallery />} />
        <Route path ='/desh' element = {<DeshBoard />} />

        <Route path ='/about-us' element = {<AboutUs />} />
        <Route path ='/contact-us' element = {<ContactUs />} />

        <Route path ='/LocationService' element = {<LocationService />} />  
        <Route path='/DecorationService' element={<DecorationService/>} />
        <Route path ='/cart' element = {<Cart />} />
        <Route path ='/vendor' element = {<VendorDeskboard />} />
        <Route path ='/user' element = {<USerDeskboard />} />

      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
