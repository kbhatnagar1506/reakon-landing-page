"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false);
  const screenRef = useRef<HTMLDivElement>(null);
  // fitScale maps the fixed 1440px iframe down to the container width.
  // height is the visible crop height of the screen container.
  // Render the demo app at a fixed 1440×1080 logical size, scale it to the
  // container width, and size the container to the FULL scaled height so the
  // whole page fits in the frame (no crop).
  const [fit, setFit] = useState({ mobile: false, fitScale: 1300 / 1440, height: Math.round(1080 * (1300 / 1440)), iframeW: 1440, iframeH: 1080 });

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

      // Phones: the dashboard is itself responsive, so load it at native width
      // and let its own mobile layout render (no 1440px down-scaling).
      if (w < 768) {
        setFit({ mobile: true, fitScale: 1, height: 700, iframeW: w, iframeH: 700 });
        return;
      }

      // Tablet/desktop: scale the fixed 1440×1080 app to the width and show it
      // in full (container height = full scaled height, no crop).
      const fitScale = w / 1440;
      const height = Math.round(1080 * fitScale);
      setFit({ mobile: false, fitScale, height, iframeW: 1440, iframeH: 1080 });
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
    <section
      className="relative flex flex-col items-center min-h-screen"
      style={{
        background: "linear-gradient(180deg, #B8D8F0 0%, #C8E2F7 20%, #D8EBF9 45%, #EDF4FB 100%)",
      }}
    >
      {/* Hero cloud blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div style={{ position:"absolute", top:"4%", left:"-10%", width:"500px", height:"260px", background:"radial-gradient(ellipse, rgba(255,255,255,0.75) 0%, transparent 70%)", filter:"blur(28px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"10%", right:"-8%", width:"460px", height:"220px", background:"radial-gradient(ellipse, rgba(255,255,255,0.7) 0%, transparent 70%)", filter:"blur(24px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"6%", left:"30%", width:"700px", height:"180px", background:"radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)", filter:"blur(36px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"28%", left:"-5%", width:"380px", height:"160px", background:"radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)", filter:"blur(30px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"22%", right:"5%", width:"420px", height:"180px", background:"radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)", filter:"blur(28px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"45%", left:"15%", width:"650px", height:"200px", background:"radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)", filter:"blur(40px)", borderRadius:"50%" }} />
        <div style={{ position:"absolute", top:"55%", right:"-5%", width:"350px", height:"160px", background:"radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)", filter:"blur(26px)", borderRadius:"50%" }} />
      </div>

      {/* Hero text */}
      <div className="relative z-10 w-full max-w-[1100px] mx-auto px-6 lg:px-12 pt-36 lg:pt-48 pb-16 text-center">

        {/* Headline */}
        <h1
          className="font-sans tracking-tight leading-[1.03]"
          style={{
            fontSize: "clamp(1.9rem, 5.13vw, 4.94rem)",
            fontWeight: 600,
            letterSpacing: "-0.02em",
            color: "#000000",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(32px)",
            transition: "opacity 900ms ease 100ms, transform 900ms ease 100ms",
          }}
        >
          Stop Losing The GST Money<br />
          That&apos;s Already Yours
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

        {/* Subheading */}
        <p
          className="mt-6 text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto"
          style={{
            color: "#000000",
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 700ms ease 250ms, transform 700ms ease 250ms",
          }}
        >
          Reakon finds the GST credit you&apos;re losing, chases the customers who owe you, and flags the vendors putting your money at risk — all on WhatsApp, without changing how you work.
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
            href="https://app.reakon.in"
            className="inline-flex items-center justify-center px-5 sm:px-8 h-12 sm:h-14 text-sm sm:text-base font-semibold group hover:opacity-90 transition-opacity text-white whitespace-nowrap"
            style={{
              background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
              borderRadius: "14px",
              boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 16px rgba(79,110,247,0.35)",
            }}
          >
            Sign Up
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
            Contact Us Now
          </a>
        </div>
      </div>

      {/* Demo screen — static, no scroll animation */}
      <div
        className="relative z-10 w-full flex justify-center px-4 lg:px-10 pb-16 lg:pb-24"
      >
        <div
          ref={screenRef}
          className="w-full max-w-[1300px] rounded-t-2xl overflow-hidden"
          style={{
            height: `${fit.height}px`,
            position: "relative",
            boxShadow: "0 -4px 40px rgba(11,34,82,0.12), 0 40px 80px rgba(0,0,0,0.15)",
          }}
        >
          <iframe
            src="https://app.reakon.in/demo"
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
