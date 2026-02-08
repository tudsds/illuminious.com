import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Cpu, Factory, Lightbulb, Palette, ShieldCheck, Layers, TestTube2, BookCopy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Concept to Commercialization",
  },
  {
    id: "capabilities",
    title: "Our ODM Capabilities",
  },
  {
    id: "process",
    title: "Our Development Process",
  },
  {
    id: "tech-specs",
    title: "Technical Specifications",
  },
  {
    id: "why-us",
    title: "Why Choose Illuminious?",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Lightbulb, title: "Product Strategy & Concept Definition", text: "We partner with you to perform in-depth market analysis, define precise product-market fit, crystallize feature sets, and develop a strategic multi-generational product roadmap. This foundational stage ensures your product is not only innovative but also commercially viable from day one." },
  { icon: Palette, title: "Industrial & Mechanical Design", text: "Our award-winning industrial designers and mechanical engineers create aesthetically pleasing, ergonomic, and highly functional product enclosures. We specialize in complex surfacing, material selection (plastics, metals, composites), and designing for specific IP ratings (e.g., IP67) and drop-test survivability." },
  { icon: Cpu, title: "Hardware & Firmware Engineering", text: "Our expert electrical engineers design robust, multi-layer PCBs using advanced EDA tools like Altium Designer. We specialize in high-speed digital design, RF/wireless integration (Bluetooth, Wi-Fi, Cellular), and low-power battery-operated systems. Our firmware team develops reliable, efficient, and secure code in C/C++ and Rust for various microcontrollers (ARM Cortex-M, ESP32, Nordic nRF series)." },
  { icon: Factory, title: "Design for Manufacturing & Assembly (DFM/A)", text: "Every design decision is scrutinized through the lens of mass production. Our DFM/A process optimizes for tool longevity, ease of assembly, reduced cycle times, and minimized material waste. This critical step, involving mold flow analysis and tolerance stack-up analysis, prevents costly redesigns and ensures a smooth transition to high-volume manufacturing." },
  { icon: ShieldCheck, title: "Advanced Prototyping & Validation", text: "We rapidly iterate through functional prototypes, from quick-turn PCBs and 3D prints to full Engineering Validation Test (EVT), Design Validation Test (DVT), and Production Validation Test (PVT) builds. This rigorous process validates every aspect of the design—thermal performance, EMI/EMC compliance, and mechanical integrity—before a single production tool is cut." },
  { icon: Layers, title: "Software & App Development", text: "To complement your hardware, our software teams can develop custom mobile applications (iOS/Android) and cloud-based dashboards for data management and device control. We build scalable, secure software ecosystems that enhance the user experience and unlock new value from your connected device." },
  { icon: TestTube2, title: "Regulatory Compliance & Certification", text: "Navigating the complex world of global certifications is a core competency. We manage the entire process for certifications like FCC, CE, UL, RoHS, and REACH, ensuring your product can be legally sold in your target markets without delays." },
  { icon: CheckCircle, title: "Turnkey Manufacturing & Global Supply Chain", text: "As your full-stack manufacturing partner, we manage everything from strategic component sourcing and multi-level BOM management to final assembly, quality assurance, packaging, and global logistics. Our established supply chain provides access to reliable, cost-effective components and mitigates risks of shortages." },
];

