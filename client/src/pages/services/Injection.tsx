import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Wrench, Layers, Cog, Droplets, Microscope, ShieldCheck, Scaling } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Precision at Scale",
  },
  {
    id: "capabilities",
    title: "Molding & Tooling Capabilities",
  },
  {
    id: "process",
    title: "Our Integrated Process",
  },
  {
    id: "materials",
    title: "Materials & Finishes",
  },
  {
    id: "quality",
    title: "Quality Assurance",
  },
  {
    id: "specifications",
    title: "Technical Specifications",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Cog, title: "Advanced Mold Design & DFM", text: "Our engineering team conducts exhaustive Design for Manufacturability (DFM) analysis, including mold flow simulation, to optimize part geometry, minimize cosmetic defects, and ensure robust, efficient tooling. We design for longevity, using conformal cooling channels and optimized runner systems to reduce cycle times and improve part quality." },
  { icon: Wrench, title: "Complex Tooling Manufacturing", text: "We build high-precision, hardened steel molds for every need, from single-cavity prototype tools (Class 104) to high-cavitation, fully automated production molds (Class 101) rated for over one million cycles. Our expertise covers complex actions, slides, lifters, and hot runner systems." },
  { icon: Layers, title: "Insert & Overmolding Expertise", text: "We specialize in complex multi-material molding. This includes insert molding, where metal components like threaded inserts or electrical contacts are precisely placed in the mold before injection, and two-shot or multi-shot overmolding, which bonds different polymers to create parts with rigid and soft-touch areas." },
  { icon: Scaling, title: "High-Volume, Automated Production", text: "Our smart factories in Shenzhen and Batam are equipped with a fleet of modern, all-electric injection molding presses ranging from 50 to 1000 tons of clamping force. We leverage robotics and automated part handling to run high-volume production 24/7 with maximum efficiency and consistency." },
  { icon: Droplets, title: "Scientific & Decoupled Molding", text: "We employ RJG-certified Master Molders who utilize scientific and decoupled molding principles. By separating the fill, pack, and hold phases of the injection process, we establish a wide processing window, ensuring exceptional shot-to-shot consistency and minimizing variation, regardless of environmental factors." },
  { icon: Microscope, title: "Micro & Thin-Wall Molding", text: "For applications demanding extreme precision and miniaturization, we offer micro-molding capabilities for parts weighing less than a gram. We also excel at thin-wall molding, producing strong, lightweight parts with wall thicknesses as low as 0.5mm, ideal for portable electronics and medical devices." },
  { icon: ShieldCheck, title: "Cleanroom Molding", text: "For medical and optical components, we provide certified Class 100,000 (ISO 8) cleanroom molding environments. This controlled environment minimizes particulate contamination, ensuring the purity and integrity required for sensitive applications." },
  { icon: CheckCircle, title: "Value-Add Secondary Operations", text: "Beyond molding, we offer a complete suite of in-house secondary and finishing services. This includes CNC machining, pad printing, laser engraving, ultrasonic welding, heat staking, and complex sub-assembly and final product assembly, providing a true turnkey manufacturing solution." },
];

