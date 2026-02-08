import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Microscope, Layers, Cpu, Shield, Settings, Zap, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Full-Service PCB Assembly",
  },
  {
    id: "capabilities",
    title: "Our PCBA Capabilities",
  },
  {
    id: "process",
    title: "The PCBA Process",
  },
    {
    id: "tech-specs",
    title: "Technical Specifications",
  },
  {
    id: "quality",
    title: "Quality Assurance",
  },
    {
    id: "faq",
    title: "PCBA FAQs",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Cpu, title: "Advanced SMT Assembly", text: "Our fully automated Surface Mount Technology (SMT) lines are equipped with high-speed pick-and-place machines from leading brands like JUKI and Hanwha. We support component sizes down to 01005, fine-pitch BGA (Ball Grid Array) with 0.3mm pitch, and complex Package-on-Package (PoP) assembly, ensuring precision for even the most dense and miniaturized designs." },
  { icon: Layers, title: "Through-Hole & Mixed Technology", text: "We provide expert through-hole (THT) assembly using both automated and manual processes. Our capabilities include wave soldering for high-volume THT boards and selective soldering for mixed-technology boards that require precise application of heat to avoid damaging sensitive SMT components. This dual capability allows us to handle any board configuration." },
  { icon: Factory, title: "Prototype to High-Volume Production", text: "Our flexible manufacturing system is designed to scale with your needs. We operate dedicated NPI (New Product Introduction) lines for rapid prototyping and design validation, allowing for quick turns and iterative feedback. For mass manufacturing, our high-volume production lines are optimized for efficiency and consistency, capable of producing millions of units annually." },
  { icon: Microscope, title: "3D AOI & X-Ray Inspection", text: "Quality is verified at every stage with our advanced inspection systems. We utilize 3D Automated Optical Inspection (AOI) to verify component placement, polarity, and solder paste integrity. For non-visible solder joints, such as those under BGAs and QFNs, we employ 2D and 3D X-Ray inspection (AXI) to detect voids, shorts, and other hidden defects, ensuring 100% solder joint reliability." },
  { icon: Shield, title: "Full Turnkey & Consignment", text: "We offer complete turnkey solutions, managing the entire supply chain from component sourcing and verification to final assembly and testing. Our procurement team leverages a global network of authorized distributors to ensure component authenticity and availability. We also offer consignment and partial turnkey options if you prefer to supply your own components." },
  { icon: Settings, title: "Complex Board Technologies", text: "Our engineering team has deep expertise in assembling a wide range of advanced PCB technologies. This includes high-density interconnect (HDI) boards, rigid-flex and flexible circuits, metal-core PCBs for thermal management, and high-layer-count boards up to 32 layers. We have the process controls required to handle the unique challenges of these complex assemblies." },
  { icon: Zap, title: "Functional & In-Circuit Testing", text: "Beyond visual inspection, we provide comprehensive electrical testing to guarantee functionality. This includes In-Circuit Testing (ICT) to check for shorts, opens, and correct component values, as well as custom Functional Testing (FCT) using client-provided fixtures to verify the board operates exactly as designed in its end-use environment." },
    { icon: HardDrive, title: "Box Build & System Integration", text: "Our services extend beyond the board level. We offer complete box build and system integration, including the assembly of enclosures, installation of sub-assemblies, routing of cables and harnesses, and software loading. We deliver a fully integrated, tested, and packaged product ready for your customers." },
];

