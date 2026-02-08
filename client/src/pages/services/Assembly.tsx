import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Package, Cable, Box, TestTube, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Complete System Integration",
  },
  {
    id: "capabilities",
    title: "Our Assembly Capabilities",
  },
  {
    id: "process",
    title: "The Assembly Process",
  },
  {
    id: "quality",
    title: "End-to-End Quality",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Box, title: "Complex Electro-Mechanical Assembly", text: "Integration of PCBAs, power supplies, custom metal and plastic enclosures, and user interfaces." },
  { icon: Cable, title: "Custom Cable & Harness Assembly", text: "In-house manufacturing of custom wire harnesses and cable assemblies to your exact specifications." },
  { icon: Factory, title: "Sub-Level & System Assembly", text: "Building and testing of complex sub-assemblies before integration into the final product." },
  { icon: TestTube, title: "End-of-Line Testing & Programming", text: "Firmware flashing, software loading, and comprehensive functional testing to ensure your product works out of the box." },
  { icon: Shield, title: "Environmental & Reliability Testing", text: "Burn-in, thermal cycling, and other reliability tests to validate product performance in its intended environment." },
  { icon: Package, title: "Custom Packaging & Logistics", text: "Design and execution of retail-ready packaging, kitting, and direct-to-end-customer fulfillment services." },
];

const processSteps = [
  { name: "Process Design & DFM/A", description: "Our engineers work with you to design an efficient assembly process and provide Design for Assembly (DFA) feedback." },
  { name: "Material Kitting & Preparation", description: "All components, from PCBAs to screws and enclosures, are kitted and prepared for the assembly line." },
  { name: "Sub-Assembly & Integration", description: "Skilled technicians build and test sub-assemblies, which are then integrated into the main product chassis." },
  { name: "Software Installation & Configuration", description: "We flash the latest firmware, install software, and configure the device according to your requirements." },
  { name: "Final Testing & Quality Control", description: "Every completed unit undergoes a rigorous end-of-line functional test and a final quality inspection." },
  { name: "Packaging & Fulfillment", description: "Products are packaged in their final retail or bulk packaging and prepared for shipment to your distribution center or end customers." },
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

export default function ServiceAssembly() {
  return (
    <>
      <SEO
        title="Assembly & System Integration | Box Build Services | Illuminious"
        description="Complete product assembly, box build, and system integration services. From sub-assembly to final product testing, packaging, and fulfillment. Turn your PCBA into a market-ready product."
        keywords="product assembly, box build, system integration, final assembly, electro-mechanical assembly, electronics manufacturing, contract manufacturing"
        url="/services/assembly"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-pcba-assembly-pcb-boards-09.jpg"
            alt="Technicians on a box build assembly line"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Assembly & System Integration" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Assembly & System Integration
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Transforming your printed circuit boards into market-ready products. We provide complete system integration, from enclosure assembly to final testing and packaging.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">From Board to Final Product</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Final assembly, also known as box build or systems integration, is the crucial step in bringing an electronic product to market. It's the process of taking your assembled printed circuit board (PCBA) and integrating it with all the other necessary components—such as enclosures, cables, power supplies, and user interfaces—to create a finished, functional product.
                  </p>
                  <p>
                    At Illuminious, our assembly services go beyond simple integration. We act as your manufacturing partner, managing the entire process from sourcing mechanical components to final testing, packaging, and even direct fulfillment. Our dedicated assembly lines and skilled technicians are equipped to handle projects of any complexity, from simple enclosures to intricate electro-mechanical systems.
                  </p>
                  <p>
                    By entrusting your final assembly to us, you simplify your supply chain, reduce overhead, and accelerate your time to market. We handle the complexities of system integration, allowing you to focus on what you do best: designing and selling great products.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-box-build-assembly-line.jpg" alt="Technician performing final assembly of an electronic device" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Assembly Capabilities</h2>
              <p className="text-lg text-gray-600">
                We provide a full range of services to take your product from a bare PCBA to a fully packaged, customer-ready unit.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The System Assembly Process</h2>
              <p className="text-lg text-gray-600">
                Our systematic approach ensures that every unit is built and tested to your exact specifications, with quality checks at every stage.
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

        {/* Quality Assurance Section */}
        <section id="quality" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_testinginspection-img-1.jpg" alt="A custom functional test fixture in use" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">End-to-End Quality Control</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Quality control in final assembly extends far beyond the PCBA. It encompasses every component and every step of the integration process. Our quality system is designed to ensure that the final product not only works perfectly but also meets all cosmetic and packaging requirements.
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>Incoming Quality Control (IQC):</strong> All mechanical parts, enclosures, and accessories undergo rigorous inspection upon arrival to ensure they meet your specifications.
                    </li>
                    <li>
                      <strong>In-Process Quality Control (IPQC):</strong> We have dedicated quality checkpoints throughout the assembly line to verify correct assembly, torque specifications, and cable routing.
                    </li>
                    <li>
                      <strong>100% End-of-Line Functional Testing:</strong> Every single unit that comes off our line is subjected to a full functional test using custom-designed fixtures to guarantee it performs as expected.
                    </li>
                     <li>
                      <strong>Out-of-Box Audit (OBA):</strong> We randomly sample finished, packaged products to perform an out-of-box audit, ensuring the customer experience is perfect, from the packaging to the product itself.
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Simplify Your Supply Chain</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let us handle the complexities of final assembly. Contact our team to learn how our system integration services can accelerate your time to market and reduce your operational overhead.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Quote
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
