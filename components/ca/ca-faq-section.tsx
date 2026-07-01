"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Does my firm pay anything?",
    answer: "No. Reakon is free for your firm. Your clients subscribe directly.",
  },
  {
    question: "Will it change my filing workflow?",
    answer: "No. Reakon prepares clean, filing-ready data. You file the way you always have — with far less manual work getting there.",
  },
  {
    question: "How do my clients onboard?",
    answer: "One step. You add them, they forward bills on WhatsApp, Reakon does the rest.",
  },
  {
    question: "Can I manage all my clients in one place?",
    answer: "Yes. One dashboard for your entire book — health, deadlines, risks, and IMS actions across every client.",
  },
  {
    question: "What happens with 3B locking and IMS?",
    answer: "Reakon is built for it. Real-time reconciliation and IMS actions mean nothing gets locked in wrong and no credit is lost to the new rules.",
  },
  {
    question: "Is my clients' data secure?",
    answer: "Yes. GSTN-licensed, data stored in India, DPDP-compliant.",
  },
];

export function CaFaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const ref = useRef<HTMLElement>(null);
  const [vis, setVis] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} id="ca-faq" className="relative py-16 lg:py-40">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className="text-center mb-10 lg:mb-16"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-black/20" />
            <span className="font-mono text-[11px] tracking-widest uppercase" style={{ color: "rgba(0,0,0,0.4)" }}>
              For CAs
            </span>
            <span className="w-8 h-px bg-black/20" />
          </div>
          <h2 className="text-[1.75rem] sm:text-4xl lg:text-5xl font-display tracking-tight leading-[1.1] sm:leading-[1.05]" style={{ color: "#000" }}>
            Questions from CAs
          </h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const delay = Math.min(index, 6) * 60;
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden group"
                style={{
                  background: isOpen ? "rgba(79,110,247,0.04)" : "rgba(255,255,255,0.7)",
                  border: isOpen ? "1px solid rgba(79,110,247,0.25)" : "1px solid rgba(0,0,0,0.07)",
                  boxShadow: isOpen
                    ? "0 8px 40px rgba(11,34,82,0.10), 0 2px 8px rgba(0,0,0,0.05)"
                    : "0 2px 8px rgba(0,0,0,0.04)",
                  backdropFilter: "blur(8px)",
                  opacity: vis ? 1 : 0,
                  transform: vis ? "translateY(0)" : "translateY(24px)",
                  transition: `opacity 700ms ease ${delay}ms, transform 700ms cubic-bezier(0.22,1,0.36,1) ${delay}ms, background 300ms ease, border-color 300ms ease, box-shadow 300ms ease`,
                }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="w-full min-h-[56px] px-5 sm:px-6 lg:px-8 py-4 sm:py-5 lg:py-6 flex items-center justify-between gap-3 transition-colors duration-200"
                >
                  <span className="text-left font-medium text-[0.95rem] sm:text-base lg:text-lg" style={{ color: "#000" }}>
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ml-0 sm:ml-4 transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}
                    style={{ color: isOpen ? "#4F6EF7" : "rgba(0,0,0,0.5)" }}
                  />
                </button>
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? "max-h-[32rem] sm:max-h-96" : "max-h-0"}`}>
                  <div className="px-5 sm:px-6 lg:px-8 py-4 lg:py-6" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                    <p className="leading-relaxed text-[0.95rem] sm:text-base" style={{ color: "rgba(0,0,0,0.55)" }}>
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
