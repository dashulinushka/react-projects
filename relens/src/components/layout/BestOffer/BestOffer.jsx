import Button from "../../utilites/Button/Button";
import styles from "./BestOffer.module.css";

export default function BestOffer() {
  return (
    <div className={styles["home-main-container"]}>
      <div className={styles["home-container"]}>
        <div
          className={styles["orange-blocks-container"]}
          style={{
            position: "absolute",
            top: "35%",
            left: "5%",
            "@media (max-width: 768px)": {
              top: "5%",
              left: "2%",
            },
            "@media (max-width: 480px)": {
              top: "5%",
              left: "0",
            },
          }}
        >
          <div className={styles["orange-block"]}></div>
          <div>
            <h3 className={styles["block-text"]}>
              YOUR WISHES - OUR
              <br /> SERVICES
            </h3>
            <p
              className={styles["orange-text"]}
              style={{ display: "block", paddingTop: "10px" }}
            >
              write us - we find your camera
            </p>
          </div>
        </div>

        {/* Второй блок */}
        <div
          className={styles["orange-blocks-container"]}
          style={{
            position: "absolute",
            top: "10%",
            right: "5%",
          }}
        >
          <div className={styles["orange-block"]}></div>
          <h3 className={styles["block-text"]}>
            FIND THE CAMERA OF YOUR
            <br /> DREAMS
          </h3>
        </div>

        {/* Третий блок */}
        <div
          style={{
            position: "absolute",
            top: "45%",
            right: "15%",
          }}
        >
          <h3
            className={styles["block-text"]}
            style={{
              color: "#413833",
            }}
          >
            Best offer
          </h3>
        </div>

        <h2 className={styles["subtitle"]}>XCD 3,4/75P</h2>
        <h3 className={styles["h3text"]}>lightweight porptrain camera</h3>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: "30px",
          }}
        >
          <Button>READ MORE</Button>
          <Button isActive>BUY NOW</Button>
        </div>
      </div>
    </div>
  );
}
