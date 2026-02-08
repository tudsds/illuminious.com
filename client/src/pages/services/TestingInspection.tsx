import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Microscope, Layers, Cpu, Shield, Settings, Zap, TestTube } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Comprehensive Testing & Inspection Services",
  },
  {
    id: "capabilities",
    title: "Our Testing Capabilities",
  },
  {
    id: "process",
    title: "Our Inspection Process",
  },
  {
    id: "specs",
    title: "Technical Specifications",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Cpu, title: "Automated Optical Inspection (AOI)", text: "Our state-of-the-art 3D AOI systems from leading brands like Koh Young and Mirtec provide comprehensive post-reflow and post-wave inspection. They meticulously detect defects such as component shift, polarity errors, tombstoning, and fine-pitch solder joint issues with unparalleled accuracy, ensuring every board meets IPC-A-610 Class 2 or 3 standards." },
  { icon: Layers, title: "X-Ray Inspection (AXI)", text: "We utilize both 2D and 3D/CT (Computed Tomography) X-ray systems from Nordson DAGE and YXLON for non-destructive inspection of complex packages like BGAs, QFNs, and PoPs. This allows us to detect hidden defects such as solder voids, shorts, head-in-pillow, and insufficient fill in through-hole vias, guaranteeing the integrity of critical connections." },
  { icon: Factory, title: "In-Circuit Testing (ICT)", text: "For high-volume production, our Keysight and Teradyne bed-of-nails ICT systems offer rapid and comprehensive testing. They verify component values, check for shorts and opens, and confirm correct board assembly, providing precise fault location in seconds. Our engineers design and fabricate custom fixtures optimized for your specific board layout." },
  { icon: Microscope, title: "Flying Probe Testing", text: "Ideal for prototypes, NPI, and low-to-mid volume runs, our Takaya and SPEA flying probe testers provide full test coverage without the high cost of custom fixtures. This method offers excellent flexibility for debugging and can test boards that lack dedicated test pads, making it a versatile and cost-effective solution for electrical verification." },
  { icon: Shield, title: "Functional Testing (FCT)", text: "We design and build custom functional test fixtures that simulate your product's final operating environment. Using National Instruments (NI) LabVIEW and custom-programmed microcontrollers, we verify every aspect of your product's performance, ensuring it functions exactly as intended before it leaves our facility. This is the ultimate validation of quality." },
  { icon: Settings, title: "Environmental & Reliability Testing", text: "To ensure your product withstands its intended operational stresses, we perform burn-in, thermal cycling (e.g., -40°C to +125°C), and vibration testing. This process screens for infant mortality and latent defects, proving the long-term reliability and robustness of the design and manufacturing process, critical for mission-critical applications." },
  { icon: Zap, title: "Boundary Scan (JTAG)", text: "For complex, high-density boards where physical access is limited, we employ JTAG (IEEE 1149.1) boundary scan testing. This powerful electrical test method allows us to test connections between integrated circuits without direct probe access, verifying pin-level connectivity and detecting shorts, opens, and other digital logic faults." },
  { icon: TestTube, title: "Ionic Contamination Testing", text: "Residues from the manufacturing process can lead to long-term failures. We use ionic contamination testing equipment, such as a Resistivity of Solvent Extract (ROSE) tester, to measure and ensure boards meet the cleanliness requirements of IPC-J-STD-001, preventing electrochemical migration and corrosion down the line." },
];

const processSteps = [
  { name: "Solder Paste Inspection (SPI)", description: "Quality starts at the very first step. We use 3D SPI to meticulously verify solder paste volume, area, height, and alignment on every pad before component placement. This data-driven approach allows us to catch printing defects immediately, preventing 70% of all potential SMT defects from ever occurring and ensuring a stable reflow process." },
  { name: "Pre- and Post-Reflow AOI", description: "After component placement but before reflow, a pre-reflow AOI check confirms component presence, polarity, and position. Following reflow, every board is scanned again by our 3D AOI systems to inspect for placement accuracy, polarity, and the full range of solder joint quality characteristics as defined by IPC standards. This dual-stage inspection provides a robust quality gate." },
  { name: "X-Ray Inspection (AXI)", description: "For boards with BGAs, QFNs, or other bottom-terminated components, AXI is not optional—it's essential. Our systems provide a crucial non-destructive view to detect hidden defects like voids, shorts, and head-in-pillow. For complex assemblies, we utilize 3D CT scanning to get a complete, layer-by-layer understanding of solder joint integrity." },
  { name: "First Article Inspection (FAI)", description: "Before commencing a full production run, a comprehensive FAI is performed on the first assembled board. We use automated tools to compare the board against the BOM and Gerber data, verifying every component's placement, orientation, and value. This ensures the machine setup is perfect before mass production begins." },
  { name: "Electrical Testing (ICT/Flying Probe)", description: "Once assembled, we perform 100% electrical testing. Depending on volume and complexity, we use either In-Circuit Testing (ICT) for high-speed, high-volume verification or Flying Probe testing for its fixtureless flexibility in prototype and low-volume scenarios. This step is critical for catching manufacturing defects like shorts, opens, and incorrect component values." },
  { name: "Functional & System Level Testing (FCT)", description: "The final and most important step. We power up the board and run it through a series of custom-developed tests that simulate its real-world application. This ensures that the assembly doesn't just look correct, but functions exactly as designed, meeting all performance specifications under operational load." },
  { name: "Final Visual Inspection & Packaging", description: "A final, thorough check is performed by our IPC-A-610 certified inspectors. They scrutinize the assembly for any cosmetic or workmanship issues, ensuring it meets all customer requirements and our own high standards before being carefully packaged in anti-static materials for safe shipment." },
];

