import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  Play,
  CheckCircle2,
  Tv,
  Layout,
  Search,
  Activity,
  ShieldCheck,
  Settings,
  Signal,
  Layers,
  Globe,
  MonitorSmartphone,
  Tv2,
  Cast
} from "lucide-react";
import signageImg from "@/assets/signageimage.jpg";
import castingImg from "@/assets/casting.png";
import iptvImg from "@/assets/hero-banner.jpg";
import demoImg from "@/assets/stage-demo.png";
import networkImg from "@/assets/stage-network.png";
import testingImg from "@/assets/stage-testing.png";
import deploymentImg from "@/assets/stage-deployment.png";

const useCountUp = (target: number, duration = 2000, start = false) => {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (start && !hasAnimated.current) {
      hasAnimated.current = true;
      const startTime = performance.now();
      const step = (now: number) => {
        const progress = Math.min((now - startTime) / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        setCount(Math.floor(eased * target));
        if (progress < 1) requestAnimationFrame(step);
      };
      requestAnimationFrame(step);
    }
  }, [target, duration, start]);

  return count;
};

const projectStages = [
  { step: "01", title: "Demo", description: "Product walkthrough", img: demoImg },
  { step: "02", title: "Network Requirements", description: "Infrastructure check", img: networkImg },
  { step: "03", title: "Testing", description: "Validation & QA", img: testingImg },
  { step: "04", title: "Deployment with Support", description: "Go-live & maintenance", img: deploymentImg }
];


const HeroSection = () => {
  const [isDashboardVisible, setIsDashboardVisible] = useState(false);
  const dashboardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsDashboardVisible(true);
        }
      },
      { threshold: 0.1 }
    );
    if (dashboardRef.current) observer.observe(dashboardRef.current);
    return () => observer.disconnect();
  }, []);

  const signageCount = useCountUp(300, 2000, isDashboardVisible);
  const iptvCount = useCountUp(10000, 2500, isDashboardVisible);
  const regionsCount = useCountUp(6, 2000, isDashboardVisible);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden bg-background pt-28">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(hsl(45 95% 50% / 0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }} />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-up">
            <h1 className="font-display text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight tracking-tight">
              Delivering Premium <span className="text-gradient">Guest Enhancement</span> Solutions via{" "}
              <span className="text-gradient">IPTV</span> &  <span className="text-gradient">Digital Signage</span>
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Transform your hospitality and enterprise spaces with seamless live TV,
              on-demand content, and intelligent digital signage — all managed from a
              single cloud platform. Trusted by hotels, operators, and broadcasters worldwide.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#contact"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:opacity-90 transition-all hover:scale-105">
                Book Your Demo
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#features"
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl border border-border bg-secondary/50 hover:bg-secondary text-foreground font-semibold text-sm transition-all">
                <Play className="w-4 h-4 text-primary" />
                See How It Works
              </a>
            </div>
          </div>

          {/* Right: Modern UI Mockup */}
          <div className="relative hidden lg:block" ref={dashboardRef}>
            <div className="relative aspect-video rounded-2xl border border-border/50 bg-card overflow-hidden shadow-elevated p-8 flex flex-col gap-6">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between border-b border-border/50 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm font-bold">Project update</div>
                  </div>
                </div>
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-destructive/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary/40" />
                  <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                </div>
              </div>

              {/* Fake UI Grid */}
              <div className="grid grid-cols-2 gap-4 flex-grow relative z-10">
                {/* Signage Card */}
                <div className="relative rounded-xl border border-border/50 bg-background/40 p-4 space-y-3 overflow-hidden group/card shadow-sm hover:shadow-md transition-all">
                  <img src={signageImg} alt="Signage" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover/card:opacity-20 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <MonitorSmartphone className="w-3.5 h-3.5 text-primary" />
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">Signage Screens</div>
                    </div>
                    <div className="text-3xl font-display font-bold">{signageCount}+</div>
                  </div>
                </div>

                {/* IPTV Card */}
                <div className="relative rounded-xl border border-border/50 bg-background/40 p-4 space-y-3 overflow-hidden group/card shadow-sm hover:shadow-md transition-all">
                  <img src={iptvImg} alt="IPTV" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover/card:opacity-20 transition-opacity" />
                  <div className="relative z-10">
                    <div className="flex items-center gap-2 mb-1">
                      <Tv2 className="w-3.5 h-3.5 text-primary" />
                      <div className="text-[10px] uppercase tracking-wider text-muted-foreground font-bold">IPTV Screens</div>
                    </div>
                    <div className="text-3xl font-display font-bold text-gradient">{iptvCount >= 10000 ? "10K+" : iptvCount.toLocaleString()}</div>
                  </div>
                </div>

                {/* Regions and Casting Card */}
                <div className="col-span-2 relative rounded-xl border border-border/50 bg-background/40 p-4 flex items-center justify-between overflow-hidden group/card shadow-sm hover:shadow-md transition-all">
                  <img src={castingImg} alt="Casting" className="absolute inset-0 w-full h-full object-cover opacity-5 group-hover/card:opacity-10 transition-opacity" />
                  <div className="relative z-10 flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Globe className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-xs font-bold">Active Regions</div>
                      <div className="text-[10px] text-muted-foreground">GCC & North Africa ({regionsCount} Countries)</div>
                    </div>
                  </div>
                  <div className="relative z-10 flex items-center gap-3">
                    <div className="text-right">
                      <div className="text-[10px] font-bold">Secure Casting</div>
                      <div className="text-[9px] text-primary">Active Now</div>
                    </div>
                    <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center animate-pulse">
                      <Cast className="w-4 h-4 text-primary" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Decoration */}
              <div className="absolute -bottom-1 -left-1 -right-1 h-32 bg-gradient-to-t from-card via-transparent to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Project Stages */}
        <div className="mt-20 pt-12 border-t border-border/50">
          <h3 className="font-display text-lg font-semibold text-center mb-8 tracking-tight">
            Your Journey With Us
          </h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {projectStages.map((stage, i) => (
              <div key={stage.step} className="relative text-center space-y-4 group">
                <div className="relative w-20 h-20 mx-auto rounded-2xl overflow-hidden border border-border/50 bg-card shadow-sm group-hover:border-primary/50 transition-all">
                  <img src={stage.img} alt={stage.title} className="w-full h-full object-cover p-2" />
                </div>
                <div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{stage.step}</span>
                  <h4 className="font-display text-sm font-bold mt-1 leading-tight">{stage.title}</h4>
                  <p className="text-[11px] text-muted-foreground mt-1 max-w-[150px] mx-auto">{stage.description}</p>
                </div>
                {i < projectStages.length - 1 && (
                  <div className="hidden lg:block absolute top-10 -right-4 w-8 h-px bg-border/50" />
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