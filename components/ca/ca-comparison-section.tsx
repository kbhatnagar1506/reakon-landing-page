"use client";

import { useEffect, useRef, useState } from "react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

type Mark =
  | { type: "yes" }
  | { type: "no" }
  | { type: "text"; label: string; tone: "good" | "bad" };

const ROWS: { feature: string; reakon: Mark; others: Mark }[] = [
  { feature: "Reads bills from WhatsApp automatically", reakon: { type: "yes" }, others: { type: "no" } },
  { feature: "Reconciles before you open the portal", reakon: { type: "yes" }, others: { type: "no" } },
  { feature: "Flags vendor misfiling in real time", reakon: { type: "yes" }, others: { type: "no" } },
  { feature: "Proactive deadline & credit-risk alerts", reakon: { type: "yes" }, others: { type: "no" } },
  { feature: "Builds the purchase register automatically", reakon: { type: "yes" }, others: { type: "no" } },
  {
    feature: "Manual work required to get filing-ready",
    reakon: { type: "text", label: "None", tone: "good" },
    others: { type: "text", label: "Heavy", tone: "bad" },
  },
];

function MarkCell({ mark, highlight }: { mark: Mark; highlight?: boolean }) {
  if (mark.type === "yes") {
    return (
      <span
        className="inline-flex items-center justify-center w-7 h-7 rounded-full"
        style={{ background: highlight ? "rgba(79,110,247,0.15)" : "rgba(34,197,94,0.12)" }}
      >
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke={highlight ? "#4F6EF7" : "#16a34a"} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M4 10l4 4 8-8" />
        </svg>
      </span>
    );
  }
  if (mark.type === "no") {
    return (
      <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: "rgba(0,0,0,0.04)" }}>
        <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M5 5l10 10M15 5L5 15" />
        </svg>
      </span>
    );
  }
  const good = mark.tone === "good";
  return (
    <span
      className="inline-flex items-center justify-center px-2.5 py-1 rounded-full text-[11px] font-semibold"
      style={{
        color: good ? "#4F6EF7" : "#D97706",
        background: good ? "rgba(79,110,247,0.12)" : "rgba(217,119,6,0.12)",
      }}
    >
      {mark.label}
    </span>
  );
}

export function CaComparisonSection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.12 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1000px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className={`max-w-3xl mb-10 lg:mb-14 transition-all duration-700 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest mb-6" style={{ color: "rgba(0,0,0,0.4)" }}>
            <span className="w-8 h-px bg-black/20" />
            Why CAs switch
          </span>
          <h2 className="font-display tracking-tight mb-4 leading-[1.05]" style={{ fontSize: "clamp(1.7rem, 6vw, 3.4rem)", color: "#000" }}>
            You&apos;ve used the others. You know what&apos;s missing.
          </h2>
        </div>

        {/* Table card */}
        <div className={`transition-all duration-700 delay-200 ${vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Mobile: stacked cards */}
          <div className="sm:hidden space-y-3">
            {ROWS.map((row, i) => (
              <div
                key={i}
                className="rounded-2xl overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.7)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div className="px-4 pt-4 pb-3 text-sm font-semibold" style={{ color: "rgba(0,0,0,0.8)" }}>{row.feature}</div>
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{
                    background: "linear-gradient(180deg, rgba(123,150,250,0.14) 0%, rgba(79,110,247,0.10) 100%)",
                    borderTop: "1px solid rgba(79,110,247,0.18)",
                  }}
                >
                  <span className="text-sm font-bold tracking-wide" style={{ color: "#3D59E8" }}>Reakon</span>
                  <MarkCell mark={row.reakon} highlight />
                </div>
                <div className="flex items-center justify-between px-4 py-2.5">
                  <span className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Computax / typical GST software</span>
                  <MarkCell mark={row.others} />
                </div>
              </div>
            ))}
          </div>

          {/* Desktop table */}
          <div
            className="hidden sm:block rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <table className="w-full border-collapse">
              <colgroup>
                <col className="w-[52%]" />
                <col className="w-[24%]" />
                <col className="w-[24%]" />
              </colgroup>
              <thead>
                <tr>
                  <th className="text-left p-5" />
                  <th className="text-center p-0 align-bottom">
                    <div
                      className="px-4 py-3 mx-1 rounded-t-xl"
                      style={{
                        background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                        boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 16px rgba(79,110,247,0.35)",
                      }}
                    >
                      <div className="text-sm font-bold tracking-wide text-white">Reakon</div>
                    </div>
                  </th>
                  <th className="p-5 text-center text-sm font-medium leading-snug" style={{ color: "rgba(0,0,0,0.4)" }}>
                    Computax / typical<br />GST software
                  </th>
                </tr>
              </thead>
              <tbody>
                {ROWS.map((row, i) => (
                  <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <td className="py-4 px-5 text-sm font-medium" style={{ color: "rgba(0,0,0,0.8)" }}>{row.feature}</td>
                    <td className="py-4 text-center" style={{ background: "rgba(79,110,247,0.06)", borderLeft: "1px solid rgba(79,110,247,0.12)", borderRight: "1px solid rgba(79,110,247,0.12)" }}>
                      <MarkCell mark={row.reakon} highlight />
                    </td>
                    <td className="py-4 text-center"><MarkCell mark={row.others} /></td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr>
                  <td />
                  <td className="rounded-b-xl h-3" style={{ background: "rgba(79,110,247,0.06)", borderLeft: "1px solid rgba(79,110,247,0.12)", borderRight: "1px solid rgba(79,110,247,0.12)", borderBottom: "1px solid rgba(79,110,247,0.12)" }} />
                  <td />
                </tr>
              </tfoot>
            </table>
          </div>

          {/* Pull quote + footnote */}
          <div className="mt-8 lg:mt-10">
            <p className="text-lg sm:text-xl font-display italic text-center" style={{ color: "rgba(0,0,0,0.75)" }}>
              &ldquo;The others give you software to operate. Reakon does the work for you.&rdquo;
            </p>
            <p className="text-xs text-center mt-3" style={{ color: "rgba(0,0,0,0.35)" }}>
              Based on publicly available feature documentation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
