"use client";

import { useEffect, useRef, useState } from "react";

const features = [
  {
    number: "01",
    title: "Reakon answers your questions 24/7",
    description:
      "Ask anything about your GST, invoices, or cash flow — on WhatsApp, any time. No waiting for your CA to call back.",
  },
  {
    number: "02",
    title: "Connect unlimited banks, expense accounts, GST portal, tally",
    description:
      "One place for all your financial data. Reakon pulls everything together so you always have the full picture.",
  },
  {
    number: "03",
    title: "Keep track of cash flow and other key metrics",
    description:
      "Burn, revenue, expenses — all tracked automatically. Know exactly where your money is going, before it's gone.",
  },
];

export function IntroVideoSection() {
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
    <section ref={ref} className="relative py-16 lg:py-32">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-24 items-center">

          {/* Left — YouTube video (below text on mobile) */}
          <div
            className="relative rounded-2xl overflow-hidden order-2 lg:order-1"
            style={{
              aspectRatio: "16/9",
              boxShadow:
                "0 12px 50px rgba(11,34,82,0.12), 0 2px 8px rgba(0,0,0,0.08)",
              opacity: vis ? 1 : 0,
              transform: vis
                ? "translateY(0) scale(1)"
                : "translateY(40px) scale(0.97)",
              transition:
                "opacity 700ms cubic-bezier(0.22,1,0.36,1), transform 700ms cubic-bezier(0.22,1,0.36,1)",
            }}
          >
            <iframe
              src="https://www.youtube.com/embed/5l2-SNmA1v8?autoplay=1&mute=1&loop=1&playlist=5l2-SNmA1v8&controls=0&rel=0&modestbranding=1&showinfo=0&iv_load_policy=3&disablekb=1"
              title="Reakon Demo"
              allow="autoplay; fullscreen"
              allowFullScreen
              className="w-full h-full"
              style={{ border: "none", display: "block" }}
            />
            {/* Block YouTube hover UI */}
            <div className="absolute inset-0" style={{ zIndex: 1 }} />
          </div>

          {/* Right — Text content (above video on mobile) */}
          <div className="order-1 lg:order-2">
            <span
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest mb-6"
              style={{
                color: "rgba(0,0,0,0.4)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 700ms ease 100ms, transform 700ms ease 100ms",
              }}
            >
              <span className="w-8 h-px bg-black/20" />
              Introducing Reakon
            </span>

            <h2
              className="font-display tracking-tight leading-[1.05] mb-8 lg:mb-12"
              style={{
                color: "#000",
                fontSize: "clamp(1.7rem, 6vw, 3rem)",
                opacity: vis ? 1 : 0,
                transform: vis ? "translateY(0)" : "translateY(24px)",
                transition:
                  "opacity 700ms ease 200ms, transform 700ms ease 200ms",
              }}
            >
              Introducing Reakon
            </h2>

            <div className="space-y-8 lg:space-y-10">
              {features.map((f, i) => (
                <div
                  key={f.number}
                  className="flex gap-4 sm:gap-6"
                  style={{
                    opacity: vis ? 1 : 0,
                    transform: vis ? "translateY(0)" : "translateY(24px)",
                    transition: `opacity 700ms ease ${300 + i * 100}ms, transform 700ms ease ${
                      300 + i * 100
                    }ms`,
                  }}
                >
                  <span
                    className="font-mono text-xs mt-1 shrink-0 w-6"
                    style={{ color: "#4F6EF7" }}
                  >
                    {f.number}
                  </span>
                  <div>
                    <h3
                      className="text-base font-semibold mb-1.5"
                      style={{ color: "#000" }}
                    >
                      {f.title}
                    </h3>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "rgba(0,0,0,0.55)" }}
                    >
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
