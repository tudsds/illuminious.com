import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  Cpu,
  Wifi,
  Zap,
  Award,
  ChevronRight,
  CheckCircle,
  Factory,
  Microscope,
  Box,
  Settings,
  Layers,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const capabilities = [
  {
    icon: Shield,
    title: "Quality & Certifications",
    description: "Our quality management system is the backbone of every product we manufacture. We maintain ISO 9001:2015 certification across all facilities, with specialized certifications including ISO 13485 for medical device manufacturing and IATF 16949 for automotive electronics. Our quality team conducts regular internal audits, supplier assessments, and process capability studies to ensure consistent, defect-free production.",
    features: ["ISO 9001:2015", "ISO 13485:2016", "IATF 16949:2016", "IPC-A-610 Class 3", "ISO 14001:2015", "UL Listed"],
    href: "/capabilities/quality",
  },
  {
    icon: Wifi,
    title: "IoT & Wireless Specialization",
    description: "Manufacturing IoT devices requires specialized expertise that goes beyond standard electronics assembly. Our IoT manufacturing capabilities include RF-sensitive production environments, antenna integration and tuning, wireless protocol testing (WiFi, Bluetooth, Zigbee, LoRa, LTE/5G), and low-power design optimization. We have built thousands of connected devices for clients ranging from smart home startups to industrial IoT companies.",
    features: ["RF/Wireless Design", "Antenna Integration", "Low Power Optimization", "OTA Testing", "Protocol Certification", "EMC Pre-Compliance"],
    href: "/capabilities/iot",
  },
  {
    icon: Cpu,
    title: "Advanced SMT Assembly",
    description: "Our 8 fully automated SMT lines represent the most advanced surface mount technology available. We handle components as small as 01005 (0.4mm x 0.2mm), fine-pitch BGA and uBGA packages, and complex multi-layer HDI boards up to 16+ layers. Our placement accuracy of ±25μm and first-pass yield consistently exceeding 99.7% ensure that even the most demanding designs are manufactured with precision.",
    features: ["01005 Components", "BGA/CSP/QFN/PoP", "HDI PCB (16+ Layers)", "Rigid-Flex Assembly", "Double-Sided Reflow", "Selective Soldering"],
    href: "/services/smt-assembly",
  },
  {
    icon: Zap,
    title: "Rapid Prototyping & NPI",
    description: "Speed is critical in hardware development. Our Shenzhen facility delivers first-article prototypes in as little as 72 hours, leveraging direct access to the world's largest electronics supply chain ecosystem. Our NPI (New Product Introduction) process guides your product through EVT, DVT, and PVT stages with dedicated engineering support at every step, ensuring a smooth transition from prototype to mass production.",
    features: ["72-Hour Prototypes", "DFM/DFA Review", "EVT/DVT/PVT Support", "Quick-Turn PCB", "3D Printing", "CNC Machining"],
    href: "/services/rapid-prototyping",
  },
  {
    icon: Box,
    title: "Box Build & System Integration",
    description: "We go far beyond bare board assembly. Our box build capabilities encompass complete product assembly — from integrating PCBAs into custom injection-molded enclosures to installing cable harnesses, flashing firmware, applying labels, and packaging products for retail or direct-to-consumer shipping. Our technicians are trained to handle complex electromechanical assemblies with multiple sub-assemblies and rigorous functional testing requirements.",
    features: ["Mechanical Assembly", "Cable Harness", "Firmware Flashing", "Functional Testing", "Custom Packaging", "Retail-Ready Output"],
    href: "/services/box-build",
  },
  {
    icon: Factory,
    title: "Injection Molding & Tooling",
    description: "Our in-house injection molding department operates presses ranging from 80 to 3,000 tons, supporting both prototype tooling (aluminum) and production molds (P20/H13 steel). We manufacture custom enclosures, light guides, buttons, structural components, and overmolded assemblies. Having injection molding under the same roof as our electronics assembly eliminates coordination overhead and enables rapid design iteration.",
    features: ["80-3,000 Ton Presses", "Aluminum Prototype Molds", "Production Steel Molds", "Overmolding", "Insert Molding", "Pad Printing"],
    href: "/services/injection-molding",
  },
];

