import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Rocket, Shield, Users, Zap, Factory, Microscope, Scale, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const benefits = [
  { 
    icon: Rocket, 
    title: "Accelerated NPI Process", 
    description: "Our dedicated New Product Introduction (NPI) center in Shenzhen is specifically designed to fast-track your project. We streamline the journey from initial design review to first articles, typically reducing development cycles by 30-40% compared to traditional contract manufacturers. This means you get to market, secure funding, and iterate on your product much faster."
  },
  { 
    icon: Shield, 
    title: "No-Strings-Attached MOQs", 
    description: "We champion a strict no-MOQ (Minimum Order Quantity) policy for initial production runs. We understand that cash flow is critical for startups. Our model allows you to produce what you need, when you need it, eliminating the immense financial pressure of large upfront inventory investments and allowing you to test the market with minimal risk."
  },
  { 
    icon: Zap, 
    title: "Transparent, Scalable Pricing", 
    description: "Our pricing model is built for scalability and transparency. We provide a detailed cost breakdown (Bill of Materials, labor, testing, and overhead) so you understand exactly what you're paying for. As your volume increases, you automatically unlock predefined pricing tiers, ensuring your COGS decrease predictably as you grow."
  },
  { 
    icon: Users, 
    title: "Your On-Demand Engineering Team", 
    description: "Consider us an extension of your own team. You are assigned a dedicated project manager and have direct access to our mechanical, electrical, and firmware engineers. We act as your hardware co-pilots, providing continuous DFM/DFA feedback, solving complex engineering challenges, and ensuring your product is optimized for quality and cost."
  },
];

