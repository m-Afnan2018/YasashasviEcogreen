'use client'

import React, { useState } from "react";
import styles from "./AluminiumIngots.module.css";
import Link from "next/link";
import heroImage from "@/assets/images/product/aluminium-ingots/hero-image.webp";
import SampleRequestPopup from "@/components/common/SampleRequestPopup/SampleRequestPopup";
import GlassContactCard from "@/components/common/GlassContactCard/GlassContactCard";

interface AluminiumIngots {
    backgroundImage?: string;
}

const AluminiumIngots: React.FC<AluminiumIngots> = ({
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
                                <Link href="/products" className={styles.breadcrumbLink}>
                                    Product
                                </Link>
                            </nav>

                            <h1 className={styles.title}>ALUMINIUM INGOTS <br /> (RECYCLED)</h1>

                            <p className={styles.description}>
                                Aluminium ingots are cast forms of pure or alloyed aluminium produced by pouring molten aluminium into specialized molds. They serve as the foundational raw material for aluminium-dependent industries, enabling transformation into finished products ranging from aircraft fuselages to beverage cans. Ingots represent the critical link between primary aluminium production and manufacturing sectors worldwide.
                            </p>

                            <div className={styles.buttonGroup}>
                                {/* Ask For Sample — hidden after submission */}
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
                            <GlassContactCard productName="Aluminium Ingots" />
                        </div>
                    </div>
                </div>
            </div>
            <SampleRequestPopup
                isOpen={popupOpen}
                onClose={handlePopupClose}
                onSuccess={handleSampleSuccess}
                productName="Aliminum Ingots"   // ← change per product
                formSubmitEmail="finance@yasashviecogreen.com"  // ← replace once globally
            />
        </div>
    );
};

export default AluminiumIngots;
