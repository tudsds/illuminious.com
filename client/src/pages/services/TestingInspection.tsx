import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Search, Microscope, Shield, Zap, Eye, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import Breadcrumb from "@/components/Breadcrumb";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Eye,
    title: "3D AOI Inspection",
    description: "Koh Young Zenith 3D automated optical inspection systems detect solder defects, component misalignment, and missing parts with sub-micron accuracy.",
  },
  {
    icon: Search,
    title: "X-Ray Inspection",
    description: "Nikon XT V 160 X-ray systems inspect BGA, QFN, and hidden solder joints non-destructively, ensuring void-free connections on critical assemblies.",
  },
  {
    icon: Activity,
    title: "In-Circuit Testing (ICT)",
    description: "Keysight i3070 ICT systems verify component values, shorts, opens, and basic functionality at production speed with bed-of-nails fixtures.",
  },
  {
    icon: Zap,
    title: "Functional Testing",
    description: "Custom functional test fixtures validate product operation under real-world conditions, including power-on testing, communication protocols, and environmental stress.",
  },
];

const specs = [
  { label: "AOI Defect Detection", value: "99.9%+" },
  { label: "X-Ray Resolution", value: "<1μm" },
  { label: "ICT Coverage", value: "98%+ Faults" },
  { label: "Test Throughput", value: "1,200 boards/shift" },
];

const techSpecs = [
  { category: "Optical Inspection", items: ["3D AOI (Koh Young Zenith)", "2D AOI (Mirtec MV-6 OMNI)", "Solder Paste Inspection (3D SPI)", "Microscope Stations (40x-200x)", "Visual Inspection per IPC-A-610"] },
  { category: "Electrical Testing", items: ["In-Circuit Test (Keysight i3070)", "Flying Probe Test (Takaya APT-1400F)", "Boundary Scan / JTAG", "Hipot / Dielectric Testing", "Insulation Resistance Testing"] },
  { category: "Functional & Environmental", items: ["Custom Functional Test Fixtures", "Burn-In Testing (72-168 hours)", "Thermal Cycling (-40°C to +125°C)", "Vibration & Shock Testing", "HALT / HASS Testing"] },
];

const faqs = [
  {
    question: "What testing methods do you offer for PCB assemblies?",
    answer: "We offer a comprehensive suite: 3D AOI, X-ray inspection, in-circuit testing (ICT), flying probe testing, functional testing, burn-in testing, and environmental stress screening. The optimal test strategy depends on your product's complexity and reliability requirements."
  },
  {
    question: "Can you develop custom test fixtures?",
    answer: "Yes, our test engineering team designs and builds custom ICT and functional test fixtures in-house. We typically deliver fixtures within 2-3 weeks, including test program development and validation."
  },
];

export default function TestingInspection() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: capRef, isVisible: capVisible } = useScrollAnimation();

  return (
    <>
      <SEO
        title="Testing & Inspection Services | AOI, ICT, X-Ray | Illuminious"
        description="Comprehensive PCB testing and inspection: 3D AOI, X-ray, ICT, functional testing, and environmental stress screening. Ensure zero-defect quality for your electronics."
        keywords="PCB testing, AOI inspection, X-ray inspection, ICT testing, functional testing, electronics quality control, burn-in testing"
        canonical="/services/testing-inspection"
        structuredData={{
          "@context": "https://schema.org",
          "@type": "Service",
          "name": "Testing & Inspection Services",
          "provider": { "@type": "Organization", "name": "Illuminious LLC" },
          "description": "Comprehensive electronics testing and inspection services including AOI, X-ray, ICT, and functional testing.",
          "areaServed": "Worldwide",
        }}
        faqData={faqs}
      />
      <Header />
      <main>
        <section className="relative bg-illuminious-navy text-white pt-24 pb-16 overflow-hidden">
          <div className="absolute inset-0 opacity-20">
            <img src="/images_not_deployed/aoi-inspection-station-technician.jpg" alt="" className="w-full h-full object-cover" />
          </div>
          <div className="container mx-auto px-4 relative z-10">
            <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Testing & Inspection" },
            ]} />
            <motion.div
              ref={heroRef}
              initial={{ opacity: 0, y: 20 }}
              animate={heroVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="max-w-3xl mt-8"
            >
              <h1 className="text-4xl md:text-5xl font-bold font-heading mb-6">
                Testing & Inspection
              </h1>
              <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                Our multi-stage quality assurance process combines automated optical inspection, X-ray analysis, electrical testing, and functional validation to ensure every assembly meets the highest standards. We catch defects early and deliver zero-defect products.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue hover:bg-illuminious-sky text-white rounded-full">
                <a href="/contact">Discuss Your Testing Needs <ArrowRight className="ml-2 w-4 h-4" /></a>
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
              <h2 className="text-3xl font-bold font-heading text-illuminious-navy mb-12 text-center">Inspection & Testing Capabilities</h2>
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
            <h2 className="text-3xl font-bold font-heading mb-4">Ensure Your Product Quality</h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Let our quality engineers design the optimal test strategy for your product. We help you balance test coverage, throughput, and cost.
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
