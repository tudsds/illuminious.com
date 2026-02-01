import { Package } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function EMS() {
  return (
    <ServicePageTemplate
      title="Electronics Manufacturing Services (EMS)"
      subtitle="Complete Electronics Assembly"
      description="From PCB assembly to final product integration, our EMS capabilities deliver high-quality electronics manufacturing with precision and reliability."
      heroImage="/images/service-ems.jpg"
      icon={Package}
      seoKeywords="EMS, electronics manufacturing services, PCB assembly, SMT assembly, electronics assembly, box build"
      features={[
        {
          title: "SMT Assembly",
          description: "High-speed surface mount technology assembly with advanced pick-and-place equipment.",
        },
        {
          title: "Through-Hole Assembly",
          description: "Precision through-hole component insertion and wave soldering capabilities.",
        },
        {
          title: "Mixed Technology",
          description: "Combined SMT and through-hole assembly for complex board designs.",
        },
        {
          title: "Box Build Assembly",
          description: "Complete system integration including enclosures, wiring, and final assembly.",
        },
        {
          title: "Testing & Inspection",
          description: "Comprehensive testing including ICT, functional testing, and AOI inspection.",
        },
        {
          title: "Conformal Coating",
          description: "Protective coatings for electronics operating in harsh environments.",
        },
      ]}
      benefits={[
        "State-of-the-art SMT production lines",
        "Flexible batch sizes from prototype to mass production",
        "Comprehensive quality control and testing",
        "Quick turnaround for urgent projects",
        "Component sourcing and supply chain management",
        "ISO 9001 and IPC certified processes",
      ]}
      process={[
        {
          step: "1",
          title: "Design Review",
          description: "Review PCB design files, BOM, and assembly requirements for manufacturability.",
        },
        {
          step: "2",
          title: "Component Sourcing",
          description: "Procure all components from authorized distributors with full traceability.",
        },
        {
          step: "3",
          title: "Assembly",
          description: "Precise PCB assembly using automated SMT and through-hole processes.",
        },
        {
          step: "4",
          title: "Testing & QC",
          description: "Rigorous testing and inspection to ensure quality and functionality.",
        },
        {
          step: "5",
          title: "Packaging & Shipping",
          description: "ESD-safe packaging and worldwide shipping to your destination.",
        },
      ]}
      faqs={[
        {
          question: "What file formats do you accept for PCB assembly?",
          answer: "We accept Gerber files, ODB++, and native CAD files from major EDA tools. We also need BOM in Excel format and assembly drawings.",
        },
        {
          question: "Do you provide component sourcing?",
          answer: "Yes, we offer full turnkey service including component sourcing from authorized distributors, or you can provide your own components (consignment).",
        },
        {
          question: "What is your smallest component capability?",
          answer: "Our SMT lines can handle components as small as 01005 (0.4mm x 0.2mm) and fine-pitch BGAs down to 0.3mm pitch.",
        },
        {
          question: "What testing options are available?",
          answer: "We offer AOI, X-ray inspection, ICT, flying probe testing, functional testing, and custom test development based on your requirements.",
        },
      ]}
    />
  );
}
