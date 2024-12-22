import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/service.css"

function OurService() {
    return ( 
      <div className="container">
      <h2 className="text-center mb-4">Frequent Services</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
              <div className="service-item">
                  <div className="card h-100 hover-effect">
                      <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 1" />
                      <div className="card-body">
                          <h5 className="card-title">Service 1</h5>
                          <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                      </div>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100 hover-effect">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 2" />
                  <div className="card-body">
                      <h5 className="card-title">Service 2</h5>
                      <p className="card-text">This is a short card.</p>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100 hover-effect">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Service 3" />
                  <div className="card-body">
                      <h5 className="card-title">Service 3</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
     );
}

export default OurService;