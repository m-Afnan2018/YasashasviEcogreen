'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Glance.module.css';
import { FaThumbsUp, FaHandshake, FaStar } from 'react-icons/fa';
import type { StaticImageData } from 'next/image';
import glance1 from '@/assets/images/home/glance-1.webp'
import glance2 from '@/assets/images/home/glance-2.webp'
import glance3 from '@/assets/images/home/glance-3.webp'

interface GlanceItem {
    index: number;
    heading: string;
    category: string;
    title: string;
    prepoints: string | null;
    points: string[];
    description: string | null;
    glanceImage: StaticImageData;
}

const glanceData: GlanceItem[] = [
    {
        index: 0,
        heading: "What We Do (At a Glance)",
        category: "Engineering",
        title: "Innovation and Efficiency the Core Of Manufacturing",
        prepoints: null,
        points: [
            "Global import & export operations",
            "Trading of ferrous and non-ferrous industrial materials",
            "Supply coordination between producers and buyers",
            "Customer-friendly trade execution with flexible financial structuring",
            "Simplified processes supporting ease of doing business",
            "Specification-based sourcing and supply",
            "International logistics and documentation coordination",
            "Long-term, relationship-driven trade partnerships"
        ],
        description: null,
        glanceImage: glance1
    },
    {
        index: 1,
        heading: "Strategic Association with METCYCLE",
        category: "Engineering",
        title: "Strategic Association with METCYCLE",
        prepoints: "Yasashvi Ecogreen L.L.C is strategically associated with METCYCLE Metal and Mineral Processing SP LLC, a UAE-based manufacturing company actively producing:",
        points: [
            "Sodium Cryolite",
            "Silicon Carbide",
            "Aluminium Ingots",
            "Slag Scrap and other industrial materials"
        ],
        description: "This association enables us to offer manufacturing-backed trade reliability, consistent supply capability, and scalability for long-term contracts—strengthening buyer confidence across global markets.",
        glanceImage: glance2
    },
    {
        index: 2,
        heading: "Why Choose Yasashvi Ecogreen",
        category: "Engineering",
        title: "Why Choose Yasashvi Ecogreen",
        prepoints: null,
        points: [
            "UAE-based, compliance-focused trading company",
            "Strong understanding of industrial & metallurgical markets",
            "Manufacturing-backed supply through METCYCLE association",
            "Transparent, customer-friendly trade execution",
            "Long-term partnership-driven approach",
            "Scalable operations aligned with global demand"
        ],
        description: null,
        glanceImage: glance3
    }
];

const tabIcons = [FaThumbsUp, FaHandshake, FaStar];

export default function GlanceSection() {
    const [activeTab, setActiveTab] = useState(1);

    const activeData = glanceData[activeTab];
    // const TabIcon = tabIcons[activeTab];

    return (
        <section className={styles.glanceSection}>
            <div className={styles.container}>
                {/* Tabs */}
                <div className={styles.tabs}>
                    {glanceData.map((item, index) => {
                        const Icon = tabIcons[index];
                        return (
                            <button
                                key={item.index}
                                className={`${styles.tab} ${activeTab === index ? styles.tabActive : ''}`}
                                onClick={() => setActiveTab(index)}
                            >
                                <Icon className={styles.tabIcon} />
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

                        {activeData.prepoints && (
                            <p className={styles.prepoints}>{activeData.prepoints}</p>
                        )}

                        <ul className={styles.pointsList}>
                            {activeData.points.map((point, idx) => (
                                <li key={idx} className={styles.point}>
                                    <span className={styles.bullet}></span>
                                    <span className={styles.pointText}>{point}</span>
                                </li>
                            ))}
                        </ul>

                        {activeData.description && (
                            <p className={styles.description}>{activeData.description}</p>
                        )}
                    </div>

                    {/* Right Image */}
                    <div className={styles.rightContent}>
                        <div className={styles.imageContainer}>
                            <Image
                                src={activeData.glanceImage.src}
                                alt={activeData.title}
                                className={styles.image}
                                fill
                                style={{ objectFit: 'cover' }}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}