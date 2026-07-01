"use client";

import { useEffect, useRef, useState } from "react";
import { UserPlus, Users, Sparkles, ArrowDown } from "lucide-react";

const EASE = "cubic-bezier(0.22,1,0.36,1)";

const STEPS = [
  {
    num: "01",
    Icon: UserPlus,
    title: "Enroll your firm",
    desc: "Join the partner program in minutes. No cost, no commitment.",
  },
  {
    num: "02",
    Icon: Users,
    title: "Bring your clients on",
    desc: "Onboard clients in one step. Reakon starts working on their GST immediately — everything in one dashboard.",
  },
  {
    num: "03",
    Icon: Sparkles,
    title: "Do less, deliver more",
    desc: "Manual work disappears. Your clients get money back and real-time protection. You get your time — and your team's week — back.",
  },
];

export function CaPartnershipSection() {
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
    <section ref={ref} id="partnership" className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1200px] mx-auto px-5 sm:px-6 lg:px-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto">
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
            The Reakon CA Partnership Program
            <span className="w-8 h-px bg-black/20" />
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
            Bring your clients on. Watch the<br className="hidden sm:block" /> manual work disappear.
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed max-w-2xl mx-auto"
            style={{
              color: "rgba(0,0,0,0.55)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 700ms ease 200ms, transform 700ms ${EASE} 200ms`,
            }}
          >
            Reakon costs your firm nothing. Your clients subscribe because they see their own recovered money — and your firm gets the grunt work done automatically, every client in one place. Less chasing, less reconciliation, happier clients who know you brought them something that pays for itself.
          </p>
        </div>

        {/* Steps */}
        <div className="relative mt-12 lg:mt-20">
          {/* Desktop connector */}
          <div className="pointer-events-none absolute hidden lg:block" style={{ top: "80px", left: "16.66%", right: "16.66%" }} aria-hidden="true">
            <div
              className="h-px w-full origin-left"
              style={{
                background: "linear-gradient(90deg, rgba(79,110,247,0) 0%, rgba(79,110,247,0.55) 14%, rgba(79,110,247,0.55) 86%, rgba(79,110,247,0) 100%)",
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
                    boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                    backdropFilter: "blur(8px)",
                    WebkitBackdropFilter: "blur(8px)",
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 700ms ${EASE} ${300 + i * 150}ms, transform 700ms ${EASE} ${300 + i * 150}ms, box-shadow 300ms ease, border-color 300ms ease`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 18px 60px rgba(11,34,82,0.14), 0 4px 14px rgba(0,0,0,0.06)";
                    e.currentTarget.style.borderColor = "rgba(79,110,247,0.35)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = vis ? "translateY(0)" : "translateY(24px)";
                    e.currentTarget.style.boxShadow = "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)";
                    e.currentTarget.style.borderColor = "rgba(0,0,0,0.07)";
                  }}
                >
                  <div className="flex items-start justify-between mb-6 lg:mb-7">
                    <div
                      className="flex items-center justify-center rounded-[14px] w-12 h-12 lg:w-[52px] lg:h-[52px]"
                      style={{
                        background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                        boxShadow: "0 6px 18px rgba(79,110,247,0.35)",
                      }}
                    >
                      <Icon className="w-5 h-5 lg:w-6 lg:h-6 text-white" strokeWidth={1.75} />
                    </div>
                    <span
                      className="font-display leading-none select-none text-[2.75rem] lg:text-[3.25rem]"
                      style={{ fontWeight: 700, color: "rgba(79,110,247,0.16)", letterSpacing: "-0.02em" }}
                    >
                      {num}
                    </span>
                  </div>
                  <h3 className="text-xl font-display tracking-tight leading-snug mb-3" style={{ color: "#000" }}>
                    {title}
                  </h3>
                  <p className="text-[15px] leading-relaxed" style={{ color: "rgba(0,0,0,0.55)" }}>
                    {desc}
                  </p>
                </div>

                {i < STEPS.length - 1 && (
                  <div className="flex lg:hidden justify-center py-4" aria-hidden="true">
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
                      <ArrowDown className="w-4 h-4" style={{ color: "#4F6EF7" }} strokeWidth={2} />
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Callout box */}
        <div
          className="mt-12 lg:mt-16 rounded-[20px] px-6 py-8 sm:px-10 sm:py-10 text-center"
          style={{
            background: "linear-gradient(180deg, rgba(123,150,250,0.14) 0%, rgba(79,110,247,0.08) 100%)",
            border: "1px solid rgba(79,110,247,0.2)",
            boxShadow: "0 8px 40px rgba(11,34,82,0.08)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: `opacity 700ms ${EASE} 750ms, transform 700ms ${EASE} 750ms`,
          }}
        >
          <p className="font-display tracking-tight leading-snug" style={{ fontSize: "clamp(1.35rem, 4vw, 2rem)", color: "#0B2252" }}>
            Your clients pay. Your work gets easier.<br className="hidden sm:block" /> Your clients thank you for it.
          </p>
        </div>
      </div>
    </section>
  );
}
