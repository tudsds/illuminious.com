import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  Globe,
  Lightbulb,
  Rocket,
  Scale,
  Shield,
  CheckCircle,
  ChevronRight,
  Zap,
  Building2,
  MapPin,
  CircuitBoard,
  Layers,
  Microscope,
  Box,
  Settings,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FlagIcon from "@/components/FlagIcon";

const stats = [
  { value: "8", label: "SMT Production Lines" },
  { value: "50M+", label: "Yearly Placements" },
  { value: "99.7%", label: "First-Pass Yield" },
  { value: "20+", label: "Years Manufacturing" },
];

const coreCapabilities = [
  {
    icon: CircuitBoard,
    title: "SMT & PCB Assembly",
    description: "8 fully automated SMT lines with 01005 capability, 3D AOI, and X-ray inspection. From prototype to 100K+ boards per month.",
    href: "/services/smt-assembly",
    image: "/images/DEPLOYED_smt-reflow-speaker-pcb-home.jpg",
  },
  {
    icon: Microscope,
    title: "Testing & Quality Control",
    description: "In-line 3D AOI, X-ray, ICT, flying probe, and custom functional testing. IPC Class 3 workmanship on every board.",
    href: "/services/testing-inspection",
    image: "/images/DEPLOYED_backup-quality-reliability-52.jpg",
  },
  {
    icon: Box,
    title: "Box Build & System Integration",
    description: "Complete product assembly from PCBA to final packaging. Cable harness, mechanical assembly, firmware flashing, and labeling.",
    href: "/services/box-build",
    image: "/images/DEPLOYED_smt-production-line-panoramic.jpg",
  },
  {
    icon: Factory,
    title: "Injection Molding",
    description: "In-house tooling and injection molding for plastic enclosures, light guides, and structural components. 80–3,000 ton presses.",
    href: "/services/injection-molding",
    image: "/images/DEPLOYED_backup-smt-component-feeding-26.jpg",
  },
];

const advantages = [
  {
    icon: Shield,
    title: "US-Managed, Factory-Direct",
    description: "Contracts signed in the US, protected by US law. You work with our Palo Alto team while our own factories handle production.",
  },
  {
    icon: Scale,
    title: "Dual-Factory Flexibility",
    description: "Shenzhen for NPI speed and complexity. Batam FTZ for tariff-optimized mass production. Same quality system, your choice.",
  },
  {
    icon: Zap,
    title: "Vertically Integrated",
    description: "SMT, through-hole, testing, injection molding, box build, and fulfillment — all under one roof. No middlemen, no delays.",
  },
];

const locations = [
  {
    flag: "US" as const,
    country: "US",
    city: "Palo Alto, CA",
    role: "Engineering & Management",
    description: "Our US headquarters handles project management, DFM review, supply chain strategy, and client communication. Your single point of contact.",
  },
  {
    flag: "CN" as const,
    country: "CN",
    city: "Shenzhen",
    role: "NPI & Advanced Manufacturing",
    description: "Our Shenzhen factory specializes in rapid prototyping, complex multi-layer PCBA, and new product introduction. 72-hour turnaround on prototypes.",
  },
  {
    flag: "ID" as const,
    country: "ID",
    city: "Batam FTZ",
    role: "Volume Production",
    description: "Our Batam facility in the Free Trade Zone delivers tariff-optimized mass production with the same equipment and quality standards as Shenzhen.",
  },
];

const manufacturingProcess = [
  {
    step: "01",
    title: "DFM & Engineering",
    desc: "Our engineers review your Gerber files, BOM, and mechanical drawings. We identify manufacturability risks and optimize for yield before cutting a single stencil.",
    icon: Settings,
    color: "illuminious-blue",
    links: [
      { label: "DFM Analysis", href: "/services/dfm" },
      { label: "NPI Engineering", href: "/services/npi-engineering" },
      { label: "ODM Solutions", href: "/services/odm" },
    ],
  },
  {
    step: "02",
    title: "Prototype & NPI",
    desc: "Rapid prototype assembly in our Shenzhen facility. First articles in 72 hours. We iterate with you until the golden sample is approved.",
    icon: Lightbulb,
    color: "illuminious-sky",
    links: [
      { label: "Rapid Prototyping", href: "/services/rapid-prototyping" },
      { label: "NPI Engineering", href: "/services/npi-engineering" },
      { label: "PCB Assembly", href: "/services/pcb-assembly" },
    ],
  },
  {
    step: "03",
    title: "Pilot Run & Validation",
    desc: "Small-batch production run to validate the manufacturing process. Full test coverage, yield analysis, and process documentation.",
    icon: Microscope,
    color: "illuminious-blue",
    links: [
      { label: "Testing & Inspection", href: "/services/testing-inspection" },
      { label: "SMT Assembly", href: "/services/smt-assembly" },
      { label: "Quality Assurance", href: "/capabilities/quality" },
    ],
  },
  {
    step: "04",
    title: "Mass Production",
    desc: "Scale to volume in Shenzhen or transfer to Batam for tariff optimization. Same process, same quality, same traceability.",
    icon: Factory,
    color: "illuminious-navy",
    links: [
      { label: "EMS", href: "/services/ems" },
      { label: "OEM Manufacturing", href: "/services/oem" },
      { label: "ODM Solutions", href: "/services/odm" },
      { label: "Injection Molding", href: "/services/injection-molding" },
      { label: "Box Build", href: "/services/box-build" },
    ],
  },
  {
    step: "05",
    title: "Fulfillment & Logistics",
    desc: "US warehousing, kitting, and direct-to-customer shipping. We handle the last mile so you can focus on your business.",
    icon: Truck,
    color: "illuminious-blue",
    links: [
      { label: "Supply Chain", href: "/services/supply-chain" },
      { label: "US Fulfillment", href: "/services/us-fulfillment" },
    ],
  },
];

