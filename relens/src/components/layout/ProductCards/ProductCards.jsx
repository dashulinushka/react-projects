import { useState } from "react";
import classes from "./ProductCards.module.css";

const cardsData = [
  {
    id: 1,
    images: ["/sony-main.jpg", "/sony2.jpg", "/sony3.jpg"],
    title: "OM SYSTEM OM-3",
    brand: "Hasselblad",
    features: [
      "20MP STACKED BSI LIVE MOS MFT SENSOR",
      "TRUEPIC X ENGINE",
      '3.0" 1.62M-DOT SWIVEL TOUCHSCREEN LCD',
      "2.36M-DOT OLED ELECTRONIC VIEWFINDER",
      "5-AXIS IN-BODY IMAGE STABILIZATION",
      "COMPUTATIONAL PHOTOGRAPHY BUTTON",
      "HIGH-RES SHOT, LIVE ND & COMPOSITE MODES",
      "IP53 WEATHER-SEALED & FREEZEPROOF DESIGN",
      "SINGLE UHS-II SD CARD SLOT",
    ],
    basePrice: 1999.99,
    lensPrice: 499.99,
    lensLabel: "12-45 mm",
  },
  {
    id: 2,
    images: ["/sony-main.jpg", "/sony2.jpg", "/sony3.jpg"],
    title: "OM SYSTEM OM-3",
    brand: "Hasselblad",
    features: [
      "20MP STACKED BSI LIVE MOS MFT SENSOR",
      "TRUEPIC X ENGINE",
      '3.0" 1.62M-DOT SWIVEL TOUCHSCREEN LCD',
      "2.36M-DOT OLED ELECTRONIC VIEWFINDER",
      "5-AXIS IN-BODY IMAGE STABILIZATION",
      "COMPUTATIONAL PHOTOGRAPHY BUTTON",
      "HIGH-RES SHOT, LIVE ND & COMPOSITE MODES",
      "IP53 WEATHER-SEALED & FREEZEPROOF DESIGN",
      "SINGLE UHS-II SD CARD SLOT",
    ],
    basePrice: 1999.99,
    lensPrice: 499.99,
    lensLabel: "12-45 mm",
  },
  {
    id: 3,
    images: ["/sony-main.jpg", "/sony2.jpg", "/sony3.jpg"],
    title: "OM SYSTEM OM-3",
    brand: "Hasselblad",
    features: [
      "20MP STACKED BSI LIVE MOS MFT SENSOR",
      "TRUEPIC X ENGINE",
      '3.0" 1.62M-DOT SWIVEL TOUCHSCREEN LCD',
      "2.36M-DOT OLED ELECTRONIC VIEWFINDER",
      "5-AXIS IN-BODY IMAGE STABILIZATION",
      "COMPUTATIONAL PHOTOGRAPHY BUTTON",
      "HIGH-RES SHOT, LIVE ND & COMPOSITE MODES",
      "IP53 WEATHER-SEALED & FREEZEPROOF DESIGN",
      "SINGLE UHS-II SD CARD SLOT",
    ],
    basePrice: 1999.99,
    lensPrice: 499.99,
    lensLabel: "12-45 mm",
  },
  // ... другие камеры
];

export default function ProductCards() {
  return (
    <section className={classes.cardsSection}>
      <div className={classes["cards-container"]}>
        {cardsData.map((card) => (
          <SingleProductCard key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
}

function SingleProductCard({ data }) {
  const [withLens, setWithLens] = useState(false);

  const totalPrice = withLens
    ? (data.basePrice + data.lensPrice).toFixed(2)
    : data.basePrice.toFixed(2);

  return (
    <div className={classes["product-card"]}>
      <div className={classes["product-left"]}>
        <div className={classes["main-image"]}>
          <img src={data.images[0]} alt="main" />
          <div className={classes["icon-overlay"]}>
            <span className={classes["icon"]}>
              <img src="/shopping-bag.svg" alt="shopping-bag" />
            </span>
            <span className={classes["icon"]}>
              <img src="/dino.svg" alt="dino" />
            </span>
          </div>
        </div>
        <div className={classes["small-images"]}>
          <img src={data.images[1]} alt="alt1" />
          <img src={data.images[2]} alt="alt2" />
        </div>
      </div>

      <div className={classes["product-right"]}>
        <h2 className={classes["camera-title"]}>
          {data.title} <br /> MIRRORLESS CAMERA
        </h2>

        <span className={classes["brand-tag"]}>{data.brand}</span>

        <div className={classes["features"]}>
          <h3 className={classes["h3-features"]}>KEY FEATURES</h3>
          <ul>
            {data.features.map((feature, i) => (
              <li className={classes["li-cards"]} key={i}>
                {" "}
                {feature}
              </li>
            ))}
          </ul>
        </div>

        <div className={classes["price"]}>{totalPrice}$</div>

        <div className={classes["lens-options"]}>
          <span
            className={!withLens ? classes["selected"] : ""}
            onClick={() => setWithLens(false)}
          >
            NO LENS
          </span>
          <span
            className={withLens ? classes["selected"] : ""}
            onClick={() => setWithLens(true)}
          >
            {data.lensLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
