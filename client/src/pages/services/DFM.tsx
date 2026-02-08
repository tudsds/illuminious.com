import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Lightbulb, Ruler, Layers, Cog, Shield, Microscope, FileText } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "From Blueprint to Reality",
  },
  {
    id: "capabilities",
    title: "Our Comprehensive DFM/A Services",
  },
  {
    id: "process",
    title: "The Illuminious DFM Workflow",
  },
  {
    id: "tech-specs",
    title: "Technical Specifications",
  },
  {
    id: "benefits",
    title: "Key Advantages",
  },
  {
    id: "cta",
    title: "Optimize Your Design",
  },
];

const capabilities = [
  { icon: Ruler, title: "Advanced PCB Layout & Stackup Analysis", text: "Our engineers conduct a deep analysis of your PCB layout, scrutinizing trace widths, clearances, and via structures against IPC standards. We optimize the layer stackup for signal integrity, impedance control, and cost-effective fabrication, preventing common issues like delamination or signal degradation." },
  { icon: Layers, title: "Strategic Component & BOM Review", text: "We go beyond simple footprint verification. Our review process analyzes your Bill of Materials (BOM) for component lifecycle, global availability, and cost-effectiveness. We identify high-risk, single-source, or near end-of-life components and suggest qualified, production-ready alternatives to ensure supply chain resilience." },
  { icon: Cog, title: "Mechanical Integration & Enclosure Design", text: "We ensure perfect harmony between your electronics and their mechanical housing. Our review covers tolerance stack-up analysis, material selection for durability and thermal performance, and design for efficient molding and assembly. This prevents costly fitment issues and enhances the product's overall robustness and user experience." },
  { icon: Factory, title: "SMT & Assembly Process Simulation", text: "Using advanced simulation software, we model the entire surface-mount technology (SMT) and final assembly process. This virtual build identifies potential collisions, component-to-component interference, and accessibility issues for our automated placement machines (e.g., Fuji NXT, Siemens Siplace) and selective soldering systems, ensuring a smooth production ramp." },
  { icon: Shield, title: "Comprehensive Testability (DFT) Strategy", text: "A product that cannot be tested cannot be reliably manufactured. Our Design for Testability (DFT) analysis ensures your product has adequate test point access, supports in-circuit testing (ICT), and implements boundary scan (JTAG) where applicable. This strategy dramatically reduces test time and improves fault detection coverage." },
  { icon: Lightbulb, title: "Value Engineering & Cost Optimization", text: "We systematically identify opportunities to reduce your product's landed cost without compromising quality or function. This involves exploring alternative materials, consolidating components, optimizing panelization, and aligning the design with our most efficient manufacturing lines, often yielding savings of 15-30%." },
  { icon: Microscope, title: "Material & Substrate Selection", text: "The choice of substrate is critical for performance and reliability. We analyze your requirements for thermal conductivity, dielectric constant (e.g., for RF applications), and mechanical stress to recommend the optimal material, from standard FR-4 to advanced materials like Rogers or Polyimide for flexible circuits." },
  { icon: FileText, title: "Gerber & Fabrication Data Validation", text: "We perform a meticulous check of your manufacturing data package (Gerber, ODB++, NC Drill files). Our CAM engineers use Valor NPI software to verify data integrity, check for fabrication rule violations, and ensure the data accurately reflects your design intent, eliminating delays and errors at the fabrication stage." },
];

