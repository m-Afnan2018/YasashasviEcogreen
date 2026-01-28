import Image from "next/image";
import styles from "./page.module.css";
import { Hero } from "@/components/core/home/Hero";
import { About } from "@/components/core/home/About";
import { Portfolio } from "@/components/core/home/Portfolio";
import { GlobalMarkets } from "@/components/core/home/GlobalMarkets";
import TestimonialSection from "@/components/core/home/Testimonials";
import GrowthOutlook from "@/components/core/home/GrowthOutlook";
import GlanceSection from "@/components/core/home/Glance";

export default function Home() {
    return (
        <div className={styles.page}>
            <Hero />
            <About />
            <Portfolio />
            <GlanceSection />
            <GlobalMarkets />
            <GrowthOutlook />
            <TestimonialSection />
        </div>
    );
}
