import React from "react";
import styles from "./StrategicImplication.module.css";
import Image from "next/image";
import stradegy1 from "@/assets/images/product/slag-scrap/market-1.webp";
import stradegy2 from "@/assets/images/product/slag-scrap/market-2.webp";
import stradegy3 from "@/assets/images/product/slag-scrap/market-3.webp";
import stradegy4 from "@/assets/images/product/slag-scrap/market-4.webp";
import stradegy5 from "@/assets/images/product/slag-scrap/market-5.webp";

interface ImplicationCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  highlightText?: string;
}

const ImplicationCard: React.FC<ImplicationCardProps> = ({
  image,
  alt,
  title,
  description,
  highlightText,
}) => {
  const parts = highlightText
    ? description.split(highlightText)
    : [description];

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <Image src={image} alt={alt} fill style={{ objectFit: "cover" }} />
      </div>

      <h3 className={styles.cardTitle}>{title}</h3>

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
    img1?: string;
    img2?: string;
    img3?: string;
    img4?: string;
    img5?: string;
  };
}

export default function StrategicImplication({
  images = {
    img1: stradegy1.src,
    img2: stradegy2.src,
    img3: stradegy3.src,
    img4: stradegy4.src,
    img5: stradegy5.src,
  },
}: StrategicImplicationProps) {
  const implications = [
    {
      image: images.img1 || "/images/automotive.jpg",
      alt: "Reliable Supply",
      title: "Reliable Supply",
      description:
        " Established relationships with steel mills and foundries ensure consistent availability",
      highlightText: "high-strength CR steel",
    },
    {
      image: images.img2 || "/images/appliance.jpg",
      alt: "Quality Consistency",
      title: "Quality Consistency",
      description:
        " Processed slag meets specification requirements for diverse applications",
      highlightText: "consumer appliance markets",
    },
    {
      image: images.img3 || "/images/industrial.jpg",
      alt: "Volume Flexibility",
      title: "Volume Flexibility",
      description:
        " From construction-site bulk orders to specialized industrial batches",
      highlightText: "precision steel components",
    },
    {
      image: images.img4 || "/images/construction.jpg",
      alt: "Technical Support",
      title: "Technical Support",
      description:
        "Guidance on optimal application selection and material specifications",
      highlightText: "architectural material demand",
    },
    {
      image: images.img5 || "/images/technology.jpg",
      alt: "Sustainability Documentation",
      title: "Sustainability Documentation",
      description:
        "Environmental impact reports supporting ESG disclosures",
      highlightText: "precision metal enclosures",
    },
  ];

  return (
    <section className={styles.implicationSection}>
      <h2 className={styles.title}>Market Applications & Growth Sectors</h2>

      <div className={styles.cardsGrid}>
        {implications.map((implication, index) => (
          <ImplicationCard
            key={index}
            image={implication.image}
            alt={implication.alt}
            title={implication.title}
            description={implication.description}
            highlightText={implication.highlightText}
          />
        ))}
      </div>
    </section>
  );
}
