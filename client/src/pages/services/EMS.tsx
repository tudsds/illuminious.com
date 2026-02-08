import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Cpu, Factory, Layers, ShieldCheck, Truck, Wrench, TestTube, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "Your Strategic Manufacturing Partner" },
  { id: "capabilities", title: "Our Core EMS Capabilities" },
  { id: "process", title: "Our Engagement & Production Model" },
  { id: "tech-specs", title: "Technical Specifications" },
  { id: "why-us", title: "The Illuminious Difference" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "cta", title: "Begin Your Manufacturing Journey" },
];

const capabilities = [
  { 
    icon: Layers, 
    title: "Advanced PCB Assembly (PCBA)", 
    text: "Our facilities feature multiple high-speed SMT lines from leading brands like Fuji and Panasonic, capable of placing components down to 01005 imperial size with a precision of ±25μm. We handle complex, high-layer count boards, rigid-flex, and exotic substrates, supported by 3D Solder Paste Inspection (SPI), Automated Optical Inspection (AOI), and 3D X-Ray (AXI) for BGA and complex packages." 
  },
  { 
    icon: Factory, 
    title: "Complex Box Build & System Integration", 
    text: "We provide full system assembly, integrating PCBs, custom mechanical enclosures, power supplies, cable harnesses, and user interfaces. Our dedicated box build cells are equipped for complex electromechanical assembly, software flashing, final configuration, and functional testing to deliver a market-ready product." 
  },
  { 
    icon: Cpu, 
    title: "New Product Introduction (NPI)", 
    text: "Our structured NPI process is designed to de-risk your product launch. A dedicated NPI team works with you to refine your design for manufacturability (DFM), establish robust quality control plans, develop detailed assembly instructions (WI), and create comprehensive test procedures before scaling to mass production." 
  },
  { 
    icon: Wrench, 
    title: "Design for Excellence (DFX)", 
    text: "Our engineering team provides critical DFX analysis, including Design for Manufacturing (DFM), Design for Assembly (DFA), and Design for Test (DFT). By optimizing your design early, we reduce costs, improve yields, and enhance long-term product reliability, ensuring a smooth transition from prototype to volume production." 
  },
  { 
    icon: Truck, 
    title: "Global Supply Chain Management", 
    text: "We offer end-to-end supply chain orchestration, from strategic component sourcing and vendor qualification to global inventory management and logistics. Our deep supplier relationships and market intelligence help mitigate risks, secure competitive pricing, and ensure continuity of supply for critical components." 
  },
  { 
    icon: TestTube, 
    title: "Advanced Test Development", 
    text: "Beyond standard testing, we develop custom test solutions. This includes creating functional test jigs and fixtures, writing automated test scripts, and integrating In-Circuit Test (ICT) with flying probe or bed-of-nails systems. We also perform Environmental Stress Screening (ESS) and Highly Accelerated Life Testing (HALT) to ensure product robustness." 
  },
  { 
    icon: ShieldCheck, 
    title: "Testing & Quality Assurance", 
    text: "Quality is embedded in our process. We employ a multi-layered testing strategy, including ICT, FCT, and burn-in testing. Our quality management system is certified to ISO 9001, ISO 13485 (Medical), and AS9100 (Aerospace), ensuring full traceability and process control through our proprietary Factory OS." 
  },
  { 
    icon: CheckCircle, 
    title: "Lifecycle & Sustaining Services", 
    text: "We partner with you for the entire product lifecycle. Our services include managing component obsolescence, handling firmware updates, and providing aftermarket support such as warranty, repair, and end-of-life (EOL) management to maximize your product's longevity and value." 
  },
];

