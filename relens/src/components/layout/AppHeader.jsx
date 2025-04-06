import { Layout } from "antd";
import HeaderNavbar from "../utilites/HeaderNavbar";
import HeaderStore from "../utilites/HeaderStore";

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

export default function AppHeader() {
  return (
    <Layout.Header style={headerStyle}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          padding: "0px 82px 0px 82px",
        }}
      >
        <img src="/logo.png" alt="App Logo" style={logoStyle} />
        <HeaderNavbar />
        <HeaderStore />
      </div>
    </Layout.Header>
  );
}
