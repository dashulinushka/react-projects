import React from "react";
import { Link } from "react-router-dom";
import styles from "./LearnMore.module.css";

export default function LearnMore() {
  return (
    <section className={styles.moreSection}>
      <div className={styles.h2Container}>
        <h2 className={styles.sectionTitle}>KNOW US MORE CLOSE</h2>

        <Link to="/aboutus" className={styles.learnMoreLink}>
          LEARN MORE <span className={styles.arrow}>→</span>
        </Link>
      </div>
    </section>
  );
}
