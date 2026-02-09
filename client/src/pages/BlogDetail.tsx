import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowLeft, Share2, User, ChevronRight, BookOpen } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import { blogPosts } from "./Blog";
import { useState, useEffect, useRef } from "react";

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

export default function BlogDetail() {
  const params = useParams<{ slug: string }>();
  const slug = params.slug || "";
  const post = blogPosts.find(p => p.slug === slug);

  if (!post) {
    return (
      <>
        <Header />
        <div className="min-h-screen flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-illuminious-navy mb-4">Article Not Found</h1>
            <p className="text-illuminious-navy/70 mb-8">The article you're looking for doesn't exist.</p>
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
  const sameCategoryPosts = blogPosts.filter(p => p.slug !== slug && p.category === post.category).slice(0, 3);
  const otherPosts = blogPosts.filter(p => p.slug !== slug && p.category !== post.category).slice(0, 3 - sameCategoryPosts.length);
  const relatedPosts = [...sameCategoryPosts, ...otherPosts];

  return (
    <>
      <SEO title={`${post.title} | Blog | Illuminious`} description={post.excerpt} keywords={`${post.category}, electronics manufacturing`} url={`/blog/${slug}`} type="article" publishedTime={post.publishedAt.toISOString()} image={post.featuredImage} />
      <ReadingProgress />
      <Header />

      <section className="pt-24 pb-2 bg-illuminious-light/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-illuminious-navy/70">
            <Link href="/" className="hover:text-illuminious-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/blog" className="hover:text-illuminious-blue transition-colors">Blog</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-illuminious-navy font-medium truncate max-w-[200px]">{post.title}</span>
          </nav>
        </div>
      </section>

      <section className="pt-6 pb-8 bg-illuminious-light/30">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <span className="inline-block text-sm font-medium text-illuminious-blue bg-illuminious-light px-3 py-1 rounded-full mb-4">{post.category}</span>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-6 leading-tight">{post.title}</h1>
            <p className="text-lg text-illuminious-navy/70 mb-6 max-w-3xl">{post.excerpt}</p>
            <div className="flex flex-wrap items-center gap-6 text-illuminious-navy/70 mb-6">
              <span className="flex items-center gap-2"><User className="w-4 h-4" />{post.authorName}</span>
              <span className="flex items-center gap-2"><Calendar className="w-4 h-4" />{new Date(post.publishedAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
              <span className="flex items-center gap-2"><Clock className="w-4 h-4" />{post.readTime} min read</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm text-illuminious-navy/70 flex items-center gap-1"><Share2 className="w-4 h-4" />Share:</span>
              <SocialShare url={shareUrl} title={post.title} />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="pb-4">
        <div className="container">
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.6 }} className="max-w-4xl">
            <img src={post.featuredImage} alt={post.title} className="w-full rounded-2xl shadow-lg aspect-video object-cover" />
          </motion.div>
        </div>
      </section>

      <section className="py-12">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_280px] gap-12 max-w-5xl">
            <motion.article initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue prose-li:marker:text-illuminious-blue" dangerouslySetInnerHTML={{ __html: post.content }} />
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full bg-illuminious-blue flex items-center justify-center text-white font-bold text-sm">{post.authorName.split(' ').map(n => n[0]).join('')}</div>
                    <div>
                      <p className="font-semibold text-illuminious-navy text-sm">{post.authorName}</p>
                      <p className="text-xs text-illuminious-navy/70">Illuminious Team</p>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <h4 className="font-semibold text-illuminious-navy text-sm mb-3 flex items-center gap-2"><Share2 className="w-4 h-4" />Share This Article</h4>
                  <SocialShare url={shareUrl} title={post.title} />
                </div>
                <div className="bg-illuminious-navy rounded-xl p-5 text-white">
                  <h4 className="font-semibold text-sm mb-2">Need Manufacturing Help?</h4>
                  <p className="text-xs text-white/75 mb-3">Get a free consultation with our engineering team.</p>
                  <Button asChild size="sm" className="w-full bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full text-xs">
                    <Link href="/contact">Get a Free Quote</Link>
                  </Button>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="py-12 bg-illuminious-light/30">
        <div className="container">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <span className="text-illuminious-navy/70 flex items-center gap-2"><BookOpen className="w-4 h-4" />Found this article helpful? Share it:</span>
            <SocialShare url={shareUrl} title={post.title} />
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-8">Related Articles</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {relatedPosts.map((relatedPost) => (
                <Link key={relatedPost.id} href={`/blog/${relatedPost.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={relatedPost.featuredImage} alt={relatedPost.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-illuminious-blue">{relatedPost.category}</span>
                      <h3 className="text-lg font-semibold text-illuminious-navy mt-1 line-clamp-2 group-hover:text-illuminious-blue transition-colors">{relatedPost.title}</h3>
                      <div className="flex items-center gap-3 mt-2 text-xs text-illuminious-navy/70">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" />{new Date(relatedPost.publishedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                        <span className="flex items-center gap-1"><Clock className="w-3 h-3" />{relatedPost.readTime} min</span>
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

