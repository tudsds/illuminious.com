import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, FileText, Heart, Microscope, ShieldCheck, Stethoscope, Users, Cpu, TestTube, Syringe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Profound Responsibility",
  },
  {
    id: "capabilities",
    title: "MedTech Capabilities",
  },
  {
    id: "quality",
    title: "Quality & Regulatory",
  },
  {
    id: "advantage",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { 
    icon: ShieldCheck, 
    title: "ISO 13485 & FDA Registered QMS", 
    text: "Our operation is governed by a QMS certified to ISO 13485:2016 and compliant with FDA's 21 CFR Part 820. This is an active system dictating our processes for risk management, change control, and documentation, ensuring global compliance." 
  },
  { 
    icon: Microscope, 
    title: "Class 7 (10,000) Cleanroom", 
    text: "We operate dedicated, environmentally controlled Class 10,000 (ISO 7) cleanrooms for assembling devices sensitive to particulate and microbial contamination, featuring strict gowning protocols and continuous environmental monitoring." 
  },
  { 
    icon: Cpu, 
    title: "Micro-Assembly & Miniaturization", 
    text: "Our SMT lines handle ultra-fine pitch components (01005) and complex packages with placement accuracy down to ±25µm. We utilize 3D SPI and AOI to ensure flawless execution for ever-smaller and more complex medical devices." 
  },
  { 
    icon: FileText, 
    title: "Comprehensive DHR & Traceability", 
    text: "Our proprietary MES captures a complete Device History Record (DHR) for every unit, linking component batches, equipment, operators, and test results to a unique serial number for unparalleled, audit-proof traceability." 
  },
  { 
    icon: Stethoscope, 
    title: "Process Validation (IQ/OQ/PQ)", 
    text: "We provide full process validation services, developing protocols for Installation (IQ), Operational (OQ), and Performance Qualification (PQ) to ensure your manufacturing process is robust, repeatable, and compliant." 
  },
  { 
    icon: Heart, 
    title: "Biocompatibility & Sterilization", 
    text: "We manage the entire supply chain for biocompatible materials (e.g., USP Class VI plastics) and coordinate with certified partners for terminal sterilization (EtO, Gamma, E-beam), including all logistics and documentation." 
  },
  { 
    icon: Users, 
    title: "Regulatory Documentation Support", 
    text: "Our experienced team provides comprehensive, submission-ready documentation packages to support your FDA 510(k), De Novo, PMA, and European MDR/IVDR Technical Files, acting as an extension of your own regulatory affairs department." 
  },
  { 
    icon: TestTube, 
    title: "Medical-Grade Supply Chain", 
    text: "We manage a secure and resilient supply chain through rigorous supplier qualification, incoming material testing, and a robust counterfeit component prevention program, maintaining a strictly controlled Approved Supplier List (ASL)." 
  },
];

