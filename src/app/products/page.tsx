import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import Hero from "@/components/core/products/Hero";
import Overview from "@/components/core/products/Overview";
import ProductPortfolio from "@/components/core/products/ProductPortfolio";
import QualityStandards from "@/components/core/products/QualityStandards";


export default function Products() {
    return <section>
        <Hero />
        <Overview />
        <ProductPortfolio />
        <QualityStandards />
        <TestimonialSection />
    </section>
}