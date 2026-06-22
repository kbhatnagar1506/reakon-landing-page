"use client";

import { useEffect, useRef, useState } from "react";

function TrustCard({
  icon,
  headline,
  body,
  proofChip,
  children,
  delay,
  isVisible,
}: {
  icon: string;
  headline: string;
  body: string;
  proofChip: string;
  children?: React.ReactNode;
  delay: number;
  isVisible: boolean;
}) {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);
  const animRef = useRef<{ reset: () => void }>(null);

  useEffect(() => {
    if (isHovered && animRef.current?.reset) {
      animRef.current.reset();
    }
  }, [isHovered]);

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`relative border border-[#1F1F1F] bg-[#0E0E0E] rounded-[24px] p-7 lg:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-white/5 hover:-translate-y-1 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="text-3xl mb-6">{icon}</div>
      <h3 className="text-xl lg:text-2xl font-display mb-4 text-white">
        {headline}
      </h3>
      <p className="text-white/60 leading-relaxed text-base mb-6">
        {body}
      </p>

      {/* Proof chip */}
      <div className="flex items-center gap-2 text-[13px] text-white/50 font-mono mb-6">
        <span className="w-1 h-1 rounded-full bg-green-400" />
        {proofChip}
      </div>

      {/* Micro-animation area */}
      {children && (
        <div className="mt-4" ref={animRef as any}>
          {children}
        </div>
      )}
    </div>
  );
}

function WhatsAppCardAnimation() {
  const [frame, setFrame] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (!play) return;
    const timings = [0, 800, 1600, 2400, 3200, 4200];
    setFrame(0);
    const timers = timings.map((t, i) =>
      setTimeout(() => setFrame(i), t)
    );
    const reset = setTimeout(() => setFrame(0), 5500);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(reset);
    };
  }, [play]);

  return (
    <div className="w-full max-w-xs mx-auto bg-[#ECE5DD] rounded-lg overflow-hidden text-sm">
      <div className="bg-[#075E54] px-3 py-2 flex items-center gap-2">
        <div className="w-7 h-7 rounded-full bg-[#25D366] flex items-center justify-center text-white text-xs font-bold">
          R
        </div>
        <div>
          <div className="text-white text-xs font-semibold">Reakon</div>
          <div className="text-green-200 text-[10px]">online</div>
        </div>
      </div>
      <div className="p-3 min-h-[120px] bg-[#ECE5DD]">
        {frame >= 0 && (
          <div
            className="flex justify-end mb-2 transition-all duration-500"
            style={{
              opacity: frame >= 0 ? 1 : 0,
              transform: frame >= 0 ? "translateY(0)" : "translateY(8px)",
            }}
          >
            <div className="bg-[#DCF8C6] rounded-lg rounded-tr-none px-2 py-1 max-w-[70%]">
              <div className="w-16 h-10 bg-white border border-gray-200 rounded flex items-center justify-center">
                <div className="text-center">
                  <div className="text-gray-400 text-sm">📄</div>
                  <div className="text-gray-500 text-[8px]">invoice</div>
                </div>
              </div>
              <div className="text-[9px] text-gray-500 text-right mt-1">
                ✓✓
              </div>
            </div>
          </div>
        )}
        {frame >= 1 && frame < 3 && (
          <div className="flex justify-start mb-2">
            <div className="bg-white rounded-lg rounded-tl-none px-3 py-2">
              <div className="flex gap-1">
                <span className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce" />
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "150ms" }}
                />
                <span
                  className="w-1.5 h-1.5 bg-gray-400 rounded-full animate-bounce"
                  style={{ animationDelay: "300ms" }}
                />
              </div>
            </div>
          </div>
        )}
        {frame >= 2 && (
          <div className="flex justify-start mb-2 transition-all duration-500">
            <div className="bg-white rounded-lg rounded-tl-none px-2 py-1 text-[10px]">
              Got it ✅
            </div>
          </div>
        )}
        {frame >= 5 && (
          <div className="flex justify-start transition-all duration-500">
            <div className="bg-white rounded-lg rounded-tl-none px-2 py-1 text-[10px]">
              <div className="text-green-700 font-semibold">
                ITC saved ₹5,000 💰
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

function DashboardCardAnimation() {
  const [blurred, setBlurred] = useState(true);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (!play) return;
    setBlurred(true);
    const timer1 = setTimeout(() => setBlurred(false), 500);
    const timer2 = setTimeout(() => setBlurred(true), 3500);
    const timer3 = setTimeout(() => setBlurred(false), 4000);
    const reset = setTimeout(() => setBlurred(true), 4800);
    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
      clearTimeout(reset);
    };
  }, [play]);

  return (
    <div className="w-full max-w-xs mx-auto bg-gray-50 rounded-lg overflow-hidden border border-gray-200">
      <div className="bg-gray-100 px-3 py-2 border-b text-[10px] text-gray-600">
        app.reakon.in
      </div>
      <div className={`p-3 min-h-[120px] transition-all duration-700 ${blurred ? "blur-md" : "blur-0"}`}>
        <div className="text-[11px] font-bold text-gray-700 mb-3">
          Financial Overview
        </div>
        <div className="space-y-2">
          <div className="flex justify-between items-center p-2 bg-blue-50 rounded border border-blue-200">
            <span className="text-[10px] text-gray-600">GST ITC</span>
            <span className="text-[11px] font-bold text-green-600">
              ₹2,45,000
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-purple-50 rounded border border-purple-200">
            <span className="text-[10px] text-gray-600">Net Profit</span>
            <span className="text-[11px] font-bold text-green-600">
              ₹8,20,000
            </span>
          </div>
          <div className="flex justify-between items-center p-2 bg-amber-50 rounded border border-amber-200">
            <span className="text-[10px] text-gray-600">Outstanding</span>
            <span className="text-[11px] font-bold text-orange-600">
              ₹1,50,000
            </span>
          </div>
        </div>
        <div
          className={`flex items-center gap-1.5 mt-2 transition-opacity duration-500 ${
            !blurred ? "opacity-100" : "opacity-0"
          }`}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
          <span className="text-[9px] text-gray-500">Live</span>
        </div>
      </div>
    </div>
  );
}

function CAHandoffCardAnimation() {
  const [frame, setFrame] = useState(0);
  const [play, setPlay] = useState(true);

  useEffect(() => {
    if (!play) return;
    const timings = [0, 1000, 2200, 3200];
    setFrame(0);
    const timers = timings.map((t, i) =>
      setTimeout(() => setFrame(i), t)
    );
    const reset = setTimeout(() => setFrame(0), 4600);
    return () => {
      timers.forEach(clearTimeout);
      clearTimeout(reset);
    };
  }, [play]);

  return (
    <div className="w-full max-w-xs mx-auto bg-white rounded-lg overflow-hidden border border-gray-200 p-4">
      <div className="flex justify-between items-center mb-4">
        {/* You */}
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-[12px] font-bold text-blue-700 mx-auto mb-1">
            U
          </div>
          <div className="text-[10px] text-gray-700 font-semibold">You</div>
        </div>

        {/* Connector */}
        <div className="flex-1 mx-2 h-0.5 relative bg-gray-200">
          {frame >= 1 && frame < 3 && (
            <div className="absolute inset-0 space-x-1 flex items-center overflow-hidden">
              {[...Array(8)].map((_, i) => (
                <div
                  key={i}
                  className="w-1.5 h-1.5 rounded-full bg-red-400 flex-shrink-0 animate-pulse"
                  style={{ animationDelay: `${i * 50}ms` }}
                />
              ))}
            </div>
          )}
          {frame >= 2 && (
            <div className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-500 transition-all duration-500" />
          )}
        </div>

        {/* CA */}
        <div className="text-center">
          <div className="w-8 h-8 rounded-full bg-amber-100 flex items-center justify-center text-[12px] font-bold text-amber-700 mx-auto mb-1">
            CA
          </div>
          <div className="text-[10px] text-gray-700 font-semibold">CA</div>
        </div>
      </div>

      {/* Status */}
      <div className="text-center text-[11px] text-gray-600">
        {frame < 1 && "Waiting for update..."}
        {frame >= 1 && frame < 2 && "🔴 Chaotic handoff"}
        {frame >= 2 && frame < 3 && "⏳ Smoothing..."}
        {frame >= 3 && (
          <div className="text-green-600 font-semibold">
            ✅ Clean & clear
          </div>
        )}
      </div>
    </div>
  );
}

const badges = [
  {
    icon: "🔒",
    label: "We never see your GST password",
    hover: "Access runs through a licensed channel's secure token — not your login.",
  },
  {
    icon: "🏛️",
    label: "Government-licensed channel (MasterGST)",
    hover: "GST data is accessed only via an officially licensed GSP.",
  },
  {
    icon: "🇮🇳",
    label: "Your data never leaves India",
    hover: "Stored on servers in India. Shared with no one.",
  },
  {
    icon: "🛡️",
    label: "DPDP Act 2023 compliant",
    hover: "Built to India's data-protection law from day one.",
  },
  {
    icon: "✅",
    label: "Only with your permission",
    hover: "We access nothing until you say yes — and you can stop anytime.",
  },
];

function ComplianceBadge({
  badge,
  delay,
  isVisible,
}: {
  badge: (typeof badges)[0];
  delay: number;
  isVisible: boolean;
}) {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={`transition-all duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="text-center px-4 py-3 rounded-lg border border-white/10 hover:border-white/20 hover:bg-white/[0.02] transition-colors cursor-help group"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div className="text-2xl mb-2">{badge.icon}</div>
        <div className="text-[12px] font-mono text-white/70 group-hover:text-white/90 transition-colors">
          {badge.label}
        </div>
        {isHovering && (
          <div className="text-[11px] text-white/50 mt-2 pt-2 border-t border-white/5">
            {badge.hover}
          </div>
        )}
      </div>
    </div>
  );
}

