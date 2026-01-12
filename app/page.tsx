import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import ProsperitySection from "@/components/ProsperitySection";
import MitosFaktaSection from "@/components/MitosFaktaSection";
import MasterRezzaSection from "@/components/MasterRezzaSection";
import TreasuresSection from "@/components/TreasuresSection";
import ArticlesSection from "@/components/ArticlesSection";
import TrustedBySection from "@/components/TrustedBySection";
import TestimonialSection from "@/components/TestimonialSection";
import ContactSection from "@/components/ContactSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <main className="grow">
        <Hero />
        <AboutSection />
        <ProsperitySection />
        <MitosFaktaSection />
        <MasterRezzaSection />
        <TreasuresSection />
        <ArticlesSection />
        <TrustedBySection />
        <TestimonialSection />
        <ContactSection />
      </main>
    </div>
  );
}
