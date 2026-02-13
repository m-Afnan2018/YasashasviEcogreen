import background from '@/assets/images/products/quality-standards.jpg'
import styles from './QualityStandards.module.css'

export default function QualityStandards() {
    return (
        <section className={styles.qualitySection} style={{ backgroundImage: `url(${background.src})` }}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <h2 className={styles.title}>QUALITY & PROCESSING STANDARDS</h2>
                    <p className={styles.subtitle}>
                        All Recycled Materials Are Produced Under Controlled Processing Systems That Focus On:
                    </p>

                    <div className={styles.featuresGrid}>
                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 8C18.745 8 8 18.745 8 32C8 45.255 18.745 56 32 56C45.255 56 56 45.255 56 32C56 18.745 45.255 8 32 8Z" fill="#4CAF50" />
                                    <path d="M24 32L30 38L42 26" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                                    <path d="M32 8L38 20L32 26L26 20L32 8Z" fill="#66BB6A" />
                                    <path d="M8 32L20 38L26 32L20 26L8 32Z" fill="#66BB6A" />
                                    <path d="M56 32L44 38L38 32L44 26L56 32Z" fill="#66BB6A" />
                                    <path d="M32 56L38 44L32 38L26 44L32 56Z" fill="#66BB6A" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Material recovery efficiency</h3>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <rect x="20" y="36" width="24" height="20" fill="#FF9800" rx="2" />
                                    <rect x="22" y="30" width="20" height="8" fill="#FFA726" />
                                    <rect x="24" y="24" width="16" height="8" fill="#FFB74D" />
                                    <path d="M28 16L32 8L36 16H28Z" fill="#FF6F00" />
                                    <circle cx="32" cy="20" r="3" fill="#FFD54F" />
                                    <rect x="26" y="40" width="4" height="12" fill="#F57C00" />
                                    <rect x="34" y="40" width="4" height="12" fill="#F57C00" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Industrial usability</h3>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="24" fill="#2196F3" />
                                    <circle cx="32" cy="32" r="18" fill="#42A5F5" />
                                    <path d="M32 14C32 14 24 22 24 32C24 38.627 27.373 44 32 44C36.627 44 40 38.627 40 32C40 22 32 14 32 14Z" fill="#64B5F6" />
                                    <circle cx="32" cy="32" r="8" fill="white" opacity="0.3" />
                                    <path d="M28 28L32 32L36 28" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="32" cy="32" r="2" fill="#4CAF50" />
                                    <path d="M30 34L34 34L32 38L30 34Z" fill="#4CAF50" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Compliance with global trade standards</h3>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="32" cy="32" r="24" fill="#4CAF50" />
                                    <circle cx="32" cy="32" r="18" fill="#66BB6A" />
                                    <path d="M32 14L36 24L32 28L28 24L32 14Z" fill="#81C784" />
                                    <circle cx="32" cy="32" r="3" fill="white" />
                                    <path d="M22 30L28 32L24 36L22 30Z" fill="#81C784" />
                                    <path d="M42 30L36 32L40 36L42 30Z" fill="#81C784" />
                                    <path d="M26 42L30 36L32 40L26 42Z" fill="#81C784" />
                                    <path d="M38 42L34 36L32 40L38 42Z" fill="#81C784" />
                                    <circle cx="32" cy="32" r="20" stroke="white" strokeWidth="2" strokeDasharray="4 4" opacity="0.5" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Consistent grading and quality alignment</h3>
                        </div>

                        <div className={styles.feature}>
                            <div className={styles.iconWrapper}>
                                <svg className={styles.icon} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M32 8L28 16L24 24C24 24 20 28 20 32C20 38 24 44 32 52C40 44 44 38 44 32C44 28 40 24 40 24L36 16L32 8Z" fill="#4CAF50" />
                                    <path d="M32 12L30 18L28 24C28 24 26 27 26 30C26 34 28 38 32 44C36 38 38 34 38 30C38 27 36 24 36 24L34 18L32 12Z" fill="#66BB6A" />
                                    <ellipse cx="32" cy="48" rx="10" ry="4" fill="#2E7D32" opacity="0.3" />
                                    <path d="M28 24L32 28L36 24" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    <circle cx="30" cy="32" r="1.5" fill="white" opacity="0.7" />
                                    <circle cx="34" cy="32" r="1.5" fill="white" opacity="0.7" />
                                </svg>
                            </div>
                            <h3 className={styles.featureTitle}>Environmental responsibility</h3>
                        </div>
                    </div>

                    <p className={styles.objective}>
                        Our Objective Is To Supply Recycled Materials That Perform Reliably In Demanding Industrial Environments
                    </p>
                </div>
            </div>
        </section>
    )
}