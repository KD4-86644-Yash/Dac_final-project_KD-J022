import "../css/service.css"
import Decor from "../image/Decor.jpeg";
import weddingPhoto from "../image/weddingPhoto.jpg"
import venue from "../image/venue.webp"

function OurService() {
    return ( 
      <div className="container">
      <h2 className="text-center mb-4">Frequent Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4" >
          <div className="col">
              <div className="service-item">
                  <div className="card h-100 hover-effect">
                      <img src={Decor} className="card-img-top" alt="Service 1"/>
                      <div className="card-body">
                          <h5 className="card-title">Decor</h5>
                          <p>From elegant flower arrangements & beautiful table settings to specialty lightings & creative backdrops, we ensure the ambiance is perfect for your big day.</p>
                          </div>
                  </div>
              </div>
          </div>
          <div className="col" style={{height: 438}}>
              <div className="card h-100 hover-effect" >
                  <img src={weddingPhoto} className="card-img-top" alt="Service 2" style={{height: 250}}/>
                  <div className="card-body">
                      <h5 className="card-title">Photography</h5>
                      <p>Let the beautiful moments of your wedding celebrations be captured in stunning detail & make memories of your big day that last a lifetime.</p>
                      </div>
              </div>
          </div>
          <div className="col" style={{height: 438}}>
              <div className="card h-100 hover-effect">
                  <img src={venue} className="card-img-top" alt="Service 3" style={{height: 400}}/>
                  <div className="card-body">
                      <h5 className="card-title">Venue</h5>
                      <p>We match your wedding vision to the perfect location. From romantic garden settings to modern cityscapes, we find the perfect venue for your unique wedding style.</p>
                      </div>
              </div>
          </div>
      </div>
  </div>
     );
}

export default OurService;