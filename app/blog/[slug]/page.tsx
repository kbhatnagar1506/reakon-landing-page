import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { posts, getPostBySlug, relatedPosts, SITE_URL, type Block } from "../posts";

const OG_IMAGE = `${SITE_URL}/reakon%20no-bg%20logo-black.png`;
const PUBLISHER = "Reakon Technologies Pvt. Ltd.";

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Article not found" };
  const url = `${SITE_URL}/blog/${post.slug}`;
  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: post.keywords,
    authors: [{ name: post.author }],
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      type: "article",
      url,
      title: post.metaTitle,
      description: post.metaDescription,
      siteName: "Reakon",
      locale: "en_IN",
      publishedTime: post.dateISO,
      authors: [post.author],
      images: [{ url: OG_IMAGE }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      site: "@Reakonofficial",
      images: [OG_IMAGE],
    },
  };
}

function slugify(s: string) {
  return s
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-");
}

/* Inline markup: **bold** and [text](href) */
function renderInline(text: string, accent: string): React.ReactNode[] {
  const nodes: React.ReactNode[] = [];
  const regex = /\[([^\]]+)\]\(([^)]+)\)|\*\*([^*]+)\*\*/g;
  let last = 0;
  let m: RegExpExecArray | null;
  let key = 0;
  while ((m = regex.exec(text)) !== null) {
    if (m.index > last) nodes.push(text.slice(last, m.index));
    if (m[1] !== undefined) {
      const label = m[1];
      const href = m[2];
      const internal = href.startsWith("/") || href.startsWith("#");
      if (internal) {
        nodes.push(
          <Link
            key={key++}
            href={href}
            style={{ color: accent, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            {label}
          </Link>
        );
      } else {
        nodes.push(
          <a
            key={key++}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: accent, fontWeight: 500, textDecoration: "underline", textUnderlineOffset: "2px" }}
          >
            {label}
          </a>
        );
      }
    } else if (m[3] !== undefined) {
      nodes.push(
        <strong key={key++} style={{ fontWeight: 600, color: "#0B2252" }}>
          {m[3]}
        </strong>
      );
    }
    last = regex.lastIndex;
  }
  if (last < text.length) nodes.push(text.slice(last));
  return nodes;
}

