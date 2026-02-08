import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Factory, Layers, Palette, ShieldCheck, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "Precision Molding Partner",
  },
  {
    id: "capabilities",
    title: "Our Molding Capabilities",
  },
  {
    id: "process",
    title: "Our Tooling Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Get a Molding Quote",
  },
];

const capabilities = [
  { icon: Wrench, title: "In-House Tool & Mold Making", text: "We design and fabricate high-precision, multi-cavity steel molds in-house for faster turnaround and tighter quality control." },
  { icon: Factory, title: "High-Precision Injection Molding", text: "State-of-the-art, all-electric injection molding machines (50T to 1000T) for consistent, high-quality part production." },
  { icon: Layers, title: "Overmolding & Insert Molding", text: "Complex multi-material molding processes to create integrated parts with soft-touch grips, seals, and encapsulated electronics." },
  { icon: Palette, title: "Material & Finishing Expertise", text: "A vast library of commodity and engineering-grade resins, plus secondary operations like painting, printing, and plating." },
  { icon: ShieldCheck, title: "Scientific Molding & Quality", text: "We use scientific molding principles and in-line quality control to ensure dimensional accuracy and part-to-part consistency." },
  { icon: CheckCircle, title: "Mold Maintenance & Lifecycle", text: "Proactive mold maintenance programs to maximize the life of your tooling and ensure consistent performance over millions of cycles." },
];

const processSteps = [
  { name: "1. DFM & Mold Flow Analysis", description: "Our engineers analyze your part design for manufacturability and simulate the injection process to optimize gate location, cooling, and cycle time." },
  { name: "2. Mold Design & Fabrication", description: "We create a detailed 3D mold design and then use high-speed CNC and EDM machines to fabricate the core, cavity, and mold base." },
  { name: "3. T1 Sampling & Validation", description: "We conduct the first molding trial (T1) and provide you with samples and a full dimensional inspection report for approval." },
  { name: "4. Process Optimization & Texturing", description: "After sample approval, we fine-tune the molding process parameters and apply the final surface texture to the mold." },
  { name: "5. Mass Production", description: "We launch full-scale production with automated part handling and continuous quality monitoring." },
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

export default function ServiceMolding() {
  return (
    <>
      <SEO
        title="Injection Molding & Tooling Services | Illuminious"
        description="High-precision plastic injection molding and in-house tooling services. We provide DFM, mold design, fabrication, and mass production for custom plastic parts."
        keywords="injection molding, plastic molding, tooling services, mold making, custom plastic parts, overmolding"
        url="/services/molding"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/DEPLOYED_backup-injection-color-match-48.jpg"
            alt="A large injection molding machine in a clean factory environment"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Tooling & Injection Molding" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Tooling & Injection Molding
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                Precision-engineered molds and high-quality plastic parts, manufactured at scale. We are your vertically integrated molding partner.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Foundation of Your Product</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    The plastic enclosure is the face of your product. It defines the user experience, protects the internal electronics, and communicates your brand\`s quality. Achieving a perfect enclosure requires mastery over two distinct but interconnected disciplines: tooling (mold making) and injection molding.
                  </p>
                  <p>
                    At Illuminious, we have built our reputation on being a world-class molding partner. Unlike companies that outsource tooling, we design and fabricate our molds in-house. This vertical integration gives us unparalleled control over quality, speed, and cost. Our team of expert toolmakers and process engineers work together to create robust molds and a scientific molding process that delivers perfect parts, every time, from the first shot to the millionth.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-injection-mold-polish-58.jpg" alt="A robotic arm removing a freshly molded plastic part from an injection molding machine" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Molding Capabilities</h2>
              <p className="text-lg text-gray-600">
                From mold design to mass production, a complete suite of services for your custom plastic components.
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
                    <p className="text-sm text-gray-600">{cap.text}</p>
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Tooling & Molding Process</h2>
              <p className="text-lg text-gray-600">
                A five-stage process that ensures your tooling is built right and your parts are produced to spec.
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
                          <p className={`text-gray-600 ${index % 2 === 0 ? "text-right" : "text-left"}`}>{step.description}</p>
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
        <section id="why-us" className="py-20 bg-gray-50">
          <div className="container">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <AnimatedSection>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/DEPLOYED_backup-injection-mold-tooling-16.jpg" alt="An engineer inspecting a large, complex injection mold" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">In-House Tooling</h4>
                      <p>We are not a middleman. We build and maintain your molds in our own tool shop, leading to faster revisions, better quality, and lower costs.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Engineering-Driven Process</h4>
                      <p>Our process is led by engineers, not just machine operators. We use data and simulation to optimize every aspect of mold design and production.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Lifetime Mold Guarantee</h4>
                      <p>We stand behind our production molds. We guarantee the life of your mold for a specified number of cycles and provide free maintenance and repair for its entire lifespan.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Ready for Production-Grade Parts?</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Whether you have a complete 3D model or just an idea, our team can help you design and manufacture the perfect plastic components for your product. Contact us for a free DFM review and quote.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Request a Molding Quote
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
