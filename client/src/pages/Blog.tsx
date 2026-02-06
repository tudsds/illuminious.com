import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock, User, Tag, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useState } from "react";

// Export blog posts for use in BlogDetail
export const blogPosts = [
  {
    id: 1,
    slug: "sustainable-manufacturing-2026",
    title: "Sustainable Manufacturing: Building Eco-Friendly Electronics in 2026",
    excerpt: "Discover how leading electronics manufacturers are reducing environmental impact through green materials, energy-efficient processes, and circular economy principles without compromising quality.",
    content: `
      <div class="lead-text">
        <p>Sustainability is no longer just a marketing buzzword—it's becoming a <strong>business imperative</strong>. Consumers, investors, and regulators are demanding that electronics manufacturers take responsibility for their environmental impact. In 2026, sustainable manufacturing practices are separating industry leaders from laggards.</p>
      </div>
      
      <h2>Why Sustainability Matters Now</h2>
      <p>Several converging factors are driving the accelerated shift toward sustainable electronics manufacturing:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🌍 Regulatory Pressure</h4>
          <p>The EU's Green Deal and similar regulations worldwide are mandating lower carbon footprints and responsible material sourcing. Non-compliance is no longer an option.</p>
        </div>
        <div class="feature-item">
          <h4>💚 Consumer Demand</h4>
          <p>Studies consistently show that <strong>73% of consumers</strong> are willing to pay more for products from sustainable brands. Eco-consciousness drives purchasing decisions.</p>
        </div>
        <div class="feature-item">
          <h4>📈 Investor Expectations</h4>
          <p>ESG (Environmental, Social, Governance) criteria are increasingly critical for funding, valuations, and access to capital markets.</p>
        </div>
        <div class="feature-item">
          <h4>💰 Cost Savings</h4>
          <p>Energy efficiency and waste reduction initiatives directly impact the bottom line, often paying for themselves within months.</p>
        </div>
      </div>
      
      <h2>Key Sustainable Manufacturing Practices</h2>
      
      <h3>1. Green Material Selection 🌱</h3>
      <p>Sustainable manufacturing begins with conscious material choices. Leading manufacturers are transitioning to:</p>
      <ul class="check-list">
        <li><strong>Lead-free solder</strong> and halogen-free PCBs to reduce toxic substances</li>
        <li><strong>Recycled plastics</strong> and bio-based materials for product enclosures</li>
        <li><strong>Conflict-free minerals</strong> with verified ethical sourcing practices</li>
        <li><strong>Reduced rare earth element dependency</strong> through design innovation</li>
      </ul>
      
      <h3>2. Energy-Efficient Production ⚡</h3>
      <p>Modern manufacturing facilities are implementing comprehensive energy optimization strategies:</p>
      <ul class="check-list">
        <li><strong>Solar and renewable energy</strong> installations to power operations</li>
        <li><strong>Smart HVAC and lighting systems</strong> with automated controls</li>
        <li><strong>Energy-efficient SMT equipment</strong> with advanced power management</li>
        <li><strong>Waste heat recovery systems</strong> to capture and reuse thermal energy</li>
      </ul>
      
      <h3>3. Waste Reduction & Circular Economy ♻️</h3>
      <p>Industry leaders are minimizing waste through innovative programs:</p>
      <ul class="check-list">
        <li><strong>Zero-waste-to-landfill initiatives</strong> achieving 99%+ diversion rates</li>
        <li><strong>Component recovery and reuse programs</strong> extending material lifecycles</li>
        <li><strong>Sustainable packaging</strong> using recyclable and biodegradable materials</li>
        <li><strong>End-of-life product take-back programs</strong> ensuring proper recycling</li>
      </ul>
      
      <h3>4. Water Conservation 💧</h3>
      <p>Electronics manufacturing can be water-intensive. Best-in-class facilities implement:</p>
      <ul class="check-list">
        <li><strong>Closed-loop water systems</strong> minimizing freshwater consumption</li>
        <li><strong>Advanced wastewater treatment</strong> ensuring clean discharge</li>
        <li><strong>Rainwater harvesting</strong> for non-critical applications</li>
        <li><strong>Elimination of harmful chemicals</strong> from cleaning and processing</li>
      </ul>
      
      <div class="highlight-box">
        <h4>📊 Measuring and Reporting Impact</h4>
        <p>You can't manage what you don't measure. Leading manufacturers rigorously track:</p>
        <ul>
          <li>Carbon footprint (Scope 1, 2, and 3 emissions)</li>
          <li>Water usage intensity and recycling rates</li>
          <li>Waste diversion from landfills</li>
          <li>Renewable energy percentage of total consumption</li>
          <li>Supply chain sustainability scores</li>
        </ul>
      </div>
      
      <h2>Choosing a Sustainable Manufacturing Partner</h2>
      <p>When evaluating manufacturing partners for their sustainability credentials, consider these key factors:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Certification</span>
          <p>Look for <strong>ISO 14001</strong> environmental management certification as a baseline requirement.</p>
        </div>
        <div class="criterion">
          <span class="badge">Transparency</span>
          <p>Request carbon footprint data, reduction targets, and regular sustainability reporting.</p>
        </div>
        <div class="criterion">
          <span class="badge">Operations</span>
          <p>Ask about renewable energy usage percentages and comprehensive waste management programs.</p>
        </div>
        <div class="criterion">
          <span class="badge">Supply Chain</span>
          <p>Verify responsible material sourcing practices and supplier sustainability requirements.</p>
        </div>
      </div>
      
      <h2>The Business Case for Sustainability</h2>
      <p>Sustainable manufacturing isn't just good for the planet—it's a competitive business advantage:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>💵 Cost Reduction</h5>
          <p>Lower energy and material costs through efficiency improvements</p>
        </div>
        <div class="benefit">
          <h5>🏆 Brand Value</h5>
          <p>Enhanced reputation and increased customer loyalty</p>
        </div>
        <div class="benefit">
          <h5>🛡️ Risk Mitigation</h5>
          <p>Regulatory compliance and future-proofing against tightening standards</p>
        </div>
        <div class="benefit">
          <h5>💳 Green Financing</h5>
          <p>Access to preferential financing rates and sustainability incentives</p>
        </div>
        <div class="benefit">
          <h5>👥 Talent Attraction</h5>
          <p>Improved employee recruitment and retention rates</p>
        </div>
        <div class="benefit">
          <h5>🌟 Market Access</h5>
          <p>Entry to eco-conscious markets and premium customer segments</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Looking Ahead</h3>
        <p>Sustainability will continue to reshape the landscape of electronics manufacturing. Companies that invest in green practices today will be significantly better positioned for tomorrow's regulatory environment and evolving consumer expectations.</p>
        <p><strong>The question is no longer whether to embrace sustainable manufacturing—but how quickly you can make the transition.</strong></p>
      </div>
    `,
    publishedAt: new Date("2026-02-06"),
    readTime: 9,
    authorName: "Illuminious Team",
    featuredImage: "/images/blog-sustainable-manufacturing.jpg",
    category: "Industry Insights",
  },
  {
    id: 2,
    slug: "choosing-right-manufacturing-partner",
    title: "How to Choose the Right Manufacturing Partner for Your Hardware Startup",
    excerpt: "Selecting the right manufacturing partner is one of the most critical decisions for hardware startups. Learn the key factors to consider including quality systems, communication, and scalability.",
    content: `
      <h2>Why Your Manufacturing Partner Matters</h2>
      <p>For hardware startups, the choice of manufacturing partner can make or break your product launch. Unlike software, hardware mistakes are expensive and time-consuming to fix. A great manufacturing partner becomes an extension of your team, helping you navigate the complexities of bringing a physical product to market.</p>
      
      <h2>Key Factors to Evaluate</h2>
      
      <h3>1. Quality Management Systems</h3>
      <p>Look for partners with established quality certifications like ISO 9001, and industry-specific certifications if applicable (ISO 13485 for medical, IATF 16949 for automotive). These certifications demonstrate a commitment to consistent quality processes.</p>
      
      <h3>2. Communication and Responsiveness</h3>
      <p>Time zone alignment and language capabilities matter. How quickly do they respond to inquiries? Do they proactively communicate issues? A partner who goes silent during critical phases can derail your timeline.</p>
      
      <h3>3. Technical Capabilities</h3>
      <p>Ensure they have the specific capabilities your product requires. This includes equipment (SMT line specifications, testing capabilities), materials expertise, and engineering support for DFM optimization.</p>
      
      <h3>4. Scalability</h3>
      <p>Can they support you from prototype through mass production? Some manufacturers excel at low-volume, high-mix work but struggle with scale. Others require minimum order quantities that don't work for early-stage companies.</p>
      
      <h2>Red Flags to Watch For</h2>
      <ul>
        <li>Reluctance to provide factory tours or references</li>
        <li>Unclear pricing structures with hidden fees</li>
        <li>No dedicated point of contact</li>
        <li>Inability to explain their quality processes</li>
      </ul>
      
      <h2>Making Your Decision</h2>
      <p>Start with a small pilot project before committing to full production. This gives you firsthand experience with their processes, communication style, and quality standards. The right partner will feel like a true collaborator invested in your success.</p>
    `,
    publishedAt: new Date("2026-01-12"),
    readTime: 8,
    authorName: "Illuminious Team",
    featuredImage: "/images/about-factory-equipment.jpg",
    category: "Startup Guide",
  },
  {
    id: 3,
    slug: "dfm-best-practices",
    title: "Design for Manufacturing: Best Practices for Electronics Products",
    excerpt: "Implementing DFM principles early in your product development can save significant time and money. Here's how to get it right from the start.",
    content: `
      <h2>What is Design for Manufacturing?</h2>
      <p>Design for Manufacturing (DFM) is the practice of designing products with manufacturing in mind from the earliest stages. For electronics, this means considering how your PCB will be assembled, how components will be sourced, and how the final product will be tested and packaged.</p>
      
      <h2>Why DFM Matters</h2>
      <p>Studies show that 70-80% of manufacturing costs are determined during the design phase. Making changes after tooling is complete or production has started is exponentially more expensive than addressing issues during design.</p>
      
      <h2>Key DFM Principles for Electronics</h2>
      
      <h3>PCB Layout Considerations</h3>
      <ul>
        <li>Use standard component sizes (0402, 0603) rather than exotic packages</li>
        <li>Maintain adequate spacing between components for automated assembly</li>
        <li>Orient components consistently for efficient pick-and-place</li>
        <li>Include fiducial marks and tooling holes</li>
      </ul>
      
      <h3>Component Selection</h3>
      <ul>
        <li>Prefer components with multiple sources to avoid supply chain risks</li>
        <li>Consider component availability and lead times</li>
        <li>Avoid obsolete or end-of-life components</li>
        <li>Standardize on component families where possible</li>
      </ul>
      
      <h3>Testing Strategy</h3>
      <ul>
        <li>Design in test points for critical signals</li>
        <li>Consider bed-of-nails testing requirements</li>
        <li>Plan for functional testing early</li>
      </ul>
      
      <h2>Working with Your Manufacturing Partner</h2>
      <p>The best DFM outcomes come from early collaboration with your manufacturing partner. Share your designs before finalizing and ask for their DFM review. Their experience with similar products can identify issues you might miss.</p>
    `,
    publishedAt: new Date("2026-01-08"),
    readTime: 10,
    authorName: "Illuminious Team",
    featuredImage: "/images/service-dfm-design.jpg",
    category: "Technical",
  },
  {
    id: 4,
    slug: "ai-hardware-trends-2026",
    title: "AI Hardware Trends to Watch in 2026",
    excerpt: "From smart glasses to companion robots, AI hardware is evolving rapidly. Explore the trends shaping the industry this year.",
    content: `
      <h2>The AI Hardware Revolution</h2>
      <p>2026 is shaping up to be a pivotal year for AI hardware. As AI models become more efficient and edge computing more powerful, we're seeing an explosion of new product categories that bring AI capabilities directly to consumers.</p>
      
      <h2>Key Trends</h2>
      
      <h3>1. AI-Powered Wearables</h3>
      <p>Smart glasses are finally hitting their stride. With improved battery life, smaller form factors, and genuinely useful AI assistants, products like Meta's Ray-Ban glasses are finding mainstream adoption. Expect more entrants in this space with specialized use cases.</p>
      
      <h3>2. Companion Robots</h3>
      <p>Home robots are evolving beyond vacuum cleaners. AI-powered companion robots that can hold conversations, assist with tasks, and provide emotional support are gaining traction. The combination of LLMs with embodied AI creates compelling new possibilities.</p>
      
      <h3>3. Edge AI Devices</h3>
      <p>Privacy concerns and latency requirements are driving AI processing to the edge. Specialized AI chips are enabling sophisticated inference on devices without cloud connectivity, opening new applications in industrial, automotive, and consumer spaces.</p>
      
      <h3>4. Health Monitoring Devices</h3>
      <p>AI is transforming health monitoring from simple data collection to intelligent insights. Wearables that can detect early signs of health issues, predict problems before they occur, and provide personalized recommendations are becoming more sophisticated.</p>
      
      <h2>Manufacturing Implications</h2>
      <p>These trends create new challenges for manufacturers: tighter tolerances for miniaturized components, specialized assembly for optical systems, and new testing requirements for AI functionality. Partners with experience in these areas will be increasingly valuable.</p>
    `,
    publishedAt: new Date("2026-01-03"),
    readTime: 6,
    authorName: "Illuminious Team",
    featuredImage: "/images/service-ai-glasses.jpg",
    category: "Industry Insights",
  },
  {
    id: 5,
    slug: "supply-chain-diversification-strategy",
    title: "Building a Resilient Global Supply Chain Strategy",
    excerpt: "Learn how leading companies are diversifying their manufacturing footprint across multiple regions while maintaining quality and efficiency.",
    content: `
      <h2>The Case for Diversification</h2>
      <p>Recent global events have highlighted the risks of concentrated supply chains. Companies are increasingly seeking to diversify their manufacturing footprint across multiple regions to build resilience against disruptions.</p>
      
      <h2>Key Considerations</h2>
      
      <h3>Regional Strengths</h3>
      <p>Different regions offer different advantages:</p>
      <ul>
        <li><strong>Southeast Asia:</strong> Competitive labor costs, growing infrastructure, favorable trade agreements</li>
        <li><strong>North America:</strong> Proximity to market, IP protection, reduced logistics complexity</li>
        <li><strong>Eastern Europe:</strong> Skilled workforce, EU market access, competitive costs</li>
      </ul>
      
      <h3>Total Cost Analysis</h3>
      <p>When evaluating locations, consider the total landed cost including:</p>
      <ul>
        <li>Manufacturing costs</li>
        <li>Logistics and shipping</li>
        <li>Duties and tariffs</li>
        <li>Inventory carrying costs</li>
        <li>Quality and rework costs</li>
      </ul>
      
      <h2>Implementation Strategies</h2>
      
      <h3>Phased Approach</h3>
      <p>Don't try to diversify everything at once. Start with products that have the highest risk or clearest cost benefit, then expand gradually as you build capabilities in new regions.</p>
      
      <h3>Partner Selection</h3>
      <p>Choose partners who can support your diversification strategy with facilities in multiple regions and the ability to maintain consistent quality across locations.</p>
      
      <h2>Looking Ahead</h2>
      <p>Supply chain diversification is no longer optional for most companies. Those who build resilient, multi-regional supply chains now will be better positioned to navigate future disruptions.</p>
    `,
    publishedAt: new Date("2025-12-28"),
    readTime: 9,
    authorName: "Illuminious Team",
    featuredImage: "/images/about-global-network.jpg",
    category: "Supply Chain",
  },
  {
    id: 6,
    slug: "iot-device-manufacturing-guide",
    title: "Complete Guide to IoT Device Manufacturing",
    excerpt: "From RF design considerations to wireless certification, everything you need to know about manufacturing connected devices.",
    content: `
      <h2>The IoT Manufacturing Challenge</h2>
      <p>Manufacturing IoT devices presents unique challenges compared to traditional electronics. Wireless connectivity, power management, and regulatory certification add layers of complexity that require specialized expertise.</p>
      
      <h2>Key Considerations</h2>
      
      <h3>RF Design and Layout</h3>
      <p>Wireless performance is heavily influenced by PCB layout. Key considerations include:</p>
      <ul>
        <li>Antenna placement and ground plane design</li>
        <li>RF shielding requirements</li>
        <li>Impedance matching for transmission lines</li>
        <li>Separation from noise sources</li>
      </ul>
      
      <h3>Power Management</h3>
      <p>Battery-powered IoT devices require careful attention to power consumption:</p>
      <ul>
        <li>Low-power component selection</li>
        <li>Sleep mode implementation</li>
        <li>Efficient power supply design</li>
        <li>Battery selection and charging circuits</li>
      </ul>
      
      <h3>Wireless Certification</h3>
      <p>IoT devices require regulatory certification before sale:</p>
      <ul>
        <li>FCC (United States)</li>
        <li>CE (European Union)</li>
        <li>IC (Canada)</li>
        <li>Additional certifications for specific wireless protocols (Bluetooth SIG, Wi-Fi Alliance)</li>
      </ul>
      
      <h2>Manufacturing Partner Requirements</h2>
      <p>When selecting a manufacturing partner for IoT devices, look for:</p>
      <ul>
        <li>Experience with RF products and testing</li>
        <li>Relationships with certification labs</li>
        <li>Ability to handle low-power assembly requirements</li>
        <li>Expertise in wireless module integration</li>
      </ul>
    `,
    publishedAt: new Date("2025-12-20"),
    readTime: 12,
    authorName: "Illuminious Team",
    featuredImage: "/images/hero-global-supply-chain.jpg",
    category: "Technical",
  },
  {
    id: 7,
    slug: "medical-device-manufacturing-fda",
    title: "FDA Compliance in Medical Device Manufacturing",
    excerpt: "Understanding 510(k) requirements, ISO 13485, and what to look for in a medical device manufacturing partner.",
    content: `
      <h2>The Regulatory Landscape</h2>
      <p>Medical device manufacturing is one of the most heavily regulated industries. Understanding the regulatory requirements is essential for bringing medical devices to market successfully.</p>
      
      <h2>Key Regulatory Frameworks</h2>
      
      <h3>FDA Classification</h3>
      <p>The FDA classifies medical devices into three categories:</p>
      <ul>
        <li><strong>Class I:</strong> Low risk, general controls</li>
        <li><strong>Class II:</strong> Moderate risk, 510(k) clearance typically required</li>
        <li><strong>Class III:</strong> High risk, premarket approval (PMA) required</li>
      </ul>
      
      <h3>510(k) Process</h3>
      <p>Most Class II devices require 510(k) clearance, demonstrating substantial equivalence to a predicate device. Key elements include:</p>
      <ul>
        <li>Device description and intended use</li>
        <li>Comparison to predicate device</li>
        <li>Performance testing data</li>
        <li>Biocompatibility testing (if applicable)</li>
      </ul>
      
      <h3>ISO 13485</h3>
      <p>This international standard specifies requirements for quality management systems in medical device manufacturing. Key elements include:</p>
      <ul>
        <li>Design and development controls</li>
        <li>Risk management (ISO 14971)</li>
        <li>Traceability and documentation</li>
        <li>Supplier management</li>
      </ul>
      
      <h2>Choosing a Manufacturing Partner</h2>
      <p>For medical devices, your manufacturing partner must:</p>
      <ul>
        <li>Hold ISO 13485 certification</li>
        <li>Maintain FDA registration</li>
        <li>Have experience with your device class</li>
        <li>Demonstrate robust quality systems</li>
        <li>Support design history file (DHF) requirements</li>
      </ul>
    `,
    publishedAt: new Date("2025-12-15"),
    readTime: 11,
    authorName: "Illuminious Team",
    featuredImage: "/images/industry-medical.jpg",
    category: "Regulated Industries",
  },
];

