import React from "react";
import styles from "./SustainabilityMarketTrends.module.css";
import Image from "next/image";
import industrialImage from "@/assets/images/product/iron-and-steel/stradegy.webp";

// interface SustainabilityMarketTrendsProps {
//     industrialImage?: string;
// }

export default function SustainabilityMarketTrends() {
  return (
    <section className={styles.trendsSection}>
      <div className={styles.contentSide}>
        <h2 className={styles.title}>Ingot Specifications & Grading</h2>

        <p className={styles.subtitle}>Premium Grade:</p>
        <ul className={styles.trendsList}>
          <li>Purity: 99.8%–99.9%</li>
          <li>Defects: None visible to naked eye</li>
          <li>Porosity: {"<"}1%</li>
          <li>Suitable for: Aerospace, defense, high-end electronics</li>
        </ul>

        <p className={styles.subtitle}>Commercial Grade:</p>
        <ul className={styles.trendsList}>
          <li>Purity: 99.5%–99.7%</li>
          <li>Defects: Minor, non-critical defects acceptable</li>
          <li>Porosity: {"<"}2%</li>
          <li>Suitable for: Automotive, construction, appliances</li>
        </ul>

        <p className={styles.subtitle}>Premium Grade:</p>
        <ul className={styles.trendsList}>
          <li>liPurity: 99.0%–99.5%</li>
          <li>liDefects: Visible defects acceptable if non-critical</li>
          <li>liPorosity: {"<"}3%</li>
          <li>liSuitable for: Foundry, casting, general manufacturing</li>
        </ul>
      </div>

      <div className={styles.imageSide}>
        <div className={styles.imageWrapper}>
          <Image
            src={industrialImage.src}
            alt="Industrial facility showing aluminium processing equipment"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </div>
    </section>
  );
}
