import React from "react";
import "./SortingProducts.css";

export default function SortingProducts() {
  return (
    <section className="sort">
      <div className="products-wrapper">
        <div className="products-content">
          <h1 className="products-title">Products</h1>
          <div className="products-menu">
            <span className="tag tag-selected">All</span>
            <span className="tag tag-unselected">Hasselblad</span>
            <span className="tag tag-unselected">Canon</span>
            <span className="tag tag-unselected">Fujifilm</span>
            <span className="tag tag-unselected">Sony</span>
            <span className="tag tag-unselected">Nikon</span>
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
