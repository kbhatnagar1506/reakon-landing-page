"use client";

import { useEffect, useState, useRef } from "react";

const reviewsRow1 = [
  {
    text: "Reakon caught ₹2.4 lakhs in unclaimed GST credit in the first week. I didn't even know I was losing it.",
    name: "Ravi Shankar",
    company: "Shankar Traders, Pune",
    stars: 5,
  },
  {
    text: "My CA used to spend 3 days every quarter chasing my bills. Now everything is on WhatsApp and she just reviews. Game changer.",
    name: "Priya Mehta",
    company: "Mehta Fabrics, Surat",
    stars: 5,
  },
  {
    text: "A vendor hadn't filed GST for 4 months. Reakon flagged it automatically and told me exactly how much to withhold. Saved me ₹80,000.",
    name: "Anil Desai",
    company: "Desai Hardware, Nashik",
    stars: 5,
  },
  {
    text: "I was skeptical about anything that touches my GST data. But it's all through MasterGST — government licensed. I'm comfortable.",
    name: "Sunita Agarwal",
    company: "Agarwal Exports, Jaipur",
    stars: 5,
  },
  {
    text: "Three customers were 60+ days overdue. Reakon sent WhatsApp reminders and two of them paid within the week.",
    name: "Kiran Patil",
    company: "Patil Auto Parts, Aurangabad",
    stars: 5,
  },
  {
    text: "Setup took 5 minutes. Forward a bill on WhatsApp and you're done. I wish I'd found this 2 years ago.",
    name: "Deepak Nair",
    company: "Nair Electronics, Kochi",
    stars: 5,
  },
];

const reviewsRow2 = [
  {
    text: "The P&L my CA posts to the portal is clear and dated. I finally feel in control of my finances without making any phone calls.",
    name: "Meena Joshi",
    company: "Joshi Pharmaceuticals, Ahmedabad",
    stars: 5,
  },
  {
    text: "I run a small textile business. I had no idea how much GST credit I was leaking every month. Reakon showed me in 3 days.",
    name: "Ramesh Gupta",
    company: "Gupta Textiles, Ludhiana",
    stars: 5,
  },
  {
    text: "My accountant loves it too. She says the data is cleaner and she spends less time on corrections. Win-win.",
    name: "Nalini Rao",
    company: "Rao Constructions, Hyderabad",
    stars: 5,
  },
  {
    text: "No app to install, no new software to learn. Just WhatsApp. Even my dad who runs the business can use it.",
    name: "Vishal Kapoor",
    company: "Kapoor Steel, Delhi",
    stars: 5,
  },
  {
    text: "I recovered more in the 3-day trial than the annual subscription costs. The decision was easy.",
    name: "Anjali Singh",
    company: "Singh Packaging, Mumbai",
    stars: 5,
  },
  {
    text: "Reakon sends polite reminders to late-paying customers automatically. It's like having a credit controller without hiring one.",
    name: "Suresh Iyer",
    company: "Iyer Logistics, Chennai",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5 mb-3">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-yellow-400 fill-yellow-400" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: typeof reviewsRow1[0] }) {
  return (
    <div className="shrink-0 w-80 px-6 py-6 border border-foreground/10 hover:border-foreground/20 bg-background transition-all duration-300">
      <StarRating count={review.stars} />
      <p className="text-sm text-foreground leading-relaxed mb-4">"{review.text}"</p>
      <div>
        <div className="text-sm font-medium text-foreground">{review.name}</div>
        <div className="text-xs text-muted-foreground">{review.company}</div>
      </div>
    </div>
  );
}

export function TestimonialMarqueeSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="relative py-24 lg:py-32 overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
        <div
          className={`text-center max-w-3xl mx-auto mb-16 lg:mb-24 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="inline-flex items-center gap-3 text-sm font-mono text-muted-foreground mb-6">
            <span className="w-8 h-px bg-foreground/30" />
            Reviews
            <span className="w-8 h-px bg-foreground/30" />
          </span>
          <h2 className="text-4xl lg:text-6xl font-display tracking-tight mb-6">
            What our customers
            <br />
            have to say.
          </h2>
          <p className="text-xl text-muted-foreground">
            200+ trusted customers. Monitor your money with ease.
          </p>
        </div>
      </div>

      {/* Row 1 — scrolls left */}
      <div className="w-full mb-6 overflow-hidden">
        <div className="flex gap-6 marquee">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {reviewsRow1.map((review, i) => (
                <ReviewCard key={`r1-${setIndex}-${i}`} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — scrolls right */}
      <div className="w-full overflow-hidden">
        <div className="flex gap-6 marquee-reverse">
          {[...Array(2)].map((_, setIndex) => (
            <div key={setIndex} className="flex gap-6 shrink-0">
              {reviewsRow2.map((review, i) => (
                <ReviewCard key={`r2-${setIndex}-${i}`} review={review} />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
