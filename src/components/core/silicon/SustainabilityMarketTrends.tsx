import React from 'react';
import styles from './SustainabilityMarketTrends.module.css';
import Image from 'next/image';
import industrialImage from '@/assets/images/product/cryolite/industrial.jpg'

// interface SustainabilityMarketTrendsProps {
//     industrialImage?: string;
// }

export default function SustainabilityMarketTrends() {
    return (
        <section className={styles.trendsSection}>
            <div className={styles.contentSide}>
                <h2 className={styles.title}>Environmental & Safety Profile</h2>

                {/* <p className={styles.subtitle}>The industry is also influenced by:</p> */}

                <ul className={styles.trendsList}>
                    <li>
                        Non-toxic in industrial handling
                    </li>
                    <li>
                        Dust can irritate respiratory system if inhaled in high concentrations (standard industrial PPE recommended)
                    </li>
                    <li>
                        Environmentally stable; biodegradable
                    </li>
                    <li>
                        Recyclable at end-of-life; supports circular economy initiatives
                    </li>
                    <li>
                        Compliant with OSHA, EPA, and international workplace safety standards
                    </li>
                </ul>

                {/* <p className={styles.footer}>
                    As recycled cryolite solutions become more prominent, they align with both
                    cost efficiency and environmental responsibility trends in the metals industry.
                </p> */}
            </div>

            <div className={styles.imageSide}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={industrialImage.src}
                        alt="Industrial facility showing aluminium processing equipment"
                        fill
                        style={{ objectFit: 'cover' }}
                    />
                </div>
            </div>
        </section>
    );
}