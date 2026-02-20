"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Applications.module.css";
import application1 from "@/assets/images/product/aluminum-ingots/application-1.webp";
import application2 from "@/assets/images/product/aluminum-ingots/application-2.webp";
import application3 from "@/assets/images/product/aluminum-ingots/application-3.webp";
import application4 from "@/assets/images/product/aluminum-ingots/application-4.webp";
import application5 from "@/assets/images/product/aluminum-ingots/application-5.webp";
import application6 from "@/assets/images/product/aluminum-ingots/application-6.webp";
import application7 from "@/assets/images/product/aluminum-ingots/application-7.webp";
// import applicationsData from "@/assets/data/applicationsData.json";

const applicationsData = [
  {
    id: "premium",
    label: "Premium Grade",
    title: "Aerospace & Defense (Premium Grade)",
    image: application1.src,
    imageAlt: "Aerospace & Defense (Premium Grade)",
    points: [
      "Aircraft fuselage and wing panels",
      "Landing gear components",
      "Cockpit framing and interior structure",
      "Engine components exposed to high stress",
      "Radar and communication systems",
      "Why Aluminum: Exceptional strength-to-weight ratio enables fuel efficiency and payload capacity",
    ],
  },
  {
    id: "commercial",
    label: "Commercial to Premium Grade",
    title: "Automotive Industry (Commercial to Premium Grade)",
    image: application2.src,
    imageAlt: "Automotive Industry (Commercial to Premium Grade)",
    points: [
      "Engine blocks and cylinder heads (AlSi alloys)",
      "Transmission housings (AlCu alloys)",
      "Wheels and suspension components (AlMg alloys)",
      "Structural beams and frames (advanced alloys)",
      "Heat exchangers and radiators",
      "Why Aluminum: Lightweight (improves fuel efficiency), corrosion-resistant, recyclable",
    ],
  },
  {
    id: "secondary",
    label: "Commercial Grade / Secondary Aluminum",
    title: "Packaging Industry (Commercial Grade / Secondary Aluminum)",
    image: application3.src,
    imageAlt: "Packaging Industry (Commercial Grade / Secondary Aluminum)",
    points: [
      "Beverage cans (recycled aluminum: ~50% of can material)",
      "Food packaging (foil, containers)",
      "Pharmaceutical packaging (requires food-grade purity)",
      "Aerosol containers",
      "Why Aluminum: Lightweight, moisture-proof, infinitely recyclable, food-safe",
    ],
  },
  {
    id: "commercialGrade",
    label: "Commercial Grade",
    title: "Commercial Grade",
    image: application4.src,
    imageAlt: "Commercial Grade",
    points: [
      "Window frames and door systems",
      "Curtain wall and facade systems",
      "Structural beams and columns",
      "Roofing materials and gutters",
      "Interior framing and partitions",
      "Why Aluminum: Corrosion-resistant, lightweight, aesthetic appeal, ease of fabrication",
    ],
  },
  {
    id: "industrial",
    label: "Premium & Industrial Grade",
    title: "Electrical & Power Transmission (Premium & Industrial Grade)",
    image: application5.src,
    imageAlt: "Electrical & Power Transmission (Premium & Industrial Grade)",
    points: [
      "High-voltage transmission lines",
      "Electrical conductors and wiring",
      "Transformer cores",
      "Power distribution equipment",
      "Why Aluminum: Excellent electrical conductivity (second only to copper), lower weight, cost advantage",
    ],
  },
  {
    id: "industrialgrade",
    label: "Premium & Industrial Grade",
    title: "Consumer Appliances (Commercial Grade / Secondary Aluminum)",
    image: application6.src,
    imageAlt: "Consumer Appliances (Commercial Grade / Secondary Aluminum)",
    points: [
      "Cookware and kitchen utensils",
      "Home appliances (refrigerator bodies, washing machine frames)",
      "HVAC systems",
      "Lighting fixtures",
      "Why Aluminum: Thermal conductivity, corrosion resistance, affordability",
    ],
  },
  {
    id: "secondaryaluminum",
    label: "Commercial Grade / Secondary Aluminum",
    title: "Electronics & Semiconductors (Premium Grade)",
    image: application7.src,
    imageAlt: "Electronics & Semiconductors (Premium Grade)",
    points: [
      "Computer heat sinks and thermal management",
      "Device casing and enclosures",
      "Circuit board components",
      "LED substrate material",
      "Semiconductor equipment",
      "Why Aluminum: Thermal conductivity (dissipates heat efficiently), electrical properties, EMI shielding",
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
            <ul className={styles.list}>
              {active.points.map((point, i) => (
                <li key={i} className={styles.listItem}>
                  {point}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </section>
  );
}
