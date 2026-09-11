import React from "react";
import styles from "./SustainabilityMarketTrends.module.css";
import Image from "next/image";
import industrialImage from "@/assets/images/product/silicon-carbide/safety.webp";

// interface SustainabilityMarketTrendsProps {
//     industrialImage?: string;
// }

export default function SustainabilityMarketTrends() {
  return (
    <section className={styles.trendsSection}>
      <div className={styles.contentSide}>
        <h2 className={styles.title}>Environmental & Safety Profile</h2>

        {/* <p className={styles.subtitle}>Global Demand:</p> */}

        <ul className={styles.trendsList}>
          Non-toxic in industrial handling 
          Dust can irritate respiratory system if inhaled in high concentrations (standard industrial PPE
          recommended) 
          Environmentally stable; biodegradable 
          Recyclable at end-of-life; supports circular economy initiatives 
          Compliant with OSHA, EPA, and international workplace safety standards
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
