import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Factory, ShieldCheck, Users, Wrench, PackageCheck, Layers, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Your Vision, Our Factory",
  },
  {
    id: "capabilities",
    title: "Our OEM Capabilities",
  },
  {
    id: "process",
    title: "Our OEM Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "faq",
    title: "OEM FAQs",
  },
  {
    id: "cta",
    title: "Build Your Product",
  },
];

const capabilities = [
  { icon: Factory, title: "Dedicated Production Lines", text: "We establish fully-segregated, dedicated production lines in our Shenzhen or Batam facilities, configured exclusively for your product. This ensures process consistency, prevents cross-contamination, and allows for specialized automation and quality control setups, like our Yamaha YSM20 SMT lines and Kurtz Ersa VERSAFLOW 3/45 selective soldering machines, to maximize throughput and yield for high-volume runs." },
  { icon: Users, title: "Integrated Program Management", text: "A dedicated US-based program manager, fluent in both English and Mandarin, acts as your single point of contact. They coordinate all activities between your engineering team and our factory floor, providing weekly progress reports, managing schedules, and ensuring seamless communication to mitigate risks and keep your project on track from NPI to end-of-life." },
  { icon: Wrench, title: "Advanced Tooling & Fixture Fabrication", text: "Our in-house tooling department utilizes high-precision CNC machining centers and EDM machines to design and fabricate custom injection molds, complex assembly jigs, and automated test fixtures. We work with a variety of materials, from P20 and H13 tool steels for molds to ESD-safe polymers for fixtures, ensuring perfect compliance with your product specifications and a long operational life." },
  { icon: ShieldCheck, title: "Rigorous IP & Data Security", text: "Your intellectual property is sacrosanct and protected under a US legal framework. We enforce stringent, multi-layered security protocols including physical access controls, network segmentation, encrypted data storage, and comprehensive NDAs with all employees and upstream suppliers. Our facilities are regularly audited to maintain TISAX and ISO/IEC 27001 compliance for information security management." },
  { icon: CircuitBoard, title: "Full Turnkey System Integration (Box-Build)", text: "We go far beyond PCBA. Our service covers complete 'box-build' assembly, including the integration of PCBs into custom enclosures, installation of daughter cards, wiring harnesses, power supplies, and user interfaces. We manage the full process, from sub-assembly to final product testing, software flashing, and custom firmware loading, delivering a market-ready product." },
  { icon: PackageCheck, title: "Supply Chain & Global Logistics Management", text: "Leveraging our deep network of vetted component suppliers and logistics partners, we manage your entire supply chain. This includes strategic sourcing, counterfeit component prevention (compliant with AS6081 standards), inventory management, and coordinating global freight, customs clearance, and final delivery to your distribution centers, providing true end-to-end service." },
  { icon: Layers, title: "Multi-Layered Quality & Testing Protocol", text: "Quality is not just a final check; it's embedded in every step. Our process includes 3D Solder Paste Inspection (SPI), Automated Optical Inspection (AOI) post-reflow, in-house X-ray inspection for BGAs, In-Circuit Testing (ICT) with Keysight i3070 systems, and custom functional testing (FCT) to guarantee every unit meets your exact performance, safety, and reliability standards." },
  { icon: CheckCircle, title: "Comprehensive Regulatory & Compliance Support", text: "Navigating the complex landscape of global product certifications is a core competency. We manage the entire process for certifications such as FCC, CE, UL, CSA, and RoHS. Our team prepares all necessary documentation, submits to certified labs (like TÜV SÜD or Intertek), and manages any required design modifications to ensure your product is fully compliant for its target markets." },
];

