import { Building2, Hotel, Tv2, ShoppingBag, Plane, GraduationCap } from "lucide-react";

const useCases = [
  {
    icon: Hotel,
    title: "Hospitality",
    description:
      "Deploy IPTV in hotels, resorts, and serviced apartments with guest-room entertainment, interactive guides, and branded welcome screens.",
    gradient: "from-blue-600/20 to-cyan-500/10",
  },
  {
    icon: Building2,
    title: "Enterprises & Offices",
    description:
      "Internal communications, live event broadcasting, and lobby signage for corporate HQs and multi-site businesses.",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    icon: ShoppingBag,
    title: "Retail & QSR",
    description:
      "Dynamic menu boards, promotional signage, and in-store TV networks that drive conversions and customer experience.",
    gradient: "from-blue-600/20 to-cyan-500/10",
  },
  {
    icon: Plane,
    title: "Transport & Airports",
    description:
      "Real-time flight information displays, wayfinding signage, and passenger entertainment in terminals and lounges.",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
  {
    icon: GraduationCap,
    title: "Education",
    description:
      "Campus TV networks, lecture streaming, emergency alert systems, and digital notice boards across universities.",
    gradient: "from-blue-600/20 to-cyan-500/10",
  },
  {
    icon: Tv2,
    title: "Telcos & Operators",
    description:
      "Launch your own IPTV service with our white-label platform — full EPG, middleware, and subscriber management.",
    gradient: "from-cyan-500/20 to-blue-600/10",
  },
];

const UseCasesSection = () => {
  return (
    <section id="use-cases" className="py-24 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Industries We Serve
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Built for Every{" "}
            <span className="text-gradient">Vertical</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From hotel rooms to retail floors — our platform adapts to the unique
            needs of every industry.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((uc, i) => (
            <div
              key={i}
              className="group relative p-8 rounded-2xl border border-border/50 hover:border-primary/30 transition-all duration-300 hover:-translate-y-1 bg-card"
            >
              <div className="w-14 h-14 rounded-2xl bg-secondary flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <uc.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3">{uc.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{uc.description}</p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
