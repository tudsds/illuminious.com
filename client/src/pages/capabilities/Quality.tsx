import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Shield,
  CheckCircle,
  Award,
  FileCheck,
  Eye,
  Target,
  Layers,
  FlaskConical,
  GitBranch,
  Cpu,
  Factory,
  Recycle,
  Download,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const certifications = [
  {
    icon: Award,
    name: "ISO 9001:2015",
    category: "Quality Management System",
    description: "The cornerstone of our QMS, this certification demonstrates our ability to consistently provide products and services that meet customer and regulatory requirements. It governs our entire operation, from initial client engagement to final delivery, ensuring a structured, process-driven approach to quality.",
    status: "Certified",
  },
  {
    icon: Award,
    name: "ISO 13485:2016",
    category: "Medical Device QMS",
    description: "A mandatory certification for manufacturing medical devices. It covers specific requirements for design, production, and traceability to ensure the safety and efficacy of medical products. Our Batam facility is equipped with a dedicated clean room and trained personnel for medical device assembly.",
    status: "Certified",
  },
  {
    icon: Award,
    name: "IATF 16949:2016",
    category: "Automotive QMS",
    description: "The global quality standard for the automotive industry. This certification integrates with ISO 9001 and includes specific requirements for automotive production, focusing on defect prevention, and the reduction of variation and waste in the supply chain. It is essential for any Tier 1 or Tier 2 supplier.",
    status: "Certified",
  },
  {
    icon: Award,
    name: "AS9100D",
    category: "Aerospace QMS",
    description: "The quality management standard for the aviation, space, and defense industries. AS9100D provides a comprehensive framework for ensuring the safety, reliability, and quality of aerospace components, with stringent requirements for traceability, risk management, and configuration control.",
    status: "Ready",
  },
  {
    icon: Recycle,
    name: "ISO 14001:2015",
    category: "Environmental Management",
    description: "This certification specifies requirements for an effective environmental management system (EMS). It demonstrates our commitment to sustainability, resource efficiency, and minimizing our environmental footprint through controlled processes for waste management and pollution prevention.",
    status: "Compliant",
  },
  {
    icon: CheckCircle,
    name: "IPC-A-610 Class 2 & 3",
    category: "Electronics Assembly Standard",
    description: "We train our operators and inspectors to the highest standards for electronics assembly. Class 2 is the standard for most commercial electronics, while Class 3 is required for high-reliability applications like medical, aerospace, and automotive, where failure is not an option.",
    status: "Compliant",
  },
];

const qualityProcesses = [
  {
    icon: GitBranch,
    title: "1. Design for Quality (DFQ)",
    description: "Quality starts at the design phase. Our engineers collaborate with clients on Design for Manufacturability (DFM), Design for Assembly (DFA), and Design for Test (DFT) reviews. This proactive approach identifies potential quality issues, optimizes material selection, and ensures the product design is robust and scalable for mass production.",
  },
  {
    icon: Factory,
    title: "2. Supplier Quality Engineering (SQE)",
    description: "The quality of our final product depends on the quality of our components. Our SQE team rigorously qualifies and audits our suppliers. We maintain a preferred vendor list (PVL) and conduct regular performance reviews, ensuring a reliable and high-quality supply chain for all materials, from simple passives to complex ICs.",
  },
  {
    icon: FileCheck,
    title: "3. Incoming Quality Control (IQC)",
    description: "No component enters our production line without verification. Our IQC team uses advanced equipment, including LCR meters, X-ray fluorescence (XRF) analyzers for RoHS compliance, and digital microscopes to inspect all incoming raw materials. Critical components undergo 100% inspection, while others are sampled based on AQL standards.",
  },
  {
    icon: Eye,
    title: "4. In-Process Quality Control (IPQC)",
    description: "We monitor quality at every critical step of the manufacturing process. This includes automated optical inspection (AOI) after solder paste printing and reflow, X-ray inspection for BGA and complex packages, and first-article inspection (FAI) for every new production run. Statistical Process Control (SPC) charts are used to monitor process stability in real-time.",
  },
  {
    icon: Target,
    title: "5. Final Quality Assurance (FQA)",
    description: "Before shipment, every product undergoes a final, comprehensive quality check. This includes In-Circuit Testing (ICT), Functional Testing (FCT) using custom-built test jigs, and a final visual inspection. We verify that the product meets all customer specifications, performance requirements, and cosmetic standards. Packaging and labeling are also audited to ensure safe transit.",
  },
  {
    icon: Layers,
    title: "6. Quality System & Traceability",
    description: "Our Manufacturing Execution System (MES) provides end-to-end traceability. We can track every component, process step, and operator for each unique serial number. This data is invaluable for root cause analysis and continuous improvement, and provides our clients with complete transparency and confidence in our production process.",
  },
];

