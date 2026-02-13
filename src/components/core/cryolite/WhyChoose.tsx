import React from 'react';
import styles from './WhyChoose.module.css';

export default function WhyChoose() {
    return (
        <section className={styles.whyChoose}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Why Choose 0–5mm?</h2>
                <p className={styles.description}>
                    The finest particle size delivers superior performance in applications requiring
                    precision grinding, surface finishing, and high-quality visual effects. Its small
                    grain size ensures uniform distribution and consistent results in every batch.
                </p>
            </div>
            <div className={styles.gradientSection}>
                {/* Gradient visual representation */}
            </div>
        </section>
    );
}