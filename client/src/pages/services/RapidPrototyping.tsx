import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Zap, Layers, Cog, FileCheck, ShieldCheck, Scaling, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const pageSections = [
  {
    id: "overview",
    title: "From Idea to Reality, Fast",
  },
  {
    id: "technologies",
    title: "Prototyping Technologies",
  },
  {
    id: "process",
    title: "Our Streamlined Process",
  },
  {
    id: "specifications",
    title: "Technical Specifications",
  },
  {
    id: "faq",
    title: "FAQs",
  },
  {
    id: "cta",
    title: "Build Your Prototype",
  },
];

const technologies = [
  { icon: Zap, title: "Quick-Turn PCBA Prototypes", text: "Ultra-fast turn assembly of complex printed circuit boards, available in as little as 24 hours. We handle multi-layer boards, fine-pitch components (0201, BGA), and provide comprehensive testing, including flying probe and functional verification, to validate your electronic design's integrity and performance." },
  { icon: Cog, title: "Multi-Axis CNC Machining", text: "High-precision 3-axis and 5-axis CNC machining for functional prototypes from production-grade materials. We work with a vast range of metals (Aluminum 6061/7075, Stainless Steel 303/304/316, Titanium) and engineering plastics (ABS, PC, PEEK, Delrin) to achieve tolerances as tight as ±0.001\' (±0.025mm)." },
  { icon: Layers, title: "Advanced 3D Printing (SLA, SLS, FDM, MJF)", text: "A comprehensive suite of additive manufacturing options for every need. From high-detail cosmetic models (SLA) and durable functional parts (SLS, MJF) to cost-effective form-fit checks (FDM), we provide expert guidance on material selection and process optimization." },
  { icon: Factory, title: "Urethane & Vacuum Casting", text: "Ideal for pilot runs and pre-production series, our vacuum casting process creates high-fidelity, production-quality plastic parts in urethane resins that mimic the properties of injection molded plastics. This is a cost-effective way to get 10-100 units for marketing, testing, or early sales." },
  { icon: FileCheck, title: "Sheet Metal Fabrication", text: "Precision fabrication of custom enclosures, brackets, and chassis. Our capabilities include laser cutting, CNC bending, punching, and welding of various metals like steel, stainless steel, and aluminum, complete with finishing services like powder coating and anodizing." },
  { icon: ShieldCheck, title: "Full Product Assembly & Integration", text: "We don’t just make parts; we build products. Our service integrates all components—electronics, mechanical hardware, and custom-fabricated parts—into a fully assembled and tested product prototype, including firmware flashing and functional validation." },
  { icon: Scaling, title: "Bridge-to-Production Tooling", text: "For projects needing several hundred to a few thousand parts, we offer rapid aluminum tooling (soft tooling). This process bridges the gap between prototyping and mass production, allowing for faster design validation with real injection-molded parts without the high cost of steel tooling." },
  { icon: Wrench, title: "Post-Processing & Finishing", text: "A prototype’s finish is crucial for both aesthetic appeal and functional performance. We offer a wide array of finishing services, including anodizing, powder coating, painting, custom graphics application, and specialized surface treatments to meet your exact specifications." },
];

const processSteps = [
  { name: "Consultation & DFM Analysis", description: "Submit your CAD files, BOM, and project requirements. Our US-based engineering team will review your design and provide a detailed quote and comprehensive Design for Manufacturability (DFM) feedback within 24 hours to identify potential issues and cost-saving opportunities." },
  { name: "Dedicated Project Management", description: "Upon project confirmation, a dedicated Project Manager from our US office is assigned as your single point of contact. They will develop a detailed timeline, manage all factory communications, and provide you with regular progress updates, ensuring a smooth and transparent process." },
  { name: "Rapid Manufacturing & Sourcing", description: "Our Shenzhen and Batam facilities begin manufacturing immediately. We leverage our state-of-the-art in-house equipment for PCBA, CNC, and 3D printing, while our established supply chain team sources all necessary components and materials at speed, ensuring quality and traceability." },
  { name: "Assembly, Integration & Firmware", description: "Our skilled technicians perform all mechanical assembly and PCBA integration in a controlled environment. This includes installing firmware, running initial diagnostics, and ensuring all components fit and function together as designed. We build your product, not just the parts." },
  { name: "In-Depth Quality Assurance", description: "Quality is not an afterthought. Every prototype undergoes a rigorous multi-stage quality inspection. This includes dimensional verification against CAD, CMM inspection for critical features, full functional testing of electronics, and a final cosmetic review before shipment." },
  { name: "Global Logistics & Delivery", description: "Once your prototype passes our final QA checks, it is professionally packaged to prevent damage during transit and shipped to your location anywhere in the world. We handle all logistics to ensure a timely and secure delivery to your doorstep." },
];