export default function ServiceTestingInspection() {
  return (
    <>
      <SEO
        title="Advanced PCB Testing & Inspection Services | AOI, AXI, ICT, FCT | Illuminious"
        description="Illuminious provides comprehensive PCB testing and inspection services including 3D AOI, 3D AXI, ICT, flying probe, and functional testing. We are a US-managed contract manufacturer ensuring your product is built to the highest quality standards."
        keywords="PCB testing, PCB inspection, AOI inspection, X-Ray inspection, in-circuit test, ICT, functional test, FCT, electronics testing, contract manufacturing, IPC-A-610"
        url="/services/testing-inspection"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholder-aoi-inspection.jpg"
            alt="Technician operating an advanced 3D AOI machine"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Testing & Inspection" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Advanced Testing & Inspection Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Ensuring the absolute quality, reliability, and performance of your product through a multi-layered strategy of automated inspection, rigorous electrical testing, and data-driven process control.
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
        <section id="overview" className="py-20 lg:py-28 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">Zero-Defect Manufacturing is Our Mission</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    At Illuminious, we operate on a fundamental principle: quality cannot be inspected into a product; it must be engineered and built-in from the very beginning. Our comprehensive testing and inspection strategy is the cornerstone of this philosophy. It's a meticulously designed system that monitors every critical stage of the manufacturing process, from the moment bare boards and components arrive at our facility to the final functional validation of the assembled product. This ensures that every unit we ship meets the most stringent standards of quality, reliability, and performance.
                  </p>
                  <p>
                    Our approach is relentlessly proactive. We don't wait for defects to appear at final inspection. By leveraging advanced inspection technologies like 3D Solder Paste Inspection (SPI) at the start of the line, we identify and correct process variations before they can lead to defects. This multi-layered inspection process—combining SPI, pre- and post-reflow AOI, AXI for complex components, and comprehensive electrical testing—creates a powerful, closed-loop feedback system. This system not only catches potential defects early but also provides the data needed for continuous process improvement, allowing us to achieve first-pass yields that are among the best in the industry.
                  </p>
                  <p>
                    True partnership means aligning our process with your goals. We collaborate closely with your engineering team to develop a custom test strategy that provides the right level of coverage without unnecessary costs or production delays. Our experienced test engineers are experts in Design for Test (DFT) and Design for Manufacturability (DFM). They can provide invaluable feedback during your design phase, suggesting modifications that will make your product more robust, easier to manufacture, and more efficient to test, ultimately lowering your total cost of ownership.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-engineer-testing-pcb.jpg" alt="Illuminious engineer performing a detailed functional test on a complex PCB assembly" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 lg:py-28 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Our Advanced Testing Capabilities</h2>
              <p className="text-xl text-gray-600">
                We have invested in a full spectrum of industry-leading testing and inspection equipment to ensure the integrity of your product at every level, from individual components to the final system.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <cap.icon className="w-7 h-7 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">{cap.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-20 lg:py-28 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-20">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Our Inspection Process: A Multi-Layered Defense</h2>
              <p className="text-xl text-gray-600">
                We inspect for quality at every critical step of the assembly process. This creates a closed-loop system that prevents defects, provides valuable process data, and drives continuous improvement.
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
                          <h3 className={`text-2xl font-bold mb-3 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-gray-600 leading-relaxed ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg">
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
        <section id="specs" className="py-20 lg:py-28 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                We pride ourselves on transparency and precision. Here are the technical details of our primary testing and inspection systems.
              </p>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                <table className="w-full text-left text-gray-700">
                  <thead className="bg-gray-100 text-gray-800 uppercase text-sm">
                    <tr>
                      <th className="px-6 py-4 font-semibold">Test Method</th>
                      <th className="px-6 py-4 font-semibold">Key Equipment</th>
                      <th className="px-6 py-4 font-semibold">Capability / Tolerance</th>
                      <th className="px-6 py-4 font-semibold">Primary Use Case</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3D AOI</td>
                      <td className="px-6 py-4">Koh Young Zenith, Mirtec MV-6 OMNI</td>
                      <td className="px-6 py-4">Inspects 01005 components, 0.3mm pitch; Solder volume accuracy &lt;10%</td>
                      <td className="px-6 py-4">Post-reflow solder joint and component placement inspection</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3D SPI</td>
                      <td className="px-6 py-4">Koh Young KY8030-3</td>
                      <td className="px-6 py-4">Height accuracy: ±2µm; Volume repeatability: &lt;1%</td>
                      <td className="px-6 py-4">Solder paste deposition process control</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">3D AXI / CT</td>
                      <td className="px-6 py-4">Nordson DAGE Quadra 7, YXLON Cougar EVO</td>
                      <td className="px-6 py-4">Feature recognition down to 100nm; Void analysis &lt;5%</td>
                      <td className="px-6 py-4">BGA/QFN void/short analysis, PTH fill inspection, failure analysis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Flying Probe</td>
                      <td className="px-6 py-4">Takaya APT-1400F, SPEA 4060</td>
                      <td className="px-6 py-4">Positional accuracy: ±10µm; Can probe pads down to 150µm</td>
                      <td className="px-6 py-4">Prototypes, NPI, low-volume electrical test, DFT analysis</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">ICT</td>
                      <td className="px-6 py-4">Keysight i3070, Teradyne TestStation</td>
                      <td className="px-6 py-4">Measures R/L/C values, diode/transistor checks, opens/shorts</td>
                      <td className="px-6 py-4">High-volume production electrical test</td>
                    </tr>
                    <tr className="hover:bg-gray-50">
                      <td className="px-6 py-4 font-medium">Reliability</td>
                      <td className="px-6 py-4">ESPEC Thermal Chambers, Sentek Dynamics Shakers</td>
                      <td className="px-6 py-4">-70°C to +180°C temp range; Random &amp; sine vibration testing</td>
                      <td className="px-6 py-4">HALT/HASS, infant mortality screening, product validation</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 lg:py-28 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
              <p className="text-xl text-gray-600">
                Answers to common questions about our electronics testing and inspection processes.
              </p>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto space-y-8">
              <AnimatedSection delay={0.1}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">What is the difference between testing and inspection?</h3>
                  <p className="text-gray-700 leading-relaxed">Inspection involves visually or automatically examining the board for physical defects (e.g., component placement, solder quality) using tools like AOI and AXI. Testing, on the other hand, involves electrically powering and operating the board to verify its function and performance using tools like ICT, Flying Probe, and FCT. A robust quality strategy requires both.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.2}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">How do you decide between ICT and Flying Probe testing?</h3>
                  <p className="text-gray-700 leading-relaxed">The decision is primarily based on production volume and product lifecycle stage. In-Circuit Test (ICT) is extremely fast, making it ideal for high-volume manufacturing, but requires a significant upfront investment in a custom fixture. Flying Probe is fixtureless and highly flexible, making it perfect for prototypes, NPI, and low-to-mid volume runs where the cost of an ICT fixture is not justifiable.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.3}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">What are IPC standards and why are they important?</h3>
                  <p className="text-gray-700 leading-relaxed">IPC is a global trade association that sets the standards for the electronics manufacturing industry. Standards like IPC-A-610 (Acceptability of Electronic Assemblies) and J-STD-001 (Requirements for Soldered Electrical and Electronic Assemblies) provide a common language and a clear set of criteria for what constitutes a quality product. Adhering to these standards, as we do, ensures consistency, reliability, and a high level of workmanship.</p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.4}>
                <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                  <h3 className="font-bold text-lg text-illuminious-navy mb-2">Can you help with Design for Test (DFT) analysis?</h3>
                  <p className="text-gray-700 leading-relaxed">Absolutely. We strongly encourage engaging with our engineering team early in the design process. We can provide a comprehensive DFT analysis, offering suggestions for adding test points, implementing JTAG boundary scan, and optimizing the layout for better test access. This collaboration significantly improves test coverage and reduces testing costs in production.</p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-illuminious-navy text-white">
          <div className="container py-20 text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Ensure Flawless Product Quality?</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Let our team of testing experts develop a comprehensive quality assurance strategy for your next project. Contact us today to discuss your requirements and get a detailed quote.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue hover:bg-illuminious-blue/90 text-white font-bold">
                <Link to="/contact">Request a Quote <ArrowRight className="ml-2 w-5 h-5" /></Link>
              </Button>
            </AnimatedSection>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

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
