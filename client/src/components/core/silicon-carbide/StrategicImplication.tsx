import React from "react";
import styles from "./StrategicImplication.module.css";
import Image from "next/image";
import stradegy1 from "@/assets/images/product/silicon-carbide/market-1.webp";
import stradegy2 from "@/assets/images/product/silicon-carbide/market-2.webp";
import stradegy3 from "@/assets/images/product/silicon-carbide/market-3.webp";
import stradegy4 from "@/assets/images/product/silicon-carbide/market-4.webp";
import stradegy5 from "@/assets/images/product/silicon-carbide/market-5.webp";

interface ImplicationCardProps {
  image: string;
  alt: string;
  title: string;
  description: string;
  highlightText?: string | null;
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
      title: "Renewable Energy",
      description:
        " Increasing demand for SiC in solar and wind energy conversion systems",
      highlightText: null,
    },
    {
      image: images.img2 || "/images/appliance.jpg",
      alt: "Electric Vehicles",
      title: "Electric Vehicles",
      description:
        "SiC semiconductors enable efficient power conversion in EV powertrains",
      highlightText: null,
    },
    {
      image: images.img3 || "/images/industrial.jpg",
      alt: "Advanced Manufacturing",
      title: "Advanced Manufacturing",
      description:
        "Industries seeking lighter, stronger materials drive adoption",
      highlightText: null,
    },
    {
      image: images.img4 || "/images/construction.jpg",
      alt: "Thermal Management",
      title: "Thermal Management",
      description:
        "Electronics requiring extreme performance create growing demand for thermal control materials",
      highlightText: null,
    },
    {
      image: images.img5 || "/images/technology.jpg",
      alt: "Sustainability",
      title: "Sustainability",
      description:
        "Long service life and durability align with circular economy objectives",
      highlightText: null,
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
