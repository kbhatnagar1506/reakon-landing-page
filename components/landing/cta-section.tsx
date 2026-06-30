"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function CtaSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: ((e.clientX - rect.left) / rect.width) * 100,
      y: ((e.clientY - rect.top) / rect.height) * 100,
    });
  };

  return (
    <section ref={sectionRef} className="relative py-16 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-5 sm:px-6 lg:px-12">
        <div
          className={`relative border border-foreground transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
          onMouseMove={handleMouseMove}
        >
          {/* Spotlight effect */}
          <div 
            className="absolute inset-0 opacity-10 pointer-events-none transition-opacity duration-300"
            style={{
              background: `radial-gradient(600px circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(0,0,0,0.15), transparent 40%)`
            }}
          />
          
          <div className="relative z-10 px-6 sm:px-8 lg:px-16 py-12 sm:py-16 lg:py-24">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
              {/* Left content */}
              <div className="flex-1 w-full">
                <h2 className="text-[clamp(2rem,8vw,2.75rem)] lg:text-7xl font-display tracking-tight mb-6 lg:mb-8 leading-[1.05] lg:leading-[0.95]">
                  Your money has been draining

                  <br />
                  long enough.
                </h2>

                <p className="text-lg sm:text-xl text-muted-foreground mb-8 lg:mb-12 leading-relaxed max-w-xl">
                 Start your free trial today. Find out what you're owed — on WhatsApp, in five minutes.
                </p>

                <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-4">
                  <a
                    href="#"
                    className="inline-flex items-center justify-center text-white px-8 h-14 text-base font-semibold group hover:opacity-90 transition-opacity"
                    style={{
                      background: "linear-gradient(180deg, #7B96FA 0%, #4F6EF7 50%, #3D59E8 100%)",
                      borderRadius: "14px",
                      boxShadow: "0 2px 0 rgba(255,255,255,0.18) inset, 0 4px 16px rgba(79,110,247,0.35)",
                    }}
                  >
                    Start your free trial today
                    <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
                  </a>
                  <a
                    href="https://cal.com/reakon.in/45min"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center h-14 px-8 text-base font-semibold border border-foreground/20 text-foreground hover:bg-foreground/5 transition-colors"
                    style={{ borderRadius: "14px" }}
                  >
                    Talk to sales
                  </a>
                </div>

                <p className="text-sm text-muted-foreground mt-8 font-mono">
                  No credit card required
                </p>
              </div>

            </div>
          </div>

          {/* Decorative corner */}
          <div className="absolute top-0 right-0 w-16 h-16 lg:w-32 lg:h-32 border-b border-l border-foreground/10" />
          <div className="absolute bottom-0 left-0 w-16 h-16 lg:w-32 lg:h-32 border-t border-r border-foreground/10" />
        </div>
      </div>
    </section>
  );
}
