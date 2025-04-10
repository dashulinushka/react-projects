import { Card } from "antd";
import classes from "./HomeCards.module.css"; // Можно использовать `styles` или `classes` - это просто имя переменной

const { Meta } = Card;

const cardsData = [
  {
    id: 1,
    imageUrl: "/camera1.png",
    title: "Europe Street beat",
    description: "www.instagram.com",
    additionalText: "LEICA",
  },
  {
    id: 2,
    imageUrl: "/camera1.png",
    title: "Urban Style",
    description: "www.facebook.com",
    additionalText: "CANON",
  },
  {
    id: 3,
    imageUrl: "/camera1.png",
    title: "Urban Style",
    description: "www.facebook.com",
    additionalText: "FUJIFILM",
  },
  {
    id: 4,
    imageUrl: "/camera1.png",
    title: "Urban Style",
    description: "www.facebook.com",
    additionalText: "HASSELBLAD",
  },
];

export default function HomeCards() {
  return (
    <section className={classes["cardsSection"]}>
      <div className={classes["h2Container"]}>
        <h2 className={classes["sectionTitle"]}>
          POPULAR
          <br /> PRODUCTS
        </h2>
        <img alt="ellipse" src="/Ellipse.png" className={classes["ellipse"]} />
        <img
          alt="ellipse"
          src="/Ellipse.png"
          className={classes["ellipseLeft"]}
        />
      </div>

      <div className={classes["cards-container"]}>
        {cardsData.map((card) => (
          <Card
            key={card.id}
            hoverable
            className={classes["custom-card"]}
            cover={
              <div className={classes["image-container"]}>
                <img
                  alt={card.title}
                  src={card.imageUrl}
                  className={classes["card-image"]}
                />
              </div>
            }
          >
            <Meta
              title={
                <span className={classes["card-title"]}>{card.title}</span>
              }
              description={
                <>
                  <p className={classes["card-description"]}>
                    {card.description}
                  </p>
                  <p className={classes["card-additional"]}>
                    {card.additionalText}
                  </p>
                </>
              }
            />
          </Card>
        ))}
      </div>
    </section>
  );
}
