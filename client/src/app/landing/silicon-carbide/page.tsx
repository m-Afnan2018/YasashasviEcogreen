import type { Metadata } from "next";
import Hero from "@/components/core/landing/silicon-carbide/Hero";
import QuoteForm from "@/components/core/landing/silicon-carbide/QuoteForm";
import TrustSection from "@/components/core/landing/silicon-carbide/TrustSection";
import TechnicalSpecs from "@/components/core/landing/silicon-carbide/TechnicalSpecs";
import IndustriesGrid from "@/components/core/landing/silicon-carbide/IndustriesGrid";
import TechSpecs from "@/components/core/landing/silicon-carbide/TechSpecs";
import ProcessSteps from "@/components/core/landing/silicon-carbide/ProcessSteps";
import FAQAccordion from "@/components/core/landing/silicon-carbide/FAQAccordion";
import ParticleBenefits from "@/components/core/landing/silicon-carbide/ParticleBenefits";

export const metadata: Metadata = {
  title: "Verified Industrial Material Supply | Yasashvi Ecogreen",
  description:
    "UAE-based, manufacturing-backed trade partner for Silicon Carbide, Aluminium Ingots, Cryolite, Iron & Steel, and Slag Scrap. Fully documented, fully compliant. Get a material quote in under 48 hours.",
};

export default function SiliconCarbideLandingPage() {
  return (
    <main>
      <Hero />
      <QuoteForm />
      <TrustSection />
      <TechnicalSpecs />
      <IndustriesGrid />
      <TechSpecs />
      <ProcessSteps />
      <FAQAccordion />
      <ParticleBenefits />
    </main>
  );
}
