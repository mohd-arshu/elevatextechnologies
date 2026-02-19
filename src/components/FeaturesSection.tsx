import {
  Cloud,
  Tv,
  Monitor,
  Shield,
  Zap,
  BarChart3,
  Globe,
  Settings2,
  Radio,
} from "lucide-react";

const features = [
  {
    icon: Tv,
    title: "Live TV Streaming",
    description:
      "Deliver hundreds of live channels with ultra-low latency HLS/DASH streaming across any device.",
    tag: "IPTV",
  },
  {
    icon: Monitor,
    title: "Digital Signage CMS",
    description:
      "Manage and schedule content across thousands of screens in real-time with our drag-and-drop CMS.",
    tag: "Signage",
  },
  {
    icon: Cloud,
    title: "Cloud Infrastructure",
    description:
      "Fully managed cloud backend with auto-scaling CDN, ensuring peak performance even during high demand.",
    tag: "Cloud",
  },
  {
    icon: Shield,
    title: "DRM & Content Protection",
    description:
      "Enterprise-grade DRM with Widevine, PlayReady & FairPlay to keep your premium content secure.",
    tag: "Security",
  },
  {
    icon: Zap,
    title: "Instant Failover",
    description:
      "Automatic redundancy and failover ensures zero downtime, keeping streams running even if a node fails.",
    tag: "Reliability",
  },
  {
    icon: BarChart3,
    title: "Advanced Analytics",
    description:
      "Real-time dashboards tracking viewer engagement, stream quality, and audience insights across all platforms.",
    tag: "Analytics",
  },
  {
    icon: Globe,
    title: "Multi-Region CDN",
    description:
      "Serve content globally with edge nodes across 150+ countries for consistently fast load times.",
    tag: "Global",
  },
  {
    icon: Settings2,
    title: "White-Label Ready",
    description:
      "Fully brandable platform — launch your own IPTV or signage product under your own brand identity.",
    tag: "Branding",
  },
  {
    icon: Radio,
    title: "Video on Demand",
    description:
      "Host and deliver a full VOD library with adaptive bitrate streaming optimized for every connection.",
    tag: "IPTV",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 grid-pattern opacity-20 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
            Platform Features
          </div>
          <h2 className="font-display text-4xl lg:text-5xl font-bold">
            Everything You Need to{" "}
            <span className="text-gradient">Stream & Display</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            One unified platform for all your media delivery needs — from broadcast TV to
            in-venue digital signage.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-2xl card-gradient border border-border/50 hover:border-primary/30 transition-all duration-300 hover:shadow-glow-cyan hover:-translate-y-1"
            >
              {/* Tag */}
              <span className="inline-block px-2.5 py-1 rounded-md bg-primary/10 text-primary text-xs font-semibold mb-4">
                {feature.tag}
              </span>

              {/* Icon */}
              <div className="w-12 h-12 rounded-xl bg-secondary flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>

              <h3 className="font-display text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
