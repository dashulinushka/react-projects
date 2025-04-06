import styles from "./HomePage.module.css";

export default function HomePage() {
  return (
    <div className={styles["home-container"]}>
      {/* Основной заголовок */}
      <h1 className={styles["main-title"]}>
        CAPTURE EPIC
        <br /> MOMENTS
      </h1>
    </div>
  );
}
