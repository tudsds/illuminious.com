import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Factory, ShieldCheck, Thermometer, Users, Wrench, Zap, Microscope, Route } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "Manufacturing for the Road Ahead" },
  { id: "capabilities", title: "Automotive Capabilities" },
  { id: "products", title: "Automotive Systems We Build" },
  { id: "quality", title: "Uncompromising Quality & Compliance" },
  { id: "cta", title: "Start Your Automotive Project" },
];

const capabilities = [
  {
    icon: Factory,
    title: "IATF 16949 Certified Facilities",
    text: "Our factories in Shenzhen and Batam are fully certified to the IATF 16949:2016 standard. This isn't just a plaque on the wall; it's a rigorous quality management system that governs every aspect of our operation, from initial client engagement to final product shipment, ensuring world-class process control, continuous improvement, and defect prevention. This certification is the global automotive industry's benchmark for excellence."
  },
  {
    icon: Users,
    title: "Dedicated PPAP & APQP Engineers",
    text: "We provide comprehensive support for the Production Part Approval Process (PPAP) and Advanced Product Quality Planning (APQP). Our dedicated quality engineers, fluent in English and Mandarin, manage all 18 elements of the PPAP submission, including Process Flow Diagrams, FMEAs, Control Plans, and Measurement System Analysis (MSA), ensuring a smooth and compliant product launch for our automotive clients."
  },
  {
    icon: Wrench,
    title: "Automated Assembly & Robotics",
    text: "We leverage state-of-the-art automation to achieve the precision and repeatability essential for automotive electronics. Our lines feature Fuji NXT III SMT machines for high-speed placement of components down to 01005, 3D Automated Optical Inspection (AOI) from Koh Young, and 3D Solder Paste Inspection (SPI) to eliminate defects before they occur. Robotic arms handle delicate assembly tasks, ensuring consistent quality and throughput."
  },
  {
    icon: ShieldCheck,
    title: "Functional Safety (ISO 26262) Support",
    text: "As vehicles become more autonomous, functional safety is paramount. We understand the requirements of ISO 26262 and can implement manufacturing and testing processes to support your target Automotive Safety Integrity Level (ASIL). This includes enhanced traceability, specific process controls, and documented evidence to help you certify your safety-critical systems."
  },
  {
    icon: CircuitBoard,
    title: "Complex Automotive PCBA",
    text: "Modern automotive systems rely on incredibly dense and complex Printed Circuit Board Assemblies. We specialize in high-layer count PCBs, rigid-flex designs for tight spaces, boards with heavy copper for high-power applications like motor controllers, and advanced thermal management techniques such as thermal vias and insulated metal substrates (IMS). Our expertise covers BGA, QFN, and other complex packages, verified by 2D and 3D X-ray inspection."
  },
  {
    icon: Thermometer,
    title: "Harsh Environment Validation",
    text: "Automotive electronics must survive years of extreme temperatures, vibration, and humidity. Our in-house reliability lab performs critical environmental testing, including thermal shock (e.g., -40°C to +125°C cycles), random and sinusoidal vibration testing, humidity chamber testing, and Highly Accelerated Life Testing (HALT) to identify design weaknesses and validate product robustness long before mass production."
  },
  {
    icon: Zap,
    title: "Power & RF Electronics Expertise",
    text: "The transition to EVs and connected cars requires deep expertise in power and radio-frequency (RF) electronics. We manufacture on-board chargers (OBCs), battery management systems (BMS), and DC-DC converters, managing challenges like high voltage isolation and thermal dissipation. We also produce telematics and V2X modules, with capabilities for RF shield installation and final unit RF testing."
  },
  {
    icon: Microscope,
    title: "Advanced Inspection & Traceability",
    text: "Our zero-defect philosophy is backed by a multi-layered inspection strategy and a robust Manufacturing Execution System (MES). Beyond AOI and SPI, we utilize flying probe and in-circuit testing (ICT) for comprehensive electrical verification. Our MES provides component-level traceability, linking every critical part back to its original reel and lot number, which is essential for containment and analysis in the rare event of a field failure."
  },
];

