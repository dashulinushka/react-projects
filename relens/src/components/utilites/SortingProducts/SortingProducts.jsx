import React, { useState } from "react";
import "./SortingProducts.css";

export default function SortingProducts() {
  const [selectedTag, setSelectedTag] = useState("All");
  const tags = ["All", "Hasselblad", "Canon", "Fujifilm", "Sony", "Nikon"];

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  return (
    <section className="sort">
      <div className="products-wrapper">
        <div className="products-content">
          <h1 className="products-title">Products</h1>
          <div className="products-menu">
            {tags.map((tag) => (
              <span
                key={tag}
                className={`tag ${selectedTag === tag ? "tag-selected" : "tag-unselected"}`}
                onClick={() => handleTagClick(tag)}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="search">
          <input type="text" placeholder="Search..." />
          <svg
            className="search-icon"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12.9 14.32a8 8 0 1 1 1.41-1.41l5.35 5.33-1.42 1.42-5.33-5.34zM8 14A6 6 0 1 0 8 2a6 6 0 0 0 0 12z" />
          </svg>
        </div>
      </div>
    </section>
  );
}
