import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Globe, Package, ShieldCheck, Truck, Cpu, Warehouse, Recycle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "Resilient & Efficient" },
  { id: "capabilities", title: "Core Capabilities" },
  { id: "process", title: "Our Management Process" },
  { id: "logistics", title: "Global Logistics" },
  { id: "faq", title: "Frequently Asked Questions" },
  { id: "cta", title: "Optimize Your Supply Chain" },
];

const capabilities = [
  { icon: Globe, title: "Global Component Sourcing", text: "Our procurement teams in Shenzhen, Batam, and North America source billions of components annually. We leverage our immense purchasing power and direct relationships with semiconductor manufacturers and authorized distributors like Arrow, Avnet, and Digi-Key to secure competitive pricing, favorable lead times, and access to allocated stock. Our proprietary database tracks over 500 million unique part numbers, giving us unparalleled market intelligence." },
  { icon: ShieldCheck, title: "Proactive Risk Mitigation", text: "We employ a multi-layered risk mitigation strategy using advanced analytics and real-time market intelligence from platforms like SiliconExpert and Z2Data. This includes multi-sourcing for critical components, identifying pin-to-pin compatible alternatives, last-time-buy management for EOL parts, and continuous monitoring of geopolitical, environmental, and market-specific risks. Our goal is to build resilience deep within your supply chain, not just react to disruptions." },
  { icon: Package, title: "Advanced Inventory Management", text: "We offer customized inventory solutions beyond standard VMI and JIT. This includes strategic buffering of critical components, consignment programs, and bonded inventory at our global facilities. By analyzing your production forecasts and market volatility, we design a program that optimizes cash flow, minimizes carrying costs, and guarantees production continuity, even during periods of extreme component shortages." },
  { icon: Factory, title: "Supplier Quality Engineering (SQE)", text: "Our global SQE teams are the guardians of your product quality. They work on-site with our 350+ qualified suppliers, conducting rigorous process audits based on VDA 6.3 standards, implementing Statistical Process Control (SPC), and driving continuous improvement initiatives. Every supplier is continuously monitored for performance on quality, delivery, and cost, ensuring they meet our stringent standards, and by extension, yours." },
  { icon: Truck, title: "End-to-End Logistics & Fulfillment", text: "From our factory floor to your customer's door, we provide a seamless global logistics experience. We manage multi-modal freight (air, sea, land), customs brokerage in over 60 countries, and final-mile delivery. We are experts in complex shipping requirements, including Delivered Duty Paid (DDP) incoterms, and provide full track-and-trace visibility through our integrated logistics portal. Our Shenzhen and Batam locations act as strategic export hubs for Asia and the world." },
  { icon: CheckCircle, title: "Regulatory & Compliance Assurance", text: "Our dedicated compliance team ensures your products and components meet all international standards, including RoHS, REACH, Conflict Minerals (3TG), and Prop 65. We manage the entire compliance lifecycle, from material declaration collection and validation to generating certificates of compliance. This protects you from costly penalties and ensures market access for your products globally." },
  { icon: Cpu, title: "Alternate & Obsolete Part Management", text: "Component obsolescence is a major threat to product longevity. Our Component Engineering team specializes in finding form, fit, and function (FFF) compatible replacements for obsolete or hard-to-find parts. We use advanced databases to predict component lifecycles and recommend proactive redesigns, ensuring your product can be manufactured for years to come." },
  { icon: Recycle, title: "Circular Economy & E-Waste Services", text: "We are committed to sustainable manufacturing. Our reverse logistics programs manage product returns, repairs, and refurbishment, extending product life and reducing waste. For end-of-life products, we partner with certified e-waste recyclers to ensure environmentally responsible disposal, helping you meet your corporate social responsibility (CSR) goals." },
];

