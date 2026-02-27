import { useEffect } from "react";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ProjectMapSection from "@/components/ProjectMapSection";
import FeaturesSection from "@/components/FeaturesSection";
import UseCasesSection from "@/components/UseCasesSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    }, observerOptions);

    const revealElements = document.querySelectorAll(".reveal");
    revealElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        <div className="reveal">
          <HeroSection />
        </div>
        <div className="reveal">
          <ProjectMapSection />
        </div>
        <div className="reveal">
          <FeaturesSection />
        </div>
        <div className="reveal">
          <UseCasesSection />
        </div>
        <div className="reveal">
          <CTASection />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Index;
