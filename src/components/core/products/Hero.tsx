import styles from './Hero.module.css';
import hero from '@/assets/images/products/hero-image.png'

export default function Hero() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${hero.src})` }}>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Recycled Materials for Circular Industrial Use</h2>

                    <p className={styles.subheading}>Global Recycler & Processor of Metallurgical and Industrial Materials</p>

                    <p className={styles.description}>
                        Supplying secondary and recycled industrial materials that support sustainable manufacturing and responsible resource utilization.
                    </p>

                </div>

                <div className={styles.line}/>

                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>
                        Ask for sample 
                        <span>→</span>
                    </button>

                    <button className={styles.secondaryBtn}>
                        Download Broucher
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
