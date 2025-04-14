import React from "react";
import { Menu } from "antd";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

// Основные стили меню
const menuStyle = {
  width: "498px",
  height: "40px",
  borderRadius: "12px",
  padding: "12px 20px",
  marginLeft: "60px",
  fontFamily: '"Montserrat", sans-serif',
  fontWeight: 600,
  fontSize: "12px",
  lineHeight: "130%",
  textTransform: "uppercase",
  color: "#FCFEFE",
  backgroundColor: "transparent",
  display: "flex",
  justifyContent: "center",
  border: "none",
};

// Базовые стили для пунктов меню
const baseMenuItemStyle = {
  color: "#FCFEFE",
  margin: "0 10px",
  padding: "0",
  height: "auto",
  backgroundColor: "transparent",
  border: "none",
  display: "flex",
  alignItems: "center",
  transition: "none",
};

// Стили для активного пункта
const activeMenuItemStyle = {
  ...baseMenuItemStyle,
  color: "#E3642E",
};

// Стили для hover
const hoverMenuItemStyle = {
  ...baseMenuItemStyle,
  color: "#E3642E",
  transform: "translateY(0px)",
};

// Стили для ссылок
const linkStyle = {
  color: "inherit",
};

export default function HeaderNavbar() {
  const location = useLocation();
  const [hoveredKey, setHoveredKey] = useState(null);

  // Определяем активный маршрут
  const isActive = (path) => {
    return location.pathname === path;
  };

  // Функция для получения стилей пункта меню
  const getMenuItemStyle = (key, path) => {
    if (isActive(path)) {
      return activeMenuItemStyle;
    }
    if (hoveredKey === key) {
      return hoverMenuItemStyle;
    }
    return baseMenuItemStyle;
  };

  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={menuStyle}
      selectedKeys={[
        isActive("/home")
          ? "1"
          : isActive("/products")
            ? "2"
            : isActive("/about")
              ? "3"
              : isActive("/contacts")
                ? "4"
                : "",
      ]}
      overflowedIndicator={null}
      selectable={false}
    >
      <Menu.Item
        key="1"
        style={getMenuItemStyle("1", "/home")}
        onMouseEnter={() => setHoveredKey("1")}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <Link to="/home" style={linkStyle}>
          Shop
        </Link>
      </Menu.Item>
      <Menu.Item
        key="2"
        style={getMenuItemStyle("2", "/products")}
        onMouseEnter={() => setHoveredKey("2")}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <Link to="/products" style={linkStyle}>
          Product
        </Link>
      </Menu.Item>
      <Menu.Item
        key="3"
        style={getMenuItemStyle("3", "/about")}
        onMouseEnter={() => setHoveredKey("3")}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <Link to="/about" style={linkStyle}>
          About us
        </Link>
      </Menu.Item>
      <Menu.Item
        key="4"
        style={getMenuItemStyle("4", "/contacts")}
        onMouseEnter={() => setHoveredKey("4")}
        onMouseLeave={() => setHoveredKey(null)}
      >
        <Link to="/contacts" style={linkStyle}>
          Contacts
        </Link>
      </Menu.Item>
    </Menu>
  );
}
