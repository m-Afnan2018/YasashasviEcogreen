"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import styles from "./Applications.module.css";
import application1 from '@/assets/images/product/iron-and-steel/application-1.webp'
import application2 from '@/assets/images/product/iron-and-steel/application-2.webp'
import application3 from '@/assets/images/product/iron-and-steel/application-3.webp'
import application4 from '@/assets/images/product/iron-and-steel/application-4.webp'
import application5 from '@/assets/images/product/iron-and-steel/application-5.webp'
import application6 from '@/assets/images/product/iron-and-steel/application-6.webp'
import application7 from '@/assets/images/product/iron-and-steel/application-7.webp'
import application8 from '@/assets/images/product/iron-and-steel/application-8.webp'
import application9 from '@/assets/images/product/iron-and-steel/application-9.webp'
// import applicationsData from "@/assets/data/applicationsData.json";

const applicationsData = [
    {
        "id": "automotive",
        "label": "Automotive",
        "title": "Automotive Manufacturing (Precision Grade)",
        "image": application1.src,
        "imageAlt": "Automotive precision components",
        "points": [
            "Body panels including doors, roofs, hoods, fenders, and trunk lids",
            "Exterior structural components requiring precise dimensional accuracy",
            "Interior structural panels and reinforcement sections",
            "EV body structures supporting lightweight vehicle design",
            "Why Cold-Rolled Steel: Smooth surface finish ensures superior paint quality and visual appearance while maintaining structural strength"
        ]
    },
    {
        "id": "appliances",
        "label": "Appliances",
        "title": "Appliance Manufacturing",
        "image": application2.src,
        "imageAlt": "Home appliance components",
        "points": [
            "Refrigerator outer bodies and internal frames ",
            "Washing machine structural frames and external panels ",
            "Dishwasher exterior housings and protective covers ",
            "Microwave and kitchen appliance enclosures ",
            "Why Cold-Rolled Steel: Premium surface finish supports coating durability and corrosion protection while maintaining dimensional consistency"
        ]
    },
    {
        "id": "hvac",
        "label": "HVAC Systems",
        "title": "HVAC Systems (Industrial Grade)",
        "image": application3.src,
        "imageAlt": "HVAC ductwork and systems",
        "points": [
            "Heating and cooling unit housings Industrial ductwork and ventilation components ",
            "Filter frames and air handling system enclosures ",
            "Precision sheet metal parts used in climate control systems ",
            "Why Cold-Rolled Steel: High formability enables accurate shaping and improved equipment durability"
        ]
    },
    {
        "id": "office-furniture",
        "label": "Office Furniture",
        "title": "Office & Storage Furniture Manufacturing",
        "image": application4.src,
        "imageAlt": "Office furniture steel frames",
        "points": [
            "Desk structural frames and metal bases Filing cabinet bodies and drawer structures ",
            "Storage shelving and workstation components ",
            "Modular furniture metal frameworks ",
            "Why Cold-Rolled Steel: Smooth finish improves coating adhesion and provides premium aesthetic quality"
        ]
    },
    {
        "id": "metal-packaging",
        "label": "Metal Packaging",
        "title": "Industrial & Consumer Packaging",
        "image": application5.src,
        "imageAlt": "Metal cans and packaging",
        "points": [
            "Paint cans and chemical storage containers ",
            "Industrial storage boxes and protective enclosures ",
            "Metal packaging requiring printing or coating applications ",
            "Lightweight storage containers for industrial materials ",
            "Why Cold-Rolled Steel: Clean surface enables high-quality printing and coating adhesion"
        ]
    },
    {
        "id": "machinery",
        "label": "Machinery & Equipment",
        "title": "Machinery & Industrial Equipment",
        "image": application6.src,
        "imageAlt": "Industrial machinery components",
        "points": [
            "Precision machinery outer housings Control cabinet and electrical enclosure structures ",
            "Machine protective guards and structural covers ",
            "Fabricated industrial machine components ",
            "Why Cold-Rolled Steel: Uniform microstructure ensures high machinability and production precision"
        ]
    },
    {
        "id": "construction",
        "label": "Construction",
        "title": "Interior Construction & Architectural Applications",
        "image": application7.src,
        "imageAlt": "Steel construction materials",
        "points": [
            "Interior wall cladding and partition panels ",
            "Decorative architectural metal panels ",
            "Lightweight structural framing components Building interior finishing materials ",
            "Why Cold-Rolled Steel: Superior surface quality supports decorative finishes and long-term durability"
        ]
    },
    {
        "id": "electrical",
        "label": "Electrical Equipment",
        "title": "Electrical & Power Distribution Equipment",
        "image": application8.src,
        "imageAlt": "Electrical Equipment",
        "points": [
            "Transformer tanks and protective enclosures ",
            "Switchgear cabinets and distribution boards ",
            "Electrical panel housing structures ",
            "Industrial control panel frameworks ",
            "Why Cold-Rolled Steel: Provides dimensional precision required for electrical assembly accuracy"
        ]
    },
    {
        "id": "consumer",
        "label": "Consumer Products",
        "title": "Consumer & Household Products",
        "image": application9.src,
        "imageAlt": "Consumer Products",
        "points": [
            "Kitchen appliance outer bodies",
            "Toolboxes and storage containers",
            "Home utility product enclosures",
            "Durable household equipment structures",
            "Why Cold-Rolled Steel: Attractive finish and lightweight strength support consumer product design"
        ]
    }
]

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
