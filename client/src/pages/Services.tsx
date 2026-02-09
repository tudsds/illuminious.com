import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Cpu,
  Factory,
  Wrench,
  Package,
  Truck,
  Lightbulb,
  ChevronRight,
  CheckCircle,
  Zap,
  Globe,
  Palette,
  ShieldCheck,
  TestTube2,
  Boxes,
  CircuitBoard,
  Cog,
  FileSearch,
  Handshake,
  Settings,
  Microscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import FlagIcon from "@/components/FlagIcon";

const services = [
  {
    icon: Lightbulb,
    title: "NPI & Engineering",
    subtitle: "New Product Introduction",
    description: "Our comprehensive New Product Introduction (NPI) process is the bridge from a great idea to a manufacturable, scalable product. We embed our US and Shenzhen-based engineering teams with yours to meticulously refine every aspect of your design for mass production readiness. This collaborative approach, centered around Design for Manufacturing (DFM) principles, de-risks your launch by identifying and solving potential production issues before they become costly errors.",
    features: [
      "In-depth DFM/DFA/DFT Analysis",
      "EVT, DVT & PVT Validation Builds",
      "Tooling & Fixture Development",
      "Golden Sample Sign-off Process",
      "Component Engineering & Sourcing",
    ],
    href: "/services/npi-engineering",
    phase: "Phase 1 & 2",
    location: "USA + Shenzhen",
    locationFlags: ["US", "CN"] as const,
  },
  {
    icon: Zap,
    title: "Rapid Prototyping",
    subtitle: "Validate Designs in Days, Not Weeks",
    description: "Speed is critical in the early stages of product development. Our dedicated rapid prototyping center in Shenzhen leverages a suite of advanced technologies to turn your CAD files into high-fidelity, functional prototypes in as little as 72 hours. This allows your team to quickly test form, fit, and function, enabling faster design iterations and more confident decision-making long before committing to expensive production tooling.",
    features: [
      "SLA, SLS & FDM 3D Printing",
      "High-Speed 3 & 5-Axis CNC Machining",
      "Silicone Molding & Vacuum Casting",
      "Sheet Metal Fabrication & Forming",
      "50+ Production-Grade Materials",
    ],
    href: "/services/rapid-prototyping",
    phase: "Phase 1 & 2",
    location: "Shenzhen",
    locationFlags: ["CN"] as const,
  },
  {
    icon: CircuitBoard,
    title: "SMT Assembly",
    subtitle: "Surface Mount Technology",
    description: "Our SMT lines are the backbone of our electronics manufacturing capability. Equipped with Samsung high-speed mounters and Philips placement machines, we achieve precise component placement down to 0201 packages at speeds of up to 8 million points per day. Every line is paired with MPM stencil printers and Heller reflow ovens for consistent, repeatable solder quality.",
    features: [
      "Samsung High-Speed Mounters",
      "Philips Placement Machines",
      "0201 to Large BGA Component Capability",
      "MPM Stencil Printers",
      "8 Million Points/Day Capacity",
    ],
    href: "/services/smt-assembly",
    phase: "Phase 2 & 3",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: Cpu,
    title: "PCB Assembly (PCBA)",
    subtitle: "High-Precision Electronics Assembly",
    description: "The core of any electronic device is the PCBA, and precision is paramount. Our state-of-the-art SMT lines, featuring Mycronic pick-and-place machines and Heller reflow ovens, are capable of handling the most complex designs. We routinely place components down to 01005 size, complex BGAs, and fine-pitch QFPs. Every board undergoes rigorous inspection to ensure flawless performance and long-term reliability.",
    features: [
      "01005, BGA, uBGA & Fine-Pitch Placement",
      "Leaded & RoHS Compliant Assembly",
      "Automated Optical Inspection (AOI)",
      "3D X-Ray Inspection (AXI) for BGAs",
      "In-Circuit Testing (ICT) & Functional Testing (FCT)",
    ],
    href: "/services/pcb-assembly",
    phase: "Phase 2 & 3",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: Wrench,
    title: "Plastic Injection & Tooling",
    subtitle: "Precision Molds for Scalable Production",
    description: "We provide a complete, end-to-end solution for custom plastic parts, from mold design and fabrication to high-volume production. Our engineers perform detailed Mold Flow Analysis to optimize your part design and ensure consistent quality. We build both rapid aluminum tooling for bridge quantities and hardened steel P20 & H13 tools for multi-million cycle production runs, all in-house for maximum control and speed.",
    features: [
      "In-house Mold Flow Analysis & DFM",
      "Rapid Aluminum & Hardened Steel Tooling",
      "50T to 550T Injection Molding Presses",
      "Scientific Molding & Process Control",
      "Complex Insert Molding & Overmolding",
    ],
    href: "/services/injection-molding",
    phase: "Phase 2 & 3",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: Package,
    title: "Box Build & System Integration",
    subtitle: "From Components to Finished Goods",
    description: "Box build, or systems integration, is the final and critical step where your product comes to life. Our dedicated assembly lines go far beyond simply putting a PCBA in a box. We manage the entire process, including fabricating custom wire harnesses, installing sub-assemblies, loading firmware, and performing comprehensive system-level functional tests. The result is a market-ready product, tested, packaged, and prepared for your customers.",
    features: [
      "Dedicated System Assembly Lines",
      "Custom Cable & Wire Harness Assembly",
      "Software Installation & Firmware Flashing",
      "Potting, Conformal Coating & Sealing",
      "Full Functional, RF & Burn-In Testing",
    ],
    href: "/services/box-build",
    phase: "Phase 3",
    location: "Batam",
    locationFlags: ["ID"] as const,
  },
  {
    icon: Settings,
    title: "Through-Hole Assembly",
    subtitle: "Manual & Automated Insertion",
    description: "For components that require through-hole mounting, we offer both manual insertion and automated wave soldering processes. Our Hexi WS-350-L-F and Nitto SA-3JS wave soldering machines ensure clean, reliable solder joints on every board. This service is essential for power components, connectors, and other parts that demand the mechanical strength of through-hole mounting.",
    features: [
      "Hexi & Nitto Wave Soldering Machines",
      "Manual & Semi-Automated Insertion",
      "Lead-Free & Leaded Soldering",
      "Selective Soldering for Mixed Assemblies",
      "DIP Capacity: 2 Million Points/Day",
    ],
    href: "/services/through-hole",
    phase: "Phase 2 & 3",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: TestTube2,
    title: "Testing & Quality Assurance",
    subtitle: "Ensuring Reliability and Compliance",
    description: "Quality is not just a department; it's the foundation of our manufacturing process. We employ a multi-layered testing strategy, from component-level verification to system-level validation, to guarantee every unit meets your specifications and our stringent standards. Our factories are certified to international standards, and our processes are designed to produce reliable products for the most demanding industries.",
    features: [
      "ISO 9001, ISO 13485, IATF 16949 Certified",
      "Comprehensive Test Fixture Development",
      "Environmental & Reliability Testing (HALT/HASS)",
      "Traceability from Component to System",
      "IPC-A-610 Class 2 & 3 Workmanship",
    ],
    href: "/quality",
    phase: "All Phases",
    location: "All Facilities",
    locationFlags: [] as const,
  },
  {
    icon: Microscope,
    title: "Testing & Inspection",
    subtitle: "Multi-Layer Quality Verification",
    description: "Our testing and inspection capabilities span the full production process. From Zhenhua Xing VCTA-A486 AOI systems that catch defects in real-time to SMX-1000 X-ray inspection for hidden BGA solder joints, we leave nothing to chance. We also develop custom functional test fixtures and perform environmental stress screening to validate product reliability before shipment.",
    features: [
      "Zhenhua Xing AOI (VCTA-A486)",
      "X-Ray Inspection (SMX-1000)",
      "Custom Functional Test Fixtures",
      "In-Circuit Testing (ICT)",
      "Environmental Stress Screening",
    ],
    href: "/services/testing-inspection",
    phase: "All Phases",
    location: "All Facilities",
    locationFlags: [] as const,
  },
  {
    icon: FileSearch,
    title: "DFM Analysis",
    subtitle: "Design for Manufacturability",
    description: "Our DFM analysis service is a critical first step that saves time and money downstream. Our engineers review your Gerber files, BOM, and mechanical drawings to identify potential manufacturing risks before production begins. We provide detailed reports with actionable recommendations to optimize your design for yield, reliability, and cost-effectiveness.",
    features: [
      "Gerber File & BOM Review",
      "Component Footprint Verification",
      "Thermal & Signal Integrity Analysis",
      "Panelization Optimization",
      "Cost Reduction Recommendations",
    ],
    href: "/services/dfm",
    phase: "Phase 1",
    location: "USA + Shenzhen",
    locationFlags: ["US", "CN"] as const,
  },
  {
    icon: Factory,
    title: "EMS (Electronics Manufacturing Services)",
    subtitle: "Full-Service Contract Manufacturing",
    description: "As a full-service EMS provider, we manage the entire manufacturing process on your behalf. From component sourcing and PCB assembly to final testing and packaging, our EMS model gives you a single point of accountability for your entire production. This allows you to focus on product development and sales while we handle the complexities of manufacturing.",
    features: [
      "End-to-End Production Management",
      "Component Procurement & Sourcing",
      "Production Planning & Scheduling",
      "Quality Management System (ISO 9001)",
      "Dedicated Program Management",
    ],
    href: "/services/ems",
    phase: "All Phases",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: Cog,
    title: "OEM Manufacturing",
    subtitle: "Build to Your Specifications",
    description: "Our OEM manufacturing service produces products exactly to your design and specifications. You own the design and IP; we provide the manufacturing expertise, equipment, and workforce to bring it to life at scale. This model is ideal for companies with mature product designs that need a reliable, cost-effective production partner.",
    features: [
      "Production to Customer Specifications",
      "Strict IP & NDA Protection",
      "Scalable from Prototype to Mass Production",
      "Full Traceability & Documentation",
      "Flexible MOQ & Order Scheduling",
    ],
    href: "/services/oem",
    phase: "Phase 2, 3 & 4",
    location: "Shenzhen & Batam",
    locationFlags: ["CN", "ID"] as const,
  },
  {
    icon: Handshake,
    title: "ODM Solutions",
    subtitle: "Design & Manufacture Together",
    description: "Our ODM service goes beyond manufacturing by offering product design and development capabilities. If you have a product concept but need engineering support to bring it to a manufacturable design, our team of 40+ engineers can help. From industrial design and PCB layout to firmware development and certification support, we partner with you from concept to finished product.",
    features: [
      "Industrial & Mechanical Design",
      "PCB Layout & Schematic Design",
      "Firmware & Software Development",
      "Certification Support (FCC, CE, UL)",
      "Joint IP Development Options",
    ],
    href: "/services/odm",
    phase: "All Phases",
    location: "USA + Shenzhen",
    locationFlags: ["US", "CN"] as const,
  },
  {
    icon: Truck,
    title: "Supply Chain & Logistics",
    subtitle: "Resilient, Global Fulfillment",
    description: "A great product is useless if it can't reach your customers. We build resilient supply chains designed for the modern world, leveraging our global sourcing network to mitigate risk and ensure component availability. Our 'China+1' strategy, utilizing our Batam, Indonesia factory, provides tariff mitigation and supply chain diversification. We manage everything from component procurement to final delivery at your warehouse.",
    features: [
      "Global Component Sourcing Network",
      "Vendor-Managed Inventory (VMI) Programs",
      "Tariff Mitigation via Indonesia (Batam FTZ)",
      "Full DDP/DDU/FOB Shipping Support",
      "Real-time Inventory & Shipment Tracking",
    ],
    href: "/services/supply-chain",
    phase: "All Phases",
    location: "Global",
    locationFlags: [] as const,
  },
  {
    icon: Globe,
    title: "US Fulfillment & Warehousing",
    subtitle: "Domestic Speed and Service",
    description: "For our US-based clients, our Palo Alto fulfillment center offers a powerful advantage. By warehousing your product domestically, you can dramatically reduce shipping times to end customers, offer Amazon-like delivery speeds, and simplify your returns process. This service is ideal for both direct-to-consumer (D2C) brands and B2B companies needing to quickly distribute products across North America.",
    features: [
      "Palo Alto, CA Warehouse Location",
      "B2B & D2C Order Fulfillment",
      "Integration with Shopify, Amazon, etc.",
      "Domestic Returns Processing (RMA)",
      "Kitting & Value-Added Services",
    ],
    href: "/services/us-fulfillment",
    phase: "Phase 4",
    location: "USA",
    locationFlags: ["US"] as const,
  },
];

