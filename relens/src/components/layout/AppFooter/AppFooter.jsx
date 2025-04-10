import React from "react";
import { Link } from "react-router-dom";
import "./AppFooter.css"; // обычный CSS

const logoStyle = {
  height: "20px",
};

export default function AppFooter() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <Link to="/shop" className="footer-logo">
          <img src="/RelensBlack.svg" alt="App Logo" style={logoStyle} />
        </Link>
        <div className="copyright">© Copyright 2025, All Rights Reserved</div>

        <div className="info-content">
          <ul className="icons">
            <li className="icons-item">
              <a
                href="https://web.telegram.org/"
                target="_blank"
                className="info-icon"
              >
                <img
                  src="/telegram.svg"
                  alt="telegram"
                  className="icon-footer"
                />
              </a>
            </li>
            <li className="icons-item">
              <a
                href="https://facebook.com"
                target="_blank"
                className="info-icon"
              >
                <img
                  src="/instagram.svg"
                  alt="instagram"
                  className="icon-footer"
                />
              </a>
            </li>
            <li className="icons-item">
              <a
                href="https://instagram.com"
                target="_blank"
                className="info-icon"
              >
                <img
                  src="/facebook.svg"
                  alt="facebook"
                  className="icon-footer"
                />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
