import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Microscope, Layers, Cpu, Shield, Settings, Package, TestTube2, BookCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "High-Precision SMT Assembly" },
  { id: "capabilities", title: "Our SMT Capabilities" },
  { id: "process", title: "The SMT Assembly Process" },
  { id: "quality", title: "Quality Assurance" },
  { id: "specifications", title: "Technical Specifications" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "cta", title: "Start Your Project" },
];

const capabilities = [
  { 
    icon: Cpu, 
    title: "Advanced Component Placement", 
    text: "Our Fuji NXT III and Panasonic NPM-D3 lines achieve placement of ultra-fine 0.35mm pitch BGAs and components down to 01005 (0.4mm x 0.2mm). We guarantee a placement accuracy of ±25μm, critical for dense, high-performance boards."
  },
  { 
    icon: Layers, 
    title: "Precision Solder Paste Printing", 
    text: "We utilize fully automated DEK and MPM stencil printers with 2D/3D camera alignment. Post-print, every board undergoes 100% 3D Solder Paste Inspection (SPI) to verify paste volume, area, and height, eliminating defects before they happen."
  },
  { 
    icon: Factory, 
    title: "High-Volume Throughput", 
    text: "With 8 fully automated SMT lines operating 24/7 across our Shenzhen and Batam facilities, we have a combined capacity of over 50 million component placements per month. This scale allows us to handle high-volume orders while maintaining rapid turnaround times."
  },
  { 
    icon: Microscope, 
    title: "Comprehensive Inspection", 
    text: "Our quality protocol includes in-line 3D Automated Optical Inspection (AOI) and in-line X-Ray Inspection (AXI). This combination detects both visible defects like component shift and hidden issues like BGA voids and head-in-pillow defects."
  },
  { 
    icon: Shield, 
    title: "Robust Process Control", 
    text: "We offer both leaded (Sn63/Pb37) and lead-free (SAC305) assembly processes in ESD-controlled environments. Full material traceability from component reel to final assembly is maintained through our Manufacturing Execution System (MES)."
  },
  { 
    icon: Settings, 
    title: "Diverse Board Capabilities", 
    text: "We assemble single and double-sided rigid PCBs, flexible circuits (FPC), and rigid-flex boards. We handle a wide range of substrate materials including FR-4, Rogers, and metal-core PCBs for thermal management."
  },
  { 
    icon: Package, 
    title: "Specialized Package Handling", 
    text: "Our expertise extends to complex packages including Package-on-Package (PoP), wafer-level chip-scale packages (WLCSP), and QFN/DFN components. We use specialized reflow profiles and underfill processes to ensure long-term reliability."
  },
  { 
    icon: TestTube2, 
    title: "Conformal Coating & Potting", 
    text: "For products operating in harsh environments, we provide automated selective conformal coating (acrylic, urethane, silicone) and epoxy potting services to protect against moisture, dust, and vibration, ensuring product longevity."
  },
];

