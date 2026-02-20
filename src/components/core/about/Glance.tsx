'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Glance.module.css';
import { FaLeaf, FaRecycle, FaHandsHelping } from "react-icons/fa";
import type { StaticImageData } from 'next/image';
import glance1 from '@/assets/images/about/glance-1.webp'
import glance2 from '@/assets/images/about/glance-2.webp'
import glance3 from '@/assets/images/about/glance-3.webp'

interface GlanceItem {
    index: number;
    heading: string;
    category: string | null;
    title: string | null;
    prepoints: string | null;
    points: string[];
    description: string | null;
    glanceImage: StaticImageData;
}

const glanceData: GlanceItem[] = [
    {
        index: 0,
        heading: "SUSTAINABILITY MISSION",
        category: "Our sustainability mission is built on three core pillars",
        title: null,
        prepoints: null,
        points: [
            "Transforming industrial waste into reusable raw materials.",
            "Reducing emissions, waste, and raw material extraction through recycling.",
            "Helping industries operate with lower environmental impact while maintaining productivity.",
            "By integrating sustainability into every stage of processing and supply, we contribute to long-term environmental and economic resilience.",
        ],
        description: null,
        glanceImage: glance1
    },
    {
        index: 1,
        heading: "LEADERSHIP & VISION",
        category: null,
        title: null,
        prepoints: "Yashashvi Ecogreen L.L.C is led by Mr. Adish Jain, an industry professional with over 12 years of experience in the metal and steel sector, covering recycling operations, industrial processing, and global material supply.",
        points: [
            "Expanding sustainable recycling capabilities",
            "Building efficient processing systems ",
            "Developing global partnerships ",
            "Driving circular economy initiatives "
        ],
        description: "Under his guidance, the company continues to grow as a responsible industrial recycler.",
        glanceImage: glance2
    },
    {
        index: 2,
        heading: "INDUSTRIAL GUIDANCE & ECOSYSTEM",
        category: null,
        title: null,
        prepoints: "Yashashvi Ecogreen operates within a broader industrial ecosystem supported by decades of experience in metals, mining, and processing.",
        points: [
            "Expanding sustainable recycling capabilities ",
            "Building efficient processing systems ",
            "Developing global partnerships ",
            "Driving circular economy initiatives ",
        ],
        description: "Under his guidance, the company continues to grow as a responsible industrial recycler.",
        glanceImage: glance3
    }
];

const tabIcons = [FaLeaf, FaHandsHelping, FaRecycle];

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
                                alt={activeData.title || 'glanceImage'}
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