const categories = [
  "All",
  "Startup Guide",
  "Technical",
  "Industry Insights",
  "Supply Chain",
  "Regulated Industries",
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

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = selectedCategory === "All" || post.category === selectedCategory;
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts[0];
  const otherPosts = filteredPosts.slice(1);

  return (
    <>
      <SEO
        title="Blog | Electronics Manufacturing Insights | Illuminious"
        description="Expert insights on electronics manufacturing, supply chain optimization, DFM best practices, and hardware startup guides from the Illuminious team."
        keywords="electronics manufacturing blog, hardware startup guide, supply chain insights, DFM best practices"
        url="/blog"
      />
      <Header />

      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Tag className="w-4 h-4" />
              Insights & Resources
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
              Manufacturing Knowledge Hub
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Expert guides, industry insights, and practical knowledge for hardware entrepreneurs 
              and manufacturing professionals.
            </p>
            
            {/* Search */}
            <div className="relative max-w-md">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 rounded-full border-illuminious-light"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-6 border-b border-illuminious-light bg-white sticky top-20 z-30">
        <div className="container">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? "bg-illuminious-blue text-white"
                    : "bg-illuminious-light/50 text-illuminious-navy hover:bg-illuminious-light"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-16">
          <div className="container">
            <AnimatedSection>
              <Link href={`/blog/${featuredPost.slug}`}>
                <article className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg border border-illuminious-light hover:shadow-xl transition-shadow">
                  <div className="aspect-video md:aspect-auto overflow-hidden">
                    <img
                      src={featuredPost.featuredImage}
                      alt={featuredPost.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-8 flex flex-col justify-center">
                    <span className="text-xs font-medium text-white bg-illuminious-blue px-3 py-1 rounded-full w-fit mb-4">
                      Featured
                    </span>
                    <span className="text-sm text-illuminious-blue mb-2">{featuredPost.category}</span>
                    <h2 className="text-2xl md:text-3xl font-bold text-illuminious-navy mb-4 group-hover:text-illuminious-blue transition-colors">
                      {featuredPost.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 line-clamp-3">{featuredPost.excerpt}</p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {featuredPost.authorName}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(featuredPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {featuredPost.readTime} min read
                      </span>
                    </div>
                  </div>
                </article>
              </Link>
            </AnimatedSection>
          </div>
        </section>
      )}

      {/* Blog Grid */}
      {otherPosts.length > 0 && (
        <section className="py-12 bg-illuminious-light/30">
          <div className="container">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {otherPosts.map((post, index) => (
                <AnimatedSection key={post.id} delay={index * 0.1}>
                  <Link href={`/blog/${post.slug}`}>
                    <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                      <div className="aspect-video overflow-hidden">
                        <img
                          src={post.featuredImage}
                          alt={post.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      <div className="p-6 flex flex-col flex-1">
                        <span className="text-xs font-medium text-illuminious-blue bg-illuminious-light/50 px-3 py-1 rounded-full w-fit mb-3">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-semibold text-illuminious-navy mb-3 group-hover:text-illuminious-blue transition-colors line-clamp-2">
                          {post.title}
                        </h2>
                        <p className="text-muted-foreground mb-4 line-clamp-2 flex-1">
                          {post.excerpt}
                        </p>
                        <div className="flex items-center gap-4 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-4 h-4" />
                            {new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-4 h-4" />
                            {post.readTime} min
                          </span>
                        </div>
                      </div>
                    </article>
                  </Link>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </section>
      )}

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 text-muted-foreground">
          No articles found matching your criteria.
        </div>
      )}

      {/* Newsletter CTA */}
      <section className="py-16 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white mb-6">
              Get the latest insights and guides delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-2 border-white/50 bg-transparent text-white placeholder:text-white/80 focus:border-white focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-6">
                Subscribe
              </Button>
            </div>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
