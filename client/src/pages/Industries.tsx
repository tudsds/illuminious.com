import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Heart,
  Car,
  Factory,
  Home,
  Wifi,
  Cpu,
  ChevronRight,
  ShieldCheck,
  Globe,
  Scaling,
  Wrench,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const industries = [
  {
    icon: Heart,
    title: "Medical & Healthcare",
    description: "We provide FDA-compliant and ISO 13485-ready manufacturing for a wide range of Class I, II, and III medical devices. Our expertise covers everything from patient monitoring systems and diagnostic imaging equipment to surgical tools and wearable health trackers. We understand that medical device manufacturing is a zero-error environment. Our processes are built on a foundation of rigorous quality control, full material traceability from component sourcing to final assembly, and meticulous documentation to support your regulatory submissions, including FDA 510(k) and PMA.",
    capabilities: ["ISO 13485 Certified Facilities", "FDA Registration & Device Listing", "Clean Room Assembly (ISO 7/8)", "Full Traceability & DHR", "Biocompatibility Testing Mgmt.", "Sterilization Cycle Validation"],
    href: "/industries/medical",
    image: "/images/DEPLOYED_automated-pcb-assembly-line.jpg",
  },
  {
    icon: Car,
    title: "Automotive",
    description: "The automotive industry demands perfection in quality, reliability, and longevity. We operate under a stringent IATF 16949 quality management system to deliver electronics that withstand the harshest vehicle environments. Our experience spans from advanced driver-assistance systems (ADAS) and complex infotainment consoles to powertrain control units and EV battery management systems (BMS). We provide full Production Part Approval Process (PPAP) documentation and conduct rigorous environmental and vibration testing to ensure every component meets the demanding lifecycle and safety requirements of the automotive world.",
    capabilities: ["IATF 16949 Quality System", "AEC-Q100/Q200 Component Sourcing", "PPAP & FMEA Documentation", "Automated Optical Inspection (AOI)", "In-Circuit Testing (ICT)", "Vibration & Thermal Shock Testing"],
    href: "/industries/automotive",
    image: "/images/DEPLOYED_placeholder-automotive-pcb-inspection.jpg",
  },
  {
    icon: Factory,
    title: "Industrial & B2B",
    description: "We build ruggedized electronics designed for the factory floor, remote field deployments, and critical infrastructure. Our industrial solutions focus on long-term reliability and performance in challenging conditions, including extreme temperatures, high humidity, and heavy vibration. From industrial automation controllers and robotics to smart sensors and asset tracking systems, we provide robust manufacturing with long product lifecycle support, including component obsolescence management and multi-market certifications (UL, ATEX) to ensure your B2B products are dependable and globally compliant.",
    capabilities: ["Ruggedized Enclosures (IP67/IP68)", "Extended Temp Range (-40°C to +85°C)", "Conformal Coating Services", "Long Lifecycle Component Mgmt.", "UL & ATEX Certification Support", "High-Reliability Soldering"],
    href: "/industries/industrial",
    image: "/images/DEPLOYED_placeholder-rf-testing-lab.jpg",
  },
  {
    icon: Home,
    title: "Consumer Electronics",
    description: "In the fast-paced consumer electronics market, speed, cost, and quality are paramount. We specialize in high-volume manufacturing with a focus on design for cost (DFC) and design for assembly (DFA) to ensure your product is competitive. Our expertise covers a vast range of devices, from smart home hubs and wearables to audio equipment and personal gadgets. We manage the entire process, including global certifications (FCC/CE), retail-ready packaging design, and logistics to deliver a shelf-ready product that delights consumers and builds your brand.",
    capabilities: ["High-Volume SMT Lines", "Cost-Optimized DFM/DFC", "Retail Packaging & Kitting", "Global Certifications (FCC, CE, etc.)", "Acoustic & RF Testing", "Cosmetic Quality Control"],
    href: "/industries/consumer",
    image: "/images/DEPLOYED_placeholder-iot-devices-array.jpg",
  },
  {
    icon: Wifi,
    title: "IoT & Connected Devices",
    description: "Bringing an IoT device to market requires a unique blend of hardware, software, and RF expertise. We offer end-to-end manufacturing for connected devices, from initial RF module selection and antenna design validation to final cloud connectivity testing. Our engineers are adept at optimizing for low-power consumption, ensuring long battery life for remote deployments. We conduct comprehensive Over-the-Air (OTA) performance testing in our RF chambers to guarantee reliable connectivity, providing a seamless out-of-the-box experience for your users.",
    capabilities: ["RF & Wireless Integration", "Antenna Tuning & Matching", "Low-Power Design Optimization", "OTA Performance Testing", "Cellular & LPWAN Technologies", "Device Provisioning & Security"],
    href: "/industries/iot",
    image: "/images/DEPLOYED_placeholder-iot-network-abstract.jpg",
  },
  {
    icon: Cpu,
    title: "AI & Edge Computing",
    description: "The rise of AI and edge computing presents unique manufacturing challenges, particularly around thermal management and high-speed signal integrity. We specialize in building complex hardware for AI applications, including multi-GPU systems, neural processing units (NPUs), and AI-accelerated cameras. Our expertise in advanced PCB technologies, such as high-density interconnect (HDI) and controlled impedance, ensures optimal performance. We implement sophisticated thermal solutions, from custom heat sinks to liquid cooling integration, to manage the intense heat generated by modern processors.",
    capabilities: ["Advanced Thermal Management", "High-Speed PCB Design (HDI)", "GPU & NPU Integration", "Controlled Impedance Routing", "AI Model Loading & Testing", "High-Bandwidth Memory Assembly"],
    href: "/industries/ai-computing",
    image: "/images/DEPLOYED_ai-phone-accessory.jpg",
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

export default function Industries() {
  return (
    <>
      <SEO
        title="Industries We Serve | Medical, Automotive, Industrial, IoT | Illuminious"
        description="Specialized, high-reliability contract manufacturing solutions for medical, automotive, industrial, consumer electronics, IoT, and AI hardware industries."
        keywords="medical device manufacturing, automotive electronics, industrial automation, IoT hardware, AI accelerators, contract manufacturing"
        url="/industries"
      
        breadcrumbs={[{name: "Home", url: "/"}, {name: "Industries", url: "/industries"}]}
      />
      <Header />
      
      <section className="relative pt-32 pb-24 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Factory className="w-4 h-4" />
              Industry-Specific Expertise
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6 leading-tight">
              Precision Manufacturing for the World's Most Demanding Industries
            </h1>
            <p className="text-xl text-illuminious-navy/70 mb-8 max-w-3xl">
              From life-saving medical devices to mission-critical automotive systems, we provide specialized, high-reliability manufacturing solutions. We understand the unique language, regulations, and quality demands of your industry, ensuring your product's success from prototype to global deployment.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry, index) => (
              <AnimatedSection key={industry.title} delay={index * 0.1}>
                <Link href={industry.href}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light hover:border-illuminious-blue hover:shadow-xl transition-all duration-300 overflow-hidden h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={industry.image}
                        alt={`Illuminious manufacturing for ${industry.title}`}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-grow">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-10 h-10 rounded-lg bg-illuminious-light/50 flex items-center justify-center group-hover:bg-illuminious-blue transition-colors duration-300">
                          <industry.icon className="w-5 h-5 text-illuminious-blue group-hover:text-white transition-colors duration-300" />
                        </div>
                        <h3 className="text-xl font-bold text-illuminious-navy group-hover:text-illuminious-blue transition-colors duration-300">
                          {industry.title}
                        </h3>
                      </div>
                      <p className="text-illuminious-navy/70 text-sm mb-5 flex-grow">
                        {industry.description}
                      </p>
                      <div className="flex flex-wrap gap-2 mb-5">
                        {industry.capabilities.slice(0, 4).map((cap) => (
                          <span
                            key={cap}
                            className="px-3 py-1 rounded-full bg-illuminious-light/60 text-xs font-medium text-illuminious-navy"
                          >
                            {cap}
                          </span>
                        ))}
                      </div>
                      <div className="flex items-center text-sm font-semibold text-illuminious-blue group-hover:gap-2 transition-all mt-auto">
                        Explore Our Expertise
                        <ChevronRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              A Foundation of Manufacturing Excellence
            </h2>
            <p className="text-lg text-illuminious-navy/70">
              While we tailor our services for specific industries, every client benefits from our core operational strengths and unwavering commitment to quality. This foundational excellence is what allows us to adapt and excel across diverse markets.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: ShieldCheck, title: "Uncompromising Quality Systems", desc: "Our factories are certified to ISO 9001, with readiness for IATF 16949 and ISO 13485. We implement rigorous process controls, statistical process control (SPC), and a zero-defect mindset at every stage." },
              { icon: Globe, title: "Global Supply Chain Mastery", desc: "We leverage a diversified global supply chain to mitigate risk and optimize cost. With strategic sourcing offices in key regions, we offer non-China sourcing options and ensure component traceability and authenticity." },
              { icon: Scaling, title: "Scalable Production", desc: "From our no-MOQ policy for startups to high-volume automated production, our flexible manufacturing infrastructure scales with you. We support your journey from the first prototype to millions of units." },
              { icon: Wrench, title: "Comprehensive Engineering Support", desc: "Our DFM/DFA analysis, NPI process, and ongoing engineering support are available to all clients. We act as an extension of your team to optimize your product for manufacturability, cost, and reliability." },
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="bg-white rounded-2xl p-8 border border-transparent hover:border-illuminious-blue/50 hover:shadow-lg transition-all duration-300 h-full text-center">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-full bg-illuminious-light/50 flex items-center justify-center">
                      <item.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                  </div>
                  <h3 className="text-lg font-bold text-illuminious-navy mb-3">{item.title}</h3>
                  <p className="text-sm text-illuminious-navy/70">{item.desc}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      
      {/* Related Resources */}
      <section className="py-12 bg-illuminious-light/30">
        <div className="container text-center">
          <h3 className="text-xl font-bold text-illuminious-navy mb-6 font-heading">Explore More</h3>
          <div className="flex flex-wrap justify-center gap-3">
            <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-6">
              <Link href="/case-studies">Case Studies</Link>
            </Button>
            <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-6">
              <Link href="/industries">Industries</Link>
            </Button>
            <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-6">
              <Link href="/blog">Blog</Link>
            </Button>
            <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-6">
              <Link href="/about">About Us</Link>
            </Button>
            <Button asChild variant="outline" className="border-illuminious-blue text-illuminious-blue hover:bg-illuminious-light rounded-full px-6">
              <Link href="/startups">Startups Program</Link>
            </Button>
          </div>
        </div>
      </section>

<section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build in Your Industry?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              Our expertise is not limited to the industries listed. We thrive on complex challenges and have successfully delivered products in aerospace, agritech, and more. Contact our engineering team to discuss your project's specific requirements and discover how we can help you build, scale, and succeed.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-white rounded-full px-8 py-3 text-base font-bold"
            >
              <Link href="/contact">
                Request a Consultation
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


