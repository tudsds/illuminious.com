import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, CircuitBoard, Microscope, ShieldCheck, TestTube, Thermometer } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Confidence in Every Unit",
  },
  {
    id: "capabilities",
    title: "Our Testing Capabilities",
  },
  {
    id: "process",
    title: "Our Test Strategy",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Develop Your Test Plan",
  },
];

const capabilities = [
  { icon: CircuitBoard, title: "In-Circuit Test (ICT)", text: "Comprehensive board-level testing that checks for shorts, opens, and correct component values on your populated PCB." },
  { icon: ShieldCheck, title: "Functional Circuit Test (FCT)", text: "Custom-designed test fixtures that simulate the final operating environment to verify your product\'s full functionality." },
  { icon: Microscope, title: "Automated Optical & X-Ray Inspection (AOI/AXI)", text: "Automated inspection for solder joint quality, component placement, and detection of hidden defects under BGA components." },
  { icon: TestTube, title: "Reliability Testing", text: "A suite of tests including thermal shock, vibration, drop, and humidity testing to ensure your product survives in the real world." },
  { icon: Thermometer, title: "Environmental & Burn-In Testing", text: "We subject products to extreme temperatures and extended operation (burn-in) to weed out early-life failures." },
  { icon: CheckCircle, title: "RF & Wireless Testing", text: "Shielded test environments and specialized equipment for calibrating and verifying the performance of wireless products (Wi-Fi, Bluetooth, Cellular)." },
];

const processSteps = [
  { name: "1. Design for Test (DFT) Review", description: "Our test engineers review your design early in the process to ensure it is optimized for efficient and comprehensive testing." },
  { name: "2. Test Strategy & Plan Development", description: "We work with you to develop a tailored test plan that balances coverage, cycle time, and cost for your specific product." },
  { name: "3. Fixture & Software Development", description: "We design and build custom test fixtures and develop automated test software in-house to execute your test plan." },
  { name: "4. Production Testing & Data Collection", description: "Testing is performed at multiple stages of production, and all test data is collected and linked to each unit\'s serial number." },
  { name: "5. Data Analysis & Continuous Improvement", description: "We analyze test data to identify trends, calculate yields, and drive continuous improvement in the manufacturing process." },
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

export default function ServiceTesting() {
  return (
    <>
      <SEO
        title="Electronics Testing & Validation Services | Illuminious"
        description="Comprehensive electronics testing services including ICT, FCT, AOI, X-Ray, and reliability testing. We ensure every unit meets your quality standards."
        keywords="electronics testing, pcb testing, functional testing, in-circuit test, reliability testing, test engineering"
        url="/services/testing"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-functional-test-fixture.jpg"
            alt="A custom functional test fixture with a PCB being tested"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Electronics Testing & Validation" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Electronics Testing & Validation
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                If it isn\'t tested, it doesn\'t work. We develop and execute comprehensive test strategies to guarantee every unit we ship meets your exact specifications.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">From Design for Test to Final Validation</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    A product that fails in the field can be catastrophic for your brand and your bottom line. Comprehensive testing is not a luxury; it is an absolute necessity. However, testing is often treated as a final step, leading to inefficient processes and products that are difficult to test.
                  </p>
                  <p>
                    At Illuminious, our approach is different. We integrate test engineering into the earliest stages of product design. Our dedicated test engineering team works with your designers to implement Design for Test (DFT) principles, ensuring your product is built for efficient and thorough validation from the start. We then develop a multi-layered test strategy that combines automated inspection with functional testing to provide the highest possible test coverage, ensuring every unit that leaves our factory is a unit you can trust.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-pcba-testing-ai-glasses-10.jpg" alt="An engineer monitoring an automated test station in a factory" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Testing & Validation Capabilities</h2>
              <p className="text-lg text-illuminious-sky">
                A complete arsenal of testing technologies and methodologies to ensure the quality and reliability of your product.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Test Strategy Development Process</h2>
              <p className="text-lg text-illuminious-sky">
                A collaborative, five-step process to design and implement the optimal test solution for your product.
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
                  <img src="/images/DEPLOYED_placeholder-testing-lab-equipment.jpg" alt="An X-ray image showing the solder balls under a BGA component" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-illuminious-navy leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">In-House Test Engineering</h4>
                      <p>Our large, in-house team of test engineers designs and builds custom fixtures and software, providing a faster, more integrated, and more cost-effective solution than third-party test houses.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Data-Driven Manufacturing</h4>
                      <p>All test data is captured and analyzed, providing valuable insights that we use to continuously improve our manufacturing processes and drive your product\'s yield higher.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">A Partner in Quality</h4>
                      <p>We see testing not as a service, but as a partnership. We work with you to find the right balance of test coverage and cost, ensuring your product is successful in the market.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ship Every Unit with Confidence</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Don\'t let field failures tarnish your brand. Let our test engineering experts develop a comprehensive test strategy that guarantees the quality and reliability of your product. Contact us for a free test strategy consultation.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Test Consultation
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