const processSteps = [
  { name: "DFM & Component Engineering", description: "The process begins when you submit your Gerber files and Bill of Materials (BOM). Our engineers conduct a thorough Design for Manufacturability (DFM) and Design for Assembly (DFA) analysis to identify potential issues that could impact yield or reliability. We provide detailed feedback to optimize your design for our high-speed, automated assembly processes, ensuring a smooth transition to production." },
  { name: "Solder Paste Application & SPI", description: "Using a high-precision solder paste printer, a stainless steel stencil is used to apply lead-free, RoHS-compliant solder paste to the component pads on the bare PCB. Following application, every board undergoes 3D Solder Paste Inspection (SPI) to verify the exact volume, alignment, and shape of the solder deposits, a critical step for preventing solder-related defects." },
  { name: "High-Speed SMT Placement", description: "The boards then move to our SMT lines, where high-speed pick-and-place machines populate the board with surface-mount devices (SMDs). These machines use vision systems to accurately place thousands of components per hour, from tiny 01005 passives to large, complex BGAs and QFNs, directly onto the solder paste." },
  { name: "Reflow Soldering", description: "Once all SMT components are placed, the boards travel through a multi-zone reflow oven. The oven uses a precisely controlled thermal profile to gradually heat the board, melting the solder paste to form strong, reliable solder joints. The profile is customized based on the board’s complexity, component density, and solder paste specifications to ensure joint integrity without heat-stressing components." },
    { name: "Inspection (AOI & AXI)", description: "After reflow, every board is inspected. 3D Automated Optical Inspection (AOI) is used to check for placement accuracy, component polarity, and solder joint quality. For components with hidden solder joints like BGAs, we use 2D/3D X-Ray Inspection (AXI) to ensure there are no voids, shorts, or other defects that are invisible to the naked eye." },
  { name: "Through-Hole Assembly & Soldering", description: "If the board has through-hole (THT) components, they are inserted at this stage. Depending on the project, this is done either by hand or with automated insertion equipment. The board then proceeds to either a wave soldering machine for full THT boards or a selective soldering process for mixed-technology boards, ensuring strong and reliable connections without affecting nearby SMT components." },
  { name: "Testing, Conformal Coating & Final Assembly", description: "We perform In-Circuit Testing (ICT) and Functional Testing (FCT) to verify the board’s electrical performance. Upon request, we apply a conformal coating to protect the assembly from moisture, dust, and other environmental factors. Finally, we complete any final box build assembly, program firmware, and prepare the product for shipment." },
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

export default function ServicePCBA() {
  return (
    <>
      <SEO
        title="PCB Assembly Services | SMT & THT PCBA | Illuminious"
        description="Full-service PCB assembly (PCBA) from prototype to production. We offer advanced SMT, through-hole, and mixed-technology assembly with comprehensive testing and quality assurance."
        keywords="PCB assembly, PCBA, SMT assembly, THT assembly, electronics manufacturing, turnkey PCBA, circuit board assembly, contract manufacturing"
        url="/services/pcb-assembly"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholder-smt-pick-and-place.jpg"
            alt="SMT pick-and-place machine assembling a PCB"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "PCB Assembly" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                PCB Assembly (PCBA) Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                From rapid prototypes to high-volume production, we are your trusted US-managed partner for high-quality, reliable printed circuit board assembly in our state-of-the-art Shenzhen and Batam facilities.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Your End-to-End PCBA Partner</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Printed Circuit Board Assembly (PCBA) is the intricate process of soldering or assembling electronic components onto a bare circuit board, transforming a simple board into the functioning brain of an electronic device. At Illuminious, this process is the heart of our manufacturing expertise. We provide a seamless, vertically integrated PCBA service that takes your design from a digital file to a fully assembled, tested, and reliable product ready for the market. Our state-of-the-art facilities in Shenzhen and Batam, managed by our US-based leadership, are equipped with the latest technology and operated by an experienced engineering team dedicated to precision and quality.
                  </p>
                  <p>
                    We understand that every project has unique requirements and constraints. That’s why we offer a highly flexible approach to manufacturing, providing everything from rapid-turn prototypes for design validation to full-scale production runs for established products. Whether you require a full turnkey solution where we manage the entire supply chain—from global component sourcing and verification to final assembly and direct fulfillment—or you prefer a consignment model where you provide the components, our team is structured to integrate with your operations and meet your specific needs. We act as a true extension of your team.
                  </p>
                  <p>
                    Our core commitment is to deliver uncompromising quality, industry-leading speed, and transparent communication throughout the entire process. We don’t just build your product; we enhance it. By providing expert DFM and DFA feedback, we help you optimize your design for cost-effective, high-yield manufacturing. Our project managers provide regular updates, ensuring you are informed at every step, from material procurement to final shipment. This collaborative approach minimizes risk, reduces time-to-market, and ensures your final product meets the highest standards of excellence.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-pcb-assembly-line.jpg" alt="Overview of a modern PCB assembly line" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our PCBA Capabilities</h2>
              <p className="text-lg text-gray-600">
                We have invested heavily in the technology, processes, and expertise required to handle the most complex and demanding PCBA projects. Our facilities are equipped to manage a wide array of technologies and scale from single prototypes to millions of units.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The PCBA Process: Precision at Every Step</h2>
              <p className="text-lg text-gray-600">
                Our manufacturing process is a meticulously engineered workflow designed for maximum quality, efficiency, and traceability. With multiple inspection and verification points, we ensure that every assembly meets our rigorous standards and your exact specifications.
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

        {/* Technical Specifications Section */}
        <section id="tech-specs" className="py-20 bg-gray-50">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
                    <p className="text-lg text-gray-600">
                        We adhere to strict process controls and industry standards to deliver consistent, high-quality assemblies. Below are some of our key manufacturing specifications.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
                        <table className="w-full text-sm text-left text-gray-700">
                            <thead className="bg-gray-100 text-gray-800 uppercase font-heading">
                                <tr>
                                    <th scope="col" className="px-6 py-3 w-1/3">Capability</th>
                                    <th scope="col" className="px-6 py-3 w-2/3">Specification</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="border-b"><td className="px-6 py-4 font-medium">Assembly Types</td><td className="px-6 py-4">SMT, Through-Hole, Mixed Technology, Single & Double-Sided</td></tr>
                                <tr className="border-b bg-gray-50"><td className="px-6 py-4 font-medium">SMT Component Size</td><td className="px-6 py-4">Passive components down to 01005; Fine-pitch to 0.3mm</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-medium">BGA/CSP Support</td><td className="px-6 py-4">Pitch down to 0.3mm, X-Ray inspection for voiding & shorts</td></tr>
                                <tr className="border-b bg-gray-50"><td className="px-6 py-4 font-medium">Board Dimensions</td><td className="px-6 py-4">Min: 50x50mm; Max: 510x460mm</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-medium">Board Thickness</td><td className="px-6 py-4">0.4mm to 6.0mm</td></tr>
                                <tr className="border-b bg-gray-50"><td className="px-6 py-4 font-medium">Soldering</td><td className="px-6 py-4">RoHS compliant Lead-Free (SAC305); Leaded (Sn63Pb37) available upon request</td></tr>
                                <tr className="border-b"><td className="px-6 py-4 font-medium">Inspection</td><td className="px-6 py-4">3D SPI, 3D AOI, 2D/3D AXI (X-Ray), ICT, FCT</td></tr>
                                <tr className="bg-gray-50"><td className="px-6 py-4 font-medium">Certifications</td><td className="px-6 py-4">ISO 9001:2015, IATF 16949 (Automotive), ISO 13485 (Medical)</td></tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        {/* Quality Assurance Section */}
        <section id="quality" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-xray-inspection.jpg" alt="X-Ray image of a BGA component showing solder joints" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Uncompromising Quality, Guaranteed</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Quality is not just a department at Illuminious; it is the foundation of our entire operation. We are certified to ISO 9001, and our processes are designed to meet the rigorous standards of the automotive (IATF 16949) and medical (ISO 13485) industries. This commitment to quality is embedded in every step, from component sourcing to final inspection, ensuring that every product we ship is reliable and built to last.
                  </p>
                  <ul className="space-y-3 mt-6">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">IPC-A-610 Class 2 & 3 Standards</h4>
                        <p className="text-gray-600">All our assembly and inspection operators are trained and certified to IPC-A-610 standards, the most widely recognized acceptability criteria for electronic assemblies. We build to Class 2 by default and can meet the more stringent Class 3 requirements for high-reliability products in aerospace, medical, and military applications.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">Full Traceability & MES</h4>
                        <p className="text-gray-600">Our Manufacturing Execution System (MES) provides complete, real-time traceability from the individual component reel to the final assembled product. This allows us to monitor process yields, track materials, and maintain a detailed history for every unit, giving you complete visibility and peace of mind.</p>
                      </div>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">Data-Driven Process Control</h4>
                        <p className="text-gray-600">We use Statistical Process Control (SPC) to monitor key metrics from our SMT lines, such as solder paste volume and component placement accuracy. This data-driven approach allows us to identify and correct potential process deviations in real-time, preventing defects before they occur and ensuring consistent quality across production runs.</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gray-50">
            <div className="container max-w-4xl mx-auto">
                <AnimatedSection className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">Answers to common questions about our PCBA services.</p>
                </AnimatedSection>
                <div className="space-y-8">
                    <AnimatedSection>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-illuminious-navy mb-2">What do you need for a PCBA quote?</h4>
                            <p className="text-gray-700">To provide an accurate quote, we need your Gerber files (RS-274X format), a complete Bill of Materials (BOM) with manufacturer part numbers, and the desired quantity. Any assembly drawings or special instructions are also helpful.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.1}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-illuminious-navy mb-2">What is your typical lead time for prototype and production?</h4>
                            <p className="text-gray-700">Lead times vary based on complexity and component availability. For turnkey prototypes, our standard lead time is 2-3 weeks. Production lead times are typically 4-6 weeks. We also offer expedited options for urgent projects.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.2}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-illuminious-navy mb-2">Do you handle component sourcing?</h4>
                            <p className="text-gray-700">Yes, our full turnkey service includes all component procurement. We source from major authorized distributors like Digi-Key, Mouser, and Arrow to ensure authentic, high-quality parts. We can also work with customer-supplied (consigned) components.</p>
                        </div>
                    </AnimatedSection>
                    <AnimatedSection delay={0.3}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                            <h4 className="font-bold text-lg text-illuminious-navy mb-2">What testing do you perform on the assemblies?</h4>
                            <p className="text-gray-700">Our standard process includes visual inspection, AOI, and X-Ray (for BGAs). We strongly recommend and can perform In-Circuit Testing (ICT) and Functional Testing (FCT) to ensure your boards are 100% functional before shipment. We work with you to develop a test plan and fixture.</p>
                        </div>
                    </AnimatedSection>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Let's Build Your Next Product</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Ready to bring your design to life? Our team of experts is ready to help you with your next PCBA project. Send us your Gerber files and Bill of Materials (BOM) for a comprehensive quote within 24-48 hours.
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
