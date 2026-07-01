"use client";

import { useState, useEffect, type CSSProperties } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

type NavLink = { name: string; href: string; route?: boolean };

const navLinks: NavLink[] = [
  { name: "Features", href: "#what-reakon-does" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Connectors", href: "#connectors" },
  { name: "Why Us", href: "#infrastructure" },
  { name: "Founder", href: "#founder" },
  { name: "Blog", href: "/blog", route: true },
  { name: "FAQ", href: "#faq" },
];

// Mobile menu only lists links whose target section exists on phones.
// #infrastructure ("Why Us") is display:none on mobile, so it is excluded here.
const mobileNavLinks: NavLink[] = [
  { name: "Features", href: "#what-reakon-does" },
  { name: "How it works", href: "#how-it-works" },
  { name: "Connectors", href: "#connectors" },
  { name: "Founder", href: "#founder" },
  { name: "Blog", href: "/blog", route: true },
  { name: "FAQ", href: "#faq" },
];

/* Authentic brand glyphs */
const InstagramGlyph = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 2.163c3.204 0 3.584.012 4.849.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.849.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
  </svg>
);

const LinkedInGlyph = () => (
  <svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
  </svg>
);

const easing = "cubic-bezier(0.22,1,0.36,1)";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileMenuOpen]);

  // Reset the active-link highlight whenever the menu closes.
  useEffect(() => {
    if (!isMobileMenuOpen) setActiveIndex(null);
  }, [isMobileMenuOpen]);

  const handleMobileNavTap = (href: string, index: number) => {
    setActiveIndex(index);
    setIsMobileMenuOpen(false);
    setTimeout(() => {
      if (href.startsWith("/")) {
        window.location.href = href;
        return;
      }
      const id = href.replace("#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 320);
  };

  return (
    <>
      <div
        style={{
          position: "absolute",
          top: "0px",
          left: "0px",
          right: "0px",
          zIndex: 50,
          transition: "none",
        }}
      >
        <nav
          style={{
            width: "100%",
            borderRadius: "0px",
            background: "transparent",
            backdropFilter: "none",
            WebkitBackdropFilter: "none",
            border: "none",
            boxShadow: "none",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: isScrolled ? "62px" : "76px",
              padding: isScrolled ? "0 20px" : "0 40px",
              transition: "height 600ms cubic-bezier(0.4,0,0.2,1), padding 600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Logo */}
            <a href="#" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/reakon no-bg logo-black.png"
                alt="Reakon"
                className="h-10 md:!h-[56px]"
                style={{
                  display: "block",
                }}
              />
            </a>

            {/* Desktop Nav Links */}
            <div className="hidden md:flex items-center" style={{ gap: "2px" }}>
              {navLinks.map((link) => {
                const linkStyle: CSSProperties = {
                  padding: "6px 12px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.55)",
                  background: "none",
                  border: "none",
                  textDecoration: "none",
                };
                if (link.route) {
                  return (
                    <a
                      key={link.name}
                      href={link.href}
                      className="whitespace-nowrap rounded-lg hover:bg-black/[0.06] transition-colors duration-150 cursor-pointer"
                      style={linkStyle}
                      onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
                      onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.55)")}
                    >
                      {link.name}
                    </a>
                  );
                }
                return (
                  <button
                    key={link.name}
                    onClick={() => {
                      const id = link.href.replace("#", "");
                      const el = document.getElementById(id);
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    }}
                    className="whitespace-nowrap rounded-lg hover:bg-black/[0.06] transition-colors duration-150 cursor-pointer"
                    style={linkStyle}
                    onMouseEnter={e => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
                    onMouseLeave={e => (e.currentTarget.style.color = "rgba(0,0,0,0.55)")}
                  >
                    {link.name}
                  </button>
                );
              })}
            </div>

            {/* Right: sign in + CTA */}
            <div className="hidden md:flex items-center" style={{ gap: "8px" }}>

              <a
                href="https://reakon.in"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 18px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#fff",
                  background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 12px rgba(79,110,247,0.35)",
                  transition: "opacity 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                Sign up
              </a>

              <a
                href="https://cal.com/reakon.in/45min"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "8px 18px",
                  fontSize: "13.5px",
                  fontWeight: 600,
                  color: "#0B2252",
                  background: "#ffffff",
                  borderRadius: "10px",
                  textDecoration: "none",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.12)",
                  transition: "opacity 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={e => { e.currentTarget.style.opacity = "0.85"; }}
                onMouseLeave={e => { e.currentTarget.style.opacity = "1"; }}
              >
                Contact Us Now
              </a>
            </div>

            {/* Mobile hamburger */}
            <button
              onClick={() => setIsMobileMenuOpen(true)}
              className="md:hidden flex items-center justify-center transition-all duration-200 active:scale-95"
              aria-label="Open menu"
              style={{
                width: "44px",
                height: "44px",
                borderRadius: "14px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 40px rgba(11,34,82,0.08)",
                color: "#0B2252",
                opacity: isMobileMenuOpen ? 0 : 1,
                pointerEvents: isMobileMenuOpen ? "none" : "auto",
              }}
            >
              <Menu className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay — full-screen sky-blue frosted panel with editorial motion */}
      <div
        className="md:hidden fixed inset-0 z-[60]"
        aria-hidden={!isMobileMenuOpen}
        style={{
          opacity: isMobileMenuOpen ? 1 : 0,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
          transition: `opacity 500ms ${easing}`,
          background: "linear-gradient(160deg, #EDF4FB 0%, #DCEAF8 100%)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
        }}
      >
        {/* Soft white cloud blobs for depth */}
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-12%",
            left: "-18%",
            width: "75%",
            height: "45%",
            borderRadius: "9999px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
            filter: "blur(20px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "30%",
            right: "-22%",
            width: "70%",
            height: "40%",
            borderRadius: "9999px",
            background: "radial-gradient(circle at 50% 50%, rgba(124,150,250,0.18), rgba(124,150,250,0) 70%)",
            filter: "blur(26px)",
            pointerEvents: "none",
          }}
        />
        <div
          aria-hidden
          style={{
            position: "absolute",
            bottom: "-14%",
            left: "8%",
            width: "85%",
            height: "42%",
            borderRadius: "9999px",
            background: "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.7), rgba(255,255,255,0) 72%)",
            filter: "blur(26px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative flex flex-col h-full px-7 pt-6 pb-9" style={{ minHeight: "100%" }}>
          {/* Top bar: logo + circular close button */}
          <div className="flex items-center justify-between">
            <a
              href="#"
              onClick={() => setIsMobileMenuOpen(false)}
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="/reakon no-bg logo-black.png"
                alt="Reakon"
                style={{ display: "block", height: "40px" }}
              />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(false)}
              aria-label="Close menu"
              className="flex items-center justify-center transition-all duration-200 active:scale-90"
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                background: "rgba(255,255,255,0.7)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.9)",
                boxShadow: "0 8px 40px rgba(11,34,82,0.08)",
                color: "#0B2252",
              }}
            >
              <X className="w-5 h-5" strokeWidth={2.2} />
            </button>
          </div>

          {/* Mono eyebrow */}
          <div
            className="font-mono uppercase"
            style={{
              fontSize: "10.5px",
              letterSpacing: "0.22em",
              color: "rgba(0,0,0,0.4)",
              marginTop: "26px",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
              transition: `opacity 500ms ${easing}, transform 500ms ${easing}`,
              transitionDelay: isMobileMenuOpen ? "80ms" : "0ms",
            }}
          >
            Menu — Reakon
          </div>

          {/* Mono-indexed font-display links with tracking accent + nudging arrow */}
          <nav className="flex-1 flex flex-col justify-center" style={{ gap: "6px" }}>
            {mobileNavLinks.map((link, i) => {
              const isActive = activeIndex === i;
              return (
                <button
                  key={link.name}
                  onClick={() => handleMobileNavTap(link.href, i)}
                  className="group relative flex items-center text-left cursor-pointer active:scale-[0.98]"
                  style={{
                    background: "none",
                    border: "none",
                    padding: "8px 4px 8px 22px",
                    minHeight: "56px",
                    opacity: isMobileMenuOpen ? 1 : 0,
                    transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-28px)",
                    transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
                    transitionDelay: isMobileMenuOpen ? `${140 + i * 65}ms` : "0ms",
                  }}
                >
                  {/* Brand-blue left accent bar that grows on the active item */}
                  <span
                    aria-hidden
                    style={{
                      position: "absolute",
                      left: "0px",
                      top: "50%",
                      transform: "translateY(-50%)",
                      width: isActive ? "4px" : "3px",
                      height: isActive ? "44px" : "0px",
                      borderRadius: "9999px",
                      background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                      boxShadow: isActive ? "0 2px 10px rgba(79,110,247,0.45)" : "none",
                      transition: `height 320ms ${easing}, width 320ms ${easing}`,
                    }}
                  />

                  {/* Mono index number */}
                  <span
                    className="font-mono uppercase shrink-0"
                    style={{
                      fontSize: "12px",
                      letterSpacing: "0.12em",
                      color: "#4F6EF7",
                      marginRight: "16px",
                      fontWeight: 500,
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>

                  {/* Display label */}
                  <span
                    className="font-display tracking-tight"
                    style={{
                      fontSize: "34px",
                      lineHeight: 1.05,
                      fontWeight: 600,
                      color: isActive ? "#3D59E8" : "#000",
                      transition: "color 200ms ease",
                    }}
                  >
                    {link.name}
                  </span>

                  {/* Arrow that nudges on press / when active */}
                  <ArrowRight
                    aria-hidden
                    className="ml-auto transition-transform duration-300 group-active:translate-x-1.5"
                    style={{
                      width: "22px",
                      height: "22px",
                      color: isActive ? "#3D59E8" : "rgba(0,0,0,0.28)",
                      transform: isActive ? "translateX(6px)" : "translateX(0)",
                      transitionTimingFunction: "cubic-bezier(0.22,1,0.36,1)",
                    }}
                    strokeWidth={2.4}
                  />
                </button>
              );
            })}
          </nav>

          {/* Hairline divider + CTAs + social row */}
          <div
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 600ms ${easing}, transform 600ms ${easing}`,
              transitionDelay: isMobileMenuOpen ? "360ms" : "0ms",
            }}
          >
            <div
              aria-hidden
              style={{
                height: "1px",
                width: "100%",
                background: "linear-gradient(90deg, rgba(11,34,82,0) 0%, rgba(11,34,82,0.14) 50%, rgba(11,34,82,0) 100%)",
                marginBottom: "22px",
              }}
            />

            <div className="flex flex-col" style={{ gap: "12px" }}>
              <a
                href="https://reakon.in"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
                style={{
                  height: "56px",
                  borderRadius: "16px",
                  color: "#fff",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                  boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 10px 30px rgba(79,110,247,0.35)",
                }}
              >
                Sign up
              </a>
              <a
                href="https://cal.com/reakon.in/45min"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setIsMobileMenuOpen(false)}
                className="w-full flex items-center justify-center transition-all duration-200 active:scale-[0.98]"
                style={{
                  height: "56px",
                  borderRadius: "16px",
                  color: "#0B2252",
                  fontSize: "16px",
                  fontWeight: 600,
                  textDecoration: "none",
                  background: "rgba(255,255,255,0.7)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 8px 40px rgba(11,34,82,0.08)",
                }}
              >
                Contact Us Now
              </a>
            </div>

            {/* Social row */}
            <div className="flex items-center justify-center" style={{ gap: "14px", marginTop: "26px" }}>
              <a
                href="https://www.instagram.com/reakon.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 20px rgba(11,34,82,0.06)",
                  color: "#0B2252",
                }}
              >
                <InstagramGlyph />
              </a>
              <a
                href="https://www.linkedin.com/company/reakon-in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 20px rgba(11,34,82,0.06)",
                  color: "#0B2252",
                }}
              >
                <LinkedInGlyph />
              </a>
              <a
                href="https://x.com/Reakonofficial"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="X"
                className="flex items-center justify-center transition-all duration-200 active:scale-90"
                style={{
                  width: "48px",
                  height: "48px",
                  borderRadius: "9999px",
                  background: "rgba(255,255,255,0.6)",
                  border: "1px solid rgba(255,255,255,0.9)",
                  boxShadow: "0 4px 20px rgba(11,34,82,0.06)",
                  color: "#0B2252",
                }}
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
