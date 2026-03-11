<script setup lang="ts">
import { RouterLink } from "vue-router";
import GreyLogo from "@/assets/img/icons/greylogo.svg";
import Container from "@/components/Container.vue";
import { trackLinkClick } from "@/lib/analytics";

const items = [
  { to: null, href: "", label: "English" },
  { id: "footer_terms", to: { path: "/docs", hash: "#terms" }, href: null, label: "Terms of Service" },
  { id: "footer_privacy", to: { path: "/docs", hash: "#privacy" }, href: null, label: "Privacy Policy" },
  { id: "footer_contact", to: null, href: "https://t.me/AlexPG_BizDev", label: "Contact Us" },
];

const onFooterLinkClick = (item: { id: string; label: string; href: string | null; to: { path: string; hash?: string } | null }) => {
  const linkUrl = item.to ? `${item.to.path}${item.to.hash ?? ""}` : (item.href ?? "");

  trackLinkClick({
    link_id: item.id,
    link_text: item.label,
    link_url: linkUrl,
    link_location: "footer",
  });
};
</script>

<template>
  <footer class="footer">
    <Container>
      <div class="footer__content">
        <div class="footer__logo">
          <img :src="GreyLogo" />
          <span>PayGuru</span>
        </div>
        <div class="footer__nav">
          <component
            v-for="item in items"
            :key="item.id ?? item.label"
            :is="item.to ? RouterLink : 'a'"
            class="footer__text"
            v-bind="item.to ? { to: item.to } : { href: item.href, target: '_blank', rel: 'noopener' }"
            @click="item.id && onFooterLinkClick(item)"
          >
            {{ item.label }}
          </component>
        </div>
        <div class="footer__text">2026 Integranova Dynamics, LLC.</div>
      </div>
    </Container>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: black;
  align-items: center;
  padding: 60px 0;

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: end;
    color: #FFFFFF;

    @include down(lg) {
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }

    @include down(sm) {
      align-items: stretch;
      text-align: center;
      gap: 16px;
    }
  }
  &__logo {
    display: flex;
    font-size: 23px;
    align-items: center;
    gap: 9px;

    @include down(sm) {
      justify-content: center;
      font-size: 20px;
    }
  }
  &__nav {
    display: flex;
    gap: 60px;
    align-items: center;

    @include down(sm) {
      flex-direction: column;
      gap: 12px;
    }
  }
  &__text {
    font-size: 17px;
    letter-spacing: -0.68px;
    line-height: 24px;

    @include down(sm) {
      font-size: 15px;
      line-height: 22px;
    }
  }
}
</style>
