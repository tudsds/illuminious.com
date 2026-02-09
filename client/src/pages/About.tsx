import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Globe, HardHat, ShieldCheck, Users, Award, MapPin, Cpu, Layers, Microscope, Box, Settings, Truck, Shield, Zap, Target, Clock, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";
import FlagIcon from "@/components/FlagIcon";

const pageSections = [
  { id: "mission", title: "Our Mission" },
  { id: "story", title: "Our Story" },
  { id: "locations", title: "Our Facilities" },
  { id: "capabilities", title: "Capabilities" },
  { id: "team", title: "Our Team" },
  { id: "quality", title: "Quality" },
  { id: "values", title: "Our Values" },
  { id: "differentiators", title: "Why Illuminious" },
  { id: "cta", title: "Partner With Us" },
];

const locations = [
  {
    name: "Palo Alto, California",
    role: "US Headquarters",
    description: "Our US headquarters serves as the primary interface for all customer relationships. This is where project management, DFM engineering review, supply chain strategy, and commercial operations are coordinated. All contracts are signed in the United States and governed by US law, providing our clients with the legal protections and business practices they expect from a domestic partner. Our Palo Alto team includes project managers, supply chain strategists, and customer success engineers who serve as your single point of contact throughout the entire manufacturing lifecycle.",
    image: "/images/DEPLOYED_engineer-dfa-review-palo-alto.jpg",
    flag: "US" as const,
    highlights: ["US contracts & IP protection", "Project management hub", "DFM engineering review", "Customer success team"],
  },
  {
    name: "Shenzhen, Guangdong",
    role: "NPI & Advanced Manufacturing",
    description: "Our Shenzhen facility is purpose-built for speed and complexity. Located in the heart of the world's largest electronics manufacturing ecosystem, this factory specializes in new product introduction (NPI), rapid prototyping, and complex multi-layer PCB assembly. With direct access to thousands of component suppliers within a 50-kilometer radius, we can source even the most specialized components in hours rather than weeks. Our Shenzhen team delivers first-article prototypes in as little as 72 hours, enabling rapid design iteration cycles that dramatically compress your time-to-market.",
    image: "/images/DEPLOYED_about-team.jpg",
    flag: "CN" as const,
    highlights: ["72-hour prototype turnaround", "Complex multi-layer PCBA", "Direct supply chain access", "NPI engineering center"],
  },
  {
    name: "Batam Island, Free Trade Zone",
    role: "Volume Production & Tariff Optimization",
    description: "Our Batam facility operates within Indonesia's designated Free Trade Zone (FTZ), providing significant tariff advantages for products destined for the US and European markets. This factory mirrors the equipment, processes, and quality systems of our Shenzhen facility, ensuring seamless production transfer from NPI to volume manufacturing. The Batam FTZ designation means that products manufactured here can enter many markets with reduced or eliminated import duties — a critical cost advantage that can save our clients 15-25% on landed costs compared to manufacturing in mainland China.",
    image: "/images/DEPLOYED_placeholder-npi-team-planning.jpg",
    flag: "ID" as const,
    highlights: ["Free Trade Zone benefits", "15-25% tariff savings", "Mirror of Shenzhen quality", "Volume production capacity"],
  },
];