const processSteps = [
  { name: "1. RFQ & DFM Analysis", description: "The process begins with your Request for Quote (RFQ) and 3D CAD files. Our engineers perform a complimentary, in-depth DFM analysis, identifying potential issues with draft angles, wall thickness, undercuts, and material selection to prevent costly tool modifications later." },
  { name: "2. Mold Design & Flow Simulation", description: "Upon project kickoff, we create a detailed 3D mold design. We use advanced mold flow simulation software to predict how the plastic will fill the cavity, allowing us to optimize gate locations, runner systems, and cooling channels for minimal defects and the fastest possible cycle time." },
  { name: "3. Tooling Fabrication", description: "Your mold is manufactured in our state-of-the-art toolroom using high-speed CNC machining, EDM, and wire EDM processes. We use high-quality tool steels like P20, H13, and S136, which are heat-treated for maximum durability and polished to your specified surface finish." },
  { name: "4. T1 Sample & FAI", description: "We conduct the first tool trial (T1) and produce the first batch of samples. These parts undergo a rigorous First Article Inspection (FAI), where we measure every dimension against your CAD data using CMM and other metrology tools. We provide a detailed FAI report for your review and approval." },
  { name: "5. Process Optimization & Validation", description: "Using scientific molding principles, our process engineers establish the optimal and most stable molding parameters. We perform process capability studies (Cpk) and a full Production Part Approval Process (PPAP) to validate that our process will consistently produce parts that meet your quality standards." },
  { name: "6. Mass Production & Quality Control", description: "Once the process is validated and approved, we launch full-scale mass production. In-process quality control checks are performed at regular intervals, and automated vision systems monitor parts for cosmetic defects, ensuring consistent quality throughout the entire production run." },
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

export default function ServiceInjection() {
  return (
    <>
      <SEO
        title="Advanced Plastic Injection Molding & Tooling | Illuminious"
        description="Turnkey plastic injection molding services for high-volume production. We offer advanced mold design, tooling fabrication, scientific molding, and full assembly for complex plastic components. US-managed, global manufacturing."
        keywords="Plastic injection molding, injection tooling, mold making, scientific molding, overmolding, insert molding, contract manufacturing, electronics manufacturing, medical molding"
        url="/services/injection-molding"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-injection-mold-design-33.jpg"
            alt="A row of injection molding machines in a clean factory environment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Injection Molding & Tooling" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Plastic Injection Molding & Tooling
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Engineering-driven solutions for high-precision plastic components. We are your end-to-end partner for complex tooling, high-volume production, and full product assembly.
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
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Precision Plastic Manufacturing at Scale</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Plastic injection molding is the core manufacturing process for producing vast quantities of identical plastic parts with exceptional precision and speed. The process involves injecting molten plastic resin under high pressure into a custom-made mold, or 'tool'. The quality, performance, and cost of your final product are directly tied to the expertise invested in the mold's design and the scientific precision of the molding process. A robust, well-engineered mold is a critical asset, capable of producing millions of flawless parts over its lifetime.
                  </p>
                  <p>
                    At Illuminious, we are vertically integrated manufacturing experts, not just a molding provider. We own and operate our own advanced toolrooms, giving us—and you—unparalleled control over the entire lifecycle of your tooling asset. This integration of mold design, fabrication, and production under one roof is our key differentiator. Our US-based engineering team collaborates directly with our factory teams to execute a seamless process, from initial Design for Manufacturability (DFM) to stable, high-volume mass production.
                  </p>
                   <p>
                    This holistic approach eliminates the communication gaps and quality issues that often arise when working with separate design houses, toolmakers, and molding factories. We take full responsibility for the performance of your mold and the quality of your parts. Our commitment to scientific molding principles ensures that once a process is established, it remains stable and repeatable, delivering consistent, high-quality components from the first shot to the millionth.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-injection-molding-ai-necklace-08.jpg" alt="Engineer technician inspecting a complex injection mold" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">End-to-End Molding & Tooling Capabilities</h2>
              <p className="text-xl text-gray-600">
                From complex micro-molding to large-format components, our vertically integrated services provide a complete solution for your plastic manufacturing needs.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-8 rounded-lg shadow-lg text-left h-full border border-gray-200 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-16 h-16 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5">
                      <cap.icon className="w-8 h-8 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">{cap.title}</h3>
                    <p className="text-base text-gray-600 leading-relaxed">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Our Integrated Tooling & Molding Process</h2>
              <p className="text-xl text-gray-600">
                A transparent, collaborative, and engineering-driven process that guarantees quality and efficiency from initial design to final production.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative border-l-2 border-illuminious-blue/20">
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-16 pl-12">
                     <div className="absolute left-0 top-0 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold ring-8 ring-white">
                      {index + 1}
                    </div>
                    <AnimatedSection delay={index * 0.1}>
                      <h3 className="text-2xl font-bold mb-3 font-heading text-illuminious-navy">{step.name}</h3>
                      <p className="text-gray-600 leading-relaxed text-lg">{step.description}</p>
                    </AnimatedSection>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Materials & Finishes Section */}
        <section id="materials" className="py-24 bg-gray-50">
          <div className="container">
             <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Material Selection & Surface Finishing</h2>
              <p className="text-xl text-gray-600">
                The right combination of resin and finish is critical for product performance and aesthetics. Our experts guide you through the vast landscape of available options.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 gap-16 items-start">
              <AnimatedSection>
                <h3 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Engineering & Commodity Resins</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">We mold hundreds of different thermoplastic resins. Our materials engineers help you select the optimal material based on factors like mechanical strength, chemical resistance, temperature exposure, UV stability, and cost. We have extensive experience with both common and highly specialized polymers.</p>
                <div className="columns-2 space-y-2">
                  {[
                    { name: 'ABS', desc: 'Good toughness & impact strength' },
                    { name: 'PC', desc: 'High impact & temperature resistance' },
                    { name: 'PP', desc: 'Excellent chemical resistance, flexible' },
                    { name: 'Nylon (PA6, PA66)', desc: 'High mechanical strength & wear resistance' },
                    { name: 'POM (Delrin)', desc: 'High stiffness, low friction' },
                    { name: 'PMMA (Acrylic)', desc: 'Excellent optical clarity' },
                    { name: 'HDPE/LDPE', desc: 'Low cost, high flexibility' },
                    { name: 'TPE/TPU', desc: 'Rubber-like flexibility, for overmolding' },
                    { name: 'PC/ABS Alloy', desc: 'Best of both, tough and strong' },
                    { name: 'PEEK', desc: 'Very high temp & chemical resistance' },
                    { name: 'ULTEM (PEI)', desc: 'High strength and flame retardant' },
                    { name: 'Glass-Filled Variants', desc: 'For increased stiffness & stability' },
                  ].map(mat => (
                    <div key={mat.name} className="bg-white border rounded-md p-2 text-sm text-gray-700 break-inside-avoid-column">
                      <span className="font-bold">{mat.name}:</span> {mat.desc}
                    </div>
                  ))}
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h3 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">In-Mold & Post-Process Finishes</h3>
                <p className="text-gray-700 mb-6 leading-relaxed text-lg">We provide a complete range of surface finishes to achieve your desired cosmetic appearance, from textured surfaces created directly in the mold to a variety of post-processing applications.</p>
                <ul className="space-y-4 text-gray-700 text-lg">
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>SPI Standard Finishes:</strong> From A-1 (mirror polish) to D-3 (dull matte), we can achieve any standard SPI surface finish directly from the mold.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>VDI/Mold-Tech Textures:</strong> We can apply thousands of standard textures, from light grains to heavy leather patterns, via chemical etching of the mold cavity.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Painting, Printing & Coating:</strong> Multi-coat painting (including EMI/RFI shielding), pad printing for logos, silk screening for graphics, and specialized coatings like soft-touch (haptic) and UV-resistant clear coats.</span></li>
                  <li className="flex items-start"><CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" /><span><strong>Laser Etching & Engraving:</strong> For precise, permanent marking of serial numbers, logos, or text after molding.</span></li>
                </ul>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Quality Section */}
        <section id="quality" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
               <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-technician-inspecting-mold.jpg" alt="Quality engineer using a CMM machine in a metrology lab" />
                </div>
              </AnimatedSection>
              <AnimatedSection>
                <h2 className="text-4xl font-bold text-illuminious-navy mb-6 font-heading">Commitment to Quality</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Quality is not just a final inspection; it's a philosophy embedded in our entire process. Our factories are ISO 9001:2015 certified, and we employ a multi-stage quality assurance protocol to guarantee that every part we ship meets or exceeds your specifications. Our quality management system (QMS) ensures traceability and accountability from raw material verification to final packaging.
                  </p>
                  <p>
                    We utilize advanced metrology equipment, including Coordinate Measuring Machines (CMMs), vision systems, and color spectrophotometers, to precisely measure and validate parts. Statistical Process Control (SPC) is used to monitor the stability of our molding process in real-time, allowing us to detect and correct any deviations before they result in non-conforming parts. This data-driven approach to quality ensures consistency and minimizes waste.
                  </p>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section id="specifications" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
              <p className="text-xl text-gray-600">
                Our facilities are equipped to handle a wide range of project requirements with precision and reliability.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-xl border overflow-hidden">
                <table className="w-full text-left text-lg">
                  <thead className="bg-gray-100">
                    <tr>
                      <th className="p-6 font-bold text-illuminious-navy">Feature</th>
                      <th className="p-6 font-bold text-illuminious-navy">Specification</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200">
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Press Tonnage</td><td className="p-6 text-gray-600">50 to 1000 Tons Clamping Force</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Shot Size</td><td className="p-6 text-gray-600">0.5g to 5,000g</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Standard Tolerances</td><td className="p-6 text-gray-600">+/- 0.1mm (0.004 in), with tighter tolerances possible upon review</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Tooling Lead Time</td><td className="p-6 text-gray-600">Rapid Tooling: 2-4 weeks | Production Tooling: 4-10 weeks</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Tool Steel Types</td><td className="p-6 text-gray-600">P20, NAK80, H13, S136 (Hardened Stainless)</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Quality Certifications</td><td className="p-6 text-gray-600">ISO 9001:2015, IATF 16949 (in progress), ISO 13485 (in progress)</td></tr>
                    <tr className="hover:bg-gray-50 transition-colors duration-200"><td className="p-6 font-medium text-gray-800">Data Exchange</td><td className="p-6 text-gray-600">STEP, IGES, X_T, SLDPRT, DWG, DXF</td></tr>
                  </tbody>
                </table>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Start Your Next Molding Project</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Ready to bring your plastic component to production? Send our engineering team your 3D files for a complimentary DFM analysis and a comprehensive quote for tooling and mass production.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-10 py-6 text-lg font-bold">
                <Link href="/contact">
                  Request a Quote
                  <ArrowRight className="w-6 h-6 ml-3" />
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
