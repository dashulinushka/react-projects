import React from "react";
import classes from "./ContactsInfo.module.css";

export default function ContactsInfo() {
  return (
    <section className={classes["advantages"]}>
      <h1 className={classes["title"]}>contacts</h1>
      <div className={classes["cardContainer"]}>
        <div className={classes["card"]}>
          <img
            src="/fontisto_camera.svg"
            alt="Advantage 1"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>250 cameras</span> were sold in this year, marking a 20% increase compared to last year
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/grommet-icons_user-expert.svg"
            alt="Advantage 2"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>OUR TEAM OF EXPERTS</span> CONDUCT A DETAILED EVALUATION OF EACH CAMERA TO ENSURE YOU GET A FAIR PRICE
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/solar_cup-star-linear.svg"
            alt="Advantage 3"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>4.8 out of 5</span> average rating, based on customer reviews.
          </p>
        </div>
      </div>
    </section>
  );
}
