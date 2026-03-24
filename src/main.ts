import { createApp, nextTick, watch } from "vue";

import "./style.scss";
import "@/assets/css/tailwind.css";
import "@/assets/fonts/fonts.css";
import App from "./App.vue";

import { getInitialLocale, i18n, setLocale } from "@/i18n";
import { hasAnalyticsId, initAnalytics, trackPageView } from "@/lib/analytics";
import { isRouteLoading, router } from "@/router";

const setTitle = () => {
  const route = router.currentRoute.value;
  const titleKey = route.meta?.title as string | undefined;
  const appName = i18n.global.t("common.brandName");

  document.title = titleKey ? `${appName} | ${i18n.global.t(titleKey)}` : appName;
};

setLocale(getInitialLocale());
setTitle();
initAnalytics();

router.afterEach(() => {
  setTitle();

  if (!hasAnalyticsId()) {
    return;
  }

  const pagePath = `${window.location.pathname}${window.location.search}${window.location.hash}`;
  trackPageView(pagePath, document.title);
});

watch(
  () => i18n.global.locale.value,
  () => setTitle(),
);

createApp(App).use(router).use(i18n).mount("#app");

router.isReady().then(async () => {
  await nextTick();
  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      isRouteLoading.value = false;
    });
  });
});