const processSteps = [
    { name: "BOM Scrub & Strategy Development", description: "Our process begins with a deep-dive analysis of your Bill of Materials (BOM). Using our proprietary software and market intelligence, we 'scrub' the BOM, identifying high-risk, single-source, and long-lead-time components. We then develop a comprehensive sourcing strategy that balances cost, availability, and risk, presenting you with a detailed cost-reduction and risk-mitigation roadmap." },
    { name: "Strategic Sourcing & Supplier Qualification", description: "Leveraging our extensive Qualified Vendor List (QVL) of over 350 audited suppliers, we execute the sourcing strategy. For new or unique components, our sourcing engineers identify and qualify new suppliers through a rigorous, multi-stage process that includes financial stability checks, quality system audits (ISO 9001, IATF 16949), and on-site process verification. We ensure every supplier is a long-term partner." },
    { name: "System-Driven Procurement & PO Execution", description: "All procurement activities are managed through our integrated Oracle ERP system. Purchase Orders (POs) are automatically generated and tracked, providing real-time visibility into component pricing, delivery schedules, and supplier acknowledgments. This system-driven approach minimizes manual errors, ensures purchasing discipline, and creates a complete audit trail for every transaction." },
    { name: "Rigorous Incoming Quality Control (IQC)", description: "Quality is paramount. All incoming components are subjected to a rigorous IQC process at our climate-controlled warehouses in Shenzhen and Batam. This includes visual inspection, dimensional verification, and functional testing using advanced equipment like X-ray fluorescence (XRF) analyzers for RoHS compliance and digital microscopes for counterfeit detection. No component reaches the production floor without passing IQC." },
    { name: "Global Logistics & Dynamic Fulfillment", description: "Once your product is manufactured, our logistics team takes over. We manage finished goods inventory and coordinate global shipments based on your sales forecasts and real-time demand signals. We offer a range of fulfillment models, including direct-to-customer shipping, bulk shipments to distribution centers, and complex multi-destination orders. Our goal is to provide a flexible, reliable, and cost-effective final link in your supply chain." },
];

