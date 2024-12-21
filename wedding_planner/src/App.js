import { Route,Routes } from 'react-router-dom';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Home from './Screen/Home';

function App() {
  return (
    <div className="container--fluid">
      
      <Routes>
        <Route path ='/' element = {<Home />} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
