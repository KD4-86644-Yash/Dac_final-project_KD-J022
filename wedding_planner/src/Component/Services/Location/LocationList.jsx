// import "../../../css/services/Llocation.css"
import "../../../css/services/locaion.css";
import HeaderBar from "./ServiceSearchHeader";
// import loca1 from "../../../image/loca1.jpeg"
import Location2 from  "../../../image/location2.png";
import location1 from "../../../image/location1.jpeg";
import Location3  from  "../../../image/location3.png";

function LocationList() {
    return ( 
        <div class="container my-4">
          <HeaderBar/>

        {/* <div class="container my-4">
       <center>
      <h1 class="center">Location Services</h1>
    </center>
    </div> */}
 
        {/* <!-- Card 1 --> */}
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src={location1} class="img-fluid rounded-start" alt="Venue Image"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 class="card-title">Rajhans Greens</h5>
                    <p class="card-text"><small class="text-muted">Kanakapura Road, Bangalore</small></p>
                    <p class="card-text"><i class="bi bi-geo-alt"></i> Banquet Halls, Marriage Garden</p>
                    <p class="card-text"><i class="bi bi-people"></i> 70-1500 pax</p>
                  </div>
                  {/* <div class="text-end">
                    <p><span class="badge bg-danger">Handpicked</span></p>
                    <p><i class="bi bi-star-fill text-warning"></i> 5.0 (9 reviews)</p>
                  </div> */}
                </div>
                <p class="card-text">₹ 8,50,000 Rental cost</p>
                <p>
                  <span class="badge bg-secondary">100 Rooms</span>
                  <span class="badge bg-secondary">Indoor</span>
                  <span class="badge bg-secondary">Outdoor</span>
                  <span class="badge bg-secondary">+4 more</span>
                </p>
                <p class="card-text">Rajhans Greens, a luscious venue based in Bangalore is perfect for the grande affair like your wedding...</p>
                <button class="btn btn-pink">Add to Card</button>
              </div>
            </div>
          </div>
        </div>
      
        {/* <!-- Card 2 --> */}
        <div class="card mb-3" >
          <div class="row g-0">
            <div class="col-md-4">
              <img src= {Location3} class="img-fluid rounded-start" alt="Venue Image"/>
            </div>
            <div class="col-md-8">
              <div class="card-body">
                <div class="d-flex justify-content-between align-items-start">
                  <div>
                    <h5 class="card-title">Bravura Gold Resort, Meerut</h5>
                    <p class="card-text"><small class="text-muted">Partapur, Meerut</small></p>
                    <p class="card-text"><i class="bi bi-geo-alt"></i> 4 Star & Above Wedding Hotels</p>
                    <p class="card-text"><i class="bi bi-people"></i> 60-5000 pax</p>
                  </div>
                  {/* <div class="text-end">
                    <p><span class="badge bg-danger">Handpicked</span></p>
                    <p><i class="bi bi-star-fill text-warning"></i> 4.9 (86 reviews)</p>
                  </div> */}
                </div>
                <p class="card-text">
                  Veg: ₹ 2,100 per plate<br/>
                  Non-Veg: ₹ 2,399 per plate
                </p>
                <p>
                  <span class="badge bg-secondary">64 Rooms</span>
                  <span class="badge bg-secondary">Indoor</span>
                  <span class="badge bg-secondary">Outdoor</span>
                  <span class="badge bg-secondary">+5 more</span>
                </p>
                <p class="card-text">Bravura Gold Resort is one of the largest and the most beautiful venues located in Meerut...</p>
                <button class="btn btn-pink">Add to Card</button>
              </div>
            </div>
          </div>
        </div>


        <div class="card mb-3">
    <div class="row g-0">
      <div class="col-md-4">
        <img src={Location2} class="img-fluid rounded-start" alt="Venue Image"/>
      </div>
      <div class="col-md-8">
        <div class="card-body">
          <div class="d-flex justify-content-between align-items-start">
            <div>
              <h5 class="card-title">The Lalit Ashok</h5>
              <p class="card-text"><small class="text-muted">Seshadripuram, Bangalore</small></p>
              <p class="card-text"><i class="bi bi-geo-alt"></i> 5-Star Banquet</p>
              <p class="card-text"><i class="bi bi-people"></i> 100-2000 pax</p>
            </div>
            {/* <div class="text-end">
              <p><span class="badge bg-danger">Handpicked</span></p>
              <p><i class="bi bi-star-fill text-warning"></i> 4.8 (120 reviews)</p>
            </div> */}
          </div>
          <p class="card-text">₹ 15,00,000 Rental cost</p>
          <p>
            <span class="badge bg-secondary">150 Rooms</span>
            <span class="badge bg-secondary">Indoor</span>
            <span class="badge bg-secondary">Outdoor</span>
            <span class="badge bg-secondary">+6 more</span>
          </p>
          <p class="card-text">The Lalit Ashok offers one of the most prestigious venues in Bangalore with world-class facilities...</p>
          <button class="btn btn-pink">Add to Card</button>
        </div>
      </div>
    </div>
    </div>
      </div>
    


     );
}

export default LocationList;