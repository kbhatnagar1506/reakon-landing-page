"use client";

import { ArrowUpRight } from "lucide-react";

const footerLinks = {
  Product: [
    { name: "Features",     href: "#what-reakon-does" },
    { name: "Why Reakon",   href: "#infrastructure" },
    { name: "Connectors",   href: "/coming-soon?page=Integrations" },
  ],
  Company: [
    { name: "About",   href: "/coming-soon?page=About" },
    { name: "Blog",    href: "/blog" },
    { name: "Contact", href: "/coming-soon?page=Contact" },
  ],
  Legal: [
    { name: "Privacy",  href: "/privacy" },
    { name: "Terms",    href: "/coming-soon?page=Terms" },
    { name: "Security", href: "/coming-soon?page=Security" },
  ],
};

const InstagramIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const LinkedInIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const XIcon = () => (
  <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/reakon.in/", Icon: InstagramIcon },
  { name: "LinkedIn",  href: "https://www.linkedin.com/company/reakon-in/", Icon: LinkedInIcon },
  { name: "X",         href: "https://x.com/Reakonofficial", Icon: XIcon },
];

export function FooterSection() {
  return (
    <footer
      className="relative w-full overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #EDF4FB 0%, #DCEAF8 40%, #C5DBF2 100%)",
        marginTop: "40px",
      }}
    >
      {/* Soft cloud accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div style={{ position: "absolute", top: "10%", left: "8%", width: "500px", height: "200px", background: "radial-gradient(ellipse, rgba(255,255,255,0.6) 0%, transparent 70%)", filter: "blur(40px)", borderRadius: "50%" }} />
        <div style={{ position: "absolute", top: "20%", right: "5%", width: "420px", height: "180px", background: "radial-gradient(ellipse, rgba(255,255,255,0.5) 0%, transparent 70%)", filter: "blur(34px)", borderRadius: "50%" }} />
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-12 lg:pt-20 pb-0">
        {/* Main Footer */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-x-6 gap-y-10 md:gap-12 lg:gap-8 pb-12 lg:pb-16">
          {/* Brand Column */}
          <div className="col-span-2">
            <img
              src="/reakon no-bg logo-black.png"
              alt="Reakon"
              style={{ height: "48px", display: "block", marginBottom: "22px" }}
            />
            <p className="leading-relaxed mb-8 max-w-xs text-base" style={{ color: "rgba(0,0,0,0.55)" }}>
              The platform to protect your GST and customer payments — starting today.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-5 lg:gap-6">
              {socialLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.name}
                  className="inline-flex items-center justify-center transition-all"
                  style={{ color: "#000" }}
                  onMouseEnter={(e) => { e.currentTarget.style.opacity = "0.6"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.opacity = "1"; }}
                >
                  <link.Icon />
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-mono uppercase tracking-widest mb-5" style={{ color: "rgba(0,0,0,0.4)" }}>
                {title}
              </h3>
              <ul className="space-y-3.5">
                {links.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm transition-colors"
                      style={{ color: "rgba(0,0,0,0.6)" }}
                      onMouseEnter={(e) => { e.currentTarget.style.color = "#000"; }}
                      onMouseLeave={(e) => { e.currentTarget.style.color = "rgba(0,0,0,0.6)"; }}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Giant REAKON wordmark — full width */}
      <div
        className="relative w-full flex justify-center select-none pointer-events-none mt-9 lg:mt-[60px]"
        style={{ overflow: "hidden" }}
      >
        <img
          src="/reakon-footer-wordmark.png"
          alt="Reakon"
          style={{
            width: "100%",
            objectFit: "cover",
            display: "block",
            maskImage: "linear-gradient(180deg, #000 45%, transparent 96%)",
            WebkitMaskImage: "linear-gradient(180deg, #000 45%, transparent 96%)",
          }}
        />
      </div>

      {/* Bottom Bar — below wordmark */}
      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16" style={{ marginTop: "16px" }}>
        <div
          className="pt-5 pb-5 flex flex-col md:flex-row items-center justify-between gap-4 text-center md:text-left"
          style={{ borderTop: "1px solid rgba(0,0,0,0.1)" }}
        >
          <p className="text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
            © 2026 Reakon Technologies Pvt. Ltd. All rights reserved.
          </p>
          <span className="flex items-center gap-2 text-sm" style={{ color: "rgba(0,0,0,0.5)" }}>
            <span className="w-2 h-2 rounded-full bg-green-500" style={{ boxShadow: "0 0 0 3px rgba(34,197,94,0.15)" }} />
            All systems operational
          </span>
        </div>
      </div>
    </footer>
  );
}
