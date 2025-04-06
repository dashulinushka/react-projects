import React from "react";
import { Link } from "react-router-dom";
import styles from "./Metrics.module.css";

export default function Metrics() {
  // Данные для блоков статистики
  const stats = [
    {
      value: "250",
      description:
        "This year, 1,250 cameras were sold, marking a 20% increase compared to last year",
    },
    {
      value: "90%",
      description:
        "Over 90% of our customers report improved photography skills after using our cameras",
    },
    {
      value: "4.8/5",
      description:
        "our cameras have an average rating of 4.8 out of 5, based on customer reviews",
    },
  ];

  return (
    <section className={styles.statsSection}>
      <div className={styles.h2Container}>
        <h2 className={styles.sectionTitle}>KNOW US MORE CLOSE</h2>

        <Link to="/aboutus" className={styles.learnMoreLink}>
          LEARN MORE <span className={styles.arrow}>→</span>
        </Link>
      </div>

      <div className={styles.statsContainer}>
        {stats.map((stat, index) => (
          <div key={index} className={styles.statBlock}>
            <span className={styles.statValue}>{stat.value}</span>
            <p className={styles.statDescription}>{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
