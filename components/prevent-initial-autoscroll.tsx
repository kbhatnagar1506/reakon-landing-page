"use client";

import { useEffect } from "react";

/**
 * The embedded demo iframes (app.reakon.in/demo…) auto-focus a field/cell on
 * load. When a cross-origin iframe moves focus, the browser scrolls the parent
 * page down to reveal it — so the page "auto-scrolls" to the demo on load.
 *
 * We can't change the embedded app from here, so we pin the page to the top
 * until the user actually interacts. Any programmatic scroll before the first
 * real interaction is reverted; the guard disengages the moment the user
 * scrolls, taps, or types.
 */
export function PreventInitialAutoScroll() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    // Take control of scroll position; don't let the browser restore mid-page.
    if ("scrollRestoration" in history) {
      try {
        history.scrollRestoration = "manual";
      } catch {
        /* no-op */
      }
    }

    const interactionEvents = [
      "wheel",
      "touchstart",
      "keydown",
      "pointerdown",
      "mousedown",
    ] as const;

    const onScroll = () => {
      if (window.scrollY > 0) {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
      }
    };

    let done = false;
    const disengage = () => {
      if (done) return;
      done = true;
      window.removeEventListener("scroll", onScroll);
      interactionEvents.forEach((e) => window.removeEventListener(e, disengage));
      clearTimeout(safety);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    interactionEvents.forEach((e) =>
      window.addEventListener(e, disengage, { passive: true })
    );

    // Safety valve: never keep the guard forever.
    const safety = window.setTimeout(disengage, 8000);

    return disengage;
  }, []);

  return null;
}
