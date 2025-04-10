import { Routes, Route } from "react-router-dom";
import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import AppFooter from "./components/layout/AppFooter/AppFooter";

import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Home from "./pages/Home";
import Products from "./pages/Products";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/" element={<Home />} />
      </Routes>
      <AppFooter />
    </Layout>
  );
}
