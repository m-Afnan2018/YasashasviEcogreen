"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Glance.module.css";
import type { StaticImageData } from "next/image";
import glance1 from "@/assets/images/product/silicon-carbide/glance-1.webp";
import glance2 from "@/assets/images/product/silicon-carbide/glance-2.webp";
import glance3 from "@/assets/images/product/silicon-carbide/glance-3.webp";
import glance4 from "@/assets/images/product/silicon-carbide/glance-4.webp";

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
    heading: "Industrial Abrasive Grade",
    title: "Silicon Carbide Grade Classifications",
    description:
      "Steel slag is a byproduct generated during electric arc furnace (EAF) and blast furnace steel production. It consists primarily of iron oxides and calcium silicates and is widely reused in construction and infrastructure applications.",
    points: [
      {
        heading: "Industrial Abrasive Grade:",
        points: [
          "Optimized for grinding, honing, and cutting applications",
          "High particle consistency ensures uniform performance",
          "Available in various mesh sizes (from coarse 20-grit to ultra-fine 600-grit)",
          "Used in bonded and coated abrasive products",
        ],
      },
    ],
    glanceImage: glance1,
    why: "Industrial Furnace Applications",
    whyPoints: [
      "Silicon Carbide is widely used in industrial furnaces for kiln furniture, burner nozzles, heating elements, and molten metal handling equipment due to its excellent thermal stability and high-temperature resistance.",
    ],
  },
  {
    index: 1,
    heading: "Refractory Grade",
    title: "Silicon Carbide Grade Classifications",
    description:
      "Refractory Grade Silicon Carbide is engineered for high-temperature structural applications where thermal stability, strength retention, and resistance to thermal shock are critical.",
    points: [
      {
        heading: "Refractory Grade:",
        points: [
          "Designed for high-temperature furnace and kiln applications",
          "Excellent thermal stability and oxidation resistance",
          "Maintains structural integrity under extreme heat conditions",
          "Used in kiln furniture, furnace linings, and high-temperature components",
        ],
      },
    ],
    glanceImage: glance2,
    why: "Why Choose 0–5mm?",
    whyPoints: [
      "The finest particle size delivers superior performance in precision applications.",
      "Ensures uniform distribution and consistent results in every batch.",
    ],
  },
  {
    index: 2,
    heading: "Technical Ceramic Grade",
    title: "Silicon Carbide Grade Classifications",
    description:
      "Technical Ceramic Grade Silicon Carbide is manufactured with ultra-high purity and strict dimensional control, making it ideal for advanced electronic and semiconductor applications.",
    points: [
      {
        heading: "Technical Ceramic Grade:",
        points: [
          "Ultra-high purity for semiconductor and precision electronic applications",
          "Strict dimensional tolerance and surface finish specifications",
          "Used in LED substrates, power modules, and thermal management components",
        ],
      },
    ],
    glanceImage: glance3,
    why: "Precision Performance Advantage",
    whyPoints: [
      "Ensures superior electrical and thermal management performance",
      "Suitable for advanced industrial and electronic systems",
    ],
  },
  {
    index: 3,
    heading: "Metallurgical Grade",
    title: "Silicon Carbide Grade Classifications",
    description:
      "Metallurgical Grade Silicon Carbide is primarily used in steelmaking and foundry operations as a deoxidizer and alloying additive to enhance material performance.",
    points: [
      {
        heading: "Metallurgical Grade:",
        points: [
          "Used as a deoxidizer and alloying element in specialty steel production",
          "Enhances alloy properties and improves material performance",
          "Improves machinability and surface finish characteristics",
        ],
      },
    ],
    glanceImage: glance4,
    why: "Steel Industry Advantage",
    whyPoints: [
      "Supports cleaner steel production",
      "Improves metallurgical efficiency and material quality",
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