const certifications = [
  { name: "ISO 9001:2015", category: "Quality Management System", status: "Certified", desc: "The international standard for quality management, ensuring consistent processes and continuous improvement across all manufacturing operations." },
  { name: "ISO 13485:2016", category: "Medical Device Manufacturing", status: "Certified", desc: "Specialized quality management for medical devices, demonstrating capability to produce devices meeting customer and regulatory requirements." },
  { name: "IATF 16949:2016", category: "Automotive Quality", status: "Certified", desc: "The automotive industry's quality standard, required for manufacturing electronic components and systems used in vehicles." },
  { name: "ISO 14001:2015", category: "Environmental Management", status: "Certified", desc: "International standard for environmental management, reflecting our commitment to minimizing environmental impact." },
  { name: "IPC-A-610 Class 3", category: "High-Reliability Electronics", status: "Compliant", desc: "The highest workmanship standard for electronic assemblies, required for medical, military, and aerospace applications." },
  { name: "RoHS / REACH", category: "Environmental Compliance", status: "Compliant", desc: "Full compliance with EU Restriction of Hazardous Substances and Registration, Evaluation, Authorization of Chemicals directives." },
  { name: "UL Listed", category: "Product Safety", status: "Available", desc: "Underwriters Laboratories certification for product safety, ensuring manufacturing processes meet rigorous safety standards." },
  { name: "ITAR Registered", category: "Defense & Aerospace", status: "Available", desc: "International Traffic in Arms Regulations registration for manufacturing defense-related electronic assemblies." },
];

const equipment = [
  { category: "SMT Lines", items: ["Fuji NXT III (8 lines)", "Panasonic NPM-D3", "Yamaha YSM40R", "Mycronic MY300 (Prototype)"] },
  { category: "Solder Paste & Reflow", items: ["DEK Horizon 03iX Printers", "Heller 1913 MKIII (13-Zone)", "BTU Pyramax 125 (10-Zone)", "Selective Soldering Systems"] },
  { category: "Inspection Systems", items: ["Koh Young Zenith 2 (3D AOI)", "Koh Young KY8030-3 (3D SPI)", "Nordson DAGE Quadra 7 (X-Ray)", "Keyence VHX-7000 Microscopes"] },
  { category: "Testing Equipment", items: ["Keysight Flying Probe Testers", "Custom ICT Fixtures", "National Instruments PXI Systems", "Environmental Test Chambers"] },
  { category: "Injection Molding", items: ["Haitian Jupiter III (80-3000T)", "Fanuc ROBOSHOT (Electric)", "Sodick Wire EDM", "Makino CNC Milling"] },
  { category: "Packaging & Logistics", items: ["Automated Labeling Systems", "ESD-Safe Packaging Lines", "Barcode/QR Traceability", "Climate-Controlled Storage"] },
];

