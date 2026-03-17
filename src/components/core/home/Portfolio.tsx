import Image from "next/image";
import styles from "./Portfolio.module.css";

// Import your product images
import ironSteelImage from "@/assets/images/home/product-1.png";
import cryoliteImage from "@/assets/images/home/product-2.png";
import siliconCarbideImage from "@/assets/images/home/product-3.png";
import aluminiumImage from "@/assets/images/home/product-4.png";
import slagImage from "@/assets/images/home/product-5.png";

export function Portfolio() {
  const products = [
    {
      id: 1,
      title: "Iron & Steel Products",
      image: ironSteelImage,
      link: "iron-and-steel",
    },
    {
      id: 2,
      title: "Cryolite (Sodium Cryolite)",
      image: cryoliteImage,
      link: "cryolite",
    },
    {
      id: 3,
      title: "Silicon Carbide",
      image: siliconCarbideImage,
      link: "silicon-carbide",
    },
    {
      id: 4,
      title: "Aluminium Ingots",
      image: aluminiumImage,
      link: "aluminium-ingots",
    },
    {
      id: 5,
      title: "Slag & Industrial By-Products",
      image: slagImage,
      link: "slag-scrap",
    },
  ];

  return (
    <section className={styles.Portfolio}>
      <div className={styles.header}>
        <h5>A SINGLE PLATFORM FOR TRADE</h5>
        <h2>Core Product Portfolio</h2>
        <h6>
          We trade and supply a focused range of high-demand industrial and
          metallurgical products, including:
        </h6>
        {/* <button className={styles.findSolutionBtn}>Find Your Solution →</button> */}
        <a href="/contact-us" className={styles.findSolutionBtn}>Find Your Solution →</a>
      </div>

      <div className={styles.productsGrid}>
        {products.map((product) => (
          <div key={product.id} className={styles.productCard}>
            <div className={styles.imageWrapper}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                className={styles.productImage}
              />
            </div>
            <div className={styles.cardContent}>
              <h3>{product.title}</h3>
              <a
                href={`/product/${product.link}`}
                className={styles.exploreBtn}
              >
                Explore →
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
