"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Glance.module.css";
import type { StaticImageData } from "next/image";
import glance1 from "@/assets/images/product/aluminium-ingots/glance-1.webp";
import glance2 from "@/assets/images/product/aluminium-ingots/glance-2.webp";
import glance3 from "@/assets/images/product/aluminium-ingots/glance-3.webp";
import glance4 from "@/assets/images/product/aluminium-ingots/glance-4.webp";

interface GlanceSubPoint {
  heading: string;
  points: string[];
}

interface GlanceItem {
  index: number;
  heading: string;
  category?: string; // optional since you're not using it
  title: string;
  description: string | null;
  points: GlanceSubPoint[];
  glanceImage: StaticImageData;
  why: string;
  whyPoints: string[];
}

const glanceData: GlanceItem[] = [
  {
    index: 0,
    heading: "Primary Aluminium Ingots (Virgin Aluminium)",
    title: "Primary Aluminium Ingots (Virgin Aluminium",
    description:
      "Pure aluminium produced directly from bauxite ore through electrolytic smelting in the Hall–Héroult process (where cryolite plays the essential role)",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Purity: 99.7% to 99.9% aluminium content",
          "      Types:",
          "Pure Ingots (1000-Series): Unalloyed aluminium; highest purity for specialized applications",
          "Alloy Ingots: AlSi, AlMg, AlCu series engineered for specific mechanical and thermal properties",
          "Weight Options: 1,000 lb (≈454 kg) standard ingots; custom sizes available",
          "Casting Methods: Direct chill (DC) casting (premium), continuous casting (high-volume), smelting",
        ],
      },
      {
        heading: "Characteristics:",
        points: [
          "Consistent chemical composition across batches",
          "Superior electrical conductivity (critical for electrical applications)",
          "Excellent corrosion resistance",
          "Predictable mechanical properties enabling precise alloy formulation",
        ],
      },
    ],
    glanceImage: glance1,
    why: "Premium Grade Specifications:",
    whyPoints: [
      "Guaranteed purity: 99.8% – 99.9%",
      "Impurity limits: Iron <0.2%, Silicon <0.1%, Copper <0.1%",
      "Casting quality: No visible defects, porosity <2%",
      "Thermal stability: No annealing required for most applications",
    ],
  },
  {
    index: 1,
    heading: "Secondary Aluminium Ingots (Recycled Aluminium)",
    title: "Secondary Aluminium Ingots (Recycled Aluminium)",
    description:
      "Aluminium recovered from scrap, waste, and end-of-life aluminium products, refined and recast into ingots for remanufacturing. Represents the circular economy solution to aluminium demand.",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Purity: 95% to 99.5% aluminium (varies by source and refining process)",
          "Composition: Often contains controlled alloy additions (Si, Cu, Mg) depending on intended application",
          "Certifications: ISO 9001, environmental certifications confirming responsible sourcing and processing",
          "Traceability: Full supply chain documentation available for compliance",
        ],
      },
      {
        heading: "Characteristics:",
        points: [
          "Identical properties to primary aluminium once refined and processed",
          "95% energy savings compared to primary aluminium production (environmental advantage)",
          "Lower production cost (approximately 25–35% less expensive than primary ingots)",
          "Supports corporate sustainability commitments and ESG targets",
          "Emerging supply source as aluminium recycling infrastructure expands",
        ],
      },
    ],
    glanceImage: glance2,
    why: "Sustainability Advantages:",
    whyPoints: [
      "Diverts aluminium scrap from landfills",
      "Reduces carbon footprint by 95% compared to primary production",
      "Enables circular economy business models",
      "Qualifies companies for environmental certifications (ISO 14001, B Corp, etc.)",
      "Aligns with corporate net-zero commitments",
    ],
  },
  {
    index: 2,
    heading: "High-Purity Specialized Ingots",
    title: "High-Purity Specialized Ingots",
    description:
      "Ultra-refined aluminium (99.99%+) for applications demanding absolute material consistency and impurity-free composition.",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Purity: 99.99% minimum (pharmaceutical and semiconductor grade)",
          "Impurity Levels: Measured in parts per million (ppm)",
          "Trace Elements: Iron <10 ppm, Silicon <5 ppm, Copper <5 ppm",
          "Certifications: Military-grade (MIL-SPEC), aerospace (AS9100), pharmaceutical compliance",
        ],
      },
    ],
    glanceImage: glance3,
    why: "Sustainability Advantages:",
    whyPoints: [
      "Diverts aluminium scrap from landfills",
      "Reduces carbon footprint by 95% compared to primary production",
      "Enables circular economy business models",
      "Qualifies companies for environmental certifications (ISO 14001, B Corp, etc.)",
      "Aligns with corporate net-zero commitments",
    ],
  },
  {
    index: 3,
    heading: " Specialty Aluminium Alloy Ingots",
    title: "Specialty Aluminium Alloy Ingots",
    description:
      "Engineered aluminium blended with specific elements (silicon, copper, magnesium) to achieve targeted mechanical and thermal properties.",
    points: [
      {
        heading: "Common Alloy Series:",
        points: [
          "AlSi Series (Aluminium-Silicon)",
          "Composition: 4–12% silicon content",
          "Properties: Excellent castability, low thermal expansion, good wear resistance",
          "Applications: Engine blocks, pump bodies, precision castings",
          "Advantage: Silicon improves casting fluidity, reducing defects",
        ],
      },
      {
        heading: "AlMg Series (Aluminium-Magnesium)",
        points: [
          "Composition: 3–5% magnesium content",
          "Properties: High strength, superior corrosion resistance, excellent weldability",
          "Applications: Marine components, ship hulls, pressure vessels, structural frameworks",
          "Advantage: Magnesium enhances strength without significant weight penalty",
        ],
      },
      {
        heading: "AlCu Series (Aluminium-Copper)",
        points: [
          "Composition: 2–5% copper content",
          "Properties: Highest strength-to-weight ratio, excellent machinability, thermal conductivity",
          "Applications: Aircraft structural components, engine mounts, aerospace fasteners",
          "Advantage: Copper dramatically increases hardness and strength; enables lightweight design",
        ],
      },
    ],
    glanceImage: glance4,
    why: "Specifications for Alloy Ingots:",
    whyPoints: [
      "Precise elemental composition within ±0.5% tolerance",
      "Consistent microstructure enabling predictable mechanical performance",
      "Quality certifications matching end-use industry requirements",
      "Metallurgical reports detailing composition, mechanical properties, and test results",
    ],
  },
];

