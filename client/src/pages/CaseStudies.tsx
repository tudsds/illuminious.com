import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  TrendingUp,
  Clock,
  DollarSign,
  Award,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const caseStudies = [
{
    id: "fda-wearable-diagnostic",
    slug: "illuminious-accelerates-fda-approval-for-medical-device-startup",
    title: "How Illuminious Accelerated FDA Approval for a Wearable Diagnostic Tool",
    industry: "Medical/Healthcare",
    challenge: "A medical device startup had developed a revolutionary AI-powered continuous ECG monitor but faced two major hurdles: navigating the FDA 510(k) approval process and establishing a scalable manufacturing process to meet projected demand.",
    solution: "Illuminious provided end-to-end regulatory guidance and implemented a proprietary MES system to digitize and optimize the production line, achieving FDA clearance 6 months ahead of schedule.",
    results: [
      { metric: "FDA Clearance", value: "6 Mo Early", description: "Ahead of schedule for FDA 510(k) clearance" },
      { metric: "Production", value: "10,000+/mo", description: "Units produced per month within the first year" },
      { metric: "Market Launch", value: "Successful", description: "Established as a key player in cardiac care" },
    ],
    testimonial: "Partnering with Illuminious was a game-changer for us. Their expertise in both the regulatory and manufacturing aspects of the medical device industry was invaluable.",
    image: "/images/case-study-illuminious-accelerates-fda-approval-for-medical-device-startup.jpg",
    tags: ["Medical Device", "FDA 510(k)", "Wearable", "Startup"],
    fullContent: `<div class="lead-text"><p>Cardio-Innovate, a visionary startup, had developed a revolutionary wearable diagnostic tool poised to transform cardiac care. Their device, an AI-powered continuous ECG monitor, promised early detection of life-threatening cardiac events. However, the path from a working prototype to a market-ready, FDA-approved medical device was fraught with challenges.</p></div><div class="highlight-box"><h4>The Challenge: From Innovative Concept to Market-Ready Medical Device</h4><p>The startup faced two major hurdles: navigating the intricate and demanding FDA approval process, and establishing a scalable manufacturing process to meet projected demand.</p></div><div class="process-steps"><div class="process-step"><h4>Regulatory Navigation</h4><p>Our team of regulatory experts guided Cardio-Innovate through every stage of the FDA 510(k) submission process. This included a comprehensive review of their device's design, software validation, and clinical data to ensure full compliance with all regulatory requirements.</p></div><div class="process-step"><h4>Manufacturing Scalability</h4><p>We implemented our proprietary Synapse Manufacturing Execution System (MES) to digitize and optimize Cardio-Innovate's production line. This provided real-time visibility and control over the entire manufacturing process, from raw material intake to final product assembly and testing.</p></div></div><div class="stats-row"><div class="stat-item"><h4>6 Months</h4><p>Ahead of schedule for FDA 510(k) clearance</p></div><div class="stat-item"><h4>10,000+</h4><p>Units produced per month within the first year</p></div><div class="stat-item"><h4>Successful</h4><p>Market launch, establishing Cardio-Innovate as a key player</p></div></div><div class="quote-box"><blockquote>Partnering with Illuminious was a game-changer for us. Their expertise in both the regulatory and manufacturing aspects of the medical device industry was invaluable. We couldn't have achieved our goals without them.</blockquote><cite>CEO of Cardio-Innovate</cite></div><div class="comparison-grid"><div class="comparison-card"><h4>Before Illuminious</h4><ul><li>Uncertain FDA submission timeline (est. 18-24 months)</li><li>Production capacity of 10 units/month (prototypes)</li><li>Low market readiness</li></ul></div><div class="comparison-card"><h4>After Illuminious</h4><ul><li>FDA submission in 12 months</li><li>Production capacity of 10,000+ units/month</li><li>High market readiness</li></ul></div></div><div class="benefits-grid"><div class="benefit"><h4>Accelerated Time-to-Market</h4></div><div class="benefit"><h4>Reduced Regulatory Risk</h4></div><div class="benefit"><h4>Scalable & Efficient Manufacturing</h4></div><div class="benefit"><h4>Enhanced Product Quality</h4></div></div>`,
  },
{
    id: "iot-million-units",
    slug: "scaling-from-prototype-to-1-million-units",
    title: "Scaling from Prototype to 1 Million Units with a Consumer IoT Brand",
    industry: "Consumer IoT",
    challenge: "A consumer IoT brand had developed a groundbreaking smart home device but faced the daunting task of scaling production from a few hundred prototype units to one million to meet projected market demand.",
    solution: "Illuminious provided end-to-end manufacturing: DFM optimization, supply chain development, automated assembly lines with machine vision, and global logistics — achieving the million-unit milestone in 18 months.",
    results: [
      { metric: "Units Shipped", value: "1 Million", description: "Milestone reached within 18 months" },
      { metric: "COGS Reduction", value: "50%", description: "Through DFM and supply chain optimization" },
      { metric: "Yield Rate", value: "99.5%", description: "Consistent quality at scale" },
    ],
    testimonial: "Illuminious was more than a vendor; they were a true partner in our journey. Their expertise in manufacturing and supply chain management was instrumental in our ability to scale.",
    image: "/images/case-study-scaling-from-prototype-to-1-million-units.jpg",
    tags: ["Consumer IoT", "Scale-Up", "Smart Home", "Mass Production"],
    fullContent: `<div class="lead-text"><p>A deep dive into the challenges and solutions for rapidly scaling a consumer IoT product from a functional prototype to mass production, achieving a milestone of one million units shipped.</p></div><div class="highlight-box"><h4>The Challenge</h4><p>The Client had developed a groundbreaking smart home device and successfully launched a functional prototype that garnered significant media attention and early adopter interest. However, they faced the daunting task of scaling their production from a few hundred units to a million to meet projected market demand, a challenge that involved navigating complex supply chains, manufacturing processes, and quality control at scale.</p></div><div class="highlight-box"><h4>The Solution</h4><p>Illuminious partnered with the Client to provide a comprehensive, end-to-end manufacturing solution that addressed their key challenges head-on. Our approach was multi-faceted, focusing on Design for Manufacturability (DFM), supply chain optimization, and rigorous quality assurance.</p></div><div class="process-steps"><div class="process-step"><h4>1. DFM and Prototyping</h4><p>Our engineers worked closely with the Client's design team to refine the product's architecture for mass production. This involved material selection, component consolidation, and optimizing the assembly process to reduce costs and improve yield.</p></div><div class="process-step"><h4>2. Supply Chain Development</h4><p>We leveraged our global network of vetted suppliers to establish a resilient and cost-effective supply chain. This included sourcing high-quality components, negotiating favorable terms, and implementing a just-in-time (JIT) inventory management system.</p></div><div class="process-step"><h4>3. Automated Assembly & Testing</h4><p>We designed and deployed a custom automated assembly line equipped with advanced robotics and machine vision systems. This ensured high-speed production while maintaining consistent quality.</p></div><div class="process-step"><h4>4. Quality Assurance & Control</h4><p>A multi-layered quality control process was implemented, from incoming component inspection to in-process monitoring and final product testing.</p></div><div class="process-step"><h4>5. Scalable Logistics & Fulfillment</h4><p>As production ramped up, we managed the global logistics and fulfillment, ensuring that products were delivered to distribution centers and customers on time.</p></div></div><div class="stats-row"><div class="stat-item"><h4>1 Million</h4><p>Units shipped within 18 months</p></div><div class="stat-item"><h4>50%</h4><p>Reduction in COGS</p></div><div class="stat-item"><h4>99.5%</h4><p>Product yield rate</p></div><div class="stat-item"><h4>40%</h4><p>Faster time-to-market</p></div></div><div class="quote-box"><blockquote>Illuminious was more than a vendor; they were a true partner in our journey. Their expertise in manufacturing and supply chain management was instrumental in our ability to scale from a promising prototype to a market-leading product.</blockquote><cite>CEO of the client company</cite></div>`,
  },
  {
    id: "wearable-fitness-tracker",
    slug: "wearable-fitness-fast-launch",
    title: "Wearable Fitness Tracker Startup",
    industry: "Consumer Electronics / Wearables",
    challenge: "A fitness wearable startup had 90 days to launch their first product before a major trade show, but their initial manufacturing partner couldn't meet the quality and timeline requirements.",
    solution: "We implemented rapid NPI protocols, parallel-tracked tooling and certification, and provided dedicated engineering support to compress a 6-month timeline into 10 weeks without compromising quality.",
    results: [
      { metric: "Time to Market", value: "10 Weeks", description: "From kickoff to mass production (vs. 6-month industry standard)" },
      { metric: "First-Pass Yield", value: "98.2%", description: "Quality rate from day one of production" },
      { metric: "Units Delivered", value: "5,000", description: "Launch quantity delivered 2 weeks before trade show" },
    ],
    testimonial: "Illuminious didn't just manufacture our product—they helped us navigate every challenge and delivered when others said it was impossible. They were as invested in our success as we were.",
    image: "/images/service-dfm-design.jpg",
    tags: ["Wearables", "Rapid NPI", "Startup", "Fitness Tech"],
    fullContent: `
      <div class="lead-text">
        <p><strong>The Challenge:</strong> A fitness wearable startup had committed to launching their first product at a major industry trade show in 90 days. Their initial manufacturing partner discovered critical design issues late in the process and couldn't meet the timeline. With their launch event and pre-orders at risk, they needed a partner who could execute under extreme time pressure without compromising quality.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 The Solution</h4>
        <p>Illuminious deployed our <strong>Rapid Launch Protocol</strong>, a specialized fast-track process designed for time-critical product launches. Key elements included:</p>
        <ul class="check-list">
          <li><strong>Parallel-track execution:</strong> Simultaneous tooling development, component sourcing, and certification preparation</li>
          <li><strong>Dedicated engineering team:</strong> 3 engineers exclusively assigned to the project for immediate issue resolution</li>
          <li><strong>Pre-qualified components:</strong> Strategic sourcing from in-stock inventory to eliminate lead time delays</li>
          <li><strong>Daily standup meetings:</strong> Real-time progress tracking and rapid decision-making</li>
          <li><strong>Weekend production shifts:</strong> Extended manufacturing hours to compress timeline</li>
        </ul>
      </div>
      
      <h2>📊 Measurable Results</h2>
      
      <div class="results-grid">
        <div class="result-card">
          <div class="result-value">10</div>
          <div class="result-label">Weeks to Market</div>
          <p>From project kickoff to mass production—60% faster than industry standard</p>
        </div>
        <div class="result-card">
          <div class="result-value">98.2%</div>
          <div class="result-label">First-Pass Yield</div>
          <p>Exceptional quality from day one, with minimal rework required</p>
        </div>
        <div class="result-card">
          <div class="result-value">2 Weeks</div>
          <div class="result-label">Early Delivery</div>
          <p>Completed 5,000 units 14 days before the critical trade show deadline</p>
        </div>
      </div>
      
      <h2>🔍 How We Did It</h2>
      
      <div class="process-steps">
        <div class="step">
          <h4>1. Emergency Design Review (Week 1)</h4>
          <p>Our engineering team conducted a comprehensive DFM analysis within 48 hours, identifying 12 critical design issues that the previous manufacturer had missed. We provided detailed redesign recommendations and worked directly with the client's engineering team to implement solutions rapidly.</p>
        </div>
        <div class="step">
          <h4>2. Parallel-Track Execution (Weeks 2-6)</strong></h4>
          <p>Instead of sequential processes, we ran tooling development, component procurement, and test fixture design simultaneously. Our pre-qualified supplier network ensured critical components were available immediately, eliminating the typical 4-6 week procurement delay.</p>
        </div>
        <div class="step">
          <h4>3. Accelerated Validation (Week 7)</h4>
          <p>We built 50 pilot units in 3 days and conducted intensive reliability testing. When one component showed marginal performance, our engineering team worked around the clock to qualify an alternative within 48 hours—avoiding what could have been a 3-week delay.</p>
        </div>
        <div class="step">
          <h4>4. Rapid Scale-Up (Weeks 8-10)</h4>
          <p>With validated processes, we ramped to full production in just 2 weeks. Weekend shifts and extended hours allowed us to build 5,000 units while maintaining our quality standards. Final units passed QA and shipped 2 weeks ahead of the trade show.</p>
        </div>
      </div>
      
      <div class="testimonial-box">
        <blockquote>
          <p>"Illuminious didn't just manufacture our product—they helped us navigate every challenge and delivered when others said it was impossible. Their engineering team spotted issues our original manufacturer missed, and their commitment to our timeline was unwavering. They were as invested in our success as we were. The trade show launch was a huge success, and we couldn't have done it without them."</p>
        </blockquote>
        <div class="testimonial-author">
          <strong>Marcus Rodriguez</strong>, CEO at FitTrack Pro
        </div>
      </div>
      
      <h2>Key Success Factors 🎯</h2>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Engineering Depth</span>
          <p><strong>Expert DFM analysis:</strong> Our engineers identified critical issues early and provided actionable solutions, preventing costly delays later in production.</p>
        </div>
        <div class="criterion">
          <span class="badge">Supply Chain Agility</span>
          <p><strong>Pre-qualified components:</strong> Access to in-stock inventory and established supplier relationships eliminated procurement bottlenecks.</p>
        </div>
        <div class="criterion">
          <span class="badge">Process Flexibility</span>
          <p><strong>Adaptive manufacturing:</strong> Weekend shifts and extended hours compressed the timeline without compromising quality standards.</p>
        </div>
        <div class="criterion">
          <span class="badge">Communication Excellence</span>
          <p><strong>Daily standups:</strong> Real-time updates and rapid decision-making kept the project on track and built client confidence.</p>
        </div>
      </div>
      
      <h2>Long-Term Impact 📈</h2>
      
      <p>Beyond the successful trade show launch, this engagement established a long-term manufacturing partnership:</p>
      
      <ul class="check-list">
        <li><strong>Product line expansion:</strong> The client has since launched 3 additional products with Illuminious</li>
        <li><strong>Volume scaling:</strong> Production has scaled from 5,000 to 50,000 units per month</li>
        <li><strong>Cost optimization:</strong> Subsequent DFM improvements have reduced unit costs by 22%</li>
        <li><strong>Quality consistency:</strong> First-pass yield has improved to 99.1% with mature processes</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Your Rapid Launch Partner</h3>
        <p>Time-critical product launches require more than just manufacturing capacity—they demand <strong>engineering expertise, supply chain agility, and unwavering commitment to your success</strong>. Illuminious's Rapid Launch Protocol has helped dozens of startups meet impossible deadlines without compromising quality.</p>
        <p><strong>Have a tight deadline? Let's talk.</strong> We specialize in turning "impossible" timelines into successful launches.</p>
      </div>
    `,
  },
  {
    id: "smart-home-device",
    slug: "smart-home-device-scaling",
    title: "Smart Home Device Manufacturer",
    industry: "Consumer IoT",
    challenge: "A US-based smart home company needed to scale from 1,000 to 50,000 units/month while reducing landed costs by 30% to compete with established players.",
    solution: "We implemented our Three-Phase Rocket approach: NPI in our Asia Pacific hub for rapid iteration, then transferred production to Indonesia for cost-optimized mass production.",
    results: [
      { metric: "Cost Reduction", value: "35%", description: "Landed cost savings through global manufacturing" },
      { metric: "Time to Market", value: "8 Weeks", description: "From concept to first production batch" },
      { metric: "Quality Rate", value: "99.7%", description: "First-pass yield rate" },
    ],
    testimonial: "Illuminious helped us achieve price parity with competitors while maintaining the quality our customers expect.",
    image: "/images/case-study-hero.jpg",
    tags: ["Consumer Electronics", "IoT", "Scale-Up"],
    fullContent: `
      <div class="lead-text">
        <p>Our client, a US-based smart home technology company, had developed an innovative smart thermostat that was gaining traction in the market. However, they faced a critical challenge: their existing manufacturing setup couldn't scale to meet growing demand while maintaining competitive pricing.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 The Challenge</h4>
        <p>The company needed to increase production from 1,000 to 50,000 units per month while reducing landed costs by 30%. Their current single-source manufacturing approach in Asia was creating:</p>
        <ul class="check-list">
          <li>Supply chain vulnerabilities from geographic concentration</li>
          <li>Limited ability to compete on price with established players</li>
          <li>Quality inconsistencies at higher volumes</li>
          <li>Inability to meet rapidly growing customer demand</li>
        </ul>
      </div>
      
      <h2>Our Three-Phase Solution 🚀</h2>
      
      <div class="process-steps">
        <div class="step">
          <h4>1. NPI & Design Optimization</h4>
          <p>Rapid prototyping and design optimization at our Asia Pacific innovation hub. We conducted comprehensive DFM analysis and implemented design improvements that reduced manufacturing complexity by 25%.</p>
        </div>
        <div class="step">
          <h4>2. Pilot Production</h4>
          <p>Small-batch production runs to validate manufacturing processes and quality systems. This phase confirmed yield rates and identified optimization opportunities before full-scale production.</p>
        </div>
        <div class="step">
          <h4>3. Scale Production</h4>
          <p>Transfer to our Indonesia facility for cost-optimized mass production. This location provided favorable labor costs while maintaining quality standards through our unified quality management system.</p>
        </div>
      </div>
      
      <h2>📊 Results</h2>
      
      <p>Within 8 weeks, we achieved:</p>
      
      <ul class="check-list">
        <li><strong>35% reduction</strong> in landed costs through optimized global manufacturing</li>
        <li><strong>99.7% first-pass yield</strong> maintained at 50,000 units/month volume</li>
        <li><strong>Diversified supply chain</strong> providing resilience against regional disruptions</li>
        <li><strong>Optimized tariff exposure</strong> through strategic facility selection</li>
        <li><strong>Price parity achieved</strong> with established competitors in the market</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Scaling Success</h3>
        <p>This engagement demonstrates how the right manufacturing partner can help innovative companies scale from startup to market leader. By combining design optimization, quality systems, and global manufacturing expertise, we enabled our client to compete effectively in a crowded market.</p>
      </div>
    `,
  },
  {
    id: "medical-device",
    slug: "medical-device-fda-approval",
    title: "Medical Device Startup",
    industry: "Medical/Healthcare",
    challenge: "A medical device startup needed FDA-compliant manufacturing with full traceability, but couldn't afford the overhead of traditional medical device manufacturers.",
    solution: "We provided dedicated clean room space, implemented full lot traceability, and supported their FDA 510(k) submission with comprehensive documentation.",
    results: [
      { metric: "FDA Approval", value: "First Try", description: "510(k) clearance without additional information requests" },
      { metric: "Traceability", value: "100%", description: "Component-level lot tracking" },
      { metric: "Cost Savings", value: "45%", description: "vs. US-based contract manufacturers" },
    ],
    testimonial: "Their documentation and quality systems exceeded what we expected from an overseas manufacturer.",
    image: "/images/industry-medical.jpg",
    tags: ["Medical Device", "FDA", "Startup"],
    fullContent: `
      <div class="lead-text">
        <p>A medical device startup developing a novel patient monitoring device approached us with a challenging requirement: they needed FDA-compliant manufacturing with full traceability, but their budget couldn't accommodate traditional medical device contract manufacturers. They needed a partner who understood medical device quality requirements while offering competitive pricing.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 Regulatory Challenges</h4>
        <p>The startup faced several critical requirements for FDA compliance:</p>
        <ul class="check-list">
          <li>FDA 510(k) clearance with comprehensive documentation</li>
          <li>Complete component-level traceability for each unit</li>
          <li>Clean room assembly environment (ISO Class 7)</li>
          <li>Device History Record (DHR) for regulatory audits</li>
          <li>ISO 13485 certified quality management system</li>
        </ul>
      </div>
      
      <h2>Our Medical Device Solution 🏥</h2>
      
      <div class="process-steps">
        <div class="step">
          <h4>1. Clean Room Infrastructure</h4>
          <p>Dedicated ISO Class 7 clean room space specifically configured for medical device assembly, with environmental monitoring and contamination control systems.</p>
        </div>
        <div class="step">
          <h4>2. Traceability System</h4>
          <p>Implemented full lot traceability with component-level tracking, enabling complete genealogy from raw materials through finished product.</p>
        </div>
        <div class="step">
          <h4>3. Documentation Support</h4>
          <p>Comprehensive Device History Record (DHR) documentation for each unit, supporting FDA 510(k) submission requirements.</p>
        </div>
      </div>
      
      <h2>📊 Results</h2>
      
      <ul class="check-list">
        <li><strong>FDA 510(k) clearance on first submission</strong> with no additional information requests</li>
        <li><strong>45% cost savings</strong> compared to US-based contract manufacturers</li>
        <li><strong>100% component traceability</strong> from raw materials to finished device</li>
        <li><strong>Full regulatory compliance</strong> maintained throughout production</li>
        <li><strong>Scalable production</strong> ready to grow with customer demand</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Regulatory Excellence at Competitive Cost</h3>
        <p>This engagement demonstrates that medical device startups don't have to choose between regulatory compliance and cost efficiency. With the right manufacturing partner, they can achieve both.</p>
      </div>
    `,
  },
  {
    id: "industrial-iot",
    slug: "industrial-iot-global-certification",
    title: "Industrial IoT Platform",
    industry: "Industrial/B2B",
    challenge: "An industrial IoT company needed to produce ruggedized sensors with wide temperature range and IP67 rating, with certifications for multiple international markets.",
    solution: "We handled the complete product realization including enclosure design, environmental testing, and multi-market certifications (FCC, CE, IC).",
    results: [
      { metric: "Certifications", value: "5 Markets", description: "FCC, CE, IC, MIC, RCM" },
      { metric: "Temperature Range", value: "-40°C to +85°C", description: "Extended industrial range" },
      { metric: "IP Rating", value: "IP67", description: "Dust-tight and waterproof" },
    ],
    testimonial: "They handled everything from PCB design to final certification. True one-stop shop.",
    image: "/images/industry-industrial.jpg",
    tags: ["Industrial", "IoT", "Certifications"],
    fullContent: `
      <div class="lead-text">
        <p>An industrial IoT company developing sensors for harsh manufacturing environments needed a manufacturing partner who could handle both the technical challenges of ruggedized electronics and the complexity of multi-market certifications. They needed a true one-stop solution.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 Technical Challenges</h4>
        <p>The sensors needed to operate reliably in extreme industrial conditions:</p>
        <ul class="check-list">
          <li>Temperature range: -40°C to +85°C for industrial environments</li>
          <li>IP67 rating: Protection against dust and water immersion</li>
          <li>Vibration resistance: Withstand typical industrial machinery vibration</li>
          <li>Multi-market certifications: FCC, CE, IC, MIC, RCM for global sales</li>
          <li>Rapid deployment: Five major markets simultaneously</li>
        </ul>
      </div>
      
      <h2>End-to-End Solution 🔧</h2>
      
      <div class="process-steps">
        <div class="step">
          <h4>1. Enclosure Design</h4>
          <p>Optimized enclosure design for IP67 sealing and thermal management, ensuring reliable operation across the full temperature range while maintaining cost efficiency.</p>
        </div>
        <div class="step">
          <h4>2. Component Selection</h4>
          <p>Industrial-grade component selection qualified for extended temperature range and harsh environments, with second-sourcing for supply chain resilience.</p>
        </div>
        <div class="step">
          <h4>3. Environmental Testing</h4>
          <p>Comprehensive testing including thermal cycling, IP67 validation, and vibration testing to ensure reliability in field conditions.</p>
        </div>
      </div>
      
      <h2>📊 Results</h2>
      
      <ul class="check-list">
        <li><strong>Five-market launch:</strong> Simultaneous product release in all target markets</li>
        <li><strong>On-schedule certifications:</strong> All regulatory approvals achieved as planned</li>
        <li><strong>Zero field failures:</strong> Proven reliability in demanding industrial environments</li>
        <li><strong>True one-stop solution:</strong> From design through certification and production</li>
        <li><strong>Accelerated time-to-market:</strong> Parallel certification process saved 3 months</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Industrial Excellence</h3>
        <p>This project showcases our ability to handle complex industrial products requiring both technical expertise and regulatory navigation. From enclosure design to multi-market certification, we delivered a complete solution that enabled our client's global expansion.</p>
      </div>
    `,
  },
  {
    id: "automotive-electronics",
    slug: "automotive-supply-chain-diversification",
    title: "Automotive Electronics Supplier",
    industry: "Automotive",
    challenge: "An automotive Tier 2 supplier needed to diversify their supply chain while maintaining IATF 16949 quality standards.",
    solution: "We established a dedicated production line in Indonesia with automotive-grade quality systems and supported their PPAP documentation requirements.",
    results: [
      { metric: "Supply Chain", value: "Diversified", description: "Global production capability" },
      { metric: "Quality Standard", value: "IATF 16949", description: "Automotive quality certification" },
      { metric: "Lead Time", value: "Reduced 40%", description: "With US warehouse stocking" },
    ],
    testimonial: "They understood automotive requirements from day one. No learning curve needed.",
    image: "/images/industry-automotive.jpg",
    tags: ["Automotive", "Quality", "Supply Chain"],
    fullContent: `
      <div class="lead-text">
        <p>An automotive Tier 2 supplier providing electronic control units to major OEMs recognized the need to diversify their supply chain. They required a manufacturing partner who understood automotive quality requirements and could support their PPAP documentation needs while maintaining IATF 16949 standards.</p>
      </div>
      
      <div class="highlight-box">
        <h4>💡 Automotive Challenges</h4>
        <p>The client faced several critical requirements:</p>
        <ul class="check-list">
          <li>Supply chain diversification for risk mitigation</li>
          <li>Maintain IATF 16949 quality standards globally</li>
          <li>PPAP documentation for OEM qualification</li>
          <li>Reduce lead times to US customers</li>
          <li>Full traceability and change management</li>
        </ul>
      </div>
      
      <h2>Automotive-Grade Solution 🚗</h2>
      
      <div class="process-steps">
        <div class="step">
          <h4>1. Dedicated Production Line</h4>
          <p>Established a dedicated production line in Indonesia configured to automotive-grade quality systems, ensuring consistent manufacturing processes and quality outputs.</p>
        </div>
        <div class="step">
          <h4>2. PPAP Support</h4>
          <p>Comprehensive PPAP documentation support including process flow diagrams, PFMEA, control plans, and dimensional reports for successful OEM qualification.</p>
        </div>
        <div class="step">
          <h4>3. US Warehouse Integration</h4>
          <p>Implemented US warehouse stocking program to reduce lead times and improve responsiveness to customer demand in the North American market.</p>
        </div>
      </div>
      
      <h2>📊 Results</h2>
      
      <ul class="check-list">
        <li><strong>Supply chain successfully diversified</strong> with qualified alternative production source</li>
        <li><strong>40% lead time reduction</strong> through strategic warehouse stocking</li>
        <li><strong>IATF 16949 standards maintained</strong> across all production locations</li>
        <li><strong>Full traceability and change management</strong> implemented</li>
        <li><strong>Improved market competitiveness</strong> through faster delivery times</li>
      </ul>
      
      <div class="conclusion-box">
        <h3>Automotive Excellence</h3>
        <p>This engagement demonstrates our ability to meet the rigorous quality and documentation requirements of the automotive industry. With deep understanding of automotive standards and global manufacturing capabilities, we help suppliers diversify and compete effectively.</p>
      </div>
    `,
  },
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

export default function CaseStudies() {
  return (
    <>
      <SEO
        title="Case Studies | Customer Success Stories | Illuminious"
        description="See how companies across industries have achieved success with Illuminious manufacturing services. Real results from consumer IoT, medical devices, industrial, and automotive."
        keywords="case studies, customer success, manufacturing success stories, electronics manufacturing"
        url="/case-studies"
      />
      <Header />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-illuminious-blue/10 text-illuminious-blue text-sm font-medium mb-6">
              <Award className="w-4 h-4" />
              Customer Success
            </span>
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-6">
              Real Results from Real Partnerships
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              See how companies across industries have leveraged our global manufacturing 
              network to achieve their goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { icon: TrendingUp, value: "35%", label: "Avg. Cost Savings" },
              { icon: Clock, value: "8 Weeks", label: "Avg. Time to Market" },
              { icon: Award, value: "99.5%", label: "Quality Rate" },
              { icon: DollarSign, value: "Minimal", label: "US Tariffs" },
            ].map((stat, index) => (
              <AnimatedSection key={stat.label} delay={index * 0.1}>
                <div className="text-center">
                  <div className="text-2xl md:text-3xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-white">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-8">
            {caseStudies.map((study, index) => (
              <AnimatedSection key={study.id} delay={index * 0.1}>
                <Link href={`/case-studies/${study.slug}`}>
                  <div className="group bg-white rounded-2xl border border-illuminious-light overflow-hidden hover:shadow-xl transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={study.image}
                        alt={study.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div className="p-6">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 rounded-full bg-illuminious-light text-illuminious-navy text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-bold text-illuminious-navy mb-2 group-hover:text-illuminious-blue transition-colors">
                        {study.title}
                      </h3>
                      <p className="text-sm text-illuminious-blue font-medium mb-3">{study.industry}</p>
                      <p className="text-muted-foreground text-sm line-clamp-2 mb-4">{study.challenge}</p>
                      
                      {/* Results Preview */}
                      <div className="grid grid-cols-3 gap-2 mb-4">
                        {study.results.map((result) => (
                          <div key={result.metric} className="text-center p-2 rounded-lg bg-illuminious-light/30">
                            <div className="text-sm font-bold text-illuminious-blue">{result.value}</div>
                            <div className="text-xs text-muted-foreground">{result.metric}</div>
                          </div>
                        ))}
                      </div>
                      
                      <div className="flex items-center text-illuminious-blue font-medium text-sm">
                        Read Full Case Study
                        <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </Link>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Write Your Success Story?
            </h2>
            <p className="text-lg text-white mb-8">
              Let's discuss how we can help you achieve similar results for your product.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8"
              >
                <Link href="/contact">
                  Start Your Project
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-illuminious-light/30 text-white hover:bg-white/10 rounded-full px-8"
              >
                <Link href="/factory-tour">Book a Factory Tour</Link>
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
