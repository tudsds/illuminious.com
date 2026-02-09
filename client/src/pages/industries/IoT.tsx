import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Factory, HardHat, ShieldCheck, Thermometer, Wrench, Wifi, Radio, Server, Battery, Cpu, Layers, TestTube2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "From Concept to Connected Reality" },
  { id: "capabilities", title: "Core IoT Competencies" },
  { id: "challenges", title: "Overcoming IoT Hurdles" },
  { id: "process", title: "Our NPI Process" },
  { id: "applications", title: "Industry Applications" },
  { id: "cta", title: "Start Your IoT Project" },
];

const capabilities = [
  { 
    icon: Wifi, 
    title: "Multi-Protocol Wireless Integration", 
    text: "We possess deep, hands-on expertise in integrating a vast array of wireless protocols. This includes not only standard Wi-Fi (802.11ac/ax) and Bluetooth (Classic & BLE 5.2) but also mesh networking technologies like Zigbee 3.0, Z-Wave 700 series, and Thread. Our engineers ensure seamless interoperability and build robust local networks for your devices." 
  },
  { 
    icon: Radio, 
    title: "LPWAN & Cellular Connectivity", 
    text: "For applications requiring long-range and low-power consumption, we are proficient in LoRaWAN, NB-IoT, and LTE-M/Cat-M1. We guide you through module selection, carrier certification (AT&T, Verizon, T-Mobile), and antenna tuning to optimize for signal penetration and battery life in challenging environments like dense urban areas or remote agricultural fields." 
  },
  { 
    icon: Battery, 
    title: "Advanced Power Management", 
    text: "Achieving multi-year battery life is critical for most IoT applications. Our process involves meticulous component selection, quiescent current analysis, and firmware-level optimizations. We design and implement power-saving modes, efficient sleep cycles, and select appropriate battery chemistries (Li-SOCl2, Li-Po) to meet your product's specific operational and longevity targets." 
  },
  { 
    icon: ShieldCheck, 
    title: "End-to-End Security Hardening", 
    text: "Security is not an afterthought. We implement a multi-layered security strategy including secure bootloaders, hardware cryptographic co-processors (e.g., ATECC608A), encrypted flash storage, and robust, signed Over-the-Air (OTA) firmware update mechanisms. This protects your devices, data, and customers from evolving cybersecurity threats." 
  },
  { 
    icon: Server, 
    title: "Cloud & Edge Integration", 
    text: "A connected device is only as good as its cloud backend. We ensure your devices are correctly provisioned with unique identities and credentials for secure onboarding to major platforms like AWS IoT Core, Azure IoT Hub, and Google Cloud IoT. We also have experience with edge computing frameworks for applications requiring low-latency local processing." 
  },
  { 
    icon: CircuitBoard, 
    title: "Expert RF & Antenna Design", 
    text: "Our in-house RF engineering team utilizes advanced simulation software (like CST or HFSS) and a dedicated RF anechoic chamber for design and testing. We specialize in custom antenna design, impedance matching, and performance optimization to maximize range and signal integrity, ensuring your product passes stringent FCC, CE, and IC regulatory certifications." 
  },
  { 
    icon: Cpu, 
    title: "Microcontroller & Sensor Integration", 
    text: "We work with a wide range of MCUs, from ultra-low-power ARM Cortex-M0+ cores to powerful Cortex-M7 processors for edge AI. We have extensive experience integrating diverse sensors, including accelerometers, gyroscopes, environmental sensors (temperature, humidity, pressure), and specialized sensors for medical and industrial applications, ensuring data accuracy and reliability." 
  },
  { 
    icon: Layers, 
    title: "Custom Enclosure & Mechanical Design", 
    text: "The physical enclosure is critical for durability and user experience. Our mechanical engineers design for manufacturability (DFM), considering factors like material selection (ABS, PC, ASA), IP ratings (e.g., IP67 for waterproofing), and thermal management. We use our in-house injection molding capabilities to create high-quality, cost-effective custom enclosures." 
  },
];

