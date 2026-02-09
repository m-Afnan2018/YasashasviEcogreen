import styles from './Hero.module.css';
import hero from '@/assets/images/about/hero-image.jpg'

export default function Hero() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${hero.src})` }}>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Trusted Partner for Sustainable Global Trade</h2>

                    <p className={styles.subheading}>Global Recycler & Processor of Metallurgical and Industrial Materials</p>

                    <p className={styles.description}>
                        Connecting global industrial markets with reliable sourcing, transparent trade execution, and manufacturing-backed supply capabilities.
                    </p>

                </div>

                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>
                        Talk to an Expert
                        <span>→</span>
                    </button>

                    {/* <button className={styles.secondaryBtn}>
                        Get in Touch
                        <span>→</span>
                    </button> */}
                </div>
            </div>
        </section>
    );
}
