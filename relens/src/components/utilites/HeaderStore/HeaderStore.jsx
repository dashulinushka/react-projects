import { useState } from "react";
import Button from "../Button/Button";
import { Link } from "react-router-dom";
import basketImage from "/basket.svg"; // Импорт как изображение
import "./HeaderStore.css"; // Импорт CSS

const headerStoreStyle = {
  display: "flex",
  alignItems: "center",
};

export default function HeaderStore() {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={headerStoreStyle}>
      <Link to="/products">
        <img src={basketImage} alt="Basket" className="basket" />
      </Link>

      <Link to="/products" style={{ textDecoration: "none" }}>
        <Button isActive={isActive} onClick={handleClick}>
          STORE
        </Button>
      </Link>
    </div>
  );
}
