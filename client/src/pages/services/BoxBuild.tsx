import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Package, Cable, Box, TestTube, Shield, Cpu, HardDrive, HelpCircle, Wrench, Thermometer, Scaling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const pageSections = [
  {
    id: "overview",
    title: "Complete System Integration",
  },
  {
    id: "capabilities",
    title: "Our Capabilities",
  },
  {
    id: "process",
    title: "Assembly Process",
  },
  {
    id: "quality",
    title: "End-to-End Quality",
  },
  {
    id: "specs",
    title: "Technical Specifications",
  },
  {
    id: "faq",
    title: "FAQ",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { 
    icon: Box, 
    title: "Complex Electro-Mechanical Assembly", 
    text: "We specialize in the high-precision integration of sensitive PCBAs, power distribution units, and complex user interfaces into custom enclosures. Our technicians are trained to handle intricate builds requiring meticulous point-to-point wiring, torque-specific fastening, and adherence to strict ESD protocols, ensuring the mechanical integrity and electronic functionality of the final product." 
  },
  { 
    icon: Cable, 
    title: "Custom Cable & Harness Assembly", 
    text: "Our in-house cable assembly division produces everything from simple jumpers to complex, multi-branch harnesses. We utilize automated wire cutting and stripping machines, pneumatic crimping presses, and Cirris testers to ensure every connection is secure and meets IPC/WHMA-A-620 standards. We work with a vast range of connectors, wire gauges, and shielding materials." 
  },
  { 
    icon: Factory, 
    title: "Sub-Level & System Assembly", 
    text: "We improve manufacturing velocity and quality by building and rigorously testing functional sub-assemblies in parallel before they reach the main production line. This modular approach simplifies final integration, reduces the chance of downstream errors, and allows for more focused quality control at each stage, from power supply modules to pre-calibrated sensor arrays." 
  },
  { 
    icon: Cpu, 
    title: "Software Installation & Configuration", 
    text: "Our service extends to the full configuration of your device. This includes flashing custom firmware using JTAG/SWD programmers, installing operating systems, configuring device-specific parameters, and loading unique security keys or calibration data. We create a repeatable, version-controlled process to guarantee every unit ships with the correct software stack." 
  },
  { 
    icon: TestTube, 
    title: "End-of-Line & Functional Testing", 
    text: "No product leaves our facility without passing a comprehensive functional test. We design and build custom test fixtures that simulate real-world use, verifying every I/O port, button, display, and connectivity feature. Automated test scripts generate detailed logs for full traceability, confirming that each unit performs exactly as designed." 
  },
  { 
    icon: Shield, 
    title: "Environmental & Reliability Testing", 
    text: "To validate product robustness and long-term reliability, we perform a suite of environmental tests. This includes thermal cycling in our temperature chambers, vibration testing to simulate transport conditions, and Highly Accelerated Life Testing (HALT) to identify potential failure points before they occur in the field, ensuring your product can withstand its intended environment." 
  },
  { 
    icon: Thermometer, 
    title: "Thermal Management Solutions", 
    text: "Proper heat dissipation is critical for electronic product longevity. We implement a range of thermal solutions, from the precise application of thermal pastes and pads to the installation of custom heat sinks, heat pipes, and active cooling systems like fans and blowers. We ensure optimal thermal contact and airflow to keep components within their safe operating temperatures." 
  },
  { 
    icon: Package, 
    title: "Custom Packaging & Logistics", 
    text: "We provide a complete fulfillment solution, including the design of protective, retail-ready packaging, custom foam inserts, and branded materials. Our service includes final kitting of accessories, user manuals, and power supplies, followed by direct-to-end-customer order fulfillment, managing logistics and providing a seamless extension of your operations." 
  },
];

const processSteps = [
  { name: "Project Kick-off & DFM Review", description: "The process begins with a detailed review of your project requirements, including the Bill of Materials (BOM), 3D CAD models, and assembly drawings. Our engineering team provides comprehensive Design for Manufacturing (DFM) and Design for Assembly (DFA) feedback, identifying opportunities to improve efficiency, reduce cost, and enhance product reliability." },
  { name: "Incoming Quality Control (IQC)", description: "All supplied materials, from the smallest screw to the main enclosure, undergo rigorous inspection. We verify dimensional accuracy, material specifications, and cosmetic finish. Electronic components are checked for authenticity and proper packaging, ensuring that only qualified materials enter the production workflow." },
  { name: "Material Kitting & Line Preparation", description: "Once approved, all components for a production run are organized into specific kits for each assembly station. This meticulous process ensures that technicians have the exact materials needed for each step, minimizing downtime and preventing the use of incorrect parts. Assembly lines are configured with calibrated tools and work instructions." },
  { name: "Sub-Assembly Builds", description: "Where applicable, smaller, self-contained modules are built and tested in parallel. This could include wiring harnesses, power supply units, or front-panel display assemblies. This modular approach isolates complexity and allows for focused quality checks before these units are integrated into the final product, improving overall line efficiency." },
  { name: "Main System Integration", description: "Skilled technicians begin the final assembly, carefully installing sub-assemblies, PCBAs, and other components into the main chassis. They follow detailed, illustrated work instructions, using calibrated torque drivers and ESD-safe practices to ensure every part is fitted correctly and securely, paying close attention to cable routing and management." },
  { name: "Software Loading & Configuration", description: "With the hardware assembled, the device is brought to life. We connect it to our programming stations to flash the bootloader and firmware, install the primary operating system, and configure all necessary software parameters and unique identifiers, such as serial numbers and MAC addresses, according to your specifications." },
  { name: "System-Level Functional Testing", description: "This is the most critical quality gate. Each fully assembled unit is connected to a custom-designed test fixture. An automated test sequence verifies every function: power-up, sensor readings, wireless connectivity, display output, and I/O port communication. Any failure is immediately flagged, and the unit is sent to diagnostics for root cause analysis." },
  { name: "Final QC, Packaging & Shipment", description: "After passing all functional tests, each unit undergoes a final visual inspection to check for cosmetic compliance. It is then cleaned, and accessories are kitted. The product is placed into its final packaging, sealed, and labeled for shipment. We manage the logistics to deliver your products to a distribution center or directly to your end customers." },
];

const techSpecs = [
  { category: "Assembly Complexity", spec: "Simple to highly complex electro-mechanical systems" },
  { category: "Enclosure Types", spec: "Custom-machined metal, injection-molded plastic, off-the-shelf" },
  { category: "Component Sourcing", spec: "Full turnkey, consigned, or hybrid models" },
  { category: "Assembly Standards", spec: "IPC-A-610 (Electronics), IPC/WHMA-A-620 (Cables)" },
  { category: "Fastening", spec: "Calibrated torque drivers (0.1 Nm to 10 Nm)" },
  { category: "Wiring", spec: "Point-to-point, wire wrapping, custom harnesses" },
  { category: "Testing", spec: "Functional, In-Circuit (ICT), Flying Probe, Burn-in, ESS" },
  { category: "Software", spec: "Firmware flashing (JTAG, SWD, ISP), OS installation" },
  { category: "Traceability", spec: "Serial number tracking from component to finished good" },
  { category: "Volume", spec: "NPI prototypes to medium-volume production" },
];

const faqData = [
  {
    question: "What information do I need to provide for a box build assembly quote?",
    answer: "To provide an accurate quote, we need a complete package of documentation. This typically includes: a detailed Bill of Materials (BOM) for all mechanical and electronic components, 3D CAD files (e.g., STEP, IGES) for the assembly, 2D mechanical drawings for custom parts, comprehensive assembly instructions, and your testing requirements, including any specific test procedures or fixtures needed."
  },
  {
    question: "Can you source the mechanical parts and enclosures for my project?",
    answer: "Absolutely. We offer a full turnkey solution, which means our supply chain team can manage the procurement of all components, including custom-fabricated metal and plastic parts, hardware, and off-the-shelf enclosures. We leverage our network of qualified global suppliers to ensure competitive pricing and reliable delivery, simplifying your supply chain management significantly."
  },
  {
    question: "What is Design for Assembly (DFA) and why is it important?",
    answer: "Design for Assembly (DFA) is a critical engineering process where we analyze your product design from the perspective of the assembly technician. The goal is to make the product as easy and efficient to assemble as possible. By providing DFA feedback early, we can suggest modifications—such as reducing part count, using self-aligning features, or improving access for tools—that can dramatically reduce labor costs, improve quality, and increase production throughput."
  },
  {
    question: "What kind of testing do you perform on the final product?",
    answer: "Our testing is comprehensive and tailored to your product. It always includes a 100% end-of-line functional test to verify that every feature works. Beyond that, we can perform system-level validation, safety testing (like Hi-Pot), and environmental stress screening (ESS) such as burn-in and thermal cycling to ensure reliability. We work with you to develop a test plan that guarantees your product meets all performance and quality standards."
  },
  {
    question: "How do you ensure quality and consistency across a production run?",
    answer: "We employ a multi-layered quality control system. It starts with rigorous Incoming Quality Control (IQC) on all materials. During production, we use detailed, version-controlled work instructions, calibrated tools, and in-process inspections at critical assembly stages. Finally, every single unit undergoes a full functional test before packaging. This systematic approach, compliant with ISO 9001 standards, ensures every product we ship is identical and meets your exact specifications."
  }
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

export default function ServiceBoxBuild() {
  return (
    <>
      <SEO
        title="Box Build Assembly & System Integration Services | Illuminious"
        description="End-to-end box build assembly and system integration. We transform your PCBA into a fully tested, packaged, and market-ready product with our expert electro-mechanical assembly services."
        keywords="box build assembly, system integration, final assembly, electro-mechanical assembly, contract manufacturing, electronics manufacturing services, product assembly"
        url="/services/box-build"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-box-build-ai-recorder-13.jpg"
            alt="Technicians on a modern box build assembly line"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Box Build Assembly" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Box Build & System Integration
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">From Board to Finished Product</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    Box build assembly, often called systems integration, represents the final, critical phase in the electronics manufacturing lifecycle. It is the comprehensive process of enclosing a product's core electronics—the Printed Circuit Board Assembly (PCBA)—within its housing and integrating all other components to create a complete, functional device. This includes everything from mechanical parts like brackets and fasteners to user interfaces, power supplies, custom cabling, and thermal management systems. It is the step where a collection of individual parts becomes a cohesive, market-ready product.
                  </p>
                  <p>
                    At Illuminious, our box build services are a cornerstone of our end-to-end manufacturing partnership. We manage the immense complexity of integrating disparate components into a reliable final product. Our dedicated assembly lines in Shenzhen and Batam are staffed by highly skilled technicians and configured for maximum efficiency and quality control. By handling the entire process—from global sourcing of mechanical parts to final testing and logistics—we provide a single point of accountability, streamlining your supply chain and reducing your operational burden.
                  </p>
                  <p>
                    The value of a world-class box build partner lies in risk reduction and accelerated market entry. Mismanagement of this final stage can lead to costly delays, quality issues, and logistical nightmares. Our robust processes, rooted in decades of experience, mitigate these risks. We provide expert Design for Assembly (DFA) feedback to optimize your product for efficient production, develop custom test fixtures to guarantee performance, and manage a complex supply chain so you can focus on your core competencies: innovation, design, and sales.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-pcb-assembly-line.jpg" alt="Technician performing final assembly of a complex electronic device" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Box Build Capabilities</h2>
              <p className="text-lg text-gray-600">
                We offer a comprehensive suite of services to manage every aspect of your product's final assembly, testing, and fulfillment, ensuring a seamless transition from prototype to mass production.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4 flex-shrink-0">
                      <cap.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                      <p className="text-sm text-gray-600">{cap.text}</p>
                    </div>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The Box Build Assembly Process</h2>
              <p className="text-lg text-gray-600">
                Our systematic, eight-step process ensures that every unit is built and tested to your exact specifications, with rigorous quality gates at every stage for maximum reliability.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
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

        {/* Quality Assurance Section */}
        <section id="quality" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-box-build-alarm-clock-19.jpg" alt="A custom functional test fixture in use for quality control" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Uncompromising Quality Control</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In box build assembly, quality is holistic. It extends far beyond the PCBA to encompass every component, every connection, and every step of the integration process. Our ISO 9001-certified quality management system is designed to ensure that the final product not only functions perfectly but also meets all cosmetic, packaging, and reliability requirements. We view quality not as a final inspection, but as a principle embedded throughout the entire assembly workflow.
                  </p>
                  <p>
                    We adhere to internationally recognized standards, including IPC-A-610 for electronic assemblies and IPC/WHMA-A-620 for cable and wire harnesses. Our quality process includes First Article Inspection (FAI) for new products, in-process checks at critical stages, and a 100% end-of-line functional test for every unit. We utilize Statistical Process Control (SPC) to monitor and control our assembly processes, ensuring they remain stable and capable.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Component-Level Traceability:</strong> Full serialization and tracking from individual components to the final packaged product.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Automated Test & Verification:</strong> Custom test jigs and automated scripts ensure repeatable and reliable testing with detailed data logging.</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span><strong>Certified Quality Standards:</strong> Adherence to ISO 9001, IPC-A-610, and IPC/WHMA-A-620 to guarantee manufacturing excellence.</span>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section id="specs" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
              <p className="text-lg text-gray-600">
                Our facilities are equipped to handle a wide range of technical requirements, ensuring precision, reliability, and scalability for your product.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-4xl mx-auto bg-gray-50 rounded-xl p-8 shadow-inner-lg">
                <div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
                  {techSpecs.map((spec) => (
                    <div key={spec.category} className="border-b border-gray-200 py-3 flex items-baseline">
                      <h4 className="font-semibold text-illuminious-navy w-1/3 flex-shrink-0">{spec.category}</h4>
                      <p className="text-gray-700">{spec.spec}</p>
                    </div>
                  ))}
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
              <p className="text-lg text-gray-600">
                Answers to common questions about our box build assembly process, capabilities, and how to get started.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-3xl mx-auto">
                <Accordion type="single" collapsible className="w-full">
                  {faqData.map((item, index) => (
                    <AccordionItem value={`item-${index + 1}`} key={index}>
                      <AccordionTrigger className="text-left font-semibold text-lg">{item.question}</AccordionTrigger>
                      <AccordionContent className="text-base leading-relaxed text-gray-700">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy text-white">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Build Your Product?</h2>
              <p className="text-xl text-white/80 max-w-2xl mx-auto mb-8">
                Let us handle the complexities of system integration so you can focus on innovation. Contact our engineering team today to discuss your project and get a detailed quote.
              </p>
              <Button size="lg" asChild className="bg-illuminious-blue hover:bg-illuminious-blue/90 text-white font-bold text-lg">
                <Link href="/contact">
                  Request a Quote <ArrowRight className="ml-2" />
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