const processSteps = [
  { name: "1. Project Kick-off & Technical Deep Dive", description: "The engagement begins with a comprehensive review session led by your US-based Program Manager and our lead engineers. We meticulously analyze your CAD files, bill of materials (BOM), schematics, and quality specifications to ensure our team has an exhaustive understanding of your product's functional and cosmetic requirements." },
  { name: "2. DFM/DFA Analysis & Transparent Quotation", description: "Our engineering team performs a detailed Design for Manufacturability (DFM) and Design for Assembly (DFA) analysis. We provide actionable feedback to optimize your design for cost, yield, and reliability. Following this, you receive a fully transparent, itemized quotation with no hidden costs, detailing tooling, per-unit price, and NRE charges." },
  { name: "3. Tooling Fabrication & First Article Inspection (FAI)", description: "Upon approval, we commence fabrication of all necessary hard tooling, such as injection molds and stamping dies. We then produce a small batch of 'First Article' samples. These units undergo a rigorous FAI process, where every dimension and specification is measured and documented in a detailed report for your formal approval." },
  { name: "4. Pilot Production & Process Validation (PV)", description: "After FAI approval, we initiate a pilot production run (typically 50-200 units). This critical step allows us to validate the entire manufacturing and testing process at scale, establish quality control parameters, and finalize work instructions. The PV run confirms our ability to consistently meet your quality standards before committing to mass production." },
  { name: "5. Mass Production & Sustaining Engineering", description: "With a validated process, we ramp up to full-scale mass production. Our quality team employs Statistical Process Control (SPC) to monitor key metrics in real-time. Your program manager provides continuous support, managing engineering change orders (ECOs) and coordinating ongoing efforts to optimize yield and reduce cost over the product's lifecycle." },
  { name: "6. Final Assembly, Packaging & Global Fulfillment", description: "The final stage involves complete system assembly, software installation, and final testing. Products are then packaged in your custom-branded retail or bulk packaging. Our logistics team coordinates with freight forwarders to manage the entire shipping process, from ex-factory pickup to final delivery at your designated warehouse or distribution center worldwide." },
];

