import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  robots: { index: false, follow: false },
};

export default function ComingSoonPage({
  searchParams,
}: {
  searchParams: { page?: string };
}) {
  const label = searchParams?.page ?? "This page";

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Top bar */}
      <div className="border-b border-foreground/10 px-6 lg:px-12 py-5 flex items-center justify-between">
        <Link href="/">
          <img
            src="/reakon no-bg logo-black.png"
            alt="Reakon"
            style={{ height: 44 }}
          />
        </Link>
        <Link
          href="/"
          className="text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          ← Back to home
        </Link>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        {/* Animated dot grid */}
        <div className="relative mb-12 w-48 h-48 flex items-center justify-center">
          <div
            className="absolute inset-0 rounded-full opacity-10 animate-ping"
            style={{ background: "oklch(0.62 0.15 160)", animationDuration: "2.4s" }}
          />
          <div
            className="absolute inset-4 rounded-full opacity-15 animate-ping"
            style={{ background: "oklch(0.62 0.15 160)", animationDuration: "2.4s", animationDelay: "0.4s" }}
          />
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center shadow-xl"
            style={{ background: "oklch(0.62 0.15 160)" }}
          >
            <svg
              width="40"
              height="40"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
          </div>
        </div>

        <p
          className="text-xs font-mono tracking-widest uppercase text-muted-foreground mb-4"
          style={{ letterSpacing: "0.2em" }}
        >
          Coming Soon
        </p>

        <h1
          className="text-5xl lg:text-6xl font-display tracking-tight mb-5 max-w-xl"
          style={{ letterSpacing: "-0.025em" }}
        >
          {label} is on its way.
        </h1>

        <p className="text-muted-foreground text-lg leading-relaxed max-w-md mb-10">
          We&apos;re building this out right now. Check back soon — or drop us a message and we&apos;ll let you know the moment it&apos;s live.
        </p>

        <div className="flex flex-col sm:flex-row gap-3 items-center">
          <a
            href="mailto:hello@reakon.in"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white transition-opacity duration-150 hover:opacity-85"
            style={{ background: "oklch(0.62 0.15 160)" }}
          >
            Notify me when it's live
          </a>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-medium border border-foreground/15 text-foreground hover:bg-foreground/5 transition-colors"
          >
            Back to home
          </Link>
        </div>
      </div>

      {/* Footer strip */}
      <div className="border-t border-foreground/10 px-6 lg:px-12 py-6 text-center">
        <p className="text-sm text-muted-foreground">
          © 2026 Reakon Technologies Pvt. Ltd.
        </p>
      </div>
    </div>
  );
}
