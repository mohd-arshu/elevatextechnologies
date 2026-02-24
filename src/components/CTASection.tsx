import { ArrowRight, Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const CTASection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // ==========================================
    // REPLACE THESE WITH YOUR GOOGLE FORM DETAILS
    const GOOGLE_FORM_URL = "https://docs.google.com/forms/d/e/1FAIpQLSdTRGO1elYJBUCjKJJWtfFvkLcb0-fZEGX_zQXdSTuNuSOmrw/formResponse";

    // Replace these numbers with your form's specific entry IDs
    const ENTRY_NAME = "entry.389148342";
    const ENTRY_EMAIL = "entry.2081263940";
    const ENTRY_COMPANY = "entry.520398248";
    const ENTRY_MESSAGE = "entry.1604518262";
    // ==========================================

    const submitData = new URLSearchParams();
    submitData.append(ENTRY_NAME, formData.name);
    submitData.append(ENTRY_EMAIL, formData.email);
    submitData.append(ENTRY_COMPANY, formData.company);
    submitData.append(ENTRY_MESSAGE, formData.message);

    try {
      await fetch(GOOGLE_FORM_URL, {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded"
        },
        body: submitData
      });
      alert("Thank you! We will get back to you soon.");
      setFormData({ name: "", email: "", company: "", message: "" });
    } catch (error) {
      alert("Something went wrong. Please try again or contact us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 opacity-20 pointer-events-none" />

      <div className="container mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left: Info */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/30 bg-primary/10 text-primary text-sm font-medium">
                Get In Touch
              </div>
              <h2 className="font-display text-4xl lg:text-5xl font-bold">
                Ready to{" "}
                <span className="text-gradient">Transform</span>{" "}
                Your Media Delivery?
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Talk to our solutions team and get a personalized demo tailored to your
                industry and scale. We'll help you go live in days, not months.
              </p>
            </div>

            {/* Contact details */}
            <div className="space-y-4">
              {[
                { icon: Mail, label: "Email Us", value: "support@elevatextech.com" },
                { icon: Phone, label: "Call Us", value: "+971 54 448 0182" },
                { icon: MapPin, label: "Headquarters", value: "113,A3:Silicon Oasis, Dubai, UAE" },
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center flex-shrink-0">
                    <item.icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground font-medium">{item.label}</div>
                    <div className="text-sm font-semibold mt-0.5">{item.value}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-3 pt-2">
              {["SOC 2 Compliant", "GDPR Ready", "ISO 27001", "24/7 Support"].map((badge) => (
                <span
                  key={badge}
                  className="px-3 py-1.5 rounded-lg border border-border bg-secondary/50 text-xs font-medium text-muted-foreground"
                >
                  {badge}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div className="card-gradient border border-border/50 rounded-2xl p-8 shadow-elevated">
            <h3 className="font-display text-xl font-semibold mb-6">Request a Demo</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="John Smith"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-medium text-muted-foreground mb-2">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="john@company.com"
                    className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Company / Organization
                </label>
                <input
                  type="text"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  placeholder="Your Company"
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-muted-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Number of screens, channels, users..."
                  className="w-full px-4 py-3 rounded-xl bg-secondary border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-primary/60 focus:ring-1 focus:ring-primary/40 transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-primary text-primary-foreground font-semibold text-sm shadow-elevated hover:opacity-90 transition-all hover:scale-[1.01] disabled:opacity-70 disabled:hover:scale-100"
              >
                {isSubmitting ? "Submitting..." : "Request Your Free Demo"}
                {!isSubmitting && <ArrowRight className="w-4 h-4" />}
              </button>

              <p className="text-center text-xs text-muted-foreground">
                No credit card required. Our team responds within 24 hours.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
