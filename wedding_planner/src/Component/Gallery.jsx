import "D:/Dac/Dac_final-project_KD-J022/wedding_planner/src/css/gallery.css"

function Gallery() {
    const images = [
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
        "https://via.placeholder.com/300x200",
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