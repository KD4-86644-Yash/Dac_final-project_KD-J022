import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/Llocation.css"

function Location() {
    return ( 
      <div className="container">
      <h2 className="text-center mb-4">Major Locations</h2>
      <div className="row row-cols-1 row-cols-md-3 g-4">
          <div className="col">
              <div className="card h-100 hover-effect">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Location 1" />
                  <div className="card-body">
                      <h5 className="card-title">Mumbai</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100 hover-effect">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Location 2" />
                  <div className="card-body">
                      <h5 className="card-title">Ahemdabad</h5>
                      <p className="card-text">This is a short card.</p>
                  </div>
              </div>
          </div>
          <div className="col">
              <div className="card h-100 hover-effect">
                  <img src="https://via.placeholder.com/150" className="card-img-top" alt="Location 3" />
                  <div className="card-body">
                      <h5 className="card-title">Darjeeling</h5>
                      <p className="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
                  </div>
              </div>
          </div>
      </div>
  </div>
     );
}

export default Location;