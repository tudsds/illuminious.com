import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Cog, Layers, Shield, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Cog,
    title: "Automated Insertion",
    description: "High-speed axial and radial insertion machines for standard through-hole components, achieving consistent placement at production volumes.",
  },
  {
    icon: Layers,
    title: "Wave & Selective Soldering",
    description: "Dual-wave soldering for high-volume runs and selective soldering for mixed-technology boards requiring precision on specific joints.",
  },
  {
    icon: Shield,
    title: "Manual Assembly & Rework",
    description: "Skilled technicians handle odd-form components, connectors, transformers, and rework operations under microscope with IPC-certified workmanship.",
  },
  {
    icon: Zap,
    title: "Mixed Technology",
    description: "Seamless integration of through-hole and SMT processes on the same board, optimizing both component types for reliability and performance.",
  },
];

const specs = [
  { label: "Lead Diameter", value: "0.4–1.2mm" },
  { label: "Wave Solder Capacity", value: "1,200 joints/min" },
  { label: "Selective Solder Accuracy", value: "±0.05mm" },
  { label: "IPC Standard", value: "Class 2 & 3" },
];

const techSpecs = [
  { category: "Insertion Equipment", items: ["Universal Axial Inserter", "Radial Lead Inserter", "DIP IC Auto-Inserter", "Odd-Form Component Stations", "Connector Press-Fit Machines"] },
  { category: "Soldering Processes", items: ["Dual-Wave Soldering (Lead-Free)", "Selective Soldering (ERSA Versaflow)", "Hand Soldering (IPC-A-610 Certified)", "Nitrogen Atmosphere Option", "Conformal Coating Post-Solder"] },
  { category: "Quality Controls", items: ["AOI Post-Wave Inspection", "X-Ray for Hidden Joints", "Thermal Profiling & Monitoring", "First Article Inspection (FAI)", "IPC-A-610 Class 3 Workmanship"] },
];

const faqs = [
  {
    question: "When should I use through-hole vs. SMT assembly?",
    answer: "Through-hole assembly is ideal for components requiring strong mechanical bonds (connectors, transformers, power components) or when operating in high-vibration/high-stress environments. SMT is preferred for high-density, miniaturized designs. Many products use mixed technology combining both."
  },
  {
    question: "Can you handle mixed SMT and through-hole boards?",
    answer: "Yes, our production lines are designed for mixed-technology assembly. We process SMT components first via reflow, then through-hole components via wave or selective soldering, ensuring optimal quality for both component types."
  },
];

export default function ThroughHole() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: capRef, isVisible: capVisible } = useScrollAnimation();

  return (
    <>
      <SEO
        title="Through-Hole Assembly Services | THT Soldering | Illuminious"
        description="Professional through-hole PCB assembly with wave soldering, selective soldering, and manual insertion. IPC Class 3 certified for high-reliability applications."
        keywords="through-hole assembly, THT assembly, wave soldering, selective soldering, DIP insertion, PCB assembly, mixed technology"
        canonical="/services/through-hole"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Through-Hole Assembly Services",
          "provider": { "@type": "Organization", "name": "Illuminious LLC" },
          "description": "Through-hole PCB assembly with automated insertion, wave soldering, and selective soldering capabilities.",
          "areaServed": "Worldwide",
        }}
        faqData={faqs}
      />
      <Header />
      <main>
        <section className="relative bg-illuminious-navy text-white pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/images_not_deployed/pcb-board-components-green.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Through-Hole Assembly" },
            ]} />
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Through-Hole Assembly
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Reliable through-hole technology assembly for components demanding superior mechanical strength. Our automated insertion, wave soldering, and selective soldering capabilities ensure consistent quality for connectors, transformers, and power components.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue hover:bg-illuminious-sky text-white rounded-full">
                <a href="/contact">Request a Quote <ArrowRight className="ml-2 w-4 h-4" /></a>
              </Button>
            </motion.div>
          </div>
        </section>

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

        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <motion.div ref={capRef} initial={{ opacity: 0, y: 20 }} animate={capVisible ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}>
              <h2 className="text-3xl font-bold font-heading text-illuminious-navy mb-12 text-center">Through-Hole Capabilities</h2>
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

        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold font-heading text-illuminious-navy mb-12 text-center">Technical Specifications</h2>
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
          </div>
        </section>

        <section className="py-16 bg-illuminious-navy text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold font-heading mb-4">Need Through-Hole or Mixed-Technology Assembly?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Our engineering team will help you choose the optimal assembly approach for your product's reliability and cost requirements.
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
