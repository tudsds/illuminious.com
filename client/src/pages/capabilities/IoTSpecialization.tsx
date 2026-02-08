import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Wifi,
  CheckCircle,
  Radio,
  Antenna,
  Battery,
  Signal,
  Cpu,
  ShieldCheck,
  Factory,
  TestTube2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const capabilities = [
  {
    icon: Radio,
    title: "Advanced RF & Wireless Design Support",
    description: "Our dedicated RF engineering team provides comprehensive support, from initial circuit topology and component selection to complex impedance matching and filter design. We utilize advanced simulation tools like ADS and HFSS to optimize performance, ensuring your device meets stringent wireless standards for signal integrity and range before the first prototype is even built.",
  },
  {
    icon: Antenna,
    title: "Strategic Antenna Integration & Tuning",
    description: "Antenna performance is paramount. We go beyond simple integration, offering custom PCB trace antenna design, selection and placement of off-the-shelf antennas, and fine-tuning using a vector network analyzer (VNA). Our process minimizes interference and maximizes efficiency (TRP/TIS) for reliable connectivity in challenging real-world environments.",
  },
  {
    icon: Battery,
    title: "Ultra-Low Power System Optimization",
    description: "For battery-powered IoT devices, longevity is key. Our engineers specialize in power-sensitive designs, meticulously analyzing and optimizing every component. We implement sophisticated sleep modes, select low-leakage components, and design efficient power delivery networks (PDNs) to extend battery life from months to years, reducing total cost of ownership.",
  },
  {
    icon: Signal,
    title: "Comprehensive OTA & Pre-Compliance Testing",
    description: "We de-risk your path to certification with in-house Over-the-Air (OTA) and pre-compliance testing. In our anechoic chamber, we measure key performance indicators like Total Radiated Power (TRP) and Total Isotropic Sensitivity (TIS). This iterative testing process identifies and resolves potential issues early, dramatically accelerating formal certification and time-to-market.",
  },
  {
    icon: Cpu,
    title: "Embedded Systems & Firmware Expertise",
    description: "The heart of your IoT device is its embedded system. Our expertise spans a wide range of microcontrollers (MCUs) and System-on-Chips (SoCs) from leading vendors like Nordic, Espressif, and STMicroelectronics. We assist with firmware architecture, bootloader development, and ensuring seamless hardware-software integration for optimal performance and reliability.",
  },
    {
    icon: ShieldCheck,
    title: "IoT Security Hardening",
    description: "Security is not an afterthought. We help you build a robust security posture from the ground up, incorporating secure boot, encrypted firmware updates (FOTA), and hardware-based key storage. We guide you through best practices to protect your devices and user data from evolving threats, ensuring your product is trusted by the market.",
  },
];

const protocols = [
  { name: "Wi-Fi", versions: "802.11 a/b/g/n/ac/ax (Wi-Fi 6/6E)", description: "Ideal for high-throughput applications like video streaming and local network control." },
  { name: "Bluetooth/BLE", versions: "Classic, BLE 4.x, 5.0, 5.1 (AoA/AoD), 5.2 (LE Audio)", description: "Versatile standard for wearables, peripherals, and location-based services." },
  { name: "Zigbee & Thread", versions: "Zigbee 3.0, Thread, Matter", description: "Robust, low-power mesh networking for smart home and industrial automation." },
  { name: "Z-Wave", versions: "700 & 800 Series", description: "A leading standard for interoperable smart home control systems." },
  { name: "LoRaWAN", versions: "1.0.x, 1.1", description: "Long-range, low-power protocol perfect for smart agriculture, logistics, and city-wide sensing." },
  { name: "Cellular IoT", versions: "LTE Cat-M1, NB-IoT, 5G RedCap", description: "Provides ubiquitous connectivity for mobile assets and devices outside of Wi-Fi range." },
  { name: "UWB", versions: "IEEE 802.15.4z", description: "Precision real-time location tracking for asset management and secure access control." },
  { name: "Multi-Protocol", versions: "Concurrent & Dynamic", description: "SoCs supporting multiple protocols like BLE + Thread for maximum flexibility and future-proofing." },
];

