import type { Metadata } from "next";
import { CaNavigation } from "@/components/ca/ca-navigation";
import { CaHeroSection } from "@/components/ca/ca-hero-section";
import { CaPainSection } from "@/components/ca/ca-pain-section";
import { CaShiftSection } from "@/components/ca/ca-shift-section";
import { CaPartnershipSection } from "@/components/ca/ca-partnership-section";
import { CaDashboardSection } from "@/components/ca/ca-dashboard-section";
import { ReakonSheetsSection } from "@/components/landing/reakon-sheets-section";
import { CaComparisonSection } from "@/components/ca/ca-comparison-section";
import { CaFaqSection } from "@/components/ca/ca-faq-section";
import { CaFinalCtaSection } from "@/components/ca/ca-final-cta-section";
import { CaFooterSection } from "@/components/ca/ca-footer-section";

export const metadata: Metadata = {
  title: "For Chartered Accountants — GST done before you open Excel",
  description:
    "Reakon collects, reads, and reconciles your clients' bills automatically and hands you filing-ready data. Free for your firm. Built for 3B locking and IMS. Works with your existing filing workflow.",
  keywords: [
    "GST software for CAs", "CA partnership program", "GST reconciliation for accountants",
    "IMS invoice management system", "GSTR-2B reconciliation", "purchase register automation",
    "GST filing India", "chartered accountant GST tool",
  ],
  alternates: { canonical: "/ca" },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://www.reakon.in/ca",
    siteName: "Reakon",
    title: "Reakon for Chartered Accountants — GST done before you open Excel",
    description:
      "Filing-ready data, automatically. Free for your firm. One dashboard for your entire client book — built for 3B locking and IMS.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reakon for Chartered Accountants",
    description:
      "Filing-ready data, automatically. Free for your firm. One dashboard for your entire client book.",
    site: "@ReakonHQ",
  },
};

const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    { q: "Does my firm pay anything?", a: "No. Reakon is free for your firm. Your clients subscribe directly." },
    { q: "Will it change my filing workflow?", a: "No. Reakon prepares clean, filing-ready data. You file the way you always have — with far less manual work getting there." },
    { q: "How do my clients onboard?", a: "One step. You add them, they forward bills on WhatsApp, Reakon does the rest." },
    { q: "Can I manage all my clients in one place?", a: "Yes. One dashboard for your entire book — health, deadlines, risks, and IMS actions across every client." },
    { q: "What happens with 3B locking and IMS?", a: "Reakon is built for it. Real-time reconciliation and IMS actions mean nothing gets locked in wrong and no credit is lost to the new rules." },
    { q: "Is my clients' data secure?", a: "Yes. GSTN-licensed, data stored in India, DPDP-compliant." },
  ].map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function ForCasPage() {
  return (
    <main className="relative min-h-screen overflow-x-hidden noise-overlay" style={{ background: "#EDF4FB" }}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      {/* Global cloud blobs — no filter:blur to avoid GPU composite layers */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" style={{ zIndex: 0 }}>
        <div style={{ position: "absolute", top: "5%", left: "-8%", width: "500px", height: "260px", background: "radial-gradient(ellipse, rgba(255,255,255,0.45) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "12%", right: "-6%", width: "420px", height: "220px", background: "radial-gradient(ellipse, rgba(255,255,255,0.38) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "35%", left: "20%", width: "680px", height: "240px", background: "radial-gradient(ellipse, rgba(255,255,255,0.28) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "60%", right: "10%", width: "500px", height: "200px", background: "radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, transparent 70%)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "80%", left: "-5%", width: "460px", height: "220px", background: "radial-gradient(ellipse, rgba(255,255,255,0.32) 0%, transparent 70%)", borderRadius: "50%" }} />
      </div>

      <CaNavigation />
      <CaHeroSection />
      <CaPainSection />
      <CaShiftSection />
      <CaPartnershipSection />
      <CaDashboardSection />
      <ReakonSheetsSection
        eyebrow="Introducing Reakon Sheets"
        heading="It’s not about the perfect number. It’s how you hand it off."
        subhead="Every client’s reconciliation — claimable, at-risk, mismatches, IMS actions, deadlines — laid out so clearly you file without second-guessing. Sort, filter, and export straight into your workflow."
      />
      <CaComparisonSection />
      <CaFaqSection />
      <CaFinalCtaSection />
      <CaFooterSection />
    </main>
  );
}
