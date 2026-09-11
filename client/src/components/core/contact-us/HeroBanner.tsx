import styles from "./HeroBanner.module.css";
import heroImage from '@/assets/images/contact-us/hero-image.jpg'

export default function HeroBanner() {
    return (
        <section className={styles.hero} style={{ background: `url(${heroImage.src})`, backgroundSize: 'cover' }}>
            <div className={styles.overlay}>
                <div className={styles.content}>
                    <div className={styles.breadcrumb}>
                        <h5>Home</h5>
                        <h5 className={styles.separator}>{'>'}</h5>
                        <h5>What we do</h5>
                    </div>
                    <h2>WHAT CAN WE MAKE POSSIBLE FOR YOU?</h2>
                    <p className={styles.subtitle}>
                        We work across industrial ecosystems to promote recycled materials, responsible processing, and sustainable material use.
                    </p>
                </div>
            </div>
        </section>
    );
}