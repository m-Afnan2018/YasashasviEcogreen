import Link from "next/link";
import styles from "./ThankYou.module.css";

export default function ThankYou() {
    return (
        <section className={styles.section}>
            <div className={styles.card}>
                <div className={styles.icon}>
                    <svg
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <polyline points="20 6 9 17 4 12" />
                    </svg>
                </div>

                <h1 className={styles.title}>Thank You</h1>
                <p className={styles.message}>
                    Your enquiry has been received. Our team at Yasashvi Ecogreen
                    will get back to you shortly.
                </p>

                <Link href="/" className={styles.homeBtn}>
                    Back to Home
                </Link>
            </div>
        </section>
    );
}
