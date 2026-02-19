"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Glance.module.css";
import type { StaticImageData } from "next/image";
import glance1 from "@/assets/images/product/iron-and-steel/glance-1.webp";
import glance2 from "@/assets/images/product/iron-and-steel/glance-2.webp";

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
    heading: "Cold-Rolled (CR) Sheets & Coils",
    title: "What are Cold-Rolled Products?",
    description:
      "Cold-rolled steel represents fully processed, finished steel that has been rolled to precise dimensions at room temperature. This process creates superior surface finish, dimensional accuracy, and mechanical properties compared to hot-rolled alternatives, making CR sheets and coils the material of choice for precision manufacturing.",
    points: [
      {
        heading: "Manufacturing Process:",
        points: [
          "Starting Material: Hot-rolled steel coil (rough intermediate product)",
          "Pickling: Acid treatment removes iron oxide scale, cleaning the surface",
          "Cold Rolling: Steel passed through precision rollers at room temperature, reducing thickness to specified tolerance",
          "Annealing: Heat treatment restores ductility and machinability if required",
          "Final Inspection: Surface quality verification, dimensional checking, and tensile property testing",
        ],
      },
      {
        heading: "Specifications:",
        points: [
          "Thickness Range: 0.5mm – 3.2mm (tailored to application requirements)",
          "Width: Standard widths from 600mm – 1,220mm+ (custom widths available)",
          "Yield Strength: 250–450 MPa (depending on grade)",
          "Tensile Strength: 350–550 MPa",
          "Surface Finish: Premium smooth finish (RA <1.6 µm)",
          "Dimensional Tolerance: ±0.05mm (exceptional precision enabling tight-tolerance manufacturing)",
          "Coil Weight: 3–30 tons per coil (customizable)",
        ],
      },
      {
        heading: "Key Properties of Cold-Rolled Steel:",
        points: [
          "Dimensional Precision: Tighter tolerances than hot-rolled enable manufacturing without secondary machining",
          "Superior Surface Finish: Smooth, clean surface perfect for painting, coating, or direct end-use",
          "Enhanced Strength: Cold-rolling work-hardens material, increasing yield and tensile strength",
          "Better Machinability: Uniform microstructure enables cleaner machining and precise part production",
          "Aesthetic Appeal: Premium finish suitable for visible/consumer-facing applications",
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
    heading: "Hot-Rolled (HR) Sheets & Coils",
    title: "What are Hot-Rolled Products?",
    description:
      "Hot-rolled steel is produced by rolling steel at high temperatures, typically above 900°C, where the material remains highly formable. This process allows steel to be shaped efficiently into sheets and coils with excellent structural strength, making hot-rolled products widely used in heavy industrial, structural, and fabrication applications.",
    points: [
      {
        heading: "Manufacturing Process:",
        points: [
          "Steel slabs or billets produced through continuous casting are used as the base raw material.",
          "The slabs are reheated in controlled furnaces to high temperatures (above recrystallization temperature), making the steel easier to roll and shape.",
          "The heated slabs are passed through rolling mills where thickness is reduced and steel is shaped into sheets or coils.",
          "After rolling, the steel is cooled in controlled conditions to achieve required mechanical properties and structural integrity.",
          "Scale formed during heating may remain or can be removed depending on customer requirements.",
        ],
      },
      {
        heading: "Specifications:",
        points: [
          "Thickness Range: 1.2mm – 25mm+ (custom heavy thicknesses available)",
          "Width: 600mm – 2,000mm+",
          "Yield Strength: 210–350 MPa (depending on grade)",
          "Tensile Strength: 350–600 MPa",
          "Surface Finish: Mill scale finish or pickled & oiled surface",
          "Dimensional Tolerance: Standard industrial tolerance",
          "Coil Weight: 5–35 tons per coil (customizable)",
        ],
      },
      {
        heading: "Key Properties of Cold-Rolled Steel:",
        points: [
          "Hot-rolled steel offers excellent load-bearing capability, making it ideal for structural and heavy engineering applications.",
          "The high-temperature rolling process allows steel to be shaped into thicker sections and structural components efficiently.",
          "HR steel demonstrates excellent weldability, making it suitable for fabrication and construction projects.",
          "Hot-rolling enables large-scale steel production, supporting infrastructure and industrial growth.",
        ],
      },
    ],
    glanceImage: glance2,
    why: "Available Grades:",
    whyPoints: [
      "STM A36 – General structural steel widely used in construction and fabrication",
      "ASTM A1011 – Commercial quality and structural quality HR steel",
      "IS 2062 – Structural steel grade commonly used in infrastructure projects",
      "S235 / S275 / S355 (EN Standards) – Structural grades with varying strength levels",
      "Pickled & Oiled HR Coils – HR steel treated for improved surface cleanliness and corrosion resistance",
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
