'use client';

import styles from './GrowthOutlook.module.css';
import growthBg from '@/assets/images/home/growth-background.webp';

interface GrowthPoint {
    id: number;
    text: string;
}

const growthPoints: GrowthPoint[] = [
    {
        id: 1,
        text: 'Expansion of global trading volumes'
    },
    {
        id: 2,
        text: 'Stronger presence in ferrous, non-ferrous, and mining product markets'
    },
    {
        id: 3,
        text: 'Increased export activity across multiple regions'
    },
    {
        id: 4,
        text: 'Long-term contracts supported by established metals and mining recyclers'
    }
];

export default function GrowthOutlook() {
    return (
        <section className={styles.growthSection} style={{ backgroundImage: `url(${growthBg.src})` }}>
            <div className={styles.overlay}></div>
            <div className={styles.container}>
                <div className={styles.content}>
                    <span className={styles.badge}>Growth Outlook</span>
                    <h2 className={styles.title}>
                        Yasashvi Ecogreen L.L.C Is Positioned For Steady And Sustainable Growth, Driven By:
                    </h2>
                    <div className={styles.underline}></div>
                    
                    <ul className={styles.pointsList}>
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