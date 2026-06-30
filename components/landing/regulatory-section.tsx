"use client";

import { useEffect, useRef, useState } from "react";
import { AlertTriangle, Clock } from "lucide-react";

export function RegulatorySection() {
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const stagger = (delay: number) => ({
    opacity: vis ? 1 : 0,
    transform: vis ? "translateY(0)" : "translateY(24px)",
    transition: `opacity 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms`,
  });

  return (
    <section ref={ref} className="relative py-16 lg:py-20">
      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* ── The band: a single prominent glass panel ── */}
        <div
          className="group relative overflow-hidden"
          style={{
            background:
              "linear-gradient(115deg, rgba(79,110,247,0.06) 0%, rgba(255,255,255,0.72) 45%, rgba(255,255,255,0.7) 100%)",
            border: "1px solid rgba(255,255,255,0.9)",
            borderRadius: 24,
            boxShadow:
              "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
            backdropFilter: "blur(8px)",
            WebkitBackdropFilter: "blur(8px)",
            opacity: vis ? 1 : 0,
            transform: vis
              ? "translateY(0) scale(1)"
              : "translateY(24px) scale(0.985)",
            transition:
              "opacity 800ms cubic-bezier(0.22,1,0.36,1), transform 800ms cubic-bezier(0.22,1,0.36,1), box-shadow 300ms ease, border-color 300ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.boxShadow =
              "0 18px 60px rgba(11,34,82,0.14), 0 4px 12px rgba(0,0,0,0.05)";
            e.currentTarget.style.borderColor = "rgba(79,110,247,0.25)";
            e.currentTarget.style.transform = "translateY(-4px) scale(1)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.boxShadow =
              "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.9)";
            e.currentTarget.style.transform = vis
              ? "translateY(0) scale(1)"
              : "translateY(24px) scale(0.985)";
          }}
        >
          {/* Left brand-blue accent bar */}
          <div
            className="pointer-events-none absolute left-0 top-0 bottom-0 w-[5px]"
            style={{
              background:
                "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
            }}
          />

          {/* Soft brand glow, top-left */}
          <div
            className="pointer-events-none absolute -top-24 -left-16 w-[260px] h-[200px] lg:w-[420px] lg:h-[320px] rounded-full"
            style={{
              background: "rgba(79,110,247,0.10)",
              filter: "blur(60px)",
            }}
          />

          {/* Hairline gradient sweep along the top */}
          <div
            className="pointer-events-none absolute top-0 left-0 right-0 h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent 0%, rgba(79,110,247,0.4) 30%, rgba(79,110,247,0.15) 70%, transparent 100%)",
            }}
          />

          {/* Faded oversized year watermark */}
          <span
            aria-hidden
            className="pointer-events-none absolute select-none font-display leading-none right-3 -bottom-3 text-[4.5rem] lg:right-6 lg:-bottom-5 lg:text-[clamp(7rem,16vw,12rem)]"
            style={{
              fontWeight: 700,
              color: "rgba(79,110,247,0.05)",
              letterSpacing: "-0.04em",
            }}
          >
            2026
          </span>

          {/* Content */}
          <div className="relative z-10 flex flex-col lg:flex-row lg:items-center gap-6 lg:gap-12 px-5 py-8 sm:px-10 sm:py-9 lg:px-14 lg:py-12">
            {/* Left rail: icon badge + pill */}
            <div
              className="flex flex-row lg:flex-col items-center lg:items-start gap-5 shrink-0"
              style={stagger(100)}
            >
              {/* Filled brand-blue-gradient icon badge */}
              <div
                className="flex items-center justify-center shrink-0"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 14,
                  background:
                    "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                  boxShadow:
                    "0 8px 24px rgba(61,89,232,0.32), inset 0 1px 0 rgba(255,255,255,0.25)",
                }}
              >
                <AlertTriangle className="w-7 h-7 text-white" strokeWidth={2} />
              </div>

              {/* Pill */}
              <span
                className="inline-flex items-center gap-2 rounded-full font-mono uppercase text-[11px] tracking-widest px-3 py-1.5"
                style={{
                  background: "rgba(79,110,247,0.1)",
                  color: "#3D59E8",
                  border: "1px solid rgba(79,110,247,0.2)",
                }}
              >
                <Clock className="w-3 h-3" strokeWidth={2.2} />
                Why now
              </span>
            </div>

            {/* Vertical divider on desktop */}
            <div
              className="hidden lg:block self-stretch w-px shrink-0"
              style={{
                ...stagger(160),
                background:
                  "linear-gradient(180deg, transparent, rgba(11,34,82,0.12), transparent)",
              }}
            />

            {/* Right: statement */}
            <div className="flex-1 min-w-0">
              <h2
                className="font-display tracking-tight leading-[1.05] mb-4"
                style={{
                  ...stagger(200),
                  color: "#000",
                  fontSize: "clamp(1.6rem, 3vw, 2.4rem)",
                }}
              >
                GST is changing.
              </h2>

              <p
                className="text-base lg:text-lg leading-relaxed max-w-3xl"
                style={{ ...stagger(300), color: "rgba(0,0,0,0.6)" }}
              >
                From 2026,{" "}
                <span style={{ color: "#0B2252", fontWeight: 500 }}>
                  IMS is mandatory
                </span>{" "}
                and ITC is being locked to your 2B — credit your vendors
                don&apos;t file for will be{" "}
                <span style={{ color: "#0B2252", fontWeight: 500 }}>
                  lost automatically
                </span>
                .{" "}
                <span style={{ color: "#3D59E8", fontWeight: 500 }}>
                  Reakon keeps you ahead.
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
