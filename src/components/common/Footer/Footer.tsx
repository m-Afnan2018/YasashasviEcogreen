'use client';

import Link from 'next/link';
import Image from 'next/image';
import styles from './Footer.module.css';
import logo from '@/assets/images/common/logo.png'; // Adjust path as needed
import { FaFacebookF, FaLinkedinIn, FaWhatsapp, FaMapMarkerAlt, FaEnvelope, FaPhoneAlt, FaInstagram } from 'react-icons/fa';

interface QuickLink {
    label: string;
    href: string;
}

interface Products {
    label: string;
    href: string;
}

const quickLinks: QuickLink[] = [
    { label: 'About Us', href: '/about' },
    // { label: 'Services', href: '/services' },
    { label: 'What We Do', href: '/what-we-do' },
    { label: 'Products', href: '/products' },
    { label: 'Contact Us', href: '/contact-us' }
];

const products: Products[] = [
    { label: 'Silicon Carbide', href: '/product/silicon-carbide' },
    { label: 'Cryolite', href: '/product/cryolite' },
    { label: 'Iron and Steel', href: '/product/iron-and-steel' },
    { label: 'Aluminium Ingots', href: '/product/aluminium-ingots' },
    { label: 'Slag Scrap', href: '/product/slag-scrap' }
];

const socialLinks = [
    { name: 'Facebook', icon: FaFacebookF, href: 'https://www.facebook.com/profile.php?id=61587226593223' },
    // { name: 'Twitter', icon: FaTwitter, href: '#' },
    { name: 'LinkedIn', icon: FaLinkedinIn, href: 'https://www.linkedin.com/company/111273323/admin/dashboard/' },
    { name: 'WhatsApp', icon: FaWhatsapp, href: 'https://wa.me/+971585964345' },
    { name: 'Instagram', icon: FaInstagram, href: 'https://www.instagram.com/yasashviecogreen' },
    // { name: 'Pinterest', icon: FaPinterestP, href: '#' }
];
// const socialLinks = [
//     { name: 'Facebook', icon: 'facebook', href: '#', iconClass: 'fab fa-facebook-f' },
//     { name: 'Twitter', icon: 'twitter', href: '#', iconClass: 'fab fa-twitter' },
//     { name: 'LinkedIn', icon: 'linkedin', href: '#', iconClass: 'fab fa-linkedin-in' },
//     { name: 'WhatsApp', icon: 'whatsapp', href: '#', iconClass: 'fab fa-whatsapp' },
//     { name: 'Pinterest', icon: 'pinterest', href: '#', iconClass: 'fab fa-pinterest-p' }
// ];

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.footerGrid}>
                    {/* Company Info Section */}
                    <div className={styles.companySection}>
                        <div className={styles.logoContainer}>
                            <Image
                                src={logo}
                                alt="Yasashvi Ecogreen LLC"
                                className={styles.logo}
                                width={200}
                                height={60}
                            />
                        </div>
                        <p className={styles.companyDescription}>
                            Connecting global markets through transparent, compliant, and responsible trade.
                            Built on trust, sustainability, and long-term partnerships.
                        </p>
                        <div className={styles.socialLinks}>
                            {socialLinks.map((social) => {
                                const IconComponent = social.icon;
                                return (
                                    <a
                                        key={social.name}
                                        href={social.href}
                                        className={styles.socialLink}
                                        aria-label={social.name}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <IconComponent />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Quick Links Section */}
                    <div className={styles.linksSection}>
                        <h3 className={styles.sectionTitle}>QUICK LINKS</h3>
                        <ul className={styles.linksList}>
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <Link href={link.href} className={styles.link}>
                                        {link.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Industries Section */}
                    <div className={styles.linksSection}>
                        <h3 className={styles.sectionTitle}>Products</h3>
                        <ul className={styles.linksList}>
                            {products.map((industry) => (
                                <li key={industry.label}>
                                    <Link href={industry.href} className={styles.link}>
                                        {industry.label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Section */}
                    <div className={styles.contactSection}>
                        <h3 className={styles.sectionTitle}>CONTACT FORM</h3>
                        <div className={styles.contactItems}>
                            {/* <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <i className="fas fa-map-marker-alt"></i>
                                </div>
                                <a className={styles.contactText}>
                                    Office 406, 201 Mashreq, Al Sug Al Kabeer, Dubai, United Arab Emirates
                                </a>
                            </div> */}

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <FaMapMarkerAlt />
                                </div>
                                <a href="mailto:finance@yasashviecogreen.com" className={styles.contactLink}>
                                    Office 405, 201 Mashreq,<br/> Al Suq Al Kabeer, <br/> Dubai, United Arab Emirates
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <FaEnvelope />
                                </div>
                                <a href="mailto:finance@yasashviecogreen.com" className={styles.contactLink}>
                                    finance@yasashviecogreen.com
                                </a>
                            </div>

                            <div className={styles.contactItem}>
                                <div className={styles.iconBox}>
                                    <FaPhoneAlt />
                                </div>
                                <a href="tel:+971585964345" className={styles.contactLink}>
                                    +971 58 596 4345
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className={styles.footerBottom}>
                <div className={styles.container}>
                    <div className={styles.bottomContent}>
                        <p className={styles.copyright}>© 2026 Yasashvi. All Rights Reserved</p>
                        <p className={styles.designCredit}>
                            Design by <a href="https://ganesyx.com" target="_blank" rel="noopener noreferrer" className={styles.designLink}>Ganesyx</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer >
    );
}