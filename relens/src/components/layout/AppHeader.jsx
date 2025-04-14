import { Layout } from "antd";
import { Link } from "react-router-dom";
import HeaderNavbar from "../utilites/HeaderNavbar/HeaderNavbar";
import HeaderStore from "../utilites/HeaderStore/HeaderStore";
import { UpCircleOutlined } from "@ant-design/icons";

const headerStyle = {
  textAlign: "center",
  color: "#fff",
  height: 64,
  paddingInline: 46,
  lineHeight: "64px",
  backgroundColor: "#191918",
};

const logoStyle = {
  height: "20px",
};

const upArrowStyle = {
  position: "fixed",
  right: "20px",
  bottom: "20px",
  fontSize: "24px",
  color: "#fff",
  cursor: "pointer",
  zIndex: "300",
  transition: "all 0.3s",
  "&:hover": {
    color: "#1890ff",
  },
};

export default function AppHeader() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Layout.Header style={headerStyle}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "0px 42px 0px 42px",
          }}
        >
          <Link to="/home">
            <img src="/logo.svg" alt="App Logo" style={logoStyle} />
          </Link>
          <HeaderNavbar />
          <HeaderStore />
        </div>
      </Layout.Header>

      {/* Кнопка прокрутки наверх */}
      <UpCircleOutlined style={upArrowStyle} onClick={scrollToTop} />
    </>
  );
}
