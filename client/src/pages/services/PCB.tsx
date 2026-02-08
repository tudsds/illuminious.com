import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Layers, Microscope, Rocket, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "The Foundation of Electronics",
  },
  {
    id: "capabilities",
    title: "Our PCB Capabilities",
  },
  {
    id: "process",
    title: "Our Fabrication Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Start Your PCB Project",
  },
];

const capabilities = [
  { icon: Layers, title: "Advanced Multi-Layer & HDI", text: "Fabrication of complex boards up to 32 layers, including High-Density Interconnect (HDI) with microvias and advanced materials." },
  { icon: Wrench, title: "Rigid, Flex & Rigid-Flex", text: "Expertise across all board types, from standard rigid FR-4 to complex rigid-flex boards for dynamic and space-constrained applications." },
  { icon: CircuitBoard, title: "Specialized Substrates", text: "Experience with a wide range of materials including Rogers, Teflon, and metal-core PCBs for RF, high-speed, and thermal applications." },
  { icon: Rocket, title: "Quick-Turn Prototyping", text: "Dedicated prototype lines in our facilities enable us to deliver high-quality boards in as fast as 24 hours to accelerate your development." },
  { icon: Microscope, title: "Tight Tolerance & Fine Pitch", text: "State-of-the-art equipment for achieving fine lines and spaces down to 3/3 mil, ensuring reliability for high-density designs." },
  { icon: CheckCircle, title: "Quality & Reliability Testing", text: "100% electrical testing on all bare boards, along with impedance control testing and cross-section analysis to guarantee quality." },
];

const processSteps = [
  { name: "1. DFM & Engineering Review", description: "Our engineers conduct a thorough Design for Manufacturability (DFM) check on your Gerber files to optimize for yield and cost." },
  { name: "2. Material Preparation & Imaging", description: "High-quality raw laminates are cut, cleaned, and imaged with your circuit design using advanced direct imaging (LDI) systems." },
  { name: "3. Lamination & Drilling", description: "For multi-layer boards, layers are precisely aligned and laminated under high temperature and pressure, followed by high-precision drilling." },
  { name: "4. Plating & Etching", description: "Copper is plated in the drilled holes (vias) to create electrical connections between layers, followed by a precision etching process." },
  { name: "5. Solder Mask, Silkscreen & Surface Finish", description: "Application of solder mask, silkscreen legends, and your chosen surface finish (e.g., ENIG, HASL) to protect and finish the board." },
  { name: "6. Electrical Test & Final Inspection", description: "Every board undergoes 100% electrical testing (flying probe or bed-of-nails) and a final visual inspection before packaging." },
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

export default function ServicePCB() {
  return (
    <>
      <SEO
        title="PCB Fabrication Services | Printed Circuit Board Manufacturer | Illuminious"
        description="High-quality PCB fabrication services from prototype to production. We manufacture multi-layer, HDI, rigid, flex, and rigid-flex boards in our own facilities."
        keywords="pcb fabrication, printed circuit board, pcb manufacturer, pcb prototype, hdi pcb, rigid-flex pcb"
        url="/services/pcb-fabrication"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-quality-aoi-projector-pcb-12.jpg"
            alt="A large panel of freshly fabricated printed circuit boards"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "PCB Fabrication" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                PCB Fabrication Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                The foundation of all electronics, built with precision and reliability in our own state-of-the-art facilities. From rapid prototypes to mass production.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">More Than Just a Board Shop</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The Printed Circuit Board (PCB) is the backbone of your electronic product. Its quality and reliability directly impact everything from performance to final product lifespan. Many companies rely on a fragmented supply chain, using one vendor for fabrication, another for assembly, and yet another for testing. This approach introduces risk, increases costs, and slows down your time to market.
                  </p>
                  <p>
                    At Illuminious, we provide a vertically integrated solution. We don\\\'t just broker boards; we manufacture them in our own advanced facilities. This direct control over the entire fabrication process, from DFM engineering to final electrical testing, allows us to guarantee quality, control costs, and accelerate your production schedule. By integrating PCB fabrication with our assembly and testing services, we offer a seamless, single-partner solution for bringing your product to life.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-quality-microscope-32.jpg" alt="An inspector examining a PCB with a magnifying loupe" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our PCB Fabrication Capabilities</h2>
              <p className="text-lg text-gray-600">
                A full spectrum of technologies to meet the demands of any product, from simple consumer devices to complex industrial and medical equipment.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Fabrication Process</h2>
              <p className="text-lg text-gray-600">
                A meticulously controlled, six-step process that transforms your digital design into a physical, high-reliability circuit board.
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

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_abstract-circuit-board-blue.jpg" alt="A flying probe tester in action, testing a bare PCB" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Vertically Integrated Solution</h4>
                      <p>By handling fabrication and assembly under one roof, we eliminate the communication gaps and logistical delays that plague fragmented supply chains, reducing your overall time to market.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Engineering Expertise</h4>
                      <p>Our team of experienced PCB engineers provides free, in-depth DFM analysis with every order, helping you optimize your design for higher yields, lower costs, and improved reliability.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Commitment to Quality</h4>
                      <p>We are certified to the highest industry standards, including ISO 9001 and IPC-A-600. Our commitment to quality is absolute, with 100% electrical testing and rigorous inspection at every step.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Get an Instant PCB Quote</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Upload your Gerber files and BOM to our secure portal to receive a comprehensive quote for fabrication and assembly in minutes. Let\\\'s build the foundation of your next great product together.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Upload Your Files
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
