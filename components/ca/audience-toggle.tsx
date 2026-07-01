"use client";

/**
 * Segmented pill that switches between the two site views:
 *  - "owners" → "/"          (For Business Owners)
 *  - "cas"    → "/for-cas"   (For CAs)
 * The active segment is a solid white chip; the inactive one is a link.
 */
export function AudienceToggle({
  active,
  size = "md",
}: {
  active: "owners" | "cas";
  size?: "sm" | "md";
}) {
  const pad = size === "sm" ? "6px 14px" : "8px 16px";
  const fontSize = size === "sm" ? "12.5px" : "13px";

  const segment = (label: string, href: string, isActive: boolean) => (
    <a
      href={isActive ? undefined : href}
      aria-current={isActive ? "page" : undefined}
      className="relative flex items-center justify-center whitespace-nowrap transition-all duration-200"
      style={{
        padding: pad,
        fontSize,
        fontWeight: 600,
        borderRadius: "9999px",
        textDecoration: "none",
        cursor: isActive ? "default" : "pointer",
        color: isActive ? "#0B2252" : "rgba(0,0,0,0.5)",
        background: isActive ? "#ffffff" : "transparent",
        boxShadow: isActive
          ? "0 2px 8px rgba(11,34,82,0.12), 0 1px 2px rgba(0,0,0,0.06)"
          : "none",
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.color = "rgba(0,0,0,0.8)";
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.color = "rgba(0,0,0,0.5)";
      }}
    >
      {label}
    </a>
  );

  return (
    <div
      className="inline-flex items-center"
      style={{
        padding: "3px",
        borderRadius: "9999px",
        gap: "2px",
        background: "rgba(255,255,255,0.55)",
        border: "1px solid rgba(255,255,255,0.9)",
        backdropFilter: "blur(12px)",
        WebkitBackdropFilter: "blur(12px)",
        boxShadow: "0 4px 20px rgba(11,34,82,0.06)",
      }}
    >
      {segment("For Business Owners", "/", active === "owners")}
      {segment("For CAs", "/for-cas", active === "cas")}
    </div>
  );
}
