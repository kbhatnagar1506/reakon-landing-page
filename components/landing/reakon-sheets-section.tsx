"use client";

import { useEffect, useRef, useState } from "react";

const SHEET_URL = "https://app.reakon.in/demo/ca/client/c12";

export function ReakonSheetsSection() {
  const ref = useRef<HTMLElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  // fitScale maps the fixed 1440px iframe down to the container width;
  // height is the visible crop height of the screen container.
  const [fit, setFit] = useState({ mobile: false, fitScale: 0.972, height: 820, iframeW: 1440, iframeH: 1037 });

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) setVis(true);
      },
      { threshold: 0.12 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  // Responsively fit the fixed-size (1440px) iframe to the container width.
  useEffect(() => {
    const el = screenRef.current;
    if (!el) return;

    const measure = () => {
      const w = el.clientWidth;
      if (!w) return;

      if (w < 768) {
        setFit({ mobile: true, fitScale: 1, height: 820, iframeW: w, iframeH: 820 });
        return;
      }

      const fitScale = w / 1440;
      let height: number;
      if (w >= 1200) {
        height = 820;
      } else {
        const t = Math.min(1, Math.max(0, (w - 343) / (1200 - 343)));
        const ratio = 0.85 + (0.6 - 0.85) * t;
        height = Math.min(820, w * ratio);
      }
      setFit({ mobile: false, fitScale, height, iframeW: 1440, iframeH: 1037 });
    };

    measure();

    let ro: ResizeObserver | undefined;
    if (typeof ResizeObserver !== "undefined") {
      ro = new ResizeObserver(measure);
      ro.observe(el);
    }
    window.addEventListener("resize", measure);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, []);

  return (
    <section ref={ref} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center">
          <span
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest"
            style={{
              color: "rgba(0,0,0,0.4)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: "opacity 700ms ease 0ms, transform 700ms ease 0ms",
            }}
          >
            <span className="w-8 h-px bg-black/20" />
            Introducing Reakon Sheets
            <span className="w-8 h-px bg-black/20" />
          </span>

          <h2
            className="font-display tracking-tight leading-[1.05] mt-6 max-w-3xl"
            style={{
              color: "#000",
              fontSize: "clamp(1.7rem, 6vw, 3.4rem)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 700ms ease 100ms, transform 700ms ease 100ms",
            }}
          >
            It&apos;s not about the perfect number. It&apos;s how you see it.
          </h2>

          <p
            className="mt-5 max-w-2xl text-base lg:text-lg leading-relaxed"
            style={{
              color: "rgba(0,0,0,0.55)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 700ms ease 200ms, transform 700ms ease 200ms",
            }}
          >
            Reakon Sheets lays out every figure — claimable, at-risk, deadlines — so
            clearly you never have to second-guess. No hunting, no reconciling in your
            head. Just look and know.
          </p>
        </div>

        {/* ── Live sheet ── */}
        <div
          className="mt-12 lg:mt-16 w-full flex justify-center"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(28px)",
            transition:
              "opacity 800ms cubic-bezier(0.22,1,0.36,1) 300ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 300ms",
          }}
        >
          <div
            className="w-full max-w-[1400px] rounded-2xl overflow-hidden"
            style={{
              background: "#fff",
              border: "1px solid rgba(0,0,0,0.10)",
              boxShadow:
                "0 -4px 40px rgba(11,34,82,0.10), 0 40px 80px rgba(0,0,0,0.14)",
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
                  <path
                    d="M1.5 6h9M6 1.5C4.8 3 4 4.5 4 6s.8 3 2 4.5M6 1.5C7.2 3 8 4.5 8 6s-.8 3-2 4.5"
                    stroke="rgba(0,0,0,0.3)"
                    strokeWidth="1.2"
                  />
                </svg>
                <span className="font-mono text-[11px]" style={{ color: "rgba(0,0,0,0.45)" }}>
                  app.reakon.in/demo/ca
                </span>
              </div>
            </div>

            {/* Scaled iframe */}
            <div
              ref={screenRef}
              style={{ height: `${fit.height}px`, position: "relative", overflow: "hidden" }}
            >
              <iframe
                src={SHEET_URL}
                title="Reakon Sheets"
                style={{
                  border: "none",
                  display: "block",
                  position: "absolute",
                  top: 0,
                  left: 0,
                  width: fit.mobile ? "100%" : `${fit.iframeW}px`,
                  height: fit.mobile ? "100%" : `${fit.iframeH}px`,
                  transform: fit.mobile ? "none" : `scale(${fit.fitScale})`,
                  transformOrigin: "top left",
                  pointerEvents: "none",
                }}
              />
              {/* Click overlay → open the full sheet in a new tab */}
              <div
                style={{ position: "absolute", inset: 0, cursor: "pointer" }}
                onClick={() => window.open(SHEET_URL, "_blank")}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
