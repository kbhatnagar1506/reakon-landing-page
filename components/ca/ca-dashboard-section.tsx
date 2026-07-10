"use client";

import { useEffect, useRef, useState } from "react";
import { TrendingUp } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const FEATURES = [
  "All clients, one view",
  "Bulk IMS actions",
  "Cross-client vendor intelligence",
  "Filing-ready exports",
  "Deadline tracking across the book",
];

const CA_URL = "https://app.reakon.in/demo/ca";

function DashboardMockup() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "#fff",
        border: "1px solid rgba(0,0,0,0.10)",
        boxShadow: "0 8px 40px rgba(11,34,82,0.14), 0 2px 8px rgba(0,0,0,0.06)",
      }}
    >
      {/* Browser chrome */}
      <div
        className="flex items-center gap-3 px-4 py-3"
        style={{ background: "#F5F5F5", borderBottom: "1px solid rgba(0,0,0,0.08)" }}
      >
        <div className="flex items-center gap-1.5 shrink-0">
          <span className="w-3 h-3 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-3 h-3 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <div
          className="flex-1 flex items-center gap-2 rounded-md px-3 py-1.5"
          style={{ background: "#fff", border: "1px solid rgba(0,0,0,0.10)" }}
        >
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <circle cx="6" cy="6" r="5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" />
            <path d="M1.5 6h9M6 1.5C4.8 3 4 4.5 4 6s.8 3 2 4.5M6 1.5C7.2 3 8 4.5 8 6s-.8 3-2 4.5" stroke="rgba(0,0,0,0.3)" strokeWidth="1.2" />
          </svg>
          <span className="font-mono text-[11px]" style={{ color: "rgba(0,0,0,0.45)" }}>app.reakon.in/demo/ca</span>
        </div>
      </div>

      {/* Scaled iframe — fixed pixel height prevents layout blowout */}
      <div style={{ position: "relative", width: "100%", height: "390px", overflow: "hidden", contain: "strict" }}>
        <iframe
          src={CA_URL}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "1280px",
            height: "820px",
            border: "none",
            transform: "scale(0.469)",
            transformOrigin: "top left",
            pointerEvents: "none",
          }}
          title="Reakon CA dashboard"
        />
        {/* Click overlay → open in new tab */}
        <div
          style={{ position: "absolute", inset: 0, cursor: "pointer" }}
          onClick={() => window.open(CA_URL, "_blank")}
        />
      </div>
    </div>
  );
}

export function CaDashboardSection() {
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">
          {/* Text */}
          <div className="order-2 lg:order-1">
            <span
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest mb-6"
              style={{
                color: "rgba(0,0,0,0.4)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(16px)",
                transition: `opacity 700ms ease, transform 700ms ${EASE}`,
              }}
            >
              <span className="w-6 h-px bg-black/20" />
              Built for a firm, not a single business
            </span>
            <h2
              className="font-display tracking-tight leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(1.8rem, 5vw, 3.4rem)",
                color: "#000",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms ease 100ms, transform 700ms ${EASE} 100ms`,
              }}
            >
              Your entire client book, on one screen.
            </h2>
            <p
              className="text-base sm:text-lg leading-relaxed mb-8"
              style={{
                color: "rgba(0,0,0,0.55)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms ease 200ms, transform 700ms ${EASE} 200ms`,
              }}
            >
              See every client&apos;s GST health at a glance — who&apos;s at risk, whose credit is stuck, whose vendors haven&apos;t filed, what&apos;s due when. Handle IMS actions in bulk. Spot problems across your whole book before they become notices.
            </p>
            <div
              className="flex flex-col gap-2.5"
              style={{
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: `opacity 700ms ease 300ms, transform 700ms ${EASE} 300ms`,
              }}
            >
              {FEATURES.map((f) => (
                <div key={f} className="flex items-center gap-3">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full shrink-0" style={{ background: "rgba(79,110,247,0.12)" }}>
                    <TrendingUp className="w-3 h-3" style={{ color: "#4F6EF7" }} strokeWidth={2.5} />
                  </span>
                  <span className="text-[15px]" style={{ color: "rgba(0,0,0,0.7)" }}>{f}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Mockup (static, no animation) */}
          <div className="order-1 lg:order-2">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
