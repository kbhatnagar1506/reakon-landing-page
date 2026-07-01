"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, CheckCircle2, Clock, TrendingUp } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const FEATURES = [
  "All clients, one view",
  "Bulk IMS actions",
  "Cross-client vendor intelligence",
  "Filing-ready exports",
  "Deadline tracking across the book",
];

type Status = "risk" | "stuck" | "healthy";

const CLIENTS: { name: string; gstin: string; status: Status; note: string; due: string }[] = [
  { name: "Sharma Traders", gstin: "07AABCS…1Z5", status: "risk", note: "2 vendors unfiled", due: "GSTR-3B · 4d" },
  { name: "Meera Textiles", gstin: "27AAFCM…9Q2", status: "healthy", note: "Reconciled", due: "Filed" },
  { name: "Kapoor & Sons", gstin: "09AAGCK…3P8", status: "stuck", note: "₹84,200 credit stuck", due: "IMS action" },
  { name: "Nova Electricals", gstin: "24AABCN…7R1", status: "healthy", note: "Reconciled", due: "GSTR-1 · 9d" },
  { name: "Rao Enterprises", gstin: "36AACCR…5M4", status: "risk", note: "3B mismatch", due: "GSTR-3B · 4d" },
];

const STATUS_META: Record<Status, { label: string; color: string; bg: string; Icon: typeof AlertTriangle }> = {
  risk: { label: "At risk", color: "#DC2626", bg: "rgba(220,38,38,0.10)", Icon: AlertTriangle },
  stuck: { label: "Credit stuck", color: "#D97706", bg: "rgba(217,119,6,0.12)", Icon: Clock },
  healthy: { label: "Healthy", color: "#16A34A", bg: "rgba(22,163,74,0.12)", Icon: CheckCircle2 },
};

function StatusBadge({ status }: { status: Status }) {
  const m = STATUS_META[status];
  return (
    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold" style={{ color: m.color, background: m.bg }}>
      <m.Icon className="w-3 h-3" strokeWidth={2.4} />
      {m.label}
    </span>
  );
}

function DashboardMockup() {
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{
        background: "rgba(255,255,255,0.85)",
        border: "1px solid rgba(255,255,255,0.9)",
        boxShadow: "0 8px 40px rgba(11,34,82,0.14), 0 2px 8px rgba(0,0,0,0.06)",
        backdropFilter: "blur(8px)",
        WebkitBackdropFilter: "blur(8px)",
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 sm:px-5 py-3.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FF5F57" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#FEBC2E" }} />
          <span className="w-2.5 h-2.5 rounded-full" style={{ background: "#28C840" }} />
        </div>
        <span className="font-mono text-[11px] tracking-wide" style={{ color: "rgba(0,0,0,0.4)" }}>
          Client Book — 48 active
        </span>
      </div>

      {/* Summary strip */}
      <div className="grid grid-cols-3 gap-px" style={{ background: "rgba(0,0,0,0.06)" }}>
        {[
          { label: "At risk", value: "6", color: "#DC2626" },
          { label: "Credit stuck", value: "₹3.2L", color: "#D97706" },
          { label: "Filing-ready", value: "39", color: "#16A34A" },
        ].map((s) => (
          <div key={s.label} className="px-4 py-3.5 sm:py-4" style={{ background: "rgba(255,255,255,0.9)" }}>
            <div className="text-lg sm:text-2xl font-display tracking-tight" style={{ color: s.color }}>{s.value}</div>
            <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-wide mt-0.5" style={{ color: "rgba(0,0,0,0.4)" }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Client rows */}
      <div>
        {CLIENTS.map((c, i) => (
          <div
            key={c.name}
            className="flex items-center justify-between gap-2 px-4 sm:px-5 py-3 sm:py-3.5"
            style={{ borderTop: i === 0 ? "none" : "1px solid rgba(0,0,0,0.05)" }}
          >
            <div className="min-w-0">
              <div className="text-[13px] sm:text-sm font-semibold truncate" style={{ color: "#0B2252" }}>{c.name}</div>
              <div className="font-mono text-[10px] sm:text-[11px] truncate" style={{ color: "rgba(0,0,0,0.4)" }}>{c.gstin} · {c.note}</div>
            </div>
            <div className="flex items-center gap-2 sm:gap-3 shrink-0">
              <span className="hidden sm:inline font-mono text-[11px]" style={{ color: "rgba(0,0,0,0.45)" }}>{c.due}</span>
              <StatusBadge status={c.status} />
            </div>
          </div>
        ))}
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

          {/* Mockup */}
          <div
            className="order-1 lg:order-2"
            style={{
              opacity: vis ? 1 : 0,
              transform: vis ? "translateX(0) scale(1)" : "translateX(40px) scale(0.97)",
              transition: `opacity 800ms ${EASE} 300ms, transform 800ms ${EASE} 300ms`,
            }}
          >
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