const processSteps = [
  { name: "1. Comprehensive Data Submission", description: "To begin, you provide our engineering team with your complete design package. This includes Gerber or ODB++ files, the Bill of Materials (BOM), 3D CAD models (STEP/IGES), assembly drawings, and any specific testing or compliance requirements." },
  { name: "2. Multi-Disciplinary Team Kick-off", description: "Your project is assigned to a dedicated team of electrical, mechanical, manufacturing, and quality engineers. This cross-functional team collaborates in a formal review to understand your product's goals, constraints, and critical-to-quality attributes." },
  { name: "3. Automated & Manual Analysis", description: "We employ a dual approach. First, your design is run through our specialized DFM software (e.g., Valor NPI, Aegis FactoryLogix) to catch thousands of potential rule violations. Then, our experienced engineers perform a manual review, focusing on nuanced issues that software alone cannot detect." },
  { name: "4. Detailed DFM/A Findings Report", description: "We consolidate all findings into a comprehensive and actionable report. Each point is clearly explained, illustrated with screenshots from your design, and prioritized by its potential impact on cost, quality, and delivery. We provide specific, data-driven recommendations for improvement." },
  { name: "5. Collaborative Review & Implementation", description: "We schedule a meeting with your design team to walk through the report. We discuss the recommendations, answer questions, and collaboratively decide on the best path forward, ensuring your core design intent is always preserved while optimizing for manufacturability." },
  { name: "6. Final Design Validation & Lock", description: "Once the agreed-upon changes are implemented, you provide a revised design package. We perform a final validation run to confirm all issues have been resolved. This final, optimized design is then formally locked for the pre-production or NPI build." },
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

export default function ServiceDFM() {
  return (
    <>
      <SEO
        title="Expert Design for Manufacturing (DFM) & Assembly (DFA) Services | Illuminious"
        description="Optimize your electronic product for efficient, cost-effective, and high-quality mass production with Illuminious's expert DFM and DFA engineering services. Reduce costs by up to 30%, improve yield, and accelerate your time to market."
        keywords="Design for Manufacturing, DFM, Design for Assembly, DFA, electronics design, product optimization, manufacturing engineering, PCB DFM, contract manufacturing"
        url="/services/dfm"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_placeholder-engineer-and-founder.jpg"
            alt="Engineer reviewing a complex 3D CAD model on a large monitor"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Design for Manufacturing (DFM)" },
            ]} />
          <div className="max-w-4xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Design for Manufacturing (DFM)
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Building a robust bridge between your design concept and scalable, high-yield production. We meticulously optimize your product for quality, cost, and efficiency before the first unit is ever manufactured.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="sticky top-0 z-20 bg-white/80 backdrop-blur-md border-b shadow-sm">
        <div className="container">
          <div className="flex justify-center overflow-x-auto -mx-4">
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
        <section id="overview" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Why DFM is the Foundation of Successful Hardware</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
                  <p>
                    Design for Manufacturing (DFM) and Design for Assembly (DFA) are not merely process steps; they are a foundational philosophy that separates successful, scalable products from those that fail to leave the prototype stage. This proactive engineering discipline focuses on designing products to be manufactured and assembled in the most efficient, reliable, and cost-effective manner possible. A brilliant design concept can quickly become a manufacturing nightmare—plagued by low yields, high failure rates, and spiraling costs—without a rigorous DFM analysis integrated early in the development cycle.
                  </p>
                  <p>
                    At Illuminious, DFM is a deeply collaborative and data-driven process. Our multi-disciplinary engineering teams in Shenzhen and Batam act as a direct extension of your own, embedding decades of hands-on manufacturing experience into your design. We analyze every facet of your product, from the microscopic details of the PCB layout and component selection to the macro-level considerations of mechanical enclosures and the final assembly sequence. Our goal is to preemptively identify and mitigate potential issues that could compromise quality, inflate costs, or jeopardize your product's long-term reliability.
                  </p>
                  <p>
                    It is estimated that 70-80% of a product's manufacturing cost is determined during the design phase. By investing in a thorough DFM/DFA review upfront, you are making the single most impactful decision to de-risk your entire manufacturing journey. This crucial phase allows you to avoid expensive and time-consuming tooling modifications, slash production delays, and substantially lower your per-unit cost, ensuring a faster, more predictable, and ultimately more profitable path to market.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-cad-design-review.jpg" alt="Diverse team of engineers collaborating around a table with blueprints and a laptop" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Our Comprehensive DFM & DFA Services</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We offer a holistic, end-to-end analysis of your product, covering every critical aspect from the component level to the final packaged unit, ensuring a seamless transition to mass production.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {capabilities.map((cap, index) => (
                <AnimatedSection key={cap.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-lg text-left h-full flex flex-col border-t-4 border-illuminious-blue/50 hover:shadow-xl transition-shadow duration-300">
                    <div className="w-14 h-14 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-5 flex-shrink-0">
                      <cap.icon className="w-7 h-7 text-illuminious-blue" />
                    </div>
                    <h3 className="font-bold text-lg text-illuminious-navy mb-3 font-heading">{cap.title}</h3>
                    <p className="text-gray-600 text-base leading-relaxed">{cap.text}</p>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section id="process" className="py-24 bg-white">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-20">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">The Illuminious DFM Workflow</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Our transparent and structured process is designed to deliver actionable insights quickly, fostering a partnership that turns design potential into manufacturing reality.
              </p>
            </AnimatedSection>
            <div className="relative max-w-5xl mx-auto">
              <div className="absolute left-1/2 top-4 bottom-4 w-0.5 bg-gray-200" aria-hidden="true" />
              {processSteps.map((step, index) => (
                <div key={step.name} className="relative mb-16">
                  <div className={`flex items-start ${index % 2 === 0 ? "flex-row-reverse" : ""}`}>
                    <div className="w-1/2 px-10">
                      <AnimatedSection delay={index * 0.1}>
                        <div className={`text-left ${index % 2 === 0 ? "md:text-right" : ""}`}>
                          <h3 className="text-2xl font-bold mb-3 font-heading text-illuminious-navy">{step.name}</h3>
                          <p className="text-gray-600 text-lg leading-relaxed">{step.description}</p>
                        </div>
                      </AnimatedSection>
                    </div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg shadow-md">
                      {index + 1}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Technical Specifications Section */}
        <section id="tech-specs" className="py-24 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-4xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-illuminious-navy mb-4 font-heading">Technical DFM Guidelines & Capabilities</h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                We adhere to stringent internal and external standards to ensure the highest quality. Below are some of the key technical parameters our DFM process addresses.
              </p>
            </AnimatedSection>
            <AnimatedSection>
              <div className="bg-white rounded-xl shadow-xl p-8 md:p-12 border">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
                  <div className="tech-spec-item">
                    <h4 className="text-lg font-bold text-illuminious-navy mb-2">PCB Fabrication</h4>
                    <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                      <li>Min. Trace/Space: 3/3 mil (0.0762mm)</li>
                      <li>Min. Drill Size: 0.15mm (6 mil)</li>
                      <li>Aspect Ratio: 12:1</li>
                      <li>Layer Count: Up to 32 layers</li>
                      <li>Materials: FR-4, Rogers, Polyimide, Metal Core</li>
                      <li>Surface Finishes: HASL, ENIG, ENEPIG, OSP</li>
                    </ul>
                  </div>
                  <div className="tech-spec-item">
                    <h4 className="text-lg font-bold text-illuminious-navy mb-2">Component & Assembly</h4>
                    <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                      <li>Smallest Passive: 01005 package</li>
                      <li>Fine Pitch BGA: 0.35mm</li>
                      <li>BGA Placement Accuracy: ±25µm</li>
                      <li>Automated Optical Inspection (AOI)</li>
                      <li>3D X-Ray Inspection (AXI) for BGA/QFN</li>
                      <li>IPC-A-610 Class 2 & 3 Standards</li>
                    </ul>
                  </div>
                  <div className="tech-spec-item">
                    <h4 className="text-lg font-bold text-illuminious-navy mb-2">Mechanical & Enclosure</h4>
                    <ul className="space-y-1.5 text-gray-600 list-disc list-inside">
                      <li>Plastic Injection Molding Tolerances: ±0.05mm</li>
                      <li>CNC Machining Tolerances: ±0.02mm</li>
                      <li>Sheet Metal Bend Radius: 1T minimum</li>
                      <li>Material Analysis: FEA for stress & thermal</li>
                      <li>IP Rating Considerations (IP65, IP67)</li>
                      <li>UL 94 Flammability Ratings</li>
                    </ul>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="benefits" className="py-24 bg-white">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_placeholder-engineers-collaborating.jpg" alt="Graph showing a significant cost reduction curve after DFM implementation" className="w-full h-full object-cover" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-4xl font-bold text-illuminious-navy mb-6 font-heading">The Tangible ROI of DFM</h2>
                <div className="space-y-5 text-gray-700 leading-relaxed text-lg">
                  <p>
                    A thorough DFM/A process is not a cost center; it is a high-return investment that pays dividends across the entire product lifecycle. By partnering with Illuminious, you unlock measurable improvements in cost, quality, and speed.
                  </p>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">Drastically Lower Unit Cost</h4>
                        <p>By optimizing for our specific automated assembly lines, suggesting cost-effective alternative components, and improving panelization, we consistently help clients reduce material and labor costs by 15-30%.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">Accelerated Time-to-Market</h4>
                        <p>Proactive issue resolution prevents unforeseen delays. By eliminating design flaws before production, we avoid costly and time-consuming tool changes, material shortages, and production line halts, getting your product to market weeks or even months faster.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-1 flex-shrink-0" />
                      <div>
                        <h4 className="font-bold text-illuminious-navy">Enhanced Product Quality & Reliability</h4>
                        <p>A design optimized for manufacturing is inherently more reliable. Our DFM process improves solder joint integrity, thermal performance, and mechanical robustness, leading to higher production yields, lower field failure rates, and a more dependable product for your customers.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="bg-illuminious-navy text-white">
          <div className="container py-20 text-center">
            <AnimatedSection>
              <h2 className="text-4xl font-bold mb-4 font-heading">Ready to Optimize Your Design?</h2>
              <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
                Let our engineers become an extension of your team. Partner with us to ensure your product is ready for scalable, cost-effective, and high-quality manufacturing. Submit your design for a complimentary initial review.
              </p>
              <Button size="lg" asChild className="bg-illuminious-blue hover:bg-illuminious-blue/90 text-white font-bold text-lg px-10 py-7">
                <Link href="/contact">
                  Request a DFM Consultation <ArrowRight className="ml-2" />
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
