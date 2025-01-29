import React, { useState } from "react";
import { Link } from "react-router-dom"; // Ensure react-router-dom is installed
import "../../css/services/MainService.css";

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
      description: "Banquet Halls, Marriage Garden / Lawn...",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Banquet Halls", path: "/services/locationservice" },
        { label: "Marriage Gardens", path: "/venues/marriage-gardens" },
        { label: "Open Lawns", path: "/venues/open-lawns" },
      ],
    },
    {
      title: "Makeup",
      description: "Bridal Makeup, Family Makeup",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Bridal Makeup", path: "/services/MakeUp" },
        { label: "Party Makeup", path: "/makeup/party-makeup" },
        { label: "HD Makeup", path: "/makeup/hd-makeup" },
      ],
    },
    {
      title: "Planning & Decor",
      description: "Wedding Planners, Decorators",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Theme Decor", path: "/services/decorationservice" },
        { label: "Lighting", path: "/planning-decor/lighting" },
        { label: "Floral Decoration", path: "/planning-decor/floral-decoration" },
      ],
    },
    {
      title: "Photographers",
      description: "Photographers",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Candid Photography", path: "/services/Photography" },
        { label: "Traditional Photography", path: "/photographers/traditional" },
        { label: "Videography", path: "/photographers/videography" },
      ],
    },
    {
      title: "Pre Wedding Shoot",
      description: "Pre Wedding Shoot Locations, Pre Wed...",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Outdoor Locations", path: "/pre-wedding-shoot/outdoor" },
        { label: "Studio Shoots", path: "/pre-wedding-shoot/studio" },
        { label: "Destination Shoots", path: "/pre-wedding-shoot/destination" },
      ],
    },
    {
      title: "Invites and Gifts",
      description: "Bridal Lehengas, Kanjeevaram / Silk Sa...",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Lehengas", path: "/services/Invites" },
        { label: "Silk Sarees", path: "/bridal-wear/silk-sarees" },
        { label: "Designer Gowns", path: "/bridal-wear/designer-gowns" },
      ],
    },
    {
      title: "Food",
      description: "Food Catering services...",
      imageUrl: "/wedding_planner/src/image/food1.jpg",
      dropdownItems: [
        { label: "Indian Food", path: "/services/food" },
      ],
    },
    {
      title: "Mehndi",
      description: "Mehendi Artist",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Bridal Mehndi", path: "/mehndi/bridal" },
        { label: "Arabic Mehndi", path: "/mehndi/arabic" },
        { label: "Minimal Mehndi", path: "/mehndi/minimal" },
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
