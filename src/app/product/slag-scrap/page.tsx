import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import GlanceSection from "@/components/core/slag-scrap/Glance";
import SlagScrapHero from "@/components/core/slag-scrap/SlagScrap";
import Why from "@/components/core/slag-scrap/Why";
// import WhyChoose from "@/components/core/slag-scrap/WhyChoose";
// import MarketAdvantages from "@/components/core/slag-scrap/MarketAdvantages";
import StrategicImplication from "@/components/core/slag-scrap/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/slag-scrap/SustainabilityMarketTrends";
import Applications from "@/components/core/slag-scrap/Applications";


export default function Cryolite() {
    return <section>
        <SlagScrapHero />
        <Why />
        <GlanceSection />
        {/* <WhyChoose /> */}
        <Applications/>
        {/* <MarketAdvantages /> */}
        <SustainabilityMarketTrends />
        <StrategicImplication />
        <TestimonialSection />
    </section>
}