export default function GlanceSection() {
  const [activeTab, setActiveTab] = useState(1);

  const activeData = glanceData[activeTab];

  return (
    <section className={styles.glanceSection}>
      <div className={styles.container}>
        {/* Tabs */}
        <div className={styles.tabs}>
          {glanceData.map((item, index) => {
            // const Icon = tabIcons[index];
            return (
              <button
                key={item.index}
                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ""}`}
                onClick={() => setActiveTab(index)}
              >
                {/* <Icon className={styles.tabIcon} /> */}
                <span className={styles.tabText}>{item.heading}</span>
              </button>
            );
          })}
        </div>

        {/* Content Area */}
        <div className={styles.contentArea}>
          {/* Left Content */}
          <div className={styles.leftContent}>
            <span className={styles.category}>{activeData.category}</span>
            <h2 className={styles.title}>{activeData.title}</h2>
            <p>{activeData.description}</p>

            {activeData.points.map((main, index) => {
              return (
                <div key={index}>
                  <h3>{main.heading}</h3>
                  {main.points.map((points, index) => {
                    return <li key={index}>{points}</li>;
                  })}
                </div>
              );
            })}
            {/* {activeData.prepoints && (
              <p className={styles.prepoints}>{activeData.prepoints}</p>
            )} */}

            {/* <ul className={styles.pointsList}>
              {activeData.points.map((point, idx) => (
                <li key={idx} className={styles.point}>
                  <span className={styles.bullet}></span>
                  <span className={styles.pointText}>{point}</span>
                </li>
              ))}
            </ul>

            {activeData.description && (
              <p className={styles.description}>{activeData.description}</p>
            )} */}
          </div>

          {/* Right Image */}
          <div className={styles.rightContent}>
            <div className={styles.imageContainer}>
              <Image
                src={activeData.glanceImage.src}
                alt={activeData.title}
                className={styles.image}
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </div>
        </div>

        {/* Why Area */}
        <div className={styles.whyChoose}>
          <div className={styles.textSection}>
            <h2 className={styles.title}>{activeData.why}</h2>
            <ul>
              {activeData.whyPoints.map((value, i) => (
                <li key={i}>{value}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
