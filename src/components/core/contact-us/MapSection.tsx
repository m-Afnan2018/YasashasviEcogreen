import styles from "./MapSection.module.css";

export default function MapSection() {
    return (
        <section className={styles.mapWrapper}>
            <iframe
                src="https://www.google.com/maps?q=London%20Eye&output=embed"
                loading="lazy"
            />
        </section>
    );
}
