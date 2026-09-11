import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import GlanceSection from "@/components/core/silicon/Glance";
import CryoliteHero from "@/components/core/silicon/CryoliteHero";
import Why from "@/components/core/silicon/Why";
import WhyChoose from "@/components/core/silicon/WhyChoose";
import MarketAdvantages from "@/components/core/silicon/MarketAdvantages";
import StrategicImplication from "@/components/core/silicon/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/silicon/SustainabilityMarketTrends";


export default function Cryolite() {
    return <section>
        <CryoliteHero />
        <Why />
        <GlanceSection />
        <WhyChoose />
        <MarketAdvantages />
        <SustainabilityMarketTrends />
        <StrategicImplication />
        <TestimonialSection />
    </section>
}