"use client";

import { useEffect, useRef, useState } from "react";

const CDN = "https://pub-00ef4ee2038e4d60a65a29395f3be72c.r2.dev";
const EASE = "cubic-bezier(0.22,1,0.36,1)";

const STRIP = ["No manual work", "Books live", "Reconciled real-time", "Saved instantly"];

const PILLARS = [
  {
    num: "01",
    label: "No manual work",
    title: "No manual work.",
    body: "Your client forwards a bill on WhatsApp. Reakon reads it, matches it, files it into the purchase register — instantly. No data entry. No Excel. No VLOOKUP at midnight.",
    video: `${CDN}/whatsapp-demo.mp4`,
    side: "right",
  },
  {
    num: "02",
    label: "Books, live and ready",
    title: "Books, live and ready.",
    body: "The purchase register builds itself as bills come in. Always current, always filing-ready, always exportable to Tally. When you sit down to file, it's already done.",
    video: `${CDN}/pl-demo.mp4`,
    side: "left",
  },
  {
    num: "03",
    label: "Reconciled in real time",
    title: "Reconciled in real time.",
    body: "Every bill matched against 2B the moment it lands — not on the 14th, not at month-end. Mismatches surface the instant they happen, while you can still fix them.",
    video: `${CDN}/reminders-demo.mp4`,
    side: "right",
  },
  {
    num: "04",
    label: "Notified & saved, in real time",
    title: "Notified & saved, in real time.",
    body: "Vendor hasn't filed? Credit at risk? Deadline near? You and your client know the moment it happens — and the money gets saved before it's lost.",
    video: `${CDN}/vendor-demo.mp4`,
    side: "left",
  },
];

function AutoVideo({ src }: { src: string }) {
  const ref = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    const attempt = () => v.play().catch(() => {});
    attempt();
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) attempt(); }, { threshold: 0.1 });
    obs.observe(v);
    return () => obs.disconnect();
  }, []);
  return (
    <div
      className="w-full rounded-2xl overflow-hidden"
      style={{ boxShadow: "0 8px 40px rgba(11,34,82,0.12), 0 2px 8px rgba(0,0,0,0.08)" }}
    >
      <video ref={ref} className="w-full h-auto block bg-black" autoPlay loop muted playsInline>
        <source src={src} type="video/mp4" />
      </video>
    </div>
  );
}

function PillarRow({ pillar, index }: { pillar: typeof PILLARS[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.25 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  const isLeft = pillar.side === "left";

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center transition-all duration-700 ${
        vis ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* Video — always above text on mobile */}
      <div className={isLeft ? "order-1 lg:order-2" : "order-1"}>
        <AutoVideo src={pillar.video} />
      </div>

      {/* Text */}
      <div className={isLeft ? "order-2 lg:order-1" : "order-2"}>
        <div className="flex items-center gap-3 mb-4 lg:mb-5">
          <span className="font-mono text-xs tracking-widest" style={{ color: "#4F6EF7" }}>
            {pillar.num}
          </span>
          <span className="font-mono text-[11px] uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.4)" }}>
            {pillar.label}
          </span>
        </div>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-display tracking-tight leading-[1.12] mb-4 lg:mb-5" style={{ color: "#000" }}>
          {pillar.title}
        </h3>
        <p className="leading-relaxed text-base lg:text-lg" style={{ color: "rgba(0,0,0,0.55)" }}>
          {pillar.body}
        </p>
      </div>
    </div>
  );
}

export function CaShiftSection() {
  const headerRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const el = headerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section className="relative py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div ref={headerRef} className="text-center max-w-3xl mx-auto mb-14 lg:mb-24">
          <span
            className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest mb-5 lg:mb-6"
            style={{
              color: "rgba(0,0,0,0.4)",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 700ms ease, transform 700ms ${EASE}`,
            }}
          >
            <span className="w-8 h-px bg-black/30" />
            What changes with Reakon
            <span className="w-8 h-px bg-black/30" />
          </span>
          <h2
            className="font-display tracking-tight leading-[1.05]"
            style={{
              fontSize: "clamp(2rem, 7vw, 4rem)",
              color: "#000",
              opacity: vis ? 1 : 0,
              transform: vis ? "translateY(0)" : "translateY(20px)",
              transition: `opacity 700ms ease 100ms, transform 700ms ${EASE} 100ms`,
            }}
          >
            No manual work. Everything, live.
          </h2>

          {/* Strip labels */}
          <div
            className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 mt-7"
            style={{
              opacity: vis ? 1 : 0,
              transition: "opacity 700ms ease 250ms",
            }}
          >
            {STRIP.map((s, i) => (
              <div key={s} className="flex items-center gap-3">
                {i > 0 && <span className="w-1 h-1 rounded-full" style={{ background: "rgba(79,110,247,0.4)" }} />}
                <span className="font-mono text-[11px] sm:text-xs tracking-wide" style={{ color: "rgba(0,0,0,0.5)" }}>
                  {s}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Pillars */}
        <div className="space-y-16 lg:space-y-40">
          {PILLARS.map((p, i) => (
            <PillarRow key={p.num} pillar={p} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