export function HowItWorksSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="how-it-works"
      ref={sectionRef}
      className="relative py-32 lg:py-40 bg-[#0A0A0A] text-white overflow-hidden"
    >
      {/* Subtle diagonal pattern */}
      <div className="absolute inset-0 opacity-[0.02] pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 40px,
            currentColor 40px,
            currentColor 41px
          )`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div
          className={`text-center mb-20 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <span className="inline-block text-[12px] font-mono text-white-400 uppercase tracking-widest mb-6 letter-spacing">
            - Why you can trust us
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight leading-tight mb-4 max-w-4xl mx-auto">
            Your money, your data, your CA — all protected.
          </h2>
          <p className="text-white/55 text-lg max-w-2xl mx-auto">
            Nothing here is risky to try. Here's exactly why.
          </p>
        </div>

        {/* Three trust cards */}
        <div className="grid lg:grid-cols-3 gap-6 mb-16">
          <TrustCard
            icon="🟢"
            headline="Easy WhatsApp access."
            body="Forward a bill on WhatsApp when you get a minute. That's the entire job."
            proofChip="Works on the WhatsApp you already use."
            isVisible={isVisible}
            delay={0}
          >
            <WhatsAppCardAnimation />
          </TrustCard>

          <TrustCard
            icon="📊"
            headline="See everything, the moment it's ready."
            body="Your GST credit, your P&L, your outstanding payments — one clear picture, no waiting, no asking."
            proofChip="Updated live as your CA posts."
            isVisible={isVisible}
            delay={120}
          >
            <DashboardCardAnimation />
          </TrustCard>

          <TrustCard
            icon="🤝"
            headline="Your CA stays your CA."
            body="We hand them clean data and hand you clarity. No more last-minute document chase — from either side."
            proofChip="Works alongside your existing CA."
            isVisible={isVisible}
            delay={240}
          >
            <CAHandoffCardAnimation />
          </TrustCard>
        </div>

        {/* Compliance rail */}
        <div
          className={`bg-[#121212] border border-white/5 rounded-2xl p-8 lg:p-10 mb-12 transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "360ms" }}
        >
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {badges.map((badge, i) => (
              <ComplianceBadge
                key={i}
                badge={badge}
                delay={360 + i * 80}
                isVisible={isVisible}
              />
            ))}
          </div>
        </div>

        {/* CTA section */}
        <div
          className={`text-center transition-all duration-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
          style={{ transitionDelay: "720ms" }}
        >
          <p className="text-white mb-6 text-lg">
            You just saw how we protect it. Now see what you're owed.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-6">
            <button className="px-8 py-3 bg-[#F5A623] text-black font-semibold rounded-lg hover:bg-amber-500 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/20 hover:-translate-y-0.5 active:translate-y-0">
              See My GST Number — Free
            </button>
            <button className="px-8 py-3 border border-white/30 text-white font-semibold rounded-lg hover:border-white/50 hover:bg-white/5 transition-all duration-300">
              Book a Call
            </button>
          </div>

          <p className="text-white/40 text-sm font-mono">
            On Reakon · No card for intial trial · No app · Your data stays in India
          </p>
        </div>
      </div>
    </section>
  );
}
