// import "../css/Gallery/gallery.css"
// import "E:/CDAC/Project/git_pull_data/Dac_final-project_KD-J022/wedding_planner/src/css/Gallery/gallery.css"
import "../../../src/css/Gallery/gallery.css"

function GalleryContainer() {
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
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