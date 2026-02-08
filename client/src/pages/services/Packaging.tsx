import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { ArrowRight, CheckCircle, Gift, Layers, Palette, Printer, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import Breadcrumb from "@/components/Breadcrumb";

const pageSections = [
  {
    id: "overview",
    title: "The First Impression",
  },
  {
    id: "capabilities",
    title: "Our Packaging Capabilities",
  },
  {
    id: "process",
    title: "Our Design Process",
  },
  {
    id: "why-us",
    title: "The Illuminious Advantage",
  },
  {
    id: "cta",
    title: "Design Your Packaging",
  },
];

const capabilities = [
  { icon: Palette, title: "Structural & Graphic Design", text: "Our in-house design team creates visually stunning and structurally sound packaging that protects your product and tells your brand story." },
  { icon: Layers, title: "Material Sourcing & Selection", text: "We source a wide range of materials, from standard paperboard to premium rigid boxes and sustainable options, to match your brand and budget." },
  { icon: Printer, title: "Printing & Finishing", text: "High-quality offset and digital printing with a full suite of finishing options, including laminations, foils, embossing, and UV coatings." },
  { icon: Gift, title: "Custom Inserts & Unboxing", text: "We design custom foam, pulp, or paperboard inserts and engineer a memorable unboxing experience for your customers." },
  { icon: ShieldCheck, title: "Prototyping & Testing", text: "We create physical prototypes and conduct rigorous drop, vibration, and environmental testing to ensure your product arrives safely." },
  { icon: CheckCircle, title: "Kitting & Final Assembly", text: "As part of our EMS services, we can kit your product with all accessories and manuals, and perform final packaging on the assembly line." },
];

const processSteps = [
  { name: "1. Discovery & Strategy", description: "We start by understanding your brand, product, target customer, and distribution channels to define the packaging requirements." },
  { name: "2. Structural & Graphic Design", description: "Our designers develop multiple concepts for the packaging structure and visual identity, which we refine based on your feedback." },
  { name: "3. Prototyping & Validation", description: "We produce a physical, production-quality prototype for your approval and conduct all necessary transit and reliability testing." },
  { name: "4. Mass Production", description: "Once the design is finalized, we manage the entire production process, including printing, die-cutting, assembly, and quality control." },
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

export default function ServicePackaging() {
  return (
    <>
      <SEO
        title="Custom Product Packaging Design & Manufacturing | Illuminious"
        description="Complete product packaging solutions, from structural design and graphic design to manufacturing and kitting. Create a memorable unboxing experience."
        keywords="custom packaging, product packaging, packaging design, retail packaging, rigid boxes, unboxing experience"
        url="/services/packaging"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-48 pb-32 bg-illuminious-navy text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/images/placeholder-final-product-assembly.jpg"
            alt="A lineup of beautifully designed custom product boxes"
            className="w-full h-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-illuminious-navy via-illuminious-navy/80 to-transparent" />
        </div>
        <div className="container relative z-10">
          <Breadcrumb items={[
              { label: "Home", href: "/" },
              { label: "Services", href: "/services" },
              { label: "Custom Product Packaging" },
            ]} />
          <div className="max-w-3xl mt-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mt-2 mb-6 font-heading">
                Custom Product Packaging
              </h1>
              <p className="text-xl md:text-2xl text-white/80 leading-relaxed">
                The first physical interaction a customer has with your product. We design and manufacture packaging that protects, delights, and builds your brand.
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
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">Packaging is Part of the Product</h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    In an increasingly crowded market, the unboxing experience has become a powerful marketing tool. Your product\'s packaging is more than just a container; it\'s the first tangible expression of your brand\'s promise, quality, and attention to detail. It must protect the product during shipping, communicate key features on a retail shelf, and create a memorable moment for the end user.
                  </p>
                  <p>
                    At Illuminious, we treat packaging as an integral part of the product development process. Our dedicated packaging division works alongside our product engineers to create solutions that are both beautiful and functional. By integrating packaging design and manufacturing into our core EMS offerings, we provide a single, streamlined solution that saves you time, reduces cost, and ensures your product makes an unforgettable first impression.
                  </p>
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <div className="rounded-xl overflow-hidden shadow-2xl">
                  <img src="/images/placeholder-final-product-assembly.jpg" alt="A person unboxing a beautifully packaged product" />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </section>

        {/* Capabilities Section */}
        <section id="capabilities" className="py-20 bg-gray-50">
          <div className="container">
            <AnimatedSection className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Packaging Capabilities</h2>
              <p className="text-lg text-gray-600">
                A full-service approach to creating packaging that elevates your brand and protects your product.
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
              <h2 className="text-3xl font-bold text-illuminious-navy mb-4 font-heading">Our Packaging Design Process</h2>
              <p className="text-lg text-gray-600">
                A collaborative, four-stage process to take your packaging from concept to production.
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
                  <img src="/images/placeholder-final-product-assembly.jpg" alt="Various packaging prototypes and material samples on a designer's desk" />
                </div>
              </AnimatedSection>
              <AnimatedSection delay={0.1}>
                <h2 className="text-3xl font-bold text-illuminious-navy mb-6 font-heading">The Illuminious Advantage</h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Integrated with Manufacturing</h4>
                      <p>Because we also manufacture your product, we can design packaging that fits perfectly and perform final kitting and assembly on the same production line, saving time and cost.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Design for Logistics</h4>
                      <p>Our designs consider not just aesthetics but also dimensional weight, palletization, and durability to minimize your shipping costs and prevent damage.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle className="w-8 h-8 text-illuminious-blue flex-shrink-0 mt-1" />
                    <div>
                      <h4 className="font-bold">Sustainable Sourcing</h4>
                      <p>We are committed to sustainability and can source a wide variety of recycled, FSC-certified, and biodegradable materials for your packaging.</p>
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
              <h2 className="text-3xl font-bold text-white mb-4 font-heading">Create an Unforgettable Unboxing</h2>
              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Your packaging is your silent salesperson. Let our experts design and produce packaging that reflects the quality of your product and the vision of your brand. Contact us for a free packaging consultation.
              </p>
              <Button asChild size="lg" className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-8">
                <Link href="/contact">
                  Start Your Packaging Project
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