const manufacturingChallenges = [
    { 
        icon: TestTube2, 
        title: "RF Interference & Signal Integrity", 
        text: "In a compact IoT device, digital noise from processors and power supplies can easily corrupt sensitive RF signals. We mitigate this through careful PCB layout, using techniques like ground planes, via stitching, and controlled impedance traces to ensure your device maintains a clear and reliable wireless link."
    },
    { 
        icon: Thermometer, 
        title: "Miniaturization & Thermal Management", 
        text: "Packing powerful components into a small space creates significant thermal challenges. Overheating can lead to component failure and performance degradation. We use thermal simulation and practical design solutions, like heat sinks and proper ventilation, to ensure your device operates reliably within its specified temperature range."
    },
    { 
        icon: Wrench, 
        title: "Component Sourcing & Supply Chain Risk", 
        text: "The global electronics supply chain is complex and volatile. A single component shortage can halt production for months. We leverage our deep supplier relationships and proactive sourcing strategies to identify alternative parts and manage inventory, mitigating supply chain risks and ensuring production continuity for your product."
    },
    { 
        icon: HardHat, 
        title: "Durability & Environmental Hardening", 
        text: "Industrial and agricultural IoT devices must withstand extreme conditions, including shock, vibration, water ingress, and temperature swings. We achieve this through rugged enclosure design, conformal coating of PCBs to protect against moisture and contaminants, and rigorous environmental stress testing (EST) in our reliability lab."
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

export default function IndustryIoT() {
  return (
    <>
      <SEO
        title="Enterprise IoT Device Manufacturing & Engineering | Illuminious"
        description="End-to-end manufacturing partner for complex IoT and connected hardware. We specialize in wireless engineering, low-power design, security, and scalable production for enterprise-grade IoT solutions."
        keywords="iot device manufacturing, iot engineering, connected device manufacturing, wireless product design, low power iot, industrial iot, smart device factory"
        url="/industries/iot"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-smart-home-devices.jpg"
            alt="Abstract visualization of a global IoT network with interconnected nodes"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "IoT & Connected Devices" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading leading-tight">
                Enterprise IoT Manufacturing: From Silicon to Cloud
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                We are the high-integrity manufacturing and engineering partner that transforms your complex IoT vision into a secure, reliable, and scalable physical product. We build the backbone of the connected world.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b">
        <div className="container">
          <div className="flex justify-center overflow-x-auto -mx-4">
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
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">Engineering the Foundation of Your Connected Business</h2>
                <div className="space-y-6 text-illuminious-navy leading-relaxed text-lg">
                  <p>
                    The Internet of Things (IoT) represents a fundamental shift in business, turning inert products into intelligent, data-generating assets. However, the journey from a brilliant concept to a mass-produced, globally certified, and secure connected device is fraught with complexity. It demands a sophisticated fusion of hardware engineering, embedded systems development, wireless expertise, and world-class manufacturing—a combination that few can master.
                  </p>
                  <p>
                    At Illuminious, we are not just a contract manufacturer; we are your dedicated engineering and production partner. We thrive on this complexity. Our US-based engineering leadership, combined with our state-of-the-art factories in Shenzhen and Batam, provides a seamless, de-risked pathway to market. We engage early in the design process, applying rigorous Design for Manufacturing (DFM), Design for Assembly (DFA), and Design for Test (DFT) principles to ensure your product is not only innovative but also robust, cost-effective, and scalable.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_engineer-oscilloscope-pcb-testing.jpg" alt="An engineer meticulously inspecting a complex IoT motherboard with multiple chips and connectors" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Core IoT Competencies for End-to-End Product Success</h2>
              <p className="text-lg text-illuminious-sky leading-relaxed">
                We have cultivated a comprehensive suite of in-house capabilities specifically for the unique demands of IoT device production. This integrated approach ensures quality, accelerates timelines, and provides a single point of accountability from prototype to mass production.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <cap.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">{cap.title}</h3>
                    <p className="text-sm text-illuminious-sky leading-relaxed flex-grow">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Manufacturing Challenges Section */}
        <section id="challenges" className="py-24 bg-white">
            <div className="container">
                <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
                    <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Solving the Toughest IoT Manufacturing Hurdles</h2>
                    <p className="text-lg text-illuminious-sky leading-relaxed">
                        Building reliable IoT hardware is about proactively solving challenges before they impact production. Our engineering-led approach identifies and mitigates the most common and critical failure points in IoT device manufacturing.
                    </p>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 gap-12 items-start">
                    <div className="space-y-8">
                        {manufacturingChallenges.slice(0, 2).map((challenge, index) => (
                            <AnimatedSection key={challenge.title} delay={index * 0.1}>
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <challenge.icon className="w-6 h-6 text-illuminious-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-illuminious-navy mb-2 font-heading">{challenge.title}</h3>
                                        <p className="text-illuminious-sky leading-relaxed">{challenge.text}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                    <div className="space-y-8">
                        {manufacturingChallenges.slice(2, 4).map((challenge, index) => (
                            <AnimatedSection key={challenge.title} delay={index * 0.1 + 0.1}>
                                <div className="flex items-start gap-5">
                                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center flex-shrink-0 mt-1">
                                        <challenge.icon className="w-6 h-6 text-illuminious-blue" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-xl text-illuminious-navy mb-2 font-heading">{challenge.title}</h3>
                                        <p className="text-illuminious-sky leading-relaxed">{challenge.text}</p>
                                    </div>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/DEPLOYED_telco-img-1.jpg" alt="An IoT gateway inside a large anechoic chamber for precise RF performance and emissions testing" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">Our Structured IoT Product Launch Process</h2>
                    <div className="space-y-5 text-illuminious-navy leading-relaxed">
                        <p className="text-lg">
                            We de-risk your path to market with a phased New Product Introduction (NPI) process that emphasizes collaboration, validation, and preparation for scale.
                        </p>
                        <ul className="space-y-4 mt-4">
                            <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 1: Architecture Review & DFM:</strong> Our US-based engineers collaborate with your team to meticulously review your architecture, BOM, and schematics. We provide critical feedback to optimize for cost, reduce power consumption, improve RF performance, and ensure long-term component availability.</div></li>
                            <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 2: Prototyping & EVT/DVT:</strong> We manage rapid prototyping (PCBA and mechanicals) and conduct comprehensive Engineering Validation Testing (EVT) and Design Validation Testing (DVT). This includes functional testing, power analysis, and pre-certification RF testing in our own labs to catch issues early.</div></li>
                            <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 3: Certification & PVT:</strong> We manage the entire formal certification process with accredited third-party labs for FCC, IC, CE, PTCRB, and GCF. Following certification, we run a Production Validation Test (PVT) build on the actual production line to finalize assembly processes and quality control checks.</div></li>
                            <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 4: Mass Production & Provisioning:</strong> With all processes validated, we ramp to mass production. Each device is provisioned with unique security keys and credentials, flashed with final firmware, and undergoes end-of-line functional and connectivity testing before being packaged for global distribution.</div></li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Applications Section */}
        <section id="applications" className="py-24 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Proven Expertise Across Diverse IoT Verticals</h2>
              <p className="text-lg text-illuminious-sky leading-relaxed">
                Our robust manufacturing infrastructure and engineering expertise are applied across a wide spectrum of demanding industries, each with its own unique challenges and requirements.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="bg-illuminious-light/30 p-6 rounded-lg shadow-md"> 
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">Industrial & Smart Factory (IIoT)</h3>
                    <p className="text-illuminious-sky mb-4">Manufacturing rugged devices for condition monitoring, predictive maintenance, and asset tracking in harsh factory environments. Key challenges include high-reliability components, vibration resistance, and robust enclosure design.</p>
                    <ul className="text-sm text-illuminious-sky space-y-2"> 
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Vibration sensors for machinery</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>LoRaWAN-based asset trackers</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Environmental monitoring gateways</span></li>
                    </ul>
                </div>
                <div className="bg-illuminious-light/30 p-6 rounded-lg shadow-md"> 
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">Smart Home & Building Automation</h3>
                    <p className="text-illuminious-sky mb-4">High-volume manufacturing of aesthetically pleasing and cost-sensitive consumer devices. Focus on RF performance in crowded wireless environments, interoperability (Matter), and user-friendly design.</p>
                    <ul className="text-sm text-illuminious-sky space-y-2"> 
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>BLE/Thread motion and contact sensors</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Smart thermostats and lighting controls</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Water leak and smoke detectors</span></li>
                    </ul>
                </div>
                <div className="bg-illuminious-light/30 p-6 rounded-lg shadow-md"> 
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">Smart Agriculture & Environmental</h3>
                    <p className="text-illuminious-sky mb-4">Building ultra-low-power, long-range devices for outdoor deployment. Requires expertise in IP-rated waterproof enclosures, UV-resistant materials, and optimizing battery life for years of unattended operation.</p>
                    <ul className="text-sm text-illuminious-sky space-y-2"> 
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Soil moisture and nutrient sensors</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Livestock tracking and health monitors</span></li>
                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-illuminious-blue" /><span>Weather stations and water level sensors</span></li>
                    </ul>
                </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">Have a Complex IoT Challenge?</h2>
              <p className="text-lg text-white/80 max-w-3xl mx-auto mb-8 leading-relaxed">
                Don't let manufacturing hurdles derail your innovation. Our team of experienced IoT engineers and manufacturing specialists is ready to discuss your project, from early-stage design to high-volume production. Let's build the future, together.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-10 py-6 text-lg">
                <Link href="/contact">
                  Schedule a Consultation with an IoT Specialist
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

