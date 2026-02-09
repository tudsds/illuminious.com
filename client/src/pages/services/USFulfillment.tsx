import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, MapPin, Package, ShieldCheck, Truck, Zap, BookOpen, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "The Final Mile, Perfected",
  },
  {
    id: "capabilities",
    title: "Our Fulfillment Services",
  },
  {
    id: "process",
    title: "Our Fulfillment Process",
  },
  {
    id: "integrations",
    title: "Platform Integrations",
  },
  {
    id: "faq",
    title: "Frequently Asked Questions",
  },
  {
    id: "cta",
    title: "Get a Fulfillment Quote",
  },
];

const capabilities = [
  { icon: MapPin, title: "Strategic US Warehouse Network", text: "Our primary fulfillment center in Los Angeles, CA, is complemented by partner facilities on the East Coast, providing 2-3 day ground shipping coverage to over 98% of the US population. This bi-coastal strategy significantly reduces transit times and shipping costs for your customers." },
  { icon: Truck, title: "Same-Day Pick, Pack & Ship", text: "Our Service Level Agreement (SLA) guarantees that all in-stock orders received by 2 PM PST are picked, packed, and shipped on the same business day. We utilize automated routing and batch picking technologies to achieve industry-leading accuracy and speed." },
  { icon: Package, title: "Advanced Inventory Management", text: "Gain real-time inventory visibility through our secure client portal. We offer comprehensive services including lot tracking, FIFO/FEFO picking, cycle counting, and kitting/bundling. Our WMS ensures 99.9%+ inventory accuracy." },
  { icon: Factory, title: "Seamless Manufacturing Integration", text: "As a core part of our end-to-end solution, finished goods flow directly from our global factories to our fulfillment centers. This eliminates costly and time-consuming handoffs to a separate 3PL provider, creating a truly unified and efficient supply chain under a single vendor." },
  { icon: ShieldCheck, title: "Comprehensive Returns Management (Reverse Logistics)", text: "We manage all aspects of customer returns with a detailed, documented process. This includes RMA creation, product inspection and grading (A, B, C stock), and efficient restocking or disposition. This turnkey service simplifies your operations and protects your brand reputation." },
  { icon: CheckCircle, title: "Multi-Channel Fulfillment Expertise", text: "We possess deep expertise in both direct-to-consumer (D2C) order fulfillment, with an emphasis on brand experience, and complex B2B/retail compliance. We handle EDI, GS1-128 labeling, and routing guide adherence for major retailers like Amazon, Walmart, and Target." },
  { icon: Zap, title: "Value-Added Services", text: "Beyond standard fulfillment, we offer a range of value-added services such as custom packaging, branded packing slips, gift messaging, light assembly, and product labeling. These services enhance the unboxing experience and support your marketing efforts." },
  { icon: BookOpen, title: "Subscription Box Fulfillment", text: "We specialize in the unique logistics of subscription box services. Our systems manage recurring orders, customized kitting, and batch fulfillment to ensure your subscribers receive their curated boxes on time, every time." },
];

const processSteps = [
  { name: "Step 1: Platform Integration", description: "Our onboarding team assists you in connecting your Shopify, Amazon, WooCommerce, or other e-commerce platform to our Warehouse Management System (WMS). This one-time setup uses pre-built connectors for a secure, seamless integration in minutes, enabling automated order and inventory syncing." },
  { name: "Step 2: Inbound Freight & Receiving", description: "You ship your products to our designated fulfillment center. Upon arrival, our receiving team inspects the inventory against your Advanced Shipping Notice (ASN), verifies counts and quality, and assigns SKUs and storage locations. Your inventory is typically available for sale within 24-48 hours of receipt." },
  { name: "Step 3: Automated Order Fulfillment", description: "When a customer places an order on your store, it is automatically and instantly transmitted to our WMS. The order is then assigned to a warehouse associate who uses a mobile scanner to accurately pick the items, pack them according to your specifications, and generate a shipping label from the optimal carrier." },
  { name: "Step 4: Shipping & Tracking", description: "The packed order is shipped via the selected carrier (e.g., FedEx, UPS, USPS). Tracking information is automatically pushed back to your e-commerce platform, which in turn notifies your customer. You and your customer can track the shipment in real-time from door to door." },
  { name: "Step 5: Ongoing Management & Reporting", description: "Through our client portal, you have 24/7 access to real-time data on orders, inventory levels, and shipping status. Our account management team is also available to provide support, analyze performance, and help you optimize your fulfillment strategy for cost and speed." },
];

