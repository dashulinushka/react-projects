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
          <Route path="/shop" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/dest" element={<Contacts />} />
          <Route path="/contacts" element={<Products />} />
          <Route
            path="/"
            element={<Home />}
          />
        </Routes>
        <AppFooter />
      </Layout>
  );
}
