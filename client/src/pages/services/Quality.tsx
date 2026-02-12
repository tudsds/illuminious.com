import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Microscope, ShieldCheck, SlidersHorizontal, TestTube, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Quality is Non-Negotiable",
  },
  {
    id: "capabilities",
    title: "Our Quality Framework",
  },
  {
    id: "process",
    title: "Our Quality Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Partner with Quality",
  },
];

const capabilities = [
  { icon: ShieldCheck, title: "Quality Management System (QMS)", text: "Our factories are certified to ISO 9001, ISO 13485 (Medical), and IATF 16949 (Automotive) standards, ensuring a robust and documented quality process." },
  { icon: SlidersHorizontal, title: "Statistical Process Control (SPC)", text: "We use real-time data collection and statistical analysis to monitor and control our manufacturing processes, ensuring they remain stable and capable." },
  { icon: Microscope, title: "Advanced Metrology & Inspection", text: "A full suite of inspection equipment including CMMs, 3D scanners, X-ray, AOI, and SPI for comprehensive dimensional and functional verification." },
  { icon: TestTube, title: "Reliability & Environmental Testing", text: "In-house labs for HALT/HASS, thermal shock, vibration, drop, and IP rating testing to ensure your product withstands real-world conditions." },
  { icon: Users, title: "Supplier Quality Engineering (SQE)", text: "A dedicated SQE team that audits and develops our raw material and component suppliers to ensure quality starts at the source." },
  { icon: CheckCircle, title: "Traceability & Documentation", text: "End-to-end traceability from incoming components to finished goods, with comprehensive documentation packages for every production run." },
];

const processSteps = [
  { name: "1. Advanced Product Quality Planning (APQP)", description: "Before production begins, we create a detailed quality plan that defines all control points, inspection criteria, and testing requirements for your product." },
  { name: "2. Incoming Quality Control (IQC)", description: "All incoming raw materials and components are inspected and verified against specifications before being released to the production line." },
  { name: "3. In-Process Quality Control (IPQC)", description: "Automated and manual inspections are performed at critical stages of the assembly process to catch any deviations early." },
  { name: "4. Final Quality Assurance (FQA)", description: "A final, comprehensive inspection and functional test is performed on 100% of finished goods before they are packaged." },
  { name: "5. Outgoing Quality Assurance (OQA)", description: "A random audit is performed on packaged goods before shipment to ensure packaging integrity and order accuracy." },
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

export default function ServiceQuality() {
  return (
    <>
      <SEO
        title="Quality Assurance & Control in Manufacturing | Illuminious"
        description="Comprehensive quality assurance and control services for electronics manufacturing. We are certified to ISO 9001, ISO 13485, and IATF 16949 standards."
        keywords="quality assurance, quality control, manufacturing quality, ISO 9001, ISO 13485, IATF 16949, electronics testing"
        url="/services/quality"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-quality-outgoing-47.jpg"
            alt="A quality engineer inspecting a printed circuit board under a microscope"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Quality Assurance & Control" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Quality Assurance & Control
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Quality is not a department; it's our culture. We build quality into your product at every stage of the manufacturing process.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Built-In, Not Bolted-On</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    Many manufacturers treat quality as a final inspection gate—a last-ditch effort to catch defects before they ship. At Illuminious, we believe this approach is fundamentally flawed. True quality cannot be 'inspected into' a product; it must be built in from the very beginning.
                  </p>
                  <p>
                    Our philosophy is centered on a culture of quality that permeates every aspect of our organization, from engineering and supply chain to production and logistics. We operate under a robust Quality Management System (QMS) that is certified to the world's most demanding standards. We use data-driven process controls and a 'zero defect' mindset to prevent issues before they occur, rather than simply reacting to them. For us, quality is the most important feature of any product we build.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-quality-xray-bga-15.jpg" alt="An automated optical inspection (AOI) machine scanning a PCB" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Quality Assurance Framework</h2>
              <p className="text-lg text-illuminious-sky">
                A multi-layered system of processes, technologies, and certifications that guarantee the quality of your product.
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
                    <p className="text-sm text-illuminious-sky">{cap.text}</p>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our 5-Step Quality Process</h2>
              <p className="text-lg text-illuminious-sky">
                A closed-loop quality process that covers every stage from product design to final shipment.
              </p>
            </AnimatedSection>
            <div className="max-w-4xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                      <div className="w-1/2 px-8">
                        <AnimatedSection delay={index * 0.1}>
                          <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-illuminious-sky ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
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
        <section id="why-us" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-smt-spi-inspection-18.jpg" alt="A coordinate measuring machine (CMM) inspecting a precision part" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-illuminious-navy leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">World-Class Certifications</h4>
                      <p>Our certifications are not just plaques on a wall; they are living systems that govern our daily operations and demonstrate our commitment to the highest global standards.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Radical Transparency</h4>
                      <p>We provide you with direct access to real-time production data, quality reports, and audit results. With Illuminious, you always know exactly how your product is being made and tested.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Continuous Improvement Culture</h4>
                      <p>We are never satisfied. Our teams are constantly analyzing data, refining processes, and investing in new technologies to push the boundaries of quality and efficiency.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Partner with a Manufacturer Who Cares</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Don't leave the quality of your product to chance. Partner with a manufacturer that puts quality at the core of everything they do. Contact us to learn more about our Quality Management System.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Quality Consultation
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

