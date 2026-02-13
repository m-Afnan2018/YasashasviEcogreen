import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import GlanceSection from "@/components/core/cryolite/Glance";
import CryoliteHero from "@/components/core/cryolite/CryoliteHero";
import Why from "@/components/core/cryolite/Why";
import WhyChoose from "@/components/core/cryolite/WhyChoose";
import MarketAdvantages from "@/components/core/cryolite/MarketAdvantages";
import StrategicImplication from "@/components/core/cryolite/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/cryolite/SustainabilityMarketTrends";


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