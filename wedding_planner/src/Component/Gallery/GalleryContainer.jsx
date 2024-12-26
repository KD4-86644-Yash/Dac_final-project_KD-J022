import "../../css/Gallery/gallery.css";
// import "../../../src/css/Gallery/gallery.css"
import homegallery1 from "../../image/homegallery1.webp"
import homegallery2 from "../../image/homegallery2.jpg"
import homegallery3 from "../../image/homegallery3.jpeg"

function GalleryContainer() {
    const images = [
        homegallery1,
        homegallery2,
        homegallery3,
        "image4.jpg",
        "image5.jpg",
        "image6.jpg",
        "image7.jpg",
        "image8.jpg",
        "image9.jpg",
        "image10.jpg",
        // Add more image URLs here
    ];

    return (
        <div className="gallery-container">
            <h1 className="gallery-title">Wedding Memories</h1>
            <div className="gallery-grid">
                {images.map((image, index) => (
                    <div className="gallery-item" key={index}>
                        <img src={image} alt={`Wedding ${index + 1}`} className="gallery-image" />
                    </div>
                ))}
            </div>
        </div>
    );
}

export default GalleryContainer;