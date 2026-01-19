import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { toast } from "sonner";

// Sample blog data - in production this would come from the database
const blogData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  author: string;
  image: string;
  category: string;
}> = {
  "choosing-right-manufacturing-partner": {
    title: "How to Choose the Right Manufacturing Partner for Your Hardware Startup",
    excerpt: "Selecting the right manufacturing partner is one of the most critical decisions for hardware startups. Learn the key factors to consider.",
    content: `
      <p>For hardware startups, choosing the right manufacturing partner can make or break your product launch. This decision impacts everything from product quality to time-to-market and ultimately, your company's success.</p>
      
      <h2>Key Factors to Consider</h2>
      
      <h3>1. Technical Capabilities</h3>
      <p>Ensure your potential partner has the technical capabilities to manufacture your specific product. This includes:</p>
      <ul>
        <li>Relevant manufacturing equipment and processes</li>
        <li>Experience with similar products or technologies</li>
        <li>Quality certifications (ISO, IPC, etc.)</li>
        <li>Testing and inspection capabilities</li>
      </ul>
      
      <h3>2. Scalability</h3>
      <p>Your manufacturing needs will evolve as your startup grows. Look for a partner who can:</p>
      <ul>
        <li>Handle small initial batches for validation</li>
        <li>Scale up production as demand increases</li>
        <li>Maintain quality consistency across volumes</li>
      </ul>
      
      <h3>3. Communication and Support</h3>
      <p>Effective communication is crucial, especially when working across time zones. Consider:</p>
      <ul>
        <li>Responsiveness and communication style</li>
        <li>Project management processes</li>
        <li>Technical support availability</li>
        <li>Language capabilities</li>
      </ul>
      
      <h3>4. Location and Logistics</h3>
      <p>Manufacturing location affects costs, lead times, and logistics complexity. Evaluate:</p>
      <ul>
        <li>Shipping costs and times to your markets</li>
        <li>Import duties and trade considerations</li>
        <li>Ability to visit facilities when needed</li>
      </ul>
      
      <h2>Red Flags to Watch For</h2>
      <p>Be cautious of partners who:</p>
      <ul>
        <li>Promise unrealistically low prices or fast timelines</li>
        <li>Are reluctant to share references or facility tours</li>
        <li>Have unclear pricing or hidden fees</li>
        <li>Show poor communication during the evaluation phase</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Take your time to thoroughly evaluate potential manufacturing partners. The right partner becomes an extension of your team and a key contributor to your success. At Illuminious, we pride ourselves on being that trusted partner for hardware startups worldwide.</p>
    `,
    date: "2026-01-12",
    readTime: "8 min read",
    author: "Illuminious Team",
    image: "/images/about-factory-equipment.png",
    category: "Startup Guide",
  },
  "dfm-best-practices": {
    title: "Design for Manufacturing: Best Practices for Electronics Products",
    excerpt: "Implementing DFM principles early in your product development can save significant time and money. Here's how to get it right.",
    content: `
      <p>Design for Manufacturing (DFM) is a critical practice that can significantly reduce production costs, improve quality, and accelerate time-to-market. Here are the best practices every electronics product developer should follow.</p>
      
      <h2>Start Early</h2>
      <p>The most important DFM principle is to start early. Changes made during the design phase are far less expensive than changes during production. Engage with your manufacturing partner during the design phase, not after.</p>
      
      <h2>Component Selection</h2>
      <p>Choose components wisely:</p>
      <ul>
        <li>Prefer standard, readily available components</li>
        <li>Consider component lifecycle and availability</li>
        <li>Minimize the number of unique components</li>
        <li>Use components from reliable suppliers</li>
      </ul>
      
      <h2>PCB Design Considerations</h2>
      <p>Optimize your PCB design for manufacturing:</p>
      <ul>
        <li>Follow IPC design guidelines</li>
        <li>Maintain appropriate trace widths and spacing</li>
        <li>Use standard board thicknesses and materials</li>
        <li>Design for automated assembly where possible</li>
        <li>Include test points for in-circuit testing</li>
      </ul>
      
      <h2>Mechanical Design</h2>
      <p>For enclosures and mechanical parts:</p>
      <ul>
        <li>Design for the intended manufacturing process</li>
        <li>Use appropriate draft angles for molded parts</li>
        <li>Minimize undercuts and complex geometries</li>
        <li>Consider assembly sequence and ease</li>
      </ul>
      
      <h2>Tolerance Analysis</h2>
      <p>Proper tolerance management is essential:</p>
      <ul>
        <li>Use the widest tolerances that meet functional requirements</li>
        <li>Perform tolerance stack-up analysis</li>
        <li>Consider manufacturing process capabilities</li>
      </ul>
      
      <h2>Conclusion</h2>
      <p>Implementing DFM best practices from the start of your project will pay dividends throughout the product lifecycle. Our DFM services can help you optimize your design for efficient, cost-effective manufacturing.</p>
    `,
    date: "2026-01-08",
    readTime: "10 min read",
    author: "Illuminious Team",
    image: "/images/service-dfm-design.png",
    category: "Technical",
  },
  "ai-hardware-trends-2026": {
    title: "AI Hardware Trends to Watch in 2026",
    excerpt: "From smart glasses to companion robots, AI hardware is evolving rapidly. Explore the trends shaping the industry this year.",
    content: `
      <p>The AI hardware landscape is evolving at an unprecedented pace. As we move through 2026, several key trends are shaping the industry and creating new opportunities for innovators.</p>
      
      <h2>1. AI-Powered Wearables</h2>
      <p>Smart glasses and AI wearables are moving from niche products to mainstream adoption. Key developments include:</p>
      <ul>
        <li>Improved display technologies for AR/VR glasses</li>
        <li>More powerful edge AI processing</li>
        <li>Better battery life and thermal management</li>
        <li>Sleeker, more fashionable designs</li>
      </ul>
      
      <h2>2. Companion Robots</h2>
      <p>AI companion robots are becoming more sophisticated and affordable:</p>
      <ul>
        <li>Enhanced natural language processing</li>
        <li>Improved emotional intelligence</li>
        <li>Better mobility and physical interaction</li>
        <li>Integration with smart home ecosystems</li>
      </ul>
      
      <h2>3. Edge AI Devices</h2>
      <p>Processing AI at the edge is becoming more powerful and efficient:</p>
      <ul>
        <li>New AI accelerator chips</li>
        <li>Lower power consumption</li>
        <li>Privacy-focused local processing</li>
        <li>Real-time inference capabilities</li>
      </ul>
      
      <h2>4. Voice-First Devices</h2>
      <p>Voice interfaces continue to evolve:</p>
      <ul>
        <li>More natural conversations</li>
        <li>Better noise cancellation</li>
        <li>Multi-language support</li>
        <li>Context-aware responses</li>
      </ul>
      
      <h2>Manufacturing Implications</h2>
      <p>These trends create new manufacturing challenges and opportunities:</p>
      <ul>
        <li>Miniaturization requirements</li>
        <li>Advanced thermal management</li>
        <li>High-precision assembly</li>
        <li>Rigorous testing requirements</li>
      </ul>
      
      <p>At Illuminious, we're at the forefront of AI hardware manufacturing, helping innovators bring these cutting-edge products to market.</p>
    `,
    date: "2026-01-03",
    readTime: "6 min read",
    author: "Illuminious Team",
    image: "/images/service-ai-glasses.png",
    category: "Industry Insights",
  },
  "supply-chain-optimization": {
    title: "Optimizing Your Electronics Supply Chain for Global Markets",
    excerpt: "Learn strategies to build a resilient and efficient supply chain that can serve customers worldwide.",
    content: `
      <p>In today's global marketplace, an optimized supply chain is a competitive advantage. Here's how to build a supply chain that's both efficient and resilient.</p>
      
      <h2>Strategic Sourcing</h2>
      <p>Diversify your supplier base:</p>
      <ul>
        <li>Avoid single-source dependencies</li>
        <li>Balance cost with reliability</li>
        <li>Consider geographic diversification</li>
        <li>Build relationships with key suppliers</li>
      </ul>
      
      <h2>Inventory Strategy</h2>
      <p>Optimize inventory levels:</p>
      <ul>
        <li>Use data-driven demand forecasting</li>
        <li>Implement just-in-time where appropriate</li>
        <li>Maintain safety stock for critical components</li>
        <li>Consider regional warehousing</li>
      </ul>
      
      <h2>Logistics Optimization</h2>
      <p>Streamline your logistics:</p>
      <ul>
        <li>Choose optimal shipping modes</li>
        <li>Consolidate shipments when possible</li>
        <li>Use technology for visibility</li>
        <li>Plan for customs and compliance</li>
      </ul>
      
      <h2>Risk Management</h2>
      <p>Build resilience into your supply chain:</p>
      <ul>
        <li>Identify and assess risks</li>
        <li>Develop contingency plans</li>
        <li>Monitor global events</li>
        <li>Maintain flexibility in operations</li>
      </ul>
      
      <h2>Technology Enablement</h2>
      <p>Leverage technology for better management:</p>
      <ul>
        <li>Real-time tracking and visibility</li>
        <li>Automated ordering and replenishment</li>
        <li>Analytics for continuous improvement</li>
        <li>Integration across systems</li>
      </ul>
      
      <p>Our global logistics and warehouse services help you implement these strategies effectively, ensuring your products reach customers quickly and cost-effectively.</p>
    `,
    date: "2025-12-28",
    readTime: "7 min read",
    author: "Illuminious Team",
    image: "/images/about-global-network.png",
    category: "Operations",
  },
};

