"use client";

import { useState } from "react";
import styles from "./TechnicalSpecs.module.css";
import SampleRequestPopup from "@/components/common/SampleRequestPopup/SampleRequestPopup";

const specs: [string, string][] = [
  ["Chemical Composition", "Silicon 50.08% + Carbon 49.92%"],
  ["Crystal Structure", "Tetrahedral bonding of carbon and silicon atoms"],
  ["Appearance", "Black to dark gray crystalline powder or blocks"],
  ["Hardness", "32 GPa (second only to diamond, CBN, boron carbide)"],
  ["Young's Modulus", "440 GPa"],
  ["Thermal Conductivity", "120 W/m·K"],
  ["Coefficient of Thermal Expansion", "4.0 × 10⁻⁶ /°C"],
  ["Melting Point", "2,700°C"],
  [
    "Maximum Operating Temperature",
    "Up to 1,600°C in air (forms protective SiO₂ coating at ~1,200°C)",
  ],
  ["Fracture Toughness", "6.8 MPa·m½"],
  ["Flexural Strength", "490 MPa"],
  ["Particle Size", "0-5mm (finest grade for precision applications)"],
];

const PRODUCT_NAME = "Refractory Grade Silicon Carbide 0-5mm";

export default function TechnicalSpecs() {
  const [popupOpen, setPopupOpen] = useState(false);

  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{PRODUCT_NAME}</p>
        <h2 className={styles.title}>Technical Specifications</h2>

        <div className={styles.tableWrap}>
          <table className={styles.table}>
            <thead>
              <tr>
                <th className={styles.th}>Property</th>
                <th className={styles.th}>Value</th>
              </tr>
            </thead>
            <tbody>
              {specs.map(([label, value]) => (
                <tr key={label}>
                  <td className={styles.labelCell}>{label}</td>
                  <td className={styles.valueCell}>{value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className={styles.ctaGroup}>
          <a
            href="/files/yasashvi-ecogreen-company-profile.pdf"
            download
            className={`${styles.cta} ${styles.ctaSecondary}`}
          >
            <span className={styles.ctaMain}>&#128196; Download Datasheet</span>
            <span className={styles.ctaSub}>PDF, 2.3 MB</span>
          </a>
          <button onClick={() => setPopupOpen(true)} className={`${styles.cta} ${styles.ctaPrimary}`}>
            <span className={styles.ctaMain}>&#129514; Request Sample</span>
            <span className={styles.ctaSub}>1-5kg for testing</span>
          </button>
        </div>
      </div>

      <SampleRequestPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
        productName={PRODUCT_NAME}
      />
    </section>
  );
}