const faqs = [
    { question: "What is a 3PL (Third-Party Logistics)?", answer: "A 3PL, or Third-Party Logistics provider, is a company that offers outsourced logistics services to other businesses. These services can encompass warehousing, transportation, inventory management, order fulfillment, and more. By partnering with a 3PL like Illuminious, you can leverage our infrastructure, technology, and expertise to manage your supply chain more efficiently, allowing you to focus on your core business activities like product development and marketing." },
    { question: "How does your pricing work?", answer: "Our fulfillment pricing is transparent and typically consists of four main components: 1) Initial Setup/Onboarding Fee, 2) Inbound Receiving Fee (per pallet or per hour), 3) Monthly Storage Fee (per pallet or cubic foot), and 4) Pick & Pack Fee (per order + per item). Shipping costs are passed through directly from the carriers. We provide a detailed, customized quote based on your specific order volume, product size/weight, and storage needs." },
    { question: "What is a Warehouse Management System (WMS)?", answer: "A Warehouse Management System (WMS) is a software application that provides visibility into a business's entire inventory and manages supply chain fulfillment operations from the distribution center to the store shelf. Our state-of-the-art WMS is the backbone of our operation, enabling real-time inventory tracking, automated order processing, and efficient warehouse workflows to ensure accuracy and speed." },
    { question: "Do you offer climate-controlled storage?", answer: "Yes, our primary Los Angeles facility offers designated climate-controlled zones for products that are sensitive to temperature and humidity fluctuations. This is ideal for electronics, supplements, cosmetics, and other high-value goods that require a stable environment to maintain product integrity. Please specify this requirement when requesting a quote." },
    { question: "What is the difference between B2B and D2C fulfillment?", answer: "D2C (Direct-to-Consumer) fulfillment involves shipping individual orders directly to end customers. It prioritizes speed, accuracy, and the unboxing experience. B2B (Business-to-Business) fulfillment involves shipping larger, bulk orders to other companies, often retailers. B2B fulfillment has strict requirements for packaging, labeling (like GS1-128), and delivery appointments, which we are fully equipped to handle." },
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

export default function ServiceUSFulfillment() {
  return (
    <>
      <SEO
        title="US Fulfillment & 3PL Services | Illuminious Manufacturing"
        description="End-to-end US-based 3PL fulfillment services from our Los Angeles warehouse. We provide same-day shipping, advanced inventory management, and seamless e-commerce integration for global brands."
        keywords="US fulfillment, 3PL services, third-party logistics, e-commerce fulfillment, Los Angeles warehouse, D2C fulfillment, B2B fulfillment, reverse logistics"
        url="/services/us-fulfillment"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-warehouse-finished-goods-38.jpg"
            alt="A clean and organized warehouse aisle with packages on shelves"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "US Fulfillment & 3PL" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                US Fulfillment & 3PL Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Deliver an exceptional customer experience with fast, reliable, and intelligent US-based fulfillment, seamlessly integrated with your global manufacturing.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Final Mile: Your Most Critical Touchpoint</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    You have invested countless hours and significant capital into designing a superior product and manufacturing it to exacting quality standards. However, the customer journey does not conclude at the factory gate; it ends when the product is safely in their hands. The final mile of delivery is often the most memorable and impactful part of the customer experience. Slow shipping, inaccurate orders, or damaged goods can irrevocably tarnish your brand reputation and negate all the hard work that came before.
                  </p>
                  <p>
                    This is where a world-class fulfillment operation becomes a strategic imperative. Our US-based Third-Party Logistics (3PL) service is the final, crucial link in our end-to-end manufacturing solution. By vertically integrating global production with domestic fulfillment, we eliminate the delays, communication gaps, and accountability issues that plague traditional, fragmented supply chains. There are no more coordination headaches between your factory and a separate 3PL.
                  </p>
                   <p>
                    Your finished goods flow seamlessly from our factories in Shenzhen or Batam directly to our Los Angeles fulfillment center. They are received, stored, and ready to be shipped the moment a customer places an order. This unified ecosystem provides unparalleled efficiency, reduces your landed costs, and ensures your customers receive their orders with the speed and accuracy they expect from a modern brand.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-warehouse-inventory-59.jpg" alt="Warehouse worker scanning a package for shipment" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">A Comprehensive Suite of Fulfillment Services</h2>
              <p className="text-lg text-illuminious-sky">
                We offer a complete range of 3PL services, powered by robust technology and industry expertise, designed to help you scale your business and delight your customers.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4 flex-shrink-0">
                      <cap.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{cap.title}</h3>
                      <p className="text-sm text-illuminious-sky">{cap.text}</p>
                    </div>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our 5-Step Fulfillment Process</h2>
              <p className="text-lg text-illuminious-sky">
                We have refined our process to be as simple and transparent as possible, giving you full visibility while we handle the complex logistics.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" aria-hidden="true" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                    <div className={`flex items-center ${index % 2 !== 0 ? "flex-row-reverse" : ""}`}>
                      <div className="w-1/2 px-8">
                        <AnimatedSection delay={index * 0.1}>
                          <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 !== 0 ? "text-left" : "text-right"}`}>{step.name}</h3>
                          <p className={`text-illuminious-sky ${index % 2 !== 0 ? "text-left" : "text-right"}`}>{step.description}</p>
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

        {/* Integrations Section */}
        <section id="integrations" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-warehouse-shelves.jpg" alt="Logos of Shopify, Amazon, WooCommerce, and other e-commerce platforms" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Seamless E-commerce & ERP Integration</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    Our fulfillment platform is built for connectivity. It connects directly to the most popular e-commerce channels and ERP systems, creating a fully automated, end-to-end workflow from order placement to final delivery.
                  </p>
                  <ul className="space-y-3 list-disc list-inside">
                    <li>
                      <strong>One-Click E-commerce Integrations:</strong> Connect your Shopify, Amazon Seller Central, WooCommerce, BigCommerce, or Magento store in seconds with our pre-built, secure connectors.
                    </li>
                    <li>
                      <strong>Automated Order & Inventory Syncing:</strong> Orders are automatically imported into our WMS in real-time. As orders are fulfilled, inventory levels are synced back to all your sales channels to prevent overselling and stockouts.
                    </li>
                     <li>
                      <strong>Robust REST API:</strong> For custom platforms, proprietary systems, or enterprise ERPs like NetSuite and SAP, our robust and well-documented REST API allows for deep, custom integration, giving you complete control and flexibility.
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
                        Clear, straightforward answers to common questions about our 3PL and fulfillment services.
                    </p>
                </AnimatedSection>
                <div className="max-w-4xl mx-auto">
                    <div className="space-y-6">
                        {faqs.map((faq, index) => (
                            <AnimatedSection key={index} delay={index * 0.1}>
                                <div className="bg-illuminious-light/30 p-6 rounded-lg">
                                    <h3 className="font-bold text-lg text-illuminious-navy mb-2 flex items-center">
                                        <HelpCircle className="w-5 h-5 mr-3 text-illuminious-blue" />
                                        {faq.question}
                                    </h3>
                                    <p className="text-illuminious-navy leading-relaxed pl-8">{faq.answer}</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Unify Your Supply Chain Today</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Stop juggling multiple vendors and worrying about logistics. Let us provide an integrated manufacturing and fulfillment solution so you can focus on what you do best: building a great brand.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Fulfillment Quote
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

