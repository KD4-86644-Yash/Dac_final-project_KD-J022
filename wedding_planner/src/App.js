import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from '../src/Screen/Home';

import DeshBoard from './Screen/Deshboard';
import Gallery from './Screen/Gallery';
// import LocationList from './Component/Services/Location/LocationList';
import LocationService from './Screen/services/LocatonService';
import DecorationService from './Screen/services/DecorationService';


function App() {
  return (
    <div className="container--fluid">
      
      <Routes>
        <Route path ='/' element = {<Home />} />
        <Route path ='/gallery' element = {<Gallery />} />
        <Route path ='/desh' element = {<DeshBoard />} />
        <Route path ='/LocationService' element = {<LocationService />} />  
        <Route path='/DecorationService' element={<DecorationService/>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
