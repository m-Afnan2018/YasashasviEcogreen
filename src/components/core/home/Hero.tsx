import styles from './Hero.module.css';
import hero from '@/assets/images/home/hero-image.jpg'

export default function Hero() {
    return (
        <section className={styles.hero} style={{ backgroundImage: `url(${hero.src})` }}>
            <div className={styles.overlay} />

            <div className={styles.content}>
                <div className={styles.left}>
                    <h2>Transforming Industrial Waste into High-Value Resources</h2>

                    <p className={styles.subheading}>Global Recycler & Processor of Metallurgical and Industrial Materials</p>

                    <p className={styles.description}>
                        Yashashvi Ecogreen L.L.C is a UAE-based recycling and processing company
                        specializing in converting industrial waste and secondary raw materials
                        into reusable, high-performance products for aluminium, steel, mining,
                        and manufacturing industries worldwide.
                    </p>

                </div>

                <div className={styles.actions}>
                    <button className={styles.primaryBtn}>
                        Explore what we do
                        <span>→</span>
                    </button>

                    <button className={styles.secondaryBtn}>
                        Get in Touch
                        <span>→</span>
                    </button>
                </div>
            </div>
        </section>
    );
}
