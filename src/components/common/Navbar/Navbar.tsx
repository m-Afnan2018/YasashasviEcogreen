"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useRef, useEffect } from "react";
import "./Navbar.css";
import Image from "next/image";
import logo from '@/assets/images/common/logo.png'

const productLinks = [
    { name: "Silicon Carbide", href: "/product/silicon-carbide" },
    { name: "Iron and Steel", href: "/product/iron-and-steel" },
    { name: "Cryolite", href: "/product/cryolite" },
    { name: "Aluminum Ingots", href: "/product/aluminum-ingots" },
    { name: "Slag Scrap", href: "/product/slag-scrap" },
];

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "What We Do", href: "/what-we-do" },
    { name: "Products", href: "/products", hasDropdown: true },
    { name: "Contact", href: "/contact-us" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isProductsOpen, setIsProductsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        setIsProductsOpen(false);
    };

    const toggleProducts = (e: React.MouseEvent) => {
        e.preventDefault();
        setIsProductsOpen(!isProductsOpen);
    };

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsProductsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const isProductActive = pathname.startsWith("/products");

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
                    {navLinks.map((link) => {
                        if (link.hasDropdown) {
                            return (
                                <div
                                    key={link.href}
                                    className="dropdown-wrapper"
                                    ref={dropdownRef}
                                    onMouseEnter={() => setIsProductsOpen(true)}
                                    onMouseLeave={() => setIsProductsOpen(false)}
                                >
                                    <button
                                        className={`nav-link dropdown-trigger ${isProductActive ? 'active' : ''}`}
                                        onClick={toggleProducts}
                                        aria-expanded={isProductsOpen}
                                        aria-haspopup="true"
                                    >
                                        {link.name}
                                        <svg
                                            className={`dropdown-arrow ${isProductsOpen ? 'open' : ''}`}
                                            width="10"
                                            height="6"
                                            viewBox="0 0 10 6"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                        >
                                            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </button>

                                    <div className={`dropdown-menu ${isProductsOpen ? 'open' : ''}`}>
                                        {productLinks.map((product) => (
                                            <Link
                                                key={product.href}
                                                href={product.href}
                                                className={`dropdown-item ${pathname === product.href ? 'active' : ''}`}
                                                onClick={closeMenu}
                                            >
                                                {product.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            );
                        }

                        return (
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
                        );
                    })}

                    {/* CTA Button for Mobile */}
                    <Link href='/files/yasashvi-ecogreen-company-profile.pdf' download={true}  className="cta-btn mobile-cta" onClick={closeMenu}>
                        download Broucher
                    </Link>
                    <Link href='/files/yasashvi-ecogreen-company-profile.pdf' download={true}  className="cta-btn desktop-cta">
                        download Broucher
                    </Link>
                </nav>
            </div>
        </header>
    );
}