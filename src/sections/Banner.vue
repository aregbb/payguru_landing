<script setup lang="ts">
import { trackLinkClick } from "@/lib/analytics";

const onBannerClick = () => {
  trackLinkClick({
    link_id: "banner_sigma_event",
    link_text: "See more",
    link_url: "https://yerevan.affiliateconf.com/?ysclid=mmf2mnoqa8550991250",
    link_location: "banner",
  });
};
</script>

<template>
  <a href="https://yerevan.affiliateconf.com/?ysclid=mmf2mnoqa8550991250" class="banner" @click="onBannerClick">
    Schedule a demo and see what we're building. Meet us at MAC Affiliate Conference in Armenia, May 26-27. <span style="margin-left: 5px; text-decoration: underline">See more.</span>
  </a>
</template>

<style scoped lang="scss">
.banner {
  transition: opacity .3s;
  animation: announcement-gradient 12s infinite;
  line-height: 1;
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