const productExamples = [
    { 
        name: "Advanced Driver-Assistance Systems (ADAS)",
        desc: "Manufacturing sensor fusion modules that process data from cameras, radar, and LiDAR. Requires precise, automated assembly and calibration of high-frequency components to ensure the reliability of safety-critical functions like autonomous emergency braking and lane-keeping assist."
    },
    { 
        name: "Battery Management Systems (BMS) for EVs",
        desc: "Assembling the electronic brain of an EV battery pack. This involves high-voltage PCB assembly techniques, stringent cleanliness standards to prevent dendritic growth, and 100% functional testing of cell monitoring and balancing circuits to ensure battery safety and longevity."
    },
    { 
        name: "In-Vehicle Infotainment (IVI) & Digital Cockpits",
        desc: "Building the high-resolution displays and powerful processing units for modern digital dashboards and center consoles. Key challenges include managing heat from powerful GPUs, ensuring optical bonding quality for displays, and testing for seamless connectivity (Bluetooth, Wi-Fi, Cellular)."
    },
    { 
        name: "Engine/Body Control Modules (ECU/BCM)",
        desc: "Producing the core controllers that manage everything from engine performance to power windows. These products require robust assembly to withstand engine vibration and extreme temperatures, often involving conformal coating to protect against moisture and contaminants."
    },
    { 
        name: "On-Board Chargers (OBC) & EVSE Controllers",
        desc: "Manufacturing the power electronics for charging electric vehicles. This is a high-power application requiring expertise in assembling large magnetic components, heavy copper PCBs, and ensuring all high-voltage isolation and safety standards are met and verified through Hipot testing."
    },
    { 
        name: "LED Lighting & Matrix Headlight Modules",
        desc: "Assembling complex LED driver boards and control modules for adaptive headlights. This requires excellent thermal management using IMS or metal-core PCBs and precise control of LED binning to ensure consistent brightness and color temperature across the final product."
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

export default function IndustryAutomotive() {
  return (
    <>
      <SEO
        title="Automotive Electronics Manufacturing Services | IATF 16949 Certified"
        description="Illuminious is your trusted partner for IATF 16949 certified automotive electronics manufacturing. We provide full PPAP/APQP support, automated assembly, and harsh environment testing for ADAS, EV, and infotainment systems. Mitigate risk with our non-China supply chain options."
        keywords="automotive electronics manufacturing, iatf 16949, automotive pcb assembly, ppap, adas manufacturing, ev electronics, functional safety, iso 26262, non-china automotive supplier"
        url="/industries/automotive"
      />
      <Header />

      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_hero-global-supply-chain.jpg"
            alt="A brightly lit, modern SMT production line with robotic arms assembling automotive electronic components"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Automotive" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading tracking-tight">
                Engineering the Future of Mobility
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                We provide IATF 16949 certified electronics manufacturing for the most demanding automotive applications. From safety-critical ADAS to high-voltage EV systems, we deliver zero-defect reliability at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex justify-center overflow-x-auto -mx-4">
            {pageSections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="px-4 py-3 text-sm font-medium text-gray-600 hover:text-illuminious-blue transition-colors whitespace-nowrap">
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Manufacturing for the Software-Defined Vehicle</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    The automotive industry is experiencing its most significant transformation in a century. The convergence of electrification, autonomous driving, and seamless connectivity has turned the modern vehicle into a powerful, software-defined electronic system on wheels. This paradigm shift places immense pressure on the underlying hardware, demanding unprecedented levels of quality, reliability, and computational performance that consumer electronics standards simply cannot meet.
                  </p>
                  <p>
                    At Illuminious, we are purpose-built for this new automotive era. We are not a broker or a trading company; we are a US-managed contract manufacturer with our own IATF 16949 certified factories. We understand that in the automotive world, there is no room for error. A single component failure can have catastrophic consequences, making a zero-defect manufacturing philosophy not just a goal, but a license to operate. This is why our entire process is built on a foundation of proactive quality planning, rigorous process control, and 100% traceability.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-automotive-dashboard-electronics.jpg" alt="An engineer in a blue anti-static coat meticulously inspecting a complex automotive PCB with multiple connectors" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Automotive-Grade Manufacturing Capabilities</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                An integrated suite of services designed to meet the stringent quality, reliability, and documentation requirements of Tier 1 suppliers and innovative automotive startups.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5 flex-shrink-0">
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

        <section id="products" className="py-24 bg-white">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Automotive Systems We Build</h2>
                    <p className="text-xl text-gray-600 leading-relaxed">
                        We have extensive experience manufacturing a wide range of critical electronic systems that form the backbone of modern vehicles.
                    </p>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {productExamples.map((item, index) => (
                        <AnimatedSection key={item.name} delay={index * 0.1}>
                            <div className="bg-gray-50/70 p-6 rounded-lg h-full border border-gray-200/80">
                                <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">{item.name}</h3>
                                <p className="text-sm text-gray-600">{item.desc}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        <section id="quality" className="py-24 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/DEPLOYED_placeholder-automotive-production-line.jpg" alt="A close-up of an IATF 16949 certificate alongside a diagram of a quality control process" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">A Culture of Zero-Defect Quality</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                            For our automotive partners, quality is non-negotiable, and our entire operation reflects this. Our IATF 16949 certification is the foundation, but our commitment goes deeper. We foster a culture of proactive risk mitigation and continuous improvement, where every team member is empowered to ensure the highest standards are met.
                        </p>
                        <ul className="space-y-4 mt-4 text-base">
                            <li className="flex items-start gap-3"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Proactive Risk Management:</strong> We use Failure Mode and Effects Analysis (FMEA) extensively during the APQP phase to identify potential risks in both product design (DFMEA) and manufacturing processes (PFMEA) and implement robust controls to mitigate them.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Data-Driven Process Control:</strong> We implement Statistical Process Control (SPC) on critical-to-quality (CTQ) parameters. This allows us to monitor processes in real-time, ensuring they remain stable and capable, preventing defects before they can ever occur.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Supply Chain Control:</strong> Our quality systems extend to our supply chain. We maintain an approved vendor list (AVL) and conduct rigorous incoming quality control (IQC) on all components, verifying authenticity and preventing counterfeit parts from ever entering our production lines.</span></li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="cta" className="py-24 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Drive Your Automotive Project Forward</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Partner with a manufacturer that understands the rigors of the automotive industry. Contact our automotive specialists to discuss your project requirements, from PPAP to mass production, and learn how our IATF 16949 certified facilities can accelerate your time to market while ensuring total reliability.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-10 py-7 text-lg font-semibold">
                <Link href="/contact">
                  Speak with an Automotive Specialist
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
