import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Factory, HardHat, ShieldCheck, Thermometer, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Forged in Fire",
  },
  {
    id: "capabilities",
    title: "Industrial Capabilities",
  },
  {
    id: "quality",
    title: "Uncompromising Quality",
  },
  {
    id: "lifecycle",
    title: "Lifecycle Partnership",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { 
    icon: Factory, 
    title: "Ruggedized Assembly & Environmental Protection", 
    text: "We provide automated and manual conformal coating (Acrylic, Silicone, Urethane) compliant with IPC-CC-830 and MIL-I-46058C standards. Our precision potting and encapsulation services use thermally conductive epoxies and silicones to protect against shock, vibration, and fluid ingress. We also apply specialized epoxy underfills for BGAs and large components to enhance reliability in high-vibration environments."
  },
  { 
    icon: Wrench, 
    title: "Industrial Control & Automation Systems", 
    text: "We have extensive experience manufacturing the core components of modern automation, including Programmable Logic Controllers (PLCs), Human-Machine Interfaces (HMIs), Variable Frequency Drives (VFDs), and distributed I/O modules. Our teams are proficient in building and testing systems that utilize common industrial communication protocols such as Modbus, Profibus, CANopen, and EtherCAT."
  },
  { 
    icon: CircuitBoard, 
    title: "IPC-A-610 Class 3 High-Reliability Assembly", 
    text: "We build to the IPC-A-610 Class 3 standard, the stringent benchmark for high-performance electronics that must operate in harsh environments without failure. This involves tighter tolerances, more robust solder joints, and a zero-defect mindset, distinguishing it from the less rigorous Class 2 standard used for most commercial products."
  },
  { 
    icon: Thermometer, 
    title: "Advanced Environmental & Stress Testing", 
    text: "Our in-house validation includes thermal chambers for rapid temperature cycling (-70°C to +180°C), electrodynamic vibration tables, and humidity chambers. We employ Highly Accelerated Life Testing (HALT) and Highly Accelerated Stress Screening (HASS) to discover design weaknesses and precipitate early-life failures, ensuring only the most robust units ship."
  },
  { 
    icon: ShieldCheck, 
    title: "Intrinsic Safety (IS) & Hazardous Location (HazLoc) Manufacturing", 
    text: "We have proven experience manufacturing products certified for use in hazardous locations (HazLoc) where flammable gases or dust are present. Our processes adhere to the strict requirements for Intrinsic Safety (IS) and we can build products to meet ATEX (Europe) and IECEx (International) certification standards."
  },
  { 
    icon: HardHat, 
    title: "Strategic Lifecycle & Supply Chain Management", 
    text: "Industrial products have lifecycles of 10-20 years. We use advanced tools like SiliconExpert to monitor the lifecycle status of every component, providing early warnings and last-time buy (LTB) opportunities to prevent costly redesigns. Our component engineers select parts with long-term availability and high reliability."
  },
];

