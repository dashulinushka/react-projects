import { Layout } from "antd";
import AppHeader from "./components/layout/AppHeader";
import HomePage from "./components/layout/HomePage/HomePage";
import BestOffer from "./components/layout/BestOffer/BestOffer";
import Metrics from "./components/utilites/Metrics/Metrics";

export default function App() {
  return (
    <Layout>
      <AppHeader />
      <HomePage />
      <BestOffer />
      <Metrics />
    </Layout>
  );
}
