import styles from './SupportBanner.module.css'
import supportBg from '@/assets/images/home/support-bg.jpg'

export function SupportBanner() {

    return (
        <section className={styles.GlobalMarkets}>
            {/* Support Banner */}
            <div className={styles.supportBanner} style={{ backgroundImage: `url(${supportBg.src})` }}>
                <div className={styles.supportContent}>
                    <div>
                        <h2>Contact With Us For Customer Support</h2>
                        <p>We provide 24/7 hours support</p>
                    </div>
                    <button className={styles.supportBtn}>GET SUPPORT</button>
                </div>
            </div>
        </section>
    )
}