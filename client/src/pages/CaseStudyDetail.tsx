import { Link, useParams } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, ArrowLeft, CheckCircle, Share2, ChevronRight, BookOpen, Target, Lightbulb, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import FloatingContact from "@/components/FloatingContact";
import SEO from "@/components/SEO";
import SocialShare from "@/components/SocialShare";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { caseStudies } from "./CaseStudies";
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

function AnimatedSection({ children, className = "", delay = 0 }: { children: React.ReactNode; className?: string; delay?: number }) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();
  return (
    <motion.div ref={ref} initial={{ opacity: 0, y: 30 }} animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }} transition={{ duration: 0.6, delay }} className={className}>
      {children}
    </motion.div>
  );
}

export default function CaseStudyDetail() {
  const params = useParams();
  const slug = params.slug || "";
  const study = caseStudies.find(s => s.slug === slug);

  if (!study) {
    return (
      <>
        <Header />
        <section className="pt-32 pb-20">
          <div className="container text-center">
            <h1 className="text-3xl font-bold text-illuminious-navy mb-4">Case Study Not Found</h1>
            <p className="text-illuminious-navy/70 mb-8">The case study you're looking for doesn't exist.</p>
            <Button asChild><Link href="/case-studies"><ArrowLeft className="w-4 h-4 mr-2" />Back to Case Studies</Link></Button>
          </div>
        </section>
        <Footer />
      </>
    );
  }

  const shareUrl = `https://illuminious.com/case-studies/${slug}`;
  const relatedStudies = caseStudies.filter(s => s.slug !== slug && s.industry === study.industry).slice(0, 2);
  const otherStudies = caseStudies.filter(s => s.slug !== slug && s.industry !== study.industry).slice(0, 3 - relatedStudies.length);
  const allRelated = [...relatedStudies, ...otherStudies];

  return (
    <>
      <SEO title={`${study.title} | Case Study | Illuminious`} description={study.challenge} keywords={study.tags.join(", ")} url={`/case-studies/${slug}`} />
      <ReadingProgress />
      <Header />

      {/* Breadcrumb */}
      <section className="pt-24 pb-2 bg-illuminious-light/30">
        <div className="container">
          <nav className="flex items-center gap-2 text-sm text-illuminious-navy/70">
            <Link href="/" className="hover:text-illuminious-blue transition-colors">Home</Link>
            <ChevronRight className="w-3 h-3" />
            <Link href="/case-studies" className="hover:text-illuminious-blue transition-colors">Case Studies</Link>
            <ChevronRight className="w-3 h-3" />
            <span className="text-illuminious-navy font-medium truncate max-w-[200px]">{study.title}</span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative pt-6 pb-16 bg-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-illuminious-light/30 to-white" />
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
              <div className="flex flex-wrap gap-2 mb-4">
                {study.tags.map((tag) => (
                  <span key={tag} className="px-3 py-1 rounded-full bg-illuminious-light text-illuminious-navy text-xs font-medium">{tag}</span>
                ))}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-illuminious-navy mb-4 leading-tight">{study.title}</h1>
              <p className="text-xl text-illuminious-blue mb-6">{study.industry}</p>
              <p className="text-lg text-illuminious-navy/70 mb-6">{study.challenge.substring(0, 150)}...</p>
              <div className="flex items-center gap-3">
                <span className="text-sm text-illuminious-navy/70 flex items-center gap-1"><Share2 className="w-4 h-4" />Share:</span>
                <SocialShare url={shareUrl} title={study.title} />
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
              <img src={study.image} alt={study.title} className="rounded-2xl shadow-xl w-full aspect-video object-cover" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results Stats */}
      <section className="py-12 bg-illuminious-navy">
        <div className="container">
          <div className="text-center mb-8">
            <h2 className="text-xl font-semibold text-white flex items-center justify-center gap-2"><BarChart3 className="w-5 h-5 text-illuminious-sky" />Key Results</h2>
          </div>
          <div className="grid grid-cols-3 gap-6">
            {study.results.map((result, index) => (
              <AnimatedSection key={result.metric} delay={index * 0.1}>
                <div className="text-center p-4 rounded-xl bg-white/5">
                  <div className="text-2xl md:text-4xl font-bold text-illuminious-sky mb-2">{result.value}</div>
                  <div className="text-sm text-illuminious-light/70">{result.metric}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Challenge & Solution */}
      <section className="py-20 md:py-28">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-12 max-w-5xl mx-auto">
            <div className="space-y-12">
              <AnimatedSection>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center"><Target className="w-5 h-5 text-red-500" /></div>
                  <h2 className="text-2xl font-bold text-illuminious-navy">The Challenge</h2>
                </div>
                <p className="text-lg text-illuminious-navy/70 leading-relaxed">{study.challenge}</p>
              </AnimatedSection>

              <AnimatedSection delay={0.1}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center"><Lightbulb className="w-5 h-5 text-illuminious-blue" /></div>
                  <h2 className="text-2xl font-bold text-illuminious-navy">Our Solution</h2>
                </div>
                <p className="text-lg text-illuminious-navy/70 leading-relaxed mb-6">{study.solution}</p>
                {study.fullContent && (
                  <div className="prose prose-lg max-w-none prose-headings:text-illuminious-navy prose-a:text-illuminious-blue prose-li:marker:text-illuminious-blue" dangerouslySetInnerHTML={{ __html: study.fullContent }} />
                )}
              </AnimatedSection>

              <AnimatedSection delay={0.2}>
                <blockquote className="p-8 rounded-2xl bg-illuminious-light/30 border-l-4 border-illuminious-blue">
                  <p className="text-lg italic text-illuminious-navy/70 mb-2">"{study.testimonial}"</p>
                </blockquote>
              </AnimatedSection>
            </div>

            {/* Sidebar */}
            <aside className="hidden lg:block">
              <div className="sticky top-28 space-y-6">
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <h4 className="font-semibold text-illuminious-navy text-sm mb-3">Project Details</h4>
                  <div className="space-y-3 text-sm">
                    <div><span className="text-illuminious-navy/70">Industry:</span><p className="font-medium text-illuminious-navy">{study.industry}</p></div>
                    <div><span className="text-illuminious-navy/70">Tags:</span>
                      <div className="flex flex-wrap gap-1 mt-1">{study.tags.map(tag => (<span key={tag} className="text-xs bg-illuminious-light px-2 py-0.5 rounded-full text-illuminious-navy">{tag}</span>))}</div>
                    </div>
                  </div>
                </div>
                <div className="bg-white rounded-xl border border-illuminious-light p-5">
                  <h4 className="font-semibold text-illuminious-navy text-sm mb-3 flex items-center gap-2"><Share2 className="w-4 h-4" />Share</h4>
                  <SocialShare url={shareUrl} title={study.title} />
                </div>
                <div className="bg-illuminious-navy rounded-xl p-5 text-white">
                  <h4 className="font-semibold text-sm mb-2">Have a Similar Project?</h4>
                  <p className="text-xs text-white/75 mb-3">Let our engineering team help you achieve similar results.</p>
                  <Button asChild size="sm" className="w-full bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full text-xs">
                    <Link href="/contact">Get a Free Quote</Link>
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
            <span className="text-illuminious-navy/70 flex items-center gap-2"><BookOpen className="w-4 h-4" />Found this case study helpful? Share it:</span>
            <SocialShare url={shareUrl} title={study.title} />
          </div>
        </div>
      </section>

      {/* Related Case Studies */}
      {allRelated.length > 0 && (
        <section className="py-16">
          <div className="container">
            <h2 className="text-2xl font-bold text-illuminious-navy mb-8">Related Case Studies</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {allRelated.map((related) => (
                <Link key={related.slug} href={`/case-studies/${related.slug}`}>
                  <article className="group bg-white rounded-xl overflow-hidden shadow-sm border border-illuminious-light hover:shadow-lg transition-all duration-300">
                    <div className="aspect-video overflow-hidden">
                      <img src={related.image} alt={related.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                    <div className="p-4">
                      <span className="text-xs font-medium text-illuminious-blue">{related.industry}</span>
                      <h3 className="text-lg font-semibold text-illuminious-navy mt-1 line-clamp-2 group-hover:text-illuminious-blue transition-colors">{related.title}</h3>
                      <div className="flex flex-wrap gap-1 mt-2">
                        {related.tags.slice(0, 3).map(tag => (<span key={tag} className="text-xs bg-illuminious-light px-2 py-0.5 rounded-full text-illuminious-navy/70">{tag}</span>))}
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="py-20 bg-illuminious-navy">
        <div className="container">
          <AnimatedSection className="text-center max-w-2xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to Achieve Similar Results?</h2>
            <p className="text-lg text-illuminious-light/80 mb-8">Let's discuss how we can help your project succeed with our end-to-end manufacturing capabilities.</p>
            <Button asChild size="lg" className="bg-illuminious-sky text-illuminious-navy hover:bg-illuminious-light rounded-full px-8">
              <Link href="/contact">Start Your Project<ArrowRight className="w-5 h-5 ml-2" /></Link>
            </Button>
          </AnimatedSection>
        </div>
      </section>

      <Footer />
      <FloatingContact />
    </>
  );
}


