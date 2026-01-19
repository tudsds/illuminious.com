import { Truck } from "lucide-react";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export default function Logistics() {
  return (
    <ServicePageTemplate
      title="Logistics & Overseas Warehouse"
      subtitle="Global Supply Chain Solutions"
      description="Streamline your supply chain with our comprehensive logistics network and US-based fulfillment center for faster delivery to your customers."
      heroImage="/images/about-overseas-warehouse.png"
      icon={Truck}
      seoKeywords="logistics, overseas warehouse, fulfillment, supply chain, inventory management, global shipping"
      features={[
        {
          title: "US Warehouse",
          description: "Strategic US-based warehouse for fast domestic delivery and reduced shipping costs.",
        },
        {
          title: "Inventory Management",
          description: "Real-time inventory tracking and automated reorder point management.",
        },
        {
          title: "Order Fulfillment",
          description: "Pick, pack, and ship services with same-day processing for in-stock items.",
        },
        {
          title: "Customs Clearance",
          description: "Expert handling of import/export documentation and customs procedures.",
        },
        {
          title: "Last-Mile Delivery",
          description: "Integration with major carriers for reliable last-mile delivery options.",
        },
        {
          title: "Returns Management",
          description: "Efficient returns processing and inventory reconciliation.",
        },
      ]}
      benefits={[
        "Reduce shipping times to US customers significantly",
        "Lower shipping costs through bulk import and local delivery",
        "Real-time visibility into inventory levels",
        "Flexible fulfillment options (B2B and D2C)",
        "Simplified customs and import processes",
        "Scalable capacity to match your growth",
      ]}
      process={[
        {
          step: "1",
          title: "Setup & Integration",
          description: "Integrate your systems with our warehouse management platform.",
        },
        {
          step: "2",
          title: "Inventory Receipt",
          description: "Receive and process your inventory at our US warehouse.",
        },
        {
          step: "3",
          title: "Storage & Management",
          description: "Secure storage with real-time inventory tracking and reporting.",
        },
        {
          step: "4",
          title: "Order Processing",
          description: "Automated order processing with same-day pick and pack.",
        },
        {
          step: "5",
          title: "Shipping & Tracking",
          description: "Fast shipping with full tracking visibility for you and your customers.",
        },
      ]}
      faqs={[
        {
          question: "Where is your US warehouse located?",
          answer: "Our primary US fulfillment center is strategically located to provide optimal coverage for domestic shipping across the continental United States.",
        },
        {
          question: "Can you handle both B2B and D2C fulfillment?",
          answer: "Yes, we support both business-to-business (wholesale/retail) and direct-to-consumer fulfillment with appropriate packaging and shipping options.",
        },
        {
          question: "How do I track my inventory?",
          answer: "Our warehouse management system provides real-time inventory visibility through a web portal, with automated alerts for low stock levels.",
        },
        {
          question: "What carriers do you work with?",
          answer: "We partner with major carriers including UPS, FedEx, USPS, and DHL, selecting the best option based on your delivery requirements and budget.",
        },
      ]}
    />
  );
}
