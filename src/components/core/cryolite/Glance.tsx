"use client";

import { useState } from "react";
import Image from "next/image";
import styles from "./Glance.module.css";
import type { StaticImageData } from "next/image";
import glance1 from "@/assets/images/home/glance-1.png";
import glance2 from "@/assets/images/home/glance-2.png";
import glance3 from "@/assets/images/home/glance-3.png";
import glance4 from "@/assets/images/home/glance-3.png";
import glance5 from "@/assets/images/home/glance-3.png";

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
}

const glanceData: GlanceItem[] = [
  {
    index: 0,
    heading: "CRYOLITE 0-5mm (Fine Powder Grade)",
    title: "CRYOLITE 0-5mm (Fine Powder Grade)",
    description:
      "Application: Premium industrial flux and active filler for precision applications",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Particle Size: 0–5 millimeters ",
          "Purity: 60–65% (Standard Grade) | 70%+ (High-Purity Grade) ",
          "Appearance: Fine white powder with uniform grain distribution ",
          "Moisture Content: <2% Packaging: 25 kg / 50 kg bags or bulk containers",
        ],
      },
      {
        heading: "Primary Uses:",
        points: [
          "Abrasive Industry: Active filler in bonded and coated abrasives (grinding wheels, sandpapers, cutting discs) ",
          "Enamel & Glass Manufacturing: Opacifying agent and flux; produces milky-white, durable enamels ",
          "Automotive Applications: Brake pad linings and friction materials Welding & Soldering: Component in welding rod coatings and flux formulations ",
          "Fireworks Production: Creates vibrant yellow coloration in pyrotechnic displays",
        ],
      },
      {
        heading: "Performance Benefits:",
        points: [
          "Produces smooth, uniform finishes with minimal heat generation ",
          "Prevents workpiece overheating during grinding operations ",
          "Non-toxic and environmentally safe ",
          "Biodegradable formulation ",
          "Excellent thermal stability",
        ],
      },
    ],
    glanceImage: glance1,
  },
  {
    index: 1,
    heading: "CRYOLITE 5-20mm (Medium Grade)",
    title: "CRYOLITE 5-20mm (Medium Grade)",
    description:
      "Application: Industrial flux and solvent for aluminum smelting and metallurgical processes",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Particle Size: 5–20 millimeters",
          "Purity: 60–70% (Industrial Grade) | 75%+ (Premium Grade)",
          "Appearance: Medium white granules with even dispersion",
          "Melting Efficiency: Optimized for rapid dissolution in molten alumina",
          "Packaging: 25 kg / 50 kg bags, jumbo bags (500 kg+), bulk shipments",
        ],
      },
      {
        heading: "Primary Uses:",
        points: [
          "Aluminum Electrolysis (Hall–Héroult process)",
          "Non-Ferrous Metallurgy (alloys, magnesium reduction)",
          "Boiling Steel Production (deoxidizer & refining agent)",
          "Chemical Synthesis (aluminum fluoride precursor)",
          "Ceramic Kiln Processes (energy-efficient flux)",
        ],
      },
      {
        heading: "Performance Benefits:",
        points: [
          "Improves electrical efficiency in electrolytic cells",
          "Minimizes fluorine losses and emissions",
          "Increases aluminum yield per unit input",
          "Optimal sodium-to-aluminum molecular ratio",
          "Predictable smelting parameters",
        ],
      },
      {
        heading: "Industrial Specifications:",
        points: [
          "Sodium-to-Aluminum ratio: Minimum 1.3:1",
          "Silicon oxide: <0.5%",
          "Iron oxide: <0.3%",
          "Phosphorus pentoxide: <0.1%",
          "Water content: <0.5%",
        ],
      },
    ],
    glanceImage: glance2,
  },
  {
    index: 2,
    heading: "CRYOLITE 20-40mm (Coarse Industrial Grade)",
    title: "CRYOLITE 20-40mm (Coarse Industrial Grade)",
    description:
      "Application: Bulk flux supply for large-scale aluminum smelting operations and foundries",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Particle Size: 20–40 millimeters",
          "Purity: 55–65% (Industrial Grade) | 70%+ (Specialized Applications)",
          "Appearance: Large white granules for bulk handling",
          "Bulk Density: 1.4–1.6 g/cm³",
          "Packaging: 50 kg bags, 1 ton jumbo containers, bulk tanker shipments",
        ],
      },
      {
        heading: "Primary Uses:",
        points: [
          "High-Volume Aluminum Smelting",
          "Industrial Foundries",
          "Metallurgical R&D",
          "Bulk Continuous Smelting Operations",
          "Secondary Aluminum Processing",
        ],
      },
      {
        heading: "Performance Benefits:",
        points: [
          "Reduced dust generation",
          "Easy automated handling",
          "Cost-effective bulk pricing",
          "Consistent quality across batches",
          "Ideal for dust-controlled environments",
        ],
      },
      {
        heading: "Handling & Storage:",
        points: [
          "Store in dry conditions",
          "Use sealed moisture-resistant containers",
          "Optimal storage temperature: 15–25°C",
          "Avoid prolonged air exposure",
        ],
      },
    ],
    glanceImage: glance3,
  },
  {
    index: 3,
    heading: "CRYOLITE 0-40mm (Versatile Mixed Grade)",
    title: "CRYOLITE 0-40mm (Versatile Mixed Grade)",
    description:
      "Application: Universal solution for multiple applications requiring diverse particle sizes",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Particle Size: 0–40mm (full spectrum blend)",
          "Purity: 60–70% (Standard Industrial)",
          "Appearance: Mixed white granules (fine to coarse)",
          "Single product suitable for multiple end uses",
          "Packaging: 25 / 50 kg bags, 500 kg jumbo bags, bulk containers",
        ],
      },
      {
        heading: "Primary Uses:",
        points: [
          "Multi-department industrial supply",
          "Aluminum smelting & secondary processing",
          "Abrasive, glass & enamel manufacturing",
          "R&D sample testing",
          "Emergency replacement supply",
        ],
      },
      {
        heading: "Performance Benefits:",
        points: [
          "Simplifies supply chain (single SKU)",
          "Reduces storage space",
          "Cost savings through consolidation",
          "Flexible internal allocation",
        ],
      },
      {
        heading: "Quality Assurance:",
        points: [
          "Uniform purity across all particle sizes",
          "Pre-mixed blends available",
          "Custom blending on request",
        ],
      },
    ],
    glanceImage: glance4,
  },
  {
    index: 4,
    heading: "CRYOLITE 5-40mm (Premium Industrial Blend)",
    title: "CRYOLITE 5-40mm (Premium Industrial Blend)",
    description:
      "Application: Optimized blend for large-scale industrial operations requiring medium to coarse grades",
    points: [
      {
        heading: "Specifications:",
        points: [
          "Particle Size: 5–40mm (excludes 0–5mm fines)",
          "Purity: 65–75% (Premium Grade)",
          "Uniform medium to large granules",
          "Optimized for dust-sensitive environments",
          "Packaging: 50 kg bags, 500 kg jumbo, bulk shipments",
        ],
      },
      {
        heading: "Primary Uses:",
        points: [
          "Large-scale aluminum smelting potlines",
          "Dust-restricted industrial environments",
          "Automated handling systems",
          "Secondary aluminum processing",
          "Ferroalloy & non-ferrous casting",
        ],
      },
      {
        heading: "Performance Benefits:",
        points: [
          "Significantly reduced dust",
          "Compatible with automated systems",
          "Predictable smelting performance",
          "Improved process repeatability",
          "Lower contamination risk",
        ],
      },
      {
        heading: "Environmental & Safety Compliance:",
        points: [
          "Meets OSHA particulate standards",
          "Non-toxic & biodegradable",
          "EPA compliant",
          "Safe for strict air-quality facilities",
        ],
      },
    ],
    glanceImage: glance5,
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
      </div>
    </section>
  );
}
