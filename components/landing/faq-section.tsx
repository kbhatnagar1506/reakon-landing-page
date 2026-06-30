"use client";

import { useState, useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "Is there a free trial?",
    answer:
      "Yes — 3 days, free, no card needed to start. Forward your bills and see your real GST number before you pay anything.",
  },
  {
    question: "Do I need to install an app or learn new software?",
    answer:
      "No. Everything happens on WhatsApp. If you can forward a message, you're ready.",
  },
  {
    question: "Will my CA still be involved?",
    answer:
      "Yes, fully. Reakon makes your CA's work easier and your data cleaner — your CA reviews and files, and posts your P&L to your portal. We don't replace them, and they don't have to chase you every month anymore.",
  },
  {
    question: "How do I see my profit and loss and financial position?",
    answer:
      "Your CA posts it to your Reakon portal, dated and clear. You get full transparency into your financial outlook whenever you want to look — no waiting, no phone calls.",
  },
  {
    question: "What about my data and privacy?",
    answer:
      "Your data is stored securely on servers in India and shared with no one. We access the GST portal only through a government-licensed channel (MasterGST), and only with your permission.",
  },
  {
    question: "How does Reakon handle late-paying customers?",
    answer:
      "We track every outstanding invoice, show you who's delaying, and send polite WhatsApp reminders automatically. You stay in control of who to chase and who to withhold from.",
  },
  {
    question: "What about vendors who don't file their GST?",
    answer:
      "We flag them automatically and tell you to withhold the GST amount on your next payment — so their mistake stops costing you your credit.",
  },
  {
    question: "What does it cost after the trial?",
    answer:
      "A small monthly fee — a fraction of the money we recover and collect for you. We'll show you your savings first, so you decide with a real number in front of you.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
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
    <section ref={ref} id="faq" className="relative py-16 lg:py-40">
      <div className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-12">
        {/* Section Header */}
        <div
          className="text-center mb-10 lg:mb-16"
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(24px)",
            transition:
              "opacity 700ms ease, transform 700ms cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <span className="w-8 h-px bg-black/20" />
            <span
              className="font-mono text-[11px] tracking-widest uppercase"
              style={{ color: "rgba(0,0,0,0.4)" }}
            >
              Questions?
            </span>
            <span className="w-8 h-px bg-black/20" />
          </div>
          <h2
            className="text-[1.75rem] sm:text-4xl lg:text-5xl font-display tracking-tight leading-[1.1] sm:leading-[1.05]"
            style={{ color: "#000" }}
          >
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            const delay = Math.min(index, 6) * 60;
            return (
              <div
                key={index}
                className="rounded-2xl overflow-hidden group"
                style={{
                  background: isOpen
                    ? "rgba(79,110,247,0.04)"
                    : "rgba(255,255,255,0.7)",
                  border: isOpen
                    ? "1px solid rgba(79,110,247,0.25)"
                    : "1px solid rgba(0,0,0,0.07)",
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
                  <span
                    className="text-left font-medium text-[0.95rem] sm:text-base lg:text-lg"
                    style={{ color: "#000" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 flex-shrink-0 ml-0 sm:ml-4 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    style={{ color: isOpen ? "#4F6EF7" : "rgba(0,0,0,0.5)" }}
                  />
                </button>

                {/* Answer */}
                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-[32rem] sm:max-h-96" : "max-h-0"
                  }`}
                >
                  <div
                    className="px-5 sm:px-6 lg:px-8 py-4 lg:py-6"
                    style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}
                  >
                    <p
                      className="leading-relaxed text-[0.95rem] sm:text-base"
                      style={{ color: "rgba(0,0,0,0.55)" }}
                    >
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
