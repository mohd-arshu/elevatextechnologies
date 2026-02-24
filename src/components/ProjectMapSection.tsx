import { useState, useEffect, useRef } from "react";
import { MapPin, Globe, TrendingUp } from "lucide-react";

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
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);

  return { count, ref };
};

interface CountryData {
  name: string;
  projects: number;
  description: string;
  x: number;
  y: number;
}

const countries: CountryData[] = [
  { name: "UAE", projects: 8, description: "Hotels & Enterprise", x: 596, y: 248 },
  { name: "Bahrain", projects: 3, description: "Hospitality Sector", x: 580, y: 238 },
  { name: "Qatar", projects: 5, description: "Broadcasting & Hotels", x: 585, y: 244 },
  { name: "Oman", projects: 4, description: "Enterprise Networks", x: 600, y: 258 },
  { name: "Libya", projects: 3, description: "Government & Telecom", x: 510, y: 218 },
  { name: "Egypt", projects: 7, description: "Hotels & Resorts", x: 540, y: 228 },
];

// Simplified world map paths (continents)
const worldPaths = [
  // North America
  "M60,100 L80,80 L120,75 L160,80 L180,100 L200,90 L220,95 L230,110 L220,130 L200,150 L180,160 L160,170 L140,180 L120,185 L100,170 L80,160 L60,150 L50,130 Z",
  // South America
  "M150,200 L170,195 L185,210 L195,230 L200,260 L195,290 L185,310 L175,330 L160,340 L150,330 L145,310 L140,290 L135,260 L130,240 L135,220 Z",
  // Europe
  "M440,80 L460,75 L480,78 L500,82 L520,78 L530,85 L525,100 L520,110 L510,115 L495,118 L480,120 L465,115 L450,110 L440,100 Z",
  // Africa
  "M460,140 L480,130 L500,128 L520,130 L540,140 L555,155 L560,175 L555,200 L545,225 L535,250 L520,270 L505,280 L490,275 L475,260 L465,240 L460,220 L455,200 L452,175 L455,155 Z",
  // Asia
  "M540,60 L580,55 L620,50 L660,55 L700,60 L740,70 L760,80 L770,100 L760,120 L740,135 L720,140 L700,138 L680,130 L660,125 L640,120 L620,118 L600,115 L580,110 L560,105 L545,100 L540,85 Z",
  // Middle East (highlight region)
  "M550,130 L570,125 L590,128 L610,135 L620,150 L615,170 L605,180 L590,175 L575,168 L560,160 L550,145 Z",
  // Australia
  "M720,260 L750,255 L770,260 L785,270 L790,285 L780,300 L760,305 L740,300 L725,290 L720,275 Z",
  // India/SE Asia
  "M620,150 L640,145 L660,148 L680,155 L690,170 L685,190 L675,205 L660,210 L645,205 L630,195 L620,180 L615,165 Z",
];

// Highlighted country shapes (approximate positions in the Middle East)
const highlightedPaths: Record<string, string> = {
  Egypt: "M525,215 L545,210 L550,220 L545,235 L535,245 L520,240 L518,228 Z",
  Libya: "M495,195 L520,190 L525,200 L525,220 L515,230 L498,225 L492,210 Z",
  UAE: "M590,242 L602,238 L608,245 L605,255 L595,258 L587,250 Z",
  Qatar: "M582,235 L588,233 L590,240 L588,247 L582,245 Z",
  Bahrain: "M578,230 L582,228 L583,233 L581,237 L577,235 Z",
  Oman: "M600,250 L612,245 L618,255 L615,270 L608,278 L598,272 L595,260 Z",
};

const ProjectMapSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeCountry = countries.find((c) => c.name === active);
  const { count: totalProjects, ref: totalRef } = useCountUp(30, 2200);
  const { count: expandCount, ref: expandRef } = useCountUp(15, 2500);

  return (
    <section className="py-20 bg-card/30 border-y border-border/50" ref={totalRef}>
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-3">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/5 text-primary text-xs font-semibold mb-4">
            <Globe className="w-3.5 h-3.5" />
            Global Presence
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Our <span className="text-gradient">Global</span> Reach
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Delivering IPTV & digital signage solutions across the GCC and North Africa — and expanding worldwide
          </p>
        </div>

        {/* Stats row */}
        <div className="grid grid-cols-3 gap-6 max-w-xl mx-auto mb-12">
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">{totalProjects}+</div>
            <div className="text-xs text-muted-foreground mt-1">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">6</div>
            <div className="text-xs text-muted-foreground mt-1">Countries Active</div>
          </div>
          <div ref={expandRef} className="text-center">
            <div className="font-display text-3xl font-bold text-gradient">{expandCount}+</div>
            <div className="text-xs text-muted-foreground mt-1">Countries Expanding</div>
          </div>
        </div>

        <div className="grid lg:grid-cols-[1fr_300px] gap-8 items-start">
          {/* World Map */}
          <div className="relative bg-background rounded-2xl border border-border/50 p-4 lg:p-6 shadow-sm overflow-hidden">
            <svg viewBox="30 30 790 320" className="w-full h-auto" style={{ maxHeight: 460 }}>
              {/* Grid pattern */}
              <defs>
                <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="0.5" fill="hsl(45 15% 82%)" />
                </pattern>
              </defs>
              <rect x="30" y="30" width="790" height="320" fill="hsl(45 10% 96%)" rx="12" />
              <rect x="30" y="30" width="790" height="320" fill="url(#grid)" rx="12" />

              {/* World continents */}
              {worldPaths.map((d, i) => (
                <path
                  key={i}
                  d={d}
                  fill={i === 5 ? "hsl(45 30% 85%)" : "hsl(45 10% 90%)"}
                  stroke="hsl(45 15% 82%)"
                  strokeWidth={0.5}
                />
              ))}

              {/* Highlighted countries */}
              {Object.entries(highlightedPaths).map(([name, d]) => (
                <path
                  key={name}
                  d={d}
                  className="transition-all duration-300 cursor-pointer"
                  fill={active === name ? "hsl(45 95% 50%)" : "hsl(45 80% 60%)"}
                  stroke={active === name ? "hsl(40 90% 42%)" : "hsl(45 60% 50%)"}
                  strokeWidth={active === name ? 1.5 : 0.8}
                  onMouseEnter={() => setActive(name)}
                  onMouseLeave={() => setActive(null)}
                  onClick={() => setActive(active === name ? null : name)}
                />
              ))}

              {/* Pulse rings on country pins */}
              {countries.map((c) => (
                <g key={c.name}>
                  {active === c.name && (
                    <circle cx={c.x} cy={c.y} r="12" fill="none" stroke="hsl(45 95% 50%)" strokeWidth="1" opacity="0.4">
                      <animate attributeName="r" from="6" to="18" dur="1.2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" from="0.6" to="0" dur="1.2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={c.x}
                    cy={c.y}
                    r={active === c.name ? 5 : 3.5}
                    className="transition-all duration-300 cursor-pointer"
                    fill={active === c.name ? "hsl(40 90% 42%)" : "hsl(45 95% 50%)"}
                    stroke="hsl(0 0% 100%)"
                    strokeWidth={1.2}
                    onMouseEnter={() => setActive(c.name)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === c.name ? null : c.name)}
                  />
                </g>
              ))}

              {/* "Expanding" arrows */}
              <g opacity="0.5">
                <line x1="600" y1="250" x2="680" y2="200" stroke="hsl(45 95% 50%)" strokeWidth="0.8" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="540" y1="230" x2="460" y2="110" stroke="hsl(45 95% 50%)" strokeWidth="0.8" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
                </line>
                <line x1="590" y1="245" x2="720" y2="270" stroke="hsl(45 95% 50%)" strokeWidth="0.8" strokeDasharray="4 3">
                  <animate attributeName="stroke-dashoffset" from="0" to="-14" dur="2s" repeatCount="indefinite" />
                </line>
              </g>
            </svg>

            {/* Tooltip */}
            {activeCountry && (
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-lg border border-border rounded-xl p-4 shadow-sm animate-fade-up min-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-sm">{activeCountry.name}</span>
                </div>
                <div className="text-2xl font-display font-bold text-gradient">{activeCountry.projects}</div>
                <div className="text-xs text-muted-foreground">Projects — {activeCountry.description}</div>
              </div>
            )}

            {/* Expanding badge */}
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-lg border border-primary/30 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">Expanding to <span className="text-gradient font-bold">15+ countries</span></span>
            </div>
          </div>

          {/* Country list */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Active Regions
            </h3>
            {countries.map((c) => (
              <button
                key={c.name}
                onMouseEnter={() => setActive(c.name)}
                onMouseLeave={() => setActive(null)}
                onClick={() => setActive(active === c.name ? null : c.name)}
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 text-left ${
                  active === c.name
                    ? "border-primary bg-primary/5 shadow-sm"
                    : "border-border/50 bg-card hover:border-border"
                }`}
              >
                <div className="flex items-center gap-3">
                  <MapPin className={`w-4 h-4 transition-colors ${active === c.name ? "text-primary" : "text-muted-foreground"}`} />
                  <div>
                    <div className="font-display text-sm font-semibold">{c.name}</div>
                    <div className="text-xs text-muted-foreground">{c.description}</div>
                  </div>
                </div>
                <div className={`font-display text-lg font-bold transition-colors ${active === c.name ? "text-gradient" : "text-foreground"}`}>
                  {c.projects}
                </div>
              </button>
            ))}
            <div className="pt-3 border-t border-border/50 flex justify-between items-center px-3">
              <span className="text-sm font-semibold text-muted-foreground">Total</span>
              <span className="font-display text-xl font-bold text-gradient">
                {countries.reduce((sum, c) => sum + c.projects, 0)}+
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectMapSection;
