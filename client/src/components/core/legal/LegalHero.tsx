import styles from "./LegalHero.module.css";

interface LegalHeroProps {
    title: string;
    subtitle: string;
}

export default function LegalHero({ title, subtitle }: LegalHeroProps) {
    return (
        <section className={styles.hero}>
            <div className={styles.content}>
                <div className={styles.breadcrumb}>
                    <h5>Home</h5>
                    <h5 className={styles.separator}>{'>'}</h5>
                    <h5 className={styles.current}>{title}</h5>
                </div>
                <h2>{title}</h2>
                <p className={styles.subtitle}>{subtitle}</p>
            </div>
        </section>
    );
}
