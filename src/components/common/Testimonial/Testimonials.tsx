'use client';

import { useState, useEffect } from 'react';
import styles from './Testimonials.module.css';
import abigail from '@/assets/images/avatars/abigail.png'
import elizabeth from '@/assets/images/avatars/elizabeth.png'
import anthony from '@/assets/images/avatars/anthony.png'
import testimonialBackground from '@/assets/images/home/testimonial-background.jpg'
import supportBg from '@/assets/images/home/support-bg.jpg'
import { StaticImageData } from 'next/image';

interface Testimonial {
    id: number;
    name: string;
    role: string;
    avatar: StaticImageData;
    quote: string;
    rating: number;
}

const testimonials: Testimonial[] = [
    {
        id: 1,
        name: 'Abigail',
        role: 'Engineer',
        avatar: abigail,
        quote: 'A reliable trading partner delivering transparent, compliant, and innovative supply chain solutions.',
        rating: 5
    },
    {
        id: 2,
        name: 'Elizabeth',
        role: 'Architecture',
        avatar: elizabeth,
        quote: 'Highly professional, structuring-backed supply, clear documentation and dependable execution.',
        rating: 4
    },
    {
        id: 3,
        name: 'Anthony',
        role: 'Industrial',
        avatar: anthony,
        quote: 'Yashashvi Ecogreen simplifies global trade with professionalism and integrity.',
        rating: 5
    }
];

export default function TestimonialSection() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    // Auto-play functionality
    useEffect(() => {
        if (!isAutoPlaying) return;

        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [isAutoPlaying]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
        setIsAutoPlaying(false);
    };

    const getVisibleTestimonials = () => {
        const visible = [];
        for (let i = 0; i < 3; i++) {
            const index = (currentIndex + i) % testimonials.length;
            visible.push(testimonials[index]);
        }
        return visible;
    };

    const renderStars = (rating: number) => {
        return [...Array(5)].map((_, index) => (
            <span key={index} className={index < rating ? styles.starFilled : styles.starEmpty}>
                ★
            </span>
        ));
    };

    return (
        <section className={styles.testimonialSection} style={{ backgroundImage: `url(${testimonialBackground.src})` }}>
            <div className={styles.container}>
                {/* Header */}
                <div className={styles.header}>
                    <h2 className={styles.title}>What Say Our Client</h2>
                    <p className={styles.subtitle}>
                        We are trusted by global partners for our transparent trade practices, reliable supply capabilities, and long-term
                        business approach across industrial and marketplace markets.
                    </p>
                </div>

                {/* Testimonial Cards */}
                <div className={styles.testimonialGrid}>
                    {getVisibleTestimonials().map((testimonial, idx) => (
                        <div key={`${testimonial.id}-${idx}`} className={styles.testimonialCard}>
                            <div className={styles.quoteIcon}>❝</div>

                            <div className={styles.cardContent}>
                                <div className={styles.profileSection}>
                                    <div className={styles.avatar}>
                                        <img src={testimonial.avatar.src} alt={testimonial.name} />
                                    </div>
                                    <div className={styles.profileInfo}>
                                        <h3 className={styles.name}>{testimonial.name}</h3>
                                        <p className={styles.role}>{testimonial.role}</p>
                                    </div>
                                </div>

                                <p className={styles.quote}>{testimonial.quote}</p>

                                <div className={styles.rating}>
                                    {renderStars(testimonial.rating)}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Slider Dots */}
                <div className={styles.sliderDots}>
                    {testimonials.map((_, index) => (
                        <button
                            key={index}
                            className={`${styles.dot} ${index === currentIndex ? styles.dotActive : ''}`}
                            onClick={() => goToSlide(index)}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* CTA Section */}
            <div className={styles.ctaSection} style={{ backgroundImage: `url(${supportBg.src})` }}>
                <div className={styles.ctaContainer}>
                    <h2 className={styles.ctaTitle}>Looking for a Reliable trading partner?</h2>
                    <p className={styles.ctaSubtitle}>
                        Contact Yashashvi Ecogreen LLC today to discuss sourcing, supply, and global trade opportunities.
                    </p>
                    <div className={styles.ctaButtons}>
                        <button className={styles.btnPrimary}>CONTACT US</button>
                        <button className={styles.btnSecondary}>EXPLORE MARKETS</button>
                    </div>
                </div>
            </div>
        </section>
    );
}