const faqs = [
    {
        question: "What is the difference between a distributor and a direct manufacturer relationship?",
        answer: "Distributors (like Arrow, Avnet) hold inventory from multiple manufacturers, offering a wide selection and immediate availability. Direct relationships with component manufacturers (like Texas Instruments, STMicroelectronics) provide better pricing on high-volume orders, direct technical support, and better visibility into their production roadmap. We leverage both types of relationships to optimize your sourcing strategy based on volume, cost, and lead time requirements."
    },
    {
        question: "How do you handle counterfeit components?",
        answer: "We have a zero-tolerance policy for counterfeit parts. Our strategy is multi-pronged: 1) We procure exclusively from authorized distributors or direct from the OCM (Original Component Manufacturer). 2) Our IQC process includes detailed visual inspections, marking and packaging analysis, and testing. 3) We are members of industry anti-counterfeit groups like GIDEP and ERAI, staying updated on the latest threats and best practices."
    },
    {
        question: "What is a Vendor-Managed Inventory (VMI) program?",
        answer: "In a VMI program, we (the supplier) take responsibility for managing your inventory levels. We monitor your consumption rates and automatically replenish stock at your facility or our nearby warehouse. This eliminates the need for you to place purchase orders, reduces your inventory holding costs, and prevents stockouts. It's a partnership that improves efficiency and cash flow."
    },
    {
        question: "Can you source components in a specific country of origin?",
        answer: "Yes. We have deep sourcing networks across Asia (China, Taiwan, Malaysia, Vietnam), Europe, and North America. If you have specific country-of-origin requirements due to tariffs (e.g., Section 301), trade agreements, or customer mandates, we can tailor our sourcing strategy to meet those needs while still balancing cost and availability."
    },
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

export default function ServiceSupplyChain() {
  return (
    <>
      <SEO
        title="Supply Chain Management Services | Global Sourcing & Logistics | Illuminious"
        description="Build a resilient and cost-effective supply chain with our end-to-end management services, including global component sourcing, risk mitigation, and logistics."
        keywords="Supply chain management, global sourcing, component procurement, logistics services, inventory management, risk mitigation"
        url="/services/supply-chain-management"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-supply-chain-manager.jpg"
            alt="A digital map showing a global logistics network"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Supply Chain Management" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Supply Chain Management
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Building resilient, intelligent, and cost-effective supply chains that give you a competitive edge.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Strategic Core of Modern Electronics</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    In today's volatile global market, a product is only as strong as its supply chain. Managing hundreds of suppliers, navigating complex logistics, and mitigating unforeseen risks can divert critical resources from your core focus: innovation and growth. An optimized supply chain is not a cost center; it is a strategic weapon that determines your speed to market, product cost, and ability to respond to unexpected challenges. Without a robust strategy, even the most innovative product can fail due to a single missing component.
                  </p>
                  <p>
                    At Illuminious, we treat your supply chain as an extension of our own. As a vertically integrated manufacturer with factories in Shenzhen and Batam, we have built a robust and resilient global network for ourselves, and we extend that entire infrastructure to you. Our dedicated supply chain management team, comprised of over 150 procurement specialists, component engineers, and logistics coordinators, becomes your team. We handle everything from strategic sourcing and supplier management to global logistics and regulatory compliance, providing the stability and expertise you need to scale with confidence.
                  </p>
                   <p>
                    Our approach is data-driven and proactive. We don't just buy parts; we architect a supply chain designed for resilience and efficiency. By leveraging real-time market data, direct manufacturer relationships, and decades of manufacturing experience, we anticipate problems before they occur. This allows you to focus on designing and selling great products, secure in the knowledge that your supply chain is a source of competitive advantage, not a source of risk.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_supplychain-img-3.jpg" alt="Supply chain manager working at a computer with logistics data" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Core Supply Chain Capabilities</h2>
              <p className="text-lg text-illuminious-sky">
                A full suite of services to manage your supply chain from end to end, ensuring quality, cost-effectiveness, and on-time delivery.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Supply Chain Management Process</h2>
              <p className="text-lg text-illuminious-sky">
                A structured, data-driven approach to managing every facet of your supply chain.
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

        {/* Logistics Section */}
        <section id="logistics" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_supplychain-img-2.jpg" alt="Cargo ship and airplane representing global logistics" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Global Logistics & Fulfillment</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    Getting your product to market is the final, critical step. We provide flexible and reliable logistics solutions to meet your budget and timeline. Our expertise in international trade and our strategic locations in Shenzhen and Batam allow us to navigate the complexities of global freight with ease.
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>Flexible Freight Options:</strong> We offer a range of options including express courier (DHL, FedEx), air freight, and sea freight (FCL/LCL) to balance speed and cost.
                    </li>
                    <li>
                      <strong>Customs & Compliance:</strong> Our in-house customs brokers manage all import/export documentation and ensure compliance with international trade regulations.
                    </li>
                    <li>
                      <strong>DDP Shipping:</strong> We are experts in Delivered Duty Paid (DDP) shipping, handling all duties and taxes to provide a seamless delivery experience for your end customers.
                    </li>
                     <li>
                      <strong>Global Warehousing:</strong> We maintain secure warehouses in Asia, North America, and Europe for strategic inventory positioning and rapid fulfillment.
                    </li>
                  </ul>
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
                    <p className="text-lg text-illuminious-sky">
                        Answering your key questions about our supply chain management services.
                    </p>
                </AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="bg-illuminious-light/30 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg text-illuminious-navy mb-2">{faq.question}</h3>
                                    <p className="text-illuminious-navy leading-relaxed">{faq.answer}</p>
                                </div>
                            </AnimatedSection>
                        ))}
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-blue text-white">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold mb-4 font-heading">Ready to Build a World-Class Supply Chain?</h2>
              <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
                Let our experts handle the complexities of sourcing, procurement, and logistics, so you can focus on what you do best. Contact us today for a free supply chain analysis.
              </p>
              <Button asChild size="lg" className="px-8 rounded-full bg-white text-illuminious-blue hover:bg-gray-200 transition-colors">
                <Link to="/contact">
                  Contact Us <ArrowRight className="ml-2 w-5 h-5" />
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

