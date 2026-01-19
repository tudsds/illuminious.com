import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  Clock,
  Globe,
  MessageSquare,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { toast } from "sonner";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "info@illuminious.com",
    href: "mailto:info@illuminious.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
  },
  {
    icon: MapPin,
    title: "Headquarters",
    value: "Silicon Valley, CA, USA",
    href: null,
  },
  {
    icon: Clock,
    title: "Business Hours",
    value: "Mon-Fri: 9AM - 6PM PST",
    href: null,
  },
];

const offices = [
  {
    location: "United States",
    city: "Silicon Valley, CA",
    type: "Headquarters",
    flag: "🇺🇸",
  },
  {
    location: "Indonesia",
    city: "Batam Free Trade Zone",
    type: "Manufacturing",
    flag: "🇮🇩",
  },
  {
    location: "China",
    city: "Shenzhen",
    type: "R&D Center",
    flag: "🇨🇳",
  },
];

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    toast.success("Thank you for your inquiry! We'll get back to you within 24 hours.");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      company: "",
      service: "",
      projectType: "",
      budget: "",
      timeline: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  return (
    <>
      <SEO
        title="Contact Us"
        description="Get in touch with Illuminious for your electronics manufacturing needs. Request a quote, schedule a consultation, or learn more about our services."
        keywords="contact illuminious, electronics manufacturing quote, supply chain consultation"
        url="/contact"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-gradient-to-br from-illuminious-navy via-illuminious-blue to-illuminious-sky overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(255, 255, 255, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 text-white text-sm font-medium mb-6">
              <MessageSquare className="w-4 h-4" />
              Let's Talk
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-xl text-illuminious-light/90">
              Ready to start your project? Contact us for a free consultation and
              quote. We typically respond within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <AnimatedSection>
                <div className="bg-white rounded-2xl shadow-lg border border-illuminious-light p-8">
                  <h2 className="text-2xl font-bold text-illuminious-navy mb-6">
                    Request a Quote
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          First Name *
                        </label>
                        <Input
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          required
                          className="border-illuminious-light focus:border-illuminious-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Last Name *
                        </label>
                        <Input
                          name="lastName"
                          value={formData.lastName}
                          onChange={handleChange}
                          required
                          className="border-illuminious-light focus:border-illuminious-blue"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Email *
                        </label>
                        <Input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="border-illuminious-light focus:border-illuminious-blue"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Phone
                        </label>
                        <Input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="border-illuminious-light focus:border-illuminious-blue"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Company Name
                      </label>
                      <Input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        className="border-illuminious-light focus:border-illuminious-blue"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Service Interested In
                        </label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => handleSelectChange("service", value)}
                        >
                          <SelectTrigger className="border-illuminious-light focus:border-illuminious-blue">
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="dfm">Design for Manufacturing (DFM)</SelectItem>
                            <SelectItem value="oem">OEM Manufacturing</SelectItem>
                            <SelectItem value="odm">ODM Manufacturing</SelectItem>
                            <SelectItem value="ems">Electronics Manufacturing Services</SelectItem>
                            <SelectItem value="prototyping">Rapid Prototyping</SelectItem>
                            <SelectItem value="logistics">Logistics & Warehouse</SelectItem>
                            <SelectItem value="startups">Startups Program</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Project Type
                        </label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleSelectChange("projectType", value)}
                        >
                          <SelectTrigger className="border-illuminious-light focus:border-illuminious-blue">
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="consumer-electronics">Consumer Electronics</SelectItem>
                            <SelectItem value="ai-hardware">AI Hardware / Wearables</SelectItem>
                            <SelectItem value="iot">IoT Devices</SelectItem>
                            <SelectItem value="medical">Medical Devices</SelectItem>
                            <SelectItem value="industrial">Industrial Electronics</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Estimated Budget
                        </label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange("budget", value)}
                        >
                          <SelectTrigger className="border-illuminious-light focus:border-illuminious-blue">
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="under-10k">Under $10,000</SelectItem>
                            <SelectItem value="10k-50k">$10,000 - $50,000</SelectItem>
                            <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                            <SelectItem value="100k-500k">$100,000 - $500,000</SelectItem>
                            <SelectItem value="over-500k">Over $500,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-foreground mb-2">
                          Timeline
                        </label>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) => handleSelectChange("timeline", value)}
                        >
                          <SelectTrigger className="border-illuminious-light focus:border-illuminious-blue">
                            <SelectValue placeholder="Select timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="asap">ASAP</SelectItem>
                            <SelectItem value="1-3-months">1-3 Months</SelectItem>
                            <SelectItem value="3-6-months">3-6 Months</SelectItem>
                            <SelectItem value="6-12-months">6-12 Months</SelectItem>
                            <SelectItem value="flexible">Flexible</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Project Details *
                      </label>
                      <Textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        placeholder="Tell us about your project, requirements, and any specific questions you have..."
                        className="border-illuminious-light focus:border-illuminious-blue resize-none"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      size="lg"
                      className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 mr-2" />
                          Submit Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                </div>
              </AnimatedSection>
            </div>

            {/* Contact Info Sidebar */}
            <div className="space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-illuminious-navy rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-6">Contact Information</h3>
                  <div className="space-y-4">
                    {contactInfo.map((item) => (
                      <div key={item.title} className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-lg bg-illuminious-blue/30 flex items-center justify-center flex-shrink-0">
                          <item.icon className="w-5 h-5 text-illuminious-sky" />
                        </div>
                        <div>
                          <p className="text-sm text-illuminious-light/70">{item.title}</p>
                          {item.href ? (
                            <a
                              href={item.href}
                              className="text-white hover:text-illuminious-sky transition-colors"
                            >
                              {item.value}
                            </a>
                          ) : (
                            <p className="text-white">{item.value}</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light">
                  <div className="flex items-center gap-2 mb-6">
                    <Globe className="w-5 h-5 text-illuminious-blue" />
                    <h3 className="text-xl font-semibold text-illuminious-navy">
                      Global Offices
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {offices.map((office) => (
                      <div
                        key={office.location}
                        className="flex items-start gap-3 p-3 rounded-lg bg-illuminious-light/30"
                      >
                        <span className="text-2xl">{office.flag}</span>
                        <div>
                          <p className="font-medium text-illuminious-navy">
                            {office.location}
                          </p>
                          <p className="text-sm text-muted-foreground">{office.city}</p>
                          <p className="text-xs text-illuminious-blue">{office.type}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </AnimatedSection>

              <AnimatedSection delay={0.3}>
                <div className="bg-gradient-to-br from-illuminious-blue to-illuminious-sky rounded-2xl p-6 text-white">
                  <h3 className="text-xl font-semibold mb-3">Quick Response</h3>
                  <p className="text-white/80 text-sm mb-4">
                    Need an urgent response? Email us directly and we'll get back
                    to you within a few hours during business hours.
                  </p>
                  <a
                    href="mailto:info@illuminious.com"
                    className="inline-flex items-center gap-2 text-white font-medium hover:underline"
                  >
                    <Mail className="w-4 h-4" />
                    info@illuminious.com
                  </a>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