const processSteps = [
  { name: "1. RFQ & DFM Analysis", description: "The process begins when you submit your RFQ package, including Gerbers, BOM, and CAD files. Our engineering team conducts a thorough DFM/DFA analysis, providing detailed feedback to optimize your design for high-yield manufacturing and cost efficiency before issuing a comprehensive quote." },
  { name: "2. Prototyping & Validation", description: "We build initial prototypes on our dedicated NPI line. This critical phase allows for hands-on validation of the design, assembly process, and test procedures. We work closely with your team to analyze the results and make any necessary refinements to ensure the product is robust and ready for scale." },
  { name: "3. Sourcing & Supply Chain Setup", description: "Once the design is frozen, our supply chain team engages our global network of qualified vendors to source all components. We establish a resilient supply chain, managing lead times, securing buffer stock for critical items, and setting up the logistics for incoming materials to our factories." },
  { name: "4. Mass Production & Scaling", description: "Production is ramped up on our main assembly lines. Our Factory OS provides real-time monitoring of key performance indicators (KPIs) like first pass yield and machine uptime. Continuous process improvement methodologies are employed to maximize throughput and maintain stringent quality standards as volume increases." },
  { name: "5. Quality & Test Engineering", description: "Throughout production, our quality engineers oversee a rigorous testing protocol. This includes automated inspection (SPI, AOI, AXI), in-circuit testing (ICT), and custom functional testing (FCT). All test data is logged for full traceability, allowing for rapid root cause analysis and corrective action if any deviations occur." },
  { name: "6. System Integration & Logistics", description: "Post-PCBA, products move to our system integration cells for final assembly, software loading, and packaging. We then manage the global logistics, shipping finished goods to your distribution centers or drop-shipping directly to your end customers, providing a complete factory-to-door solution." },
];

