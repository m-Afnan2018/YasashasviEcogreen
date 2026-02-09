'use client';

import styles from './OurRecycling.module.css';
import growthBg from '@/assets/images/home/growth-background.jpg';

interface OurRecycling {
    id: number;
    text: string;
}

const growthPoints: OurRecycling[] = [
    {
        id: 1,
        text: ' Maximizing material reuse'
    },
    {
        id: 2,
        text: 'Reducing industrial landfill waste'
    },
    {
        id: 3,
        text: 'Recovering value from by-productse'
    },
    {
        id: 4,
        text: 'Supporting sustainable manufacturing systems'
    },
    {
        id: 5,
        text: 'Supporting sustainable manufacturing systems'
    }
];

export default function OurRecycling() {
    return (
        <section className={styles.growthSection} style={{ backgroundImage: `url(${growthBg.src})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>OUR RECYCLING PHILOSOPHY</span>
                    <h2 className={styles.title}>
                        At Yashashvi Ecogreen, recycling is more than waste management — it is industrial resource recovery.
                    </h2>
                    <div className={styles.underline}></div>

                    <ul className={styles.pointsList}>
                        <h4>We focus on:</h4>
                        {growthPoints.map((point) => (
                            <li key={point.id} className={styles.point}>
                                <span className={styles.bullet}></span>
                                <span className={styles.pointText}>{point.text}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
}