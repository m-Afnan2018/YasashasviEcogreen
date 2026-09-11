import React from 'react';
import styles from './MarketAdvantages.module.css';
import { FaCog, FaDollarSign, FaTools, FaLeaf, FaCertificate } from 'react-icons/fa';

export default function MarketAdvantages() {
    const advantages = [
        {
            icon: <FaCog />,
            title: 'Strategic Sourcing',
            description: 'Direct access to premium synthetic cryolite manufacturers ensures consistent supply despite exhausted natural Greenland deposits',
            color: '#8B7355'
        },
        {
            icon: <FaDollarSign />,
            title: 'Competitive Pricing',
            description: 'Bulk purchasing and established supplier relationships enable competitive rates',
            color: '#D32F2F'
        },
        {
            icon: <FaTools />,
            title: 'Technical Support',
            description: 'Expert guidance on optimal particle size selection, purity requirements, and application-specific formulations',
            color: '#8B7355'
        },
        {
            icon: <FaLeaf />,
            title: 'Sustainability Certification',
            description: 'Environmentally responsible production processes; suitable for companies with ESG commitments',
            color: '#4CAF50'
        },
        {
            icon: <FaCertificate />,
            title: 'Global Compliance',
            description: 'All grades meet international standards (ISO, ASTM, industry-specific certifications)',
            color: '#FFC107'
        }
    ];

    return (
        <section className={styles.advantagesSection}>
            <h2 className={styles.title}>Cryolite Market Advantages & Differentiation</h2>

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