const productExamples = [
    { name: "Programmable Logic Controllers (PLCs)", description: "The ruggedized brains of factory automation, controlling machinery and processes with high reliability." },
    { name: "Human-Machine Interfaces (HMIs)", description: "Industrial-grade touchscreens and control panels designed for intuitive operation in harsh factory environments." },
    { name: "Industrial IoT (IIoT) Gateways & Sensors", description: "Devices that collect data from machinery and the environment, often in remote or challenging locations, for predictive maintenance and process optimization." },
    { name: "Variable Frequency Drives (VFDs)", description: "Sophisticated motor controllers that provide precise speed control, improve energy efficiency, and reduce mechanical stress on equipment." },
    { name: "Ruggedized Handheld Computers & Tablets", description: "Mobile devices built to withstand drops, water, and dust, used for inventory management and field service applications." },
    { name: "Power Distribution Units (PDUs) for Data Centers", description: "High-reliability power strips and management systems for critical IT infrastructure." },
    { name: "Control Systems for Oil & Gas and Mining", description: "Intrinsically safe and explosion-proof electronics designed for the extreme conditions of resource extraction." },
    { name: "Automation Equipment for Advanced Manufacturing", description: "Control boards for robotics, CNC machines, and other automated manufacturing equipment." },
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

export default function IndustryIndustrial() {
  return (
    <>
      <SEO
        title="Industrial Electronics Manufacturing | ISO 9001 Certified | Illuminious"
        description="Manufacturing partner for rugged industrial electronics. We provide ISO 9001 certified assembly, IPC Class 3, and full lifecycle support for control systems, IIoT, and more."
        keywords="industrial electronics manufacturing, rugged electronics, ipc class 3, industrial iot, plc manufacturing, harsh environment electronics"
        url="/industries/industrial"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholder-industrial-automation.jpg"
            alt="A robotic arm working on a complex industrial automation assembly line"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Industrial" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Industrial Electronics Manufacturing
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Engineering for endurance. We build rugged, reliable electronics designed to perform in the world's most demanding environments.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Forged in Fire: Electronics for the Industrial Frontier</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Industrial electronics are the unsung heroes of our modern world, the silent, tireless engines driving everything from automated factories to critical energy grids. These are not delicate consumer gadgets; they are hardened systems engineered to withstand the most punishing conditions imaginable. They operate flawlessly amidst the intense heat of a steel mill, the corrosive salt spray of an offshore oil rig, the constant vibration of a mining operation, and the electrical noise of a high-power factory floor.
                  </p>
                  <p>
                    At Illuminious, we don't just understand these challenges; we build for them. We recognize that in the industrial sector, failure is never just an inconvenience. It means costly production halts, dangerous safety breaches, and potentially catastrophic system-wide collapses. That's why our entire manufacturing philosophy is built on a foundation of extreme durability, unwavering reliability, and extended operational longevity. We are more than a manufacturer; we are your partner in building industrial-grade electronics that you can stake your reputation on, guaranteed to perform relentlessly, year after year, in the world's most demanding environments.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-conformal-coating.jpg" alt="A PCB being treated with conformal coating for protection" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Specialized Industrial Manufacturing Capabilities</h2>
              <p className="text-lg text-gray-600">
                An integrated suite of services designed to build robust and reliable electronics for mission-critical applications.
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

        {/* Product Examples Section */}
        <section className="py-20 bg-white">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Real-World Industrial Applications</h2>
                    <p className="text-lg text-gray-600">
                        We have a proven track record of manufacturing a wide range of complex industrial products.
                    </p>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {productExamples.map((prod, index) => (
                        <AnimatedSection key={prod.name} delay={index * 0.05}>
                            <div className="bg-gray-50 p-6 rounded-lg shadow-md text-left h-full">
                                <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{prod.name}</h3>
                                <p className="text-sm text-gray-600">{prod.description}</p>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* Quality & Reliability Section */}
        <section id="quality" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/placeholder-quality-inspection.jpg" alt="A quality control technician inspecting a circuit board under a microscope" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Uncompromising Quality: The Bedrock of Industrial Reliability</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            For industrial applications, quality isn't a feature; it's the foundation upon which reliability is built. Our entire operation is governed by a robust Quality Management System, certified to the ISO 9001:2015 standard. This ensures every process, from quoting to shipping, is defined, controlled, and continuously improved.
                        </p>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>IPC-A-610 Class 3 as Standard:</strong> We don't just offer Class 3; we live it. Our operators are certified, and our processes are optimized for this highest standard of workmanship, ensuring maximum robustness for every product we build.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Comprehensive Digital Traceability:</strong> Our state-of-the-art Manufacturing Execution System (MES) provides a complete digital \"birth history\" for every single unit. We can trace every component, every process step, and every test result from the individual component reel right through to the final packaged product.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Layered and Redundant Testing Strategy:</strong> Our multi-stage testing process includes 3D AOI, 3D X-Ray Inspection (AXI), In-Circuit Test (ICT), Functional Test (FCT), and System-Level Burn-In to catch any potential defects.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Rigorous Supplier Quality Engineering (SQE):</strong> A product is only as reliable as its weakest component. We have a dedicated SQE team that rigorously vets, audits, and monitors our global component suppliers to ensure a secure, authentic, and high-quality supply chain.</span></li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Lifecycle Management Section */}
        <section id="lifecycle" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">A Partnership for the Decades: Manufacturing for the Long Haul</h2>
                    <div className="space-y-4 text-gray-700 leading-relaxed">
                        <p>
                            Industrial equipment is a long-term investment, not a disposable commodity. Products are expected to operate reliably for a decade, two decades, or even longer. This demands a manufacturing partner who thinks in terms of total product lifecycle, not just the initial production run. Illuminious is that partner.
                        </p>
                        <p>
                            Our proactive lifecycle management services are designed to safeguard your product—and your customers—from the inevitable risks of component obsolescence and supply chain disruptions. We work with you from the very beginning to plan for the future, ensuring long-term serviceability, availability, and profitability. We offer data-driven obsolescence management and a full range of aftermarket services, including repair, refurbishment, and warranty support.
                        </p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/placeholder-lifecycle-management.jpg" alt="A chart showing component lifecycle analysis" />
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-blue text-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold mb-6 font-heading">Build Your Industrial Legacy with a Trusted Partner</h2>
              <p className="text-lg text-white/80 mb-8">
                Ready to build industrial electronics that are as tough and reliable as your brand? Contact our engineering team today to discuss your project. Let's build something that lasts.
              </p>
              <Button asChild size="lg" className="bg-white text-illuminious-blue hover:bg-gray-200">
                <Link href="/contact">
                  Request a Consultation <ArrowRight className="ml-2" />
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
