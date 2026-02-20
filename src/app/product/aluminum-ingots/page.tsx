import TestimonialSection from "@/components/common/Testimonial/Testimonials";
// import GlanceSection from "@/components/core/iron-and-steel/Glance";
// import CryoliteHero from "@/components/core/iron-and-steel/CryoliteHero";
import Why from "@/components/core/aluminum-ingots/Why";
// import WhyChoose from "@/components/core/aluminum-ingots/WhyChoose";
import MarketAdvantages from "@/components/core/aluminum-ingots/MarketAdvantages";
import StrategicImplication from "@/components/core/aluminum-ingots/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/aluminum-ingots/SustainabilityMarketTrends";
import AluminumIngots from "@/components/core/aluminum-ingots/AluminumIngots";
import GlanceSection from "@/components/core/aluminum-ingots/Glance";
import Applications from "@/components/core/aluminum-ingots/Applications";

export default function Cryolite() {
  return (
    <section>
      <AluminumIngots />
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
