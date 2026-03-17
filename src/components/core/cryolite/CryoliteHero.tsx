'use client'

import React, { useState } from "react";
import styles from "./CryoliteHero.module.css";
import image from "@/assets/images/product/cryolite/hero-image.png";
import Link from "next/link";
import SampleRequestPopup from "@/components/common/SampleRequestPopup/SampleRequestPopup";

interface CryoliteHeroProps {
    backgroundImage?: string;
}

const CryoliteHero: React.FC<CryoliteHeroProps> = ({
    backgroundImage = image.src,
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
                    <nav className={styles.breadcrumb}>
                        <Link href="/" className={styles.breadcrumbLink}>
                            Home
                        </Link>
                        <span className={styles.breadcrumbSeparator}>›</span>
                        <span className={styles.breadcrumbCurrent}>Product</span>
                    </nav>

                    <h1 className={styles.title}>
                        Sodium Hexafluoroaluminate <br /> ( Cryolite )
                    </h1>

                    <p className={styles.description}>
                        Cryolite (Na<sub>3</sub>AlF<sub>6</sub>), also known as sodium
                        hexafluoroaluminate, is a critical industrial mineral and chemical
                        compound composed of sodium, aluminium, and fluorine. Once mined
                        exclusively in Greenland until 1987, cryolite is now produced
                        synthetically through industrial processes, maintaining identical
                        chemical composition and performance to natural reserves.
                    </p>

                    <div className={styles.buttonGroup}>
                        {/* Ask For Sample — hidden after submission */}
                        {!sampleRequested && (
                            <button
                                onClick={() => setPopupOpen(true)}
                                className={`${styles.button} ${styles.buttonPrimary}`}
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
            </div>
            <SampleRequestPopup
                isOpen={popupOpen}
                onClose={handlePopupClose}
                onSuccess={handleSampleSuccess}
                productName="Cryolite"   // ← change per product
                formSubmitEmail="finance@yasashviecogreen.com"  // ← replace once globally
            />
        </div>
    );
};

export default CryoliteHero;
