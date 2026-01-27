import Image from 'next/image'
import styles from './Portfolio.module.css'

// Import your product images
import ironSteelImage from '@/assets/images/home/iron-steel.png'
import cryoliteImage from '@/assets/images/home/cryolite.png'
import siliconCarbideImage from '@/assets/images/home/silicon-carbide.png'
import aluminiumImage from '@/assets/images/home/aluminium.png'
import slagImage from '@/assets/images/home/slag.png'

export function Portfolio() {
    const products = [
        {
            id: 1,
            title: 'Iron & Steel Products',
            image: ironSteelImage,
        },
        {
            id: 2,
            title: 'Cryolite (Sodium Cryolite)',
            image: cryoliteImage,
        },
        {
            id: 3,
            title: 'Silicon Carbide',
            image: siliconCarbideImage,
        },
        {
            id: 4,
            title: 'Aluminium Ingots',
            image: aluminiumImage,
        },
        {
            id: 5,
            title: 'Slag & Industrial By-Products',
            image: slagImage,
        },
    ]

    return (
        <section className={styles.Portfolio}>
            <div className={styles.header}>
                <h5>A SINGLE PLATFORM FOR TRADE</h5>
                <h2>Core Product Portfolio</h2>
                <h6>
                    We trade and supply a focused range of high-demand industrial and metallurgical products,
                    including:
                </h6>
                <button className={styles.findSolutionBtn}>
                    Find Your Solution →
                </button>
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
                            <button className={styles.exploreBtn}>
                                Explore →
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}