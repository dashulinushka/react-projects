import BestOffer from "../components/layout/BestOffer/BestOffer";
import HomeCards from "../components/layout/HomeCards/HomeCards";
import HomePage from "../components/layout/HomePage/HomePage";
import LearnMore from "../components/layout/LearnMore.jsx/LearnMore";
import Metrics from "../components/utilites/Metrics/Metrics";
import Subscribe from "../components/utilites/Subscribe/Subcribe";

export default function Home() {
  return (
    <>
      <HomePage />
      <BestOffer />
      <Metrics />
      <HomeCards />
      <LearnMore />
      <Subscribe />
    </>
  );
}
