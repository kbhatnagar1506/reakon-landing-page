"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { posts, categories, type Post } from "./posts";

const JADE = "oklch(0.62 0.15 160)";

function useInView<T extends HTMLElement = HTMLDivElement>(threshold = 0.15) {
  const ref = useRef<T>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold]);
  return { ref, inView };
}

function BlogIllustration({ type, color }: { type: string; color: string }) {
  if (type === "gst-credit") return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill={color + "15"} rx="8"/>
      {[0,1,2,3,4].map(i => (
        <rect key={i} x={20 + i*58} y={200 - 60 - i*18} width="40" height={60 + i*18} fill={color + (i === 4 ? "cc" : "40")} rx="4"/>
      ))}
      <path d="M20 140 Q80 80 140 100 Q200 120 260 40" stroke={color} strokeWidth="2.5" fill="none" strokeDasharray="6,3"/>
      <circle cx="260" cy="40" r="5" fill={color}/>
      <text x="16" y="18" fontSize="11" fill={color} fontWeight="700" fontFamily="Arial">GST CREDIT RECOVERY</text>
      <text x="200" y="18" fontSize="10" fill={color + "99"} fontFamily="Arial">₹2.4L avg/yr</text>
    </svg>
  );
  if (type === "cash-flow") return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill={color + "10"} rx="8"/>
      <circle cx="80" cy="100" r="50" fill="none" stroke={color + "30"} strokeWidth="12"/>
      <circle cx="80" cy="100" r="50" fill="none" stroke={color} strokeWidth="12" strokeDasharray="188 314" strokeLinecap="round" transform="rotate(-90 80 100)"/>
      <text x="80" y="96" textAnchor="middle" fontSize="16" fontWeight="800" fill={color} fontFamily="Arial">62%</text>
      <text x="80" y="112" textAnchor="middle" fontSize="9" fill={color + "99"} fontFamily="Arial">COLLECTED</text>
      <rect x="160" y="30" width="140" height="40" rx="6" fill={color + "15"}/>
      <circle cx="178" cy="50" r="8" fill={color + "30"}/>
      <text x="194" y="46" fontSize="9" fill={color} fontFamily="Arial" fontWeight="600">Sharma Traders</text>
      <text x="194" y="58" fontSize="9" fill="#ef4444" fontFamily="Arial">₹85,000 • 62 days</text>
      <rect x="160" y="80" width="140" height="40" rx="6" fill={color + "15"}/>
      <circle cx="178" cy="100" r="8" fill={color + "30"}/>
      <text x="194" y="96" fontSize="9" fill={color} fontFamily="Arial" fontWeight="600">Patel Suppliers</text>
      <text x="194" y="108" fontSize="9" fill="#f59e0b" fontFamily="Arial">₹48,000 • 51 days</text>
      <rect x="160" y="130" width="140" height="40" rx="6" fill="#dcfce7"/>
      <circle cx="178" cy="150" r="8" fill="#16a34a40"/>
      <text x="194" y="146" fontSize="9" fill="#16a34a" fontFamily="Arial" fontWeight="600">Gupta & Co.</text>
      <text x="194" y="158" fontSize="9" fill="#16a34a" fontFamily="Arial">Paid ✓</text>
    </svg>
  );
  if (type === "vendor-risk") return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill={color + "10"} rx="8"/>
      {[0,1,2].map(i => (
        <g key={i}>
          <rect x="20" y={30 + i*56} width="280" height="44" rx="6" fill={i===1 ? "#fef2f2" : color + "12"} stroke={i===1 ? "#fca5a5" : color + "25"} strokeWidth="1"/>
          <rect x="32" y={42 + i*56} width="8" height="8" rx="2" fill={i===1 ? "#ef4444" : color}/>
          <text x="50" y={51 + i*56} fontSize="10" fill={i===1 ? "#dc2626" : color} fontWeight="600" fontFamily="Arial">{["Reliable Corp — GSTR filed ✓", "Mehta Suppliers — ⚠ NOT FILED", "Kapoor & Sons — GSTR filed ✓"][i]}</text>
          <text x="50" y={64 + i*56} fontSize="9" fill={i===1 ? "#ef4444" : color + "99"} fontFamily="Arial">{["ITC Safe • ₹32,000", "WITHHOLD ₹18,000 on next payment", "ITC Safe • ₹15,000"][i]}</text>
        </g>
      ))}
    </svg>
  );
  return (
    <svg viewBox="0 0 320 200" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
      <rect width="320" height="200" fill={color + "10"} rx="8"/>
      <rect x="20" y="20" width="120" height="160" rx="8" fill={color + "15"} stroke={color + "30"} strokeWidth="1"/>
      <text x="80" y="45" textAnchor="middle" fontSize="10" fill={color} fontWeight="700" fontFamily="Arial">P&L REPORT</text>
      {[0,1,2,3,4].map(i => (
        <g key={i}>
          <rect x="30" y={55 + i*24} width={60 + (i%3)*15} height="14" rx="3" fill={color + "25"}/>
        </g>
      ))}
      <path d="M160 100 L190 100" stroke={color} strokeWidth="2" strokeDasharray="4,3"/>
      <polygon points="190,96 200,100 190,104" fill={color}/>
      <rect x="210" y="60" width="90" height="80" rx="8" fill="#dcfce7" stroke="#16a34a40" strokeWidth="1"/>
      <text x="255" y="82" textAnchor="middle" fontSize="9" fill="#16a34a" fontWeight="700" fontFamily="Arial">REAKON</text>
      <text x="255" y="96" textAnchor="middle" fontSize="9" fill="#16a34a" fontFamily="Arial">PORTAL</text>
      <text x="255" y="115" textAnchor="middle" fontSize="18" fill="#16a34a" fontFamily="Arial">📊</text>
      <text x="255" y="132" textAnchor="middle" fontSize="8" fill="#16a34a99" fontFamily="Arial">Live • Updated</text>
    </svg>
  );
}

