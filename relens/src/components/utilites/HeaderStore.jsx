import { useState } from "react"; // Добавляем импорт useState
import Button from "./Button/Button";

const headerStoreStyle = {
  display: "flex",
  alignItems: "center",
  marginLeft: "auto",
};

const basketStyle = {
  height: "20px",
  marginRight: "24px",
};

export default function HeaderStore() {
  // useState и обработчик события должны быть внутри компонента!
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };

  return (
    <div style={headerStoreStyle}>
      <img src="/basket.png" alt="App Logo" style={basketStyle} />
      <Button isActive={isActive} onClick={handleClick}>
        {isActive ? "STORE" : "STORE"}
      </Button>
    </div>
  );
}
