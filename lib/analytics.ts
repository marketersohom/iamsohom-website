// Lightweight GA4 event helper.
// gtag.js is loaded in app/layout.tsx via next/script with strategy "afterInteractive",
// so by the time a user can click anything, window.gtag is available.

type GtagFn = (...args: unknown[]) => void;

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  const gtag = (window as unknown as { gtag?: GtagFn }).gtag;
  if (typeof gtag !== "function") return;
  gtag("event", name, params);
}
