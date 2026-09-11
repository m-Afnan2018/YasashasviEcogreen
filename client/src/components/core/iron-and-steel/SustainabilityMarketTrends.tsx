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
        <h2 className={styles.title}>
          Strategic Importance of Iron & Steel Products
        </h2>

        <p className={styles.subtitle}>Global Demand:</p>

        <ul className={styles.trendsList}>
          <li>
            Steel is the world&apos;s most-used metal ({">"}2 billion tons
            produced annually)
          </li>
          <li>
            Essential raw material for construction, automotive, machinery, and
            infrastructure
          </li>
          <li>
            Foundation material enabling development across all industrial
            sectors
          </li>
        </ul>
        <p className={styles.subtitle}>
          YASASHVI ECOGREEN&apos;s Role: As a strategic supplier, we ensure
          reliable access to premium cold-rolled products, enabling
          manufacturers to:
        </p>

        <ul className={styles.trendsList}>
          <li>
            Maintain production schedules without supply chain interruptions
          </li>
          <li>Meet quality specifications and customer expectations</li>
          <li>
            Reduce costs through optimized material selection and sourcing
            efficiency
          </li>
          <li>
            Support sustainability goals through responsible sourcing practices
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
