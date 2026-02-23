import { useState, useEffect, useRef } from "react";
import heroBanner from "@/assets/hero-banner.jpg";
import stageDemo from "@/assets/stage-demo.png";
import stageNetwork from "@/assets/stage-network.png";
import stageTesting from "@/assets/stage-testing.png";
import stageDeployment from "@/assets/stage-deployment.png";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const useCountUp = (target: number, duration = 2000) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          const start = performance.now();
          const step = (now: number) => {
            const progress = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(Math.floor(eased * target));
            if (progress < 1) requestAnimationFrame(step);
          };
          requestAnimationFrame(step);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

const projectStages = [
  { step: "01", title: "Demo", description: "Live product walkthrough", image: stageDemo },
  { step: "02", title: "Network Assessment", description: "Infrastructure review", image: stageNetwork },
  { step: "03", title: "Testing", description: "End-to-end validation", image: stageTesting },
  { step: "04", title: "Deployment", description: "Go live with support", image: stageDeployment },
];

const HeroSection = () => {
  const badges = ["99.9% Uptime SLA", "4K Ultra HD Streaming", "Global CDN"];
  const { count: screenCount, ref: screenRef } = useCountUp(10000, 2500);
  const { count: projectCount, ref: projectRef } = useCountUp(30, 2000);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden hero-bg pt-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(hsl(45 95% 50% / 0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              The Future of{" "}
              <span className="text-gradient">IPTV</span> &{" "}
              <span className="text-gradient">Digital</span>{" "}
              Signage
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Transform your hospitality and enterprise spaces with seamless live TV, 
              on-demand content, and intelligent digital signage — all managed from a 
              single cloud platform. Trusted by hotels, operators, and broadcasters worldwide.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap gap-3">
              {badges.map((badge) => (
                <div key={badge} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                  {badge}
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:opacity-90 transition-all hover:scale-105"
              >
                Book Your Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-secondary/50 hover:bg-secondary text-foreground font-semibold text-sm transition-all"
              >
                <Play className="w-4 h-4 text-primary" />
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: Hero image */}
          <div className="relative hidden lg:block">
            <div className="relative rounded-2xl overflow-hidden border border-border/50 shadow-elevated">
              <img
                src={heroBanner}
                alt="Cloud IPTV and Digital Signage Platform"
                className="w-full h-[420px] object-cover"
              />
              {/* Glass overlay badge */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="bg-background/80 backdrop-blur-xl rounded-xl p-4 border border-border/50 flex items-center gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse" />
                    <span className="text-xs font-semibold text-foreground">Live Streaming</span>
                  </div>
                  <div className="w-px h-4 bg-border" />
                  <div className="flex-1">
                    <div className="w-full h-1.5 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full w-3/4 bg-gradient-primary rounded-full" />
                    </div>
                  </div>
                  <span className="text-xs text-primary font-semibold">4K HDR</span>
                </div>
              </div>
            </div>
            {/* Floating stat cards */}
            <div ref={screenRef} className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-elevated">
              <div className="text-2xl font-display font-bold text-gradient">
                {screenCount >= 10000 ? "10K+" : screenCount.toLocaleString()}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Screens Deployed</div>
            </div>
            <div ref={projectRef} className="absolute -bottom-6 -left-6 bg-card border border-border rounded-xl p-4 shadow-elevated">
              <div className="text-2xl font-display font-bold text-gradient">
                {projectCount >= 30 ? "30+" : projectCount.toString()}
              </div>
              <div className="text-xs text-muted-foreground mt-0.5">Projects Completed</div>
            </div>
          </div>
        </div>

        {/* Project Stages */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <h3 className="font-display text-lg font-semibold text-center mb-8 tracking-tight">
            Your Journey With Us
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {projectStages.map((stage, i) => (
              <div key={stage.step} className="relative text-center space-y-3 group">
                <div className="w-16 h-16 mx-auto rounded-xl overflow-hidden border border-border/50 bg-card shadow-sm group-hover:shadow-elevated transition-shadow">
                  <img src={stage.image} alt={stage.title} className="w-full h-full object-cover" />
                </div>
                <div>
                  <span className="text-xs font-semibold text-primary">{stage.step}</span>
                  <h4 className="font-display text-sm font-semibold mt-0.5">{stage.title}</h4>
                  <p className="text-xs text-muted-foreground mt-1">{stage.description}</p>
                </div>
                {i < projectStages.length - 1 && (
                  <div className="hidden md:block absolute top-8 -right-3 w-6 h-px bg-border" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
