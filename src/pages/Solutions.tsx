import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tv, MonitorSmartphone, MonitorStop, LayoutDashboard } from "lucide-react";
import castingImg from "@/assets/casting.png";
import kioskImg from "@/assets/kiosk.jpg";
import signageImg from "@/assets/signageimage.jpg";

const solutions = [
    {
        title: "IPTV",
        description: "Comprehensive solutions tailored for Hospitality, Healthcare, Education, and Corporate environments.",
        icon: <Tv className="w-8 h-8 text-primary" />,
        image: "https://images.unsplash.com/photo-1593784991095-a205069470b6?auto=format&fit=crop&q=80&w=800",
    },
    {
        title: "Digital Signage",
        description: "CMS-based Digital Signage for dynamic content management, scheduling, and distribution.",
        icon: <MonitorSmartphone className="w-8 h-8 text-primary" />,
        image: signageImg,
    },
    {
        title: "Casting",
        description: "Secure Built-in and External casting solutions for bringing your own content to any screen.",
        icon: <MonitorStop className="w-8 h-8 text-primary" />,
        image: castingImg,
    },
    {
        title: "Interactive Kiosk",
        description: "Self-service touch kiosks for wayfinding, check-ins, ordering, and information accessibility.",
        icon: <LayoutDashboard className="w-8 h-8 text-primary" />,
        image: kioskImg,
    }
];

const Solutions = () => {
    return (
        <div className="min-h-screen bg-background flex flex-col pt-20">
            <Navigation />

            <main className="flex-grow">
                <section className="py-20 bg-muted/30">
                    <div className="container mx-auto px-4 md:px-6">
                        <div className="text-center max-w-3xl mx-auto mb-16 animate-fade-up">
                            <h1 className="font-display text-4xl md:text-5xl font-bold tracking-tight mb-6">
                                Our <span className="text-gradient">Solutions</span>
                            </h1>
                            <p className="text-lg text-muted-foreground">
                                Discover our comprehensive suite of innovative services designed to elevate
                                guest experiences and streamline operations.
                            </p>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
                            {solutions.map((solution, index) => (
                                <div
                                    key={solution.title}
                                    className="group rounded-2xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-elevated transition-all duration-300 animate-fade-up"
                                    style={{ animationDelay: `${index * 100}ms` }}
                                >
                                    <div className="aspect-video overflow-hidden relative">
                                        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors z-10" />
                                        <img
                                            src={solution.image}
                                            alt={solution.title}
                                            className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                        />
                                    </div>
                                    <div className="p-8">
                                        <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center mb-6 border border-primary/20">
                                            {solution.icon}
                                        </div>
                                        <h3 className="font-display text-2xl font-semibold mb-3">
                                            {solution.title}
                                        </h3>
                                        <p className="text-muted-foreground leading-relaxed">
                                            {solution.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    );
};

export default Solutions;
