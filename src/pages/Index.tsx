import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectMapSection from "@/components/ProjectMapSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <HeroSection />
        <ProjectMapSection />
        <FeaturesSection />
        <UseCasesSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
