import React from 'react';
import styles from './CryoliteHero.module.css';
import Link from 'next/link';

interface CryoliteHeroProps {
    backgroundImage?: string;
}

const CryoliteHero: React.FC<CryoliteHeroProps> = ({
    backgroundImage = '/mnt/user-data/uploads/1770785889785_image.png'
}) => {
    return (
        <div className={styles.hero} style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <nav className={styles.breadcrumb}>
                        <Link href="/" className={styles.breadcrumbLink}>Home</Link>
                        <span className={styles.breadcrumbSeparator}>›</span>
                        <span className={styles.breadcrumbCurrent}>Product</span>
                    </nav>

                    <h1 className={styles.title}>
                        Silicon Carbide ( SIC )
                    </h1>

                    <p className={styles.description}>
                        {/* Cryolite (Na<sub>3</sub>AlF<sub>6</sub>), also known as sodium hexafluoroaluminate,
                        is a critical industrial mineral and chemical compound composed of sodium, aluminum,
                        and fluorine. Once mined exclusively in Greenland until 1987, cryolite is now produced
                        synthetically through industrial processes, maintaining identical chemical composition
                        and performance to natural reserves. */}
                        Silicon Carbide is a synthetically manufactured compound of silicon and carbon (SiC) that has become the industry standard for high-performance applications requiring exceptional hardness, thermal stability, and chemical inertness. Unlike naturally occurring abrasives, industrial-grade SiC is engineered for consistency and precision, delivering predictable results across demanding applications.
                    </p>

                    <div className={styles.buttonGroup}>
                        <button className={`${styles.button} ${styles.buttonPrimary}`}>
                            <svg
                                className={styles.buttonIcon}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Ask For Sample
                        </button>
                        <button className={`${styles.button} ${styles.buttonSecondary}`}>
                            <svg
                                className={styles.buttonIcon}
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fillRule="evenodd"
                                    d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                                    clipRule="evenodd"
                                />
                            </svg>
                            Download Brouchure
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CryoliteHero;