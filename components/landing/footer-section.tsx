"use client";

import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

const footerLinks = {
  Product: [
    { name: "Features",     href: "/#what-reakon-does" },
    { name: "Why Reakon",   href: "/#infrastructure" },
    { name: "Connectors",   href: "/#connectors" },
  ],
  Company: [
    { name: "About",   href: "/team" },
    { name: "Blog",    href: "/blog" },
    { name: "Contact", href: "https://cal.com/reakon.in/45min" },
  ],
  Legal: [
    { name: "Privacy",  href: "https://app.reakon.in/privacy" },
    { name: "Terms",    href: "https://app.reakon.in/terms" },
    { name: "Security", href: "/#security" },
  ],
};

const isExternal = (href: string) => /^https?:\/\//.test(href);

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

const YouTubeIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
  </svg>
);

const DiscordIcon = () => (
  <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20.317 4.3698a19.7913 19.7913 0 0 0-4.8851-1.5152.0741.0741 0 0 0-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 0 0-.0785-.037 19.7363 19.7363 0 0 0-4.8852 1.515.0699.0699 0 0 0-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 0 0 .0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 0 0 .0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 0 0-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 0 1-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 0 1 .0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 0 1 .0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 0 1-.0066.1276 12.2986 12.2986 0 0 1-1.873.8914.0766.0766 0 0 0-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 0 0 .0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 0 0 .0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 0 0-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189Z" />
  </svg>
);

const socialLinks = [
  { name: "Instagram", href: "https://www.instagram.com/reakon.in/", Icon: InstagramIcon },
  { name: "LinkedIn",  href: "https://www.linkedin.com/company/reakon-in/", Icon: LinkedInIcon },
  { name: "X",         href: "https://x.com/ReakonHQ", Icon: XIcon },
  { name: "YouTube",   href: "https://www.youtube.com/@reakon-in/", Icon: YouTubeIcon },
  { name: "Facebook",  href: "https://www.facebook.com/Reakon.in/", Icon: FacebookIcon },
  { name: "Discord",   href: "https://discord.gg/nePXdfwGkq", Icon: DiscordIcon },
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
            <Image
              src="/reakon no-bg logo-black.png"
              alt="Reakon"
              width={155}
              height={48}
              className="w-auto"
              style={{ height: "48px", display: "block", marginBottom: "22px" }}
            />
            <p className="leading-relaxed mb-8 max-w-xs text-base" style={{ color: "rgba(0,0,0,0.55)" }}>
              The platform to protect your GST and customer payments — starting today.
            </p>

            {/* Social Links */}
            <div className="flex items-center flex-wrap gap-4 lg:gap-5">
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
                      {...(isExternal(link.href) ? { target: "_blank", rel: "noopener noreferrer" } : {})}
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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/reakon-footer-wordmark.png"
          alt="Reakon"
          style={{
            width: "100%",
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