const capabilities = [
  { icon: Cpu, name: "SMT Assembly", desc: "8 fully automated SMT lines with Yamaha pick-and-place machines capable of placing components as small as 01005 (0.4mm × 0.2mm). Our lines achieve placement rates exceeding 50,000 components per hour with positional accuracy of ±25μm.", href: "/services/smt-assembly" },
  { icon: Layers, name: "PCB Assembly", desc: "Complete printed circuit board assembly services including single-sided, double-sided, and mixed-technology boards. We handle everything from simple 2-layer consumer boards to complex 16+ layer HDI assemblies for medical and aerospace applications.", href: "/services/pcb-assembly" },
  { icon: Settings, name: "Through-Hole Assembly", desc: "Both manual and automated through-hole insertion for connectors, transformers, electrolytic capacitors, and other components that require mechanical strength beyond what surface mount technology can provide.", href: "/services/through-hole" },
  { icon: Microscope, name: "Testing & Inspection", desc: "Comprehensive testing capabilities including 3D automated optical inspection (AOI), X-ray inspection for BGA and hidden solder joints, in-circuit testing (ICT), flying probe testing, and custom functional test fixture development.", href: "/services/testing-inspection" },
  { icon: Box, name: "Box Build Assembly", desc: "Full system integration from bare PCBA to finished, packaged product. This includes mechanical assembly, cable harness installation, firmware flashing, labeling, functional testing, and retail-ready packaging.", href: "/services/box-build" },
  { icon: Factory, name: "Injection Molding", desc: "In-house plastic injection molding for custom enclosures, light guides, buttons, and structural components. Our molding department operates presses ranging from 80 to 3,000 tons, supporting both prototype tooling and production molds.", href: "/services/injection-molding" },
];

const values = [
  { icon: Shield, title: "Transparency", desc: "We believe manufacturing should never be a black box. Every client receives real-time production updates, detailed quality reports, and full traceability documentation. You will always know exactly where your product is in the manufacturing process and what quality metrics are being achieved." },
  { icon: Target, title: "Precision", desc: "Manufacturing excellence is measured in microns, not millimeters. Our commitment to precision extends from the placement accuracy of our SMT machines (±25μm) to the dimensional tolerances of our injection-molded parts (±0.05mm). We invest continuously in calibration, training, and process control to maintain these standards." },
  { icon: Heart, title: "Partnership", desc: "We don't view our clients as purchase orders — we view them as partners. This means we proactively identify cost reduction opportunities, suggest design improvements for manufacturability, and invest engineering resources in your success even before a contract is signed." },
  { icon: Zap, title: "Speed", desc: "In hardware, time-to-market is everything. Our vertically integrated operations, strategic facility locations, and streamlined NPI process are all designed to compress timelines. From 72-hour prototypes in Shenzhen to parallel production ramp in Batam, every aspect of our operation is optimized for speed." },
];

const certifications = [
  { name: "ISO 9001:2015", scope: "Quality Management System", desc: "The international standard for quality management systems, ensuring consistent processes and continuous improvement across all our manufacturing operations." },
  { name: "ISO 13485:2016", scope: "Medical Device Manufacturing", desc: "Specialized quality management system for medical device manufacturing, demonstrating our capability to produce devices that consistently meet customer and regulatory requirements." },
  { name: "IATF 16949:2016", scope: "Automotive Quality", desc: "The automotive industry's quality management standard, required for manufacturing electronic components and systems used in vehicles." },
  { name: "ISO 14001:2015", scope: "Environmental Management", desc: "International standard for environmental management systems, reflecting our commitment to minimizing the environmental impact of our manufacturing operations." },
  { name: "IPC-A-610 Class 3", scope: "High-Reliability Electronics", desc: "The highest workmanship standard for electronic assemblies, required for products where continued performance is critical — including medical, military, and aerospace applications." },
  { name: "UL Listed", scope: "Product Safety", desc: "Underwriters Laboratories certification for product safety, ensuring our manufacturing processes and facilities meet rigorous safety standards." },
];

const differentiators = [
  { title: "US-Managed, Factory-Direct", desc: "We own and operate our manufacturing facilities. Your contract is with a US entity, governed by US law, with full IP protection. Your products are built in our own factories with full traceability and quality control at every step." },
  { title: "Dual-Factory Flexibility", desc: "Our unique dual-factory model gives you strategic flexibility. Use our Shenzhen facility for rapid NPI and complex prototyping, then seamlessly transfer to our Batam FTZ facility for tariff-optimized volume production. Same equipment, same processes, same quality system — your choice of location." },
  { title: "Vertically Integrated Operations", desc: "SMT assembly, through-hole soldering, testing, injection molding, box build, and fulfillment — all under one roof. This vertical integration eliminates the coordination overhead, quality risks, and timeline delays that come from managing multiple vendors." },
  { title: "Startup-Friendly Manufacturing", desc: "We understand that hardware startups have different needs than Fortune 500 companies. That's why we offer no minimum order quantities, dedicated NPI engineering support, and startup-friendly pricing structures. Our Startups Program provides a fast-track path from prototype to mass production." },
];

