import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "GST, cash flow & vendor compliance guides for Indian businesses",
  description:
    "Practical, no-fluff guides on GST input tax credit, GSTR-2B reconciliation, vendor compliance, cash flow and running your finances on WhatsApp.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    url: "https://reakon.in/blog",
    siteName: "Reakon",
    title: "Reakon Blog — Protect your money. Know your numbers.",
    description:
      "Practical guides on GST, ITC, cash flow, and vendor compliance for Indian businesses and their CAs.",
  },
};

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return children;
}
