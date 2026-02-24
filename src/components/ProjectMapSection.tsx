import { useState } from "react";
import { MapPin } from "lucide-react";

interface CountryData {
  name: string;
  projects: number;
  description: string;
  cx: number;
  cy: number;
  path: string;
}

const countries: CountryData[] = [
  {
    name: "UAE",
    projects: 8,
    description: "Hotels & Enterprise",
    cx: 380, cy: 195,
    path: "M370,180 L395,175 L400,185 L395,200 L380,205 L365,195 Z",
  },
  {
    name: "Bahrain",
    projects: 3,
    description: "Hospitality Sector",
    cx: 345, cy: 165,
    path: "M342,158 L348,158 L350,165 L348,172 L342,172 L340,165 Z",
  },
  {
    name: "Qatar",
    projects: 5,
    description: "Broadcasting & Hotels",
    cx: 355, cy: 180,
    path: "M350,172 L360,172 L362,182 L358,190 L350,188 L348,180 Z",
  },
  {
    name: "Oman",
    projects: 4,
    description: "Enterprise Networks",
    cx: 400, cy: 215,
    path: "M385,200 L410,190 L420,205 L415,230 L400,240 L385,225 L380,210 Z",
  },
  {
    name: "Libya",
    projects: 3,
    description: "Government & Telecom",
    cx: 165, cy: 155,
    path: "M130,120 L195,120 L200,130 L200,180 L185,200 L140,200 L130,170 Z",
  },
  {
    name: "Egypt",
    projects: 7,
    description: "Hotels & Resorts",
    cx: 220, cy: 165,
    path: "M200,130 L245,125 L250,140 L240,180 L225,200 L200,180 Z",
  },
];

const ProjectMapSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeCountry = countries.find((c) => c.name === active);

  return (
    <section className="py-20 bg-card/30 border-y border-border/50">
      <div className="container mx-auto">
        <div className="text-center mb-12 space-y-3">
          <h2 className="font-display text-3xl lg:text-4xl font-bold tracking-tight">
            Where We <span className="text-gradient">Operate</span>
          </h2>
          <p className="text-muted-foreground max-w-md mx-auto">
            Delivering IPTV & digital signage solutions across the GCC and North Africa
          </p>
        </div>

        <div className="grid lg:grid-cols-[1fr_320px] gap-8 items-start">
          {/* SVG Map */}
          <div className="relative bg-background rounded-2xl border border-border/50 p-6 shadow-sm overflow-hidden">
            <svg
              viewBox="100 90 350 180"
              className="w-full h-auto"
              style={{ maxHeight: 420 }}
            >
              {/* Water / background */}
              <rect x="100" y="90" width="350" height="180" fill="hsl(45 10% 95%)" rx="8" />

              {/* Country shapes */}
              {countries.map((c) => (
                <g key={c.name}>
                  <path
                    d={c.path}
                    className="transition-all duration-300 cursor-pointer"
                    fill={active === c.name ? "hsl(45 95% 50%)" : "hsl(45 15% 88%)"}
                    stroke={active === c.name ? "hsl(40 90% 42%)" : "hsl(45 15% 78%)"}
                    strokeWidth={active === c.name ? 1.5 : 0.8}
                    onMouseEnter={() => setActive(c.name)}
                    onMouseLeave={() => setActive(null)}
                    onClick={() => setActive(active === c.name ? null : c.name)}
                  />
                  {/* Pin dot */}
                  <circle
                    cx={c.cx}
                    cy={c.cy}
                    r={active === c.name ? 5 : 3}
                    className="transition-all duration-300 pointer-events-none"
                    fill={active === c.name ? "hsl(40 90% 42%)" : "hsl(45 95% 50%)"}
                  />
                  {/* Label */}
                  <text
                    x={c.cx}
                    y={c.cy - 10}
                    textAnchor="middle"
                    className="pointer-events-none select-none"
                    fill="hsl(220 15% 15%)"
                    fontSize={active === c.name ? 9 : 7}
                    fontWeight={active === c.name ? 700 : 500}
                    fontFamily="'Space Grotesk', sans-serif"
                  >
                    {c.name}
                  </text>
                </g>
              ))}
            </svg>

            {/* Tooltip on map */}
            {activeCountry && (
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-lg border border-border rounded-xl p-4 shadow-sm animate-fade-up min-w-[180px]">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-sm">{activeCountry.name}</span>
                </div>
                <div className="text-2xl font-display font-bold text-gradient">
                  {activeCountry.projects}
                </div>
                <div className="text-xs text-muted-foreground">
                  Projects — {activeCountry.description}
                </div>
              </div>
            )}
          </div>

          {/* Country list */}
          <div className="space-y-3">
            <h3 className="font-display text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-4">
              Coverage
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
              <span className="text-sm font-semibold text-muted-foreground">Total Projects</span>
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
