import { Lightbulb } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function DFM() {
  return (
    <ServicePageTemplate
      title="Design for Manufacturing (DFM)"
      subtitle="Optimize Your Product Design"
      description="Our DFM services help you optimize your product design for efficient manufacturing, reducing costs, improving quality, and accelerating time-to-market."
      heroImage="/images/service-dfm-design.jpg"
      icon={Lightbulb}
      seoKeywords="DFM, design for manufacturing, product design optimization, manufacturing efficiency, cost reduction"
      features={[
        {
          title: "Design Analysis",
          description: "Comprehensive review of your product design to identify potential manufacturing challenges and optimization opportunities.",
        },
        {
          title: "Cost Optimization",
          description: "Strategic recommendations to reduce manufacturing costs without compromising product quality or functionality.",
        },
        {
          title: "Material Selection",
          description: "Expert guidance on choosing the right materials that balance performance, cost, and manufacturability.",
        },
        {
          title: "Tolerance Analysis",
          description: "Detailed analysis of dimensional tolerances to ensure consistent quality in mass production.",
        },
        {
          title: "Assembly Optimization",
          description: "Streamline assembly processes to reduce labor costs and improve production efficiency.",
        },
        {
          title: "Risk Mitigation",
          description: "Identify and address potential manufacturing risks before they become costly problems.",
        },
      ]}
      benefits={[
        "Reduce manufacturing costs by up to 30%",
        "Accelerate time-to-market with optimized designs",
        "Improve product quality and consistency",
        "Minimize production risks and delays",
        "Expert guidance from experienced engineers",
        "Seamless integration with our manufacturing services",
      ]}
      process={[
        {
          step: "1",
          title: "Design Review",
          description: "Our engineers conduct a thorough review of your product design, CAD files, and specifications.",
        },
        {
          step: "2",
          title: "Analysis & Recommendations",
          description: "We provide detailed DFM analysis with specific recommendations for design improvements.",
        },
        {
          step: "3",
          title: "Collaboration",
          description: "Work closely with your team to implement changes while maintaining design intent.",
        },
        {
          step: "4",
          title: "Validation",
          description: "Verify optimized designs through prototyping and testing before mass production.",
        },
      ]}
      faqs={[
        {
          question: "What is Design for Manufacturing (DFM)?",
          answer: "DFM is the practice of designing products in a way that makes them easy and cost-effective to manufacture. It involves analyzing design choices and their impact on production processes, costs, and quality.",
        },
        {
          question: "When should I engage DFM services?",
          answer: "Ideally, DFM should be considered early in the product development process. However, we can provide valuable insights at any stage, even for products already in production.",
        },
        {
          question: "How much can DFM save on manufacturing costs?",
          answer: "Depending on the product and current design, DFM optimization can typically reduce manufacturing costs by 15-30% while also improving quality and reducing time-to-market.",
        },
        {
          question: "Do you work with existing designs or only new products?",
          answer: "We work with both. Whether you're developing a new product or looking to optimize an existing one, our DFM services can provide significant value.",
        },
      ]}
    />
  );
}
