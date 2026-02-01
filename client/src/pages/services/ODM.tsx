import { Cpu } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function ODM() {
  return (
    <ServicePageTemplate
      title="Original Design Manufacturing (ODM)"
      subtitle="From Concept to Completion"
      description="Let our experienced design and engineering team develop your product from concept to finished goods, ready to sell under your brand."
      heroImage="/images/service-odm.jpg"
      icon={Cpu}
      seoKeywords="ODM manufacturing, original design manufacturing, product development, turnkey manufacturing, white label products"
      features={[
        {
          title: "Product Development",
          description: "Full product development from initial concept through engineering, prototyping, and production.",
        },
        {
          title: "Industrial Design",
          description: "Create compelling product aesthetics that resonate with your target market.",
        },
        {
          title: "Engineering Excellence",
          description: "Experienced engineers handle mechanical, electrical, and firmware development.",
        },
        {
          title: "Custom Modifications",
          description: "Adapt existing designs or create entirely new products to meet your specific requirements.",
        },
        {
          title: "IP Protection",
          description: "Robust intellectual property protection measures to safeguard your product innovations.",
        },
        {
          title: "Turnkey Solutions",
          description: "Complete end-to-end service from design through manufacturing and delivery.",
        },
      ]}
      benefits={[
        "Reduce development time and costs significantly",
        "Access experienced product development expertise",
        "Bring products to market faster than competitors",
        "Maintain brand ownership and control",
        "Leverage proven designs with custom modifications",
        "Single point of contact for entire product lifecycle",
      ]}
      process={[
        {
          step: "1",
          title: "Concept Development",
          description: "Define product requirements, target market, and key features together.",
        },
        {
          step: "2",
          title: "Design & Engineering",
          description: "Our team creates industrial design, mechanical, and electrical engineering.",
        },
        {
          step: "3",
          title: "Prototyping",
          description: "Build and test functional prototypes to validate design and performance.",
        },
        {
          step: "4",
          title: "Tooling & Production",
          description: "Create production tooling and begin manufacturing at scale.",
        },
        {
          step: "5",
          title: "Brand & Delivery",
          description: "Apply your branding and deliver finished products worldwide.",
        },
      ]}
      faqs={[
        {
          question: "What's the difference between OEM and ODM?",
          answer: "With OEM, you provide the design and we manufacture. With ODM, we handle both design and manufacturing, delivering a complete product ready for your brand.",
        },
        {
          question: "Who owns the intellectual property?",
          answer: "IP ownership can be structured based on your needs. We offer options from full IP transfer to licensing arrangements, all clearly defined in our agreements.",
        },
        {
          question: "Can I customize an existing ODM product?",
          answer: "Absolutely. We can modify existing designs to meet your specific requirements, from minor cosmetic changes to significant functional enhancements.",
        },
        {
          question: "How long does ODM product development take?",
          answer: "Timeline varies by product complexity. Simple products may take 3-4 months, while complex electronics can take 6-12 months from concept to production.",
        },
      ]}
    />
  );
}
