import { Wrench } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Prototyping() {
  return (
    <ServicePageTemplate
      title="Rapid Prototyping"
      subtitle="Validate Your Designs Quickly"
      description="Quickly validate your product designs with our rapid prototyping services before committing to mass production tooling and manufacturing."
      heroImage="/images/service-prototyping.jpg"
      icon={Wrench}
      seoKeywords="rapid prototyping, 3D printing, CNC machining, prototype manufacturing, product validation"
      features={[
        {
          title: "3D Printing",
          description: "Multiple 3D printing technologies including SLA, SLS, and FDM for various materials and finishes.",
        },
        {
          title: "CNC Machining",
          description: "Precision CNC machining for metal and plastic parts with tight tolerances.",
        },
        {
          title: "Vacuum Casting",
          description: "Silicone mold casting for small batch production-like prototypes.",
        },
        {
          title: "Sheet Metal Prototypes",
          description: "Rapid sheet metal fabrication for enclosures and structural components.",
        },
        {
          title: "Functional Prototypes",
          description: "Fully functional prototypes with electronics integration for testing.",
        },
        {
          title: "Design Iteration",
          description: "Quick turnaround for design iterations to accelerate development.",
        },
      ]}
      benefits={[
        "Validate designs before expensive tooling investment",
        "Fast turnaround times as quick as 24-48 hours",
        "Multiple material and finish options",
        "Functional testing and user feedback",
        "Reduce development risks and costs",
        "Seamless transition to mass production",
      ]}
      process={[
        {
          step: "1",
          title: "Design Submission",
          description: "Submit your 3D CAD files and specify material and finish requirements.",
        },
        {
          step: "2",
          title: "DFM Review",
          description: "Quick review for manufacturability with recommendations if needed.",
        },
        {
          step: "3",
          title: "Prototype Production",
          description: "Rapid manufacturing using the most suitable prototyping technology.",
        },
        {
          step: "4",
          title: "Finishing & Assembly",
          description: "Post-processing, finishing, and assembly as required.",
        },
        {
          step: "5",
          title: "Delivery",
          description: "Fast shipping with tracking to your location worldwide.",
        },
      ]}
      faqs={[
        {
          question: "How fast can you produce prototypes?",
          answer: "Depending on complexity and technology, we can deliver prototypes in as little as 24-48 hours for simple parts, or 5-7 days for complex assemblies.",
        },
        {
          question: "What materials are available for prototyping?",
          answer: "We offer a wide range including various plastics (ABS, PC, Nylon, etc.), metals (aluminum, steel, brass), and specialty materials like silicone and rubber.",
        },
        {
          question: "Can prototypes be used for functional testing?",
          answer: "Yes, we can produce functional prototypes suitable for mechanical testing, user testing, and even limited field trials depending on requirements.",
        },
        {
          question: "How do I transition from prototype to mass production?",
          answer: "Our team helps you seamlessly transition from prototyping to production tooling and manufacturing, leveraging insights from the prototyping phase.",
        },
      ]}
    />
  );
}
