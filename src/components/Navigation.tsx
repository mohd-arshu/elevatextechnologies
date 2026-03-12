import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Tv, MonitorSmartphone, MonitorStop, LayoutDashboard, Building2, Star } from "lucide-react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);
  const [isClientsOpen, setIsClientsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const solutions = [
    { label: "IPTV", href: "/solutions#iptv", icon: Tv },
    { label: "Digital Signage", href: "/solutions#signage", icon: MonitorSmartphone },
    { label: "Casting", href: "/solutions#casting", icon: MonitorStop },
    { label: "Interactive Kiosk", href: "/solutions#kiosk", icon: LayoutDashboard },
  ];

  const premiumClients = [
    { name: "Rixos Bab Al Bahr", location: "RAK" },
    { name: "Rixos The Palm", location: "Dubai" },
    { name: "The Ritz-Carlton", location: "Dubai" },
    { name: "Pullman Doha", location: "West Bay" },
    { name: "Pullman Resort", location: "Al Marjan" },
    { name: "Sofitel", location: "Abu Dhabi" },
    { name: "Mövenpick Hotels", location: "Global" },
  ];

  const navLinks = [
    { label: "About", href: "/about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? "bg-background/95 backdrop-blur-2xl border-b border-border/50 shadow-elevated py-2"
        : "bg-background/40 backdrop-blur-md py-4"
        }`}
    >
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 group">
          <span className="font-display text-xl font-bold tracking-tight">
            Elevate<span className="text-gradient">X Technologies</span>
          </span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-8 ml-auto mr-8">
          {/* Solutions Dropdown */}
          <div className="relative group">
            <Link
              to="/solutions"
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
            >
              Solutions
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </Link>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-64 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-card/95 backdrop-blur-xl border border-primary/10 rounded-2xl p-3 shadow-2xl">
                <div className="grid gap-1">
                  {solutions.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center gap-3 p-3 rounded-xl hover:bg-primary/10 transition-colors group/item"
                    >
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/10 group-hover/item:border-primary/20 transition-colors">
                        <item.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{item.label}</div>
                      </div>
                    </Link>
                  ))}
                </div>
                <div className="mt-2 pt-2 border-t border-border/50">
                  <Link
                    to="/solutions"
                    className="block w-full text-center py-2 text-xs font-semibold text-primary hover:text-primary/80"
                  >
                    View All Solutions
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Premium Clients Dropdown */}
          <div className="relative group">
            <button
              className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200 py-2"
            >
              Our Clients
              <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
            </button>

            {/* Dropdown Menu */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 w-72 pt-4 opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0 transition-all duration-300 pointer-events-none group-hover:pointer-events-auto">
              <div className="bg-card/95 backdrop-blur-xl border border-primary/10 rounded-2xl p-4 shadow-2xl">
                <div className="flex items-center gap-2 mb-3 px-2">
                  <Star className="w-4 h-4 text-primary fill-primary" />
                  <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground">Premium Partners</span>
                </div>
                <div className="grid gap-2">
                  {premiumClients.map((client) => (
                    <div
                      key={client.name}
                      className="flex items-center gap-3 p-2.5 rounded-xl hover:bg-primary/5 border border-transparent hover:border-primary/10 transition-all group/client"
                    >
                      <div className="w-9 h-9 rounded-lg bg-muted flex items-center justify-center group-hover/client:bg-primary/10 transition-colors">
                        <Building2 className="w-4 h-4 text-muted-foreground group-hover/client:text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground leading-tight">{client.name}</div>
                        <div className="text-[10px] text-muted-foreground">{client.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {navLinks.map((link) =>
            link.href.startsWith("/") ? (
              <Link
                key={link.label}
                to={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </Link>
            ) : (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-200"
              >
                {link.label}
              </a>
            )
          )}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold hover:opacity-90 transition-opacity shadow-elevated"
          >
            Get Started
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden text-foreground"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-card/95 backdrop-blur-xl border-b border-border px-6 pb-6 overflow-y-auto max-h-[calc(100vh-80px)]">
          <div className="flex flex-col gap-4 pt-4">
            {/* Mobile Solutions */}
            <div>
              <button
                onClick={() => setIsSolutionsOpen(!isSolutionsOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Solutions
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isSolutionsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isSolutionsOpen ? "max-h-96 mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="grid gap-3 pl-4">
                  {solutions.map((item) => (
                    <Link
                      key={item.label}
                      to={item.href}
                      className="flex items-center gap-3 p-2 rounded-lg hover:bg-primary/10 transition-colors"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <item.icon className="w-5 h-5 text-primary" />
                      <span className="text-sm font-medium text-foreground">{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Mobile Clients */}
            <div>
              <button
                onClick={() => setIsClientsOpen(!isClientsOpen)}
                className="flex items-center justify-between w-full text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
              >
                Premium Clients
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isClientsOpen ? "rotate-180" : ""}`} />
              </button>
              
              <div className={`overflow-hidden transition-all duration-300 ${isClientsOpen ? "max-h-[400px] mt-4 opacity-100" : "max-h-0 opacity-0"}`}>
                <div className="grid gap-4 pl-4 border-l border-primary/10 ml-1">
                  {premiumClients.map((client) => (
                    <div key={client.name} className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-lg bg-primary/5 flex items-center justify-center">
                        <Building2 className="w-3.5 h-3.5 text-primary" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-foreground">{client.name}</div>
                        <div className="text-[10px] text-muted-foreground">{client.location}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {navLinks.map((link) =>
              link.href.startsWith("/") ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </a>
              )
            )}
            <a
              href="#contact"
              className="w-full text-center px-4 py-2.5 mt-2 rounded-lg bg-gradient-primary text-primary-foreground text-sm font-semibold"
              onClick={() => setIsMenuOpen(false)}
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
