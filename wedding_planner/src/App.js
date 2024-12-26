import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Screen/Home';
import DeshBoard from './Screen/Deshboard';
import Gallery from './Screen/Gallery';
import MainService from './Screen/MainService';
import Logins from './Screen/Login';
import User from './Screen/User';
import Vendor from './Screen/Vendor';

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
        
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