const testingCapabilities = [
    { name: "Automated Optical Inspection (AOI)", description: "High-resolution cameras scan PCBs to detect defects like missing components, incorrect polarity, and solder bridges." },
    { name: "X-Ray Inspection (2D & 3D)", description: "Essential for inspecting non-visible solder joints, such as those on Ball Grid Arrays (BGAs) and Quad-Flat No-leads (QFNs)." },
    { name: "In-Circuit Test (ICT)", description: "A bed-of-nails fixture tests each component on the board to check for shorts, opens, and correct component values." },
    { name: "Functional Circuit Test (FCT)", description: "Custom-designed test jigs simulate the product's final operating environment to verify its functionality and performance specifications." },
    { name: "Environmental Stress Screening (ESS)", description: "Products are subjected to temperature cycling and vibration in our environmental chambers to identify latent defects." },
    { name: "Radio Frequency (RF) Shielded Testing", description: "RF-shielded rooms and network analyzers are used to test and calibrate wireless devices (Wi-Fi, Bluetooth, Cellular, GPS)." },
    { name: "Gage Repeatability & Reproducibility (GR&R)", description: "We regularly perform GR&R studies on our test equipment to ensure measurement systems are accurate and reliable." },
    { name: "Failure Analysis Lab", description: "Equipped with cross-sectioning tools, high-power microscopes, and solderability testers to perform in-depth root cause analysis on any failures." },
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

export default function CapabilityQuality() {
  return (
    <>
      <SEO
        title="Advanced Quality Management & Certifications | Illuminious"
        description="Explore Illuminious's world-class quality management system, certified to ISO 9001, ISO 13485, and IATF 16949. We provide end-to-end quality assurance from DFM to FCT."
        keywords="Quality Management System, ISO 9001, ISO 13485, IATF 16949, IPC Class 3, electronics quality, contract manufacturing quality, failure analysis, AOI, X-Ray inspection"
        url="/capabilities/quality"
      />
      <Header />
      
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
                <Shield className="w-4 h-4" />
                Commitment to Excellence
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                A Foundation of Uncompromising Quality
              </h1>
              <p className="text-xl text-illuminious-navy/70 mb-8">
                At Illuminious, quality is not a final inspection gate—it is the bedrock of our entire manufacturing philosophy. We have built a comprehensive Quality Management System (QMS) that is woven into every process, from initial design review to final shipment, ensuring predictable, reliable, and superior outcomes for your products.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Schedule a Quality Audit
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/DEPLOYED_backup-quality-documentation-57.jpg"
                alt="Engineer performing quality inspection on a PCB"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Globally Recognized Certifications
            </h2>
            <p className="text-lg text-illuminious-navy/70">
              Our adherence to the world's most stringent quality standards is not optional; it's a core business requirement. These certifications are a testament to our robust processes and our capability to serve the most demanding industries, including medical, automotive, and aerospace.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {certifications.map((cert, index) => (
              <AnimatedSection key={cert.name} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-6 border border-illuminious-light hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      cert.status === 'Certified' ? 'bg-green-100 text-green-700' :
                      cert.status === 'Ready' ? 'bg-blue-100 text-blue-700' :
                      'bg-illuminious-light/50 text-illuminious-navy'
                    }`}>
                      {cert.status}
                    </span>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-illuminious-navy mb-2">{cert.name}</h3>
                    <p className="text-sm text-illuminious-blue font-semibold mb-3">{cert.category}</p>
                  </div>
                  <p className="text-illuminious-navy/70 text-sm flex-grow">{cert.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Our End-to-End Quality Process
            </h2>
            <p className="text-lg text-illuminious-navy/70">
              We employ a systematic, multi-stage approach to quality assurance. This closed-loop process ensures that quality is built-in, monitored, and continuously improved at every stage of the product lifecycle, from the initial concept to mass production and beyond.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {qualityProcesses.map((process, index) => (
              <AnimatedSection key={process.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-transparent hover:border-illuminious-blue/30 hover:shadow-xl transition-all h-full">
                  <div className="w-14 h-14 rounded-2xl bg-illuminious-light/60 flex items-center justify-center mb-5">
                    <process.icon className="w-7 h-7 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-3">{process.title}</h3>
                  <p className="text-illuminious-navy/70">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Advanced Testing & Validation Laboratory
              </h2>
              <p className="text-lg text-illuminious-navy/70 mb-8">
                Data, not opinion, drives our quality decisions. Our in-house testing laboratories in Shenzhen and Batam are equipped with state-of-the-art equipment to validate product performance, reliability, and compliance. We don't just build your product; we prove it works as designed.
              </p>
              <div className="space-y-4">
                {testingCapabilities.slice(0, 4).map((capability) => (
                  <div key={capability.name} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold text-illuminious-navy">{capability.name}</h4>
                      <p className="text-illuminious-navy/70 text-sm">{capability.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
                <div className="bg-white rounded-2xl p-8 border border-illuminious-light shadow-lg">
                    <div className="flex items-center gap-4 mb-6">
                        <FlaskConical className="w-8 h-8 text-illuminious-blue"/>
                        <h3 className="text-2xl font-bold text-illuminious-navy">Our Lab Capabilities</h3>
                    </div>
                    <div className="space-y-4">
                        {testingCapabilities.map((capability) => (
                            <div key={capability.name} className="p-4 rounded-lg bg-illuminious-light/40">
                                <h4 className="font-semibold text-illuminious-navy">{capability.name}</h4>
                                <p className="text-illuminious-navy/70 text-sm">{capability.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-illuminious-navy">
        <div className="container text-center">
          <AnimatedSection className="max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quality is a Promise. We Deliver.
            </h2>
            <p className="text-lg text-white/80 mb-10">
              Our quality metrics speak for themselves. We hold ourselves to the highest standards of operational excellence, resulting in industry-leading yields, minimal defects, and unwavering reliability that our clients depend on.
            </p>
          </AnimatedSection>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {[
              { metric: "99.8%+", label: "First Pass Yield (FPY)", description: "The percentage of units that pass all tests on the first attempt, without any rework." },
              { metric: "< 50 PPM", label: "Field Defect Rate", description: "Represents less than 50 defective parts for every million units shipped to customers." },
              { metric: "99.9%", label: "On-Time Delivery (OTD)", description: "Our commitment to delivering your product on the agreed-upon schedule." },
              { metric: "0", label: "Major Customer Escapes (YTD)", description: "Zero instances of major quality issues reported by customers in the field this year." },
            ].map((item, index) => (
              <AnimatedSection key={item.label} delay={index * 0.1}>
                <div className="text-center p-6 rounded-2xl bg-illuminious-blue/20 h-full flex flex-col justify-center">
                  <div className="text-4xl font-bold text-white mb-2">{item.metric}</div>
                  <div className="text-base font-semibold text-white mb-2">{item.label}</div>
                  <div className="text-xs text-white/70">{item.description}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Downloads */}
      <section className="py-16 bg-white">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Download Our Certifications
            </h2>
            <p className="text-lg text-illuminious-navy/70">
              Access our official certification documents. Click to download.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <AnimatedSection delay={0.1}>
              <a
                href="/certificates/ISO-Certificate.pdf"
                download="Illuminious-ISO-Certificate.pdf"
                className="group flex items-center gap-4 p-6 rounded-2xl border border-illuminious-light bg-white hover:shadow-lg hover:border-illuminious-blue transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-illuminious-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-illuminious-blue transition-colors">
                  <Download className="w-7 h-7 text-illuminious-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-illuminious-navy text-lg">ISO Certificate</h3>
                  <p className="text-sm text-illuminious-sky">ISO 9001:2015 Quality Management System</p>
                </div>
              </a>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <a
                href="/certificates/SMETA-Audit-Report.pdf"
                download="Illuminious-SMETA-Audit-Report.pdf"
                className="group flex items-center gap-4 p-6 rounded-2xl border border-illuminious-light bg-white hover:shadow-lg hover:border-illuminious-blue transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-illuminious-blue/10 flex items-center justify-center flex-shrink-0 group-hover:bg-illuminious-blue transition-colors">
                  <Download className="w-7 h-7 text-illuminious-blue group-hover:text-white transition-colors" />
                </div>
                <div>
                  <h3 className="font-bold text-illuminious-navy text-lg">SMETA Audit Report</h3>
                  <p className="text-sm text-illuminious-sky">Sedex Members Ethical Trade Audit</p>
                </div>
              </a>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Partner with a Manufacturer You Can Trust
            </h2>
            <p className="text-lg text-illuminious-navy/70 mb-8">
              Ready to bring your product to life with a partner who prioritizes quality above all else? Contact our team to discuss your project requirements, request our detailed quality manual, or schedule a remote or in-person factory audit.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <Link href="/contact">
                Contact Our Quality Team
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}