const industries = [
  { name: "AI & Wearables", href: "/industries/iot", icon: Cpu },
  { name: "Consumer Electronics", href: "/industries/consumer", icon: Zap },
  { name: "Medical Devices", href: "/industries/medical", icon: Shield },
  { name: "Automotive", href: "/industries/automotive", icon: Building2 },
  { name: "Industrial IoT", href: "/industries/industrial", icon: Factory },
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

export default function Home() {
  return (
    <>
      <SEO
        title="Electronics Contract Manufacturer | PCB Assembly & EMS | Illuminious"
        description="US-managed electronics manufacturer with factories in Shenzhen and Batam. SMT assembly, PCBA, box build, injection molding, and testing. ISO 9001 certified. Get a quote."
        keywords="electronics manufacturer, PCB assembly, SMT assembly, contract manufacturer, EMS provider, PCBA manufacturer, box build assembly, injection molding"
        url="/"
      />
      <Header />

      {/* Hero Section - Factory/Manufacturing Focus */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_smt-lines-overview-hero.jpg"
            alt="SMT Production Lines Overview"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-[#132843]/60" />
        </div>

        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 2px 2px, rgba(97, 145, 211, 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }} />
        </div>

        <div className="container relative z-10 pt-32 pb-20">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-navy/80 backdrop-blur-sm text-white text-sm font-medium mb-6 border border-illuminious-sky/30">
                <Factory className="w-4 h-4" />
                ISO 9001 Certified Electronics Manufacturer
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-4 md:mb-6 font-heading"
            >
              Your Product.{" "}
              <span className="text-illuminious-sky">Our Factory.</span>
              <br />
              Built Right, Every Time.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg sm:text-xl text-white/90 mb-3 md:mb-4 font-medium"
            >
              From PCB assembly to finished product — manufactured in our own facilities.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25 }}
              className="text-base sm:text-lg text-white/75 mb-6 md:mb-8 leading-relaxed max-w-2xl"
            >
              Illuminious is a vertically integrated electronics contract manufacturer with production lines in Shenzhen and Batam. We handle SMT assembly, through-hole soldering, testing, injection molding, box build, and US fulfillment — all managed from our Palo Alto headquarters.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                asChild
                size="lg"
                className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8"
              >
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Tour Our Factory</Link>
              </Button>
            </motion.div>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-6 h-10 rounded-full border-2 border-illuminious-light/50 flex items-start justify-center p-2"
          >
            <motion.div className="w-1.5 h-1.5 rounded-full bg-illuminious-light" />
          </motion.div>
        </motion.div>
      </section>

      {/* Stats Bar */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-1 font-heading">
                    {stat.value}
                  </div>
                  <div className="text-sm text-illuminious-sky">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Core Manufacturing Capabilities */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4 font-heading">
              What We Manufacture
            </h2>
            <p className="text-lg text-illuminious-sky">
              Our vertically integrated facilities house every process needed to take your electronics product from bare PCB to boxed, tested, and shipped — without leaving our factory floor.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 gap-8">
            {coreCapabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <Link href={cap.href}>
                  <div className="group relative rounded-2xl overflow-hidden border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full">
                    <div className="aspect-[16/9] overflow-hidden">
                      <img
                        src={cap.image}
                        alt={cap.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-lg bg-illuminious-blue/10 flex items-center justify-center">
                          <cap.icon className="w-5 h-5 text-illuminious-blue" />
                        </div>
                        <h3 className="text-xl font-bold text-illuminious-navy font-heading">{cap.title}</h3>
                      </div>
                      <p className="text-illuminious-sky mb-4 leading-relaxed">{cap.description}</p>
                      <span className="inline-flex items-center text-illuminious-blue font-medium text-sm group-hover:gap-2 transition-all">
                        Learn More
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-navy text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/services">
                  View All Manufacturing Services
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-blue hover:text-white rounded-full px-8"
              >
                <Link href="/capabilities">
                  Capabilities & Equipment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-blue hover:text-white rounded-full px-8"
              >
                <Link href="/capabilities/quality">
                  Quality & Certifications
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Three Advantages */}
      <section className="py-16 bg-illuminious-light/30">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-8">
            {advantages.map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="text-center p-6">
                  <div className="w-16 h-16 rounded-2xl bg-white shadow-lg flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2 font-heading">{item.title}</h3>
                  <p className="text-illuminious-sky">{item.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Manufacturing Process - 5 Steps */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4 font-heading">
              How We Build Your Product
            </h2>
            <p className="text-lg text-illuminious-sky">
              A proven 5-step manufacturing process that takes your design from engineering review to delivered product — with full traceability at every stage.
            </p>
          </AnimatedSection>

          <div className="space-y-6 max-w-4xl mx-auto">
            {manufacturingProcess.map((phase, index) => (
              <AnimatedSection key={phase.step} delay={index * 0.1}>
                <div className="flex gap-6 items-start group">
                  <div className="flex-shrink-0 w-16 h-16 rounded-2xl bg-illuminious-navy flex items-center justify-center">
                    <phase.icon className="w-7 h-7 text-illuminious-sky" />
                  </div>
                  <div className="flex-1 pb-6 border-b border-illuminious-light group-last:border-0">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-xs font-bold text-illuminious-blue uppercase tracking-wider">Step {phase.step}</span>
                    </div>
                    <h3 className="text-xl font-bold text-illuminious-navy mb-2 font-heading">{phase.title}</h3>
                    <p className="text-illuminious-sky leading-relaxed mb-3">{phase.desc}</p>
                    {phase.links && phase.links.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {phase.links.map((link) => (
                          <Link key={link.href} href={link.href}>
                            <span className="inline-flex items-center gap-1 text-xs font-medium px-3 py-1.5 rounded-full bg-illuminious-blue/10 text-illuminious-blue hover:bg-illuminious-blue hover:text-white transition-colors cursor-pointer">
                              {link.label}
                              <ChevronRight className="w-3 h-3" />
                            </span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Global Facilities */}
      <section className="py-20 md:py-28 bg-illuminious-navy overflow-hidden">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/20 text-illuminious-sky text-sm font-medium mb-6">
              <Globe className="w-4 h-4" />
              Our Own Factories, Three Continents
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Global Manufacturing Footprint
            </h2>
            <p className="text-lg text-white">
              We own and operate production facilities across three strategic locations, giving you the flexibility to optimize for speed, cost, or tariff avoidance.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-6">
            {locations.map((loc, index) => (
              <AnimatedSection key={loc.country} delay={index * 0.1}>
                <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10 hover:border-illuminious-sky/50 transition-colors h-full">
                  <div className="flex items-center gap-3 mb-4">
                    <FlagIcon code={loc.flag} className="w-12 h-8" />
                    <div>
                      <h3 className="text-xl font-bold text-white font-heading">{loc.city}</h3>
                      <p className="text-illuminious-sky text-sm">{loc.role}</p>
                    </div>
                  </div>
                  <p className="text-white text-sm leading-relaxed">
                    {loc.description}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4} className="mt-12 text-center">
            <Button
              asChild
              className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8"
            >
              <Link href="/factory-tour">
                Tour Our Facilities
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Industries We Serve */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="text-center mb-12">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Industries We Manufacture For</h2>
            <p className="text-illuminious-sky max-w-2xl mx-auto">
              From FDA-regulated medical devices to high-reliability automotive electronics, our quality systems and certifications support the most demanding industry requirements.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {industries.map((ind, index) => (
              <AnimatedSection key={ind.name} delay={index * 0.05}>
                <Link href={ind.href}>
                  <div className="group p-6 rounded-xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-lg transition-all text-center">
                    <ind.icon className="w-8 h-8 text-illuminious-blue mx-auto mb-3 group-hover:scale-110 transition-transform" />
                    <span className="text-sm font-medium text-illuminious-navy">{ind.name}</span>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Startups CTA */}
      <section className="py-20 bg-gradient-to-br from-illuminious-navy via-illuminious-blue to-illuminious-sky relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>
        <div className="container relative z-10">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <Rocket className="w-16 h-16 text-illuminious-sky mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
              Hardware Startup? We Built Our Factory for You.
            </h2>
            <p className="text-xl text-illuminious-light/90 mb-8">
              Our Startups Program gives you direct factory access with no MOQ, dedicated engineering support, and a fast-track path from prototype to mass production — at startup-friendly pricing.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-white text-illuminious-navy hover:bg-illuminious-light rounded-full px-10"
            >
              <Link href="/startups">
                Explore Startups Program
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4 font-heading">
              Ready to Manufacture?
            </h2>
            <p className="text-lg text-illuminious-sky mb-8">
              Send us your Gerber files and BOM. Our engineers will provide a detailed DFM review and manufacturing quote within 24 hours.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
              >
                <Link href="/contact">
                  Get a Manufacturing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-navy text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/services/dfm">Request a DFM Review</Link>
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}


