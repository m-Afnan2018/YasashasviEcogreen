import React from 'react';
import styles from './WhyChoose.module.css';

export default function WhyChoose() {
    return (
        <section className={styles.whyChoose}>
            <div className={styles.textSection}>
                <h2 className={styles.title}>Industrial Furnace Applications</h2>
                <p className={styles.description}>
                    Silicon Carbide is widely used in industrial furnaces for kiln furniture, burner nozzles, heating elements, and molten metal handling equipment due to its excellent thermal stability and high-temperature resistance.
                </p>
            </div>
            <div className={styles.gradientSection}>
                {/* Gradient visual representation */}
            </div>
        </section>
    );
}