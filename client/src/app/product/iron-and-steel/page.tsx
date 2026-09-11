import TestimonialSection from "@/components/common/Testimonial/Testimonials";
// import GlanceSection from "@/components/core/iron-and-steel/Glance";
// import CryoliteHero from "@/components/core/iron-and-steel/CryoliteHero";
import Why from "@/components/core/iron-and-steel/Why";
// import WhyChoose from "@/components/core/iron-and-steel/WhyChoose";
import MarketAdvantages from "@/components/core/iron-and-steel/MarketAdvantages";
import StrategicImplication from "@/components/core/iron-and-steel/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/iron-and-steel/SustainabilityMarketTrends";
import IronAndSteelHero from "@/components/core/iron-and-steel/IronAndSteel";
import GlanceSection from "@/components/core/iron-and-steel/Glance";
import Applications from "@/components/core/iron-and-steel/Applications";

export default function Cryolite() {
  return (
    <section>
      <IronAndSteelHero />
      <Why />
      <GlanceSection />
      <Applications />
      {/* <WhyChoose /> */}
      <MarketAdvantages />
      <SustainabilityMarketTrends />
      <StrategicImplication />
      <TestimonialSection />
    </section>
  );
}
