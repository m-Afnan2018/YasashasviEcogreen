"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from '@/assets/images/common/logo.png'



const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Products", href: "/products" },
    { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    return (
        <header className="navbar">
            <div className="navbar-container">
                {/* Logo */}
                <div className="logo">
                    <Link href="/"><Image src={logo} alt="logo" /></Link>
                </div>

                {/* Hamburger Icon */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                >
                    <span></span>
                    <span></span>
                    <span></span>
                </button>

                {/* Links */}
                <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
                    {navLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className={
                                pathname === `${link.href}/` || pathname === `${link.href}`
                                    ? "nav-link active"
                                    : "nav-link"
                            }
                            onClick={closeMenu}
                        >
                            {link.name}
                        </Link>
                    ))}

                    {/* CTA Button for Mobile */}
                    <Link href="/contact" className="cta-btn mobile-cta" onClick={closeMenu}>
                        Get Started
                    </Link>
                    <Link href="/contact" className="cta-btn desktop-cta">
                        Get Started
                    </Link>
                </nav>

                {/* CTA Button for Desktop */}
            </div>
        </header>
    );
}