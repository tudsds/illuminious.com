import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Video, Users, Factory, Microscope, Warehouse, Cpu, PackageCheck, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const factoryAreas = [
  {
    name: "The Heart of Precision: SMT Production Floor",
    description: "Welcome to the nerve center of our operations. Our Surface-Mount Technology (SMT) floor is where millions of microscopic components are precisely placed and soldered onto printed circuit boards (PCBs). This highly automated environment is designed for speed, accuracy, and repeatability, forming the foundation of every electronic device we manufacture. We handle everything from high-mix, low-volume runs for prototypes to millions of units for mass production, all with the same level of engineering rigor.",
    image: "/images/DEPLOYED_backup-smt-line-panoramic-21.jpg",
    icon: Cpu,
    features: [
      "State-of-the-Art Siemens® SIPLACE SX Lines: Capable of placing over 150,000 components per hour with extreme accuracy, down to 01005 package sizes, ensuring we can handle the most dense and complex designs.",
      "DEK® Horizon Screen Printers with 3D SPI: We apply solder paste with unparalleled precision, verified by 100% 3D Solder Paste Inspection (SPI) to eliminate defects before components are even placed.",
      "Heller® 1913 MKIII Reflow Ovens: Our 13-zone nitrogen-capable ovens create the perfect thermal profile for every unique PCB assembly, maximizing solder joint integrity and long-term product reliability.",
      "Full Component Traceability: Every reel of components is scanned and tracked, providing a complete history for every single board we produce, a critical requirement for medical and automotive clients.",
    ],
  },
  {
    name: "Uncompromising Quality: The Testing & Reliability Lab",
    description: "Quality at Illuminious is not just a final inspection; it's a philosophy embedded in every step. Our dedicated testing and reliability lab is where we prove our commitment. Staffed by experienced quality engineers, this area is equipped with advanced diagnostic tools to go beyond simple pass/fail tests. We perform deep failure analysis, environmental stress testing, and functional verification to ensure your product not only works out of the box but continues to perform reliably in the real world.",
    image: "/images/DEPLOYED_placeholder-engineer-testing-pcb.jpg",
    icon: Microscope,
    features: [
      "3D Automated Optical & X-Ray Inspection (AOI/AXI): We use Koh Young® 3D AOI and Nordson DAGE® Quadra 7 X-Ray systems to inspect every solder joint, including hidden connections on complex packages like BGAs and QFNs.",
      "In-Circuit & Functional Testers (ICT/FCT): Custom-built test jigs with Keysight® and National Instruments® hardware verify that every circuit path is correct and the product functions exactly as you designed it.",
      "Environmental & Reliability Chambers: We simulate years of use in days, subjecting products to extreme temperatures, humidity, vibration, and drop tests to identify potential field failures before they happen.",
      "Certifications & Compliance: Our processes are certified to ISO 9001, ISO 13485 (Medical Devices), and IATF 16949 (Automotive), ensuring we meet the strictest quality standards of any industry.",
    ],
  },
  {
    name: "From Resin to Reality: Injection Molding & Tooling",
    description: "A great electronic product needs a great enclosure. Our in-house injection molding department provides a seamless path from digital design to physical part. We manage the entire process, from mold design and fabrication to mass production of plastic components. This integration reduces lead times, improves quality control, and allows for rapid design iterations. Our engineers work with you to select the right materials and design for manufacturability, ensuring a perfect fit and finish for your product.",
    image: "/images/DEPLOYED_placeholder-injection-molding-factory-line.jpg",
    icon: Factory,
    features: [
      "Wide Range of Press Tonnages (50T - 500T): We can produce everything from small, intricate internal components to large, robust outer housings with our Haitian® and Arburg® injection molding machines.",
      "Diverse Material Expertise: We have deep experience with a vast library of polymers, including ABS, PC, TPE, Nylon, and custom-engineered resins to meet any mechanical, thermal, or aesthetic requirement.",
      "In-House Mold Making & Maintenance: Our on-site tool room allows us to build high-quality steel molds (P20, H13, S7) and perform real-time maintenance and modifications, drastically reducing downtime.",
      "Advanced Finishing & Assembly: We offer secondary processes including ultrasonic welding, pad printing, heat staking, and EMI shielding to deliver a fully finished and assembled mechanical enclosure.",
    ],
  },
  {
    name: "The Final Touch: Box Build & Systems Integration",
    description: "This is where it all comes together. The Box Build and Systems Integration area is where our skilled technicians transform individual PCBs and mechanical parts into a finished, market-ready product. Far more than simple assembly, this stage involves complex wiring, software installation, sub-assembly integration, and final testing. Each station is custom-configured for a specific product, with digital work instructions and integrated quality checks to ensure nothing is missed. This is the human touch that perfects the automated process.",
    image: "/images/DEPLOYED_factory-tour-hero.jpg",
    icon: PackageCheck,
    features: [
      "Dedicated Assembly Cells: Each product gets its own dedicated assembly line, optimized for its specific workflow to maximize efficiency and minimize the chance of errors.",
      "Complex Harness & Cable Assembly: Our technicians are trained to build and route intricate custom wiring harnesses, ensuring reliable connections and a clean internal layout.",
      "Software Flashing & Configuration: We load your firmware, configure product settings, and pair wireless devices, ensuring the product is fully functional and ready for the end-user.",
      "Full System Functional Testing & Calibration: Before packaging, every single unit undergoes a comprehensive final test, simulating real-world use to guarantee 100% functionality.",
    ],
  },
  {
    name: "Precision & Purity: The ISO 7 Clean Room",
    description: "For products that demand the utmost purity, our certified ISO 7 Clean Room provides a controlled environment free from contaminants. This is essential for manufacturing medical devices, optical sensors, and other sensitive electronics where a single speck of dust can compromise performance. Access is strictly controlled, and the air is continuously filtered to maintain a particle count of less than 10,000 particles per cubic foot. This commitment to purity ensures the highest possible yield and reliability for sensitive applications.",
    image: "/images/DEPLOYED_placeholder-medical-cleanroom-technician.jpg",
    icon: Wind,
    features: [
      "Certified ISO 14644-1 Class 7: Independently audited and certified to meet stringent cleanliness standards required for medical and optical-grade manufacturing.",
      "Positive Pressure & HEPA Filtration: Maintains a constant positive pressure and utilizes High-Efficiency Particulate Air (HEPA) filters to remove 99.97% of airborne particles.",
      "Strict Gowning & Entry Protocols: All personnel undergo a rigorous gowning procedure and pass through an air shower to prevent any contaminants from entering the controlled space.",
      "ESD-Safe & Controlled Environment: The entire clean room is equipped with ESD-safe flooring, benches, and tools, along with strict temperature and humidity controls.",
    ],
  },
  {
    name: "Logistics & Control: The Smart Warehouse",
    description: "Our smart warehouse is more than just storage; it's the logistical backbone of our factory. It ensures that the right components are delivered to the right production line at the right time. Every component, from a single resistor to a complex chipset, is barcoded, tracked, and stored in a climate-controlled, ESD-safe environment. Our robust inventory management system (IMS) provides real-time visibility into stock levels, prevents shortages, and ensures full traceability from receiving to final shipment.",
    image: "/images/DEPLOYED_placeholder-warehouse-aisle.jpg",
    icon: Warehouse,
    features: [
      "Climate-Controlled & ESD-Safe Storage: All components are stored in a temperature and humidity-controlled environment with full ESD protection to preserve component integrity.",
      "Moisture Sensitive Device (MSD) Management: We follow strict J-STD-033 protocols for handling MSDs, including dry-baking ovens and vacuum-sealed moisture barrier bags.",
      "First-In, First-Out (FIFO) System: Our IMS automatically enforces FIFO principles, ensuring that older component stock is used first to prevent expiration and maintain quality.",
      "Integrated Supply Chain Management: We work directly with your team and our component suppliers to manage buffer stock, long-lead time items, and end-of-life (EOL) transitions, securing your supply chain.",
    ],
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

export default function FactoryTour() {
  return (
    <>
      <SEO
        title="A Detailed Tour of Our Advanced Electronics Factory | Illuminious"
        description="Explore every corner of our state-of-the-art electronics manufacturing facility. See our SMT lines, testing labs, injection molding, clean rooms, and box build assembly areas in detail."
        keywords="factory tour, electronics factory, manufacturing plant, SMT line, PCBA factory, injection molding, box build, testing lab, clean room, contract manufacturing"
        url="/factory-tour"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-gray-900 text-white">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-smt-production-line.jpg"
            alt="An expansive, clean, and modern factory floor with multiple production lines"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/70 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Factory Tour" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading"
            >
              Beyond the Spec Sheet
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl md:text-2xl text-white/80 leading-relaxed"
            >
              Step inside and see the process, precision, and people that bring your product to life. This is more than a factory; it's where innovation takes physical form. Explore each specialized area of our facility below.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Factory Areas Section */}
      <section className="py-24 bg-white">
        <div className="container">
          <div className="space-y-28">
            {factoryAreas.map((area, index) => (
              <AnimatedSection key={area.name}>
                <div className={`grid md:grid-cols-2 gap-x-12 gap-y-8 items-center`}>
                  <div className={`${index % 2 !== 0 ? 'md:col-start-2' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <area.icon className="w-10 h-10 text-illuminious-blue" />
                      <h2 className="text-3xl font-bold text-illuminious-navy font-heading">{area.name}</h2>
                    </div>
                    <p className="text-illuminious-navy leading-relaxed mb-6 text-lg">{area.description}</p>
                    <ul className="space-y-4">
                      {area.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-3">
                          <CheckCircle className="w-6 h-6 text-illuminious-blue flex-shrink-0 mt-1" />
                          <span className="text-gray-800">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className={`rounded-xl overflow-hidden shadow-2xl ${index % 2 !== 0 ? 'md:col-start-1' : ''}`}>
                    <img src={area.image} alt={`Illuminious facility area: ${area.name}`} className="w-full h-full object-cover" />
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Tour Options */}
      <section className="py-20 bg-illuminious-light/30">
        <div className="container">
          <AnimatedSection className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Ready to See for Yourself?</h2>
            <p className="text-lg text-illuminious-sky">
              The best way to understand our capabilities is to see them in action. We believe in full transparency and welcome you to tour our facility, either virtually or in person.
            </p>
          </AnimatedSection>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border rounded-lg p-8 flex flex-col items-center text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Video className="w-12 h-12 text-illuminious-blue mb-4" />
              <h3 className="text-xl font-bold text-illuminious-navy mb-2">Live Virtual Tour</h3>
              <p className="text-illuminious-sky mb-6 flex-grow">Join one of our lead engineers for a live, interactive walkthrough of our factory floor via video conference. Ask questions in real-time as we show you our equipment, processes, and people at work. It's the most efficient way to get a firsthand look.</p>
              <Button asChild className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full py-3 text-base font-semibold">
                <Link href="/contact?tour=virtual">Schedule a Virtual Tour</Link>
              </Button>
            </div>
            <div className="border rounded-lg p-8 flex flex-col items-center text-center bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
              <Users className="w-12 h-12 text-illuminious-blue mb-4" />
              <h3 className="text-xl font-bold text-illuminious-navy mb-2">In-Person Visit</h3>
              <p className="text-illuminious-sky mb-6 flex-grow">For a deeper dive, we welcome you to visit our facilities in person. We can help coordinate your travel to provide a seamless and insightful experience. Meet the team, see your potential production line, and gain complete confidence in your manufacturing partner.</p>
              <Button asChild className="w-full bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full py-3 text-base font-semibold">
                <Link href="/contact?tour=in-person">Arrange an In-Person Visit</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}

