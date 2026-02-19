"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Applications.module.css";
import application1 from "@/assets/images/product/slag-scrap/application-1.webp";
import application2 from "@/assets/images/product/slag-scrap/application-2.webp";
import application3 from "@/assets/images/product/slag-scrap/application-3.webp";
import application4 from "@/assets/images/product/slag-scrap/application-4.webp";
import application5 from "@/assets/images/product/slag-scrap/application-5.webp";
// import applicationsData from "@/assets/data/applicationsData.json";

const applicationsData = [
  {
    id: "PrimaryMarket",
    label: "Primary Market",
    title: "Road & Infrastructure Construction (Primary Market)",
    image: application1.src,
    imageAlt: "Road & Infrastructure Construction (Primary Market)",
    points: [
      {
        heading: "Use Cases:",
        points: [
          "Road Base Layer: Compacted slag provides stable foundation below asphalt surface courses",
          "Sub-Base Material: Load-bearing layer supporting road structure",
          "Aggregate for Concrete: Recycled slag replaces virgin aggregate in concrete mixes (20–40% substitution)",
          "Embankment Material: Slag fills and reinforces road embankments and bridge approaches",
          "Railroad Ballast: Supports railroad ties; slag's angular shape provides superior load distribution vs. gravel",
        ],
      },
      {
        heading: "Performance Advantages:",
        points: [
          "Angular particle shape enables better compaction and load transfer vs. rounded gravel",
          "High internal friction provides superior bearing capacity",
          "Drainage characteristics similar to conventional aggregate",
          "Cost savings: 15–30% cheaper than virgin limestone or gravel",
          "Significantly reduced carbon footprint: Recycling slag avoids new limestone quarrying and processing",
        ],
      },
      {
        heading: "Technical Specifications:",
        points: [
          "Particle size: 5–50mm (can be customized for specific applications)",
          "Compacted density: 1.8–2.0 t/m³",
          "CBR (California Bearing Ratio): 80–150% (exceptional load-bearing capacity)",
          "Durability: Resistant to degradation under repeated loading",
        ],
      },
    ],
  },
  {
    id: "CementConcrete",
    label: "Manufacturing",
    title: "Cement & Concrete Manufacturing",
    image: application2.src,
    imageAlt: "Cement & Concrete Manufacturing",
    points: [
      {
        heading: "Slag as Cement Component:",
        points: [
          "Portland Blast Furnace Cement (PBFC): Blast furnace slag replaces 30–50% of Portland clinker",
          "Reduces embodied carbon (slag requires no calcination; clinker does)",
          "Improves long-term strength through pozzolanic reaction",
          "Enhances durability (better sulfate resistance than pure Portland cement)",
          "Reduces heat of hydration (ideal for mass concrete applications)",
        ],
      },
      {
        heading: "Slag as Concrete Aggregate:",
        points: [
          "Replaces virgin limestone/gravel in concrete mixes (20–40% substitution)",
          "Angular shape improves mechanical interlock and compressive strength",
          "Self-cementing properties accelerate hydration in some applications",
          "Reduces virgin material extraction and mining impact",
        ],
      },
      {
        heading: "Market Drivers:",
        points: [
          "European cement manufacturers mandate ~30% blast furnace slag in green cement",
          "Sustainability-driven construction standards increasingly specify slag-based concrete",
          "Cost efficiency: Matches or exceeds virgin aggregate performance",
        ],
      },
    ],
  },
  {
    id: "MetalRecovery",
    label: "Recovery",
    title: "Recycled Metal Recovery",
    image: application3.src,
    imageAlt: "Recycled Metal Recovery",
    points: [
      {
        heading: "Iron Recovery:",
        points: [
          "Magnetic separation extracts metallic iron embedded in slag",
          "Recovered iron is fed back into EAF for re-smelting (closed-loop recycling)",
          "Reduces need for virgin scrap purchases (30–50% cost reduction)",
          "Maximizes material recovery rate and minimizes disposal volume",
        ],
      },
      {
        heading: "Other Metal Recovery:",
        points: [
          "Copper, zinc, and other non-ferrous metals may be present in EAF slag",
          "Specialized processing separates these metals for direct remelting or recycling",
        ],
      },
    ],
  },
  {
    id: "Agriculture",
    label: "Agriculture",
    title: "Agricultural & Environmental Applications",
    image: application4.src,
    imageAlt: "Agricultural & Environmental Applications",
    points: [
      {
        heading: "Soil Amendment:",
        points: [
          "Calcium and silicate content improves soil pH and nutrient availability",
          "Acts as lime replacement at lower cost",
          "Provides alkalinity similar to agricultural limestone",
        ],
      },
      {
        heading: "Crop Yield Enhancement:",
        points: [
          "Studies indicate 10–15% yield increase in acidic soils amended with slag",
          "Improves soil structure and long-term fertility",
        ],
      },
      {
        heading: "Environmental Benefits:",
        points: [
          "Diverts industrial waste from landfill",
          "Reduces lime-kiln emissions",
          "Supports sustainable agriculture practices",
        ],
      },
    ],
  },
  {
    id: "Foundry",
    label: "Foundry",
    title: "Foundry Industry Applications",
    image: application5.src,
    imageAlt: "Foundry Industry Applications",
    points: [
      {
        heading: "Sand Replacement:",
        points: [
          "Cooled and ground slag replaces silica sand in foundry molds",
          "Thermal properties similar to conventional foundry sand",
          "Cost reduction potential: 10–30% vs virgin silica sand",
          "Reduces mining of virgin silica deposits",
        ],
      },
      {
        heading: "Additional Uses:",
        points: [
          "Glass manufacturing: Slag substitutes limestone flux",
          "Water treatment: Absorbent properties used in industrial wastewater treatment",
          "Refractory materials: High-temperature slag reformed into furnace lining bricks",
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
                  <h4 className={styles.heading}>{point.heading}</h4>
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
