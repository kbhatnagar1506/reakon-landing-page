"use client";

import { useEffect, useRef, useState } from "react";
import { Send, ScanSearch, ShieldCheck, ArrowDown } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const STEPS = [
  {
    num: "01",
    Icon: Send,
    title: "Forward a bill",
    desc: "Send any purchase bill to Reakon on WhatsApp — a photo, a PDF, whatever your vendor sent.",
  },
  {
    num: "02",
    Icon: ScanSearch,
    title: "Reakon reads & checks it",
    desc: "We read it, match it against the GST portal, and verify your input credit — automatically.",
  },
  {
    num: "03",
    Icon: ShieldCheck,
    title: "See your money, protected",
    desc: "Get an instant answer on exactly how much credit you just protected. No login, no effort.",
  },
];

export function HowItWorksSection() {
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

  return (
    <section
      id="how-it-works"
      ref={ref}
      className="relative py-16 lg:py-32 overflow-hidden"
    >
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* ── Header ── */}
        <div className="flex flex-col items-center text-center">
          {/* Eyebrow */}
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
            How it works
            <span className="w-8 h-px bg-black/20" />
          </span>

          {/* Heading */}
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
            From bill to protected — in three steps.
          </h2>

          {/* Subhead */}
          <p
            className="mt-5 max-w-2xl text-base lg:text-lg leading-relaxed"
            style={{
              color: "rgba(0,0,0,0.55)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: "opacity 700ms ease 200ms, transform 700ms ease 200ms",
            }}
          >
            No app to learn. No data to migrate. Just forward a bill.
          </p>
        </div>

        {/* ── Steps ── */}
        <div className="relative mt-12 lg:mt-20">
          {/* Desktop animated gradient connector line (sits behind the badges) */}
          <div
            className="pointer-events-none absolute hidden lg:block"
            style={{ top: "80px", left: "16.66%", right: "16.66%" }}
            aria-hidden="true"
          >
            <div
              className="h-px w-full origin-left"
              style={{
                background:
                  "linear-gradient(90deg, rgba(79,110,247,0) 0%, rgba(79,110,247,0.55) 14%, rgba(79,110,247,0.55) 86%, rgba(79,110,247,0) 100%)",
                transform: vis ? "scaleX(1)" : "scaleX(0)",
                transition: `transform 1100ms ${EASE} 450ms`,
              }}
            />
          </div>

          <div className="relative grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
            {STEPS.map(({ num, Icon, title, desc }, i) => (
              <div key={num} className="relative">
                <div
                  className="group relative h-full flex flex-col rounded-[20px] p-6 sm:p-7 lg:p-8"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    boxShadow:
                      "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 700ms ${EASE} ${
                      300 + i * 150
                    }ms, transform 700ms ${EASE} ${
                      300 + i * 150
                    }ms, box-shadow 300ms ease, border-color 300ms ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow =
                      "0 18px 60px rgba(11,34,82,0.14), 0 4px 14px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "rgba(79,110,247,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = vis
                      ? "translateY(0)"
                      : "translateY(24px)";
                    e.currentTarget.style.boxShadow =
                      "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  }}
                >
                  {/* Top row: gradient icon badge + faded step number */}
                  <div className="flex items-start justify-between mb-6 lg:mb-7">
                    <div
                      className="flex items-center justify-center rounded-[14px] w-12 h-12 lg:w-[52px] lg:h-[52px]"
                      style={{
                        background:
                          "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                        boxShadow: "0 6px 18px rgba(79,110,247,0.35)",
                      }}
                    >
                      <Icon
                        className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                        strokeWidth={1.75}
                      />
                    </div>
                    <span
                      className="font-display leading-none select-none text-[2.75rem] lg:text-[3.25rem]"
                      style={{
                        fontWeight: 700,
                        color: "rgba(79,110,247,0.16)",
                        letterSpacing: "-0.02em",
                      }}
                    >
                      {num}
                    </span>
                  </div>

                  {/* Text */}
                  <h3
                    className="text-xl font-display tracking-tight leading-snug mb-3"
                    style={{ color: "#000" }}
                  >
                    {title}
                  </h3>
                  <p
                    className="text-[15px] leading-relaxed"
                    style={{ color: "rgba(0,0,0,0.55)" }}
                  >
                    {desc}
                  </p>
                </div>

                {/* Mobile down-arrow connector between stacked cards */}
                {i < STEPS.length - 1 && (
                  <div
                    className="flex lg:hidden justify-center py-4"
                    aria-hidden="true"
                  >
                    <div
                      className="flex items-center justify-center rounded-full"
                      style={{
                        width: "32px",
                        height: "32px",
                        background: "rgba(79,110,247,0.1)",
                        border: "1px solid rgba(79,110,247,0.16)",
                        opacity: vis ? 1 : 0,
                        transition: `opacity 600ms ${EASE} ${450 + i * 150}ms`,
                      }}
                    >
                      <ArrowDown
                        className="w-4 h-4"
                        style={{ color: "#4F6EF7" }}
                        strokeWidth={2}
                      />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
