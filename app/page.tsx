import { Navigation } from "@/components/landing/navigation";
import { HeroSection } from "@/components/landing/hero-section";
import { InfrastructureSection } from "@/components/landing/infrastructure-section";
import { ConnectorsSection } from "@/components/landing/connectors-section";
import { IntroVideoSection } from "@/components/landing/intro-video-section";
import { WhatReakonDoesSection } from "@/components/landing/what-reakon-does-section";
import { HowItWorksSection } from "@/components/landing/how-it-works-section";
import { FounderSection } from "@/components/landing/founder-section";
import { FaqSection } from "@/components/landing/faq-section";
import { RegulatorySection } from "@/components/landing/regulatory-section";
import { CtaSection } from "@/components/landing/cta-section";
import { FooterSection } from "@/components/landing/footer-section";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay" style={{ background: "#EDF4FB" }}>
      {/* Global cloud blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", top: "5%", left: "-8%", width: "500px", height: "260px", background: "radial-gradient(ellipse, rgba(255,255,255,0.65) 0%, transparent 70%)", filter: "blur(40px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "12%", right: "-6%", width: "420px", height: "220px", background: "radial-gradient(ellipse, rgba(255,255,255,0.55) 0%, transparent 70%)", filter: "blur(32px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "35%", left: "20%", width: "680px", height: "240px", background: "radial-gradient(ellipse, rgba(255,255,255,0.4) 0%, transparent 70%)", filter: "blur(45px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "60%", right: "10%", width: "500px", height: "200px", background: "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)", filter: "blur(35px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "80%", left: "-5%", width: "460px", height: "220px", background: "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)", filter: "blur(38px)", borderRadius: "50%" }} />
      </div>
      <Navigation />
      <HeroSection />
      <ConnectorsSection />
      <IntroVideoSection />
      <WhatReakonDoesSection />
      <HowItWorksSection />
      <InfrastructureSection />
      <FounderSection />
      <FaqSection />
      <RegulatorySection />
      <CtaSection />
      <FooterSection />
    </main>
  );
}
