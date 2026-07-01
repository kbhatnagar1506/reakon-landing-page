"use client";

import { useEffect, useRef, useState } from "react";
import { MessageSquareWarning, FileSpreadsheet, TrendingDown, PhoneCall } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const CARDS = [
  {
    Icon: MessageSquareWarning,
    title: "Chasing data",
    body: "Half your month goes to “sir bill bhej dijiye.” Clients send documents late, incomplete, or not at all — and your filing waits on them.",
  },
  {
    Icon: FileSpreadsheet,
    title: "Reconciliation that's breaking",
    body: "Download 2B, export Tally, VLOOKUP in Excel, fix mismatches by the 20th. With 3B locking and IMS now mandatory, that workflow doesn't just take time — it's starting to fail.",
  },
  {
    Icon: TrendingDown,
    title: "Money quietly lost",
    body: "Every month, unclaimed invoices and vendor misfilings cost your clients real credit. Nobody's watching it in real time — and when it's gone, it's gone.",
  },
  {
    Icon: PhoneCall,
    title: "Communication eats the week",
    body: "Chasing clients, chasing vendors, explaining the same thing again. Your team's time disappears into follow-ups.",
  },
];

export function CaPainSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl">
          <span
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest mb-6"
            style={{
              color: "rgba(0,0,0,0.4)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 700ms ease, transform 700ms ${EASE}`,
            }}
          >
            <span className="w-8 h-px bg-black/20" />
            We know your month
          </span>
          <h2
            className="font-display tracking-tight leading-[1.05] mb-6"
            style={{
              fontSize: "clamp(1.8rem, 6vw, 3.6rem)",
              color: "#000",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 700ms ease 100ms, transform 700ms ${EASE} 100ms`,
            }}
          >
            You didn&apos;t become a CA to<br className="hidden sm:block" /> chase bills on WhatsApp.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl"
            style={{
              color: "rgba(0,0,0,0.55)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 700ms ease 200ms, transform 700ms ${EASE} 200ms`,
            }}
          >
            We&apos;ve spent months sitting with CAs. The same problems come up every single time:
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6 mt-10 lg:mt-14">
          {CARDS.map(({ Icon, title, body }, i) => (
            <div
              key={title}
              className="group flex flex-col rounded-[20px] p-6 sm:p-7 lg:p-8"
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(24px)",
                transition: `opacity 700ms ${EASE} ${250 + i * 120}ms, transform 700ms ${EASE} ${250 + i * 120}ms, box-shadow 300ms ease, border-color 300ms ease`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 18px 60px rgba(11,34,82,0.14), 0 4px 14px rgba(0,0,0,0.06)";
                e.currentTarget.style.borderColor = "rgba(79,110,247,0.30)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)";
                e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
              }}
            >
              <div
                className="flex items-center justify-center rounded-[14px] w-12 h-12 lg:w-[52px] lg:h-[52px] mb-5 lg:mb-6"
                style={{
                  background: "rgba(79,110,247,0.10)",
                  border: "1px solid rgba(79,110,247,0.18)",
                }}
              >
                <Icon className="w-5 h-5 lg:w-6 lg:h-6" style={{ color: "#4F6EF7" }} strokeWidth={1.75} />
              </div>
              <h3 className="text-xl font-display tracking-tight leading-snug mb-3" style={{ color: "#000" }}>
                {title}
              </h3>
              <p className="text-[15px] leading-relaxed" style={{ color: "rgba(0,0,0,0.55)" }}>
                {body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