function FeaturedCard({ blog }: { blog: Post }) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.1);
  return (
    <Link
      href={`/blog/${blog.slug}`}
      ref={ref}
      className="group relative block rounded-3xl overflow-hidden border border-foreground/10 cursor-pointer"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(40px)",
        transition: "opacity 800ms ease, transform 800ms ease",
      }}
    >
      {/* Background gradient that reveals on hover */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{ background: `linear-gradient(135deg, ${blog.accentColor}08, ${blog.accentColor}15)` }} />

      <div className="relative grid lg:grid-cols-2 gap-0">
        {/* Illustration */}
        <div className={`relative h-64 lg:h-auto bg-gradient-to-br ${blog.gradient} flex items-center justify-center p-8 overflow-hidden`}>
          <div className="w-full max-w-sm">
            <BlogIllustration type={blog.image} color={blog.accentColor} />
          </div>
          {/* Floating badge */}
          <div className="absolute top-5 left-5 flex items-center gap-2 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
            <span className="w-2 h-2 rounded-full" style={{ background: blog.tagColor }} />
            <span className="text-xs font-semibold" style={{ color: blog.tagColor }}>{blog.tag}</span>
          </div>
          <div className="absolute top-5 right-5 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1.5 shadow-sm">
            <span className="text-xs text-gray-500 font-medium">Featured</span>
          </div>
        </div>

        {/* Content */}
        <div className="p-8 lg:p-12 flex flex-col justify-center bg-background">
          <div className="flex items-center gap-3 mb-5">
            <span className="text-xs font-mono text-muted-foreground">{blog.date}</span>
            <span className="w-1 h-1 rounded-full bg-foreground/20" />
            <span className="text-xs font-mono text-muted-foreground">{blog.readTime}</span>
          </div>

          <h2 className="text-2xl lg:text-3xl font-display tracking-tight leading-[1.15] mb-5 group-hover:text-foreground transition-colors"
            style={{ letterSpacing: "-0.02em" }}>
            {blog.title}
          </h2>

          <p className="text-muted-foreground leading-relaxed mb-8 text-base">
            {blog.excerpt}
          </p>

          <div className="flex items-center justify-between">
            <span className="text-xs font-medium text-muted-foreground">{blog.author}</span>
            <div className="flex items-center gap-2 text-sm font-semibold transition-all duration-200 group-hover:gap-3"
              style={{ color: blog.accentColor }}>
              Read article
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M3 8h10M9 4l4 4-4 4"/>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

