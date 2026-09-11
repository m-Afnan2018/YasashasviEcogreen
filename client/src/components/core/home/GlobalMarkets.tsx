import Image from 'next/image'
import styles from './GlobalMarkets.module.css'
import mapImage from '@/assets/images/home/world-map.png'
import supportBg from '@/assets/images/home/support-bg.webp'

export function GlobalMarkets() {
    const regions = [
        { name: 'Middle East', color: 'black' },
        { name: 'Asia', color: 'green' },
        { name: 'Africa', color: 'black' },
        { name: 'International Markets', color: 'green' },
    ]

    return (
        <section className={styles.GlobalMarkets}>
            {/* Support Banner */}
            <div className={styles.supportBanner} style={{ backgroundImage: `url(${supportBg.src})` }}>
                <div className={styles.supportContent}>
                    <div>
                        <h2>Contact With Us For Customer Support</h2>
                        <p>We provide 24/7 hours support</p>
                    </div>
                    <a href='/contact-us' className={styles.supportBtn}>GET SUPPORT</a>
                </div>
            </div>

            {/* Markets Section */}
            <div className={styles.marketsSection}>
                <div className={styles.contentWrapper}>
                    <div className={styles.textContent}>
                        <h2>Global Markets<br />We Serve</h2>
                        <p className={styles.description}>
                            We actively support trade across multiple regions, adapting
                            to local regulations, logistics frameworks, and market
                            dynamics—while maintaining consistent, transparent trade
                            standards worldwide.
                        </p>

                        <div className={styles.regionsList}>
                            {regions.map((region, index) => (
                                <span
                                    key={index}
                                    className={`${styles.region} ${region.color === 'green' ? styles.green : styles.black}`}
                                >
                                    {region.name}
                                </span>
                            ))}
                        </div>

                        <p className={styles.footerText}>
                            Our global exposure allows us to adapt to regional regulations,
                            logistics requirements, and market dynamics, while maintaining
                            consistent, transparent trade standards.
                        </p>
                    </div>

                    <div className={styles.mapContainer}>
                        <Image
                            src={mapImage}
                            width={500}
                            height={500}
                            alt="Global Markets Map"
                            className={styles.mapImage}
                        />
                        <div className={styles.marker} data-location="middle-east">
                            <span className={styles.pin}></span>
                            <span className={styles.label}>Middle East</span>
                        </div>
                        <div className={styles.marker} data-location="asia">
                            <span className={styles.pin}></span>
                            <span className={styles.label}>Asia</span>
                        </div>
                        <div className={styles.marker} data-location="africa">
                            <span className={styles.pin}></span>
                            <span className={styles.label}>Africa</span>
                        </div>
                        <div className={styles.marker} data-location="international">
                            <span className={styles.pin}></span>
                            <span className={styles.label}>International Markets</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}