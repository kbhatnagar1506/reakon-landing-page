"use client";

import { useState, useEffect } from "react";
import { Menu, X, ArrowRight } from "lucide-react";
import { AudienceToggle } from "./audience-toggle";

const easing = "cubic-bezier(0.22,1,0.36,1)";

const PARTNER_SIGNUP = "https://www.reakon.in";
const PARTNER_LOGIN = "https://www.reakon.in";
const DEMO_LINK = "https://cal.com/reakon.in/45min";

export function CaNavigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [isMobileMenuOpen]);

  return (
    <>
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, zIndex: 50 }}>
        <nav style={{ width: "100%", background: "transparent" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              height: isScrolled ? "62px" : "76px",
              padding: isScrolled ? "0 20px" : "0 40px",
              transition:
                "height 600ms cubic-bezier(0.4,0,0.2,1), padding 600ms cubic-bezier(0.4,0,0.2,1)",
            }}
          >
            {/* Logo */}
            <a href="/" style={{ display: "flex", alignItems: "center", flexShrink: 0 }}>
              <img
                src="/reakon no-bg logo-black.png"
                alt="Reakon"
                className="h-10 md:!h-[56px]"
                style={{ display: "block" }}
              />
            </a>

            {/* Center — audience toggle (desktop) */}
            <div className="hidden md:flex items-center justify-center flex-1">
              <AudienceToggle active="cas" />
            </div>

            {/* Right — partner login + become a partner (desktop) */}
            <div className="hidden md:flex items-center" style={{ gap: "8px" }}>
              <a
                href={PARTNER_LOGIN}
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "8px 16px",
                  fontSize: "13.5px",
                  fontWeight: 500,
                  color: "rgba(0,0,0,0.6)",
                  textDecoration: "none",
                  borderRadius: "10px",
                  whiteSpace: "nowrap",
                  transition: "color 150ms ease",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.9)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(0,0,0,0.6)")}
              >
                Partner login
              </a>
              <a
                href={PARTNER_SIGNUP}
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
                  boxShadow:
                    "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 12px rgba(79,110,247,0.35)",
                  transition: "opacity 150ms ease",
                  whiteSpace: "nowrap",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
                onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
              >
                Become a partner
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

      {/* Mobile overlay */}
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
        <div
          aria-hidden
          style={{
            position: "absolute",
            top: "-12%",
            left: "-18%",
            width: "75%",
            height: "45%",
            borderRadius: "9999px",
            background:
              "radial-gradient(circle at 50% 50%, rgba(255,255,255,0.95), rgba(255,255,255,0) 70%)",
            filter: "blur(20px)",
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
            background:
              "radial-gradient(circle at 50% 50%, rgba(124,150,250,0.18), rgba(124,150,250,0) 72%)",
            filter: "blur(26px)",
            pointerEvents: "none",
          }}
        />

        <div className="relative flex flex-col h-full px-7 pt-6 pb-9">
          {/* Top bar */}
          <div className="flex items-center justify-between">
            <a href="/" onClick={() => setIsMobileMenuOpen(false)} style={{ display: "flex", alignItems: "center" }}>
              <img src="/reakon no-bg logo-black.png" alt="Reakon" style={{ display: "block", height: "40px" }} />
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

          <div
            className="font-mono uppercase"
            style={{
              fontSize: "10.5px",
              letterSpacing: "0.22em",
              color: "rgba(0,0,0,0.4)",
              marginTop: "26px",
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(-10px)",
              transition: `opacity 500ms ${easing} 80ms, transform 500ms ${easing} 80ms`,
            }}
          >
            For Chartered Accountants
          </div>

          {/* Center content */}
          <div className="flex-1 flex flex-col justify-center" style={{ gap: "22px" }}>
            <div
              style={{
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity 600ms ${easing} 160ms, transform 600ms ${easing} 160ms`,
              }}
            >
              <AudienceToggle active="cas" />
            </div>

            <a
              href={PARTNER_LOGIN}
              onClick={() => setIsMobileMenuOpen(false)}
              className="group flex items-center font-display tracking-tight"
              style={{
                fontSize: "34px",
                lineHeight: 1.05,
                fontWeight: 600,
                color: "#000",
                textDecoration: "none",
                opacity: isMobileMenuOpen ? 1 : 0,
                transform: isMobileMenuOpen ? "translateX(0)" : "translateX(-24px)",
                transition: `opacity 600ms ${easing} 230ms, transform 600ms ${easing} 230ms`,
              }}
            >
              Partner login
              <ArrowRight className="ml-auto w-5 h-5 transition-transform group-active:translate-x-1" style={{ color: "rgba(0,0,0,0.28)" }} strokeWidth={2.2} />
            </a>
          </div>

          {/* Bottom CTAs */}
          <div
            style={{
              opacity: isMobileMenuOpen ? 1 : 0,
              transform: isMobileMenuOpen ? "translateY(0)" : "translateY(16px)",
              transition: `opacity 600ms ${easing} 320ms, transform 600ms ${easing} 320ms`,
            }}
          >
            <div
              aria-hidden
              style={{
                height: "1px",
                width: "100%",
                background:
                  "linear-gradient(90deg, rgba(11,34,82,0) 0%, rgba(11,34,82,0.14) 50%, rgba(11,34,82,0) 100%)",
                marginBottom: "22px",
              }}
            />
            <div className="flex flex-col" style={{ gap: "12px" }}>
              <a
                href={PARTNER_SIGNUP}
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
                Become a partner
              </a>
              <a
                href={DEMO_LINK}
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
                Book a 15-min demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
