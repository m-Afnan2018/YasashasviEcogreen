import React from 'react';
import styles from './StrategicImplication.module.css';
import Image from 'next/image';
import stradegy1 from '@/assets/images/product/cryolite/stradegy1.jpg'
import stradegy2 from '@/assets/images/product/cryolite/stradegy2.jpg'
import stradegy3 from '@/assets/images/product/cryolite/stradegy3.jpg'

interface ImplicationCardProps {
    image: string;
    alt: string;
    description: string;
    highlightText?: string;
}

const ImplicationCard: React.FC<ImplicationCardProps> = ({
    image,
    alt,
    description,
    highlightText
}) => {
    // Split description by highlight text if provided
    const parts = highlightText
        ? description.split(highlightText)
        : [description];

    return (
        <div className={styles.card}>
            <div className={styles.imageWrapper}>
                <Image
                    src={image}
                    alt={alt}
                    fill
                    style={{ objectFit: 'cover' }}
                />
            </div>
            <p className={styles.description}>
                {highlightText ? (
                    <>
                        {parts[0]}
                        <span className={styles.highlight}>{highlightText}</span>
                        {parts[1]}
                    </>
                ) : (
                    description
                )}
            </p>
        </div>
    );
};

interface StrategicImplicationProps {
    images?: {
        facility1?: string;
        facility2?: string;
        facility3?: string;
    };
}

export default function StrategicImplication({
    images = {
        facility1: stradegy1.src,
        facility2: stradegy2.src,
        facility3: stradegy3.src
    }
}: StrategicImplicationProps) {
    const implications = [
        {
            image: images.facility1 || '/images/facility-1.jpg',
            alt: 'Industrial facility with aluminium processing equipment',
            description: 'Increasing demand for SiC in solar and wind energy conversion systems',
            highlightText: ''
        },
        {
            image: images.facility2 || '/images/facility-2.jpg',
            alt: 'Steel coils in industrial warehouse',
            description: 'SiC semiconductors enable efficient power conversion in EV powertrains',
            highlightText: ''
        },
        {
            image: images.facility3 || '/images/facility-3.jpg',
            alt: 'Worker monitoring industrial manufacturing process',
            description: 'Industries seeking lighter, stronger materials drive adoption',
            highlightText: ''
        },
        {
            image: images.facility3 || '/images/facility-3.jpg',
            alt: 'Worker monitoring industrial manufacturing process',
            description: 'Electronics requiring extreme performance create growing demand for thermal control materials',
            highlightText: ''
        },
        {
            image: images.facility3 || '/images/facility-3.jpg',
            alt: 'Worker monitoring industrial manufacturing process',
            description: 'Long service life and durability align with circular economy objectives',
            highlightText: ''
        }
    ];

    return (
        <section className={styles.implicationSection}>
            <h2 className={styles.title}>Market Trends & Growth Drivers</h2>

            <div className={styles.cardsGrid}>
                {implications.map((implication, index) => (
                    <ImplicationCard
                        key={index}
                        image={implication.image}
                        alt={implication.alt}
                        description={implication.description}
                        highlightText={implication.highlightText}
                    />
                ))}
            </div>
        </section>
    );
}