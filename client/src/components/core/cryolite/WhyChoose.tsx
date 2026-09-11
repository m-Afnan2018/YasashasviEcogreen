import React from "react";
import styles from "./WhyChoose.module.css";
import backgroundImages from "@/assets/images/product/cryolite/background.jpg";

export default function WhyChoose() {
  return (
    <section className={styles.whyChoose}>
      <div className={styles.textSection}>
        <h2 className={styles.title}>Why Choose 0–5mm?</h2>
        <p className={styles.description}>
          The finest particle size delivers superior performance in applications
          requiring precision grinding, surface finishing, and high-quality
          visual effects. Its small grain size ensures uniform distribution and
          consistent results in every batch.
        </p>
      </div>
      <div
        className={styles.gradientSection}
        style={{
          background: `linear-gradient(
    to right,
    rgba(0, 0, 0, 0.85) 0%,
    rgba(0, 0, 0, 0.6) 40%,
    rgba(0, 0, 0, 0.2) 70%,
    rgba(0, 0, 0, 0) 100%
  ), url(${backgroundImages.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Gradient visual representation */}
      </div>
    </section>
  );
}
