import { useState, useEffect, useRef, memo } from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup,
} from "react-simple-maps";
import { MapPin, Globe, TrendingUp } from "lucide-react";

const GEO_URL = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

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
  isoName: string;
  projects: number;
  description: string;
  coordinates: [number, number];
}

const countries: CountryData[] = [
  { name: "UAE", isoName: "United Arab Emirates", projects: 8, description: "Hotels & Enterprise", coordinates: [54.5, 24.0] },
  { name: "Bahrain", isoName: "Bahrain", projects: 3, description: "Hospitality Sector", coordinates: [50.55, 26.07] },
  { name: "Qatar", isoName: "Qatar", projects: 5, description: "Broadcasting & Hotels", coordinates: [51.18, 25.35] },
  { name: "Oman", isoName: "Oman", projects: 4, description: "Enterprise Networks", coordinates: [57.0, 21.5] },
  { name: "Libya", isoName: "Libya", projects: 3, description: "Government & Telecom", coordinates: [17.2, 28.0] },
  { name: "Egypt", isoName: "Egypt", projects: 7, description: "Hotels & Resorts", coordinates: [30.8, 26.8] },
];

const highlightedNames = new Set(countries.map((c) => c.isoName));

const MapChart = memo(({ active, setActive }: { active: string | null; setActive: (v: string | null) => void }) => (
  <ComposableMap
    projection="geoMercator"
    projectionConfig={{ center: [42, 25], scale: 600 }}
    style={{ width: "100%", height: "100%" }}
  >
    <ZoomableGroup center={[42, 25]} zoom={1} minZoom={0.8} maxZoom={4}>
      <Geographies geography={GEO_URL}>
        {({ geographies }) =>
          geographies.map((geo) => {
            const name = geo.properties.name;
            const isHighlighted = highlightedNames.has(name);
            const isActive = countries.some((c) => c.isoName === name && c.name === active);

            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const c = countries.find((c) => c.isoName === name);
                  if (c) setActive(c.name);
                }}
                onMouseLeave={() => setActive(null)}
                onClick={() => {
                  const c = countries.find((c) => c.isoName === name);
                  if (c) setActive(active === c.name ? null : c.name);
                }}
                style={{
                  default: {
                    fill: isActive
                      ? "hsl(45, 95%, 50%)"
                      : isHighlighted
                        ? "hsl(45, 80%, 60%)"
                        : "hsl(45, 10%, 90%)",
                    stroke: isHighlighted ? "hsl(40, 60%, 50%)" : "hsl(45, 15%, 82%)",
                    strokeWidth: isHighlighted ? 0.8 : 0.3,
                    outline: "none",
                    cursor: isHighlighted ? "pointer" : "default",
                    transition: "all 250ms",
                  },
                  hover: {
                    fill: isHighlighted ? "hsl(45, 95%, 50%)" : "hsl(45, 15%, 87%)",
                    stroke: isHighlighted ? "hsl(40, 90%, 42%)" : "hsl(45, 15%, 78%)",
                    strokeWidth: isHighlighted ? 1.2 : 0.3,
                    outline: "none",
                    cursor: isHighlighted ? "pointer" : "default",
                    transition: "all 250ms",
                  },
                  pressed: {
                    fill: isHighlighted ? "hsl(40, 90%, 42%)" : "hsl(45, 10%, 90%)",
                    outline: "none",
                  },
                }}
              />
            );
          })
        }
      </Geographies>

      {/* Markers with pulse */}
      {countries.map((c) => (
        <Marker
          key={c.name}
          coordinates={c.coordinates}
          onMouseEnter={() => setActive(c.name)}
          onMouseLeave={() => setActive(null)}
          onClick={() => setActive(active === c.name ? null : c.name)}
        >
          {active === c.name && (
            <circle r={12} fill="none" stroke="hsl(45, 95%, 50%)" strokeWidth={1} opacity={0.4}>
              <animate attributeName="r" from="6" to="20" dur="1.2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.6" to="0" dur="1.2s" repeatCount="indefinite" />
            </circle>
          )}
          <circle
            r={active === c.name ? 6 : 4}
            fill={active === c.name ? "hsl(40, 90%, 42%)" : "hsl(45, 95%, 50%)"}
            stroke="#fff"
            strokeWidth={1.5}
            style={{ cursor: "pointer", transition: "all 250ms" }}
          />
        </Marker>
      ))}
    </ZoomableGroup>
  </ComposableMap>
));

MapChart.displayName = "MapChart";

const ProjectMapSection = () => {
  const [active, setActive] = useState<string | null>(null);
  const activeCountry = countries.find((c) => c.name === active);
  const { count: totalProjects, ref: totalRef } = useCountUp(30, 2200);
  const { count: expandCount, ref: expandRef } = useCountUp(15, 2500);

  return (
    <section className="py-20 bg-background border-y border-border/50" ref={totalRef}>
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
          {/* Map */}
          <div className="relative bg-background rounded-2xl border border-border/50 shadow-sm overflow-hidden min-h-[460px] 2xl:min-h-[600px]">
            <MapChart active={active} setActive={setActive} />

            {/* Tooltip */}
            {activeCountry && (
              <div className="absolute top-4 left-4 bg-background/90 backdrop-blur-lg border border-border rounded-xl p-4 shadow-sm animate-fade-up min-w-[180px] z-10">
                <div className="flex items-center gap-2 mb-1">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="font-display font-bold text-sm">{activeCountry.name}</span>
                </div>
                <div className="text-2xl font-display font-bold text-gradient">{activeCountry.projects}</div>
                <div className="text-xs text-muted-foreground">Projects — {activeCountry.description}</div>
              </div>
            )}

            {/* Expanding badge */}
            <div className="absolute bottom-4 right-4 bg-background/90 backdrop-blur-lg border border-primary/30 rounded-xl px-4 py-2.5 shadow-sm flex items-center gap-2 z-10">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-xs font-semibold">
                Expanding to <span className="text-gradient font-bold">15+ countries</span>
              </span>
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
                className={`w-full flex items-center justify-between p-3 rounded-xl border transition-all duration-200 text-left ${active === c.name
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
