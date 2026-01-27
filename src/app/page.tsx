import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/core/home/Hero";
import { About } from "@/components/core/home/About";
import { Portfolio } from "@/components/core/home/Portfolio";
import { GlobalMarkets } from "@/components/core/home/GlobalMarkets";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <About />
            <Portfolio />
            <GlobalMarkets />
        </div>
    );
}
