import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Screen/Home';
import DeshBoard from './Screen/Deshboard';
import Gallery from './Screen/Gallery';
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
        <Route path ='/cart' element = {<Cart />} />
        <Route path ='/vendor' element = {<VendorDeskboard />} />
        <Route path ='/user' element = {<USerDeskboard />} />
        
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
