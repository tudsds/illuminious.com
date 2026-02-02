import { Zap } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function RapidPrototyping() {
  return (
    <ServicePageTemplate
      title="Rapid Prototyping"
      subtitle="From Idea to Prototype in 72 Hours"
      description="Accelerate your product development with our rapid prototyping services. Get functional prototypes in days, not weeks, to validate designs and iterate quickly."
      heroImage="/images/service-rapid-prototyping.jpg"
      icon={Zap}
      seoKeywords="rapid prototyping, fast prototyping, 3D printing, CNC machining, prototype manufacturing, quick turn prototypes"
      features={[
        {
          title: "72-Hour Turnaround",
          description: "Get functional prototypes in just 3 days. Our streamlined process and local supply chain access make it possible.",
        },
        {
          title: "3D Printing",
          description: "Multiple 3D printing technologies including SLA, SLS, and FDM for various material and finish requirements.",
        },
        {
          title: "CNC Machining",
          description: "Precision CNC machining for metal and plastic parts with tight tolerances and production-quality finishes.",
        },
        {
          title: "PCB Prototyping",
          description: "Quick-turn PCB fabrication and assembly for electronic prototypes, from simple to complex designs.",
        },
        {
          title: "Injection Molding",
          description: "Rapid tooling and low-volume injection molding for production-representative plastic parts.",
        },
        {
          title: "Functional Testing",
          description: "Comprehensive testing services to validate prototype performance and identify design improvements.",
        },
      ]}
      benefits={[
        "Validate designs before committing to production tooling",
        "Iterate quickly based on real-world testing feedback",
        "Reduce time-to-market with faster development cycles",
        "Test multiple design variations simultaneously",
        "Get investor-ready prototypes for funding rounds",
        "Bridge the gap between design and manufacturing",
      ]}
      process={[
        {
          step: "1",
          title: "Design Review",
          description: "Submit your CAD files and we'll review for manufacturability within 24 hours.",
        },
        {
          step: "2",
          title: "Quote & Timeline",
          description: "Receive detailed quote with timeline options from 72 hours to 2 weeks.",
        },
        {
          step: "3",
          title: "Production",
          description: "We manufacture your prototype using the optimal technology for your requirements.",
        },
        {
          step: "4",
          title: "Quality Check",
          description: "Every prototype undergoes inspection before shipping to ensure accuracy.",
        },
        {
          step: "5",
          title: "Delivery",
          description: "Fast shipping options available worldwide with tracking and insurance.",
        },
      ]}
      faqs={[
        {
          question: "What file formats do you accept?",
          answer: "We accept STEP, IGES, STL, OBJ, and most major CAD formats. For PCBs, we accept Gerber files and common EDA formats.",
        },
        {
          question: "What's the minimum order quantity?",
          answer: "We have no minimum order quantity. You can order a single prototype or multiple units for testing and validation.",
        },
        {
          question: "Can you match production materials?",
          answer: "Yes, we offer production-grade materials for prototyping so you can test with the same materials used in final production.",
        },
        {
          question: "Do you offer design assistance?",
          answer: "Absolutely. Our engineering team can help optimize your design for manufacturability and suggest improvements.",
        },
      ]}
    />
  );
}
