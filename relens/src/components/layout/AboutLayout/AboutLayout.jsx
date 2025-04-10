import React from "react";
import classes from "./AboutLayout.module.css";

export default function Advantages() {
  return (
    <section className={classes["advantages"]}>
      <h1 className={classes["title"]}>Advantages</h1>
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


      <div className={classes["cardContainer"]}>
        <div className={classes["card"]}>
          <img
            src="/uil_calender.svg"
            alt="Advantage 1"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>A 90 DAY WARRANTY</span> WE PROVIDE FOR ALL PURCHASED CAMERAS - YOU CAN BE SURE OF THE QUALITY.
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/mingcute_world-2-line.svg"
            alt="Advantage 2"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>we work all over the world.</span> just write to us, we will choose online and send you the product you need
          </p>
        </div>
        <div className={classes["card"]}>
          <img
            src="/carbon_managed-solutions.svg"
            alt="Advantage 3"
            className={classes["icon"]}
          />
          <p>
          <span className={classes["span-colored"]}>WE OFFER CUSTOMIZED SOLUTIONS</span> FOR EACH CLIENT, SO YOU GET EXACTLY WHAT YOU'RE LOOKING FOR
          </p>
        </div>
      </div>
    </section>
  );
}