const journey = [
  {
    phase: "01",
    title: "Deep-Dive DFM & DFX Analysis",
    description: "The journey begins with a comprehensive Design for Manufacturability (DFM) and Design for Excellence (DFX) analysis. Our engineers meticulously review your CAD files, schematics, and BOM, identifying potential issues that could impact yield, cost, or reliability. We analyze everything from component selection and PCB layout to enclosure design and assembly tolerances, providing a detailed report with actionable recommendations."
  },
  {
    phase: "02",
    title: "Rapid Prototyping & EVT",
    description: "At our Shenzhen NPI facility, we move swiftly into the Engineering Validation Test (EVT) phase. We produce a small batch of high-fidelity prototypes (typically 5-20 units) using production-intent processes and materials. These are not just 3D prints; they are fully functional units for you to test, validate your design, share with investors, and gather early user feedback."
  },
  {
    phase: "03",
    title: "Pilot Run & DVT/PVT",
    description: "Once the EVT units are approved, we proceed to Design Validation Test (DVT) and Production Validation Test (PVT) pilot runs (typically 50-500 units). This is a critical step where we fine-tune the entire production line, including setting up SMT programming, designing custom test jigs and fixtures, and finalizing quality control checkpoints."
  },
  {
    phase: "04",
    title: "Scale to Mass Production",
    description: "With a fully validated process, we seamlessly transition your project to mass production. For higher volumes, we leverage our larger, highly-automated factory in Batam, Indonesia, to provide cost advantages. Our \"Copy Exact\" methodology ensures that the process, equipment, and quality standards are perfectly replicated from our NPI facility."
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

export default function Startups() {
  return (
    <>
      <SEO
        title="Startup Bridge Program | Illuminious × Future Factory"
        description="The Startup Bridge by Illuminious and Future Factory gives ambitious hardware startups direct factory access with no MOQ, dedicated engineering support, and a fast-track path from prototype to mass production."
        keywords="hardware startup manufacturing, electronics contract manufacturer, prototype to mass production, new product introduction, NPI process, DFM for startups, flexible MOQ manufacturing, startup manufacturing partner, future factory"
        url="/startups"
      />
      <Header />

      {/* ===== HERO SECTION ===== */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-cyber-black">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_startup-cyberpunk-hero.jpg"
            alt="Cyberpunk-themed startup bridge between human innovation and robotic manufacturing"
            className="w-full h-full object-cover opacity-50"
            loading="eager"
            fetchPriority="high"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-[#0a0a0f]/50 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
        </div>

        {/* Animated grid overlay */}
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(rgba(0,212,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,212,255,0.3) 1px, transparent 1px)`,
          backgroundSize: '60px 60px'
        }} />

        {/* Scanline effect */}
        <div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{
          backgroundImage: `repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(0,212,255,0.1) 2px, rgba(0,212,255,0.1) 4px)`,
        }} />

        <div className="container relative z-10 pt-32 pb-20">
          <Breadcrumb items={[
            { label: "Home", href: "/" },
            { label: "Startup Bridge" },
          ]} />

          <div className="max-w-5xl mt-8">
            {/* Logo Row: Illuminious X Future Factory */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="flex items-center gap-4 md:gap-6 mb-10"
            >
              <img
                src="/images/illuminious-logo-white.png"
                alt="Illuminious Logo"
                className="h-10 md:h-14 w-auto"
              />
              <span className="text-2xl md:text-4xl font-thin text-cyber-cyan" style={{ textShadow: '0 0 20px rgba(0,212,255,0.5)' }}>×</span>
              <img
                src="/images/future-factory-logo.png"
                alt="Future Factory Logo"
                className="h-8 md:h-12 w-auto"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mb-6"
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyber-cyan/40 bg-cyber-cyan/10 text-cyber-cyan text-sm font-mono tracking-wider">
                <span className="w-2 h-2 rounded-full bg-cyber-cyan animate-pulse" />
                STARTUP BRIDGE PROGRAM
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6 font-heading"
            >
              From Prototype to{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan via-cyber-purple to-cyber-pink" style={{ textShadow: 'none' }}>
                Mass Production
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-lg md:text-xl text-white mb-10 max-w-3xl leading-relaxed"
            >
              Stop navigating the manufacturing maze alone. The Startup Bridge program provides the expertise, infrastructure, and transparent process to turn your brilliant prototype into a market-ready product — faster and with less risk.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" className="bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/90 rounded-full px-8 py-4 text-lg font-bold shadow-lg shadow-cyber-cyan/25 transition-all hover:shadow-cyber-cyan/40">
                <Link href="/contact?program=startup">
                  Apply Now
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 hover:border-cyber-purple rounded-full px-8 py-4 text-lg">
                <Link href="/factory-tour">
                  Tour Our Factory
                </Link>
              </Button>
            </motion.div>
          </div>
        </div>

        {/* Bottom gradient fade */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0a0a0f] to-transparent" />
      </section>

      {/* ===== STATS BAR ===== */}
      <section className="bg-cyber-black border-y border-cyber-purple/20 py-8">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "72h", label: "Prototype Turnaround" },
              { value: "0", label: "Minimum Order Qty" },
              { value: "30-40%", label: "Faster Time to Market" },
              { value: "25%", label: "Avg BOM Cost Savings" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-cyber-cyan font-mono" style={{ textShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 mt-1 uppercase tracking-wider">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== BENEFITS SECTION ===== */}
      <section className="py-24 bg-cyber-black">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Built for the{" "}
              <span className="text-cyber-cyan">Startup Grind</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              We threw out the traditional contract manufacturing playbook and built a program that addresses the real-world challenges you face: limited cash, tight deadlines, and the need for a true engineering partner.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {benefits.map((benefit, index) => (
              <AnimatedSection key={benefit.title} delay={index * 0.1}>
                <div className="relative group bg-[#0f1520] border border-cyber-purple/20 p-8 rounded-lg h-full hover:border-cyber-cyan/40 transition-all duration-300">
                  {/* Glow effect on hover */}
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyber-cyan/5 to-cyber-purple/5" />
                  <div className="relative flex items-start">
                    <div className="bg-cyber-cyan/10 border border-cyber-cyan/30 p-3 rounded-lg mr-6 flex-shrink-0">
                      <benefit.icon className="w-7 h-7 text-cyber-cyan" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{benefit.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* ===== NPI JOURNEY SECTION ===== */}
      <section className="py-24 bg-[#080c14] border-y border-cyber-purple/10">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              Your Path from{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-purple">Prototype to Production</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              A four-phase New Product Introduction (NPI) process that provides a clear, structured, and de-risked roadmap.
            </p>
          </AnimatedSection>
          <div className="relative max-w-5xl mx-auto">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 md:-translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/50 via-cyber-purple/50 to-cyber-pink/50" />
            <div className="space-y-16">
              {journey.map((step, index) => (
                <AnimatedSection key={step.phase} delay={index * 0.15}>
                  <div className="md:grid md:grid-cols-2 md:gap-12 items-center">
                    <div className={`flex items-center gap-6 ${index % 2 === 1 ? 'md:order-2' : ''}`}>
                      <div className="relative z-10 mx-auto w-16 h-16 rounded-full bg-cyber-black border-2 border-cyber-cyan text-cyber-cyan flex items-center justify-center font-bold text-xl font-mono flex-shrink-0" style={{ boxShadow: '0 0 20px rgba(0,212,255,0.3)' }}>
                        {step.phase}
                      </div>
                      <h3 className="text-2xl font-bold text-white font-heading md:hidden">{step.title}</h3>
                    </div>
                    <div className={`relative ${index % 2 === 1 ? 'md:order-1 md:text-right' : ''}`}>
                      <h3 className="hidden md:block text-2xl font-bold text-white font-heading mb-3">{step.title}</h3>
                      <p className="text-gray-400 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ===== PARTNER SECTION ===== */}
      <section className="py-24 bg-cyber-black">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-heading">
                More Than a Factory,{" "}
                <span className="text-cyber-cyan">We're Your Partner</span>
              </h2>
              <div className="space-y-6 text-gray-400 leading-relaxed">
                <p>
                  Choosing a contract manufacturer is one of the most critical decisions a hardware startup will make. A bad partner can lead to catastrophic delays, quality nightmares, and wasted capital. A great partner becomes a competitive advantage.
                </p>
                <p>
                  Our engineering support is proactive, not reactive. We host weekly sync-ups, provide detailed DFM reports, and suggest alternative components to mitigate supply chain risks. We've helped startups redesign enclosures for better durability, optimize PCB layouts for improved thermal performance, and cut BOM costs by 25% before the first unit ever rolls off the line.
                </p>
                <p>
                  This partnership model is the core of our philosophy. Your success is our success. We are invested in helping you navigate the treacherous waters of hardware development, from your first prototype to your millionth unit.
                </p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.1}>
              <div className="relative rounded-xl overflow-hidden border border-cyber-purple/30">
                <img src="/images/DEPLOYED_backup-engineer-prototype-testing-61.jpg" alt="Engineer closely collaborating with a startup founder over a product schematic" className="w-full h-auto object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/60 to-transparent" />
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* ===== WHAT WE BUILD SECTION ===== */}
      <section className="py-24 bg-[#080c14] border-y border-cyber-purple/10">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 font-heading">
              What We Build With{" "}
              <span className="text-cyber-purple">Startups</span>
            </h2>
            <p className="text-lg text-gray-400 leading-relaxed">
              Our expertise spans the full spectrum of modern electronics. Our flexible factory floors and engineering talent allow us to tackle a diverse range of products.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[ 
              {icon: Factory, title: "Industrial IoT", desc: "Ruggedized sensors, gateways, and asset trackers for harsh environments. We handle complex certifications and ensure long-term reliability."}, 
              {icon: Microscope, title: "Medical & Wellness", desc: "From wearable health monitors to diagnostic devices, we operate under strict quality controls (ISO 13485 principles) for safety and accuracy."}, 
              {icon: Scale, title: "Smart Consumer Devices", desc: "Connected home products, wearables, and high-finish consumer electronics where aesthetics and user experience are paramount."}
            ].map((item, index) => (
              <AnimatedSection key={item.title} delay={index * 0.1}>
                <div className="relative group bg-[#0f1520] border border-cyber-purple/20 p-8 rounded-lg h-full hover:border-cyber-purple/40 transition-all duration-300">
                  <div className="absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-br from-cyber-purple/5 to-cyber-pink/5" />
                  <div className="relative">
                    <item.icon className="w-10 h-10 text-cyber-purple mb-4" />
                    <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                    <p className="text-gray-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
          <AnimatedSection className="text-center mt-12">
            <Button asChild variant="outline" className="border-cyber-purple/50 text-cyber-purple hover:bg-cyber-purple/10 rounded-full px-8 py-3 text-base">
              <Link href="/industries">Explore All Industries</Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      {/* ===== CTA SECTION ===== */}
      <section className="py-24 bg-cyber-black relative overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `radial-gradient(ellipse at center, rgba(139,92,246,0.3) 0%, transparent 70%)`,
        }} />
        <div className="container relative z-10 text-center">
          <AnimatedSection>
            {/* Logo row in CTA */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <img src="/images/illuminious-logo-white.png" alt="Illuminious" className="h-8 md:h-10 w-auto opacity-80" />
              <span className="text-xl text-cyber-cyan/60">×</span>
              <img src="/images/future-factory-logo.png" alt="Future Factory" className="h-6 md:h-8 w-auto opacity-80" />
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 font-heading">
              Ready to Build Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-pink">Future</span>?
            </h2>
            <p className="text-lg text-gray-400 max-w-3xl mx-auto mb-10 leading-relaxed">
              The Startup Bridge program is a selective partnership. We look for ambitious teams with innovative products and a collaborative spirit. If you're ready to move beyond the prototype and build a scalable business, we want to hear from you.
            </p>
            <Button asChild size="lg" className="bg-cyber-cyan text-cyber-black hover:bg-cyber-cyan/90 rounded-full px-10 py-4 text-lg font-bold shadow-lg shadow-cyber-cyan/25 transition-all hover:shadow-cyber-cyan/40">
              <Link href="/contact?program=startup">
                Apply to the Program
                <ArrowRight className="w-6 h-6 ml-3" />
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


