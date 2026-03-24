<script setup lang="ts">
import { useI18n } from "vue-i18n";

import { trackLinkClick } from "@/lib/analytics";

const { t } = useI18n();

const bannerUrl = "https://yerevan.affiliateconf.com/?ysclid=mmf2mnoqa8550991250";

const onBannerClick = () => {
  trackLinkClick({
    link_id: "banner_sigma_event",
    link_text: t("banner.linkText"),
    link_url: bannerUrl,
    link_location: "banner",
  });
};
</script>

<template>
  <a :href="bannerUrl" class="banner" @click="onBannerClick">
    {{ t("banner.text") }}
    <span style="margin-left: 5px; text-decoration: underline">
      {{ t("banner.linkText") }}
    </span>
  </a>
</template>

<style scoped lang="scss">
.banner {
  transition: opacity .3s;
  animation: announcement-gradient 12s infinite;
  line-height: 1.2;
  padding: 13px 16px;
  text-align: center;
  min-height: 46px;
  display: block;
  width: 100%;
  font-weight: bold;
  background-image: linear-gradient(270deg, #01b9f5, #4768fb 26.44%, #363ff9 51.44%, #4768fb 74.52%, #01b9f5);
  background-size: 400% 400%;
  color: white;
}

@keyframes announcement-gradient {
  0% {
    background-position: 0;
  }

  50% {
    background-position: 100%;
  }

  100% {
    background-position: 0;
  }
}
</style>
