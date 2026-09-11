"use client";

import Image from "next/image";
import styles from "./LandingFooter.module.css";
import logo from "@/assets/images/common/logo.png";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaWhatsapp } from "react-icons/fa";

export default function LandingFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.brand}>
          <Image src={logo} alt="Yasashvi Ecogreen" width={170} height={44} className={styles.logo} />
          <p className={styles.tagline}>
            UAE-based manufacturing-backed supply of refractory Silicon Carbide, with full batch
            traceability and ISO-compliant documentation.
          </p>
        </div>

        <div className={styles.contactItems}>
          <a href="tel:+971585964345" className={styles.contactLink}>
            <FaPhoneAlt className={styles.icon} />
            +971 58 596 4345
          </a>
          <a
            href="https://wa.me/971585964345"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.contactLink}
          >
            <FaWhatsapp className={styles.icon} />
            WhatsApp Us
          </a>
          <a href="mailto:finance@yasashviecogreen.com" className={styles.contactLink}>
            <FaEnvelope className={styles.icon} />
            finance@yasashviecogreen.com
          </a>
          <span className={styles.contactLink}>
            <FaMapMarkerAlt className={styles.icon} />
            Dubai, United Arab Emirates
          </span>
        </div>
      </div>

      <div className={styles.bottom}>
        <p>&copy; {new Date().getFullYear()} Yasashvi Ecogreen. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
