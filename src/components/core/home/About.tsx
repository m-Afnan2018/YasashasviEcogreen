import Image from 'next/image'
import aboutImage from '@/assets/images/home/about-image.webp'
import growthIcon from '@/assets/images/home/growth-icon.svg'
import sustainableIcon from '@/assets/images/home/sustainable-icon.svg'
import styles from './About.module.css'

export function About() {
    return <section className={styles.About}>
        <div>
            <h5>ABOUT YASHASHVI ECOGREEN</h5>
            <h2>Enabling Sustainable Global Trade</h2>
            <p>Yashashvi Ecogreen L.L.C operates as a reliable trading and supply coordination partner, connecting producers and buyers through transparent, compliant, and customer-centric trade execution.
                With deep expertise in ferrous and non-ferrous materials, global logistics, and cross-border documentation, we simplify complex international trade while creating long-term value.</p>
            <div>
                <div>
                    <h1>15+</h1>
                    <h6>Active Trade Network</h6>
                </div>
                <div>
                    <div>
                        <Image width={'50'} height={'50'} src={growthIcon} alt='growth-image' />
                        <div>
                            <h3>Trusted Trade Partner</h3>
                            <p>Transparent, compliant, and reliable trade connections worldwide.</p>
                        </div>
                    </div>
                    <div>
                        <Image width={'50'} height={'50'} src={sustainableIcon} alt='sustainable-image' />
                        <div>
                            <h3>Sustainable Market Expertise</h3>
                            <p>Responsible sourcing with quality-driven, eco-focused growth.</p>
                        </div>
                    </div>
                    <a href='/about'>Explore more</a>
                </div>
            </div>
        </div>
        <Image width={'500'} height={'500'} src={aboutImage.src} alt='aboutImage' />
    </section>
}