function BlockView({ block, accent }: { block: Block; accent: string }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          id={slugify(block.text || "")}
          className="font-display tracking-tight scroll-mt-24"
          style={{ fontSize: "clamp(1.6rem, 3vw, 2.1rem)", color: "#0a0a0a", marginTop: "2.6rem", marginBottom: "1rem", lineHeight: 1.2 }}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          className="font-display tracking-tight scroll-mt-24"
          style={{ fontSize: "clamp(1.25rem, 2.2vw, 1.5rem)", color: "#111", marginTop: "1.8rem", marginBottom: "0.7rem", lineHeight: 1.25 }}
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p style={{ color: "rgba(0,0,0,0.72)", fontSize: "1.075rem", lineHeight: 1.8, marginBottom: "1.25rem" }}>
          {renderInline(block.text || "", accent)}
        </p>
      );
    case "ul":
      return (
        <ul style={{ marginBottom: "1.4rem", paddingLeft: "0", listStyle: "none" }}>
          {(block.items || []).map((it, i) => (
            <li key={i} style={{ position: "relative", paddingLeft: "1.6rem", marginBottom: "0.7rem", color: "rgba(0,0,0,0.72)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              <span style={{ position: "absolute", left: "0", top: "0.65rem", width: "7px", height: "7px", borderRadius: "9999px", background: accent }} />
              {renderInline(it, accent)}
            </li>
          ))}
        </ul>
      );
    case "ol":
      return (
        <ol style={{ marginBottom: "1.4rem", paddingLeft: "0", counterReset: "li", listStyle: "none" }}>
          {(block.items || []).map((it, i) => (
            <li key={i} style={{ position: "relative", paddingLeft: "2.4rem", marginBottom: "0.85rem", color: "rgba(0,0,0,0.72)", fontSize: "1.05rem", lineHeight: 1.7 }}>
              <span
                style={{
                  position: "absolute", left: "0", top: "0.1rem", width: "1.7rem", height: "1.7rem",
                  borderRadius: "9999px", background: accent + "18", color: accent,
                  fontSize: "0.85rem", fontWeight: 700, display: "flex", alignItems: "center", justifyContent: "center",
                }}
              >
                {i + 1}
              </span>
              {renderInline(it, accent)}
            </li>
          ))}
        </ol>
      );
    case "callout":
      return (
        <div
          style={{
            margin: "1.8rem 0", padding: "1.25rem 1.4rem", borderRadius: "16px",
            background: accent + "0c", border: `1px solid ${accent}26`, borderLeft: `4px solid ${accent}`,
          }}
        >
          {block.title && (
            <div style={{ fontWeight: 600, color: accent, marginBottom: "0.35rem", fontSize: "0.95rem" }}>{block.title}</div>
          )}
          <div style={{ color: "rgba(0,0,0,0.74)", fontSize: "1.02rem", lineHeight: 1.7 }}>
            {renderInline(block.text || "", accent)}
          </div>
        </div>
      );
    case "quote":
      return (
        <blockquote
          className="font-display"
          style={{ margin: "2rem 0", paddingLeft: "1.5rem", borderLeft: `3px solid ${accent}`, fontSize: "1.3rem", lineHeight: 1.45, color: "#0a0a0a", fontStyle: "italic" }}
        >
          "{block.text}"
          {block.cite && (
            <cite style={{ display: "block", marginTop: "0.6rem", fontSize: "0.85rem", fontStyle: "normal", color: "rgba(0,0,0,0.45)" }}>
              — {block.cite}
            </cite>
          )}
        </blockquote>
      );
    default:
      return null;
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const accent = post.accentColor;
  const url = `${SITE_URL}/blog/${post.slug}`;
  const related = relatedPosts(post.slug, 3);

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    image: [OG_IMAGE],
    datePublished: post.dateISO,
    dateModified: post.dateISO,
    author: { "@type": "Organization", name: post.author, url: SITE_URL },
    publisher: {
      "@type": "Organization",
      name: PUBLISHER,
      logo: { "@type": "ImageObject", url: OG_IMAGE },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    keywords: post.keywords.join(", "),
    articleSection: post.category,
  };

  const breadcrumbLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Blog", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: url },
    ],
  };

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a.replace(/\[([^\]]+)\]\([^)]+\)/g, "$1").replace(/\*\*/g, "") },
    })),
  };

  return (
    <div className="min-h-screen bg-white">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbLd) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />

      {/* Top bar */}
      <header className="border-b border-black/10 px-6 lg:px-12 py-4 flex items-center justify-between sticky top-0 bg-white/90 backdrop-blur-md z-50">
        <Link href="/">
          <img src="/reakon no-bg logo-black.png" alt="Reakon" style={{ height: 40 }} />
        </Link>
        <div className="flex items-center gap-5">
          <Link href="/blog" className="text-sm text-black/55 hover:text-black transition-colors">← All articles</Link>
          <a
            href="https://cal.com/reakon.in/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden sm:inline-flex text-sm font-semibold text-white px-5 py-2.5 rounded-xl transition-opacity hover:opacity-90"
            style={{ background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)" }}
          >
            Book a call
          </a>
        </div>
      </header>

      <article className="max-w-[760px] mx-auto px-6 lg:px-0 pt-12 pb-20">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-xs font-mono text-black/40 mb-7" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-black/70 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-black/70 transition-colors">Blog</Link>
          <span>/</span>
          <span style={{ color: accent }}>{post.tag}</span>
        </nav>

        {/* Tag + meta */}
        <div className="flex items-center gap-3 mb-5 flex-wrap">
          <span className="text-xs font-semibold px-3 py-1 rounded-full" style={{ background: post.tagColor + "15", color: post.tagColor }}>
            {post.tag}
          </span>
          <span className="text-xs text-black/45">{post.date}</span>
          <span className="w-1 h-1 rounded-full bg-black/20" />
          <span className="text-xs text-black/45">{post.readTime}</span>
        </div>

        {/* Title + dek */}
        <h1 className="font-display tracking-tight" style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", lineHeight: 1.08, color: "#0a0a0a", letterSpacing: "-0.02em", marginBottom: "1.1rem" }}>
          {post.title}
        </h1>
        <p style={{ fontSize: "1.2rem", lineHeight: 1.55, color: "rgba(0,0,0,0.55)", marginBottom: "1.5rem" }}>
          {post.dek}
        </p>
        <div className="flex items-center gap-3 pb-8 mb-2 border-b border-black/10">
          <div className="w-9 h-9 rounded-full flex items-center justify-center text-white text-xs font-bold" style={{ background: accent }}>R</div>
          <div>
            <div className="text-sm font-medium text-black/80">{post.author}</div>
            <div className="text-xs text-black/45">Reakon · GST &amp; finance for Indian businesses</div>
          </div>
        </div>

        {/* Body */}
        <div className="pt-6">
          {post.blocks.map((block, i) => (
            <BlockView key={i} block={block} accent={accent} />
          ))}
        </div>

        {/* Key takeaways */}
        <div className="mt-12 rounded-2xl p-7" style={{ background: accent + "0a", border: `1px solid ${accent}22` }}>
          <div className="text-xs font-mono uppercase tracking-widest mb-4" style={{ color: accent }}>Key takeaways</div>
          <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
            {post.takeaways.map((t, i) => (
              <li key={i} className="flex gap-3" style={{ marginBottom: "0.75rem", color: "rgba(0,0,0,0.75)", fontSize: "1rem", lineHeight: 1.6 }}>
                <svg width="18" height="18" viewBox="0 0 20 20" fill="none" stroke={accent} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: "3px" }}>
                  <path d="M4 10l4 4 8-8" />
                </svg>
                <span>{renderInline(t, accent)}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* FAQ */}
        <section className="mt-14">
          <h2 className="font-display tracking-tight" style={{ fontSize: "clamp(1.6rem, 3vw, 2rem)", color: "#0a0a0a", marginBottom: "1.5rem" }}>
            Frequently asked questions
          </h2>
          <div className="flex flex-col gap-3">
            {post.faqs.map((f, i) => (
              <details key={i} className="group rounded-2xl px-5 py-4" style={{ background: "rgba(0,0,0,0.02)", border: "1px solid rgba(0,0,0,0.08)" }}>
                <summary className="cursor-pointer list-none flex items-center justify-between gap-4 font-medium" style={{ color: "#0a0a0a", fontSize: "1.05rem" }}>
                  {f.q}
                  <span className="text-black/30 transition-transform group-open:rotate-45 shrink-0" style={{ fontSize: "1.4rem", lineHeight: 1 }}>+</span>
                </summary>
                <p style={{ marginTop: "0.85rem", color: "rgba(0,0,0,0.65)", fontSize: "1rem", lineHeight: 1.7 }}>
                  {renderInline(f.a, accent)}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <div className="mt-14 rounded-3xl overflow-hidden text-center px-7 py-12" style={{ background: "linear-gradient(160deg, #EDF4FB 0%, #DCEAF8 100%)", border: "1px solid rgba(255,255,255,0.9)" }}>
          <h2 className="font-display tracking-tight" style={{ fontSize: "clamp(1.6rem, 3.2vw, 2.2rem)", color: "#0a0a0a", marginBottom: "0.8rem" }}>
            Stop losing the GST money that's already yours
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 1.6rem" }}>
            Forward a bill on WhatsApp and see exactly how much credit you just protected — no app, no login.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 text-base font-semibold text-white rounded-2xl transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)", boxShadow: "0 4px 16px rgba(79,110,247,0.35)" }}
            >
              Try Reakon free
            </Link>
            <a
              href="https://cal.com/reakon.in/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center h-13 px-7 py-3.5 text-base font-semibold rounded-2xl transition-opacity hover:opacity-90"
              style={{ background: "#fff", color: "#0B2252", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
            >
              Book a call
            </a>
          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <section className="mt-16">
            <div className="text-xs font-mono uppercase tracking-widest text-black/40 mb-5">Keep reading</div>
            <div className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => (
                <Link
                  key={r.slug}
                  href={`/blog/${r.slug}`}
                  className="group flex flex-col rounded-2xl p-5 border border-black/10 hover:border-black/20 hover:shadow-lg transition-all"
                >
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full self-start mb-3" style={{ background: r.tagColor + "15", color: r.tagColor }}>
                    {r.tag}
                  </span>
                  <span className="font-display tracking-tight text-base leading-snug text-black/85 group-hover:text-black transition-colors">
                    {r.title}
                  </span>
                  <span className="mt-3 text-xs text-black/40">{r.readTime}</span>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/45">© 2026 Reakon Technologies Pvt. Ltd.</p>
          <div className="flex items-center gap-6 text-sm text-black/45">
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
            <Link href="/privacy" className="hover:text-black transition-colors">Privacy</Link>
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
