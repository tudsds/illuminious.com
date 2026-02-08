import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Globe, Network, ShieldCheck, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "The Foundation of Quality",
  },
  {
    id: "capabilities",
    title: "Our Sourcing Capabilities",
  },
  {
    id: "process",
    title: "Our Sourcing Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Optimize Your Supply Chain",
  },
];

const capabilities = [
  { icon: Globe, title: "Global Supplier Network", text: "A curated and audited network of over 500 component and material suppliers across Asia, North America, and Europe." },
  { icon: Users, title: "Supplier Quality Engineering (SQE)", text: "Our dedicated SQE team performs rigorous audits, qualifications, and ongoing performance management for all our suppliers." },
  { icon: Network, title: "Strategic Commodity Management", text: "Dedicated commodity managers who track market trends, secure favorable pricing, and manage supply for key categories like ICs, displays, and batteries." },
  { icon: ShieldCheck, title: "Risk Management & Resiliency", text: "We proactively identify and mitigate supply chain risks by dual-sourcing critical components and maintaining strategic inventory." },
  { icon: CheckCircle, title: "Component Engineering & VAVE", text: "Our engineers work with you to select the best components and identify cost-saving alternatives (Value Analysis/Value Engineering)." },
  { icon: ArrowRight, title: "End-to-End Traceability", text: "Complete component-level traceability from the original manufacturer to your finished product, ensuring authenticity and quality." },
];

const processSteps = [
  { name: "1. BOM Analysis & Strategy", description: "We analyze your Bill of Materials (BOM) to identify critical components, long-lead time items, and opportunities for cost reduction." },
  { name: "2. Supplier Identification & Qualification", description: "We leverage our network to identify potential suppliers and conduct a rigorous audit and qualification process." },
  { name: "3. RFQ & Negotiation", description: "We manage the Request for Quotation (RFQ) process and use our purchasing leverage to negotiate the best possible price and terms." },
  { name: "4. PO Management & Logistics", description: "We handle all purchase order management, inbound logistics, and customs clearance for your components." },
  { name: "5. Incoming Quality Control (IQC)", description: "All incoming components are subjected to a thorough inspection to verify authenticity, quantity, and quality before entering our inventory." },
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

export default function ServiceSourcing() {
  return (
    <>
      <SEO
        title="Strategic Sourcing & Procurement Services | Illuminious"
        description="Global sourcing and procurement services for electronic components and raw materials. We manage your supply chain for cost, quality, and resiliency."
        keywords="strategic sourcing, procurement services, component sourcing, supply chain management, BOM analysis, supplier management"
        url="/services/sourcing"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_about-global-network.jpg"
            alt="A digital map of the world with interconnected supply chain routes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Strategic Sourcing & Procurement" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Strategic Sourcing & Procurement
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Building a resilient and cost-effective supply chain. We are your global procurement team, managing your components so you can focus on your product.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Your Product is Only as Good as its Parts</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In electronics manufacturing, the final product quality, cost, and production schedule are all dictated by the components that go into it. Managing a global supply chain of hundreds or thousands of unique parts is a monumental task, fraught with risks of counterfeit components, price volatility, and unexpected shortages.
                  </p>
                  <p>
                    At Illuminious, we have transformed procurement from a simple purchasing function into a strategic advantage. With decades of experience and billions of dollars in purchasing power, we provide our clients with access to a resilient, global supply chain. Our dedicated sourcing and commodity management teams work as an extension of your own, navigating the complexities of the component market to secure the best quality, price, and availability for your product.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-pcba-conformal-coating-24.jpg" alt="Shelves stacked with reels of electronic components in a warehouse" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Sourcing & Procurement Capabilities</h2>
              <p className="text-lg text-gray-600">
                A comprehensive service to build and manage a world-class supply chain for your electronic product.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Strategic Sourcing Process</h2>
              <p className="text-lg text-gray-600">
                A data-driven, five-step process to ensure your supply chain is optimized for cost, quality, and resilience.
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
                  <img src="/images/DEPLOYED_supplychain-img-1.jpg" alt="A sourcing manager analyzing data on multiple computer screens" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Purchasing Leverage</h4>
                      <p>With billions in annual component spend, we command Tier 1 pricing and priority allocation from major distributors and manufacturers, a benefit we pass directly to you.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Counterfeit Prevention</h4>
                      <p>We only source from authorized distributors or direct from the OCM (Original Component Manufacturer). Our rigorous IQC process includes checks to prevent counterfeit parts from ever entering our supply chain.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Integrated with Manufacturing</h4>
                      <p>Our sourcing is seamlessly integrated with our production planning and inventory management systems, ensuring that the right parts are in the right place at the right time.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">De-Risk Your Supply Chain</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Stop spending your valuable time managing hundreds of suppliers. Let our team of experts build and manage a resilient, cost-effective supply chain for you. Submit your BOM for a free analysis and risk assessment.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Get a Free BOM Analysis
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
