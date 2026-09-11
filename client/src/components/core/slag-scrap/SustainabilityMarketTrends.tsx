import React from "react";
import styles from "./SustainabilityMarketTrends.module.css";
import Image from "next/image";
import industrialImage from "@/assets/images/product/slag-scrap/stradegy.webp";

// interface SustainabilityMarketTrendsProps {
//     industrialImage?: string;
// }

export default function SustainabilityMarketTrends() {
  return (
    <section className={styles.trendsSection}>
      <div className={styles.contentSide}>
        <h2 className={styles.title}>Specialized Industrial Uses</h2>

        {/* <p className={styles.subtitle}>Global Demand:</p> */}

        <ul className={styles.trendsList}>
          <li>
            Glass Manufacturing: Slag components substitute for limestone flux
          </li>
          <li>
            Water Treatment: Slag&apos;s absorbent properties useful in
            industrial wastewater treatment
          </li>
          <li>
            Refractory Materials: High-temperature slag can be reformed into
            refractory bricks for furnace lining Railroad
          </li>
          <li>
            Ballast: Angular shape superior to rounded gravel for railroad
            applications
          </li>
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