const processSteps = [
  { name: "Phase 1: Discovery & Strategic Planning", description: "This initial phase is the cornerstone of the project. We conduct extensive workshops to deeply understand your vision, target user, competitive landscape, and business objectives. The key deliverable is a comprehensive Product Requirements Document (PRD) that details every functional and non-functional requirement, serving as our guiding star for the entire project." },
  { name: "Phase 2: Architectural & Engineering Design", description: "With the PRD as our blueprint, our multidisciplinary team—industrial designers, mechanical engineers, and electrical engineers—works in parallel. We develop the core system architecture, select key components like the MCU and critical ICs, create the industrial design concepts, and begin detailed schematic capture and PCB layout. This collaborative phase ensures all subsystems integrate seamlessly." },
  { name: "Phase 3: Engineering Validation Testing (EVT)", description: "The goal of EVT is to validate the core functionality and engineering choices. We build a small number of prototype units (typically 10-20) to test the electronics, firmware, and basic mechanical fit. These units undergo extensive bench testing and debugging to identify and resolve any fundamental design flaws early in the process." },
  { name: "Phase 4: Design Validation Testing (DVT)", description: "During DVT, we focus on perfecting the design and testing it against the full range of specifications in the PRD. We produce a larger batch of units (50-200) using production-intent tooling and components. These units undergo rigorous environmental, stress, and regulatory pre-compliance testing to ensure the product is robust, reliable, and ready for certification." },
  { name: "Phase 5: Production Validation Testing (PVT)", description: "PVT is the final pre-production run. We use the actual mass-production line, tooling, and operators to manufacture a limited quantity of units (typically 5-10% of the first production run). This phase validates our manufacturing processes, quality control stations, and assembly line efficiency, ensuring we are ready to ramp up to mass production without issues." },
  { name: "Phase 6: Mass Production & Continuous Improvement", description: "Once PVT is successfully completed, we transition to full-scale mass production. Our role doesn't end there. We manage the entire production lifecycle, providing ongoing quality monitoring, yield optimization, supply chain management, and engineering support for future cost-downs or feature enhancements." },
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

export default function ServiceODM() {
  return (
    <>
      <SEO
        title="ODM Manufacturing & Product Development Services | Illuminious"
        description="Turn your idea into a market-ready product with our end-to-end ODM services. We handle everything from design and engineering to manufacturing and logistics."
        keywords="ODM manufacturing, original design manufacturing, product development, turnkey manufacturing, hardware development, white label electronics"
        url="/services/odm"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_service-odm.jpg"
            alt="A team of engineers collaborating around a table with product prototypes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "ODM & Product Development" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                ODM & Product Development
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                From initial concept to mass production, we are the vertically integrated manufacturing partner that brings your hardware product to life and to scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex justify-center overflow-x-auto">
            {pageSections.map((section) => (
              <a
                key={section.id}
                href={`#${section.id}`}
                className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-illuminious-blue transition-colors whitespace-nowrap"
              >
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        {/* Overview Section */}
        <section id="overview" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Your Idea, Our Expertise: The Path to Market</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Bringing a new hardware product to market is a monumental undertaking, fraught with complexity. It demands a rare fusion of creative industrial design, rigorous multi-disciplinary engineering, and flawless manufacturing execution. Many brilliant product ideas falter, not due to a lack of vision, but because of the immense challenge of transforming a concept into a physical, reliable, and scalable product. This journey from a napkin sketch to a customer's hands is a gauntlet of potential pitfalls, from design flaws and supply chain disruptions to unforeseen manufacturing hurdles.
                  </p>
                  <p>
                    This is where Illuminious provides its greatest value. As an Original Design Manufacturer (ODM), we are fundamentally different from a standard contract manufacturer or a disconnected design house. We are your end-to-end product development and manufacturing partner. Our fully integrated, co-located team of strategists, designers, engineers, and manufacturing experts guides your product through every stage of its lifecycle. We absorb the immense complexity of hardware development, allowing you to focus your energy on building your brand, acquiring customers, and growing your business.
                  </p>
                   <p>
                    Our ODM model is built on a foundation of vertical integration. Unlike the traditional approach of handing off a design from a third-party firm to a separate factory—a process notorious for communication gaps, errors, and delays—we manage everything under one operational umbrella. This seamless integration between our US-based project management and our advanced manufacturing facilities in Shenzhen and Batam ensures accountability, accelerates development timelines, and de-risks the entire process for our clients.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-npi-flowchart.jpg" alt="Progression from a product sketch to a 3D model and a physical prototype" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Full-Stack ODM Capabilities</h2>
              <p className="text-lg text-gray-600">
                A fully integrated, multidisciplinary approach to product creation. We provide a complete suite of services to transform your vision into a commercially successful product, all managed under one roof for maximum efficiency and accountability.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4 flex-shrink-0">
                      <cap.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                    <p className="text-sm text-gray-600 flex-grow">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Proven Development Process</h2>
              <p className="text-lg text-gray-600">
                Our six-phase, stage-gate process is engineered to de-risk hardware development, eliminate uncertainty, and ensure a predictable, efficient path to market. Each phase concludes with a formal review to ensure all objectives are met before proceeding.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                      <div className="w-1/2 px-8">
                        <AnimatedSection delay={index * 0.1}>
                          <h3 className={`text-xl font-bold text-illuminious-navy mb-2 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-gray-600 ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section id="tech-specs" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Capabilities & Specifications</h2>
              <p className="text-lg text-gray-600">
                We leverage state-of-the-art technology and rigorous processes to deliver products of the highest quality and reliability. Our engineering and manufacturing standards are designed to meet the demands of complex consumer and industrial electronics.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatedSection>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">Mechanical Engineering</h3>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Enclosure Design: Plastics (PC, ABS, TPE), Metals (Al, Steel)</li>
                    <li>Tooling: Injection Molding, Die Casting, CNC Machining</li>
                    <li>Tolerance Analysis: +/- 0.05mm standard</li>
                    <li>Environmental: IP65-IP68 ratings</li>
                    <li>Simulation: FEA, Thermal, Mold-flow analysis</li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">Electronics Engineering</h3>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>PCB Design: Up to 24 layers, HDI, Rigid-Flex</li>
                    <li>Signal Integrity: High-speed differential pairs (USB 3.x, PCIe)</li>
                    <li>Wireless: BLE, Wi-Fi, NFC, Cellular (LTE-M/NB-IoT)</li>
                    <li>Power Management: Li-Ion battery charging, ultra-low power</li>
                    <li>Certifications: FCC/CE/IC pre-compliance and testing</li>
                  </ul>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md h-full">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">Quality & Manufacturing</h3>
                  <ul className="space-y-2 text-sm text-gray-600 list-disc list-inside">
                    <li>Factory Certifications: ISO 9001, ISO 13485, IATF 16949</li>
                    <li>SMT Lines: Fuji NXT III, 01005 component size</li>
                    <li>Inspection: 3D AOI, 3D SPI, X-Ray Inspection</li>
                    <li>Testing: ICT, Functional Circuit Testing (FCT)</li>
                    <li>Traceability: Full BOM and serial number tracking</li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_factorytour-img-4.jpg" alt="A modern, clean factory interior with assembly lines" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Truly Vertically Integrated Partner</h4>
                      <p>Unlike design firms that hand off files to a separate factory, we are the factory. This eliminates the communication gaps, blame games, and delays that plague traditional hardware development. Our integrated structure ensures seamless knowledge transfer and rapid problem-solving from design through production.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">US-Based Management & IP Protection</h4>
                      <p>Your project is managed by our US-based team of experienced engineers and project managers, ensuring clear communication and cultural alignment. Your intellectual property is protected under strict US legal frameworks, providing peace of mind and security for your most valuable assets.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Deep Manufacturing Expertise</h4>
                      <p>With our own state-of-the-art factories in Shenzhen and Batam, we possess deep, hands-on manufacturing expertise. We aren't just theorists; we are builders. This practical knowledge informs our design process, ensuring that every product we design is optimized for efficient, high-quality mass production.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-illuminious-navy text-white">
          <div className="container py-20 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4 font-heading">Ready to Build Your Next Product?</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Let's discuss your vision. Partner with a manufacturer that has the design, engineering, and production expertise to turn your concept into a reality. Schedule a consultation with our engineering team today.
              </p>
              <Button size="lg" asChild className="bg-illuminious-blue hover:bg-illuminious-blue/90 text-white font-bold text-lg">
                <Link to="/contact">
                  Schedule a Consultation <ArrowRight className="ml-2" />
                </Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
