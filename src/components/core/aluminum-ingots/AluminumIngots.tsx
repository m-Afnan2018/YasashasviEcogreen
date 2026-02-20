import React from "react";
import styles from "./AluminumIngots.module.css";
import Link from "next/link";
import heroImage from "@/assets/images/product/aluminum-ingots/hero-image.webp";

interface AluminumIngots {
  backgroundImage?: string;
}

const AluminumIngots: React.FC<AluminumIngots> = ({
  backgroundImage = `${heroImage.src}`,
}) => {
  return (
    <div
      className={styles.hero}
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className={styles.overlay}>
        <div className={styles.container}>
          <nav className={styles.breadcrumb}>
            <Link href="/" className={styles.breadcrumbLink}>
              Home
            </Link>
            <span className={styles.breadcrumbSeparator}>›</span>
            <Link href="/products" className={styles.breadcrumbLink}>
              Product
            </Link>
          </nav>

          <h1 className={styles.title}>ALUMINIUM INGOTS (RECYCLED)</h1>

          <p className={styles.description}>
            Sustainable High-Purity Aluminium for Industrial Manufacturing
          </p>

          <div className={styles.buttonGroup}>
            <a
              href="/files/yasashvi-ecogreen-company-profile.pdf"
              download={true}
              className={`${styles.button} ${styles.buttonPrimary}`}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Ask For Sample
            </a>
            <a
              href="/files/yasashvi-ecogreen-company-profile.pdf"
              download={true}
              className={`${styles.button} ${styles.buttonSecondary}`}
            >
              <svg
                className={styles.buttonIcon}
                viewBox="0 0 20 20"
                fill="currentColor"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Download Brouchure
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AluminumIngots;
