"use client";

/* Company logo cards — inline SVG wordmarks */
const logos = [
  { name: "TATA",         svg: <svg viewBox="0 0 100 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Georgia, serif" fontSize="32" fontWeight="700" letterSpacing="-1">TATA</text></svg> },
  { name: "MAHINDRA",     svg: <svg viewBox="0 0 190 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="800" letterSpacing="1.5">MAHINDRA</text></svg> },
  { name: "RELIANCE",     svg: <svg viewBox="0 0 170 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="21" fontWeight="700" letterSpacing="0.5">RELIANCE</text></svg> },
  { name: "wipro",        svg: <svg viewBox="0 0 110 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" letterSpacing="0.5">wipro</text></svg> },
  { name: "infosys",      svg: <svg viewBox="0 0 150 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="600" letterSpacing="1">infosys</text></svg> },
  { name: "BAJAJ",        svg: <svg viewBox="0 0 110 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" letterSpacing="-0.5">BAJAJ</text></svg> },
  { name: "ITC",          svg: <svg viewBox="0 0 70 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="2">ITC</text></svg> },
  { name: "Godrej",       svg: <svg viewBox="0 0 130 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" letterSpacing="0.5">Godrej</text></svg> },
  { name: "JSW",          svg: <svg viewBox="0 0 72 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="1">JSW</text></svg> },
  { name: "ADANI",        svg: <svg viewBox="0 0 115 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="700" letterSpacing="1">ADANI</text></svg> },
  { name: "HDFC",         svg: <svg viewBox="0 0 100 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="24" fontWeight="800" letterSpacing="1">HDFC</text></svg> },
  { name: "Asian Paints", svg: <svg viewBox="0 0 210 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="20" fontWeight="700" letterSpacing="0.5">Asian Paints</text></svg> },
  { name: "KOTAK",        svg: <svg viewBox="0 0 115 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="0.5">KOTAK</text></svg> },
  { name: "L&T",          svg: <svg viewBox="0 0 70 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" letterSpacing="1">L&amp;T</text></svg> },
  { name: "Birla",        svg: <svg viewBox="0 0 100 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Georgia, serif" fontSize="24" fontWeight="700" letterSpacing="0.5">Birla</text></svg> },
  { name: "SBI",          svg: <svg viewBox="0 0 70 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Arial, sans-serif" fontSize="28" fontWeight="900" letterSpacing="2">SBI</text></svg> },
  { name: "MARUTI",       svg: <svg viewBox="0 0 125 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="26" fontFamily="Arial, sans-serif" fontSize="22" fontWeight="700" letterSpacing="0.5">MARUTI</text></svg> },
  { name: "HUL",          svg: <svg viewBox="0 0 70 36" className="h-7 fill-current" xmlns="http://www.w3.org/2000/svg"><text x="2" y="28" fontFamily="Arial, sans-serif" fontSize="26" fontWeight="900" letterSpacing="2">HUL</text></svg> },
];

function LogoCard({ logo }: { logo: typeof logos[0] }) {
  return (
    <div className="shrink-0 flex items-center justify-center border border-gray-200 rounded-2xl px-7 py-4 shadow-sm hover:shadow-md hover:border-gray-300 transition-all duration-200 text-gray-800 mx-2">
      {logo.svg}
    </div>
  );
}

export function LogoMarqueeSection() {
  const strip = [...logos, ...logos];

  return (
    <section className="relative py-20 overflow-hidden">

      {/* Heading */}
      <div className="text-center mb-14 px-6">
        <h2 className="text-4xl lg:text-5xl font-display tracking-tight text-foreground mb-0" style={{ letterSpacing: "-0.02em" }}>
          Whatever you're running your finances on, we connect to it.
        </h2>
      </div>

      {/* Marquee row */}
      <div className="relative flex items-center justify-center">

        {/* Left edge fade */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to right, var(--background) 30%, transparent)" }} />

        {/* Right edge fade */}
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-40 z-10"
          style={{ background: "linear-gradient(to left, var(--background) 30%, transparent)" }} />

        {/* Centre convergence fade — logos vanish behind the Reakon card */}
        <div className="pointer-events-none absolute left-1/2 top-0 bottom-0 z-20"
          style={{
            width: "320px",
            transform: "translateX(-50%)",
            background: "linear-gradient(to right, transparent 0%, var(--background) 30%, var(--background) 70%, transparent 100%)",
          }}
        />

        {/* Reakon centre — just the logo, no background */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30">
          <img
            src="/reakon no-bg logo-black.png"
            alt="Reakon"
            style={{ width: 150, height: 150, objectFit: "contain" }}
          />
        </div>

        {/* Track */}
        <div className="flex items-center w-full h-24 overflow-hidden">

          {/* LEFT half — scrolls rightward toward center */}
          <div className="w-1/2 overflow-hidden flex justify-start">
            <div className="flex items-center logo-conv-left" style={{ width: "max-content" }}>
              {strip.map((logo, i) => (
                <LogoCard key={`l-${logo.name}-${i}`} logo={logo} />
              ))}
            </div>
          </div>

          {/* Reserve space for the centre card */}
          <div className="w-32 shrink-0" />

          {/* RIGHT half — scrolls leftward toward center */}
          <div className="w-1/2 overflow-hidden flex justify-start">
            <div className="flex items-center logo-conv-right" style={{ width: "max-content" }}>
              {strip.map((logo, i) => (
                <LogoCard key={`r-${logo.name}-${i}`} logo={logo} />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Sub-link */}
      <div className="text-center mt-10">
        <a
          href="#"
          className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors duration-150"
        >
          See other potential connectors we are considering&nbsp;&nbsp;→
        </a>
      </div>

      <style jsx global>{`
        .logo-conv-left {
          animation: convLeft 45s linear infinite;
        }
        @keyframes convLeft {
          from { transform: translateX(-50%); }
          to   { transform: translateX(0); }
        }
        .logo-conv-right {
          animation: convRight 45s linear infinite;
        }
        @keyframes convRight {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
