import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/slider.css"

function HomeSilder() {
    return ( 
    
        <div id="carouselExampleAutoplaying" className="carousel slide carousel-fade" data-bs-ride="carousel">
  <div className="carousel-inner" >
    <div className="carousel-item active" data-bs-interval="1000">
      <img src="https://www.famepark.com.au/wp-content/uploads/2023/01/Having_Traditional_Indian_Ceremony_On_Starship.jpg" className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval="3000">
      <img src="https://www.dipakstudios.com/gallery/1535303839_E2I6831.jpg" className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://media.gettyimages.com/id/2155737619/video/family-and-friends-showering-floral-blessings-on-bride-and-groom-during-haldi-ceremony.jpg?s=640x640&k=20&c=UAys0g4l1Ys_tvucGWRLXyUFFJvTtK97kVxpHcXJyPo=" className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
     );
}

export default HomeSilder;