import React from "react";
import classes from "./Partners.module.css";

export default function Partners() {
  // Массив данных о партнерах
  const partners = [
    {
      name: "hasselblad",
      image: "/hasselbladpartner.jpg",
      url: "https://www.hasselblad.com/",
    },
    {
      name: "canon",
      image: "/canonpartner.jpg",
      url: "https://www.canon.com/",
    },
    {
      name: "sony",
      image: "/sonypartner.jpg",
      url: "https://www.sony.com/",
    },
  ];

  return (
    <section className={classes["advantages"]}>
      <h1 className={classes["title"]}>our Partners</h1>
      <div className={classes["cardContainer"]}>
        {partners.map((partner, index) => (
          <a
            key={index}
            href={partner.url}
            target="_blank"
            rel="noopener noreferrer"
            className={classes["cardLink"]}
          >
            <div className={classes["card"]}>
              <img
                src={partner.image}
                alt={`${partner.name} logo`}
                className={classes["icon"]}
              />
              <p>{partner.name}</p>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
