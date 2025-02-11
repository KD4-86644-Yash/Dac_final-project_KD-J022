import "../../css/Gallery/gallery.css";
// import "../../../src/css/Gallery/gallery.css"
import homegallery1 from "../../image/homegallery1.webp"
import homegallery2 from "../../image/homegallery2.jpg"
import homegallery3 from "../../image/homegallery3.jpeg"
import SoundMainImage from "../../image/SoundMainImage.jpg";
import VenueMainImage from "../../image/MainVenue.jpg";
import MakeupMainImage from "../../image/MainMakeup.jpg";
import DecorationMainImage from "../../image/MainDecoration.jpg";
import PhotographerMainImage from "../../image/MainPhotography.jpg";
import FoodMainImage from "../../image/MainFood.jpg";
import InvitationMainImage from "../../image/MainGiftAndInvitation.jpg";
import MehndiMainImage from "../../image/MainMehndi.jpg";

function GalleryContainer() {
    const images = [
        homegallery1,
        homegallery2,
        homegallery3,
        SoundMainImage,
        VenueMainImage,
        MakeupMainImage,
        DecorationMainImage,
        PhotographerMainImage,
        FoodMainImage,
        InvitationMainImage,
        MehndiMainImage,
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