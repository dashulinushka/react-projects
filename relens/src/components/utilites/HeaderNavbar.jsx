import { Menu } from "antd";
import { Link } from "react-router-dom";

const navStyle = {
  lineHeight: "64px",
  backgroundColor: "transparent",
  flex: 1,
  justifyContent: "center",
};

export default function HeaderNavbar() {
  return (
    <Menu
      theme="dark"
      mode="horizontal"
      style={navStyle}
      defaultSelectedKeys={["1"]}
    >
      <Menu.Item key="1">
        <Link to="/shop">Shop</Link>
      </Menu.Item>
      <Menu.Item key="2">
        <Link to="/about">About Us</Link>
      </Menu.Item>
      <Menu.Item key="3">
        <Link to="/dest">Destinations</Link>
      </Menu.Item>
      <Menu.Item key="4">
        <Link to="/contacts">Contacts</Link>
      </Menu.Item>
    </Menu>
  );
}
