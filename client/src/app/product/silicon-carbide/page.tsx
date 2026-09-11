import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import GlanceSection from "@/components/core/silicon-carbide/Glance";
import SiliconCarbide from "@/components/core/silicon-carbide/SiliconCarbide";
import Why from "@/components/core/silicon-carbide/Why";
// import WhyChoose from "@/components/core/silicon-carbide/WhyChoose";
// import MarketAdvantages from "@/components/core/silicon-carbide/MarketAdvantages";
import StrategicImplication from "@/components/core/silicon-carbide/StrategicImplication";
import SustainabilityMarketTrends from "@/components/core/silicon-carbide/SustainabilityMarketTrends";
import Applications from "@/components/core/silicon-carbide/Applications";

export default function Cryolite() {
  return (
    <section>
      <SiliconCarbide />
      <Why />
      <GlanceSection />
      {/* <WhyChoose /> */}
      <Applications />
      {/* <MarketAdvantages /> */}
      <SustainabilityMarketTrends />
      <StrategicImplication />
      <TestimonialSection />
    </section>
  );
}