const processSteps = [
  { name: "Step 1: DFM & Material Preparation", description: "Every project begins with a detailed Design for Manufacturability (DFM) analysis to optimize your layout for high-yield assembly. Simultaneously, all components undergo baking and inspection, and solder paste is conditioned to the precise viscosity required.", delay: 0 },
  { name: "Step 2: Solder Paste Printing", description: "A high-precision DEK stencil printer applies a perfect layer of solder paste to the PCB pads. The stencil aperture and squeegee pressure are calibrated for your specific board, ensuring optimal paste deposition for every component type.", delay: 0.1 },
  { name: "Step 3: Solder Paste Inspection (SPI)", description: "Immediately after printing, a 3D SPI system (Koh Young KY8030-3) scans the entire board, measuring the volume, height, and alignment of every solder deposit. This critical step catches over 70% of potential defects before placement begins.", delay: 0.2 },
  { name: "Step 4: High-Speed Component Placement", description: "The board moves into our Fuji NXT III and Panasonic NPM-D3 pick-and-place machines. Vision-guided placement heads accurately place up to 100,000 components per hour, from large ICs to the smallest 01005 passives.", delay: 0.3 },
  { name: "Step 5: Pre-Reflow Visual Inspection", description: "A manual or automated inspection checkpoint verifies component placement and polarity before the board enters the reflow oven. This allows for easy correction of any placement errors, preventing complex rework later.", delay: 0.4 },
  { name: "Step 6: Reflow Soldering", description: "Boards travel through our 13-zone Heller reflow ovens. The thermal profile is meticulously customized for the board's mass and component sensitivity, ensuring a complete and robust solder joint formation for every connection without thermal stress.", delay: 0.5 },
  { name: "Step 7: Automated Optical Inspection (AOI)", description: "Post-reflow, a 3D AOI machine (Koh Young Zenith 2) inspects every solder joint for defects like bridges, insufficient solder, and component shift. The 3D measurement provides unparalleled accuracy compared to older 2D systems.", delay: 0.6 },
  { name: "Step 8: X-Ray Inspection (AXI)", description: "For BGAs, QFNs, and other leadless packages, our in-line Nordson DAGE AXI systems inspect for hidden defects. This non-destructive analysis is crucial for verifying solder joint integrity, detecting voids, and ensuring there are no shorts under the component.", delay: 0.7 },
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

export default function ServiceSMTAssembly() {
  return (
    <>
      <SEO
        title="SMT Assembly Services | Surface Mount Technology | Illuminious"
        description="High-precision SMT assembly services for complex electronics. Our automated lines handle 01005 components, BGA, and fine-pitch devices with 3D AOI and X-Ray inspection."
        keywords="SMT assembly, surface mount technology, SMT manufacturing, PCBA SMT, SMT line, pick and place, reflow soldering, SMT provider, electronics contract manufacturing"
        url="/services/smt-assembly"
      />
      <Header />

      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/smtassembly-img-1.jpg"
            alt="Panoramic view of a modern SMT production line"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "SMT Assembly" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">Surface Mount Technology (SMT) Assembly</h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">High-speed, high-precision automated assembly for the most complex and miniaturized electronic designs. We are the factory that brings your product to life.</p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex justify-center overflow-x-auto">
            {pageSections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-illuminious-blue transition-colors whitespace-nowrap">
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        <section id="overview" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Precision and Scale in Every Placement</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>Surface Mount Technology (SMT) is the foundational process for modern electronics manufacturing, enabling the creation of smaller, faster, and more powerful devices. At Illuminious, our SMT assembly services are engineered to provide the highest levels of precision, speed, and reliability. We have made significant investments in state-of-the-art automated production lines across our Shenzhen and Batam facilities. This dual-factory footprint allows us to offer robust supply chain resilience and scalable capacity, handling everything from rapid NPI prototypes to high-volume production runs of millions of units per month.</p>
                  <p>Our process is built on a philosophy of proactive quality control and engineering excellence. From the moment your design enters our system, it undergoes a rigorous Design for Manufacturability (DFM) and Design for Assembly (DFA) analysis. Our engineering team collaborates with you to identify and resolve potential production challenges before they impact your timeline or budget. This critical upfront work ensures a smooth transition to our fully automated SMT lines, where every step—from solder paste printing to final inspection—is monitored, controlled, and optimized for maximum yield and long-term product performance.</p>
                  <p>Whether you are developing a dense, complex board with fine-pitch BGAs and 01005 components for a medical device, or a cost-sensitive consumer product requiring massive scale, our team and technology are equipped to meet your requirements. We don't just place components; we build the foundation of your product's reliability. Our 8 SMT lines run 24/7, giving us the capacity to place over 50 million components per month, ensuring we can scale with your success and meet the most demanding market timelines.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/smtassembly-img-2.jpg" alt="High-speed pick-and-place machine in action" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our SMT Capabilities</h2>
              <p className="text-lg text-gray-600">We have the technology and expertise to handle the most demanding SMT assembly projects. Our capabilities are continuously updated to support the latest advancements in component technology and product design.</p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4"><cap.icon className="w-6 h-6 text-illuminious-blue" /></div>
                    <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                    <p className="text-sm text-gray-600">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The SMT Assembly Process: A Symphony of Precision</h2>
              <p className="text-lg text-gray-600">Our SMT process is a meticulously choreographed sequence of automated steps, each governed by strict quality controls and full traceability through our Manufacturing Execution System (MES).</p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12 md:mb-0">
                    <div className={`flex items-center flex-col md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""}`}>
                      <div className="w-full md:w-1/2 px-4 md:px-8 py-4">
                        <AnimatedSection delay={step.delay}>
                          <h3 className={`text-xl font-bold mb-2 font-heading text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>{step.name}</h3>
                          <p className={`text-gray-600 text-center ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white items-center justify-center font-bold shadow-lg">
                        {index + 1}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="quality" className="py-20 bg-gray-50">
          <div className="container grid md:grid-cols-2 gap-12 items-center">
            <AnimatedSection>
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img src="/images/smtassembly-img-3.jpg" alt="Technician operating a 3D AOI machine" />
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Uncompromising Quality at Every Stage</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>Quality is not an afterthought; it's integrated into every step of our SMT process. Our philosophy is to prevent defects, not just find them. This starts with our multi-stage inspection strategy, creating a closed-loop feedback system for continuous process improvement:</p>
                <ul className="space-y-3 list-disc list-inside">
                  <li><strong>3D Solder Paste Inspection (SPI):</strong> Before a single component is placed, we verify the solder paste deposit. This catches over 70% of potential SMT defects at the source, preventing costly rework and improving overall yield.</li>
                  <li><strong>3D Automated Optical Inspection (AOI):</strong> Post-reflow, our 3D AOI systems build a complete topographical map of every board, inspecting each solder joint for volume, shape, and coplanarity, far beyond the capabilities of 2D systems.</li>
                  <li><strong>In-line X-Ray Inspection (AXI):</strong> For BGAs, QFNs, and other bottom-terminated components, our AXI systems provide a non-destructive view inside the solder joints, detecting voids, shorts, and head-in-pillow defects that are otherwise invisible.</li>
                </ul>
                <p>This rigorous, data-driven approach allows us to make real-time adjustments to our production lines, continuously improving process parameters and ensuring a first-pass yield that consistently exceeds 99.7%. Our commitment to quality is validated by our certifications: <strong>ISO 9001:2015</strong> for quality management, <strong>ISO 13485:2016</strong> for medical devices, and <strong>IATF 16949:2016</strong> for automotive quality standards.</p>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="specifications" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
              <p className="text-lg text-gray-600">Our SMT lines are configured to handle a wide range of technologies and board specifications. Below are the key parameters we support.</p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="max-w-4xl mx-auto overflow-x-auto">
                <table className="w-full text-left border-collapse shadow-lg rounded-lg">
                  <thead className="bg-illuminious-navy text-white font-heading">
                    <tr>
                      <th className="p-4 border-b border-gray-300">Feature</th>
                      <th className="p-4 border-b border-gray-300">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white">
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Assembly Types</td><td className="p-4 border-b">Single and double-sided SMT</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Board Types</td><td className="p-4 border-b">Rigid FR-4, Rogers, CEM-1, CEM-3, Metal Core, Flex, Rigid-Flex</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Maximum Board Size</td><td className="p-4 border-b">500mm x 500mm (20\" x 20\")</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Minimum Board Size</td><td className="p-4 border-b">50mm x 50mm (2\" x 2\")</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Board Thickness</td><td className="p-4 border-b">0.4mm to 6.0mm</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Smallest Component</td><td className="p-4 border-b">01005 (0.4mm x 0.2mm)</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Fine Pitch Placement</td><td className="p-4 border-b">Down to 0.35mm for BGA/CSP</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">BGA/uBGA Placement</td><td className="p-4 border-b">Placement and X-Ray inspection for pitches down to 0.35mm</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Placement Accuracy</td><td className="p-4 border-b">±25μm @ 3 sigma</td></tr>
                    <tr className="hover:bg-gray-50"><td className="p-4 border-b">Solder Types</td><td className="p-4 border-b">Leaded (Sn63/Pb37) and Lead-Free (SAC305, SAC405)</td></tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
          <div className="container max-w-4xl mx-auto">
            <AnimatedSection className="text-center mb-12">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
            </AnimatedSection>
            <div className="space-y-6">
              <AnimatedSection delay={0.1}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">What is the difference between SMT and THT?</h3>
                  <p className="text-gray-600">Surface Mount Technology (SMT) involves placing components directly onto the surface of a PCB, while Through-Hole Technology (THT) involves inserting component leads into drilled holes. SMT allows for much higher component density, miniaturization, and automation, making it the standard for most modern electronics. We specialize in SMT but also offer mixed-technology assembly.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">What DFM information do you need to start a project?</h3>
                  <p className="text-gray-600">To perform a comprehensive DFM analysis, we require your Gerber files, a Bill of Materials (BOM) with manufacturer part numbers, and your XY placement data (also known as centroid or pick-and-place data). Any specific assembly instructions or testing requirements are also helpful.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-white p-6 rounded-lg shadow-md">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">How do you handle moisture-sensitive components?</h3>
                  <p className="text-gray-600">We strictly adhere to the J-STD-033 standard for handling Moisture Sensitive Devices (MSD). Components are stored in humidity-controlled dry cabinets. If a component's floor life has been exceeded, it is baked in a calibrated oven according to the manufacturer's specifications before being placed on the SMT line.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Start Your SMT Project?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">Our engineers are ready to review your design and provide a comprehensive quote. Let's build your next product with the precision and quality it deserves.</p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">Request a Quote <ArrowRight className="w-5 h-5 ml-2" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
