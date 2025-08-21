import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AIServicesSection from "@/components/WebsSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";
import BackgroundBlobs from "@/components/BackgroundBlobs";

export default function Home() {
  return (
    <div className="min-h-screen bg-background relative">
      <BackgroundBlobs />
      <Header />
      <main>
        <HeroSection />
        <AIServicesSection />
        <ProjectsSection />
        <TestimonialsSection />
        <FaqSection />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
}
