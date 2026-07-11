import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";

const SITE_URL = "https://www.reakon.in";

export const metadata: Metadata = {
  title: "The team behind Reakon",
  description:
    "Meet the founders building Reakon — the money-recovery layer for Indian business. Aaditi Singhal (CEO), Krishna Bhatnagar (CTO), and Kunal Sen (CMO).",
  alternates: { canonical: "/team" },
  openGraph: {
    type: "website",
    url: `${SITE_URL}/team`,
    siteName: "Reakon",
    title: "The team behind Reakon",
    description:
      "Meet the founders building Reakon — the money-recovery layer for Indian business.",
  },
  twitter: {
    card: "summary_large_image",
    title: "The team behind Reakon",
    description:
      "Meet the founders building Reakon — the money-recovery layer for Indian business.",
    site: "@ReakonHQ",
  },
};

type Member = {
  name: string;
  initials: string;
  role: string;
  blurb: string;
  linkedin?: string;
  gradient: string;
};

// Role-based blurbs grounded in what Reakon does — not fabricated personal
// history. Swap in real bios / photos / links as they become available.
const TEAM: Member[] = [
  {
    name: "Aaditi Singhal",
    initials: "AS",
    role: "Co-Founder & CEO",
    blurb:
      "Aaditi sets Reakon's direction — building the money-recovery layer for Indian business, so an owner can protect the GST credit that's already theirs without changing how they work.",
    linkedin: "https://www.linkedin.com/in/aaditi-singhal/",
    gradient: "linear-gradient(160deg, #7B96FA 0%, #4F6EF7 55%, #3D59E8 100%)",
  },
  {
    name: "Krishna Bhatnagar",
    initials: "KB",
    role: "Co-Founder & CTO",
    blurb:
      "Krishna leads engineering — the live GSTR-2B/2A reconciliation engine, the government-licensed GST-portal integration, and the WhatsApp pipeline that turns a forwarded bill into protected credit.",
    linkedin: "https://www.linkedin.com/in/krishna-bhatnagar/",
    gradient: "linear-gradient(160deg, #34C7A6 0%, #0EA47F 55%, #0B7E63 100%)",
  },
  {
    name: "Kunal Sen",
    initials: "KS",
    role: "Chief Marketing Officer",
    blurb:
      "Kunal leads growth and brand — telling the story of the money Indian businesses are quietly losing, and getting Reakon in front of the owners and CAs who need it most.",
    gradient: "linear-gradient(160deg, #F5A65B 0%, #E77C2E 55%, #CC5F14 100%)",
  },
];

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
    </svg>
  );
}

