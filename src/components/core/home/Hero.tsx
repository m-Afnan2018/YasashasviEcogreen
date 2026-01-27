import styles from './Hero.module.css'
import heroImage from '@/assets/images/home/hero-image.jpg'

export function Hero() {
    return <section className={styles.Hero} style={{ background: `url(${heroImage.src})` }}>
        <h2>Global Trading Partner for Metallurgical & Industrial Products</h2>
        <h4>Import • Export • Trade • Supply Coordination <br/>
            UAE-Based | Serving Global Industrial Markets
        </h4>
        <h4>Yashashvi Ecogreen L.L.C is a UAE-based trading company specializing in the global import
            and export of industrial and metallurgical materials, supporting aluminium, steel, mining,
            and allied manufacturing industries across international markets.
        </h4>

        <button className={`${styles.navigationButtons} ${styles.left}`}>Previous</button>
        <button className={`${styles.navigationButtons} ${styles.right}`}>Next</button>

        <div>
            <button>Explore Our Products</button>
            <button>Contact Our Trade Desk</button>
        </div>
    </section>
}