const faqs = [
    { q: "What certifications do your factories hold?", a: "Our factories in Shenzhen, China, and Batam, Indonesia, are certified to ISO 9001:2015, ISO 13485:2016 for medical devices, and AS9100D for aerospace, defense, and aviation. We also comply with IPC-A-610 Class 2 and Class 3 workmanship standards." },
    { q: "What is your typical lead time for a new project?", a: "Lead times vary based on complexity and component availability. A typical NPI project takes 8-12 weeks from RFQ to first prototype shipment. Once in mass production, we work with you to establish a production schedule that aligns with your market demand and inventory strategy." },
    { q: "How do you handle component sourcing and prevent counterfeits?", a: "We source components exclusively from authorized distributors and original component manufacturers (OCMs). Our incoming quality control includes component verification and testing to prevent counterfeit parts from entering our supply chain. We provide full component traceability for all projects." },
    { q: "Can you support high-mix, low-volume production?", a: "Yes. Our flexible manufacturing lines and NPI-focused processes are well-suited for high-mix, low-volume (HMLV) production. We can efficiently manage frequent changeovers while maintaining strict process control and quality standards for each product variant." },
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

export default function ServiceEMS() {
  return (
    <>
      <SEO
        title="Electronics Manufacturing Services (EMS) | Illuminious"
        description="Your trusted EMS partner for reliable, scalable, and high-quality electronics manufacturing, from PCBA to full system assembly and testing."
        keywords="Electronics Manufacturing Services, EMS provider, contract manufacturing, PCBA, box build assembly, electronics assembly, ISO 13485, AS9100"
        url="/services/ems"
      />
      <Header />

      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/ems-img-1.jpg"
            alt="A high-speed SMT assembly line in a modern factory"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Electronics Manufacturing Services (EMS)" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Electronics Manufacturing Services (EMS)
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                A strategic partnership for building complex, reliable electronic products at scale.
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
        <section id="overview" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Manufacturing Is More Than Just Assembly</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    You've invested immense resources into designing an innovative electronic product. Now, the challenge shifts to manufacturing that product reliably, at scale, and to your exacting quality standards. Selecting the right Electronics Manufacturing Services (EMS) provider is not merely a procurement decision; it is one of the most critical strategic choices for your business. A true EMS partner goes beyond simply populating circuit boards; they become an integral extension of your team, safeguarding your intellectual property and brand reputation.
                  </p>
                  <p>
                    At Illuminious, we provide a comprehensive suite of EMS solutions engineered to de-risk your supply chain and accelerate your time to market. We understand that manufacturing excellence is a holistic endeavor, encompassing everything from initial design analysis to global logistics. Our approach is built on a foundation of deep engineering expertise, data-driven process control, and a commitment to transparent collaboration. We provide the infrastructure, systems, and expertise to manage complexity, allowing you to focus on your core competencies: innovation and growth.
                  </p>
                   <p>
                    Our state-of-the-art facilities in Shenzhen and Batam are not just assembly lines; they are highly integrated manufacturing ecosystems. Powered by our proprietary Factory OS, we capture and analyze data from every step of the process, ensuring unparalleled traceability and quality control. From complex PCB assembly to full system integration and direct-to-customer fulfillment, we offer a single, accountable partner for your entire manufacturing operation, ensuring your product is built right, every time.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-quality-control-inspection.jpg" alt="An engineer performing a quality control inspection on a PCB" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Core EMS Capabilities</h2>
              <p className="text-lg text-gray-600">
                A full spectrum of vertically integrated services to take your product from design to global delivery.
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

        <section id="process" className="py-20 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Engagement & Production Model</h2>
              <p className="text-lg text-gray-600">
                A transparent, structured, and collaborative process for a seamless manufacturing partnership.
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

        <section id="tech-specs" className="py-20 bg-gray-50">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
                    <p className="text-lg text-gray-600">
                        A detailed look at our manufacturing tolerances, standards, and certifications.
                    </p>
                </AnimatedSection>
                <AnimatedSection delay={0.1}>
                    <div className="overflow-x-auto bg-white rounded-lg shadow-lg">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-100">
                                <tr>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Capability</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Specification</th>
                                    <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Notes</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">SMT Component Size</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">01005 to 74x74mm</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Fine-pitch BGA and QFP capabilities.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Placement Accuracy</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">±25μm @ 3σ</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">High-precision placement for dense boards.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Board Dimensions</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">Up to 460 x 510mm</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Support for large format PCBs.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Inspection Systems</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">3D SPI, 3D AOI, 3D AXI (X-Ray)</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Comprehensive inspection for defect detection.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Workmanship Standards</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">IPC-A-610 Class 2 & Class 3</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Adherence to industry-leading quality standards.</td>
                                </tr>
                                <tr>
                                    <td className="px-6 py-4 whitespace-nowrap font-medium text-gray-900">Quality Certifications</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-700">ISO 9001, ISO 13485, AS9100D</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-gray-500">Certified for general, medical, and aerospace.</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </AnimatedSection>
            </div>
        </section>

        <section id="why-us" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/ems-img-3.jpg" alt="The modern exterior of the Illuminious manufacturing facility" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Difference</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">True Vertical Integration</h4>
                      <p>Unlike many EMS providers who are primarily brokers, we own and operate our factories. From PCBA and injection molding to final assembly and testing, we control the entire process. This vertical integration ensures higher quality, greater accountability, and more predictable outcomes for your project.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Data-Driven Quality via Factory OS</h4>
                      <p>Our proprietary Factory OS is the digital backbone of our operations. It provides real-time traceability from individual components to final products and monitors process parameters from every machine and operator. This data-driven approach allows for proactive quality control and continuous improvement, minimizing defects and maximizing yield.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Global Footprint, US-Managed Support</h4>
                      <p>With our advanced manufacturing facilities in Shenzhen and Batam, you gain the cost efficiencies of a global manufacturing footprint. Crucially, all projects are managed by our US-based engineering and project management teams, ensuring clear communication, cultural alignment, and the convenience of local, expert support for your business.</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="faq" className="py-20 bg-gray-50">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Answers to common questions about our electronics manufacturing services.
                    </p>
                </AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="bg-white p-6 rounded-lg shadow-md">
                                    <h4 className="font-bold text-lg text-illuminious-navy mb-2">{faq.q}</h4>
                                    <p className="text-gray-700 leading-relaxed">{faq.a}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Scale Your Production?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Contact our manufacturing experts to get a detailed quote for your project. Let us show you how a true manufacturing partner can transform your business and accelerate your growth.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Manufacturing Quote
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
