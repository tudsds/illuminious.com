import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Microscope, Layers, Cpu, Shield, Settings, Zap, Gem } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "Robust THT Assembly" },
  { id: "capabilities", title: "Our THT Capabilities" },
  { id: "process", title: "The THT Assembly Process" },
  { id: "quality", title: "Quality & Standards" },
  { id: "tech-specs", title: "Technical Specifications" },
  { id: "cta", title: "Start Your Project" },
];

const capabilities = [
  {
    icon: Cpu,
    title: "Automated Component Insertion",
    text: "Our facilities are equipped with high-speed Universal Instruments VCD axial inserters and radial sequencers. These machines provide exceptional precision for standard leaded components like resistors and capacitors, ensuring consistent placement accuracy and soldering quality at scale, which is critical for high-volume production runs.",
  },
  {
    icon: Layers,
    title: "Advanced Wave & Selective Soldering",
    text: "We operate multiple ERSA and Pillarhouse selective and dual-wave soldering systems. This allows us to process both high-volume through-hole boards and complex, mixed-technology boards with precision, creating strong, reliable solder joints that meet IPC Class 3 standards for hole-fill and fillet formation.",
  },
  {
    icon: Factory,
    title: "Skilled Manual & Semi-Automated Assembly",
    text: "For components that cannot be automated, such as custom connectors, transformers, and unique mechanical parts, our team of IPC-A-610 certified technicians performs meticulous manual assembly. This human element is crucial for ensuring the integrity of complex and high-value assemblies.",
  },
  {
    icon: Microscope,
    title: "Comprehensive Post-Solder Inspection",
    text: "Quality is verified through a multi-stage inspection process. This includes high-resolution Automated Optical Inspection (AOI) with Mirtec systems to detect soldering defects, followed by 100% manual visual inspection by certified technicians to ensure perfect component seating, polarity, and solder joint quality.",
  },
  {
    icon: Shield,
    title: "Conformal Coating & Potting Services",
    text: "To protect assemblies from moisture, dust, and harsh environmental factors, we offer automated and manual application of various conformal coatings (acrylic, silicone, urethane) and potting compounds. This service is essential for products deployed in industrial, automotive, or outdoor environments.",
  },
  {
    icon: Settings,
    title: "Press-Fit & Mechanical Integration",
    text: "Our capabilities extend beyond soldering. We have extensive experience with press-fit (compliant pin) connector installation, which creates a robust, solder-free connection. We also handle complex final mechanical assembly, including housings, heatsinks, and custom hardware integration.",
  },
  {
    icon: Zap,
    title: "In-Circuit & Functional Testing (ICT/FCT)",
    text: "We develop and execute comprehensive test strategies to validate board performance. Using custom-built fixtures, we perform both In-Circuit Testing to verify component-level integrity and Functional Testing to ensure the final assembly operates exactly as designed.",
  },
  {
    icon: Gem,
    title: "Lead-Free (RoHS) & Leaded Processes",
    text: "We support both traditional tin-lead and modern lead-free (RoHS compliant) soldering processes, with dedicated equipment for each to prevent cross-contamination. We can advise on the best process for your product based on its end-market and reliability requirements.",
  },
];

