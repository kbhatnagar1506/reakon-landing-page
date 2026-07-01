"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

const DEMO_SRC = "https://reakon-auth-82d7cb8eea61.herokuapp.com/demo/gst";

export function CaHeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const [anim, setAnim] = useState({ scale: 0.86, opacity: 1 });
  const videoRef = useRef<HTMLDivElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState({ mobile: false, fitScale: 0.834, height: 720, iframeW: 1440, iframeH: 1037 });

  useEffect(() => {
    setIsVisible(true);
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
        height = 720;
      } else {
        const t = Math.min(1, Math.max(0, (w - 343) / (1200 - 343)));
        const ratio = 0.85 + (0.6 - 0.85) * t;
        height = Math.min(720, w * ratio);
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

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;
    const clamp = (v: number) => Math.min(1, Math.max(0, v));
    const update = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight;
      const focal = rect.top + rect.height * 0.32;
      const offset = focal - vh * 0.5;
      if (offset >= 0) {
        const t = clamp(1 - offset / (vh * 1.05));
        setAnim({ scale: 0.85 + t * 0.2, opacity: 1 });
      } else {
        const e = clamp(-offset / (vh * 0.6));
        setAnim({ scale: 1 - e * 0.26, opacity: 1 - e * 0.25 });
      }
    };
    update();
    window.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      window.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const { scale, opacity: screenOpacity } = anim;

  return (
    <section
      className="relative flex flex-col items-center min-h-screen"
      style={{
        background: "linear-gradient(180deg, #B8D8F0 0%, #C8E2F7 20%, #D8EBF9 45%, #EDF4FB 100%)",
      }}
    >
      {/* Cloud blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position: "absolute", top: "4%", left: "-10%", width: "500px", height: "260px", background: "radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 70%)", filter: "blur(28px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "10%", right: "-8%", width: "460px", height: "220px", background: "radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)", filter: "blur(24px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "6%", left: "30%", width: "700px", height: "180px", background: "radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)", filter: "blur(36px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "45%", left: "15%", width: "650px", height: "200px", background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)", filter: "blur(40px)", borderRadius: "50%" }} />
      </div>

      {/* Hero text */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 lg:px-12 pt-36 lg:pt-48 pb-16 text-center">
        {/* Eyebrow */}
        <span
          className="inline-flex items-center gap-3 font-mono uppercase"
          style={{
            fontSize: "11px",
            letterSpacing: "0.22em",
            color: "rgba(0,0,0,0.45)",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms ease 60ms, transform 700ms ease 60ms",
          }}
        >
          <span className="w-8 h-px bg-black/20" />
          For Chartered Accountants
          <span className="w-8 h-px bg-black/20" />
        </span>

        {/* Headline */}
        <h1
          className="font-display tracking-tight leading-[1.03] mt-7"
          style={{
            fontSize: "clamp(2rem, 5.4vw, 5.2rem)",
            fontWeight: 400,
            letterSpacing: "-0.02em",
            color: "#000000",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 900ms ease 100ms, transform 900ms ease 100ms",
          }}
        >
          Your clients&apos; GST, done<br />
          before you open Excel.
        </h1>

        {/* Divider */}
        <div
          className="mx-auto mt-8 mb-2"
          style={{
            width: "min(320px, 85%)",
            height: "1px",
            background: "linear-gradient(90deg, transparent 0%, rgba(11,34,82,0.18) 30%, rgba(11,34,82,0.18) 70%, transparent 100%)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 700ms ease 220ms",
          }}
        />

        {/* Subhead */}
        <p
          className="mt-6 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{
            color: "#000000",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms ease 250ms, transform 700ms ease 250ms",
          }}
        >
          Reakon collects, reads, and reconciles your clients&apos; bills automatically — and hands you filing-ready data. Less manual work. Happier clients. Nothing changes about how you file.
        </p>

        {/* CTAs */}
        <div
          className="flex flex-row items-center justify-center gap-3 mt-10 w-full mx-auto"
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms ease 350ms, transform 700ms ease 350ms",
          }}
        >
          <a
            href="https://reakon.in"
            className="inline-flex items-center justify-center px-5 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold group hover:opacity-90 transition-opacity text-white whitespace-nowrap"
            style={{
              background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
              borderRadius: "14px",
              boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 16px rgba(79,110,247,0.35)",
            }}
          >
            Become a partner
            <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="https://cal.com/reakon.in/45min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center h-12 sm:h-14 px-5 sm:px-8 text-sm sm:text-base font-semibold hover:opacity-90 transition-opacity whitespace-nowrap"
            style={{
              background: "#ffffff",
              borderRadius: "14px",
              color: "#0B2252",
              boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
            }}
          >
            Book a 15-min demo
          </a>
        </div>

        {/* Trust line */}
        <p
          className="mt-7 font-mono text-[11px] sm:text-xs tracking-wide"
          style={{
            color: "rgba(0,0,0,0.45)",
            opacity: isVisible ? 1 : 0,
            transition: "opacity 700ms ease 450ms",
          }}
        >
          Works with your existing filing workflow · No cost to your firm · Data stored in India
        </p>
      </div>

      {/* Demo screen */}
      <div
        ref={videoRef}
        className="relative z-10 w-full flex justify-center px-4 lg:px-10 pb-16 lg:pb-24"
        style={{ perspective: "2200px" }}
      >
        <div
          ref={screenRef}
          className="w-full max-w-[1200px] rounded-t-2xl overflow-hidden"
          style={{
            height: `${fit.height}px`,
            position: "relative",
            transformStyle: "preserve-3d",
            transformOrigin: "center top",
            boxShadow: "0 -4px 40px rgba(11,34,82,0.12), 0 40px 80px rgba(0,0,0,0.15)",
            opacity: isVisible ? screenOpacity : 0,
            transform: `scale(${scale})`,
            transition: "transform 450ms cubic-bezier(0.22,1,0.36,1), opacity 450ms ease",
            willChange: "transform, opacity",
          }}
        >
          <iframe
            src={DEMO_SRC}
            title="Reakon Demo"
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
            }}
          />
        </div>
      </div>
    </section>
  );
}
