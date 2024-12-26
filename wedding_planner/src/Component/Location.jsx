import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";
import "../css/Llocation.css"
import Ahmedabad from "../image/Ahmedabad.jpg";
import marindrive from "../image/marindrive.jpg";
import rszloop from "../image/rszloop.jpg";

function Location() {
    return ( 
      <div className="container">
      <h2 className="text-center mb-4">Major Locations</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col" style={{height: 420}}>
              <div className="card h-100 hover-effect">
                  <img src={marindrive} className="card-img-top" alt="Location 1"style={{height: 420}} />
                  <div className="card-body">
                    <center>

                      <h5 className="card-title">Mumbai</h5>
                    </center>
                      </div>
              </div>
          </div>
          <div className="col" style={{height: 420}}>
              <div className="card h-100 hover-effect">
                  <img src={Ahmedabad} className="card-img-top" alt="Location 2" style={{height: 420}}/>
                  <div className="card-body">
                    <center>

                      <h5 className="card-title">Ahemdabad</h5>
                    </center>
                  </div>
              </div>
          </div>
          <div className="col" style={{height: 420}}>
              <div className="card h-100 hover-effect" >
                  <img src={rszloop} className="card-img-top" alt="Location 3" style={{height: 420}}/>
                  <div className="card-body" >
                      <center>

                      <h5 className="card-title">Darjeeling</h5>
                      </center>
                      </div>
              </div>
          </div>
      </div>
  </div>
     );
}

export default Location;