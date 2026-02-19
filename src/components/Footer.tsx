import { Tv, Twitter, Linkedin, Youtube } from "lucide-react";

const Footer = () => {
  const links = {
    Solutions: ["Cloud IPTV", "Digital Signage", "Video on Demand", "White-Label Platform"],
    Company: ["About Us", "Careers", "Press", "Contact"],
    Resources: ["Documentation", "API Reference", "Status Page", "Blog"],
    Legal: ["Privacy Policy", "Terms of Service", "Cookie Policy"],
  };

  return (
    <footer className="border-t border-border/50 bg-card/20 py-16">
      <div className="container mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center">
                <Tv className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="font-display text-xl font-bold">
                Elevate<span className="text-gradient">X Technologies</span>
              </span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xs">
              Enterprise cloud infrastructure for IPTV and digital signage — 
              delivering media experiences that scale.
            </p>
            {/* Social */}
            <div className="flex items-center gap-3 pt-2">
              {[Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center hover:bg-primary/20 hover:text-primary transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(links).map(([category, items]) => (
            <div key={category} className="space-y-4">
              <h4 className="font-display text-sm font-semibold text-foreground">{category}</h4>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 ElevateX Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-xs text-muted-foreground">All systems operational</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
