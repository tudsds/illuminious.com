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
      <div class="lead-text">
        <p>For hardware startups, the choice of manufacturing partner can <strong>make or break your product launch</strong>. Unlike software, hardware mistakes are expensive and time-consuming to fix. A great manufacturing partner becomes an extension of your team, helping you navigate the complexities of bringing a physical product to market.</p>
      </div>
      
      <h2>Key Factors to Evaluate 🔍</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🏭 1. Quality Management Systems</h4>
          <p>Look for partners with established quality certifications like <strong>ISO 9001</strong>, and industry-specific certifications if applicable (ISO 13485 for medical, IATF 16949 for automotive). These demonstrate commitment to consistent quality processes.</p>
        </div>
        <div class="feature-item">
          <h4>💬 2. Communication & Responsiveness</h4>
          <p>Time zone alignment and language capabilities matter. How quickly do they respond? Do they proactively communicate issues? A partner who goes silent during critical phases can derail your timeline.</p>
        </div>
        <div class="feature-item">
          <h4>🔧 3. Technical Capabilities</h4>
          <p>Ensure they have specific capabilities your product requires: equipment (SMT line specifications, testing capabilities), materials expertise, and engineering support for <strong>DFM optimization</strong>.</p>
        </div>
        <div class="feature-item">
          <h4>📈 4. Scalability</h4>
          <p>Can they support you from prototype through mass production? Some excel at low-volume but struggle with scale. Others require MOQs that don't work for early-stage companies.</p>
        </div>
      </div>
      
      <div class="highlight-box">
        <h4>🚩 Red Flags to Watch For</h4>
        <p>Be cautious if a potential partner exhibits any of these warning signs:</p>
        <ul class="check-list">
          <li><strong>Reluctance</strong> to provide factory tours or customer references</li>
          <li><strong>Unclear pricing structures</strong> with hidden fees or vague cost breakdowns</li>
          <li><strong>No dedicated point of contact</strong>—constant staff turnover indicates instability</li>
          <li><strong>Inability to explain</strong> their quality processes in detail</li>
          <li><strong>Overpromising</strong> on unrealistic timelines or capabilities</li>
        </ul>
      </div>
      
      <h2>The Evaluation Process 📋</h2>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Phase 1: Research</span>
          <p>Compile a list of <strong>5-10 potential partners</strong>. Review their websites, certifications, and capabilities. Check for industry experience with similar products.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 2: Initial Contact</span>
          <p>Reach out with your project requirements. Evaluate response time, professionalism, and initial technical feedback. <strong>Quality questions indicate expertise.</strong></p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 3: Site Visit</span>
          <p>If possible, visit their facility. Observe cleanliness, organization, equipment condition, and workforce training. <strong>Never skip this step for critical products.</strong></p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 4: Pilot Project</span>
          <p>Start with a small batch before committing to full production. This gives firsthand experience with their processes, communication style, and quality standards.</p>
        </div>
      </div>
      
      <h2>Questions to Ask Potential Partners ❓</h2>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>📊 Capacity</h5>
          <p>"What's your current capacity utilization? Can you accommodate our forecasted growth?"</p>
        </div>
        <div class="benefit">
          <h5>🔄 Flexibility</h5>
          <p>"How do you handle design changes mid-production? What's your change order process?"</p>
        </div>
        <div class="benefit">
          <h5>📞 Communication</h5>
          <p>"Who will be our dedicated account manager? What's your typical response time?"</p>
        </div>
        <div class="benefit">
          <h5>💰 Pricing</h5>
          <p>"Can you provide detailed cost breakdowns? How do you handle price volatility in components?"</p>
        </div>
        <div class="benefit">
          <h5>🔍 Quality</h5>
          <p>"What are your typical yield rates? How do you handle defective units?"</p>
        </div>
        <div class="benefit">
          <h5>📜 IP Protection</h5>
          <p>"What measures do you take to protect customer IP and prevent counterfeiting?"</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Making Your Final Decision</h3>
        <p>The right manufacturing partner will feel like a <strong>true collaborator invested in your success</strong>—not just a vendor executing orders. They should challenge your designs when appropriate, suggest improvements, and transparently communicate both good news and bad.</p>
        <p><strong>Remember: The cheapest quote rarely delivers the best value.</strong> Consider total cost of ownership including quality, communication efficiency, and risk mitigation when making your final decision.</p>
      </div>
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
      <div class="lead-text">
        <p><strong>Design for Manufacturing (DFM)</strong> is the practice of designing products with manufacturing in mind from the earliest stages. For electronics, this means considering how your PCB will be assembled, how components will be sourced, and how the final product will be tested and packaged—<em>before</em> you commit to production.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 Why DFM Matters</h4>
        <p>Studies consistently show that <strong>70-80% of manufacturing costs</strong> are determined during the design phase. Making changes after tooling is complete or production has started is exponentially more expensive than addressing issues during design. Early DFM investment pays dividends throughout the product lifecycle.</p>
      </div>
      
      <h2>Key DFM Principles for Electronics 🔧</h2>
      
      <h3>1. PCB Layout Considerations 📐</h3>
      <p>Your PCB layout directly impacts manufacturing efficiency and yield rates:</p>
      
      <ul class="check-list">
        <li><strong>Standard component sizes:</strong> Use 0402, 0603 packages rather than exotic sizes that limit manufacturer options</li>
        <li><strong>Adequate spacing:</strong> Maintain proper clearance between components for automated assembly equipment</li>
        <li><strong>Consistent orientation:</strong> Orient components uniformly for efficient pick-and-place operations</li>
        <li><strong>Fiducial marks:</strong> Include reference points for vision systems to ensure accurate placement</li>
        <li><strong>Tooling holes:</strong> Add holes for fixturing during assembly and testing</li>
        <li><strong>Panelization:</strong> Design for efficient panel layouts to reduce handling costs</li>
      </ul>
      
      <h3>2. Component Selection Strategy 🧩</h3>
      <p>Smart component choices prevent headaches down the line:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🔄 Multi-Source Components</h4>
          <p>Prefer components with <strong>multiple qualified suppliers</strong> to avoid supply chain disruptions and price volatility.</p>
        </div>
        <div class="feature-item">
          <h4>📅 Lifecycle Management</h4>
          <p>Check component lifecycle status. Avoid obsolete or end-of-life parts that create long-term support issues.</p>
        </div>
        <div class="feature-item">
          <h4>⏱️ Lead Time Planning</h4>
          <p>Consider component availability and lead times. Long lead times can delay your entire production schedule.</p>
        </div>
        <div class="feature-item">
          <h4>🎯 Standardization</h4>
          <p>Standardize on component families where possible. This reduces inventory complexity and purchasing overhead.</p>
        </div>
      </div>
      
      <h3>3. Testing Strategy 🔍</h3>
      <p>Design for testability from day one:</p>
      
      <ul class="check-list">
        <li><strong>Test points:</strong> Design in accessible test points for critical signals and power rails</li>
        <li><strong>Bed-of-nails:</strong> Consider ICT (In-Circuit Testing) requirements and probe access</li>
        <li><strong>Functional testing:</strong> Plan for functional test interfaces and diagnostic capabilities</li>
        <li><strong>Boundary scan:</strong> Implement JTAG where appropriate for complex digital designs</li>
        <li><strong>Self-test:</strong> Consider built-in self-test (BIST) capabilities for field diagnostics</li>
      </ul>
      
      <h2>Advanced DFM Considerations 🚀</h2>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Thermal Management</span>
          <p>Ensure adequate heat sinking and thermal relief patterns. Poor thermal design leads to rework and reliability issues.</p>
        </div>
        <div class="criterion">
          <span class="badge">Connector Access</span>
          <p>Position connectors for easy access during assembly and field service. Avoid blocking critical ports.</p>
        </div>
        <div class="criterion">
          <span class="badge">Label Placement</span>
          <p>Design space for barcode/QR labels and regulatory markings. Consider label durability in the operating environment.</p>
        </div>
        <div class="criterion">
          <span class="badge">Cable Routing</span>
          <p>Plan internal cable routing to avoid interference with components and ensure proper strain relief.</p>
        </div>
      </div>
      
      <h2>Working with Your Manufacturing Partner 🤝</h2>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>📋 Early Review</h5>
          <p>Share preliminary designs before finalization for professional DFM feedback.</p>
        </div>
        <div class="benefit">
          <h5>🎯 Prototype Feedback</h5>
          <p>Manufacturing partners can identify assembly challenges during prototype builds.</p>
        </div>
        <div class="benefit">
          <h5>💰 Cost Optimization</h5>
          <p>Experienced partners suggest design changes that reduce production costs.</p>
        </div>
        <div class="benefit">
          <h5>⚡ Process Alignment</h5>
          <p>Design to your partner's specific equipment capabilities and processes.</p>
        </div>
        <div class="benefit">
          <h5>📊 Yield Improvement</h5>
          <p>Small design changes can dramatically improve first-pass yield rates.</p>
        </div>
        <div class="benefit">
          <h5>🔧 Field Lessons</h5>
          <p>Leverage their experience with similar products to avoid common pitfalls.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Implementing DFM in Your Workflow</h3>
        <p>The best DFM outcomes come from <strong>early and continuous collaboration</strong> with your manufacturing partner. Don't treat manufacturing as an afterthought—integrate DFM checks at every design milestone.</p>
        <p><strong>Remember: Every dollar invested in DFM during design saves ten dollars in manufacturing costs.</strong> Start early, review often, and partner closely with your manufacturer for optimal results.</p>
      </div>
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
      <div class="lead-text">
        <p><strong>2026 is shaping up to be a pivotal year for AI hardware.</strong> As AI models become more efficient and edge computing more powerful, we're seeing an explosion of new product categories that bring AI capabilities directly to consumers. For hardware startups and manufacturers, understanding these trends is essential for staying competitive.</p>
      </div>
      
      <h2>Key Trends Shaping 2026 🚀</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>👓 1. AI-Powered Wearables</h4>
          <p><strong>Smart glasses are finally hitting their stride.</strong> With improved battery life, smaller form factors, and genuinely useful AI assistants, products like Meta's Ray-Ban glasses are finding mainstream adoption. Expect more entrants with specialized use cases in enterprise, healthcare, and gaming.</p>
        </div>
        <div class="feature-item">
          <h4>🤖 2. Companion Robots</h4>
          <p><strong>Home robots are evolving beyond vacuum cleaners.</strong> AI-powered companion robots that can hold conversations, assist with tasks, and provide emotional support are gaining traction. The combination of LLMs with embodied AI creates compelling new possibilities.</p>
        </div>
        <div class="feature-item">
          <h4>⚡ 3. Edge AI Devices</h4>
          <p><strong>Privacy concerns and latency requirements are driving AI to the edge.</strong> Specialized AI chips enable sophisticated inference on devices without cloud connectivity, opening new applications in industrial, automotive, and consumer spaces.</p>
        </div>
        <div class="feature-item">
          <h4>❤️ 4. Health Monitoring Devices</h4>
          <p><strong>AI is transforming health monitoring</strong> from simple data collection to intelligent insights. Wearables that detect early signs of health issues and provide personalized recommendations are becoming more sophisticated.</p>
        </div>
      </div>
      
      <h2>Deep Dive: Wearable AI Revolution 👔</h2>
      
      <p>The wearable AI market is experiencing unprecedented growth. Here's what's driving adoption:</p>
      
      <ul class="check-list">
        <li><strong>Extended battery life:</strong> New low-power AI chips enable all-day usage without charging anxiety</li>
        <li><strong>Natural interfaces:</strong> Voice and gesture controls make interactions more intuitive than ever</li>
        <li><strong>Contextual awareness:</strong> AI understands your environment and provides relevant information proactively</li>
        <li><strong>Enterprise applications:</strong> Hands-free documentation, remote assistance, and workflow guidance</li>
        <li><strong>Health integration:</strong> Continuous vital monitoring with AI-powered anomaly detection</li>
      </ul>
      
      <div class="highlight-box">
        <h4>💡 Market Opportunity</h4>
        <p>The global AI wearable market is projected to reach <strong>$180 billion by 2027</strong>, representing a CAGR of over 25%. Early movers in specialized verticals (healthcare, industrial, education) are capturing significant market share.</p>
      </div>
      
      <h2>Manufacturing Implications for 2026 🏭</h2>
      
      <p>These AI hardware trends create new challenges and opportunities for manufacturers:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Miniaturization</span>
          <p><strong>Tighter tolerances</strong> required for compact AI devices. Micro-assembly capabilities and precision molding are becoming essential competencies.</p>
        </div>
        <div class="criterion">
          <span class="badge">Optical Systems</span>
          <p><strong>Specialized assembly expertise</strong> needed for cameras, sensors, and waveguide displays in AR/VR devices. Cleanroom requirements are increasing.</p>
        </div>
        <div class="criterion">
          <span class="badge">Thermal Management</span>
          <p><strong>AI processors generate significant heat</strong> in compact spaces. Advanced thermal design and materials are critical for performance and reliability.</p>
        </div>
        <div class="criterion">
          <span class="badge">Testing Requirements</span>
          <p><strong>AI functionality validation</strong> requires new test methodologies. Manufacturers need expertise in ML model deployment and edge computing verification.</p>
        </div>
      </div>
      
      <h2>What This Means for Hardware Startups 💡</h2>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>🎯 Niche Opportunities</h5>
          <p>Vertical-specific AI devices (agriculture, construction, healthcare) offer less competition than consumer markets.</p>
        </div>
        <div class="benefit">
          <h5>🤝 Partner Selection</h5>
          <p>Choose manufacturing partners with AI hardware experience and relevant certifications.</p>
        </div>
        <div class="benefit">
          <h5>⚡ Speed to Market</h5>
          <p>First-mover advantage is significant. Agile development and rapid iteration are crucial.</p>
        </div>
        <div class="benefit">
          <h5>💰 Funding Climate</h5>
          <p>AI hardware startups are attracting significant VC interest. Strong technical teams are essential.</p>
        </div>
        <div class="benefit">
          <h5>🔄 Iteration Cycles</h5>
          <p>Expect faster product cycles. Plan for continuous improvement based on user feedback and model updates.</p>
        </div>
        <div class="benefit">
          <h5>🌐 Ecosystem Play</h5>
          <p>Integration with existing AI platforms (Alexa, Google Assistant, custom models) can accelerate development.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Looking Ahead</h3>
        <p>AI hardware is no longer science fiction—it's becoming a <strong>mainstream reality</strong> that's reshaping consumer expectations and industrial applications alike. Companies that invest in AI hardware capabilities now will be better positioned for the next wave of innovation.</p>
        <p><strong>The question isn't whether AI will transform hardware—it's how quickly you can adapt your manufacturing and product strategies to capture this opportunity.</strong></p>
      </div>
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
      <div class="lead-text">
        <p><strong>Recent global events have fundamentally changed how companies view supply chain risk.</strong> What was once seen as an efficiency-focused, cost-optimization exercise has evolved into a strategic resilience imperative. Companies are increasingly seeking to diversify their manufacturing footprint across multiple regions to build robust defenses against disruptions.</p>
      </div>
      
      <h2>The Case for Diversification 🌍</h2>
      
      <div class="highlight-box">
        <h4>⚠️ Supply Chain Risk Reality Check</h4>
        <p>Recent studies show that <strong>94% of Fortune 1000 companies</strong> experienced supply chain disruptions in the past year. The cost of these disruptions? An estimated <strong>$184 million annually</strong> for large organizations. Diversification isn't just smart—it's essential.</p>
      </div>
      
      <h2>Regional Manufacturing Landscapes 🗺️</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🏭 Southeast Asia</h4>
          <p><strong>Competitive labor costs</strong> combined with rapidly improving infrastructure and favorable trade agreements make this region attractive for cost-sensitive manufacturing.</p>
        </div>
        <div class="feature-item">
          <h4>🇺🇸 North America</h4>
          <p><strong>Proximity to major markets</strong>, strong IP protection, and reduced logistics complexity offer compelling advantages for time-sensitive products.</p>
        </div>
        <div class="feature-item">
          <h4>🇪🇺 Eastern Europe</h4>
          <p><strong>Highly skilled workforce</strong>, EU market access, and competitive costs create an ideal hub for technical manufacturing and European distribution.</p>
        </div>
        <div class="feature-item">
          <h4>🇮🇳 South Asia</h4>
          <p><strong>Large talent pool</strong>, growing domestic market, and improving manufacturing capabilities offer long-term strategic value.</p>
        </div>
      </div>
      
      <h2>Total Cost of Ownership Analysis 💰</h2>
      
      <p>When evaluating new manufacturing locations, look beyond simple unit costs. The <strong>total landed cost</strong> includes:</p>
      
      <ul class="check-list">
        <li><strong>Manufacturing costs:</strong> Labor, materials, overhead, and facility expenses</li>
        <li><strong>Logistics and shipping:</strong> Freight, handling, and transportation to destination</li>
        <li><strong>Duties and tariffs:</strong> Import taxes, customs fees, and regulatory compliance costs</li>
        <li><strong>Inventory carrying costs:</strong> Longer lead times require more safety stock investment</li>
        <li><strong>Quality and rework costs:</strong> Potential yield differences and defect management expenses</li>
        <li><strong>Travel and oversight:</strong> Engineering visits, quality audits, and management time</li>
      </ul>
      
      <h2>Implementation Strategies 🎯</h2>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Phase 1: Risk Assessment</span>
          <p><strong>Map your current vulnerabilities.</strong> Identify single points of failure, geographic concentrations, and products most at risk from supply disruptions.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 2: Pilot Selection</span>
          <p><strong>Start strategically.</strong> Choose products with highest risk exposure or clearest cost-benefit for initial diversification efforts.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 3: Partner Qualification</span>
          <p><strong>Rigorous vetting is essential.</strong> Evaluate new partners for quality systems, capacity, financial stability, and cultural alignment.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 4: Gradual Expansion</span>
          <p><strong>Build capabilities over time.</strong> Expand your diversified footprint as you gain experience and confidence in new regions.</p>
        </div>
      </div>
      
      <h2>Partner Selection Criteria 🤝</h2>
      
      <p>Choosing the right manufacturing partners for diversification requires evaluating:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>🏢 Multi-Region Presence</h5>
          <p>Partners with facilities in multiple regions offer flexibility and risk mitigation capabilities.</p>
        </div>
        <div class="benefit">
          <h5>📊 Quality Consistency</h5>
          <p>Ability to maintain identical quality standards across different manufacturing locations.</p>
        </div>
        <div class="benefit">
          <h5>💬 Communication</h5>
          <p>Strong communication infrastructure and English language capabilities across all sites.</p>
        </div>
        <div class="benefit">
          <h5>📈 Scalability</h5>
          <p>Capacity to grow with your business and handle volume fluctuations across regions.</p>
        </div>
        <div class="benefit">
          <h5>🔒 IP Protection</h5>
          <p>Robust intellectual property protection measures and legal frameworks in all jurisdictions.</p>
        </div>
        <div class="benefit">
          <h5>🌐 Logistics Integration</h5>
          <p>Established shipping relationships and customs expertise for efficient global distribution.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>The Path Forward</h3>
        <p>Supply chain diversification is <strong>no longer optional</strong> for most companies—it's a strategic imperative. Those who build resilient, multi-regional supply chains now will be better positioned to navigate future disruptions and capture market opportunities.</p>
        <p><strong>Start today.</strong> Even small steps toward diversification create meaningful risk reduction. The question isn't whether you can afford to diversify—it's whether you can afford not to.</p>
      </div>
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
      <div class="lead-text">
        <p><strong>Manufacturing IoT devices presents unique challenges</strong> compared to traditional electronics. Wireless connectivity, power management, and regulatory certification add layers of complexity that require specialized expertise. Success demands attention to RF performance, energy efficiency, and compliance from the earliest design stages.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📊 The IoT Opportunity</h4>
        <p>With over <strong>75 billion connected devices</strong> expected by 2026, IoT represents one of the fastest-growing segments in electronics manufacturing. However, the combination of wireless connectivity, battery constraints, and regulatory requirements creates unique production challenges that standard EMS providers may not be equipped to handle.</p>
      </div>
      
      <h2>RF Design & Layout Considerations 📡</h2>
      
      <p>Wireless performance is heavily influenced by PCB layout decisions. Poor RF design leads to connectivity issues, reduced range, and certification failures:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>📍 Antenna Placement</h4>
          <p><strong>Critical positioning</strong> away from metal components and interference sources. Ground plane design significantly impacts radiation patterns.</p>
        </div>
        <div class="feature-item">
          <h4>🛡️ RF Shielding</h4>
          <p><strong>Proper isolation</strong> of sensitive RF circuits from digital noise sources. Shield cans and strategic component placement reduce interference.</p>
        </div>
        <div class="feature-item">
          <h4>⚡ Impedance Control</h4>
          <p><strong>50-ohm impedance matching</strong> for transmission lines ensures maximum power transfer and minimal signal reflection.</p>
        </div>
        <div class="feature-item">
          <h4>🔇 Noise Isolation</h4>
          <p><strong>Separation from high-speed</strong> digital circuits prevents EMI that degrades wireless performance and causes regulatory failures.</p>
        </div>
      </div>
      
      <h2>Power Management Strategy 🔋</h2>
      
      <p>Battery-powered IoT devices require <strong>meticulous attention to power consumption</strong>. Every microamp counts when devices must operate for months or years on a single charge:</p>
      
      <ul class="check-list">
        <li><strong>Low-power component selection:</strong> Choose components with nA-level sleep currents and efficient active modes</li>
        <li><strong>Sleep mode optimization:</strong> Implement aggressive power-down strategies with carefully timed wake intervals</li>
        <li><strong>Efficient power supply design:</strong> Use high-efficiency DC-DC converters and minimize quiescent current</li>
        <li><strong>Battery chemistry selection:</strong> Match battery type to application requirements (LiPo, LiFePO4, primary cells)</li>
        <li><strong>Charging circuit design:</strong> Implement safe, efficient charging with temperature monitoring and protection</li>
        <li><strong>Energy harvesting:</strong> Consider solar, thermal, or vibration harvesting for extended operation</li>
      </ul>
      
      <h2>Wireless Certification Requirements ✅</h2>
      
      <p>IoT devices require regulatory certification before legal sale. Understanding requirements early prevents costly redesigns:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">FCC (United States)</span>
          <p><strong>Part 15 compliance</strong> for intentional and unintentional radiators. Testing includes conducted emissions, radiated emissions, and modulation characteristics.</p>
        </div>
        <div class="criterion">
          <span class="badge">CE (European Union)</span>
          <p><strong>RED Directive compliance</strong> (2014/53/EU). Covers radio equipment, EMC, and safety requirements for EU market access.</p>
        </div>
        <div class="criterion">
          <span class="badge">IC (Canada)</span>
          <p><strong>ISED certification</strong> required for radio devices. Similar to FCC but with Canadian-specific requirements and labeling.</p>
        </div>
        <div class="criterion">
          <span class="badge">Protocol Certifications</span>
          <p><strong>Bluetooth SIG, Wi-Fi Alliance, Zigbee Alliance</strong> membership and testing for specific wireless protocols and interoperability.</p>
        </div>
      </div>
      
      <h2>Manufacturing Partner Selection 🏭</h2>
      
      <p>Not all EMS providers are equipped for IoT manufacturing. Look for partners with:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>📡 RF Expertise</h5>
          <p>Experience with RF products and testing equipment including network analyzers and spectrum analyzers.</p>
        </div>
        <div class="benefit">
          <h5>🧪 Lab Relationships</h5>
          <p>Established relationships with accredited certification labs to streamline the approval process.</p>
        </div>
        <div class="benefit">
          <h5>⚡ Low-Power Assembly</h5>
          <p>Capability to handle sensitive low-power components and implement ESD protection throughout production.</p>
        </div>
        <div class="benefit">
          <h5>📶 Module Integration</h5>
          <p>Expertise in wireless module integration including antenna tuning and performance verification.</p>
        </div>
        <div class="benefit">
          <h5>🔧 Test Development</h5>
          <p>Ability to develop custom test fixtures for RF performance, power consumption, and functionality.</p>
        </div>
        <div class="benefit">
          <h5>📋 Regulatory Guidance</h5>
          <p>Knowledge of certification requirements and experience navigating the approval process.</p>
        </div>
      </div>
      
      <h2>Testing & Quality Assurance 🔍</h2>
      
      <p>IoT devices require specialized testing beyond standard functional tests:</p>
      
      <ul class="check-list">
        <li><strong>RF performance testing:</strong> Range, sensitivity, throughput, and coexistence with other wireless devices</li>
        <li><strong>Power consumption profiling:</strong> Sleep current, active current, and overall battery life validation</li>
        <li><strong>OTA (Over-The-Air) updates:</strong> Testing firmware update mechanisms and recovery procedures</li>
        <li><strong>Environmental testing:</strong> Temperature, humidity, and vibration effects on wireless performance</li>
        <li><strong>Security validation:</strong> Encryption implementation, secure boot, and vulnerability assessment</li>
        <li><strong>Interoperability testing:</strong> Compatibility with various routers, phones, and ecosystem devices</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Success in IoT Manufacturing</h3>
        <p>IoT device manufacturing requires <strong>specialized expertise across multiple disciplines</strong>—RF engineering, power management, regulatory compliance, and security. Partnering with an experienced manufacturer who understands these unique challenges is essential for bringing successful connected products to market.</p>
        <p><strong>Start with the end in mind.</strong> Design for manufacturing, certification, and long-term reliability from day one to avoid costly redesigns and delays.</p>
      </div>
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
      <div class="lead-text">
        <p><strong>Medical device manufacturing is one of the most heavily regulated industries in the world.</strong> With patient safety on the line, regulatory compliance isn't just a legal requirement—it's a moral imperative. Understanding FDA requirements, quality standards, and manufacturing protocols is essential for successfully bringing medical devices to market.</p>
      </div>
      
      <div class="highlight-box">
        <h4>⚠️ Why Regulatory Compliance Matters</h4>
        <p>Non-compliance can result in <strong>FDA warning letters, product recalls, consent decrees, and criminal prosecution</strong>. In 2024, the FDA issued over 4,000 warning letters to medical device manufacturers, with the average cost of a recall exceeding <strong>$10 million</strong>. Proper compliance from day one is not optional.</p>
      </div>
      
      <h2>FDA Device Classification 🏛️</h2>
      
      <p>The FDA classifies medical devices into three categories based on risk level and regulatory controls required:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🟢 Class I - Low Risk</h4>
          <p><strong>General controls</strong> apply. Examples include tongue depressors, bandages, and non-powered wheelchairs. Most are exempt from premarket notification.</p>
        </div>
        <div class="feature-item">
          <h4>🟡 Class II - Moderate Risk</h4>
          <p><strong>510(k) clearance</strong> typically required. Examples include powered wheelchairs, infusion pumps, and surgical drapes. Special controls apply.</p>
        </div>
        <div class="feature-item">
          <h4>🔴 Class III - High Risk</h4>
          <p><strong>Premarket Approval (PMA)</strong> required. Examples include heart valves, implanted pacemakers, and high-risk diagnostic devices.</p>
        </div>
        <div class="feature-item">
          <h4>📝 De Novo Pathway</h4>
          <p><strong>For novel devices</strong> of low to moderate risk without predicate. Creates new device classification for future submissions.</p>
        </div>
      </div>
      
      <h2>The 510(k) Clearance Process 📋</h2>
      
      <p>Most Class II devices require 510(k) clearance, demonstrating <strong>substantial equivalence</strong> to a legally marketed predicate device. A complete submission includes:</p>
      
      <ul class="check-list">
        <li><strong>Device description:</strong> Detailed specifications, materials, and intended use statement</li>
        <li><strong>Predicate comparison:</strong> Demonstration of substantial equivalence to the identified predicate device</li>
        <li><strong>Performance testing:</strong> Bench testing, software validation, electrical safety, and EMC testing results</li>
        <li><strong>Biocompatibility:</strong> ISO 10993 testing for devices with patient contact (if applicable)</li>
        <li><strong>Sterilization validation:</strong> For sterile devices, validation of sterilization process and shelf-life testing</li>
        <li><strong>Clinical data:</strong> May be required when nonclinical testing is insufficient to demonstrate equivalence</li>
      </ul>
      
      <div class="highlight-box">
        <h4>⏱️ Timeline Expectations</h4>
        <p>FDA review of 510(k) submissions typically takes <strong>90-180 days</strong>, though complex devices may take longer. Preparation time—including testing and documentation—can add 6-12 months before submission.</p>
      </div>
      
      <h2>ISO 13485 Quality Management 🎯</h2>
      
      <p>This international standard specifies requirements for <strong>Quality Management Systems (QMS)</strong> in medical device manufacturing. Certification is widely considered essential for credible medical device manufacturers:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Design Controls</span>
          <p><strong>Design planning, input, output, review, verification, validation, and transfer</strong> must be documented and controlled throughout development.</p>
        </div>
        <div class="criterion">
          <span class="badge">Risk Management</span>
          <p><strong>ISO 14971 compliance</strong> requires systematic risk analysis, evaluation, control, and monitoring throughout the product lifecycle.</p>
        </div>
        <div class="criterion">
          <span class="badge">Traceability</span>
          <p><strong>Complete documentation</strong> linking requirements to design, manufacturing, and testing. Design History File (DHF) maintenance is critical.</p>
        </div>
        <div class="criterion">
          <span class="badge">Supplier Control</span>
          <p><strong>Rigorous supplier qualification</strong> and ongoing monitoring for materials and components that affect device safety and performance.</p>
        </div>
      </div>
      
      <h2>Essential Manufacturing Partner Criteria ✅</h2>
      
      <p>For medical devices, your manufacturing partner must meet stringent requirements:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>📜 ISO 13485 Certified</h5>
          <p>Current certification with scope covering your device type and manufacturing processes.</p>
        </div>
        <div class="benefit">
          <h5>🏛️ FDA Registered</h5>
          <p>Active FDA establishment registration and device listing for applicable operations.</p>
        </div>
        <div class="benefit">
          <h5>🎯 Device Class Experience</h5>
          <p>Proven track record manufacturing devices in your specific risk classification.</p>
        </div>
        <div class="benefit">
          <h5>📊 Robust QMS</h5>
          <p>Documented quality systems with CAPA processes, internal audits, and management review.</p>
        </div>
        <div class="benefit">
          <h5>📁 DHF Support</strong></h5>
          <p>Capability to maintain Design History File and support regulatory submissions.</p>
        </div>
        <div class="benefit">
          <h5>🔍 Cleanroom Capability</h5>
          <p>Appropriate cleanroom classifications (ISO 7/8) for sterile and critical devices.</p>
        </div>
      </div>
      
      <h2>Regulatory Strategy Best Practices 🎓</h2>
      
      <ul class="check-list">
        <li><strong>Engage FDA early:</strong> Pre-submission meetings clarify requirements and reduce surprises during review</li>
        <li><strong>Choose predicate carefully:</strong> The right predicate device simplifies the 510(k) pathway significantly</li>
        <li><strong>Document everything:</strong> If it wasn't documented, it didn't happen. Comprehensive records are your defense</li>
        <li><strong>Plan for post-market:</strong> MDR (Medical Device Reporting), complaint handling, and vigilance systems</li>
        <li><strong>Consider international:</strong> CE marking for EU, Health Canada, and other markets in your strategy</li>
        <li><strong>Maintain vigilance:</strong> Continuous monitoring of regulatory changes and guidance documents</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>The Path to Market Success</h3>
        <p>Successfully navigating FDA compliance requires <strong>specialized expertise, meticulous documentation, and unwavering commitment to quality</strong>. The right manufacturing partner doesn't just build your device—they help ensure it meets the rigorous standards that protect patient safety and enable market access.</p>
        <p><strong>Invest in compliance early.</strong> The cost of regulatory shortcuts far exceeds the investment in proper quality systems. Partner with experienced professionals who understand the unique challenges of medical device manufacturing.</p>
      </div>
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
