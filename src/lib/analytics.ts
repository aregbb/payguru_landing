declare global {
  interface Window {
    dataLayer: Array<IArguments | unknown[]>;
    gtag?: (...args: unknown[]) => void;
  }
}

type AnalyticsParams = Record<string, string | number | boolean | null | undefined>;

const measurementId = import.meta.env.VITE_GA_MEASUREMENT_ID?.trim();

let isInitialized = false;

function ensureDataLayer() {
  window.dataLayer = window.dataLayer || [];
}

function gtag() {
  ensureDataLayer();
  window.dataLayer.push(arguments);
}

export function initAnalytics() {
  if (typeof window === "undefined" || !measurementId || isInitialized) return;

  ensureDataLayer();

  window.gtag = window.gtag || gtag;

  const script = document.createElement("script");
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
  document.head.appendChild(script);

  window.gtag("js", new Date());
  window.gtag("config", measurementId, {
    send_page_view: false,
  });

  isInitialized = true;
}

export function trackEvent(eventName: string, params: AnalyticsParams = {}) {
  if (typeof window === "undefined" || typeof window.gtag !== "function" || !measurementId) return;
  window.gtag("event", eventName, params);
}

export function trackPageView(pagePath: string, pageTitle: string) {
  trackEvent("page_view", {
    page_path: pagePath,
    page_title: pageTitle,
    page_location: window.location.href,
  });
}

export function trackLinkClick(params: {
  link_id: string;
  link_text: string;
  link_url: string;
  link_location: string;
}) {
  trackEvent("link_click", params);
}

export function hasAnalyticsId() {
  return Boolean(measurementId);
}
