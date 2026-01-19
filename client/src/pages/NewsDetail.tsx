import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import { toast } from "sonner";

// Sample news data - in production this would come from the database
const newsData: Record<string, {
  title: string;
  excerpt: string;
  content: string;
  date: string;
  readTime: string;
  image: string;
  category: string;
}> = {
  "illuminious-expands-manufacturing-capacity": {
    title: "Illuminious Expands Manufacturing Capacity in Southeast Asia",
    excerpt: "We are excited to announce a significant expansion of our manufacturing capabilities in the Batam Free Trade Zone, Indonesia.",
    content: `
      <p>We are thrilled to announce a major expansion of our manufacturing operations in the Batam Free Trade Zone, Indonesia. This strategic investment represents our commitment to providing world-class electronics manufacturing services to our global clients.</p>
      
      <h2>Enhanced Capabilities</h2>
      <p>The expansion includes new state-of-the-art SMT production lines, advanced testing equipment, and increased warehouse capacity. These additions will significantly boost our production capacity while maintaining the high quality standards our clients expect.</p>
      
      <h2>Strategic Location Benefits</h2>
      <p>The Batam Free Trade Zone offers unique advantages including:</p>
      <ul>
        <li>Tax-free manufacturing for export products</li>
        <li>Strategic location near major shipping routes</li>
        <li>Skilled workforce with electronics manufacturing expertise</li>
        <li>Competitive operating costs</li>
      </ul>
      
      <h2>What This Means for Our Clients</h2>
      <p>With this expansion, we can now offer faster turnaround times, increased production flexibility, and even more competitive pricing. Whether you're a startup looking to scale or an established company seeking a reliable manufacturing partner, our enhanced capabilities are ready to support your needs.</p>
      
      <p>Contact us today to learn how our expanded facilities can benefit your next project.</p>
    `,
    date: "2026-01-15",
    readTime: "3 min read",
    image: "/images/about-factory-equipment.png",
    category: "Company News",
  },
  "partnership-with-future-factory": {
    title: "Strategic Partnership with Future Factory Announced",
    excerpt: "Illuminious partners with Future Factory to enhance AI hardware manufacturing capabilities and startup support services.",
    content: `
      <p>Illuminious is proud to announce a strategic partnership with Future Factory, a leading AI hardware innovation company based in Shenzhen, China. This collaboration brings together complementary strengths to better serve the growing AI hardware market.</p>
      
      <h2>About Future Factory</h2>
      <p>Future Factory specializes in AI hardware product development, including AI smart glasses, companion robots, and wearable devices. Their expertise in cutting-edge AI technology combined with our manufacturing excellence creates a powerful offering for clients.</p>
      
      <h2>Partnership Benefits</h2>
      <p>Through this partnership, our clients gain access to:</p>
      <ul>
        <li>Advanced AI hardware design capabilities</li>
        <li>Integrated product development and manufacturing</li>
        <li>Specialized expertise in AI wearables and IoT devices</li>
        <li>Enhanced support for hardware startups</li>
      </ul>
      
      <h2>Supporting the Startup Ecosystem</h2>
      <p>This partnership strengthens our Illuminious Startups Program, providing emerging hardware companies with comprehensive support from concept to mass production. Together, we're committed to helping the next generation of hardware innovators succeed.</p>
    `,
    date: "2026-01-10",
    readTime: "4 min read",
    image: "/images/about-global-network.png",
    category: "Partnership",
  },
  "new-us-warehouse-facility": {
    title: "New US Warehouse Facility Now Operational",
    excerpt: "Our new state-of-the-art fulfillment center is now fully operational, enabling faster delivery times for North American customers.",
    content: `
      <p>We are excited to announce that our new US-based warehouse and fulfillment center is now fully operational. This facility represents a significant investment in our logistics capabilities and our commitment to serving North American customers.</p>
      
      <h2>Facility Highlights</h2>
      <p>Our new warehouse features:</p>
      <ul>
        <li>Modern warehouse management system with real-time inventory tracking</li>
        <li>Climate-controlled storage for sensitive electronics</li>
        <li>Automated picking and packing systems</li>
        <li>Same-day shipping capability for in-stock items</li>
      </ul>
      
      <h2>Faster Delivery Times</h2>
      <p>With strategic inventory positioning in the US, we can now offer significantly reduced delivery times for North American customers. Most orders can be delivered within 2-5 business days, compared to weeks for international shipping.</p>
      
      <h2>Cost Savings</h2>
      <p>By consolidating shipments and leveraging domestic shipping rates, we're able to pass significant cost savings on to our customers while improving delivery speed and reliability.</p>
    `,
    date: "2026-01-05",
    readTime: "2 min read",
    image: "/images/about-overseas-warehouse.png",
    category: "Operations",
  },
};

export default function NewsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const news = newsData[slug];

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-illuminious-navy mb-4">Article Not Found</h1>
            <p className="text-muted-foreground mb-8">The article you're looking for doesn't exist.</p>
            <Button asChild className="bg-illuminious-blue text-white rounded-full">
              <Link href="/news">Back to News</Link>
            </Button>
          </div>
        </div>
        <Footer />
      </>
    );
  }

  const shareUrl = `https://illuminious.com/news/${slug}`;

  const handleShare = (platform: string) => {
    let url = "";
    switch (platform) {
      case "linkedin":
        url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`;
        break;
      case "twitter":
        url = `https://twitter.com/intent/tweet?url=${encodeURIComponent(shareUrl)}&text=${encodeURIComponent(news.title)}`;
        break;
      case "whatsapp":
        url = `https://wa.me/?text=${encodeURIComponent(news.title + " " + shareUrl)}`;
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
        title={news.title}
        description={news.excerpt}
        keywords="illuminious news, company update, electronics manufacturing"
        url={`/news/${slug}`}
        type="article"
        publishedTime={news.date}
        image={news.image}
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
            <Link href="/news" className="inline-flex items-center gap-2 text-illuminious-blue hover:text-illuminious-navy mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to News
            </Link>
            <span className="block text-sm font-medium text-illuminious-blue bg-illuminious-light px-3 py-1 rounded-full w-fit mb-4">
              {news.category}
            </span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-6">
              {news.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-muted-foreground">
              <span className="flex items-center gap-2">
                <Calendar className="w-4 h-4" />
                {new Date(news.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}
              </span>
              <span className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                {news.readTime}
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
              src={news.image}
              alt={news.title}
              className="w-full rounded-2xl shadow-lg mb-12"
            />

            <div className="grid lg:grid-cols-[1fr_200px] gap-12">
              <motion.article
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue"
                dangerouslySetInnerHTML={{ __html: news.content }}
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

      <Footer />
      <FloatingContact />
    </>
  );
}
