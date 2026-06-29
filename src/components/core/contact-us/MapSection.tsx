import styles from "./MapSection.module.css";

export default function MapSection() {
    return (
        <section className={styles.mapWrapper}>
            <iframe
                src="https://www.google.com/maps?q=Office+405,+201+Mashreq,+Al+Suq+Al+Kabeer,+Dubai,+United+Arab+Emirates&output=embed"
                loading="lazy"
            />
        </section>
    );
}
