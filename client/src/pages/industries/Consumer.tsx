import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Package, Rocket, Scale, Sparkles, Users, Wrench, Cpu, TestTube2, Box, Globe } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  { id: "overview", title: "Concept to Customer" },
  { id: "capabilities", title: "Our Capabilities" },
  { id: "process", title: "Our NPI Process" },
  { id: "products", title: "Products We Build" },
  { id: "cta", title: "Start Your Project" },
];

const capabilities = [
    { 
        icon: Rocket, 
        title: "Rapid New Product Introduction (NPI)", 
        text: "Our dedicated NPI center in Shenzhen is your launchpad. Staffed by experienced engineers, we use a phase-gate process to de-risk your launch, including rapid prototyping and pilot runs, ensuring a predictable and efficient transition to mass production." 
    },
    { 
        icon: Scale, 
        title: "High-Volume, Cost-Optimized Assembly", 
        text: "Our 100,000 sq. ft. Batam, Indonesia factory is optimized for large-scale production, offering a strategic advantage with a skilled labor force and favorable trade agreements, minimizing tariffs and logistics costs for North American clients." 
    },
    { 
        icon: Wrench, 
        title: "Advanced Design for Manufacturing (DFM/DFA)", 
        text: "Before tooling, our US & China engineers analyze your CAD files and BOM, providing actionable feedback on part consolidation, material selection, and tolerance optimization to drastically reduce unit cost and enhance product reliability." 
    },
    { 
        icon: Sparkles, 
        title: "Aesthetic & Cosmetic Perfection", 
        text: "We operate high-precision plastic injection molding, a variety of surface finishes, and meticulous assembly processes to ensure every product meets the highest cosmetic standards, free of gaps, seams, or blemishes." 
    },
    { 
        icon: Cpu, 
        title: "Complex PCBA and SMT", 
        text: "Our facilities house multiple high-speed SMT lines from Fuji and Panasonic, capable of placing components down to 01005 passives. We handle rigid, flex, and rigid-flex PCBs with AOI and ICT to guarantee electronic performance." 
    },
    { 
        icon: Globe, 
        title: "End-to-End Supply Chain Management", 
        text: "We take full responsibility for sourcing and qualifying all components, leveraging our established supplier network to ensure quality and price competitiveness. Our materials team handles forecasting, procurement, and inventory to protect your production schedule." 
    },
    { 
        icon: TestTube2, 
        title: "Rigorous Quality & Reliability Testing", 
        text: "We develop a custom Quality Control Plan for every product, which can include environmental stress testing (temperature, humidity), drop testing, RF performance validation, and accelerated life testing to ensure your product is robust and reliable." 
    },
    { 
        icon: Box, 
        title: "Custom Packaging & Global Logistics", 
        text: "We design and produce everything from premium retail boxes to frustration-free e-commerce packaging. Our logistics team manages final fulfillment, including direct-to-consumer shipping or FBA preparation for Amazon sellers." 
    },
    { 
        icon: Users, 
        title: "Dedicated US-Based Program Management", 
        text: "You will be partnered with a dedicated Program Manager from our Palo Alto headquarters. They serve as your single point of contact, providing clear, proactive communication and ensuring seamless coordination between your team and our factory operations." 
    },
];