const faqs = [
  {
    question: "What is the typical lead time for a new OEM project?",
    answer: "Lead times vary based on complexity. A typical project involves 4-6 weeks for tooling fabrication and First Article Inspection (FAI). After FAI approval, a pilot run takes about 2-3 weeks. Mass production lead times are generally 8-12 weeks, depending on component availability and production volume. Your Program Manager will provide a detailed project schedule during the kick-off phase."
  },
  {
    question: "How do you ensure the quality of sourced components?",
    answer: "We have a multi-pronged approach to component quality. We only source from authorized distributors or directly from the original component manufacturer (OCM). All incoming components undergo inspection and verification against a 'golden sample'. For critical components, we can provide material certifications and traceability documentation. Our anti-counterfeit program aligns with the SAE AS5553 standard."
  },
  {
    question: "What are your factory certifications?",
    answer: "Our facilities in Shenzhen, China, and Batam, Indonesia, are certified to ISO 9001:2015 (Quality Management), ISO 14001:2015 (Environmental Management), and ISO 45001:2018 (Occupational Health and Safety). We also hold specific certifications for medical device manufacturing (ISO 13485) and information security (ISO/IEC 27001), ensuring we meet the stringent requirements of various industries."
  },
  {
    question: "Can we visit your factories?",
    answer: "Absolutely. We encourage factory visits and audits. We believe in complete transparency and are proud of our clean, modern, and well-organized facilities. Please coordinate with your Program Manager to schedule a visit. We can facilitate everything from travel arrangements to on-site translation to ensure a productive and insightful trip."
  }
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

export default function ServiceOEM() {
  return (
    <>
      <SEO
        title="OEM Manufacturing Services | Original Equipment Manufacturer | Illuminious"
        description="Your design, our factory. We are a world-class Original Equipment Manufacturer (OEM) providing dedicated production, full system integration, and IP protection."
        keywords="OEM manufacturing, original equipment manufacturer, contract manufacturing, private label manufacturing, electronics oem, box build assembly, turnkey manufacturing"
        url="/services/oem"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-factory-floor-overview.jpg"
            alt="A clean, modern factory production line dedicated to a single product"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "OEM Manufacturing" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Original Equipment Manufacturing (OEM)
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Your design, our factory. We provide dedicated, high-volume manufacturing services to bring your product to market under your brand, with uncompromising quality and robust IP protection.
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
        <section id="overview" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">A True Manufacturing Partner</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                  As an Original Equipment Manufacturer (OEM), you require a manufacturing partner that functions as a seamless, integrated extension of your own operations. You need more than a simple supplier; you need a partner who delivers the scale, quality systems, and supply chain mastery of a Tier-1 manufacturer, while providing the focused attention, flexibility, and direct communication of a dedicated firm. This unique combination allows you to maintain strategic control while offloading the immense complexities of high-volume production.
                  </p>
                  <p>
                  This philosophy is the bedrock of Illuminious's OEM service model. We don't simply assemble your product; we construct a dedicated, resilient manufacturing ecosystem around it. This begins with physically segregated production lines and extends to dedicated, US-based program management, in-house tooling fabrication, and a multi-layered intellectual property protection strategy governed by US law. We manage the tactical execution—from sourcing and production to quality and logistics—freeing you to concentrate on your core competencies: innovation, marketing, and growing your brand.
                  </p>
                   <p>
                  Our approach provides a stable, predictable, and scalable production engine for your business. By owning and operating our factories in Shenzhen and Batam, we eliminate the risks associated with brokers and middlemen, ensuring direct control over quality, scheduling, and costs. This vertical integration means we are fully accountable for the entire process, providing you with a transparent, reliable, and world-class manufacturing solution designed for long-term partnership.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_oem-img-3.jpg" alt="A professional handshake in front of a factory floor" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Core OEM Capabilities</h2>
              <p className="text-lg text-gray-600">
                We offer an integrated suite of services designed to provide a complete, end-to-end manufacturing solution for established brands and high-growth companies. Our capabilities are engineered for scale, quality, and reliability.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4 flex-shrink-0">
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

        {/* Process Section */}
        <section id="process" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our OEM Engagement Process</h2>
              <p className="text-lg text-gray-600">
                A structured, six-step process ensures complete alignment, transparency, and flawless execution from initial concept to global delivery. This battle-tested methodology mitigates risk and guarantees a smooth production ramp.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                    <div className={`flex items-center ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                      <div className="w-1/2 px-8">
                        <AnimatedSection delay={index * 0.1}>
                          <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.name}</h3>
                          <p className={`text-gray-600 ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
                        </AnimatedSection>
                      </div>
                      <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg">
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
                  <img src="/images/DEPLOYED_placeholder-oem-partnership-handshake.jpg" alt="An inspector using a microscope to check a PCB for quality" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">US-Based Management & Accountability</h4>
                      <p>Your contract is with our US entity, providing you with the legal protection and clear communication of a domestic partnership. Your dedicated program manager operates from the US, ensuring there are no cultural or language barriers to overcome.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Owner-Operated Facilities</h4>
                      <p>Unlike manufacturing brokers, we own and operate our facilities in Shenzhen and Batam. This vertical integration gives us unparalleled control over quality, production scheduling, and process optimization, ensuring your product is built to spec, on time, every time.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Transparent Partnership Model</h4>
                      <p>We operate on a principle of radical transparency. You receive regular, detailed updates, access to real-time production data via our client portal, and are always welcome to visit our facilities. We view ourselves as your trusted partner, not just another vendor on a spreadsheet.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Answers to common questions about our OEM manufacturing process and partnership model.
                    </p>
                </AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="bg-gray-50 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg text-illuminious-navy mb-2 flex items-center gap-2">
                                      <HelpCircle className="w-5 h-5 text-illuminious-blue" />
                                      {faq.question}
                                    </h3>
                                    <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Scale Your Production?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Leverage our world-class facilities, robust quality systems, and US-managed manufacturing expertise to build and scale your product. Contact us today to discuss your OEM project with one of our manufacturing specialists and receive a detailed, transparent quotation.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Discuss Your OEM Project
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
