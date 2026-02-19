"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Glance.module.css";
import type { StaticImageData } from "next/image";
import glance1 from "@/assets/images/product/slag-scrap/glance-1.webp";
import glance2 from "@/assets/images/product/slag-scrap/glance-2.webp";
import glance3 from "@/assets/images/product/slag-scrap/glance-3.webp";

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
    heading: "Steel Slag",
    title: "What is Steel Slag?",
    description:
      "Steel slag is a byproduct generated during electric arc furnace (EAF) and blast furnace steel production. It consists primarily of iron oxides and calcium silicates and is widely reused in construction and infrastructure applications.",
    points: [
      {
        heading: "Source & Composition:",
        points: [
          "Source: Byproduct of electric arc furnace (EAF) and blast furnace steel production",
          "Composition: Primarily iron oxides and calcium silicates",
          "Form: Cooled, solidified slag fragments (typically 10–50mm chunks)",
          "Uses: Road base material, aggregate for concrete, railroad ballast, cement raw material",
        ],
      },
    ],
    glanceImage: glance1,
    why: "Available Grades:",
    whyPoints: [
      "ASTM A366/A366M: Drawing-quality steel (excellent formability for deep drawing applications)",
      "ASTM A619: High-strength, low-alloy steel (strength + formability balance)",
      "DC01 – DC06 (EN standards): Commercial quality to deep-drawing quality grades",
      "Galvanized CR Coils: Cold-rolled steel with zinc coating for enhanced corrosion resistance",
    ],
  },
  {
    index: 1,
    heading: "Blast Furnace Slag",
    title: "What is Blast Furnace Slag?",
    description:
      "Blast furnace slag is produced during iron smelting in blast furnaces. Due to slower cooling, it forms a denser and more crystalline structure, making it suitable for high-performance construction applications.",
    points: [
      {
        heading: "Blast Furnace Slag:",
        points: [
          "Source: Iron smelting in blast furnaces",
          "Characteristics: Denser, harder material; slower cooling produces crystalline structure",
          "Recycling Rate: ~99% of blast furnace slag is currently recycled (highest recovery rate among industrial byproducts)",
          "Applications: Cement manufacturing (replacement for limestone), road construction, agriculture (soil amendment)",
        ],
      },
    ],
    glanceImage: glance2,
    why: "Available Grades:",
    whyPoints: [
      "ASTM A366/A366M: Drawing-quality steel (excellent formability for deep drawing applications)",
      "ASTM A619: High-strength, low-alloy steel (strength + formability balance)",
      "DC01 – DC06 (EN standards): Commercial quality to deep-drawing quality grades",
      "Galvanized CR Coils: Cold-rolled steel with zinc coating for enhanced corrosion resistance",
    ],
  },
  {
    index: 2,
    heading: "EAF (Electric Arc Furnace) Slag",
    title: "What is EAF Slag?",
    description:
      "EAF slag is generated during secondary steel production from recycled scrap metal. It often contains free iron and oxidized iron phases, giving it a metallic sheen and allowing recovery of embedded iron.",
    points: [
      {
        heading: "SEAF (Electric Arc Furnace) Slag:",
        points: [
          "Source: Secondary steel production from recycled scrap metal",
          "Characteristics: Contains free iron, oxidized iron phases; often has metallic sheen",
          "Processing: Magnetic separation recovers embedded iron for re-smelting",
          "End-Uses: Road aggregate, sub-base material, cement raw material, foundry sand replacement",
        ],
      },
    ],
    glanceImage: glance3,
    why: "Available Grades:",
    whyPoints: [
      "ASTM A366/A366M: Drawing-quality steel (excellent formability for deep drawing applications)",
      "ASTM A619: High-strength, low-alloy steel (strength + formability balance)",
      "DC01 – DC06 (EN standards): Commercial quality to deep-drawing quality grades",
      "Galvanized CR Coils: Cold-rolled steel with zinc coating for enhanced corrosion resistance",
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
