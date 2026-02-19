const StatsSection = () => {
  const stats = [
    { value: "500+", label: "Channels Supported" },
    { value: "99.9%", label: "Uptime SLA" },
    { value: "150+", label: "Countries Served" },
    { value: "10M+", label: "End Users Reached" },
  ];

  return (
    <section className="py-16 border-y border-border/50 bg-card/30">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <div key={i} className="text-center space-y-2">
              <div className="font-display text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
