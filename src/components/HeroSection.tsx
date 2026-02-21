import heroBanner from "@/assets/hero-banner.jpg";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const HeroSection = () => {
  const badges = ["99.9% Uptime SLA", "4K Ultra HD Streaming", "Global CDN"];

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden hero-bg pt-20">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-30 pointer-events-none"
        style={{ backgroundImage: "radial-gradient(hsl(45 95% 50% / 0.06) 1px, transparent 1px)", backgroundSize: "40px 40px" }}
      />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Copy */}
          <div className="space-y-8 animate-fade-up">
            {/* Pill badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              Cloud-Powered Media Solutions
            </div>

            <h1 className="font-display text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight">
              The Future of{" "}
              <span className="text-gradient">IPTV</span> &{" "}
              <span className="text-gradient">Digital</span>{" "}
              Signage
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg leading-relaxed">
              Deliver flawless live TV, video-on-demand, and dynamic digital signage at scale — 
              powered by our enterprise cloud infrastructure. Built for operators, hotels, 
              enterprises, and broadcasters.
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
                Start Free Trial
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
                className="w-full object-cover"
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
            {/* Floating stat card */}
            <div className="absolute -top-6 -right-6 bg-card border border-border rounded-xl p-4 shadow-elevated">
              <div className="text-2xl font-display font-bold text-gradient">10K+</div>
              <div className="text-xs text-muted-foreground mt-0.5">Screens Deployed</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
