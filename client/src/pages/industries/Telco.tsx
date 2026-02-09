import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Server, TowerControl, Router, ShieldCheck, HardHat, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Connecting the World",
  },
  {
    id: "capabilities",
    title: "Telco Capabilities",
  },
  {
    id: "quality",
    title: "Carrier-Grade Quality",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Start Your Project",
  },
];

const capabilities = [
  { icon: Router, title: "Complex RF & Optical Assembly", text: "Expertise in manufacturing high-frequency RF systems, optical transceivers, and complex multi-board networking equipment." },
  { icon: TowerControl, title: "5G & Wireless Infrastructure", text: "Manufacturing of RRUs (Remote Radio Units), baseband units, and other critical components for 5G and wireless network deployments." },
  { icon: Server, title: "Data Center & Enterprise Hardware", text: "High-volume production of servers, switches, routers, and storage solutions for enterprise and data center environments." },
  { icon: ShieldCheck, title: "NEBS & Carrier-Grade Standards", text: "Manufacturing processes and testing protocols designed to meet Network Equipment-Building System (NEBS) and other carrier-grade reliability standards." },
  { icon: HardHat, title: "Ruggedized Outdoor Enclosures", text: "Expertise in building and testing environmentally sealed and ruggedized enclosures for outdoor and harsh environment deployments." },
  { icon: Wrench, title: "System Integration & Testing", text: "Full system integration, configuration, and end-to-end testing to ensure products are ready for deployment right out of the box." },
];

const productExamples = [
    "5G Remote Radio Units (RRUs) and baseband processors",
    "High-speed optical transceivers and line cards",
    "Enterprise and data center switches and routers",
    "Network security appliances and firewalls",
    "Satellite communication terminals and modems",
    "Carrier-grade server and storage systems",
    "GPON and fiber-to-the-home (FTTH) equipment",
    "Microwave and millimeter-wave backhaul radios",
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

export default function IndustryTelco() {
  return (
    <>
      <SEO
        title="Telecom & Networking Equipment Manufacturing | Illuminious"
        description="Carrier-grade manufacturing for telecom, 5G, and data center hardware. NEBS-compliant processes, RF & optical expertise, and full system integration."
        keywords="telecom manufacturing, networking equipment manufacturing, 5g manufacturing, nebs compliant, optical manufacturing"
        url="/industries/telco"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-rf-anechoic-chamber.jpg"
            alt="A modern data center with rows of servers, representing the core of telecommunications"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Telecom & Communications" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Telecom & Communications Manufacturing
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Building the backbone of the connected world. We deliver the reliability, performance, and scale required for carrier-grade networks.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Manufacturing for a Connected Planet</h2>
                <div className="space-y-4 text-illuminious-navy leading-relaxed">
                  <p>
                    The telecommunications industry is the circulatory system of the global economy. It demands a level of reliability, performance, and longevity that is unparalleled. For network operators and equipment providers, product failure is not an option. This requires a manufacturing partner who understands the extreme demands of carrier-grade hardware.
                  </p>
                  <p>
                    At Illuminious, we specialize in manufacturing the complex hardware that powers the world’s communication networks. From high-frequency RF assemblies for 5G infrastructure to the optical and enterprise hardware that forms the core of the data center, we provide the expertise and process discipline to deliver products that meet the most stringent performance and reliability standards, including NEBS.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_telco-img-3.jpg" alt="A technician assembling a 5G base station unit in a factory" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Core Telecom & Networking Capabilities</h2>
              <p className="text-lg text-illuminious-sky">
                An integrated suite of services to build and scale the hardware that connects the world.
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

        {/* Quality Section */}
        <section id="quality" className="py-20 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                        <img src="/images/DEPLOYED_telco-img-2.jpg" alt="A piece of networking equipment inside an environmental testing chamber undergoing temperature and humidity stress tests" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Commitment to Carrier-Grade Quality</h2>
                    <div className="space-y-4 text-illuminious-navy leading-relaxed">
                        <p>
                            We build products designed for decades of uninterrupted service in the most demanding environments. Our quality system is built to support these requirements.
                        </p>
                        <ul className="space-y-3 mt-4">
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>NEBS Compliance Testing:</strong> We perform testing to ensure products can withstand the physical, electrical, and environmental stresses required for NEBS compliance.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Highly Accelerated Life Testing (HALT):</strong> We use HALT to identify design weaknesses early, pushing products to their limits to ensure long-term field reliability.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Automated Optical & X-Ray Inspection:</strong> 100% automated inspection of complex PCBAs to detect defects in solder joints, component placement, and BGAs.</span></li>
                            <li className="flex items-start gap-3"><CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" /><span><strong>Functional & System-Level Testing:</strong> Development of custom test fixtures and automated scripts to perform comprehensive functional and system-level testing on every unit.</span></li>
                        </ul>
                    </div>
                </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Why Us Section */}
        <section id="why-us" className="py-20 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Building the Infrastructure of Tomorrow</h2>
              <p className="text-lg text-illuminious-sky">
                We have the scale and expertise to manufacture the next generation of communication and networking hardware.
              </p>
            </AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {productExamples.map((item) => (
                    <div key={item} className="flex items-center gap-3 p-3 bg-white rounded-md shadow-sm">
                        <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                        <span className="text-sm text-illuminious-navy">{item}</span>
                    </div>
                ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Build Your Network with Confidence</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Partner with a manufacturer that understands the demands of carrier-grade hardware. Contact us to discuss your telecom or networking project.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Speak with a Telecom Specialist
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

