import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, ChevronRight, BookOpen, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import { newsItems } from "./News";
import { useState, useEffect } from "react";

function ReadingProgress() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const currentProgress = (window.scrollY / totalHeight) * 100;
      setProgress(Math.min(currentProgress, 100));
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-illuminious-light">
      <div className="h-full bg-illuminious-blue transition-all duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}

export default function NewsDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const news = newsItems.find(item => item.slug === slug);

  if (!news) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-illuminious-navy mb-4">Article Not Found</h1>
            <p className="text-illuminious-navy/70 mb-8">The news article you're looking for doesn't exist.</p>
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
  const relatedNews = newsItems.filter(item => item.slug !== slug).slice(0, 3);

  return (
    <>
      <SEO title={`${news.title} | News | Illuminious`} description={news.excerpt} keywords="illuminious news, company update, electronics manufacturing" url={`/news/${slug}`} type="article" publishedTime={news.publishedAt.toISOString()} image={news.featuredImage} />
      <ReadingProgress />
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-2 bg-illuminious-light/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-illuminious-navy/70">
            <Link href="/" className="hover:text-illuminious-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/news" className="hover:text-illuminious-blue transition-colors">News</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-illuminious-navy font-medium truncate max-w-[200px]">{news.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero */}
      <section className="pt-6 pb-8 bg-illuminious-light/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <div className="flex items-center gap-3 mb-4">
              <span className="inline-flex items-center gap-1.5 text-sm font-medium text-white bg-illuminious-navy px-3 py-1 rounded-full">
                <Newspaper className="w-3.5 h-3.5" />
                {news.category}
              </span>
            </div>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-6 leading-tight">{news.title}</h1>
            <p className="text-lg text-illuminious-navy/70 mb-6 max-w-3xl">{news.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-illuminious-navy/70 mb-6">
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(news.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{news.readTime} min read</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-illuminious-navy/70 flex items-center gap-1"><Share2 className="w-4 h-4" />Share:</span>
              <SocialShare url={shareUrl} title={news.title} />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Image */}
      <section className="pb-4">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <img src={news.featuredImage} alt={news.title} className="w-full rounded-2xl shadow-lg aspect-video object-cover" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 max-w-5xl">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue prose-li:marker:text-illuminious-blue" dangerouslySetInnerHTML={{ __html: news.content }} />
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <h4 className="font-semibold text-illuminious-navy text-sm mb-3 flex items-center gap-2"><Share2 className="w-4 h-4" />Share This News</h4>
                  <SocialShare url={shareUrl} title={news.title} />
                </div>
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <h4 className="font-semibold text-illuminious-navy text-sm mb-3">Latest News</h4>
                  <div className="space-y-3">
                    {newsItems.filter(item => item.slug !== slug).slice(0, 4).map((item) => (
                      <Link key={item.id} href={`/news/${item.slug}`} className="block group">
                        <p className="text-sm font-medium text-illuminious-navy group-hover:text-illuminious-blue transition-colors line-clamp-2">{item.title}</p>
                        <p className="text-xs text-illuminious-navy/70 mt-0.5">{new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</p>
                      </Link>
                    ))}
                  </div>
                </div>
                <div className="bg-illuminious-navy rounded-xl p-5 text-white">
                  <h4 className="font-semibold text-sm mb-2">Stay Updated</h4>
                  <p className="text-xs text-white/75 mb-3">Get the latest news and updates from Illuminious.</p>
                  <Button asChild size="sm" className="w-full bg-illuminious-blue text-white hover:bg-illuminious-sky rounded-full text-xs">
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-illuminious-light/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-illuminious-navy/70 flex items-center gap-2"><BookOpen className="w-4 h-4" />Found this news helpful? Share it:</span>
            <SocialShare url={shareUrl} title={news.title} />
          </div>
        </div>
      </section>

      {/* Related News */}
      {relatedNews.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-8">More News</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedNews.map((item) => (
                <Link key={item.id} href={`/news/${item.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={item.featuredImage} alt={item.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-illuminious-blue">{item.category}</span>
                      <h3 className="text-lg font-semibold text-illuminious-navy mt-1 line-clamp-2 group-hover:text-illuminious-blue transition-colors">{item.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-illuminious-navy/70">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(item.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{item.readTime} min</span>
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
      <FloatingContact />
    </>
  );
}


