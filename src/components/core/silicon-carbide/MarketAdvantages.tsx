import React from 'react';
import styles from './MarketAdvantages.module.css';
import { FaCog, FaDollarSign, FaTools, FaLeaf, FaCertificate } from 'react-icons/fa';

export default function MarketAdvantages() {
    const advantages = [
        {
            icon: <FaCog />,
            title: 'Direct Mill Relationships',
            description: 'Secured access to premium cold-rolled material from established suppliers',
            color: '#8B7355'
        },
        {
            icon: <FaDollarSign />,
            title: 'Consistent Quality',
            description: 'All batches meet specification; certificates of conformance provided',
            color: '#D32F2F'
        },
        {
            icon: <FaTools />,
            title: 'Flexible Order Quantities',
            description: 'From 500kg coils for small manufacturers to 20+ ton shipments',
            color: '#8B7355'
        },
        {
            icon: <FaLeaf />,
            title: 'Technical Guidance',
            description: 'Assistance selecting appropriate grades for specific applications',
            color: '#4CAF50'
        },
        {
            icon: <FaCertificate />,
            title: 'Logistics Support',
            description: 'Arranged delivery or FOB terms; coil packaging suitable for safe transport',
            color: '#FFC107'
        }
    ];

    return (
        <section className={styles.advantagesSection}>
            <h2 className={styles.title}>Our Competitive Advantages</h2>

            <div className={styles.advantagesGrid}>
                {advantages.map((advantage, index) => (
                    <div key={index} className={styles.advantageCard}>
                        <div className={styles.iconWrapper} style={{ color: advantage.color }}>
                            {advantage.icon}
                        </div>
                        <h3 className={styles.advantageTitle}>{advantage.title}</h3>
                        <p className={styles.advantageDescription}>{advantage.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}