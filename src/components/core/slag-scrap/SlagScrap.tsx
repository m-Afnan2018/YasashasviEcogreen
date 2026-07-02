'use client'

import React, { useState } from "react";
import styles from "./SlagScrap.module.css";
import Link from "next/link";
import heroImage from "@/assets/images/product/slag-scrap/hero-image.webp";
import SampleRequestPopup from "@/components/common/SampleRequestPopup/SampleRequestPopup";
import GlassContactCard from "@/components/common/GlassContactCard/GlassContactCard";

interface SlagScrapHero {
    backgroundImage?: string;
}

const SlagScrapHero: React.FC<SlagScrapHero> = ({
    backgroundImage = `${heroImage.src}`,
}) => {
    const [popupOpen, setPopupOpen] = useState(false);
        const [sampleRequested, setSampleRequested] = useState(false);
    
        const handlePopupClose = () => {
            setPopupOpen(false);
            // If the form was submitted, hide the "Ask For Sample" button
            // We detect success by checking the popup's internal submitted state
            // via a callback prop instead
        };
    
        const handleSampleSuccess = () => {
            setSampleRequested(true);
            setPopupOpen(false);
        };
    return (
        <div
            className={styles.hero}
            style={{ backgroundImage: `url(${backgroundImage})` }}
        >
            <div className={styles.overlay}>
                <div className={styles.container}>
                    <div className={styles.contentGrid}>
                        <div className={styles.textColumn}>
                            <nav className={styles.breadcrumb}>
                                <Link href="/" className={styles.breadcrumbLink}>
                                    Home
                                </Link>
                                <span className={styles.breadcrumbSeparator}>›</span>
                                <span className={styles.breadcrumbCurrent}>Product</span>
                            </nav>

                            <h1 className={styles.title}>SLAG SCRAP</h1>

                            <p className={styles.description}>
                                Slag scrap represents a significant secondary material stream
                                generated during steel and metal production processes. Rather than
                                waste destined for landfills, slag scrap has become a valuable
                                commodity in the circular economy—recovered, processed, and
                                repurposed for diverse industrial applications.
                            </p>

                            <div className={styles.buttonGroup}>
                               {!sampleRequested && (
                                    <button
                                        onClick={() => setPopupOpen(true)}
                                        className={`${styles.button} ${styles.buttonPrimary}`}
                                    >
                                        {/*<svg
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
                                        </svg>*/}
                                        Ask For Sample
                                    </button>
                                )}
                                <a
                                    href="/files/yasashvi-ecogreen-company-profile.pdf"
                                    download={true}
                                    className={`${styles.button} ${styles.buttonSecondary}`}
                                >
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
                                </a>
                            </div>
                        </div>

                        <div className={styles.formColumn}>
                            <GlassContactCard productName="Slag Scrap" />
                        </div>
                    </div>
                </div>
            </div>
            <SampleRequestPopup
                isOpen={popupOpen}
                onClose={handlePopupClose}
                onSuccess={handleSampleSuccess}
                productName="Slag Scrap"   // ← change per product
                formSubmitEmail="finance@yasashviecogreen.com"  // ← replace once globally
            />
        </div>
    );
};

export default SlagScrapHero;