const specifications = [
    { category: "PCBA", items: ["Turnaround: As fast as 24 hours", "Layers: 1-32 Layers", "Materials: FR-4, Rogers, Polyimide, Aluminum-clad", "Component Size: Down to 01005, 0.35mm BGA pitch", "Testing: Flying Probe, AOI, X-Ray, Functional Test"] },
    { category: "CNC Machining", items: ["Axes: 3-Axis, 4-Axis, 5-Axis Indexed", "Tolerances: Down to ±0.001\' (±0.025mm)", "Materials: Aluminum, Stainless Steel, Brass, Copper, Titanium, ABS, PC, PEEK, Acetal (Delrin)", "Max Part Size: 1000mm x 600mm x 500mm"] },
    { category: "3D Printing", items: ["Technologies: FDM, SLA, SLS, MJF, DMLS", "Layer Height: Down to 16 microns (SLA)", "Materials: ABS, PLA, PETG, Nylon, TPU, Resins (Standard, Tough, High-Temp), PA12, Alumide", "Finishing: Sanding, Painting, Vapor Smoothing"] },
    { category: "Sheet Metal", items: ["Processes: Laser Cutting, CNC Bending, Punching, Welding", "Tolerances: ±0.005\' (±0.127mm)", "Materials: Steel, Stainless Steel, Aluminum", "Thickness: 0.5mm to 6mm"] },
];

