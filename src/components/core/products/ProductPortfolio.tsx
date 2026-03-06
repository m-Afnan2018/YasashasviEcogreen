"use client";
import React, { useState } from "react";
import styles from "./ProductPortfolio.module.css";
import Image, { StaticImageData } from "next/image";

import portfolioImage from "@/assets/images/products/portfolio.jpg";
import cryoliteImage from "@/assets/images/products/cryolite.jpg";
import aluminiumImage from "@/assets/images/products/aluminium.jpg";
import siliconImage from "@/assets/images/products/silicon.jpg";
import slagImage from "@/assets/images/products/slag.png";

interface Product {
  id: number;
  title: string;
  image: StaticImageData;
  description: string;
  applications: string[];
  link: string;
}

const products: Product[] = [
  {
    id: 0,
    title: "Iron & Steel Products",
    image: portfolioImage,
    description:
      "We trade a range of iron and steel products used across construction, infrastructure, fabrication, and industrial manufacturing sectors.",
    applications: [
      "Structural and fabrication use",
      "Industrial manufacturing",
      "Infrastructure and engineering projects",
    ],
    link: "iron-and-steel",
  },
  {
    id: 1,
    title: "Cryolite (Sodium Cryolite)",
    image: cryoliteImage,
    description:
      "High-quality sodium cryolite used in aluminum smelting and metallurgical industries.",
    applications: [
      "Aluminum production",
      "Flux in metallurgy",
      "Ceramics & glass industry",
    ],
    link: "cryolite",
  },
  {
    id: 2,
    title: "Silicon Carbide",
    image: siliconImage,
    description:
      "Premium grade silicon carbide used in refractories and abrasives industries.",
    applications: [
      "Refractory lining",
      "Abrasive manufacturing",
      "High temperature applications",
    ],
    link: "silicon-carbide",
  },
  {
    id: 3,
    title: "Aluminum Ingots",
    image: aluminiumImage,
    description:
      "Pure aluminium ingots supplied for casting, extrusion and industrial usage.",
    applications: [
      "Casting industry",
      "Automobile parts",
      "Electrical applications",
    ],
    link: "aluminium-ingots",
  },
  {
    id: 4,
    title: "Slag & Industrial By-Products",
    image: slagImage,
    description:
      "Industrial slag and by-products used in construction and infrastructure development.",
    applications: ["Road construction", "Cement manufacturing", "Land filling"],
    link: "slag-scrap",
  },
];

const ProductPortfolio: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<Product>(products[0]);

  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Our Product Portfolio</h1>

      {/* Main Product Section */}
      <div className={styles.mainProduct}>
        <div className={styles.productImage}>
          <Image
            src={selectedProduct.image}
            alt={selectedProduct.title}
            fill
            style={{ objectFit: "cover" }}
          />
        </div>

        <div className={styles.productContent}>
          <h2 className={styles.productTitle}>{selectedProduct.title}</h2>

          <p className={styles.productDescription}>
            {selectedProduct.description}
          </p>

          <div className={styles.applications}>
            <h3 className={styles.applicationsTitle}>Applications include:</h3>

            <ul className={styles.applicationsList}>
              {selectedProduct.applications.map((app, index) => (
                <li key={index}>{app}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <h2 className={styles.suggestionsTitle}>You Might Also Like</h2>

      {/* Product Cards */}
      <div className={styles.productsGrid}>
        {products
          .filter((p) => p.id !== selectedProduct.id)
          .map((product, index) => (
            <div
              key={index}
              className={styles.productCard}
              onClick={() => setSelectedProduct(product)}
            >
              <div className={styles.cardImage}>
                <Image
                  src={product.image}
                  alt={product.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>

              <h3 className={styles.cardTitle}>{product.title}</h3>

              <a
                href={`/product/${product.link}`}
                className={styles.exploreLink}
              >
                Explore →
              </a>
            </div>
          ))}
      </div>
    </div>
  );
};

export default ProductPortfolio;
