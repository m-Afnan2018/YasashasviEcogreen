import TestimonialSection from "@/components/common/Testimonial/Testimonials";
import GlanceSection from "@/components/core/about/Glance";
import Hero from "@/components/core/about/Hero";
import OurRecycling from "@/components/core/about/OurRecycling";
import { SupportBanner } from "@/components/core/about/SupportBanner";
import WhoWeAre from "@/components/core/about/WhoWeAre";


export default function About() {
    return <section>
        <Hero />
        <WhoWeAre />
        <OurRecycling />
        <GlanceSection />
        <SupportBanner />
        <TestimonialSection/>
    </section>
}