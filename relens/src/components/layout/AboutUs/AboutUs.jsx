import classes from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <section className={classes["about-wrapper"]}>
      <div className={classes["about-content"]}>
        <h1 className={classes["about-title"]}>About us</h1>
        <div className={classes["about-card"]}>
          <div className={classes["about-left"]}>
            <img src="/hasselblad-homepage.jpg" alt="Description" />
          </div>
          <div className={classes["about-right"]}>
            <p className={classes["about-p"]}>
              At Relens we pride ourselves on providing our customers with the
              best cameras on the market.{" "}
            </p>
            <p className={classes["about-p"]}>
              Since the beginning of this year, we have sold 250 cameras, which
              is a significant accomplishment for our team!{" "}
            </p>
            <p className={classes["about-p"]}>
              We are actively working to ensure that every customer is satisfied
              with their choice.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
