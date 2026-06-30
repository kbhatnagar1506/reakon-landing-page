"use client";

import { useEffect, useRef, useState } from "react";

function useInView(threshold = 0.2, rootMargin = "0px") {
  const ref = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setInView(true); },
      { threshold, rootMargin }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [threshold, rootMargin]);
  return { ref, inView };
}

const JADE = "oklch(0.62 0.15 160)";

function IconBusiness() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20 7H4a2 2 0 00-2 2v10a2 2 0 002 2h16a2 2 0 002-2V9a2 2 0 00-2-2z"/>
      <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2"/>
      <line x1="12" y1="12" x2="12" y2="16"/>
      <line x1="10" y1="14" x2="14" y2="14"/>
    </svg>
  );
}

function IconCA() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
      <polyline points="14 2 14 8 20 8"/>
      <line x1="16" y1="13" x2="8" y2="13"/>
      <line x1="16" y1="17" x2="8" y2="17"/>
      <polyline points="10 9 9 9 8 9"/>
    </svg>
  );
}

function IconTeam() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
      <circle cx="9" cy="7" r="4"/>
      <path d="M23 21v-2a4 4 0 00-3-3.87"/>
      <path d="M16 3.13a4 4 0 010 7.75"/>
    </svg>
  );
}

const cards = [
  {
    Icon: IconBusiness,
    title: "For Business Owners",
    body: "Forward a bill on WhatsApp, see your GST credit. Get paid faster with automatic reminders. Know your financial position the moment your CA posts it — no calls, no waiting.",
  },
  {
    Icon: IconCA,
    title: "For CAs & Accountants",
    body: "Post your client's P&L, balance sheet, and key figures directly to their Reakon portal. Give your clients real-time visibility without changing how you work.",
  },
  {
    Icon: IconTeam,
    title: "For Finance Teams",
    body: "Monitor every vendor's GST compliance in one place. Flag non-filers automatically, withhold the right amounts, and stop absorbing other people's tax mistakes.",
  },
];

/* Each card observes itself — fades in only when it enters the viewport */
function CardRow({ card, isFirst }: { card: typeof cards[0]; isFirst: boolean }) {
  // First card triggers immediately when the section appears.
  // Subsequent cards need to scroll into the lower portion of the viewport.
  const { ref, inView } = useInView(isFirst ? 0.15 : 0.45, isFirst ? "0px" : "-60px");

  return (
    <div
      ref={ref}
      className="relative"
      style={{
        opacity: inView ? 1 : 0.04,
        transform: inView ? "translateY(0px)" : "translateY(28px)",
        filter: inView ? "blur(0px)" : "blur(2px)",
        transition: "opacity 800ms cubic-bezier(0.25,0.46,0.45,0.94), transform 800ms cubic-bezier(0.25,0.46,0.45,0.94), filter 600ms ease",
      }}
    >
      {/* Timeline dot */}
      <div
        className="absolute -left-8 top-6 w-3 h-3 rounded-full border-2 border-background"
        style={{
          background: JADE,
          transform: "translateX(-5px)",
          boxShadow: `0 0 0 3px ${JADE}33`,
          opacity: inView ? 1 : 0,
          transition: "opacity 600ms ease 200ms",
        }}
      />

      {/* Card */}
      <div className="bg-background border border-foreground/10 rounded-2xl p-6 hover:border-foreground/20 hover:shadow-sm transition-all duration-200">
        <div
          className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 text-white"
          style={{ background: JADE }}
        >
          <card.Icon />
        </div>
        <h3 className="text-xl font-semibold text-foreground mb-3">{card.title}</h3>
        <p className="text-muted-foreground text-sm leading-relaxed">{card.body}</p>
      </div>
    </div>
  );
}

export function BuiltForSection() {
  const { ref: leftRef, inView: leftVisible } = useInView(0.2);
  const { ref: lineRef, inView: lineVisible } = useInView(0.05);

  return (
    <section className="relative py-24 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* ── LEFT ── */}
          <div
            ref={leftRef}
            className={`lg:sticky lg:top-32 transition-all duration-700 ${leftVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
          >
            <span className="inline-flex items-center gap-3 text-xs font-mono text-muted-foreground tracking-widest uppercase mb-6">
              <span className="w-8 h-px bg-foreground/30" />
              Who it&apos;s for
              <span className="w-8 h-px bg-foreground/30" />
            </span>

            <h2 className="text-4xl lg:text-5xl font-display tracking-tight leading-[1.08] mb-6" style={{ letterSpacing: "-0.02em" }}>
              Built for the way India runs its money.
            </h2>

            <p className="text-muted-foreground text-lg leading-relaxed mb-10 max-w-md">
              Whether you own the business, file its taxes, or manage its finances — Reakon fits around your workflow without asking you to change it.
            </p>

            {/* Trust badge */}
            <div className="inline-flex items-center gap-4 bg-foreground/[0.04] border border-foreground/10 rounded-2xl px-5 py-4 mb-10">
              <div className="flex -space-x-2">
                {["#4F46E5","#0EA5E9","#F59E0B"].map((c, i) => (
                  <div key={i} className="w-8 h-8 rounded-full border-2 border-background flex items-center justify-center text-white text-xs font-bold"
                    style={{ background: c, zIndex: 3 - i }}>
                    {["B","C","F"][i]}
                  </div>
                ))}
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">200+ businesses trust Reakon</div>
                <div className="text-xs text-muted-foreground">across India — and growing</div>
              </div>
            </div>

            <div>
              <a
                href="#"
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-85"
                style={{ background: JADE }}
              >
                Start free trial
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M3 8h10M9 4l4 4-4 4"/>
                </svg>
              </a>
            </div>
          </div>

          {/* ── RIGHT — vertical timeline ── */}
          <div ref={lineRef} className="relative pl-8">

            {/* Ghost line */}
            <div className="absolute left-0 top-4 bottom-4 w-px" style={{ background: "var(--foreground)", opacity: 0.08 }} />
            {/* Jade fill — grows as section enters view */}
            <div
              className="absolute left-0 top-4 w-px"
              style={{
                background: JADE,
                height: lineVisible ? "calc(100% - 2rem)" : "0%",
                opacity: lineVisible ? 1 : 0,
                transition: "height 1600ms cubic-bezier(0.16,1,0.3,1), opacity 400ms ease",
              }}
            />

            <div className="space-y-8">
              {cards.map((card, i) => (
                <CardRow key={i} card={card} isFirst={i === 0} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
