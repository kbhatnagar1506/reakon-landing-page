"use client";

import { useEffect, useRef, useState } from "react";

function ConnectorsVideo({ vis }: { vis: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const v = videoRef.current;
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
      className="relative rounded-2xl overflow-hidden"
      style={{
        boxShadow: "0 8px 40px rgba(11,34,82,0.12), 0 2px 8px rgba(0,0,0,0.08)",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateX(0) scale(1)" : "translateX(40px) scale(0.97)",
        transition: "opacity 800ms cubic-bezier(0.22,1,0.36,1) 300ms, transform 800ms cubic-bezier(0.22,1,0.36,1) 300ms",
      }}
    >
      <video ref={videoRef} autoPlay muted loop playsInline className="w-full h-auto block" style={{ display: "block" }}>
        <source src="/connectors-demo.mp4" type="video/mp4" />
        <source src="/connectors-demo.mov" type="video/quicktime" />
      </video>
    </div>
  );
}

export function ConnectorsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="connectors" className="relative py-16 lg:py-32 overflow-hidden">

      {/* Cloud blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-[10%] right-[-6%] w-[260px] h-[140px] lg:w-[420px] lg:h-[220px]" style={{ background:"radial-gradient(ellipse, rgba(255,255,255,0.65) 0%, transparent 70%)", filter:"blur(32px)", borderRadius:"50%" }} />
        <div className="absolute top-[55%] right-[5%] w-[220px] h-[120px] lg:w-[360px] lg:h-[180px]" style={{ background:"radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)", filter:"blur(28px)", borderRadius:"50%" }} />
        <div className="absolute top-[30%] right-[15%] w-[300px] h-[140px] lg:w-[500px] lg:h-[200px]" style={{ background:"radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)", filter:"blur(40px)", borderRadius:"50%" }} />
        <div className="absolute top-[-5%] right-[30%] w-[200px] h-[110px] lg:w-[300px] lg:h-[160px]" style={{ background:"radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)", filter:"blur(24px)", borderRadius:"50%" }} />
      </div>

      <div className="max-w-[1200px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-20 items-center">

          {/* Left — text */}
          <div>
            <span
              className="inline-flex items-center gap-3 text-[11px] font-mono uppercase tracking-widest mb-6"
              style={{
                color: "rgba(0,0,0,0.4)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(12px)",
                transition: "opacity 700ms ease, transform 700ms ease",
              }}
            >
              <span className="w-6 h-px bg-black/20" />
              Connected to everything that matters
            </span>

            <h2
              className="font-display tracking-tight leading-[1.05] mb-6"
              style={{
                fontSize: "clamp(1.85rem, 3.6vw, 3.2rem)",
                color: "#000",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(20px)",
                transition: "opacity 700ms ease 100ms, transform 700ms ease 100ms",
              }}
            >
              Reakon plugs into everywhere your money lives
            </h2>

            <p
              className="text-lg leading-relaxed"
              style={{
                color: "rgba(0,0,0,0.55)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(16px)",
                transition: "opacity 700ms ease 200ms, transform 700ms ease 200ms",
              }}
            >
              No migration. No new software. Reakon connects to the systems you already use — and watches your money across all of them.
            </p>
          </div>

          {/* Right — video */}
          <ConnectorsVideo vis={vis} />

        </div>
      </div>
    </section>
  );
}
