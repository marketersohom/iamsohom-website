// Lightweight event helper.
// Google Tag Manager is loaded in app/layout.tsx and exposes window.dataLayer,
// not window.gtag. Events pushed here are picked up by GTM triggers
// (Custom Event trigger, event name = the name passed to trackEvent).

type DataLayerWindow = Window & { dataLayer?: Record<string, unknown>[] };

export function trackEvent(
  name: string,
  params: Record<string, unknown> = {}
): void {
  if (typeof window === "undefined") return;
  const w = window as DataLayerWindow;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event: name, ...params });
}
