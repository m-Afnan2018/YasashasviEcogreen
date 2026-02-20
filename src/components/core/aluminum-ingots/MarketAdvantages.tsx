import React from 'react';
import styles from './MarketAdvantages.module.css';
import { FaCog, FaDollarSign, FaTools} from 'react-icons/fa';

export default function MarketAdvantages() {
    const advantages = [
        {
            icon: <FaCog />,
            title: 'Direct Chill (DC) Casting (Premium Method)',
            description: 'Direct Chill casting produces high-purity aluminum ingots using controlled water-cooled solidification, ensuring minimal defects and superior quality for premium industrial applications.',
            color: '#8B7355'
        },
        {
            icon: <FaDollarSign />,
            title: 'Continuous Casting (High-Volume Method)',
            description: 'Continuous casting produces aluminum ingots by continuously feeding molten metal onto a moving cooling system, enabling high-speed, cost-effective, and consistent production ideal for large-scale manufacturing.',
            color: '#D32F2F'
        },
        {
            icon: <FaTools />,
            title: 'Smelting & Semi-Continuous Casting',
            description: 'Smelting and semi-continuous casting is a traditional aluminum production method where molten metal is cooled in stationary molds and naturally solidified. It produces reliable ingots suitable for standard and non-critical industrial applications.',
            color: '#8B7355'
        },
    ];

    return (
        <section className={styles.advantagesSection}>
            <h2 className={styles.title}>Aluminum Ingot Manufacturing Process</h2>

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