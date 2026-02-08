import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Globe, Package, ShieldCheck, Truck, Warehouse } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Global Logistics Partner",
  },
  {
    id: "capabilities",
    title: "Our Logistics Capabilities",
  },
  {
    id: "process",
    title: "Our Fulfillment Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Get a Logistics Quote",
  },
];

const capabilities = [
  { icon: Globe, title: "Global Freight Management", text: "Air, sea, and land freight options with end-to-end visibility and customs brokerage services." },
  { icon: Warehouse, title: "Warehousing & Distribution", text: "Strategically located warehouses in the US, Europe, and Asia for efficient global distribution." },
  { icon: Package, title: "Order Fulfillment (B2B & D2C)", text: "Pick, pack, and ship services for both bulk business orders and direct-to-consumer shipments." },
  { icon: ShieldCheck, title: "Inventory Management", text: "Real-time inventory tracking, cycle counting, and demand forecasting to optimize stock levels." },
  { icon: Truck, title: "Last-Mile Delivery", text: "A network of trusted carriers to ensure timely and cost-effective delivery to your final customers." },
  { icon: CheckCircle, title: "Returns Management (Reverse Logistics)", text: "Efficient handling of product returns, including inspection, refurbishment, and restocking." },
];

const processSteps = [
  { name: "1. Inbound Logistics", description: "We manage the transportation of your finished goods from our factory to our global warehousing network." },
  { name: "2. Warehousing & Inventory", description: "Your products are securely stored, and inventory levels are managed in real-time through our Warehouse Management System (WMS)." },
  { name: "3. Order Processing", description: "Orders from your sales channels are automatically received by our WMS, triggering the fulfillment process." },
  { name: "4. Pick, Pack & Ship", description: "Our fulfillment teams accurately pick, pack, and label your orders, preparing them for shipment." },
  { name: "5. Outbound Logistics", description: "We select the optimal carrier and shipping method to deliver your products to customers on time and on budget." },
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

export default function ServiceLogistics() {
  return (
    <>
      <SEO
        title="Global Logistics & Fulfillment Services | Illuminious"
        description="End-to-end logistics and supply chain solutions. We manage global freight, warehousing, order fulfillment, and last-mile delivery to streamline your operations."
        keywords="global logistics, fulfillment services, supply chain management, warehousing, order fulfillment, freight forwarding"
        url="/services/logistics"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-shipping-logistics-39.jpg"
            alt="A large, modern logistics warehouse with shelves of inventory"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Global Logistics & Fulfillment" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Global Logistics & Fulfillment
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Seamlessly connecting your factory to your customers. We are the integrated logistics backbone for your global business.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Final Link in Your Supply Chain</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    Manufacturing a great product is only half the battle. Getting that product into the hands of your customers quickly, reliably, and cost-effectively is what ultimately determines your success. Logistics and fulfillment are not afterthoughts; they are critical components of your product strategy.
                  </p>
                  <p>
                    As a vertically integrated manufacturing partner, Illuminious offers end-to-end logistics services that are seamlessly connected to our production floor. We eliminate the handoffs and communication gaps that occur when working with separate manufacturing and logistics providers. From the moment your product comes off the assembly line, it enters a streamlined logistics ecosystem designed to optimize for speed, cost, and customer satisfaction.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-box-build-packaging-30.jpg" alt="A logistics worker scanning a package in a warehouse" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Logistics Capabilities</h2>
              <p className="text-lg text-gray-600">
                A complete suite of services to manage your inventory and deliver your products to a global market.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Fulfillment Process</h2>
              <p className="text-lg text-gray-600">
                A transparent, five-step process that provides complete visibility from factory to customer.
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
                  <img src="/images/DEPLOYED_ai-smart-necklace.jpg" alt="A large cargo ship at a busy port" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Integrated with Manufacturing</h4>
                      <p>Our logistics services are directly integrated with our manufacturing operations, creating a single, seamless supply chain with one point of contact.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Technology-Driven Visibility</h4>
                      <p>Our proprietary platform provides real-time visibility into your inventory, orders, and shipments across our global network, empowering you to make data-driven decisions.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Global Scale, Local Expertise</h4>
                      <p>We combine a global logistics network with local teams who understand the nuances of regional customs, regulations, and carrier networks, ensuring smooth and compliant delivery.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Streamline Your Supply Chain</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Let us handle the complexities of global logistics so you can focus on growing your business. Contact us for a customized logistics and fulfillment quote.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Logistics Quote
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