const teamMembers = [
  { name: "Manufacturing Engineers", count: "40+", description: "Process optimization specialists who design production workflows, develop test fixtures, program SMT machines, and continuously improve yield rates. Our manufacturing engineers have an average of 12 years of experience in electronics production." },
  { name: "Quality Assurance Specialists", count: "25+", description: "Dedicated quality professionals who oversee incoming material inspection, in-process quality control, and final product verification. Our QA team maintains our ISO 9001, ISO 13485, and IATF 16949 certifications through rigorous internal auditing and continuous improvement programs." },
  { name: "Supply Chain Managers", count: "15+", description: "Procurement and logistics experts who manage relationships with 500+ approved component suppliers, negotiate pricing, monitor lead times, and ensure supply chain resilience through strategic multi-sourcing and safety stock programs." },
  { name: "NPI Project Managers", count: "10+", description: "Your dedicated co-pilots who guide your product from initial design review through prototype iteration, pilot production, and mass production ramp. Each NPI project manager handles no more than 5 active projects simultaneously, ensuring focused attention on your product." },
  { name: "Test Engineers", count: "20+", description: "Specialists in developing custom functional test procedures, programming automated test equipment, and designing test fixtures. Our test engineers work closely with your hardware team to ensure comprehensive test coverage that catches defects before they reach your customers." },
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

export default function About() {
  return (
    <>
      <SEO
        title="About Illuminious | US-Managed Electronics Manufacturer"
        description="Illuminious is a vertically integrated electronics manufacturer with US headquarters in Palo Alto and own factories in Shenzhen and Batam FTZ. ISO 9001, ISO 13485, IATF 16949 certified."
        keywords="about illuminious, electronics manufacturer, contract manufacturing, manufacturing facilities, Shenzhen factory, Batam FTZ, US managed manufacturer"
        url="/about"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_abstract-circuit-board-blue-hero.jpg"
            alt="Abstract circuit board design representing electronics manufacturing"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "About Us" },
          ]} />
          <div className="max-w-3xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Your Dedicated Manufacturing Partner
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Illuminious is a vertically integrated electronics contract manufacturer with US headquarters in Palo Alto and our own production facilities in Shenzhen and Batam. We build electronic products — from bare PCB to boxed, tested, and shipped — in factories we own and operate.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Sticky Navigation */}
      <div className="sticky top-16 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex overflow-x-auto scrollbar-hide">
            {pageSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-3 text-sm font-medium text-illuminious-sky hover:text-illuminious-blue transition-colors whitespace-nowrap"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* Mission Section */}
        <section id="mission" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Our Mission: To Be the World's Most Trusted Electronics Manufacturing Partner</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    In a world of abstract supply chains and faceless vendors, we believe in partnership. Our mission is to provide a manufacturing experience built on trust, transparency, and technical excellence. We don't see ourselves as a service provider — we see ourselves as an extension of your engineering team, your dedicated co-pilots on the journey from concept to mass production.
                  </p>
                  <p>
                    We achieve this by investing in our people, our processes, and our facilities. By combining the legal and customer service framework of a US company with the efficiency and scale of our own factories in Asia, we offer a unique model that de-risks your hardware project while accelerating your growth. Every contract is signed in the United States, every communication happens in English, and every quality standard is enforced by our own engineers on our own production floors.
                  </p>
                  <p>
                    Whether you are a hardware startup building your first prototype or an established OEM looking to diversify your supply chain, we provide the same level of engineering attention, quality commitment, and manufacturing transparency. Your success is our success — and we measure our performance not by the number of boards we ship, but by the number of successful product launches we enable.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-global-network.jpg" alt="Quality inspector examining a PCB assembly under magnification" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Our Story Section */}
        <section id="story" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading text-center">Our Story</h2>
              <div className="space-y-4 text-illuminious-navy leading-relaxed text-lg">
                <p>
                  Illuminious was founded on a simple observation: hardware companies — especially startups and mid-size OEMs — deserve better manufacturing partners. Too many companies struggle with opaque supply chains, unreliable quality, communication barriers, and the constant fear that their intellectual property is not being protected. We set out to solve these problems by building a manufacturing company from the ground up with transparency, quality, and partnership as its core principles.
                </p>
                <p>
                  Our founders brought together decades of experience in electronics manufacturing, supply chain management, and hardware product development. They understood that the best manufacturing outcomes happen when the manufacturer is not just a vendor executing purchase orders, but a true engineering partner who understands the product, the market, and the customer's business objectives.
                </p>
                <p>
                  Today, Illuminious operates production facilities across three strategic locations, employs over 100 skilled engineers and technicians, and has successfully manufactured products for clients ranging from Y Combinator-backed startups to publicly traded technology companies. Our vertically integrated operations — spanning SMT assembly, through-hole soldering, testing, injection molding, box build, and US fulfillment — enable us to control every aspect of the manufacturing process and deliver consistent quality at every scale.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Locations Section */}
        <section id="locations" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Global Manufacturing Footprint</h2>
              <p className="text-lg text-illuminious-sky">
                A strategic network of our own facilities, designed for resilience, speed, and cost optimization. Every facility operates under the same quality management system, uses compatible equipment, and follows identical manufacturing procedures.
              </p>
            </AnimatedSection>
            <div className="space-y-12">
              {locations.map((loc, index) => (
                <AnimatedSection key={loc.name} delay={index * 0.1}>
                  <div className={`grid md:grid-cols-2 gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''}`}>
                    <div className={index % 2 === 1 ? 'md:order-2' : ''}>
                      <div className="rounded-xl overflow-hidden shadow-lg">
                        <img src={loc.image} alt={`Illuminious facility in ${loc.name}`} className="w-full h-64 object-cover" />
                      </div>
                    </div>
                    <div className={index % 2 === 1 ? 'md:order-1' : ''}>
                      <div className="flex items-center gap-3 mb-3">
                        <FlagIcon code={loc.flag} className="w-10 h-7" />
                        <div>
                          <h3 className="font-bold text-2xl text-illuminious-navy font-heading">{loc.name}</h3>
                          <p className="text-sm font-semibold text-illuminious-blue">{loc.role}</p>
                        </div>
                      </div>
                      <p className="text-illuminious-navy leading-relaxed mb-4">{loc.description}</p>
                      <div className="grid grid-cols-2 gap-2">
                        {loc.highlights.map((h) => (
                          <div key={h} className="flex items-center gap-2 text-sm text-illuminious-sky">
                            <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                            <span>{h}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities Overview */}
        <section id="capabilities" className="py-20 bg-illuminious-navy">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Vertically Integrated Manufacturing Capabilities</h2>
              <p className="text-lg text-white">
                Every process needed to take your electronics product from bare PCB to finished, packaged product — all under one roof, all managed by our own engineers.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.name} delay={index * 0.05}>
                  <Link href={cap.href}>
                    <div className="group bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 hover:border-illuminious-sky/50 transition-colors h-full cursor-pointer">
                      <cap.icon className="w-8 h-8 text-illuminious-sky mb-4" />
                      <h3 className="text-lg font-bold text-white mb-2 font-heading">{cap.name}</h3>
                      <p className="text-sm text-white leading-relaxed mb-3">{cap.desc}</p>
                      <span className="inline-flex items-center text-illuminious-sky text-sm font-medium group-hover:gap-2 transition-all">
                        Learn More <ArrowRight className="w-3 h-3 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3} className="mt-12 text-center">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8">
                  <Link href="/services">
                    Explore All Services
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-8">
                  <Link href="/capabilities">
                    View Equipment & Capabilities
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="text-white border-white/30 hover:bg-white/10 rounded-full px-8">
                  <Link href="/capabilities/quality">
                    Quality & Certifications
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The People Behind the Products</h2>
              <p className="text-lg text-illuminious-sky">
                Our team is our greatest asset. We are a collective of over 100 passionate engineers, technicians, and manufacturing professionals with deep expertise in electronics production.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-12 items-start">
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_about-img-1.jpg" alt="Illuminious engineering team collaborating on a product design" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <div className="space-y-6">
                  {teamMembers.map((t) => (
                    <div key={t.name} className="border-l-4 border-illuminious-blue pl-4">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-bold text-illuminious-navy">{t.name}</h3>
                        <span className="text-xs bg-illuminious-blue/10 text-illuminious-blue px-2 py-0.5 rounded-full font-semibold">{t.count}</span>
                      </div>
                      <p className="text-sm text-illuminious-sky leading-relaxed">{t.description}</p>
                    </div>
                  ))}
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quality & Certifications Section */}
        <section id="quality" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">An Uncompromising Commitment to Quality</h2>
              <p className="text-lg text-illuminious-sky">
                Quality is not a department at Illuminious — it is the foundation of our entire operation. Our facilities are certified to the highest international standards, and our quality management system is audited annually by independent third-party registrars.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {certifications.map((cert, index) => (
                <AnimatedSection key={cert.name} delay={index * 0.05}>
                  <div className="bg-white rounded-xl p-6 shadow-sm border border-illuminious-light h-full">
                    <div className="flex items-center gap-3 mb-3">
                      <Award className="w-8 h-8 text-illuminious-blue" />
                      <div>
                        <h3 className="font-bold text-illuminious-navy">{cert.name}</h3>
                        <p className="text-xs text-illuminious-blue font-medium">{cert.scope}</p>
                      </div>
                    </div>
                    <p className="text-sm text-illuminious-sky leading-relaxed">{cert.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
            <AnimatedSection delay={0.3} className="text-center">
              <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-blue/10 rounded-full">
                <Link href="/capabilities/quality">
                  Learn More About Our Quality Systems
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>

        {/* Values Section */}
        <section id="values" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The Values That Drive Us</h2>
              <p className="text-lg text-illuminious-sky">
                Every decision we make — from equipment investment to hiring to process design — is guided by four core values that define who we are as a manufacturer.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8">
              {values.map((v, index) => (
                <AnimatedSection key={v.title} delay={index * 0.1}>
                  <div className="flex gap-4">
                    <div className="w-14 h-14 rounded-xl bg-illuminious-blue/10 flex items-center justify-center flex-shrink-0">
                      <v.icon className="w-7 h-7 text-illuminious-blue" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-illuminious-navy mb-2 font-heading">{v.title}</h3>
                      <p className="text-illuminious-sky leading-relaxed">{v.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Why Illuminious Section */}
        <section id="differentiators" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Why Companies Choose Illuminious</h2>
              <p className="text-lg text-illuminious-sky">
                In a crowded landscape of contract manufacturers, sourcing agents, and trading companies, Illuminious stands apart through a combination of capabilities that no other single provider offers.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              {differentiators.map((d, index) => (
                <AnimatedSection key={d.title} delay={index * 0.1}>
                  <div className="bg-white rounded-xl p-8 shadow-sm border border-illuminious-light h-full">
                    <h3 className="text-xl font-bold text-illuminious-navy mb-3 font-heading">{d.title}</h3>
                    <p className="text-illuminious-sky leading-relaxed">{d.desc}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Let's Build Together</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Discover the difference a true manufacturing partner can make. Whether you need a rapid prototype, a pilot production run, or full-scale mass production, our team is ready to help you bring your product to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                  <Link href="/contact">
                    Get a Manufacturing Quote
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                  <Link href="/factory-tour">Book a Factory Tour</Link>
                </Button>
              </div>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingContact />
    </>
  );
}