const manufacturingCapacity = [
  { metric: "SMT Lines", value: "8", unit: "Fully Automated" },
  { metric: "Monthly Placements", value: "50M+", unit: "Components" },
  { metric: "First-Pass Yield", value: "99.7%", unit: "Average" },
  { metric: "Injection Presses", value: "12", unit: "80-3000 Ton" },
  { metric: "Test Stations", value: "30+", unit: "ICT/FCT/FPT" },
  { metric: "Production Staff", value: "100+", unit: "Engineers & Technicians" },
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

export default function Capabilities() {
  return (
    <>
      <SEO
        title="Manufacturing Capabilities | Quality, IoT, Advanced Electronics | Illuminious"
        description="Explore Illuminious manufacturing capabilities: ISO 9001/13485/IATF 16949 certified, 8 SMT lines, injection molding, IoT specialization, rapid prototyping, and box build assembly."
        keywords="manufacturing capabilities, ISO 9001, ISO 13485, IATF 16949, IoT manufacturing, SMT assembly, rapid prototyping, injection molding, box build"
        url="/capabilities"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_hero-ai-hardware.jpg"
            alt="Illuminious manufacturing facility showcasing advanced equipment and production lines"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Capabilities" },
          ]} />
          <div className="max-w-3xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                World-Class Manufacturing Capabilities
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                From high-speed SMT assembly and precision injection molding to comprehensive testing and US fulfillment — our vertically integrated capabilities enable us to manufacture complete electronic products under one roof, with quality systems certified to the highest international standards.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manufacturing Capacity Stats */}
      <section className="py-8 bg-white border-b">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {manufacturingCapacity.map((stat, index) => (
              <AnimatedSection key={stat.metric} delay={index * 0.05}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-illuminious-navy font-heading">{stat.value}</div>
                  <div className="text-xs text-illuminious-sky">{stat.metric}</div>
                  <div className="text-xs text-illuminious-blue font-medium">{stat.unit}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading text-center">Vertically Integrated Manufacturing Under One Roof</h2>
            <div className="space-y-4 text-illuminious-navy leading-relaxed text-lg">
              <p>
                Vertical integration is the foundation of our manufacturing philosophy. Unlike contract manufacturers who outsource critical processes to third-party vendors, we own and operate every capability needed to take your electronic product from bare PCB to finished, packaged, and shipped product. This means SMT assembly, through-hole soldering, automated optical inspection, X-ray inspection, in-circuit testing, functional testing, injection molding, box build assembly, firmware flashing, labeling, packaging, and US fulfillment — all happen within our own facilities, managed by our own engineers.
              </p>
              <p>
                This approach delivers three critical advantages for our clients. First, it eliminates the coordination overhead and communication gaps that inevitably arise when multiple vendors are involved in a single product. Second, it gives us complete control over quality at every stage of the manufacturing process — there are no handoffs to unknown subcontractors. Third, it compresses timelines dramatically, because every process happens in the same building, often on the same production floor.
              </p>
              <p>
                Our capabilities are standardized across our Shenzhen and Batam facilities, meaning your product can be manufactured in either location with identical quality outcomes. This dual-factory model gives you strategic flexibility to optimize for speed (Shenzhen), cost (Batam FTZ tariff advantages), or supply chain resilience (parallel production in both facilities).
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Capabilities Grid */}
      <section className="py-20 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Core Manufacturing Capabilities</h2>
            <p className="text-lg text-illuminious-sky">
              Each capability is supported by dedicated equipment, trained personnel, and documented procedures that are audited annually as part of our ISO certification program.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <Link href={cap.href}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 p-6 h-full">
                    <div className="flex items-start gap-4">
                      <div className="w-14 h-14 rounded-xl bg-illuminious-blue/10 flex items-center justify-center group-hover:bg-illuminious-blue transition-colors flex-shrink-0">
                        <cap.icon className="w-7 h-7 text-illuminious-blue group-hover:text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors mb-2 font-heading">
                          {cap.title}
                        </h3>
                        <p className="text-illuminious-sky mb-4 leading-relaxed">
                          {cap.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mb-4">
                          {cap.features.map((feature) => (
                            <span key={feature} className="px-2 py-1 rounded-full bg-illuminious-blue/5 text-xs text-illuminious-navy font-medium">
                              {feature}
                            </span>
                          ))}
                        </div>
                        <div className="flex items-center text-sm font-medium text-illuminious-blue group-hover:gap-2 transition-all">
                          Learn more
                          <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">
              Certifications & Compliance
            </h2>
            <p className="text-lg text-illuminious-sky">
              Industry-recognized certifications that demonstrate our commitment to quality, safety, and environmental responsibility. Our certifications are maintained through annual third-party audits and continuous internal improvement programs.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.05}>
                <div className="bg-white rounded-xl p-6 border border-illuminious-light shadow-sm h-full">
                  <div className="flex items-center justify-between mb-3">
                    <Award className="w-6 h-6 text-illuminious-blue" />
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                      cert.status === 'Compliant' ? 'bg-blue-100 text-blue-700' :
                      'bg-illuminious-light/50 text-illuminious-navy'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <h3 className="font-bold text-illuminious-navy mb-1">{cert.name}</h3>
                  <p className="text-xs text-illuminious-blue font-medium mb-2">{cert.category}</p>
                  <p className="text-sm text-illuminious-sky leading-relaxed">{cert.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment */}
      <section className="py-20 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">
              Equipment & Technology
            </h2>
            <p className="text-lg text-illuminious-sky">
              We invest in industry-leading equipment from manufacturers like Fuji, Panasonic, Koh Young, Nordson, and Haitian. Our equipment is standardized across facilities and maintained under rigorous preventive maintenance schedules to ensure consistent performance and uptime.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {equipment.map((eq, index) => (
              <AnimatedSection key={eq.category} delay={index * 0.1}>
                <div className="bg-white rounded-xl p-6 border border-illuminious-light shadow-sm h-full">
                  <h3 className="font-bold text-illuminious-navy mb-4 pb-4 border-b border-illuminious-light font-heading">
                    {eq.category}
                  </h3>
                  <ul className="space-y-2">
                    {eq.items.map((item) => (
                      <li key={item} className="flex items-center gap-2 text-sm text-illuminious-sky">
                        <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Ready to Leverage Our Capabilities?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Whether you need a rapid prototype, a pilot production run, or full-scale mass production, our capabilities are ready to support your project. Contact our engineering team to discuss your requirements and receive a detailed manufacturing proposal.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8">
                <Link href="/contact">
                  Get a Manufacturing Quote
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="text-white border-white hover:bg-white/10 rounded-full px-8">
                <Link href="/factory-tour">Tour Our Facilities</Link>
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