const personLd = (m: Member) => ({
  "@type": "Person",
  name: m.name,
  jobTitle: m.role.replace("Co-Founder & ", ""),
  worksFor: { "@type": "Organization", name: "Reakon", url: SITE_URL },
  ...(m.linkedin ? { sameAs: [m.linkedin] } : {}),
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "The team behind Reakon",
  url: `${SITE_URL}/team`,
  about: {
    "@type": "Organization",
    name: "Reakon",
    url: SITE_URL,
    founder: [personLd(TEAM[0]), personLd(TEAM[1])],
    member: TEAM.map(personLd),
  },
};

export default function TeamPage() {
  return (
    <main className="min-h-screen" style={{ background: "#EDF4FB" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Top bar */}
      <header className="px-6 lg:px-12 py-4 flex items-center justify-between border-b border-black/10 bg-white/80 backdrop-blur-md sticky top-0 z-50">
        <Link href="/" style={{ display: "flex", alignItems: "center" }}>
          <Image
            src="/reakon no-bg logo-black.png"
            alt="Reakon"
            width={150}
            height={44}
            className="w-auto"
            style={{ height: 44 }}
            priority
          />
        </Link>
        <Link
          href="/"
          className="text-sm text-black/55 hover:text-black transition-colors"
        >
          ← Back to home
        </Link>
      </header>

      {/* Hero */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-20 lg:pt-28 pb-6 text-center">
        <span className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-widest" style={{ color: "rgba(0,0,0,0.4)" }}>
          <span className="w-8 h-px bg-black/20" />
          Who we are
          <span className="w-8 h-px bg-black/20" />
        </span>
        <h1
          className="font-display tracking-tight leading-[1.05] mt-6 mx-auto max-w-3xl"
          style={{ fontSize: "clamp(2rem, 6vw, 3.8rem)", color: "#000" }}
        >
          The people behind Reakon
        </h1>
        <p
          className="mt-5 mx-auto max-w-2xl text-base lg:text-lg leading-relaxed"
          style={{ color: "rgba(0,0,0,0.55)" }}
        >
          We're building the money-recovery layer for Indian business — so the GST
          credit you already earned stops slipping away. Here's the team making
          that happen.
        </p>
      </section>

      {/* Team grid */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-12 pt-8 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {TEAM.map((m) => (
            <div
              key={m.name}
              className="flex flex-col rounded-3xl p-7 lg:p-8"
              style={{
                background: "rgba(255,255,255,0.75)",
                border: "1px solid rgba(0,0,0,0.07)",
                boxShadow: "0 8px 40px rgba(11,34,82,0.08), 0 2px 8px rgba(0,0,0,0.04)",
                backdropFilter: "blur(8px)",
                WebkitBackdropFilter: "blur(8px)",
              }}
            >
              <div
                className="flex items-center justify-center rounded-2xl mb-6"
                style={{
                  width: "72px",
                  height: "72px",
                  background: m.gradient,
                  color: "#fff",
                  fontSize: "26px",
                  fontWeight: 700,
                  letterSpacing: "0.02em",
                  boxShadow: "0 8px 22px rgba(11,34,82,0.18)",
                }}
              >
                {m.initials}
              </div>
              <h2 className="font-display tracking-tight text-2xl" style={{ color: "#000" }}>
                {m.name}
              </h2>
              <div className="mt-1 font-mono text-[11px] uppercase tracking-widest" style={{ color: "#4F6EF7" }}>
                {m.role}
              </div>
              <p className="mt-4 text-[15px] leading-relaxed" style={{ color: "rgba(0,0,0,0.6)" }}>
                {m.blurb}
              </p>
              {m.linkedin && (
                <a
                  href={m.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`${m.name} on LinkedIn`}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-medium transition-colors w-fit"
                  style={{ color: "rgba(0,0,0,0.55)" }}
                >
                  <LinkedInIcon />
                  LinkedIn
                </a>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-[1100px] mx-auto px-6 lg:px-12 pb-24">
        <div
          className="rounded-3xl text-center px-7 py-14"
          style={{
            background: "linear-gradient(160deg, #FFFFFF 0%, #DCEAF8 100%)",
            border: "1px solid rgba(255,255,255,0.9)",
          }}
        >
          <h2 className="font-display tracking-tight" style={{ fontSize: "clamp(1.6rem, 3.4vw, 2.4rem)", color: "#0a0a0a", marginBottom: "0.8rem" }}>
            Stop losing the GST money that's already yours
          </h2>
          <p style={{ color: "rgba(0,0,0,0.6)", fontSize: "1.05rem", lineHeight: 1.6, maxWidth: "480px", margin: "0 auto 1.6rem" }}>
            Forward a bill on WhatsApp and see exactly how much credit you just
            protected — no app, no login.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="https://app.reakon.in"
              className="inline-flex items-center justify-center px-7 h-13 py-3.5 text-base font-semibold text-white rounded-2xl transition-opacity hover:opacity-90"
              style={{ background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)", boxShadow: "0 4px 16px rgba(79,110,247,0.35)" }}
            >
              Try Reakon free
            </a>
            <a
              href="https://cal.com/reakon.in/45min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-7 h-13 py-3.5 text-base font-semibold rounded-2xl transition-opacity hover:opacity-90"
              style={{ background: "#fff", color: "#0B2252", boxShadow: "0 1px 4px rgba(0,0,0,0.12)" }}
            >
              Book a call
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 py-10 px-6 lg:px-12">
        <div className="max-w-[1100px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-black/45">© 2026 Reakon</p>
          <div className="flex items-center gap-6 text-sm text-black/45">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <Link href="/ca" className="hover:text-black transition-colors">For CAs</Link>
            <Link href="/blog" className="hover:text-black transition-colors">Blog</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
