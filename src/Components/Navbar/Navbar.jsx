import React, { useState } from "react";
import "./Navbar.css";

const categories = [
  {
    label: "Business",
    value: "business",
  },
  {
    label: "Entertainment",
    value: "entertainment",
  },
  {
    label: "General",
    value: "general",
  },
  {
    label: "Health",
    value: "health",
  },
  {
    label: "Science",
    value: "science",
  },
  {
    label: "Sports",
    value: "sports",
  },
  {
    label: "Technology",
    value: "technology",
  },
];

const Navbar = ({
  onChangeCategory,
  onChangeSearch,
  searchQuery,
  selectedCategory,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      {/* created Hamburger */}
      <div className="navbar-hamburger" onClick={toggleMenu}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>

      {/* created a Logo */}
      <div className="navbar-brand">
        <h1>
          News<span>App</span>
        </h1>
      </div>

      {/* Created a searchbar */}
      <div className="navbar-search">
        <input
          value={searchQuery}
          onChange={(e) => onChangeSearch(e.target.value)}
          type="text"
          placeholder="Search news..."
        />
      </div>
      <div className={`navbar-links ${isOpen ? "active" : ""}`}>
        <button className="close-btn" onClick={toggleMenu}>
          &times;
        </button>
        {categories.map((cat) => (
          <p
            className={
              selectedCategory?.value === cat.value ? "active-category" : ""
            }
            onClick={() => onChangeCategory(cat)}
            key={cat.value}
          >
            {cat.label}
          </p>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
