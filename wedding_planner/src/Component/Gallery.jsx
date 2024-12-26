import "../css/gallery.css"
import homegallery1 from "../image/homegallery1.webp"
import homegallery2 from "../image/homegallery2.jpg"
import homegallery3 from "../image/homegallery3.jpeg"

function Gallery() {
    const images = [
        homegallery1,
        homegallery2,
        homegallery3,
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200"
    ];

    return (
        <div className="container my-5">
            <h2 className="text-center mb-4">Gallery</h2>
            <div className="row">
                {images.map((image, index) => (
                    <div className="col-md-4 col-sm-6 mb-4" key={index}>
                        <div className="gallery-item">
                            <img src={image} alt={`Gallery item ${index + 1}`} className="img-fluid" />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Gallery;