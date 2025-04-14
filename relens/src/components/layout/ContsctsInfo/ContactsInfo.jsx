import React from "react";
import classes from "./ContactsInfo.module.css";

export default function ContactsInfo() {
  return (
    <section className={classes["advantages"]}>
      <div className={classes["center"]}>
        <h1 className={classes["title"]}>contacts</h1>
        <p className={classes["about-p"]}>
          Here you will find all the ways to contact us:
          <br />
        </p>
        <p className={classes["about-p"]}>
          - telephone numbers, <br />
          - addresses, <br />- links to social networks.
        </p>
        <p className={classes["about-p"]}>
          <br />
          We are always{" "}
          <span className={classes["span-colored"]}>in touch!</span>
        </p>
      </div>

      <div className={classes["cardContainer"]}>
        <div className={classes["card"]}>
          <p className={`${classes["h4-span"]}`}>Oficess / shop</p>
          <div className={classes["information"]}>
            <p className={classes["span-bold"]}>
              <span>address:</span>
            </p>
            <p>
              224554, belarus, Minsk pr-t. nezalezhnosti 45 1-st floor, office
              216{" "}
            </p>
          </div>

          <div className={classes["information"]}>
            <p className={classes["span-bold"]}>
              working
              <br /> hours:
            </p>
            <p>mon-fr 9.00 - 17.00</p>
          </div>
        </div>

        <div className={classes["card"]}>
          <p className={`${classes["h4-span"]}`}>contact</p>
          <div className={classes["information"]}>
            <p className={classes["span-bold"]}>
              <span>Phone-number:</span>
            </p>
            <p>
              224554, belarus, Minsk pr-t. nezalezhnosti 45 1-st floor, office
              216{" "}
            </p>
          </div>

          <div className={classes["information"]}>
            <p>
              <span className={classes["span-bold"]}>email:</span>
            </p>
            <p className={classes["gap"]}>
              <a
                href="mailto:relens@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                relens@gmail.com
              </a>
            </p>
          </div>
        </div>

        <div className={classes["card"]}>
          <p className={`${classes["h4-span"]}`}>direction</p>
          <div className={classes["information"]}>
            <p>
              <span className={classes["span-bold"]}>email:</span>
            </p>
            <p>
              <a
                href="mailto:pec@gmail.com"
                style={{ color: "inherit", textDecoration: "none" }}
              >
                darya.babich@gmail.com
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
