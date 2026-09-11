import React from "react";
import styles from "./StrategicImplication.module.css";
import Image from "next/image";
import stradegy1 from "@/assets/images/product/aluminium-ingots/market-1.webp";
import stradegy2 from "@/assets/images/product/aluminium-ingots/market-2.webp";
import stradegy3 from "@/assets/images/product/aluminium-ingots/market-3.webp";
import stradegy4 from "@/assets/images/product/aluminium-ingots/market-4.webp";

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
  };
}

export default function StrategicImplication({
  images = {
    img1: stradegy1.src,
    img2: stradegy2.src,
    img3: stradegy3.src,
    img4: stradegy4.src,
  },
}: StrategicImplicationProps) {
  const implications = [
    {
      image: images.img1 || "/images/automotive.jpg",
      alt: "Solar panel in automotive lightweighting setup",
      title: "International Standards",
      description:
        " ASTM B26 (Aluminium Ingot Specifications), ISO 385 (Aluminium Metal Quality)",
      highlightText: "",
    },
    {
      image: images.img2 || "/images/appliance.jpg",
      alt: "Industry-Specific Standards",
      title: "Industry-Specific Standards",
      description:
        "AS9100 (Aerospace), AMS (Aerospace Material Specifications), EN standards (European)",
      highlightText: "",
    },
    {
      image: images.img3 || "/images/industrial.jpg",
      alt: "Certifications",
      title: "Certifications",
      description:
        " ISO 9001 (Quality Management), ISO 14001 (Environmental Management)",
      highlightText: "",
    },
    {
      image: images.img4 || "/images/construction.jpg",
      alt: "Metallurgical Reports",
      title: "Metallurgical Reports",
      description:
        " Full composition analysis, mechanical property testing, traceability documentation",
      highlightText: "",
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
