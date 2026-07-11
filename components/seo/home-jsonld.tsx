// Server component: structured data for the home page.
// FAQ entries MUST stay in sync with the visible FAQ in
// components/landing/faq-section.tsx (Google requires the answer text to
// match what's on the page).

const SITE_URL = "https://www.reakon.in";
const LOGO = `${SITE_URL}/favicon.png`;

const SOCIALS = [
  "https://www.instagram.com/reakon.in/",
  "https://www.linkedin.com/company/reakon-in/",
  "https://x.com/ReakonHQ",
  "https://www.youtube.com/@reakon-in/",
  "https://www.facebook.com/Reakon.in/",
  "https://discord.gg/nePXdfwGkq",
];

const HOME_FAQ: { q: string; a: string }[] = [
  {
    q: "Is there a free trial?",
    a: "Yes — 3 days, free, no card needed to start. Forward your bills and see your real GST number before you pay anything.",
  },
  {
    q: "Do I need to install an app or learn new software?",
    a: "No. Everything happens on WhatsApp. If you can forward a message, you're ready.",
  },
  {
    q: "Will my CA still be involved?",
    a: "Yes, fully. Reakon makes your CA's work easier and your data cleaner — your CA reviews and files, and posts your P&L to your portal. We don't replace them, and they don't have to chase you every month anymore.",
  },
  {
    q: "How do I see my profit and loss and financial position?",
    a: "Your CA posts it to your Reakon portal, dated and clear. You get full transparency into your financial outlook whenever you want to look — no waiting, no phone calls.",
  },
  {
    q: "What about my data and privacy?",
    a: "Your data is stored securely on servers in India and shared with no one. We access the GST portal only through a government-licensed channel, and only with your permission.",
  },
  {
    q: "How does Reakon handle late-paying customers?",
    a: "We track every outstanding invoice, show you who's delaying, and send polite WhatsApp reminders automatically. You stay in control of who to chase and who to withhold from.",
  },
  {
    q: "What about vendors who don't file their GST?",
    a: "We flag them automatically and tell you to withhold the GST amount on your next payment — so their mistake stops costing you your credit.",
  },
  {
    q: "What does it cost after the trial?",
    a: "A small monthly fee — a fraction of the money we recover and collect for you. We'll show you your savings first, so you decide with a real number in front of you.",
  },
];

const organization = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Reakon",
  url: SITE_URL,
  logo: { "@type": "ImageObject", url: LOGO },
  description:
    "Reakon is the money-recovery layer for Indian business. It watches your GST input tax credit, flags vendors who haven't filed their returns, chases them before the deadline, and shows you exactly how much of your money is stuck and recoverable — all on WhatsApp.",
  sameAs: SOCIALS,
  areaServed: { "@type": "Country", name: "India" },
  knowsAbout: [
    "GST input tax credit",
    "ITC reconciliation",
    "GSTR-2B reconciliation",
    "Invoice Management System (IMS)",
    "GST compliance for Indian businesses",
  ],
};

const website = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Reakon",
  description:
    "Stop losing the GST money that's already yours. Reakon recovers the input tax credit Indian businesses lose to unfiled vendors and missed deadlines — on WhatsApp.",
  publisher: { "@id": `${SITE_URL}/#organization` },
  inLanguage: "en-IN",
};

const softwareApplication = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "Reakon",
  url: SITE_URL,
  applicationCategory: "FinanceApplication",
  operatingSystem: "WhatsApp, Web",
  inLanguage: "en-IN",
  description:
    "Reakon reads a purchase bill you forward on WhatsApp, reconciles it live against the GST portal (GSTR-2B/2A), flags vendors who haven't filed and are putting your input tax credit at risk, and shows you exactly how much money is stuck and recoverable — no app to install, no new software to learn.",
  featureList: [
    "Real-time bill capture via WhatsApp",
    "Live GSTR-2B / GSTR-2A reconciliation",
    "Vendor filing-risk alerts",
    "Invoice Management System (IMS) console",
    "GST deadline tracking (GSTR-1, GSTR-3B, Section 16(4))",
    "ITC recovery tracking (claimable vs claimed vs at-risk)",
    "Automatic WhatsApp payment reminders",
    "Automatic purchase register with Tally export",
  ],
  offers: {
    "@type": "Offer",
    price: "0",
    priceCurrency: "INR",
    description: "Free 3-day trial — no card required.",
  },
  provider: { "@id": `${SITE_URL}/#organization` },
  audience: {
    "@type": "Audience",
    audienceType: "Indian business owners and Chartered Accountants",
  },
};

const faqPage = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: HOME_FAQ.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export function HomeStructuredData() {
  const graphs = [organization, website, softwareApplication, faqPage];
  return (
    <>
      {graphs.map((g, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(g) }}
        />
      ))}
    </>
  );
}