const productExamples = [
    { title: "Diagnostic & Monitoring", description: "Point-of-care diagnostic instruments, remote patient monitoring systems, vital sign wearables, and continuous glucose monitors (CGMs)." },
    { title: "Therapeutic & Surgical", description: "Drug delivery devices, infusion pumps, neuromodulation systems, surgical navigation consoles, and energy-based therapeutic tools." },
    { title: "Life Sciences & Laboratory", description: "Next-generation DNA sequencers, laboratory automation robotics, sample preparation instruments, and portable analysis systems." },
    { title: "Connected Health & Telemedicine", description: "Smart inhalers, connected respiratory therapy devices, telemedicine carts, and other IoT-enabled healthcare products." },
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

export default function IndustryMedical() {
  return (
    <>
      <SEO
        title="Medical Device Contract Manufacturing | ISO 13485 & FDA Registered"
        description="End-to-end medical device manufacturing partner certified to ISO 13485. Specializing in complex electronics, cleanroom assembly, full traceability (DHR), and regulatory support for FDA 510(k) & CE Mark submissions. We turn innovative MedTech concepts into market-ready products."
        keywords="medical device contract manufacturing, ISO 13485 certified, FDA registered manufacturer, MedTech manufacturing, cleanroom assembly, medical electronics, device history record, 21 CFR 820, medical device NPI"
        url="/industries/medical"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-clean-room-technician.jpg"
            alt="A technician in full cleanroom gear assembling a complex medical device"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Medical & Healthcare" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Manufacturing the Future of Medicine
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Precision, Quality, and Regulatory Adherence. We are the trusted manufacturing backbone for the world's most innovative and life-changing medical technologies.
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
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">A Profound Responsibility: Manufacturing for a Healthier World</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    In the field of medical device manufacturing, there is absolutely no margin for error. The products assembled in our facilities are not mere electronics; they are instruments of healing, diagnostics, and life support. They have a direct and profound impact on patient outcomes, clinical decisions, and the overall quality of life for people around the globe. This immense responsibility is the bedrock of our manufacturing philosophy. It informs every decision we make, from component sourcing and process validation to the final quality inspection of every single unit.
                  </p>
                  <p>
                    Illuminious is far more than a typical contract manufacturer; we are a dedicated, long-term partner in your mission to advance healthcare. We understand the unique challenges of the MedTech industry, including the drive for miniaturization, the critical importance of biocompatible materials, and the unforgiving nature of global regulatory standards. Our ISO 13485 certified facilities, advanced cleanroom environments, and deeply ingrained quality systems are purpose-built to meet and exceed these stringent requirements. We provide the deep manufacturing expertise, rigorous process controls, and comprehensive regulatory support you need to navigate the complex journey from a groundbreaking concept to a market-ready clinical solution, ensuring it is done safely, efficiently, and with complete traceability.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_ai-smart-glasses.jpg" alt="A modern, handheld medical diagnostic device being used by a clinician" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Specialized, End-to-End MedTech Manufacturing Capabilities</h2>
              <p className="text-xl text-gray-600">
                An integrated suite of services designed to de-risk your supply chain and accelerate your time-to-market for complex medical devices.
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
                    <p className="text-sm text-gray-600 leading-relaxed">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Quality & Regulatory Section */}
        <section id="quality" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/DEPLOYED_backup-quality-first-article-42.jpg" alt="A quality manager reviewing ISO 13485 compliance documentation in a modern factory setting" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">A Culture of Uncompromising Quality & Regulatory Excellence</h2>
                    <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                        <p>
                           In the medical device industry, compliance is not a department or a checklist; it is the fundamental basis of trust between a manufacturer, a medical professional, and a patient. Our culture is built upon this principle. Our quality system is not only designed to be fully compliant with the US FDA's 21 CFR Part 820 regulations but is also independently audited and certified to the ISO 13485:2016 global standard for medical device quality management.
                        </p>
                         <p>
                           This dual compliance ensures a comprehensive approach that covers everything from management responsibility and resource allocation to product realization and post-market feedback. Our facilities in Shenzhen and Batam are maintained in a state of constant audit readiness, prepared for scheduled and unannounced inspections by regulatory bodies, notified bodies, and our clients at any time. We view these audits not as a burden, but as a welcome opportunity to demonstrate our commitment and continuously improve our systems.
                        </p>
                    </div>
                </AnimatedSection>
            </div>
            <div className="mt-20 grid lg:grid-cols-2 gap-8">
                <AnimatedSection delay={0.2}>
                    <div className="bg-gray-50 p-8 rounded-lg h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-illuminious-navy font-heading">Proactive Risk Management (ISO 14971)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">We embed risk management into the entire product lifecycle. Using tools like Failure Mode and Effects Analysis (FMEA), we proactively identify potential hazards in both the product design and the manufacturing process. This analysis informs the development of robust controls to mitigate risks to an acceptable level, all documented in a comprehensive Risk Management File.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div className="bg-gray-50 p-8 rounded-lg h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-illuminious-navy font-heading">Rigorous Change Control & Validation</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">No change, however small, is made without a formal evaluation. Our rigorous change control process ensures that any proposed modification to a component, process, or piece of equipment is formally documented, reviewed for its impact on safety and efficacy, validated to prove it meets requirements, and approved by all stakeholders before implementation.</p>
                    </div>
                </AnimatedSection>
                 <AnimatedSection delay={0.4}>
                    <div className="bg-gray-50 p-8 rounded-lg h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-illuminious-navy font-heading">Total Traceability & DHR</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">We provide a complete genealogy for every device. Our MES ensures that the Device History Record (DHR) for each serialized unit contains a detailed record of its journey, including all sub-assemblies, component lot numbers, software versions, operator IDs, cycle times, and parametric test data. This allows for surgical precision in the event of a field inquiry or recall.</p>
                    </div>
                </AnimatedSection>
                 <AnimatedSection delay={0.5}>
                    <div className="bg-gray-50 p-8 rounded-lg h-full">
                        <div className="flex items-center gap-4 mb-4">
                            <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0" />
                            <h3 className="text-2xl font-bold text-illuminious-navy font-heading">Corrective and Preventive Action (CAPA)</h3>
                        </div>
                        <p className="text-gray-700 leading-relaxed">Our CAPA system is the engine of our continuous improvement. When a non-conformance is identified—whether from an internal audit, a production line issue, or customer feedback—a formal CAPA process is initiated. We use structured problem-solving methodologies to determine the root cause, implement effective corrective actions, and verify that the solution prevents recurrence.</p>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="advantage" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">The Manufacturing Partner for Medical Innovators</h2>
              <p className="text-xl text-gray-600">
                We combine the stringent quality systems of a world-class medical manufacturer with the agility and dedicated support required by innovative startups and growth-stage companies.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                {productExamples.map((item, index) => (
                    <AnimatedSection key={item.title} delay={index * 0.1}>
                        <div className="bg-white rounded-lg shadow-lg p-6 h-full">
                            <h3 className="text-xl font-bold text-illuminious-blue mb-3 font-heading">{item.title}</h3>
                            <p className="text-gray-600">{item.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center mt-20">
                <AnimatedSection delay={0.2}>
                    <div className="space-y-6">
                        <h3 className="text-3xl font-bold text-illuminious-navy font-heading">From Prototype to Production Under One Roof</h3>
                        <p className="text-gray-700 leading-relaxed">We specialize in guiding MedTech innovators through the entire New Product Introduction (NPI) process. Our US-based engineering team works with you on Design for Manufacturability (DFM) and Design for Test (DFT) early in the cycle, ensuring your design is optimized for scalable, cost-effective production. We then manage the seamless transition from low-volume prototype runs in our NPI lines to high-volume mass production in our dedicated facilities.</p>
                        <h4 className="text-xl font-bold text-illuminious-navy font-heading pt-4">Case Study: Wearable Diagnostic Device</h4>
                        <p className="text-gray-700 leading-relaxed border-l-4 border-illuminious-blue pl-6">A Silicon Valley startup approached us with a functional prototype for a wearable cardiac monitor. It worked, but it was not manufacturable at scale. Our engineers collaborated with their team to redesign the PCB layout, select more reliable components, and develop a custom enclosure for biocompatibility. We produced 500 units for their clinical trials and, following successful FDA clearance, scaled production to 20,000 units per month.</p>
                    </div>
                </AnimatedSection>
                <AnimatedSection delay={0.3}>
                    <div className="space-y-6">
                         <h3 className="text-3xl font-bold text-illuminious-navy font-heading">Unwavering Commitment to IP Protection</h3>
                        <p className="text-gray-700 leading-relaxed">We understand that your intellectual property is your most valuable asset. As a US-managed company, all contracts and NDAs are under US law. Our factories are wholly owned and operated by Illuminious—we do not use subcontractors. Access to sensitive project data is strictly controlled through our secure, segregated network infrastructure, providing peace of mind that is impossible to achieve with brokers or third-party factory models.</p>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-24 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl lg:text-4xl font-bold text-white mb-4 font-heading">Let's Build the Future of Healthcare, Together.</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Your innovation deserves a manufacturing partner that understands the critical intersection of technology, quality, and patient safety. Contact our medical device team today for a confidential consultation to discuss your project's specific needs.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-10 py-6 text-lg">
                <Link href="/contact">
                  Schedule a Confidential Consultation
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
