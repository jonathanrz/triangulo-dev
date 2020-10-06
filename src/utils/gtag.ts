export let GA_TRACKING_ID = "UA-179589724-1";

export function pageview(url: string) {
  window.gtag?.("config", GA_TRACKING_ID, {
    page_path: url,
  });
}
