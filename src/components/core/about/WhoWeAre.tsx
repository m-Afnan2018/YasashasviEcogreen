import Image from "next/image";
import WhoWeAreImage from '@/assets/images/about/who-we-are.webp'
import styles from './WhoWeAre.module.css'


export default function WhoWeAre() {
    return <section className={styles.WhoWeAre}>
        <div className={styles.mainSection}>
            <h5>who we are</h5>
            <h2>Yasashvi Ecogreen L.L.C</h2>
            <p>Is a UAE-based global recycling and processing company dedicated to transforming industrial waste and secondary raw materials into high-value metallurgical and industrial products.
                We operate at the intersection of sustainability, advanced processing, and industrial supply, supporting aluminium, steel, mining, and manufacturing industries with recycled materials that reduce environmental impact while maintaining performance standards.
                Our mission is to accelerate the transition toward a circular economy, where waste becomes a resource and industrial growth remains environmentally responsible.
            </p>
        </div>
        <Image src={WhoWeAreImage} alt="Who We Are" />
    </section>
}