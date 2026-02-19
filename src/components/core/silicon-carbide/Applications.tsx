"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Applications.module.css";
import application1 from "@/assets/images/product/silicon-carbide/application-1.webp";
import application2 from "@/assets/images/product/silicon-carbide/application-2.webp";
import application3 from "@/assets/images/product/silicon-carbide/application-3.webp";
import application4 from "@/assets/images/product/silicon-carbide/application-4.webp";
import application5 from "@/assets/images/product/silicon-carbide/application-5.webp";
// import applicationsData from "@/assets/data/applicationsData.json";

const applicationsData = [
  {
    id: "SuperiorHardness",
    label: "Superior Hardness",
    title: "Superior Hardness",
    image: application1.src,
    imageAlt: "Road & Infrastructure Construction (Primary Market)",
    points: [
      {
        heading: "Superior Hardness:",
        points: [
          "Second only to diamond in hardness (32 GPa)",
          "Enables precise grinding and cutting without dulling",
          "Extends tool life, reducing replacement frequency and production downtime",
        ],
      },
    ],
  },
  {
    id: "ExceptionalThermalProperties",
    label: "Exceptional Thermal Properties",
    title: "Exceptional Thermal Properties",
    image: application2.src,
    imageAlt: "Exceptional Thermal Properties",
    points: [
      {
        heading: "Exceptional Thermal Properties:",
        points: [
          "High thermal conductivity (120 W/m·K) rapidly dissipates heat, preventing material degradation",
          "Low thermal expansion coefficient maintains dimensional accuracy across temperature variations",
          "Thermal shock resistant; withstands rapid temperature changes without fracturing",
          "Maintains strength at temperatures exceeding 1,600°C",
        ],
      },
    ],
  },
  {
    id: "ChemicalInertness",
    label: "Chemical Inertness",
    title: "Chemical Inertness",
    image: application3.src,
    imageAlt: "Chemical Inertness",
    points: [
      {
        heading: "Chemical Inertness:",
        points: [
          "Not attacked by acids or alkalis up to 800°C",
          "Resistant to molten salts and corrosive chemical environments",
          "Forms protective silicon oxide coating at 1,200°C, preventing further oxidation",
          "Ideal for chemical processing and corrosive environment applications",
        ],
      },
    ],
  },
  {
    id: "WearResistance",
    label: "Wear Resistance",
    title: "Wear Resistance",
    image: application4.src,
    imageAlt: "Wear Resistance",
    points: [
      {
        heading: "Wear Resistance:",
        points: [
          "Extremely durable; outperforms conventional ceramics and metals in abrasion applications",
          "Minimal dimensional wear even in extended, high-stress operations",
          "Cost-effective over product lifetime despite higher initial material cost",
        ],
      },
    ],
  },
  {
    id: "StrengthRetention",
    label: "Strength Retention at High Temperatures",
    title: "Strength Retention at High Temperatures",
    image: application5.src,
    imageAlt: "Strength Retention at High Temperatures",
    points: [
      {
        heading: "Strength Retention at High Temperatures:",
        points: [
          "Maintains structural integrity and load-bearing capacity up to 1,600°C",
          "No strength degradation at elevated temperatures (unlike metals and conventional ceramics)",
          "Critical advantage for aerospace, power generation, and heavy industrial applications",
        ],
      },
    ],
  },
];

export default function Applications() {
  const [activeId, setActiveId] = useState(applicationsData[0].id);
  const tabBarRef = useRef<HTMLDivElement>(null);
  const isDragging = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  const active = applicationsData.find((tab) => tab.id === activeId);

  const onMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    startX.current = e.pageX - (tabBarRef.current?.offsetLeft ?? 0);
    scrollLeft.current = tabBarRef.current?.scrollLeft ?? 0;
  };

  const onMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || !tabBarRef.current) return;
    e.preventDefault();
    const x = e.pageX - tabBarRef.current.offsetLeft;
    const walk = x - startX.current;
    tabBarRef.current.scrollLeft = scrollLeft.current - walk;
  };

  const onMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Applications:</h2>

      {/* Tab Bar */}
      <div
        className={styles.tabBar}
        ref={tabBarRef}
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
      >
        <div className={styles.tabTrack}>
          {applicationsData.map((tab) => (
            <button
              key={tab.id}
              className={`${styles.tab} ${activeId === tab.id ? styles.tabActive : ""}`}
              onClick={() => setActiveId(tab.id)}
              aria-selected={activeId === tab.id}
              role="tab"
            >
              {tab.label}
              <span className={styles.arrow}>→</span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Panel */}
      {active && (
        <div className={styles.panel} key={active.id}>
          <div className={styles.imageWrap}>
            <Image
              src={active.image}
              alt={active.imageAlt}
              fill
              className={styles.image}
              sizes="(max-width: 768px) 100vw, 45vw"
            />
          </div>

          <div className={styles.details}>
            <h3 className={styles.title}>{active.title}</h3>
            {active.points.map((point, i) => {
              return (
                <div key={i}>
                  {/* <h4 className={styles.heading}>{point.heading}</h4> */}
                  <ul className={styles.list}>
                    {point.points.map((point, i) => (
                      <li key={i} className={styles.listItem}>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
}
