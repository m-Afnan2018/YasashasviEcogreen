import TestimonialSection from "@/components/common/Testimonial/Testimonials";
// import GlanceSection from "@/components/core/iron-and-steel/Glance";
// import CryoliteHero from "@/components/core/iron-and-steel/CryoliteHero";
import Why from "@/components/core/aluminium-ingots/Why";
// import WhyChoose from "@/components/core/aluminium-ingots/WhyChoose";
import MarketAdvantages from "@/components/core/aluminium-ingots/MarketAdvantages";
import StrategicImplication from "@/components/core/aluminium-ingots/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/aluminium-ingots/SustainabilityMarketTrends";
import AluminiumIngots from "@/components/core/aluminium-ingots/AluminiumIngots";
import GlanceSection from "@/components/core/aluminium-ingots/Glance";
import Applications from "@/components/core/aluminium-ingots/Applications";

export default function Cryolite() {
  return (
    <section>
      <AluminiumIngots />
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
