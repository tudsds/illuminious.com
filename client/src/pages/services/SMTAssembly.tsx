import { motion } from "framer-motion";
import {
  ArrowRight,
  CircuitBoard,
  CheckCircle,
  Layers,
  Microscope,
  Zap,
  Shield,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: CircuitBoard,
    title: "High-Speed Pick & Place",
    description: "Our Fuji NXT III and Yamaha YSM20R lines achieve placement rates of 80,000+ CPH with ±25μm accuracy for ultra-fine-pitch components.",
  },
  {
    icon: Layers,
    title: "Solder Paste Printing",
    description: "DEK Horizon stencil printers with 2D/3D SPI inspection ensure consistent paste deposition across all pad geometries.",
  },
  {
    icon: Microscope,
    title: "Reflow Soldering",
    description: "Nitrogen-atmosphere reflow ovens with 10-zone temperature profiling for lead-free and leaded solder processes.",
  },
  {
    icon: Shield,
    title: "In-Line AOI & SPI",
    description: "Every board passes through 3D automated optical inspection and solder paste inspection for zero-defect manufacturing.",
  },
];

const specs = [
  { label: "Smallest Component", value: "01005 (0.4×0.2mm)" },
  { label: "Finest Pitch", value: "0.3mm BGA" },
  { label: "Placement Speed", value: "80,000+ CPH" },
  { label: "Placement Accuracy", value: "±25μm" },
];

const techSpecs = [
  { category: "SMT Line Equipment", items: ["Fuji NXT III Pick & Place", "Yamaha YSM20R High-Speed Mounter", "DEK Horizon Stencil Printer", "Heller 1913 MK5 Reflow Oven", "Koh Young 3D SPI & AOI"] },
  { category: "Component Capabilities", items: ["01005 / 0201 Chip Components", "BGA / CSP / QFN / LGA", "Fine-Pitch QFP (0.3mm)", "PoP (Package on Package)", "Micro-BGA (0.25mm pitch)"] },
  { category: "Process Controls", items: ["Nitrogen Reflow Atmosphere", "Lead-Free & Leaded Soldering", "Moisture Sensitivity Level (MSL) Management", "ESD-Protected Workstations", "Full Traceability (Component-Level)"] },
];

const faqs = [
  {
    question: "What is SMT assembly and how does it differ from through-hole?",
    answer: "SMT (Surface Mount Technology) assembly places components directly onto the surface of PCBs, enabling smaller form factors, higher component density, and faster automated assembly compared to through-hole technology where component leads pass through drilled holes."
  },
  {
    question: "What is your SMT assembly capacity?",
    answer: "Our facility operates 8 fully automated SMT lines running 24/7, capable of processing over 50 million placements per month. We handle volumes from prototype quantities to mass production runs exceeding 100,000 boards per month."
  },
  {
    question: "Do you support lead-free and RoHS-compliant assembly?",
    answer: "Yes, all our SMT lines are configured for both lead-free (SAC305) and leaded soldering processes. We are fully RoHS and REACH compliant, with separate lines to prevent cross-contamination."
  },
];

export default function SMTAssembly() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: capRef, isVisible: capVisible } = useScrollAnimation();
  const { ref: specRef, isVisible: specVisible } = useScrollAnimation();

  return (
    <>
      <SEO
        title="SMT Assembly Services | Surface Mount Technology | Illuminious"
        description="High-speed SMT assembly with 01005 component capability, ±25μm placement accuracy, and in-line 3D AOI inspection. ISO 9001 certified electronics manufacturer."
        keywords="SMT assembly, surface mount technology, PCB assembly, pick and place, reflow soldering, solder paste printing, electronics manufacturing"
        canonical="/services/smt-assembly"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "SMT Assembly Services",
          "provider": { "@type": "Organization", "name": "Illuminious LLC" },
          "description": "High-speed surface mount technology assembly with advanced pick-and-place equipment and in-line inspection.",
          "areaServed": "Worldwide",
        }}
        faqData={faqs}
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative bg-illuminious-navy text-white pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/images_not_deployed/smt-production-line-panoramic.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "SMT Assembly" },
            ]} />
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                SMT Assembly Services
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our state-of-the-art SMT lines deliver precision surface mount assembly for the most demanding applications. From 01005 chip components to complex BGA packages, we provide consistent quality at scale with full in-line inspection and traceability.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-illuminious-blue hover:bg-illuminious-sky text-white rounded-full">
                  <a href="/contact">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></a>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10 rounded-full">
                  <a href="/services/pcb-assembly">Full PCBA Services</a>
                </Button>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Quick Stats */}
        <section className="bg-white py-8 border-b">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {specs.map((spec) => (
                <div key={spec.label} className="text-center">
                  <div className="text-2xl font-bold text-illuminious-navy font-heading">{spec.value}</div>
                  <div className="text-sm text-gray-500 mt-1">{spec.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Capabilities */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div
              ref={capRef}
              initial={{ opacity: 0, y: 20 }}
              animate={capVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-heading text-illuminious-navy mb-4 text-center">
                Advanced SMT Capabilities
              </h2>
              <p className="text-gray-600 text-center max-w-2xl mx-auto mb-12">
                Our manufacturing facility houses 8 fully automated SMT production lines equipped with the latest generation pick-and-place, printing, and inspection systems.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {capabilities.map((cap, idx) => (
                  <div key={idx} className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow">
                    <cap.icon className="w-10 h-10 text-illuminious-blue mb-4" />
                    <h3 className="text-lg font-semibold text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{cap.description}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Technical Specifications */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <motion.div
              ref={specRef}
              initial={{ opacity: 0, y: 20 }}
              animate={specVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold font-heading text-illuminious-navy mb-12 text-center">
                Technical Specifications
              </h2>
              <div className="grid md:grid-cols-3 gap-8">
                {techSpecs.map((spec) => (
                  <div key={spec.category} className="bg-gray-50 rounded-xl p-6">
                    <h3 className="text-lg font-semibold text-illuminious-navy mb-4 font-heading">{spec.category}</h3>
                    <ul className="space-y-2">
                      {spec.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-illuminious-blue shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-illuminious-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-heading mb-4">Ready to Start Your SMT Assembly Project?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              From prototype to mass production, our engineering team is ready to optimize your SMT assembly process for quality, cost, and speed.
            </p>
            <Button asChild size="lg" className="bg-illuminious-blue hover:bg-illuminious-sky text-white rounded-full">
              <a href="/contact">Get a Free Quote <ArrowRight className="ml-2 w-4 h-4" /></a>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
      <FloatingContact />
    </>
  );
}
