import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Shield, Award, Users, Globe, CheckCircle2 } from "lucide-react";

const trustPoints = [
  {
    icon: Shield,
    title: "Enterprise-Grade Security",
    description: "SOC 2 compliant infrastructure with end-to-end encryption, ensuring your data and content are always protected.",
  },
  {
    icon: Award,
    title: "Industry-Recognized Excellence",
    description: "Trusted by leading hospitality brands across the GCC for reliable IPTV and digital signage solutions.",
  },
  {
    icon: Users,
    title: "Dedicated Support Team",
    description: "24/7 expert support with dedicated account managers who understand your business needs.",
  },
  {
    icon: Globe,
    title: "Global Infrastructure",
    description: "Redundant cloud infrastructure across multiple regions ensuring 99.9% uptime for your operations.",
  },
];

const commitments = [
  "99.9% uptime guarantee backed by SLA",
  "No hidden fees — transparent pricing",
  "Data sovereignty and compliance with regional regulations",
  "Seamless onboarding with white-glove setup",
  "Continuous platform updates at no extra cost",
  "Scalable from 10 screens to 10,000+",
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <main>
        {/* Hero */}
        <section className="pt-32 pb-16 bg-background">
          <div className="container mx-auto text-center max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
              About ElevateX Technologies
            </div>
            <h1 className="font-display text-4xl lg:text-5xl font-bold leading-tight tracking-tight">
              Built on <span className="text-gradient">Trust</span>, Driven by <span className="text-gradient">Innovation</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              ElevateX Technologies is a Hospitality Entertainment, IPTV, Casting, Digital Signage Software CMS and Digital Engagement solution provider with
              main focus of Hospitality, Healthcare, Education, Banking and Corporate sectors. We're more than just a vendor;
              with strategic partnership with Uniguest – a global leader and trusted provider in the domain,
              we work closely with our customers to develop a customized entertainment & Information ecosystem tailored to your brand, target audience, and budget.
            </p>
          </div>
        </section>

        {/* Trust Section */}
        <section className="py-20">
          <div className="container mx-auto">
            <div className="text-center max-w-2xl mx-auto mb-14 space-y-4">
              <h2 className="font-display text-3xl font-bold tracking-tight">
                Why Businesses <span className="text-gradient">Trust Us</span>
              </h2>
              <p className="text-muted-foreground">
                From five-star hotel chains to large-scale enterprises, our clients choose us
                because we deliver on our promises — every time.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {trustPoints.map((point) => (
                <div
                  key={point.title}
                  className="p-6 rounded-xl border border-border/50 bg-card/50 space-y-3 hover:shadow-elevated transition-shadow"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <point.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold">{point.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{point.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Commitments */}
        <section className="py-20 bg-card/30 border-y border-border/50">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center max-w-5xl mx-auto">
              <div className="space-y-6">
                <h2 className="font-display text-3xl font-bold tracking-tight">
                  Our <span className="text-gradient">Commitments</span> to You
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  We believe trust is earned through consistent delivery, transparent communication,
                  and unwavering commitment to our clients' success.
                </p>
              </div>
              <div className="space-y-4">
                {commitments.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm text-foreground">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20">
          <div className="container mx-auto text-center max-w-2xl space-y-6">
            <h2 className="font-display text-3xl font-bold tracking-tight">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground">
              Join thousands of businesses that trust ElevateX Technologies for their media infrastructure.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:opacity-90 transition-all"
            >
              Contact Our Team
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
