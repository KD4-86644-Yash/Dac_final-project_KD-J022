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
      description: "Banquet Halls, Marriage Garden",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Banquet Halls", path: "/services/locationservice" },
        { label: "Marriage Gardens", path: "/venues/marriage-gardens" },
      ],
    },
    {
      title: "Makeup",
      description: "Bridal Makeup, Family Makeup",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Makeup Services", path: "/makeup/bridal-makeup" },
      ],
    },
    {
      title: "Planning & Decor",
      description: "Wedding Planners, Decorators",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Theme Decor", path: "/services/decorationservice" },
      ],
    },
    {
      title: "Photographers",
      description: "Photographers",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Wedding Shoot", path: "/photographers/candid" },
        { label: "PreWedding Shoot", path: "/photographers/traditional" },
      ],
    },
    {
      title: "Food",
      description: "Food Services",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Food Services", path: "/pre-wedding-shoot/outdoor" },
      ],
    },
    {
      title: "Sound System",
      description: "Sound System & Bands",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Sound System", path: "/bridal-wear/lehengas" },
      ],
    },
    {
      title: "Invites & Gifts",
      description: "Invites & Gifts",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Invites", path: "/groom-wear/sherwani" },
        { label: "Gifts", path: "/groom-wear/suits" },
      ],
    },
    {
      title: "Mehndi",
      description: "Mehendi Artist",
      imageUrl: "https://via.placeholder.com/300x150",
      dropdownItems: [
        { label: "Mehndi", path: "/mehndi/bridal" },
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
