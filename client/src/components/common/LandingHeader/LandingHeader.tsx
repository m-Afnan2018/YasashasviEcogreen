"use client";

import Link from "next/link";
import Image from "next/image";
import styles from "./LandingHeader.module.css";
import logo from "@/assets/images/common/logo.png";
import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

const PHONE_DISPLAY = "+971 58 596 4345";
const PHONE_TEL = "tel:+971585964345";
const WHATSAPP_URL = "https://wa.me/971585964345";

export default function LandingHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <Image src={logo} alt="Yasashvi Ecogreen" width={160} height={40} />
        </Link>

        <nav className={styles.nav}>
          <Link href="/" className={styles.navLink}>Home</Link>
          <Link href="/about" className={styles.navLink}>About</Link>
          <Link href="/products" className={styles.navLink}>Products</Link>
          <Link href="/contact-us" className={styles.navLink}>Contact</Link>
        </nav>

        <div className={styles.ctaGroup}>
          <a href={PHONE_TEL} className={styles.ctaLink}>
            <FaPhoneAlt className={styles.ctaIcon} />
            <span>{PHONE_DISPLAY}</span>
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.ctaLink} ${styles.whatsapp}`}
          >
            <FaWhatsapp className={styles.ctaIcon} />
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </header>
  );
}
