"use client";

import { useEffect, useRef, useState } from "react";

export function FounderSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="founder" className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1280px] mx-auto px-5 sm:px-6 lg:px-12">

        {/* Header */}
        <div
          className="text-center mb-8 lg:mb-12"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 700ms ease, transform 700ms ease",
          }}
        >
          <span className="inline-flex items-center justify-center flex-wrap gap-2 sm:gap-3 text-[11px] font-mono uppercase tracking-widest mb-4 lg:mb-5" style={{ color: "rgba(0,0,0,0.4)" }}>
            <span className="w-8 h-px bg-black/20" />
            A word from our founder
            <span className="w-8 h-px bg-black/20" />
          </span>
          <h2 className="font-display tracking-tight leading-[1.05]" style={{ fontSize: "clamp(1.75rem, 4vw, 3.4rem)", color: "#000" }}>
            Why we built Reakon
          </h2>
        </div>

        {/* Video */}
        <div
          className="relative rounded-2xl overflow-hidden mx-auto"
          style={{
            aspectRatio: "16/9",
            boxShadow: "0 12px 50px rgba(11,34,82,0.14), 0 2px 8px rgba(0,0,0,0.08)",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0) scale(1)" : "translateY(40px) scale(0.97)",
            transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1) 200ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 200ms",
          }}
        >
          {vis && (
            <iframe
              src="https://www.youtube.com/embed/FSeVPqUQQrs?autoplay=1&mute=1&loop=1&playlist=FSeVPqUQQrs&rel=0&modestbranding=1"
              title="A word from our founder"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
              allowFullScreen
              loading="lazy"
              className="w-full h-full"
              style={{ border: "none", display: "block" }}
            />
          )}
        </div>

      </div>
    </section>
  );
}
