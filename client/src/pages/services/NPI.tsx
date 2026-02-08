import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Lightbulb, Zap, Shield, FileCheck, Cog, Target, Wrench, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Concept to Production",
  },
  {
    id: "capabilities",
    title: "NPI & Engineering Services",
  },
  {
    id: "process",
    title: "The NPI Process",
  },
  {
    id: "benefits",
    title: "Why Our NPI Process Works",
  },
  {
    id: "tech-specs",
    title: "Technical Specifications",
  },
  {
    id: "cta",
    title: "Start Your NPI Journey",
  },
];

const capabilities = [
  { icon: FileCheck, title: "DFM/A & Process Engineering", text: "Our engineers conduct an exhaustive analysis of your design files (Gerbers, CAD, BOM) to identify and resolve potential manufacturing issues before they impact your project. We focus on optimizing panelization, ensuring proper clearances, and refining the process for maximum yield and reliability." },
  { icon: Zap, title: "Rapid Prototyping (PCBA & Mechanical)", text: "We leverage our agile supply chain and in-house capabilities to produce high-fidelity prototypes in days, not weeks. This includes multi-layer PCBAs, complex mechanical enclosures, and fully assembled units to accelerate your development and validation cycles." },
  { icon: Cog, title: "Engineering Validation Testing (EVT)", text: "During EVT, we rigorously test early prototypes to validate core functionality, electrical performance, and key mechanical features. This phase is critical for confirming design choices and identifying fundamental issues that require architectural changes." },
  { icon: Target, title: "Design Validation Testing (DVT)", text: "DVT involves comprehensive testing of design-intent prototypes against all functional, performance, and environmental requirements. We execute a full test matrix, including thermal, shock, vibration, and regulatory pre-compliance testing to ensure the design is robust." },
  { icon: Shield, title: "Production Validation Testing (PVT)", text: "PVT is the final validation gate before mass production. We use production tooling, fixtures, and processes on our main assembly line to build a limited run. This validates process capability (Cpk), yield, and quality at scale, ensuring a smooth ramp-up." },
  { icon: Lightbulb, title: "Pilot Production & Ramp-Up", text: "Following a successful PVT, we execute controlled, small-batch production runs. This stage stabilizes the manufacturing process, finalizes work instructions, and trains operators, ensuring quality and consistency as we scale to full volume." },
  { icon: Search, title: "Component Engineering & Sourcing", text: "Our dedicated component engineers work to de-risk your supply chain. We validate every component on your BOM for availability, lifecycle status, and compliance (RoHS, REACH). We identify and qualify alternative parts to prevent shortages and optimize cost." },
  { icon: Wrench, title: "Test Fixture & Jig Development", text: "We design and fabricate custom test fixtures and assembly jigs essential for quality control and manufacturing efficiency. From simple go/no-go gauges to complex functional test stations, our fixtures ensure every unit is built and tested to your exact specifications." },
];