const phases = [
  {
    number: 1,
    title: "Strategy & DFM",
    location: "USA",
    flag: "US" as const,
    color: "bg-illuminious-blue",
    description: "US-based engineering, contracts, and IP protection strategy.",
  },
  {
    number: 2,
    title: "NPI Accelerator",
    location: "Shenzhen",
    flag: "CN" as const,
    color: "bg-illuminious-sky",
    description: "Rapid prototyping, tooling, and engineering validation builds.",
  },
  {
    number: 3,
    title: "Scale Engine",
    location: "Indonesia",
    flag: "ID" as const,
    color: "bg-illuminious-navy",
    description: "Tariff-free mass production, assembly, and system integration.",
  },
  {
    number: 4,
    title: "Market Delivery",
    location: "USA",
    flag: "US" as const,
    color: "bg-illuminious-sky",
    description: "Domestic warehousing, B2B/D2C fulfillment, and support.",
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

export default function Services() {
  return (
    <>
      <SEO
        title="End-to-End Electronics Manufacturing Services | Illuminious"
        description="Discover our full suite of electronics manufacturing services, from NPI, rapid prototyping, and PCB assembly to box build, injection molding, and global supply chain management. We turn your concept into a market-ready product."
        keywords="electronics manufacturing services, NPI services, PCB assembly, box build, injection molding, supply chain management, contract manufacturing, EMS, OEM, ODM"
        url="/services"
      />
      <Header />
      
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Your Partner from Concept to Customer
            </span>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              Integrated Services for the Complete Product Lifecycle
            </h1>
            <p className="text-xl text-illuminious-navy/70 mb-8">
              We provide a seamless, end-to-end manufacturing ecosystem designed to de-risk your supply chain and accelerate your time to market. Our unique four-phase approach guides your product from initial design validation in the US to scalable, tariff-free mass production in Asia.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid md:grid-cols-4 gap-6">
            {phases.map((phase, index) => (
              <AnimatedSection key={phase.number} delay={index * 0.1}>
                <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 h-full">
                  <div className={`w-12 h-12 rounded-full ${phase.color} flex items-center justify-center text-white font-bold text-xl flex-shrink-0`}>
                    {phase.number}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <FlagIcon code={phase.flag} className="w-7 h-5" />
                      <span className="text-white font-semibold">{phase.title}</span>
                    </div>
                    <p className="text-white/80 text-sm">{phase.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our Core Service Portfolio
            </h2>
            <p className="text-lg text-illuminious-navy/70">
              Each service is a critical building block in our integrated manufacturing system. They are designed to work together seamlessly, giving you the flexibility to engage us at any stage of your product's lifecycle and scale efficiently.
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={service.title} delay={(index % 2) * 0.1}>
                <Link href={service.href} className="h-full flex">
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col w-full">
                    <div className="p-6 md:p-8 flex-grow">
                      <div className="flex items-start gap-4 mb-4">
                        <div className="w-14 h-14 rounded-xl bg-illuminious-light/50 flex items-center justify-center group-hover:bg-illuminious-blue group-hover:text-white transition-colors flex-shrink-0">
                          <service.icon className="w-7 h-7 text-illuminious-blue group-hover:text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors">
                            {service.title}
                          </h3>
                          <p className="text-sm text-illuminious-sky/70">{service.subtitle}</p>
                        </div>
                      </div>
                      
                      <p className="text-illuminious-navy/70 leading-relaxed mb-5">
                        {service.description}
                      </p>
                      
                      <ul className="space-y-2 mb-4">
                        {service.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-3 text-sm text-illuminious-navy">
                            <CheckCircle className="w-4 h-4 text-illuminious-blue flex-shrink-0" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-illuminious-light/30 group-hover:bg-illuminious-light/50 transition-colors mt-auto p-4 flex justify-between items-center border-t border-illuminious-light">
                       <div className="flex items-center gap-2">
                        <span className="text-xs px-2 py-1 rounded-full bg-illuminious-blue/20 text-illuminious-navy font-medium">
                          {service.phase}
                        </span>
                        <span className="text-xs text-illuminious-navy/70 font-medium inline-flex items-center gap-1">
                          {service.locationFlags && service.locationFlags.length > 0 && service.locationFlags.map((code: "US" | "CN" | "ID" | "HK", i: number) => (
                            <FlagIcon key={i} code={code} className="w-4 h-3 inline-block" />
                          ))}
                          {service.location}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-sm font-semibold text-illuminious-blue group-hover:gap-2 transition-all">
                        Learn more
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Next Great Product?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Our team of manufacturing experts is ready to help you navigate the complexities of bringing a product to market. Schedule a free, no-obligation consultation to discuss your project and learn how our integrated services can accelerate your success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8 shadow-lg"
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
                <Link href="/factory-tour">Explore Our Factories</Link>
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