export default function BlogDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const post = blogData[slug];

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-illuminious-navy mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild className="bg-illuminious-blue text-white rounded-full">
              <Link href="/blog">Back to Blog</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareUrl = `https://illuminious.com/blog/${slug}`;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(post.title)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(post.title + " " + shareUrl)}`;
        break;
      default:
        navigator.clipboard.writeText(shareUrl);
        toast.success("Link copied to clipboard!");
        return;
    }
    window.open(url, "_blank", "width=600,height=400");
  };

  return (
    <>
      <SEO
        title={post.title}
        description={post.excerpt}
        keywords="electronics manufacturing, hardware startup, supply chain, DFM"
        url={`/blog/${slug}`}
        type="article"
        publishedTime={post.date}
        author={post.author}
        image={post.image}
      />
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 bg-illuminious-light/30">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link href="/blog" className="inline-flex items-center gap-2 text-illuminious-blue hover:text-illuminious-navy mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>
            <span className="block text-sm font-medium text-illuminious-blue mb-4">
              {post.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-6">
              {post.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <User className="w-4 h-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {post.readTime}
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <motion.img
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              src={post.image}
              alt={post.title}
              className="w-full rounded-2xl shadow-lg mb-12"
            />

            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue"
                dangerouslySetInnerHTML={{ __html: post.content }}
              />

              {/* Share Sidebar */}
              <motion.aside
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="lg:sticky lg:top-32 h-fit"
              >
                <h3 className="text-sm font-semibold text-illuminious-navy mb-4 flex items-center gap-2">
                  <Share2 className="w-4 h-4" />
                  Share this article
                </h3>
                <div className="flex lg:flex-col gap-3">
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="p-3 rounded-full bg-[#0077B5] text-white hover:opacity-90 transition-opacity"
                  >
                    <Linkedin className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="p-3 rounded-full bg-[#1DA1F2] text-white hover:opacity-90 transition-opacity"
                  >
                    <Twitter className="w-5 h-5" />
                  </button>
                  <button
                    onClick={() => handleShare("whatsapp")}
                    className="p-3 rounded-full bg-[#25D366] text-white hover:opacity-90 transition-opacity"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                    </svg>
                  </button>
                  <button
                    onClick={() => handleShare("copy")}
                    className="p-3 rounded-full bg-illuminious-light text-illuminious-navy hover:bg-illuminious-blue hover:text-white transition-colors"
                  >
                    <Share2 className="w-5 h-5" />
                  </button>
                </div>
              </motion.aside>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-illuminious-light/30">
        <div className="container">
          <div className="text-center max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6">
              Let's discuss how we can help bring your hardware product to life.
            </p>
            <Button
              asChild
              className="bg-illuminious-blue text-white hover:bg-illuminious-navy rounded-full px-8"
            >
              <Link href="/contact">
                Contact Us
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}