const processSteps = [
  { name: "Phase 1: Kick-off & DFM Review", description: "The NPI process begins with a formal kick-off meeting where our US and Asia engineering teams conduct a joint review of your complete design package. We provide comprehensive DFM/A feedback within 72 hours, focusing on manufacturability, testability, and cost optimization opportunities." },
  { name: "Phase 2: Prototyping & EVT", description: "We rapidly produce and assemble the first prototypes to validate the core design. During Engineering Validation Testing (EVT), we focus on bringing up the board, testing key electrical functions, and verifying the initial mechanical fit to catch fundamental design flaws early." },
  { name: "Phase 3: Tooling & DVT", description: "As the design matures, we initiate production tooling for plastics, metal parts, and fixtures. Concurrently, we build a larger batch of prototypes for Design Validation Testing (DVT), where we test the product against its full list of specifications, including environmental and reliability standards." },
  { name: "Phase 4: Pilot Run & PVT", description: "We conduct a pilot production run on the actual assembly line in our Batam or Shenzhen factory. This Production Validation Test (PVT) run validates the entire manufacturing process, including SMT programming, assembly workflow, quality control checkpoints, and packaging, ensuring readiness for scale." },
  { name: "Phase 5: Golden Sample & Mass Production", description: "Upon successful completion of PVT, we present a 'Golden Sample' that meets all cosmetic, functional, and quality requirements for your final sign-off. This sample becomes the benchmark for all future production, and its approval officially launches the transition to mass production." },
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

export default function ServiceNPI() {
  return (
    <>
      <SEO
        title="New Product Introduction (NPI) & Engineering | Illuminious"
        description="Our structured NPI process de-risks your product launch. From DFM and rapid prototyping to EVT/DVT/PVT validation, we ensure a smooth transition from concept to mass production."
        keywords="New Product Introduction, NPI, engineering services, rapid prototyping, EVT, DVT, PVT, product launch, contract manufacturing"
        url="/services/npi"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-engineer-holding-prototype.jpg"
            alt="Engineer working on a new product prototype at a workbench"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "New Product Introduction (NPI)" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                New Product Introduction (NPI)
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                De-risking your journey from a great idea to a successful, scalable product with a structured, data-driven engineering process.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex justify-center">
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Foundation of Successful Manufacturing</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    New Product Introduction (NPI) is a structured, multi-stage process that serves as the bridge between a product concept and its successful realization in mass production. It is the single most critical phase in a product's lifecycle, where decisions directly impact final cost, quality, reliability, and time-to-market. A well-executed NPI process, managed by an experienced contract manufacturer, mitigates risk and lays the groundwork for a scalable and profitable product. It transforms a design from a theoretical model into a tangible, reproducible item.
                  </p>
                  <p>
                    The core objective of NPI is to proactively identify and resolve issues in design, supply chain, and manufacturing before they escalate into costly delays or quality failures. This involves a series of validation cycles—Engineering (EVT), Design (DVT), and Production (PVT)—each designed to test and confirm the product's readiness for the next stage. At Illuminious, this process is not merely a checklist; it is a dynamic, collaborative effort between your design team and our dedicated NPI engineers in the US, Shenzhen, and Batam.
                  </p>
                   <p>
                    Our approach integrates US-based project management with the speed and expertise of our Asian manufacturing facilities. This hybrid model ensures clear communication, robust IP protection under US legal frameworks, and rapid problem-solving. A dedicated NPI Program Manager acts as your single point of contact, coordinating everything from initial Design for Manufacturability (DFM) analysis to the final 'Golden Sample' sign-off, ensuring a seamless and predictable path to production.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-prototyping-hero.jpg" alt="NPI team in a planning session around a whiteboard" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">NPI & Engineering Services</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of engineering services to guide your product through every validation stage, ensuring it is designed for excellence and ready for scale.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4">
                      <cap.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.text}</p>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Phased NPI Process</h2>
              <p className="text-lg text-gray-600">
                Our five-phase NPI process is a structured, gated methodology that ensures your product is thoroughly validated for design robustness, manufacturability, and quality before mass production begins.
              </p>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                      <div className="w-1/2 px-8">
                        <AnimatedSection delay={index * 0.1}>
                          <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-gray-600 ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-sketch-to-prototype.jpg" alt="Graphic illustrating a successful product launch trajectory" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious NPI Advantage</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Our unique hybrid US-Asia engineering model and our rigorous, structured NPI process provide a distinct competitive advantage, reducing risk and accelerating your time to market.
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>Unmatched Speed and Agility:</strong> By combining US-based engineering leadership with the world's fastest electronics supply chain in Shenzhen, we can iterate on hardware prototypes with the speed of a software company.
                    </li>
                    <li>
                      <strong>Ironclad IP Protection:</strong> Your intellectual property is your most valuable asset. We operate under strict US legal agreements and utilize secure, segregated data systems to ensure your design data is protected at all times.
                    </li>
                    <li>
                      <strong>Seamless Transition to Scale:</strong> The same core team that manages your NPI process also oversees the transfer and ramp-up to mass production in our high-volume facilities, ensuring a smooth, efficient, and 'no-drama' scaling experience.
                    </li>
                     <li>
                      <strong>Proactive Risk Mitigation:</strong> Our gated process, which includes formal DFM, FMEA, and validation reviews at each stage, forces a rigorous evaluation of risks before they become costly production problems. This prevents delays and ensures a predictable launch.
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section id="tech-specs" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications & Capabilities</h2>
              <p className="text-lg text-gray-600">
                We provide a robust engineering framework to support even the most complex product introductions.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-4xl mx-auto bg-gray-50/50 rounded-lg border p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-2">DFM/A Analysis</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Gerber & ODB++ Review</li>
                      <li>PCB Stack-up & Impedance Control</li>
                      <li>Component Footprint Verification</li>
                      <li>Solder Paste & Stencil Analysis</li>
                      <li>Panelization Optimization</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-2">Prototyping</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>PCBA Turnaround: 5-10 business days</li>
                      <li>Layer Count: Up to 24 layers</li>
                      <li>Technologies: Rigid, Flex, Rigid-Flex</li>
                      <li>Component Sourcing: Full Turnkey</li>
                      <li>Mechanical: CNC, 3D Printing, Sheet Metal</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-2">Validation Testing</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Functional Testing (FCT)</li>
                      <li>In-Circuit Testing (ICT)</li>
                      <li>Environmental (Thermal, Humidity)</li>
                      <li>Shock & Vibration</li>
                      <li>Regulatory Pre-compliance (FCC, CE, UL)</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-2">Quality & Process Control</h4>
                    <ul className="list-disc list-inside text-sm text-gray-600 space-y-1">
                      <li>Process Capability Analysis (Cpk)</li>
                      <li>First Article Inspection (FAI) Reports</li>
                      <li>Automated Optical Inspection (AOI)</li>
                      <li>X-Ray Inspection (for BGA/QFN)</li>
                      <li>IPC-A-610 Class 2 & 3 Standards</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Launch Your Next Product?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let our NPI team guide you through the complexities of product development and manufacturing. Contact us to start the conversation and get a DFM review for your project.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Start Your NPI Journey
                  <ArrowRight className="w-5 h-5 ml-2" />
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
