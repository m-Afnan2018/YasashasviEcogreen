'use client';

import { useState } from 'react';
import Image from 'next/image';
import styles from './Glance.module.css';
import { FaThumbsUp, FaHandshake, FaStar } from 'react-icons/fa';
import type { StaticImageData } from 'next/image';
import glance1 from '@/assets/images/home/glance-1.png'
import glance2 from '@/assets/images/home/glance-2.png'
import glance3 from '@/assets/images/home/glance-3.png'

interface GlanceItem {
    index: number;
    heading: string;
    category: string | null;
    title: string;
    prepoints: string | null;
    points: string[];
    description: string | null;
    glanceImage: StaticImageData;
}

const glanceData: GlanceItem[] = [
    {
        index: 0,
        heading: "Industrial Abrasive Grade",
        category: null,
        title: "Silicon Carbide Grade Classifications",
        prepoints: "Industrial Abrasive Grade",
        points: [
            "Optimized for grinding, honing, and cutting applications",
            "High particle consistency ensures uniform performance",
            "Available in various mesh sizes (from coarse 20-grit to ultra-fine 600-grit)",
            "Used in bonded and coated abrasive products"
        ],
        description: null,
        glanceImage: glance1
    },
    {
        index: 1,
        heading: "Refractory Grade",
        category: null,
        title: "Silicon Carbide Grade Classifications",
        prepoints: "Refractory Grade",
        points: [
            "Optimized for grinding, honing, and cutting applications",
            "High particle consistency ensures uniform performance",
            "Available in various mesh sizes (from coarse 20-grit to ultra-fine 600-grit)",
            "Used in bonded and coated abrasive products"
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
    const TabIcon = tabIcons[activeTab];

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
                        {activeData.category && <span className={styles.category}>{activeData.category}</span>}
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