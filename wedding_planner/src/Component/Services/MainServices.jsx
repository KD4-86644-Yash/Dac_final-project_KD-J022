import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import "../../css/services/MainService.css";
import SoundMainImage from "../../image/SoundMainImage.jpg";
import VenueMainImage from "../../image/MainVenue.jpg";
import MakeupMainImage from "../../image/MainMakeup.jpg";
import DecorationMainImage from "../../image/MainDecoration.jpg";
import PhotographerMainImage from "../../image/MainPhotography.jpg";
import FoodMainImage from "../../image/MainFood.jpg";
import InvitationMainImage from "../../image/MainGiftAndInvitation.jpg";
import MehndiMainImage from "../../image/MainMehndi.jpg";


function MainServices() {
  const [visibleDropdown, setVisibleDropdown] = useState(null);

  const CategoryCard = ({ title, description, imageUrl, dropdownItems, index }) => {
    const toggleDropdown = () => {
      setVisibleDropdown(visibleDropdown === index ? null : index);
    };

    return (
      <div className="category-card">
        <img src={imageUrl} alt={title} className="category-image" />
        <div className="category-content">
          <h3 onClick={toggleDropdown} style={{ cursor: "pointer" }}>
            {title}
          </h3>
          <p>{description}</p>
          {visibleDropdown === index && (
            <div className="dropdown">
              <ul>
                {dropdownItems.map((item, i) => (
                  <li key={i}>
                    <Link className="nav-link text-dark" to={item.path}>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    );
  };

  const categories = [
    {
      title: "Venues",
      description: "Banquet Halls, Marriage Garden",
      imageUrl: VenueMainImage,
      dropdownItems: [
        { label: "Banquet Halls", path: "/services/locationservice" },
        { label: "Marriage Gardens", path: "/venues/marriage-gardens" },
      ],
    },
    {
      title: "Makeup",
      description: "Bridal Makeup, Family Makeup",
      imageUrl: MakeupMainImage,
      dropdownItems: [
        { label: "Makeup Services", path: "/services/MakeUp },
      ],
    },
    {
      title: "Planning & Decor",
      description: "Wedding Planners, Decorators",
      imageUrl: DecorationMainImage,
      dropdownItems: [
        { label: "Theme Decor", path: "/services/decorationservice" },
      ],
    },
    {
      title: "Photographers",
      description: "Photographers",
      imageUrl: PhotographerMainImage,
      dropdownItems: [

        { label: "Wedding Shoot", path: "/services/Photography" },
        { label: "PreWedding Shoot", path: "/photographers/traditional" },
      ],
    },
    {
      title: "Food",
      description: "Food Services",
      imageUrl: FoodMainImage,
      dropdownItems: [
        { label: "Food Services", path: "/services/food" },
      ],
    },
    {
      title: "Sound System",
      description: "Sound System & Bands",
      imageUrl: SoundMainImage,
      dropdownItems: [
        { label: "Sound System", path: "/services/sound-system-service" },
      ],
    },
    {
      title: "Invites & Gifts",
      description: "Invites & Gifts",
      imageUrl: InvitationMainImage,
      dropdownItems: [
        { label: "Invites", path: "/groom-wear/sherwani" },
        { label: "Gifts", path: "/groom-wear/suits" },

      ],
    },
    {
      title: "Mehndi",
      description: "Mehendi Artist",
      imageUrl: MehndiMainImage,
      dropdownItems: [
        { label: "Mehndi", path: "/services/mehndi-service" },
      ],
    },
  ];

  return (
    <div className="app-container">
      <h1>Wedding Categories</h1>
      <div className="categories-grid">
        {categories.map((category, index) => (
          <CategoryCard
            key={index}
            index={index}
            title={category.title}
            description={category.description}
            imageUrl={category.imageUrl}
            dropdownItems={category.dropdownItems}
          />
        ))}
      </div>
    </div>
  );
}

export default MainServices;