const certifications = [
  { name: "FCC Part 15/18", region: "USA", description: "Regulates unlicensed radio-frequency emissions." },
  { name: "CE RED", region: "Europe", description: "Ensures safety and electromagnetic compatibility for radio equipment." },
  { name: "IC RSS", region: "Canada", description: "Canadian standards for radiocommunication apparatus." },
  { name: "MIC (TELEC)", region: "Japan", description: "Certification for radio equipment in the Japanese market." },
  { name: "RCM", region: "Australia/NZ", description: "Compliance mark for electrical safety and EMC." },
  { name: "SRRC", region: "China", description: "Approval for radio transmission equipment in mainland China." },
  { name: "KC", region: "South Korea", description: "Certification for electrical and electronic equipment." },
  { name: "ANATEL", region: "Brazil", description: "Homologation for telecom products in Brazil." },
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

export default function IoTSpecialization() {
  return (
    <>
      <SEO
        title="Expert IoT & Wireless Device Manufacturing | Illuminious"
        description="End-to-end IoT manufacturing services. From advanced RF design and antenna integration to ultra-low power optimization and global wireless certification, we are your trusted partner for building reliable, scalable, and secure connected devices."
        keywords="IoT contract manufacturing, wireless device manufacturer, RF design services, antenna tuning, low power IoT, BLE, WiFi, LoRaWAN, cellular IoT, Matter, IoT security"
        url="/capabilities/iot-specialization"
      />
      <Header />
      
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
                <Wifi className="w-4 h-4" />
                Manufacturing for the Internet of Things
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
                From Silicon to Cloud: Your Partner in IoT Manufacturing
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                The Internet of Things demands more than just standard electronics manufacturing. It requires deep, specialized expertise in wireless systems, power management, and global regulations. At Illuminious, we provide the end-to-end manufacturing services that transform your innovative IoT concepts into reliable, scalable, and secure connected products for the global market.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  asChild
                  size="lg"
                  className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
                >
                  <Link href="/contact">
                    Discuss Your IoT Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <img
                src="/images/DEPLOYED_placeholder-iot-sensor-network.jpg"
                alt="An array of diverse IoT devices manufactured by Illuminious"
                className="rounded-2xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              Core IoT Manufacturing Capabilities
            </h2>
            <p className="text-lg text-muted-foreground">
              Successfully manufacturing wireless devices requires a unique fusion of electronics assembly, RF engineering, and rigorous testing. Our vertically integrated capabilities are specifically tailored to address the complexities of IoT product development and mass production, ensuring quality, reliability, and performance.
            </p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((cap, index) => (
              <AnimatedSection key={cap.title} delay={index * 0.1}>
                <div className="p-6 rounded-2xl bg-white border border-illuminious-light hover:shadow-lg transition-shadow h-full flex flex-col">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center mb-4 flex-shrink-0">
                    <cap.icon className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy mb-2">{cap.title}</h3>
                  <p className="text-muted-foreground text-sm flex-grow">{cap.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <AnimatedSection>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
                Mastery Across the Wireless Spectrum
              </h2>
              <p className="text-lg text-muted-foreground">
                Your product's use case dictates its connectivity needs. We have hands-on, mass-production experience across the full spectrum of wireless protocols, from short-range personal area networks to long-range cellular technologies. We help you select and implement the optimal protocol for your application's specific requirements of bandwidth, range, power consumption, and topology.
              </p>
            </AnimatedSection>
          </div>
          <AnimatedSection>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {protocols.map((protocol) => (
                <div key={protocol.name} className="p-4 rounded-xl bg-white border border-illuminious-light/80 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="font-bold text-illuminious-navy">{protocol.name}</div>
                  <div className="text-xs text-muted-foreground mb-2">{protocol.versions}</div>
                  <p className="text-sm text-muted-foreground flex-grow">{protocol.description}</p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-white">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <AnimatedSection>
              <img
                src="/images/DEPLOYED_backup-quality-burn-in-test-37.jpg"
                alt="Illuminious engineer working in an RF testing lab with anechoic chamber"
                className="rounded-2xl shadow-xl"
              />
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-6">
                Navigating Global Wireless Certification
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Gaining market access for a wireless product means navigating a complex web of international regulations and certifications. A failure at this final stage can lead to costly delays and redesigns. Our experienced compliance team acts as your partner, guiding you through the entire process. We help with documentation, manage submissions to certified test labs, and troubleshoot any issues that arise, ensuring your product is compliant for your target markets from day one.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 gap-y-4">
                {certifications.map((cert) => (
                  <div key={cert.name} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-illuminious-blue flex-shrink-0" />
                    <div>
                      <span className="font-semibold text-illuminious-navy">{cert.name}</span>
                      <span className="text-xs text-muted-foreground block">{cert.region}</span>
                    </div>
                  </div>
                ))}
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-32 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-illuminious-navy mb-4">
              The Illuminious IoT Production Process
            </h2>
            <p className="text-lg text-muted-foreground">
              We have engineered our entire production process to mitigate the risks inherent in IoT manufacturing. From design for manufacturability (DFM) to specialized testing, we ensure a smooth transition from prototype to high-volume production.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <AnimatedSection delay={0.1}>
              <div className="p-6 rounded-2xl bg-white border border-illuminious-light h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center flex-shrink-0">
                    <Factory className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy">RF-Aware DFM/DFA</h3>
                </div>
                <p className="text-muted-foreground">Our Design for Manufacturability (DFM) and Assembly (DFA) process includes specific checks for IoT devices. We analyze PCB layouts for proper RF signal routing, shielding, and component placement to prevent signal degradation. We also ensure the mechanical design doesn't interfere with antenna performance, a common pitfall that can cripple a wireless product.</p>
              </div>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <div className="p-6 rounded-2xl bg-white border border-illuminious-light h-full">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-illuminious-light/50 flex items-center justify-center flex-shrink-0">
                    <TestTube2 className="w-6 h-6 text-illuminious-blue" />
                  </div>
                  <h3 className="text-xl font-bold text-illuminious-navy">Specialized Production Testing</h3>
                </div>
                <p className="text-muted-foreground">Standard functional tests aren't enough for IoT. Our production lines incorporate custom-built RF test fixtures. Every single device is tested for key wireless metrics like transmit power and receiver sensitivity. This 100% testing methodology ensures that every unit leaving our factory performs to specification, drastically reducing field failures and RMAs.</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Build Your Connected Future?
            </h2>
            <p className="text-lg text-white/80 mb-8">
              The IoT market is competitive, and your choice of manufacturing partner is critical. Don't let your innovation be compromised by inexperience. Partner with a specialist who understands the unique challenges of wireless hardware. Let's discuss your project and how our expertise can ensure its success.
            </p>
            <Button
              asChild
              size="lg"
              className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
            >
              <Link href="/contact">
                Schedule a Technical Consultation
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