const faqs = [
    { q: "What files do I need to get a quote?", a: "For a comprehensive quote, please provide 3D CAD files (STEP, IGES, or Parasolid), 2D drawings for critical dimensions, and a Bill of Materials (BOM) for PCBA projects. The more information you provide, the more accurate our DFM feedback and quote will be." },
    { q: "What is the typical lead time for a full product prototype?", a: "Lead times vary based on complexity, but a typical project involving PCBA, a CNC-machined enclosure, and assembly takes between 2 to 4 weeks from project kick-off to shipment. We will always provide a detailed timeline specific to your project." },
    { q: "Can you handle sourcing of all components?", a: "Yes, we offer full turnkey services, which include sourcing all electronic components from our network of vetted global suppliers. We manage the entire supply chain to ensure component quality and availability, saving you time and logistical headaches." },
    { q: "What kind of quality reports do you provide?", a: "Every project is shipped with a standard quality report including a certificate of conformance. For more complex projects, we can provide detailed First Article Inspection (FAI) reports, CMM inspection data, material certifications, and functional test results upon request." },
    { q: "Do you offer finishing services for prototypes?", a: "Absolutely. We believe a prototype should look and feel like the final product. We offer a wide range of finishing options, including anodizing, powder coating, painting, silk-screening, and laser etching to match your exact cosmetic requirements." },
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

export default function ServiceRapidPrototyping() {
  return (
    <>
      <SEO
        title="Rapid Prototyping Services | PCBA, CNC, 3D Printing | Illuminious"
        description="Accelerate your product development with our rapid prototyping services. We deliver functional PCBA, CNC, and 3D printed prototypes in days, not weeks."
        keywords="Rapid prototyping, PCBA prototype, CNC machining, 3D printing services, product prototyping, quick-turn prototypes, DFM analysis, prototype assembly"
        url="/services/rapid-prototyping"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholder-prototyping-hero.jpg"
            alt="A 3D printer creating a complex prototype part"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Rapid Prototyping" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Rapid Prototyping Services
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Turn your designs into tangible, functional prototypes in days. We provide the speed and precision you need to iterate faster, de-risk your investment, and get to market sooner.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Validate Your Vision with Speed and Precision</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    In today's hyper-competitive market, the speed at which you can move from a CAD model to a physical, testable product is a decisive factor for success. Rapid prototyping is the critical engineering phase that breathes life into your design, allowing you to test form, fit, and function, gather essential user feedback, and uncover design flaws before committing to the significant expense of mass production tooling. It’s about making informed decisions quickly and iterating your way to a market-ready product.
                  </p>
                  <p>
                    At Illuminious, we have engineered our prototyping services for one purpose: to provide our clients with a definitive competitive edge through speed and uncompromising quality. By strategically leveraging our state-of-the-art factories in Shenzhen and Batam, we offer a blended manufacturing approach managed by our US-based engineering and project management team. This unique structure ensures crystal-clear communication, rigorous adherence to your specifications, and the ability to deliver high-quality, functional prototypes on timelines that traditional manufacturers simply cannot match.
                  </p>
                   <p>
                    Our philosophy of "speed without compromise" means we never sacrifice quality for turnaround time. Your prototypes are built in a real production environment, subject to stringent quality control processes. This ensures that the prototype you receive is not just a model, but a true representation of your final product's functionality and manufacturability. This process provides invaluable data for Design for Manufacturing (DFM) and Design for Assembly (DFA), de-risking your future production runs and ensuring a smoother path to scale.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-engineer-holding-prototype.jpg" alt="Engineer holding and inspecting a complex product prototype" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Technologies Section */}
        <section id="technologies" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Comprehensive Prototyping Technologies</h2>
              <p className="text-lg text-gray-600">
                We provide a complete suite of in-house and partner capabilities to build any part of your product. Our expert engineers will help you select the right technology and material for your specific application, ensuring your prototype meets its functional and aesthetic goals.
              </p>
            </AnimatedSection>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {technologies.map((tech, index) => (
                <AnimatedSection key={tech.title} delay={index * 0.05}>
                  <div className="bg-white p-6 rounded-lg shadow-md text-left h-full flex flex-col">
                    <div className="w-12 h-12 rounded-full bg-illuminious-blue/10 flex items-center justify-center mb-4 flex-shrink-0">
                      <tech.icon className="w-6 h-6 text-illuminious-blue" />
                    </div>
                    <div>
                        <h3 className="font-bold text-lg text-illuminious-navy mb-2 font-heading">{tech.title}</h3>
                        <p className="text-sm text-gray-600">{tech.text}</p>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Transparent & Streamlined Process</h2>
              <p className="text-lg text-gray-600">
                Our six-step process is designed for maximum clarity, speed, and accountability. A US-based project manager is your single point of contact from start to finish.
              </p>
            </AnimatedSection>
            <div className="max-w-5xl mx-auto">
              <div className="relative">
                <div className="absolute left-12 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200" />
                {processSteps.map((step, index) => (
                  <div key={step.name} className="relative mb-12">
                     <div className="flex items-start md:items-center md:even:flex-row-reverse">
                        <div className="hidden md:block w-1/2 px-8">
                            <AnimatedSection delay={index * 0.1}>
                                <h3 className={`text-xl font-bold mb-2 font-heading ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>{step.name}</h3>
                                <p className={`text-gray-600 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>{step.description}</p>
                            </AnimatedSection>
                        </div>
                        <div className="block md:hidden w-full pl-24">
                             <AnimatedSection delay={index * 0.1}>
                                <h3 className="text-xl font-bold mb-2 font-heading">{step.name}</h3>
                                <p className="text-gray-600">{step.description}</p>
                            </AnimatedSection>
                        </div>
                        <div className="absolute left-12 md:left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-illuminious-blue text-white flex items-center justify-center font-bold text-lg z-10">
                            {index + 1}
                        </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Specifications Section */}
        <section id="specifications" className="py-20 bg-gray-50">
            <div className="container">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Technical Specifications</h2>
                    <p className="text-lg text-gray-600">
                        We operate with precision. Below are some of our core manufacturing capabilities and tolerances. Contact us if you have requirements beyond what is listed.
                    </p>
                </AnimatedSection>
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {specifications.map((spec, index) => (
                        <AnimatedSection key={spec.category} delay={index * 0.1}>
                            <div className="bg-white p-6 rounded-lg shadow-md h-full">
                                <h3 className="font-bold text-xl text-illuminious-navy mb-4 font-heading border-b pb-2">{spec.category}</h3>
                                <ul className="space-y-2 text-gray-600 text-sm">
                                    {spec.items.map(item => (
                                        <li key={item} className="flex items-start">
                                            <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </AnimatedSection>
                    ))}
                </div>
            </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-white">
            <div className="container max-w-4xl mx-auto">
                <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Frequently Asked Questions</h2>
                    <p className="text-lg text-gray-600">
                        Answers to common questions about our rapid prototyping services.
                    </p>
                </AnimatedSection>
                <AnimatedSection>
                    <Accordion type="single" collapsible className="w-full">
                        {faqs.map((faq, index) => (
                            <AccordionItem value={`item-${index + 1}`} key={index}>
                                <AccordionTrigger className="text-left font-bold text-lg">{faq.q}</AccordionTrigger>
                                <AccordionContent className="text-base text-gray-700 leading-relaxed">
                                    {faq.a}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </AnimatedSection>
            </div>
        </section>

        {/* CTA Section */}
        <section id="cta" className="py-20 bg-illuminious-navy">
          <div className="container text-center">
            <AnimatedSection>
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready to Build Your Prototype?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Get a detailed quote and DFM feedback from our engineering team within 24 hours. Let's work together to turn your innovative idea into a physical reality.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8 py-6 text-lg">
                <Link href="/contact">
                  Get a Prototyping Quote
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
