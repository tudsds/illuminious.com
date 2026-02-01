import { Factory } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function OEM() {
  return (
    <ServicePageTemplate
      title="Original Equipment Manufacturing (OEM)"
      subtitle="Your Design, Our Production"
      description="Leverage our world-class manufacturing facilities to produce your products exactly to your specifications, under your brand name."
      heroImage="/images/service-oem.jpg"
      icon={Factory}
      seoKeywords="OEM manufacturing, original equipment manufacturing, contract manufacturing, private label manufacturing"
      features={[
        {
          title: "Precision Manufacturing",
          description: "State-of-the-art equipment and processes ensure your products are manufactured to exact specifications.",
        },
        {
          title: "Quality Assurance",
          description: "Rigorous quality control at every stage of production to maintain consistent product quality.",
        },
        {
          title: "Scalable Production",
          description: "Flexible capacity to handle orders from small batches to high-volume production runs.",
        },
        {
          title: "Brand Packaging",
          description: "Custom packaging solutions that reflect your brand identity and meet retail requirements.",
        },
        {
          title: "Supply Chain Management",
          description: "End-to-end supply chain coordination including component sourcing and logistics.",
        },
        {
          title: "Regulatory Compliance",
          description: "Ensure products meet all relevant industry standards and regulatory requirements.",
        },
      ]}
      benefits={[
        "Focus on your core business while we handle manufacturing",
        "Access to tier-1 manufacturing facilities",
        "Competitive pricing through economies of scale",
        "Flexible production volumes to match demand",
        "Maintain full control over your product design",
        "Dedicated project management and support",
      ]}
      process={[
        {
          step: "1",
          title: "Specification Review",
          description: "We review your product specifications, drawings, and requirements in detail.",
        },
        {
          step: "2",
          title: "Quotation & Planning",
          description: "Receive detailed pricing and production timeline based on your requirements.",
        },
        {
          step: "3",
          title: "Sample Production",
          description: "Produce initial samples for your approval before mass production begins.",
        },
        {
          step: "4",
          title: "Mass Production",
          description: "Full-scale production with continuous quality monitoring and reporting.",
        },
        {
          step: "5",
          title: "Delivery",
          description: "Finished products shipped to your specified destination worldwide.",
        },
      ]}
      faqs={[
        {
          question: "What is the minimum order quantity (MOQ)?",
          answer: "MOQ varies by product complexity and components. We work with clients to find solutions that meet their needs, including lower MOQs for initial orders.",
        },
        {
          question: "How do you ensure product quality?",
          answer: "We implement comprehensive quality control including incoming material inspection, in-process checks, and final product testing. All facilities are ISO certified.",
        },
        {
          question: "Can you source components for my product?",
          answer: "Yes, we provide full supply chain management including component sourcing from trusted suppliers, ensuring quality and competitive pricing.",
        },
        {
          question: "What industries do you serve?",
          answer: "We serve various industries including consumer electronics, IoT devices, AI hardware, medical devices, automotive electronics, and more.",
        },
      ]}
    />
  );
}