const productExamples = [
    { 
        title: "AI-Powered Smart Home Hubs", 
        description: "Complex devices integrating multiple wireless protocols (Wi-Fi, Zigbee, Z-Wave), microphones for voice control, and powerful processors. We manage the RF tuning and acoustic testing required for superior performance." 
    },
    { 
        title: "Wearable Fitness & Health Trackers", 
        description: "Miniaturized electronics assembled into durable, waterproof enclosures. We have expertise in flexible PCBs, sensor integration, and achieving high IP ratings for water and dust resistance." 
    },
    { 
        title: "High-Fidelity Wireless Audio", 
        description: "Products where audio quality is paramount. Our process includes managing acoustic design, driver selection, and rigorous audio testing in anechoic chambers to meet demanding frequency response and distortion targets." 
    },
    { 
        title: "Connected Personal Care & Beauty Devices", 
        description: "Aesthetically-driven products with unique ergonomic requirements. We specialize in high-end plastic finishes, custom LED lighting effects, and ensuring a premium feel in the hand." 
    },
    { 
        title: "Advanced Gaming Peripherals", 
        description: "High-performance products demanding low latency and extreme durability. We build devices with complex mechanical switches, custom optical sensors, and robust materials designed to withstand millions of cycles." 
    },
    { 
        title: "IoT-Enabled Kitchen & Home Appliances", 
        description: "Integrating electronics and connectivity into traditionally mechanical products. We handle the complexities of power regulation, motor control, and ensuring safety certifications like UL and CE." 
    },
    { 
        title: "Portable Projectors & Entertainment Systems", 
        description: "Devices with complex optical and thermal management requirements. Our expertise includes lens alignment, focus calibration, and designing effective cooling solutions for compact enclosures." 
    },
    { 
        title: "Mobile Device Accessories & Power Products", 
        description: "High-volume categories like power banks, chargers, and cases. We focus on cost optimization, safety (UL/IEC certifications), and high-yield manufacturing to compete in this crowded market." 
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

export default function IndustryConsumer() {
  return (
    <>
      <SEO
        title="Premium Consumer Electronics Manufacturing & Assembly Services | Illuminious"
        description="Illuminious delivers end-to-end contract manufacturing for innovative consumer electronics brands. We specialize in high-volume, cost-optimized assembly for smart home, wearables, audio, and IoT products, guiding you from concept to mass production with US-based engineering and our advanced factories in Asia."
        keywords="consumer electronics manufacturing, contract manufacturer, high volume assembly, new product introduction (NPI), electronics manufacturing services (EMS), smart home manufacturing, wearable technology manufacturing, plastic injection molding, US-managed factory"
        url="/industries/consumer"
      />
      <Header />

      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-box-build-projector-assembly-05.jpg"
            alt="A dynamic collage of sleek consumer electronics"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Industries", href: "/industries" },
              { label: "Consumer Electronics" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading tracking-tight">
                Manufacturing Your Vision. Scaling Your Brand.
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Illuminious is the trusted strategic manufacturing partner for the world's most ambitious consumer electronics brands. We transform your innovative concepts into high-quality, market-ready products at scale.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-30 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container">
          <div className="flex justify-center items-center h-16">
            {pageSections.map((section) => (
              <a key={section.id} href={`#${section.id}`} className="px-4 py-2 text-sm font-medium text-illuminious-sky hover:text-illuminious-blue transition-colors whitespace-nowrap">
                {section.title}
              </a>
            ))}
          </div>
        </div>
      </div>

      <main>
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">From Competitive Idea to Customer Hands</h2>
                <div className="space-y-6 text-illuminious-navy leading-relaxed text-lg">
                  <p>
                    The consumer electronics landscape is a battleground of innovation and speed. To win, a groundbreaking product is not enough. You need a manufacturing strategy that enables rapid market entry, massive scalability to meet demand, and a competitive price point—all while delivering the flawless quality that builds brand loyalty.
                  </p>
                  <p>
                    Illuminious provides a fundamentally different approach. As a US-managed, vertically integrated contract manufacturer with our own state-of-the-art factories, we eliminate the layers of miscommunication and inefficiency. Our proven Rapid NPI framework is engineered to compress timelines, moving your product from a validated prototype to mass production with unparalleled velocity.
                  </p>
                   <p>
                    We are not just a vendor; we are an extension of your team. From initial DFM analysis and tooling to precision SMT, final assembly, and global logistics, we manage every detail. This allows you to focus on what you do best: innovating, marketing, and building a world-renowned brand.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3">
                  <img src="/images/DEPLOYED_smtassembly-img-1.jpg" alt="A pristine, brightly-lit SMT assembly line" className="object-cover" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="capabilities" className="py-24 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Engineering a Superior Consumer Product Experience</h2>
              <p className="text-lg text-illuminious-sky leading-relaxed">
                Our comprehensive suite of services is meticulously tailored to address the specific demands of the fast-paced, aesthetically-driven consumer electronics market.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                    <div className="w-14 h-14 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5">
                      <cap.icon className="w-7 h-7 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-xl text-illuminious-navy mb-3 font-heading">{cap.title}</h3>
                    <p className="text-illuminious-sky leading-relaxed">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        <section id="process" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
                <AnimatedSection delay={0.1}>
                    <div className="rounded-xl overflow-hidden shadow-2xl aspect-w-4 aspect-h-3">
                        <img src="/images/DEPLOYED_service-rapid-prototyping.jpg" alt="A flowchart of the New Product Introduction process" className="object-cover" />
                    </div>
                </AnimatedSection>
                <AnimatedSection>
                    <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-6 font-heading">Our Blueprint for a Successful Product Launch</h2>
                    <p className="text-lg text-illuminious-sky mb-8 leading-relaxed">We've codified our experience into a structured, phase-gate NPI process. This disciplined approach systematically eliminates risks, ensuring a smooth, predictable, and rapid transition from prototype to mass production.</p>
                    <ul className="space-y-5">
                        <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 1: DFM & Strategic Sourcing.</strong> We perform a comprehensive DFM/DFA analysis while our sourcing team vets suppliers for all critical components, resulting in a transparent costed BOM and a clear manufacturing plan.</div></li>
                        <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 2: EVT (Engineering Validation Test).</strong> We produce the first small batch (10-50 units) to validate the core design, functionality, and firmware, ensuring the basic product functions as designed.</div></li>
                        <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 3: DVT (Design Validation Test).</strong> A larger batch (50-200 units) using production tooling undergoes extensive environmental, reliability, and certification pre-scan testing to validate real-world durability.</div></li>
                        <li className="flex items-start gap-4"><CheckCircle className="w-7 h-7 text-illuminious-blue flex-shrink-0 mt-1" /><div><strong className="text-illuminious-navy">Phase 4: PVT (Production Validation Test).</strong> The first official production run on the actual mass production line validates the entire process at scale, including quality controls and cycle times, giving the green light for mass production.</div></li>
                    </ul>
                </AnimatedSection>
            </div>
          </div>
        </section>

        <section id="products" className="py-24 bg-illuminious-light/30">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl lg:text-4xl font-bold text-illuminious-navy mb-4 font-heading">Proven Expertise Across the Consumer Spectrum</h2>
              <p className="text-lg text-illuminious-sky leading-relaxed">
                We have a proven track record of manufacturing high-quality consumer electronics across a wide range of product categories. Our experience allows us to anticipate challenges and implement solutions specific to each market segment.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {productExamples.map((item, index) => (
                    <AnimatedSection key={item.title} delay={index * 0.05}>
                        <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 h-full">
                            <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">{item.title}</h3>
                            <p className="text-sm text-illuminious-sky leading-relaxed">{item.description}</p>
                        </div>
                    </AnimatedSection>
                ))}
            </div>
          </div>
        </section>

        <section id="cta" className="py-24 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold text-white mb-4 font-heading">Let's Build Your Next Breakthrough Product.</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-10">
                Your search for a reliable, long-term manufacturing partner ends here. Contact our US-based team to discuss your project in detail. Let us show you how the Illuminious advantage can accelerate your growth and help you build a successful, scalable consumer electronics brand.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-10 py-7 text-lg font-semibold">
                <Link href="/contact">
                  Request a Manufacturing Consultation
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

