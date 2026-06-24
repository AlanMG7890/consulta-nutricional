import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import PricingSection from "@/components/PricingSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F5EE]">
      <Navbar />
      <Hero />
      <ServicesSection />
      <AboutSection />
      <PricingSection />
    </main>
  );
}