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
                <h2 className={styles.title}>Sustainability & Market Trends</h2>

                <p className={styles.subtitle}>The industry is also influenced by:</p>

                <ul className={styles.trendsList}>
                    <li>
                        Sustainability concerns encouraging increased use of recycled or
                        secondary cryolite sources
                    </li>
                    <li>
                        Technological innovations in aluminium smelting and material processing
                    </li>
                    <li>
                        Regulatory changes related to fluoride exposure and environmental
                        compliance in certain regions
                    </li>
                </ul>

                <p className={styles.footer}>
                    As recycled cryolite solutions become more prominent, they align with both
                    cost efficiency and environmental responsibility trends in the metals industry.
                </p>
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