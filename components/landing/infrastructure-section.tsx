"use client";

import { useEffect, useRef, useState } from "react";

const rows = [
  {
    feature: "Works with your WhatsApp",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Recovers ITC from missing / unfiled bills",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "partial" },
    vyapar: { value: "partial" },
  },
  {
    feature: "Flags risky vendors before deadline",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Chases your customers for payment",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Your CA posts P&L to your portal",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Built for disorganised businesses",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "cross" },
    vyapar: { value: "cross" },
  },
  {
    feature: "AI reads your bills automatically",
    reakon: { value: "check" },
    zoho: { value: "cross" },
    smartgst: { value: "partial" },
    vyapar: { value: "cross" },
  },
  {
    feature: "Works alongside your existing CA",
    reakon: { value: "check" },
    zoho: { value: "partial" },
    smartgst: { value: "cross" },
    vyapar: { value: "partial" },
  },
];

function Cell({ value, highlight }: { value: string; highlight?: boolean }) {
  if (value === "check") {
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
  if (value === "partial") {
    return (
      <span className="inline-flex items-center justify-center px-2 py-0.5 rounded-full text-[11px] font-medium" style={{ background: "rgba(0,0,0,0.05)", color: "rgba(0,0,0,0.45)" }}>
        Partial
      </span>
    );
  }
  return (
    <span className="inline-flex items-center justify-center w-7 h-7 rounded-full" style={{ background: "rgba(0,0,0,0.04)" }}>
      <svg className="w-4 h-4" viewBox="0 0 20 20" fill="none" stroke="rgba(0,0,0,0.3)" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 5l10 10M15 5L5 15" />
      </svg>
    </span>
  );
}

export function InfrastructureSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) obs.observe(sectionRef.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="infrastructure" className="relative hidden md:block py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div className={`max-w-3xl mb-10 lg:mb-14 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <span className="inline-flex items-center gap-3 text-[11px] font-mono tracking-widest uppercase mb-6" style={{ color: "rgba(0,0,0,0.4)" }}>
            <span className="w-8 h-px bg-black/20" />
            Why Reakon
          </span>
          <h2 className="font-display tracking-tight mb-6 leading-[1.05]" style={{ fontSize: "clamp(1.7rem, 7vw, 3.6rem)", color: "#000" }}>
            Built for how Indian businesses<br className="hidden lg:block" /> actually work.
          </h2>
          <p className="text-base sm:text-lg leading-relaxed max-w-2xl" style={{ color: "rgba(0,0,0,0.55)" }}>
            Other tools start after your data is in the books — they only check what&apos;s already entered. Reakon starts where the money actually leaks: the bill sitting in your WhatsApp right now.
          </p>
        </div>

        {/* Table card */}
        <div className={`transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Mobile: stacked cards (one per feature) */}
          <div className="md:hidden space-y-3">
            {rows.map((row, i) => (
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
                <div className="px-4 pt-4 pb-3 text-sm font-semibold" style={{ color: "rgba(0,0,0,0.8)" }}>
                  {row.feature}
                </div>
                {/* Reakon — emphasized row */}
                <div
                  className="flex items-center justify-between px-4 py-3"
                  style={{
                    background: "linear-gradient(180deg, rgba(123,150,250,0.14) 0%, rgba(79,110,247,0.10) 100%)",
                    borderTop: "1px solid rgba(79,110,247,0.18)",
                    borderBottom: "1px solid rgba(79,110,247,0.10)",
                  }}
                >
                  <span className="text-sm font-bold tracking-wide" style={{ color: "#3D59E8" }}>Reakon</span>
                  <Cell value={row.reakon.value} highlight />
                </div>
                {/* Competitors */}
                <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <span className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Zoho Books</span>
                  <Cell value={row.zoho.value} />
                </div>
                <div className="flex items-center justify-between px-4 py-2.5" style={{ borderBottom: "1px solid rgba(0,0,0,0.05)" }}>
                  <span className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Smart GST Auditor</span>
                  <Cell value={row.smartgst.value} />
                </div>
                <div className="flex items-center justify-between px-4 py-2.5">
                  <span className="text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Vyapar / Suvit</span>
                  <Cell value={row.vyapar.value} />
                </div>
              </div>
            ))}
          </div>

          <div
            className="hidden md:block rounded-2xl overflow-hidden"
            style={{
              background: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(255,255,255,0.9)",
              boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
              backdropFilter: "blur(8px)",
            }}
          >
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <colgroup>
                  <col className="w-[36%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                  <col className="w-[16%]" />
                </colgroup>

                {/* Column headers */}
                <thead>
                  <tr>
                    <th className="text-left p-5" />
                    {/* Reakon — highlighted */}
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
                    <th className="p-5 text-center text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Zoho Books</th>
                    <th className="p-5 text-center text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Smart GST Auditor</th>
                    <th className="p-5 text-center text-sm font-medium" style={{ color: "rgba(0,0,0,0.4)" }}>Vyapar / Suvit</th>
                  </tr>
                </thead>

                <tbody>
                  {rows.map((row, i) => (
                    <tr key={i} style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                      {/* Feature label */}
                      <td className="py-4 px-5 text-sm font-medium" style={{ color: "rgba(0,0,0,0.8)" }}>
                        {row.feature}
                      </td>

                      {/* Reakon — blue tinted column */}
                      <td className="py-4 text-center mx-1" style={{ background: "rgba(79,110,247,0.06)", borderLeft: "1px solid rgba(79,110,247,0.12)", borderRight: "1px solid rgba(79,110,247,0.12)" }}>
                        <Cell value={row.reakon.value} highlight />
                      </td>

                      {/* Competitors */}
                      <td className="py-4 text-center"><Cell value={row.zoho.value} /></td>
                      <td className="py-4 text-center"><Cell value={row.smartgst.value} /></td>
                      <td className="py-4 text-center"><Cell value={row.vyapar.value} /></td>
                    </tr>
                  ))}
                </tbody>

                {/* Bottom cap on Reakon column */}
                <tfoot>
                  <tr>
                    <td />
                    <td className="rounded-b-xl h-3" style={{ background: "rgba(79,110,247,0.06)", borderLeft: "1px solid rgba(79,110,247,0.12)", borderRight: "1px solid rgba(79,110,247,0.12)", borderBottom: "1px solid rgba(79,110,247,0.12)" }} />
                    <td /><td /><td />
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>

          {/* Footer line */}
          <div className="mt-8 lg:mt-10">
            <p className="text-base sm:text-lg font-display italic text-center" style={{ color: "rgba(0,0,0,0.7)" }}>
              &ldquo;The others give you software to manage. Reakon just gets you your money.&rdquo;
            </p>
            <p className="text-xs text-center mt-3" style={{ color: "rgba(0,0,0,0.35)" }}>
              Competitive comparisons based on publicly available feature documentation. All claims are made in good faith and can be substantiated.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