function BlogCard({ blog, index }: { blog: Post; index: number }) {
  const { ref, inView } = useInView<HTMLAnchorElement>(0.15);
  return (
    <Link
      href={`/blog/${blog.slug}`}
      ref={ref}
      className="group relative flex flex-col rounded-2xl overflow-hidden border border-foreground/10 hover:border-foreground/20 hover:shadow-xl cursor-pointer bg-background"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 700ms ease ${index * 80}ms, transform 700ms ease ${index * 80}ms, box-shadow 200ms ease`,
      }}
    >
      {/* Illustration area */}
      <div className={`relative h-48 bg-gradient-to-br ${blog.gradient} flex items-center justify-center p-6 overflow-hidden`}>
        <div className="w-full max-w-xs">
          <BlogIllustration type={blog.image} color={blog.accentColor} />
        </div>
        {/* Shimmer on hover */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
          style={{ background: "linear-gradient(135deg, transparent 30%, rgba(255,255,255,0.2) 50%, transparent 70%)", backgroundSize: "200% 200%", animation: "shimmer 1.5s ease infinite" }} />
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 p-6">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-xs font-semibold px-2.5 py-1 rounded-full" style={{ background: blog.tagColor + "15", color: blog.tagColor }}>
            {blog.tag}
          </span>
          <span className="text-xs text-muted-foreground ml-auto">{blog.readTime}</span>
        </div>

        <h3 className="font-display text-lg tracking-tight leading-[1.2] mb-3 flex-1 group-hover:text-foreground/80 transition-colors"
          style={{ letterSpacing: "-0.01em" }}>
          {blog.title}
        </h3>

        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
          {blog.excerpt}
        </p>

        <div className="flex items-center justify-between pt-4 border-t border-foreground/8">
          <span className="text-xs text-muted-foreground">{blog.date}</span>
          <div className="flex items-center gap-1.5 text-xs font-semibold opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-2 group-hover:translate-x-0"
            style={{ color: blog.accentColor }}>
            Read
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M3 8h10M9 4l4 4-4 4"/>
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
}

function NewsletterBlock() {
  const { ref, inView } = useInView(0.2);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div
      ref={ref}
      className="relative rounded-3xl overflow-hidden mt-24"
      style={{
        opacity: inView ? 1 : 0,
        transform: inView ? "translateY(0)" : "translateY(32px)",
        transition: "opacity 800ms ease, transform 800ms ease",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${JADE}20, ${JADE}08, transparent)` }} />
      <div className="absolute inset-0 border border-foreground/10 rounded-3xl" />

      <div className="relative z-10 px-8 lg:px-16 py-14 flex flex-col lg:flex-row items-center gap-10 lg:gap-20">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4">
            <span className="w-5 h-px bg-foreground/30" />
            Stay informed
          </div>
          <h3 className="text-3xl lg:text-4xl font-display tracking-tight mb-3" style={{ letterSpacing: "-0.02em" }}>
            GST insights, straight to your inbox.
          </h3>
          <p className="text-muted-foreground">No spam. Just practical guides on GST, cash flow, and protecting your money — once a fortnight.</p>
        </div>

        <div className="w-full lg:w-auto lg:min-w-[360px]">
          {submitted ? (
            <div className="flex items-center gap-3 bg-background border border-foreground/10 rounded-2xl px-6 py-4">
              <span className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: JADE }}>
                <svg width="14" height="14" viewBox="0 0 16 16" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="2 8 6 12 14 4"/>
                </svg>
              </span>
              <span className="text-sm font-medium">You're on the list! See you in your inbox.</span>
            </div>
          ) : (
            <form
              onSubmit={(e) => { e.preventDefault(); if (email) setSubmitted(true); }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="your@email.com"
                required
                className="flex-1 px-4 py-3 text-sm bg-background border border-foreground/15 rounded-xl outline-none focus:border-foreground/30 transition-colors placeholder:text-muted-foreground/60"
              />
              <button
                type="submit"
                className="px-6 py-3 text-sm font-semibold text-white rounded-xl transition-opacity hover:opacity-85 whitespace-nowrap"
                style={{ background: JADE }}
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function BlogPage() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [headerVisible, setHeaderVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setHeaderVisible(true), 100);
    return () => clearTimeout(t);
  }, []);

  const featured = posts.find(b => b.featured) ?? posts[0];
  const filtered = posts.filter(b => b.slug !== featured.slug && (activeCategory === "All" || b.tag === activeCategory));

  return (
    <div className="min-h-screen bg-background">
      {/* Top bar */}
      <div className="border-b border-foreground/10 px-6 lg:px-12 py-5 flex items-center justify-between sticky top-0 bg-background/90 backdrop-blur-md z-50">
        <Link href="/">
          <img src="/reakon no-bg logo-black.png" alt="Reakon" style={{ height: 44 }} />
        </Link>
        <div className="hidden md:flex items-center gap-6">
          <Link href="/" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Home</Link>
          <Link href="/privacy" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Privacy</Link>
          <a
            href="https://cal.com/reakon.in/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-white px-5 py-2.5 transition-opacity hover:opacity-85"
            style={{ background: JADE }}
          >
            Book a Call
          </a>
        </div>
        <Link href="/" className="md:hidden text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Home
        </Link>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">

        {/* Hero header */}
        <div className="pt-20 pb-16 text-center"
          style={{
            opacity: headerVisible ? 1 : 0,
            transform: headerVisible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 800ms ease, transform 800ms ease",
          }}
        >
          <div className="inline-flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-muted-foreground mb-6">
            <span className="w-6 h-px bg-foreground/30" />
            Reakon Blog
            <span className="w-6 h-px bg-foreground/30" />
          </div>
          <h1 className="text-5xl lg:text-7xl font-display tracking-tight mb-6 max-w-3xl mx-auto leading-[1.02]"
            style={{ letterSpacing: "-0.03em" }}>
            Protect your money.<br />
            <span style={{ color: JADE }}>Know your numbers.</span>
          </h1>
          <p className="text-muted-foreground text-lg max-w-xl mx-auto leading-relaxed">
            Practical guides on GST, cash flow, vendor compliance, and everything else Indian businesses need to stop losing money silently.
          </p>
        </div>

        {/* Featured post */}
        <FeaturedCard blog={featured} />

        {/* Category filter */}
        <div className="flex items-center gap-2 mt-16 mb-10 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 text-sm font-medium rounded-full border transition-all duration-200"
              style={{
                background: activeCategory === cat ? JADE : "transparent",
                color: activeCategory === cat ? "white" : "rgba(0,0,0,0.55)",
                borderColor: activeCategory === cat ? JADE : "rgba(0,0,0,0.12)",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Blog grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((blog, i) => (
            <BlogCard key={blog.slug} blog={blog} index={i} />
          ))}
        </div>

        {/* Newsletter */}
        <NewsletterBlock />

        {/* Footer strip */}
        <div className="py-10 mt-10 border-t border-foreground/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">© 2026 Reakon Technologies Pvt. Ltd.</p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <Link href="/privacy" className="hover:text-foreground transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-foreground transition-colors">Back to home</Link>
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes shimmer {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .line-clamp-2 {
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
      `}</style>
    </div>
  );
}