const processSteps = [
  {
    name: "Step 1: Component Preparation & Kitting",
    description: "The process begins with a thorough verification of all incoming components against your Bill of Materials (BOM). Component leads are then precisely trimmed and formed to the required specifications using automated equipment like the Hepco 1500-3 lead former. This ensures a perfect fit into the PCB and prepares them for either automated or manual insertion.",
  },
  {
    name: "Step 2: Automated & Manual Insertion",
    description: "Standard axial and radial components are rapidly placed using our automated insertion machines. For odd-form components, connectors, and other delicate parts, our highly trained technicians manually place each item with care, referencing detailed assembly drawings to ensure correct orientation and seating.",
  },
  {
    name: "Step 3: Soldering (Wave or Selective)",
    description: "Boards are then moved to our soldering stage. For full through-hole boards, a dual-wave soldering process is used, ensuring complete hole-fill. For mixed-technology boards, our selective soldering systems apply solder with robotic precision only to the required THT joints, protecting nearby SMT components from thermal stress.",
  },
  {
    name: "Step 4: Cleaning & Defluxing",
    description: "After soldering, boards are passed through an aqueous cleaning system. This critical step removes any harmful flux residues that could otherwise lead to corrosion or electrical failures in the field. We monitor water purity and chemical concentrations to ensure military-grade cleanliness on every board.",
  },
  {
    name: "Step 5: Inspection, Touch-Up & Trimming",
    description: "Every solder joint is meticulously inspected. Automated Optical Inspection (AOI) first scans for common defects, followed by a comprehensive visual check by IPC-certified inspectors. Any necessary touch-ups are performed by hand, and component leads are trimmed to the required length.",
  },
  {
    name: "Step 6: Final Assembly & Testing",
    description: "The fully assembled PCB is now ready for the next stage. This may involve integration into a larger mechanical assembly, programming (firmware flashing), or proceeding directly to In-Circuit and Functional Testing to verify that the board performs exactly to your specifications before it is packaged and shipped.",
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

export default function ServiceThroughHole() {
  return (
    <>
      <SEO
        title="Through-Hole Assembly Services | THT PCB Assembly | Illuminious"
        description="Expert through-hole (THT) PCB assembly services for robust electronics. We offer automated insertion, wave/selective soldering, and IPC Class 3 workmanship for industrial, automotive, and high-power applications."
        keywords="through-hole assembly, THT assembly, PCB assembly, wave soldering, selective soldering, manual assembly, electronics manufacturing, IPC Class 3, press-fit"
        url="/services/through-hole"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-pcba-selective-solder-29.jpg"
            alt="Automated through-hole assembly line in operation"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb
            items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Through-Hole Assembly" },
            ]}
          />
          <div className="max-w-3xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Through-Hole Technology (THT) Assembly
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Engineering strength and reliability into every connection. Our THT assembly services are the gold standard for high-power, high-reliability, and mechanically demanding electronic applications.
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
                className="px-4 py-3 text-sm font-medium text-illuminious-sky hover:text-illuminious-blue transition-colors whitespace-nowrap"
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Strength and Reliability in Every Solder Joint</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    In an industry dominated by miniaturization, Through-Hole Technology (THT) stands as a testament to enduring strength and reliability. While Surface Mount Technology (SMT) is ideal for density, THT is the premier choice for applications where mechanical robustness and high power-handling capabilities are non-negotiable. At Illuminious, we have refined our THT processes over decades, integrating modern automation and stringent quality controls to deliver assemblies that provide unparalleled durability and long-term performance in the most demanding environments.
                  </p>
                  <p>
                    The fundamental principle of THT involves inserting component leads through drilled holes in the printed circuit board (PCB). These leads are then soldered on the opposite side, creating a physical bond that is vastly superior to a surface-level SMT connection. This makes THT indispensable for large, heavy components such as transformers, electrolytic capacitors, and power resistors, as well as for any connector that will face repeated physical stress from mating and de-mating cycles. This robust connection ensures that components remain securely fastened, even when subjected to shock, vibration, or thermal cycling.
                  </p>
                  <p>
                    Our dedicated THT assembly lines in Shenzhen and Batam represent a hybrid manufacturing philosophy. We leverage high-speed automated insertion for standard components to ensure consistency and efficiency, while our IPC-certified technicians perform intricate manual assembly for complex or odd-form parts. This blended approach allows us to optimize for both speed and precision, guaranteeing that your product is built to withstand its operational demands. For critical applications in the industrial, aerospace, automotive, and power electronics sectors, failure is not an option. That is why we rigorously adhere to IPC-A-610 Class 3 standards, the highest benchmark for high-performance electronics.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-pcba-through-hole-17.jpg" alt="Close-up of robust through-hole capacitors on a PCB" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our THT Capabilities</h2>
              <p className="text-lg text-illuminious-sky">
                We offer a comprehensive suite of through-hole assembly services, from automated insertion to complex manual assembly, all governed by strict process controls and IPC Class 3 standards to ensure maximum product reliability.
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
                    <p className="text-sm text-illuminious-sky flex-grow">{cap.text}</p>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">The THT Assembly Process: A Blend of Automation and Craftsmanship</h2>
              <p className="text-lg text-illuminious-sky">
                Our six-step THT process is meticulously designed and controlled, combining the speed of automation with the precision of skilled handwork to deliver consistently high-quality results that you can depend on.
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
                          <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-illuminious-sky ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg shadow-lg">
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
        <section id="quality" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-pcba-wave-solder-34.jpg" alt="Inspector examining a PCB solder joint under a microscope" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Committed to IPC-A-610 Class 3 Workmanship</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    For high-performance products where reliability is paramount, meeting the IPC-A-610 Class 3 standard is essential. This is the highest level of workmanship for electronics, reserved for applications like aerospace, military, and medical devices where failure can have critical consequences. At Illuminious, Class 3 is our default standard for all THT assembly work, ensuring your product is built for maximum durability and performance from the very start.
                  </p>
                  <ul className="space-y-3 mt-4">
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        <strong>100% Hole-Fill Requirement:</strong> We ensure that solder flows completely through the plated through-hole, creating a strong, continuous connection from the top to the bottom of the board. This is a key differentiator of Class 3 and provides superior mechanical strength.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Certified Technicians & Process Control:</strong> All our manual assembly and inspection technicians are certified to IPC-A-610 standards. We precisely control all wave and selective soldering parameters—such as pre-heat temperature, conveyor speed, and solder wave height—to ensure perfect, repeatable results.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <span>
                        <strong>Rigorous Inspection & Validation:</strong> We utilize a combination of AOI and 100% visual inspection by certified technicians to verify every aspect of the assembly, including component polarity, seating, and the formation of perfect solder fillets. This guarantees adherence to the strict Class 3 criteria.
                      </span>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
              <p className="text-lg text-illuminious-sky">
                Our THT assembly lines are configured to handle a wide range of components and board specifications with precision and care, adhering to the industry's most stringent standards.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="max-w-4xl mx-auto bg-illuminious-light/30 rounded-xl shadow-lg p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-4 text-lg">Soldering & Assembly</h4>
                    <ul className="space-y-3 text-illuminious-navy">
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Soldering Process: Wave, Selective, Manual</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Solder Types: Leaded (Sn63Pb37) & Lead-Free (SAC305)</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Max Board Size: 500mm x 450mm</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Min Component Pitch: 0.5mm for connectors</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Component Types: Axial, Radial, DIP, Connectors, Transformers</span></li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold text-illuminious-navy mb-4 text-lg">Quality & Inspection</h4>
                    <ul className="space-y-3 text-illuminious-navy">
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Quality Standard: IPC-A-610 Class 2 & Class 3</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Inspection: AOI, X-Ray (for BGA), Visual Inspection</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Testing: ICT, FCT, Burn-in Testing</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Cleaning: Aqueous Defluxing System</span></li>
                      <li className="flex items-center"><CheckCircle className="w-5 h-5 text-illuminious-blue mr-2" /><span>Certifications: ISO 9001:2015, IATF 16949 (Automotive)</span></li>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Build Your Most Demanding Products?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Whether your project is fully through-hole or a complex mixed-technology design, our team has the expertise and equipment to deliver assemblies with unmatched reliability. Contact us today to discuss your project requirements and receive a detailed quote.
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

