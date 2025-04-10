import React from "react";
import classes from "./Partners.module.css";

export default function Partners() {
  return (
    <section className={classes["advantages"]}>
      <h1 className={classes["title"]}>our Partners</h1>
      <div className={classes["cardContainer"]}>
        <div className={classes["card"]}>
          <img
            src="/hasselbladpartner.jpg"
            alt="Advantage 1"
            className={classes["icon"]}
          />
          <p>
          hasselblad
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/canonpartner.jpg"
            alt="Advantage 2"
            className={classes["icon"]}
          />
          <p>
          canon
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/sonypartner.jpg"
            alt="Advantage 3"
            className={classes["icon"]}
          />
          <p>
          sony
          </p>
        </div>
      </div>
    </section>
  );
}
