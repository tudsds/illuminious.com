import { Link } from "wouter";
import { motion } from "framer-motion";
import { Calendar, ArrowRight, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

export const newsItems = [
{
    id: 6,
    slug: "illuminious-indonesia-facility-iso-9001-certification",
    title: "Illuminious Achieves ISO 9001:2015 Certification for Indonesia Manufacturing Hub",
    excerpt: "Illuminious is proud to announce that its Batam, Indonesia manufacturing facility has officially achieved ISO 9001:2015 certification, reinforcing our commitment to global quality standards.",
    content: `<div class="lead-text">
  <p><strong>Batam, Indonesia — Illuminious LLC is proud to announce that its state-of-the-art manufacturing facility in the Batam Free Trade Zone has achieved ISO 9001:2015 certification.</strong> This internationally recognized milestone validates our rigorous Quality Management System (QMS) and our dedication to delivering defect-free AI hardware at scale.</p>
</div>

<div class="highlight-box">
  <h4>📋 Certification Highlights</h4>
  <ul class="check-list">
    <li><strong>Standard:</strong> ISO 9001:2015 (Quality Management Systems)</li>
    <li><strong>Location:</strong> Batam, Indonesia Manufacturing Hub</li>
    <li><strong>Scope:</strong> PCBA assembly, final box build, and full-system testing</li>
    <li><strong>Impact:</strong> Unified quality standards across all Illuminious global sites</li>
  </ul>
</div>

<h2>Commitment to Excellence 🛡️</h2>

<p>The ISO 9001:2015 certification is the gold standard for quality management. For our partners—ranging from stealth AI startups to global technology leaders—this certification provides an additional layer of assurance that their intellectual property and hardware products are handled with the highest degree of precision.</p>

<div class="feature-grid">
  <div class="feature-item">
    <h4>⚙️ Process Consistency</h4>
    <p>Standardized workflows across <strong>all shifts and production lines</strong>, ensuring every unit meets the exact same specifications.</p>
  </div>
  <div class="feature-item">
    <h4>📉 Continuous Improvement</h4>
    <p>Data-driven feedback loops that <strong>identify and mitigate potential defects</strong> before they impact the final assembly.</p>
  </div>
  <div class="feature-item">
    <h4>🤝 Customer Satisfaction</h4>
    <p>A structured approach to <strong>feedback and performance tracking</strong>, aligning our operations with client success metrics.</p>
  </div>
  <div class="feature-item">
    <h4>📦 Supply Chain Integrity</h4>
    <p>Rigorous <strong>vendor qualification and incoming material inspection</strong> protocols to ensure component reliability.</p>
  </div>
</div>

<div class="quote-box">
  <blockquote>
    <p>"Achieving ISO 9001 certification in Indonesia within our first year of full operation is a testament to the hard work of our Batam team. It ensures that whether we are manufacturing in China or Indonesia, our clients receive the same world-class reliability and technical precision."</p>
  </blockquote>
  <cite>— Angela Lee, COO at Illuminious</cite>
</div>

<div class="conclusion-box">
  <h3>Ready for Scale</h3>
  <p>As we continue to expand our "U.S. Plus Two" manufacturing model, quality remains our North Star. <strong>Contact us today</strong> to learn more about our certified manufacturing capabilities and how we can support your next product launch.</p>
</div>`,
    publishedAt: new Date("2026-02-11"),
    readTime: 4,
    authorName: "Illuminious Team",
    featuredImage: "/images/news-indonesia-iso-9001.jpg",
    category: "Company News",
  },
{
    id: 3,
    slug: "illuminious-expands-indonesia-ai-wearable-lines",
    title: "Illuminious Expands High-Tech Production Lines in Indonesia to Support Global AI Wearable Surge",
    excerpt: "Illuminious announces the addition of four new ISO 7 cleanroom assembly lines in its Indonesia facility, specifically designed for high-precision AI hardware and smart wearables.",
    content: `<div class="lead-text">
  <p><strong>Batam, Indonesia — Illuminious LLC is proud to announce a major expansion of its Southeast Asian manufacturing footprint</strong> with the commissioning of four additional state-of-the-art cleanroom assembly lines. This development directly addresses the skyrocketing global demand for high-precision AI hardware and smart wearable devices.</p>
</div>

<div class="highlight-box">
  <h4>📋 Key Expansion Details</h4>
  <ul class="check-list">
    <li><strong>What:</strong> 15,000 sq ft addition of ISO 7 (Class 10,000) cleanroom space</li>
    <li><strong>When:</strong> Operations commenced February 2026</li>
    <li><strong>Capabilities:</strong> Advanced SMT, micro-assembly, and acoustic testing for AI pendants and glasses</li>
    <li><strong>Impact:</strong> 40% increase in regional production capacity</li>
  </ul>
</div>

<div class="quote-box">
  <blockquote>
    <p>"Our Indonesia facility is a cornerstone of our 'U.S. Plus Two' strategy—US-based management combined with global manufacturing reach including China. This expansion allows our US and European partners to scale their AI hardware innovations rapidly while benefiting from significant tariff optimizations and a robust local supply chain."</p>
  </blockquote>
  <cite>— Angela Lee, COO at Illuminious</cite>
</div>

<div class="feature-grid">
  <div class="feature-item">
    <h4>🛡️ Advanced IP Silos</h4>
    <p>Enhanced physical and digital security protocols implemented for secure multi-client manufacturing environments.</p>
  </div>
  <div class="feature-item">
    <h4>🌱 Sustainable Energy</h4>
    <p>The expansion is powered by a new rooftop solar array, aligning with our 2026 carbon neutrality goals.</p>
  </div>
</div>

<div class="conclusion-box">
  <h3>Scaling into the Future</h3>
  <p>As the AI hardware revolution accelerates, Illuminious remains committed to providing the agile, secure, and cost-effective manufacturing infrastructure our clients need to lead the market. <strong>Contact us for a facility tour today.</strong></p>
</div>`,
    publishedAt: new Date("2026-02-09"),
    readTime: 8,
    authorName: "Illuminious Team",
    featuredImage: "/images/news-indonesia-facility-expansion.jpg",
    category: "Operations",
  },
{
    id: 1,
    slug: "illuminious-opens-new-smart-factory-in-vietnam",
    title: "Illuminious Opens New Smart Factory in Vietnam to Expand Global Capacity",
    excerpt: "Illuminious has opened a new smart factory in Hanoi, Vietnam, to expand its global production capacity. The facility will leverage advanced technologies like AI and IIoT, creating over 500 new jobs and reinforcing Vietnam's position as a high-tech manufacturing hub.",
    content: `<div class="lead-text"><p>Illuminious, a global leader in advanced manufacturing solutions, today announced the opening of its new state-of-the-art smart factory in Hanoi, Vietnam. This strategic expansion is set to significantly boost the company's global production capacity and leverage Vietnam's rapidly growing manufacturing ecosystem.</p></div><div class="highlight-box"><h4>A Commitment to Industry 4.0</h4><p>The new facility is a cornerstone of Illuminious's commitment to Industry 4.0 principles, integrating cutting-edge technologies such as the Industrial Internet of Things (IIoT), artificial intelligence (AI), and collaborative robotics (cobots). These advancements will enable real-time data analysis, predictive maintenance, and highly automated production lines, ensuring superior efficiency, quality, and agility.</p></div><div class="quote-box"><blockquote>Vietnam's dynamic economy, skilled workforce, and strategic location make it an ideal hub for our continued global expansion. This new smart factory will not only allow us to better serve our customers worldwide but also contribute to the development of Vietnam's high-tech manufacturing sector.</blockquote><cite>Ethan Yip, CTO at Illuminious</cite></div><div class="feature-grid"><div class="feature-item"><h4>Strategic Location</h4><p>Vietnam's proximity to key global supply chains and markets provides a significant logistical advantage.</p></div><div class="feature-item"><h4>Favorable Investment Climate</h4><p>The Vietnamese government's proactive policies and incentives for foreign investment create a welcoming business environment.</p></div><div class="feature-item"><h4>Skilled Workforce</h4><p>A young, educated, and increasingly skilled workforce is ready to support high-tech manufacturing.</p></div></div><div class="benefits-grid"><div class="benefit"><h4>Increased Capacity</h4><p>The new factory will substantially increase Illuminious's global production output.</p></div><div class="benefit"><h4>Enhanced Efficiency</h4><p>Smart factory technologies will streamline operations and reduce production costs.</p></div><div class="benefit"><h4>Improved Quality</h4><p>Advanced automation and quality control systems will ensure the highest product standards.</p></div></div><div class="process-steps"><div class="process-step"><h4>Job Creation</h4><p>The factory will create hundreds of jobs for local engineers and technicians, boosting the local economy.</p></div><div class="process-step"><h4>Talent Development</h4><p>Illuminious will invest in training and development programs to upskill the local workforce in advanced manufacturing.</p></div><div class="process-step"><h4>Sustainable Growth</h4><p>The facility will operate with a focus on sustainability, minimizing its environmental impact.</p></div></div><div class="stats-row"><div class="stat-item"><h3>+20%</h3><p>Increase in Global Capacity</p></div><div class="stat-item"><h3>500+</h3><p>New Local Jobs</p></div><div class="stat-item"><h3>$150M</h3><p>Investment in Vietnam</p></div></div><p>This investment marks a significant milestone for both Illuminious and Vietnam, heralding a new era of advanced manufacturing and economic partnership.</p>`,
    publishedAt: new Date(),
    readTime: 8,
    authorName: "Illuminious Team",
    featuredImage: "/images/DEPLOYED_industry-automotive.jpg",
    category: "Company News",
  },
{
    id: 2,
    slug: "illuminious-partners-with-ai-startup-for-smart-glasses",
    title: "Illuminious Partners with AI Startup to Manufacture Next-Gen Smart Glasses",
    excerpt: "A strategic partnership to produce a revolutionary line of next-generation smart glasses, leveraging world-class manufacturing and cutting-edge AI technology.",
    content: `<div class="lead-text"><p>Illuminious, a global leader in manufacturing and supply chain solutions, today announced a strategic partnership with Cerebrum, a pioneering AI startup, to produce a revolutionary line of next-generation smart glasses. This collaboration will leverage Illuminious's world-class manufacturing capabilities and Cerebrum's cutting-edge AI technology to bring to market a product that promises to redefine the wearables industry.</p></div><div class="quote-box"><blockquote>This partnership marks a significant milestone in the evolution of wearable technology. By combining our expertise in large-scale manufacturing with Cerebrum's innovative approach to AI, we are poised to create a truly transformative product.</blockquote><cite>Angela Lee, COO at Illuminious</cite></div><div class="feature-grid"><div class="feature-item"><h4>Advanced AI Integration</h4><p>Cerebrum's proprietary AI engine will power the smart glasses, offering users a seamless and intuitive experience. The AI will learn from user behavior and provide personalized assistance, from real-time language translation to augmented reality navigation.</p></div><div class="feature-item"><h4>State-of-the-Art Manufacturing</h4><p>Illuminious will dedicate a new, state-of-the-art production line to the smart glasses. This facility will feature the latest in automated assembly and quality control, ensuring that every pair of glasses meets the highest standards of excellence.</p></div></div><div class="benefits-grid"><div class="benefit"><h5>For Consumers</h5><p>The smart glasses will offer a wide range of features designed to enhance daily life, including hands-free communication, fitness tracking, and immersive entertainment.</p></div><div class="benefit"><h5>For Businesses</h5><p>The partnership will also produce an enterprise edition of the smart glasses, designed to improve productivity and safety in a variety of industries, from logistics and manufacturing to healthcare and retail.</p></div></div>`,
    publishedAt: new Date(),
    readTime: 8,
    authorName: "Illuminious Team",
    featuredImage: "/images/DEPLOYED_news-illuminious-opens-new-smart-factory-in-vietnam.jpg",
    category: "Company News",
  },
  {
    id: 1,
    slug: "illuminious-achieves-iso-14001-certification",
    title: "Illuminious Achieves ISO 14001 Environmental Management Certification",
    excerpt: "We are proud to announce that Illuminious has achieved ISO 14001:2015 certification, demonstrating our commitment to sustainable manufacturing practices and environmental responsibility across all our global facilities.",
    content: `
      <div class="lead-text">
        <p><strong>Illuminious is proud to announce that we have achieved ISO 14001:2015 certification</strong> for our Environmental Management System (EMS) across all global manufacturing facilities. This prestigious certification recognizes our commitment to sustainable manufacturing practices, environmental responsibility, and continuous improvement in our operations.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Key Details</h4>
        <ul class="check-list">
          <li><strong>What:</strong> ISO 14001:2015 Environmental Management System certification achieved</li>
          <li><strong>When:</strong> Certification completed January 2026, effective immediately</li>
          <li><strong>Where:</strong> All global manufacturing facilities in Indonesia, Vietnam, and Mexico</li>
          <li><strong>Impact:</strong> Enhanced sustainability credentials for customers and partners</li>
        </ul>
      </div>
      
      <h2>What This Certification Means 🌱</h2>
      
      <p>ISO 14001 is the internationally recognized standard for Environmental Management Systems. Achieving this certification required a comprehensive audit of our environmental practices, including:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>♻️ Waste Reduction Programs</h4>
          <p><strong>Zero-waste-to-landfill initiatives</strong> at all facilities, with comprehensive recycling and material recovery systems in place.</p>
        </div>
        <div class="feature-item">
          <h4>⚡ Energy Efficiency</h4>
          <p><strong>30% reduction in energy consumption</strong> through LED lighting, smart HVAC systems, and equipment modernization.</p>
        </div>
        <div class="feature-item">
          <h4>💧 Water Conservation</h4>
          <p><strong>Closed-loop water systems</strong> and advanced wastewater treatment ensuring responsible water usage.</p>
        </div>
        <div class="feature-item">
          <h4>📊 Continuous Monitoring</h4>
          <p><strong>Real-time tracking</strong> of environmental metrics with quarterly sustainability reporting to stakeholders.</p>
        </div>
      </div>
      
      <h2>Benefits for Our Customers 🤝</h2>
      
      <p>This certification delivers tangible benefits to our partners and customers:</p>
      
      <ul class="check-list">
        <li><strong>Enhanced ESG credentials:</strong> Partnering with an ISO 14001-certified manufacturer strengthens your sustainability story</li>
        <li><strong>Regulatory compliance:</strong> Meet growing environmental requirements in EU, California, and other jurisdictions</li>
        <li><strong>Risk mitigation:</strong> Reduced environmental risk in your supply chain</li>
        <li><strong>Carbon footprint reduction:</strong> Lower Scope 3 emissions through efficient manufacturing processes</li>
        <li><strong>Marketing advantage:</strong> "Manufactured in ISO 14001-certified facilities" claim support</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"Achieving ISO 14001 certification is a significant milestone that reflects our genuine commitment to environmental stewardship. Our customers can be confident that their products are manufactured with sustainability as a core priority, not an afterthought."</p>
        </blockquote>
        <cite>— Angela Lee, COO at Illuminious</cite>
      </div>
      
      <h2>Our Sustainability Journey 🚀</h2>
      
      <p>This certification represents the culmination of an 18-month journey to transform our environmental practices. Key milestones included:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Phase 1: Assessment</span>
          <p><strong>Comprehensive environmental audit:</strong> Baseline measurement of energy, water, waste, and emissions across all facilities.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 2: Implementation</span>
          <p><strong>System upgrades and training:</strong> New equipment, process improvements, and staff training on environmental procedures.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 3: Certification</span>
          <p><strong>Third-party audit:</strong> Independent certification body verification of our Environmental Management System.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 4: Continuous Improvement</span>
          <p><strong>Ongoing commitment:</strong> Annual surveillance audits and continuous improvement programs to maintain certification.</p>
        </div>
      </div>
      
      <h2>Looking Ahead 🌟</h2>
      
      <p>ISO 14001 certification is not the end of our sustainability journey—it's a foundation for continued improvement. We have established ambitious goals for 2026-2027:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>🎯 Carbon Neutrality</h5>
          <p>Achieve carbon-neutral operations by 2027 through renewable energy and offset programs.</p>
        </div>
        <div class="benefit">
          <h5>📈 50% Waste Reduction</h5>
          <p>Further reduce manufacturing waste intensity by 50% compared to 2024 baseline.</p>
        </div>
        <div class="benefit">
          <h5>☀️ Renewable Energy</h5>
          <p>Transition to 100% renewable electricity across all facilities by 2026.</p>
        </div>
        <div class="benefit">
          <h5>🌊 Water Positive</h5>
          <p>Implement water replenishment projects to become water-positive by 2028.</p>
        </div>
        <div class="benefit">
          <h5>♻️ Circular Economy</h5>
          <p>Expand product take-back and component recovery programs for end-of-life devices.</p>
        </div>
        <div class="benefit">
          <h5>📊 Transparency</h5>
          <p>Publish annual sustainability reports with detailed environmental metrics.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Partner With a Sustainable Manufacturer</h3>
        <p>As environmental regulations tighten and consumers demand more sustainable products, partnering with an ISO 14001-certified manufacturer gives you a competitive advantage. <strong>Contact us today</strong> to learn how our certified sustainable manufacturing can support your product goals.</p>
      </div>
    `,
    publishedAt: new Date("2026-02-06"),
    readTime: 5,
    featuredImage: "/images/DEPLOYED_backup-smt-reflow-speaker-pcb-14.jpg",
    category: "Company News",
  },
  {
    id: 3,
    slug: "illuminious-expands-manufacturing-capacity",
    title: "Illuminious Expands Manufacturing Capacity in Southeast Asia",
    excerpt: "We are excited to announce a significant expansion of our manufacturing capabilities in the Batam Free Trade Zone, Indonesia. This expansion includes a new 50,000 sq ft facility dedicated to high-volume electronics assembly.",
    content: `
      <div class="lead-text">
        <p><strong>Illuminious is proud to announce a significant expansion of our manufacturing capabilities</strong> in the Batam Free Trade Zone, Indonesia. This strategic investment represents our commitment to providing world-class manufacturing services to our growing customer base and supporting the increasing demand for diversified production options.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Key Details</h4>
        <ul class="check-list">
          <li><strong>What:</strong> New 50,000 sq ft manufacturing facility in Batam Free Trade Zone</li>
          <li><strong>When:</strong> Facility operational starting January 2026</li>
          <li><strong>Where:</strong> Batam, Indonesia—strategic location for Asian markets</li>
          <li><strong>Impact:</strong> 40% increase in total production capacity</li>
        </ul>
      </div>
      
      <h2>World-Class Facility Features 🏭</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🔧 Advanced SMT Lines</h4>
          <p><strong>State-of-the-art SMT lines</strong> with 0201 component capability and high-speed placement for complex PCB assemblies.</p>
        </div>
        <div class="feature-item">
          <h4>🧼 Clean Room Space</h4>
          <p><strong>Dedicated ISO Class 7 clean room</strong> specifically designed for medical device and sensitive electronics assembly.</p>
        </div>
        <div class="feature-item">
          <h4>🔍 Quality Systems</h4>
          <p><strong>Advanced AOI and X-ray inspection</strong> systems ensuring the highest quality standards for all production.</p>
        </div>
        <div class="feature-item">
          <h4>📦 Expanded Capabilities</h4>
          <p><strong>Enhanced box build and system integration</strong> capacity for complete product assembly and testing.</p>
        </div>
      </div>
      
      <h2>Strategic Benefits for Customers 🤝</h2>
      
      <ul class="check-list">
        <li><strong>Supply chain diversification:</strong> Additional production location reduces geographic risk</li>
        <li><strong>Faster lead times:</strong> Strategic location enables quicker delivery to Asian markets</li>
        <li><strong>Cost optimization:</strong> Batam Free Trade Zone offers competitive operational costs</li>
        <li><strong>Scalability:</strong> Room for future expansion as customer demand grows</li>
        <li><strong>Quality consistency:</strong> Same rigorous standards across all Illuminious facilities</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"This expansion reflects our confidence in the continued growth of the electronics manufacturing sector and our commitment to being a reliable, long-term partner for our customers. The Batam facility positions us to better serve the growing Asian market while maintaining our global quality standards."</p>
        </blockquote>
        <cite>— Ethan Yip, CTO at Illuminious</cite>
      </div>
      
      <h2>Why Batam Free Trade Zone? 🌏</h2>
      
      <p>The Batam Free Trade Zone location provides significant strategic advantages:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Trade Benefits</span>
          <p><strong>Duty-free import of components:</strong> Significant cost savings on raw materials and components from global suppliers.</p>
        </div>
        <div class="criterion">
          <span class="badge">Logistics Hub</span>
          <p><strong>Strategic location:</strong> Proximity to Singapore port and major Asian shipping routes enables efficient global distribution.</p>
        </div>
        <div class="criterion">
          <span class="badge">Quality Workforce</span>
          <p><strong>Skilled labor pool:</strong> Access to experienced electronics manufacturing talent in the region.</p>
        </div>
        <div class="criterion">
          <span class="badge">Trade Agreements</span>
          <p><strong>Preferential access:</strong> Beneficial trade relationships with major markets including ASEAN, China, and others.</p>
        </div>
      </div>
      
      <h2>Timeline and Next Steps 📅</h2>
      
      <p>The new facility has completed construction and is now fully operational. Production ramp-up will occur throughout Q1 2026, with full capacity expected by Q2 2026.</p>
      
      <div class="conclusion-box">
        <h3>Expanding Together</h3>
        <p>With this expansion, Illuminious is well-positioned to support the growing demand for electronics manufacturing services from innovative companies worldwide. <strong>Contact our team</strong> to learn how the Batam facility can support your production needs.</p>
      </div>
    `,
    publishedAt: new Date("2026-01-15"),
    readTime: 3,
    featuredImage: "/images/DEPLOYED_news-img-3.jpg",
    category: "Company News",
  },
  {
    id: 4,
    slug: "partnership-with-future-factory",
    title: "Strategic Partnership with Future Factory Announced",
    excerpt: "Illuminious partners with Future Factory to enhance AI hardware manufacturing capabilities and startup support services, creating a comprehensive ecosystem for hardware innovation.",
    content: `
      <div class="lead-text">
        <p><strong>Illuminious is pleased to announce a strategic partnership with Future Factory</strong>, a leading hardware accelerator focused on AI and emerging technology products. This collaboration brings together manufacturing excellence and startup ecosystem expertise to create a comprehensive support system for hardware innovators.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Partnership Overview</h4>
        <ul class="check-list">
          <li><strong>Who:</strong> Illuminious + Future Factory (leading hardware accelerator)</li>
          <li><strong>What:</strong> Strategic partnership for startup manufacturing support</li>
          <li><strong>When:</strong> Partnership effective immediately, January 2026</li>
          <li><strong>Impact:</strong> Streamlined pathway from prototype to production for startups</li>
        </ul>
      </div>
      
      <h2>Partnership Benefits 🎯</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>💰 Preferential Terms</h4>
          <p><strong>Exclusive manufacturing rates</strong> for Future Factory portfolio companies, reducing costs for early-stage startups.</p>
        </div>
        <div class="feature-item">
          <h4>🚀 Dedicated NPI Support</c/h4>
          <p><strong>Specialized new product introduction</strong> support designed for early-stage hardware development.</p>
        </div>
        <div class="feature-item">
          <h4>🎓 Joint Workshops</h4>
          <p><strong>DFM workshops and engineering resources</strong> to help startups optimize designs for manufacturing.</p>
        </div>
        <div class="feature-item">
          <h4>⚡ Fast-Track Pathway</h4>
          <p><strong>Streamlined prototype-to-production</strong> process reducing time to market for innovative products.</p>
        </div>
      </div>
      
      <h2>Shared Vision for Innovation 💡</h2>
      
      <p>This partnership reflects our shared commitment to supporting hardware innovation. By combining Future Factory's startup expertise with Illuminious's manufacturing capabilities, we create a powerful ecosystem for bringing new products to market:</p>
      
      <ul class="check-list">
        <li><strong>End-to-end support:</strong> From concept validation through mass production</li>
        <li><strong>Technical mentorship:</strong> Access to Illuminious engineering expertise for design optimization</li>
        <li><strong>Scalable manufacturing:</strong> Growth-ready production capacity as startups scale</li>
        <li><strong>Global reach:</strong> Multi-region manufacturing options for market expansion</li>
        <li><strong>Quality assurance:</strong> ISO-certified processes from day one</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"This partnership bridges the critical gap between innovative hardware concepts and scalable manufacturing. By combining Future Factory's startup acceleration expertise with Illuminious's world-class manufacturing capabilities, we're creating a seamless pathway for founders to turn their vision into reality."</p>
        </blockquote>
        <cite>— Jennifer Lee, Managing Director at Future Factory</cite>
      </div>
      
      <h2>Program Structure 📋</h2>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Phase 1: Selection</span>
          <p><strong>Accelerator application:</strong> Startups apply through Future Factory's standard program with manufacturing needs assessment.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 2: Design Review</span>
          <p><strong>DFM consultation:</strong> Joint Illuminious-Future Factory design review to optimize for manufacturability.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 3: Prototyping</strong></span>
          <p><strong>Rapid iteration:</strong> Fast-turn prototypes with immediate engineering feedback.</p>
        </div>
        <div class="criterion">
          <span class="badge">Phase 4: Production</span>
          <p><strong>Seamless scaling:</strong> Direct pathway from pilot to mass production with preferential terms.</p>
        </div>
      </div>
      
      <h2>How to Participate 🚀</h2>
      
      <p>Startups interested in leveraging this partnership have two pathways:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>🎓 Accelerator Route</h5>
          <p>Apply through Future Factory's accelerator program for comprehensive support including funding, mentorship, and manufacturing.</p>
        </div>
        <div class="benefit">
          <h5>🏭 Direct Manufacturing</h5>
          <p>Contact Illuminious directly if you have immediate manufacturing needs and want to explore partnership benefits.</p>
        </div>
        <div class="benefit">
          <h5>📅 Office Hours</h5>
          <p>Monthly virtual office hours with Illuminious engineers for design feedback and manufacturing guidance.</p>
        </div>
        <div class="benefit">
          <h5>📚 Resources</h5>
          <p>Access to joint DFM guides, manufacturing best practices, and startup-focused educational content.</p>
        </div>
        <div class="benefit">
          <h5>🌐 Network</h5>
          <p>Connection to broader hardware startup ecosystem including investors, suppliers, and fellow founders.</p>
        </div>
        <div class="benefit">
          <h5>⚡ Priority Support</h5>
          <p>Expedited response times and dedicated support channels for Future Factory portfolio companies.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Building the Future Together</h3>
        <p>We believe that by combining Future Factory's startup acceleration expertise with Illuminious's manufacturing capabilities, we can help more hardware startups successfully bring innovative products to market. <strong>Ready to scale your hardware startup?</strong> Apply to Future Factory's accelerator or contact us directly to learn more about partnership benefits.</p>
      </div>
    `,
    publishedAt: new Date("2026-01-10"),
    readTime: 4,
    featuredImage: "/images/DEPLOYED_news-img-4.jpg",
    category: "Partnership",
  },
  {
    id: 5,
    slug: "new-us-warehouse-facility",
    title: "New US Warehouse Facility Now Operational",
    excerpt: "Our new state-of-the-art fulfillment center in Los Angeles is now fully operational, enabling faster delivery times and improved inventory management for North American customers.",
    content: `
      <div class="lead-text">
        <p><strong>Illuminious is excited to announce that our new US warehouse and fulfillment center in Los Angeles is now fully operational.</strong> This facility represents a significant investment in our North American operations and delivers substantial benefits for customers seeking faster delivery times and improved inventory management.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Facility Highlights</h4>
        <ul class="check-list">
          <li><strong>Size:</strong> 20,000 sq ft of modern warehouse and fulfillment space</li>
          <li><strong>Location:</strong> Los Angeles, California—strategic West Coast hub</li>
          <li><strong>Shipping:</strong> Same-day shipping for orders before 2 PM PST</li>
          <li><strong>Technology:</strong> Real-time inventory visibility and management</li>
        </ul>
      </div>
      
      <h2>Comprehensive Capabilities 📦</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🚚 Rapid Fulfillment</h4>
          <p><strong>Same-day shipping</strong> for orders placed before 2 PM PST, with next-day delivery available to most US locations.</p>
        </div>
        <div class="feature-item">
          <h4>📊 Real-Time Visibility</h4>
          <p><strong>Customer portal access</strong> provides 24/7 visibility into inventory levels, order status, and shipment tracking.</p>
        </div>
        <div class="feature-item">
          <h4>🔧 Value-Added Services</h4>
          <p><strong>Kitting and light assembly</strong> services available for complex product configurations.</p>
        </div>
        <div class="feature-item">
          <h4>🔄 Returns Management</h4>
          <p><strong>Efficient returns processing</strong> with quality inspection and refurbishment capabilities.</p>
        </div>
      </div>
      
      <h2>Customer Benefits 🎯</h2>
      
      <ul class="check-list">
        <li><strong>Reduced lead times:</strong> Products manufactured overseas can be pre-positioned for rapid US fulfillment</li>
        <li><strong>Lower shipping costs:</strong> Domestic shipping rates vs. international air freight</li>
        <li><strong>Improved inventory management:</strong> Real-time visibility helps optimize stock levels</li>
        <li><strong>Enhanced customer experience:</strong> Faster delivery improves end-customer satisfaction</li>
        <li><strong>Supply chain resilience:</strong> US-based inventory buffer against global disruptions</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"The Los Angeles facility is a game-changer for our North American customers. By pre-positioning inventory closer to end markets, we're able to offer delivery times that compete with domestic manufacturers while maintaining the cost advantages of our global production network."</p>
        </blockquote>
        <cite>— David Park, VP of Supply Chain at Illuminious</cite>
      </div>
      
      <h2>Integrated Operations 🔗</h2>
      
      <p>The US warehouse is fully integrated with our global manufacturing operations through our unified ERP system, providing:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Seamless Visibility</span>
          <p><strong>End-to-end tracking:</strong> Complete visibility from production through final delivery across all facilities.</p>
        </div>
        <div class="criterion">
          <span class="badge">Demand Planning</span>
          <p><strong>Intelligent forecasting:</strong> Data-driven inventory positioning based on customer demand patterns.</p>
        </div>
        <div class="criterion">
          <span class="badge">Quality Consistency</span>
          <p><strong>Same standards:</strong> Identical quality processes and inspection criteria across all locations.</p>
        </div>
        <div class="criterion">
          <span class="badge">Flexible Operations</span>
          <p><strong>Scalable capacity:</strong> Ability to adjust warehouse operations based on seasonal demand.</p>
        </div>
      </div>
      
      <h2>Strategic Location Benefits 🌎</h2>
      
      <p>The Los Angeles location was selected for several strategic advantages:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>✈️ Port Access</h5>
          <p>Proximity to Port of Los Angeles and Long Beach for efficient import from Asian manufacturing.</p>
        </div>
        <div class="benefit">
          <h5>🚛 Distribution Hub</h5>
          <p>Central location for efficient distribution to major US markets via ground transportation.</p>
        </div>
        <div class="benefit">
          <h5>📦 Last-Mile</h5>
          <p>Optimal positioning for last-mile delivery to West Coast customers.</p>
        </div>
        <div class="benefit">
          <h5>🌐 Trade Zone</h5>
          <p>Foreign Trade Zone capabilities for duty deferral and streamlined customs.</p>
        </div>
        <div class="benefit">
          <h5>👥 Workforce</h5>
          <p>Access to experienced logistics and fulfillment professionals.</p>
        </div>
        <div class="benefit">
          <h5>🔧 Ecosystem</h5>
          <p>Proximity to tech and manufacturing ecosystem in Southern California.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Get Started Today</h3>
        <p>The Los Angeles facility is now accepting inventory and processing orders. <strong>Contact our team</strong> to discuss how US warehouse stocking can reduce your lead times and improve your customer experience.</p>
      </div>
    `,
    publishedAt: new Date("2026-01-05"),
    readTime: 2,
    featuredImage: "/images/DEPLOYED_about-overseas-warehouse.jpg",
    category: "Operations",
  },
  {
    id: 4,
    slug: "iso-13485-certification-achieved",
    title: "Illuminious Achieves ISO 13485 Certification for Medical Devices",
    excerpt: "Our manufacturing facilities have successfully achieved ISO 13485:2016 certification, enabling us to serve medical device customers with the highest quality standards.",
    content: `
      <div class="lead-text">
        <p><strong>Illuminious is proud to announce that our manufacturing facilities have achieved ISO 13485:2016 certification</strong>, the international standard for medical device quality management systems. This achievement marks a significant milestone in our commitment to serving the medical device industry with the highest quality standards.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Certification Details</h4>
        <ul class="check-list">
          <li><strong>What:</strong> ISO 13485:2016 Medical Device Quality Management System certification</li>
          <li><strong>When:</strong> Certification achieved December 2025</li>
          <li><strong>Scope:</strong> All global manufacturing facilities</li>
          <li><strong>Impact:</strong> Full capability to serve medical device customers worldwide</li>
        </ul>
      </div>
      
      <h2>What ISO 13485 Means for Our Customers 🏥</h2>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>✅ Regulatory Compliance</h4>
          <p><strong>FDA and international alignment:</strong> Systems designed to meet FDA 21 CFR Part 820 and international medical device regulations.</p>
        </div>
        <div class="feature-item">
          <h4>📋 Risk Management</h4>
          <p><strong>Risk-based approach:</strong> Comprehensive risk management throughout product development and manufacturing processes.</p>
        </div>
        <div class="feature-item">
          <h4>🔍 Full Traceability</h4>
          <p><strong>Complete genealogy:</strong> Component-level traceability from raw materials through finished medical devices.</p>
        </div>
        <div class="feature-item">
          <h4>📝 Documentation Control</h4>
          <p><strong>Comprehensive records:</strong> Complete documentation control supporting regulatory submissions and audits.</p>
        </div>
      </div>
      
      <h2>Our Commitment to Medical Device Quality 💊</h2>
      
      <p>ISO 13485 certification demonstrates our unwavering commitment to:</p>
      
      <ul class="check-list">
        <li><strong>Consistent quality management:</strong> Rigorous quality systems ensuring consistent product quality</li>
        <li><strong>Patient safety:</strong> Manufacturing practices that prioritize patient and end-user safety</li>
        <li><strong>Regulatory excellence:</strong> Systems designed to meet evolving global medical device regulations</li>
        <li><strong>Continuous improvement:</strong> Ongoing investment in quality systems and capabilities</li>
        <li><strong>Supply chain integrity:</strong> Qualified supplier programs ensuring component quality</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"Achieving ISO 13485 certification represents our commitment to becoming a premier partner for medical device companies worldwide. This certification validates our quality systems and positions us to support innovative medical technology companies from prototype through scale production."</p>
        </blockquote>
        <cite>— Dr. Robert Kim, VP of Quality at Illuminious</cite>
      </div>
      
      <h2>Expanded Capabilities 🚀</h2>
      
      <p>With this certification, we can now support medical device customers through the entire product lifecycle:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">Design & Development</span>
          <p><strong>Collaborative R&D:</strong> Work with your engineering team on DfM and DfA for medical devices.</p>
        </div>
        <div class="criterion">
          <span class="badge">Regulatory Support</span>
          <p><strong>Documentation assistance:</strong> Support for 510(k), CE Mark, and other regulatory submissions.</p>
        </div>
        <div class="criterion">
          <span class="badge">Manufacturing</span>
          <p><strong>Clean room production:</strong> ISO Class 7 clean room facilities for sensitive medical assembly.</p>
        </div>
        <div class="criterion">
          <span class="badge">Post-Market</span>
          <p><strong>Ongoing compliance:</strong> Support for vigilance reporting and post-market surveillance.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Your Trusted Medical Device Partner</h3>
        <p>ISO 13485 certification is a testament to our commitment to quality in the medical device industry. <strong>Contact our medical device team</strong> to discuss how we can support your next medical technology product.</p>
      </div>
    `,
    publishedAt: new Date("2025-12-20"),
    readTime: 3,
    featuredImage: "/images/DEPLOYED_placeholder-medical-device-assembly.jpg",
    category: "Certification",
  },
  {
    id: 5,
    slug: "q4-2025-industry-outlook",
    title: "Q4 2025 Electronics Manufacturing Industry Outlook",
    excerpt: "Our analysis of key trends shaping the electronics manufacturing industry, including supply chain developments, technology advances, and market dynamics.",
    content: `
      <div class="lead-text">
        <p><strong>As we close out 2025, the electronics manufacturing industry continues to evolve rapidly.</strong> This outlook examines key trends and developments that will shape the industry in the coming year, from supply chain strategies to technological innovation.</p>
      </div>
      
      <div class="highlight-box">
        <h4>📋 Key Takeaways</h4>
        <ul class="check-list">
          <li><strong>Supply chain diversification:</strong> Companies prioritizing multi-region manufacturing strategies</li>
          <li><strong>Technology acceleration:</strong> AI and automation transforming manufacturing quality and efficiency</li>
          <li><strong>Sustainability focus:</strong> ESG compliance becoming a competitive advantage</li>
          <li><strong>Strong sector growth:</strong> IoT, medical devices, and automotive leading demand</li>
        </ul>
      </div>
      
      <h2>Supply Chain Trends 📦</h2>
      
      <p>The electronics manufacturing supply chain continues to transform in response to geopolitical dynamics and market demands:</p>
      
      <div class="feature-grid">
        <div class="feature-item">
          <h4>🌍 Geographic Diversification</h4>
          <p><strong>Multi-region strategies:</strong> Companies increasingly adopting "China+1" and other diversification approaches to reduce risk.</p>
        </div>
        <div class="feature-item">
          <h4>🔗 Supply Chain Resilience</h4>
          <p><strong>Redundancy built in:</strong> Dual-sourcing and strategic inventory buffers becoming standard practice.</p>
        </div>
        <div class="feature-item">
          <h4>📱 Digital Transformation</h4>
          <p><strong>Smart supply chains:</strong> AI-powered demand forecasting and real-time visibility tools adoption accelerating.</p>
        </div>
        <div class="feature-item">
          <h4>♻️ Sustainability Integration</h4>
          <p><strong>ESG-driven sourcing:</strong> Environmental and social governance requirements increasingly influencing supplier selection.</p>
        </div>
      </div>
      
      <h2>Technology Advances ⚡</h2>
      
      <p>Manufacturing technology continues to advance, enabling new capabilities and improving efficiency:</p>
      
      <ul class="check-list">
        <li><strong>AI-powered inspection:</strong> Computer vision and machine learning for 100% quality inspection</li>
        <li><strong>Advanced automation:</strong> Robotics and cobots improving productivity and consistency</li>
        <li><strong>Smart factories:</strong> IoT sensors and digital twins optimizing production processes</li>
        <li><strong>Advanced materials:</strong> New substrates and components enabling miniaturization and performance gains</li>
        <li><strong>Sustainable manufacturing:</strong> Energy-efficient equipment and processes reducing environmental impact</li>
      </ul>
      
      <div class="quote-box">
        <blockquote>
          <p>"2025 has been a pivotal year for electronics manufacturing. Companies that have invested in supply chain resilience and advanced manufacturing capabilities are well-positioned for continued growth. The winners in our industry will be those who can balance cost, quality, speed, and sustainability."</p>
        </blockquote>
        <cite>— Ethan Yip, CTO at Illuminious</cite>
      </div>
      
      <h2>Market Dynamics 📈</h2>
      
      <p>Strong demand continues across multiple electronics sectors:</p>
      
      <div class="evaluation-criteria">
        <div class="criterion">
          <span class="badge">IoT & Smart Devices</span>
          <p><strong>Accelerating adoption:</strong> Industrial IoT, smart home, and wearable technologies driving consistent growth.</p>
        </div>
        <div class="criterion">
          <span class="badge">Medical Devices</span>
          <p><strong>Digital health boom:</strong> Remote patient monitoring and connected medical devices creating new demand.</p>
        </div>
        <div class="criterion">
          <span class="badge">Automotive Electronics</span>
          <p><strong>EV transformation:</strong> Electric vehicles and advanced driver assistance systems driving component demand.</p>
        </div>
        <div class="criterion">
          <span class="badge">Industrial</span>
          <p><strong>Automation升级:</strong> Factory automation and Industry 4.0 adoption accelerating globally.</p>
        </div>
      </div>
      
      <h2>Looking Ahead to 2026 🔮</h2>
      
      <p>We expect 2026 to bring continued growth opportunities for companies that can navigate the evolving landscape:</p>
      
      <div class="benefits-grid">
        <div class="benefit">
          <h5>🎯 Regionalization</h5>
          <p>Nearshoring and friendshoring trends accelerating for critical electronics.</p>
        </div>
        <div class="benefit">
          <h5>🤖 AI Integration</h5>
          <p>AI becoming standard in manufacturing execution and quality control.</p>
        </div>
        <div class="benefit">
          <h5>🌱 Sustainability Mandates</h5>
          <p>Regulatory requirements driving sustainability investments across the supply chain.</p>
        </div>
        <div class="benefit">
          <h5>📦 Inventory Strategies</h5>
          <p>Strategic buffering and multi-sourcing becoming competitive necessities.</p>
        </div>
        <div class="benefit">
          <h5>🔧 Modularity</h5>
          <p>Platform-based product designs enabling faster iteration and customization.</p>
        </div>
        <div class="benefit">
          <h5>🌐 Talent Development</h5>
          <p>Manufacturing talent development and retention becoming strategic priorities.</p>
        </div>
      </div>
      
      <div class="conclusion-box">
        <h3>Partner for Success</h3>
        <p>As the electronics manufacturing landscape continues to evolve, choosing the right manufacturing partner is more important than ever. <strong>Contact Illuminious</strong> to discuss how our global capabilities, technology investments, and commitment to quality can support your success in 2026 and beyond.</p>
      </div>
    `,
    publishedAt: new Date("2025-12-15"),
    readTime: 5,
    featuredImage: "/images/DEPLOYED_news-img-5.jpg",
    category: "Industry Insights",
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

export default function News() {
  return (
    <>
      <SEO
        title="News | Company Updates & Announcements | Illuminious"
        description="Stay updated with the latest news from Illuminious. Company announcements, partnerships, certifications, and industry insights."
        keywords="illuminious news, company news, electronics manufacturing news, supply chain updates"
        url="/news"
      
        breadcrumbs={[{name: "Home", url: "/"}, {name: "News", url: "/news"}]}
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
            <h1 className="text-4xl md:text-5xl font-bold text-illuminious-navy mb-4">
              News & Updates
            </h1>
            <p className="text-xl text-illuminious-navy/70">
              Stay informed about the latest developments, announcements, and industry insights from Illuminious.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Featured News */}
      <section className="py-12 bg-illuminious-light/20">
        <div className="container">
          <AnimatedSection>
            <Link href={`/news/${newsItems[0].slug}`}>
              <div className="group grid md:grid-cols-2 gap-8 bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="aspect-video md:aspect-auto overflow-hidden">
                  <img
                    src={newsItems[0].featuredImage}
                    alt={newsItems[0].title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <span className="text-xs font-medium text-illuminious-blue bg-illuminious-light/50 px-3 py-1 rounded-full w-fit mb-4">
                    {newsItems[0].category}
                  </span>
                  <h2 className="text-2xl md:text-3xl font-bold text-illuminious-navy mb-4 group-hover:text-illuminious-blue transition-colors">
                    {newsItems[0].title}
                  </h2>
                  <p className="text-illuminious-navy/70 mb-6 line-clamp-3">
                    {newsItems[0].excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-illuminious-navy/70 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {new Date(newsItems[0].publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {newsItems[0].readTime} min read
                    </span>
                  </div>
                  <div className="flex items-center text-illuminious-blue font-medium">
                    Read Full Article
                    <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* News Grid */}
      <section className="py-20">
        <div className="container">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(1).map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 0.1}>
                <Link href={`/news/${item.slug}`}>
                  <article className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                    <div className="aspect-video overflow-hidden">
                      <img
                        src={item.featuredImage}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6 flex flex-col flex-1">
                      <span className="text-xs font-medium text-illuminious-blue bg-illuminious-light/50 px-3 py-1 rounded-full w-fit mb-3">
                        {item.category}
                      </span>
                      <h2 className="text-xl font-semibold text-illuminious-navy mb-3 group-hover:text-illuminious-blue transition-colors line-clamp-2">
                        {item.title}
                      </h2>
                      <p className="text-illuminious-navy/70 mb-4 line-clamp-2 flex-1">
                        {item.excerpt}
                      </p>
                      <div className="flex items-center gap-4 text-sm text-illuminious-navy/70">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          {new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {item.readTime} min read
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

      {/* Newsletter CTA */}
      <section className="py-16 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-4">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-white mb-6">
              Get the latest news and insights delivered directly to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <Input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full border-2 border-white/50 bg-transparent text-white placeholder:text-white/80 focus:border-white focus:ring-2 focus:ring-white/30"
              />
              <Button className="bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full px-6">
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



