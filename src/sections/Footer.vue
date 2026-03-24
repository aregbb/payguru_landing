<script setup lang="ts">
import { computed } from "vue";
import { RouterLink } from "vue-router";
import { useI18n } from "vue-i18n";

import GreyLogo from "@/assets/img/icons/greylogo.svg";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import Container from "@/components/Container.vue";
import { trackLinkClick } from "@/lib/analytics";

const { t } = useI18n();

const items = computed(() => [
  {
    id: "footer_terms",
    area: "terms",
    to: { path: "/docs", hash: "#terms" },
    href: null,
    label: t("footer.terms"),
  },
  {
    id: "footer_privacy",
    area: "privacy",
    to: { path: "/docs", hash: "#privacy" },
    href: null,
    label: t("footer.privacy"),
  },
  {
    id: "footer_contact",
    area: "contact",
    to: null,
    href: "https://t.me/AlexPG_BizDev",
    label: t("footer.contact"),
  },
]);

const onFooterLinkClick = (item: {
  id: string;
  label: string;
  href: string | null;
  to: { path: string; hash?: string } | null;
}) => {
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
          <img :src="GreyLogo" alt="" />
          <span>{{ t("common.brandName") }}</span>
        </div>
        <LocaleSwitcher class="footer__locale" theme="dark" direction="up" />
        <component
          v-for="item in items"
          :key="item.id"
          :is="item.to ? RouterLink : 'a'"
          class="footer__text footer__item"
          :class="`footer__item--${item.area}`"
          v-bind="item.to ? { to: item.to } : { href: item.href, target: '_blank', rel: 'noopener' }"
          @click="onFooterLinkClick(item)"
        >
          {{ item.label }}
        </component>
        <div class="footer__text footer__company">{{ t("footer.company") }}</div>
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
    color: #ffffff;

    @include up(xl) {
      display: flex;
      align-items: center;
      gap: 28px;
      flex-wrap: nowrap;
    }

    @include between(md, xl) {
      display: grid;
      grid-template-columns: repeat(2, max-content);
      grid-template-areas:
        "logo company"
        "locale terms"
        "privacy contact";
      justify-content: center;
      align-items: center;
      column-gap: 72px;
      row-gap: 28px;
    }

    @include down(md) {
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      gap: 30px;
    }

    @include down(sm) {
      gap: 24px;
    }
  }

  &__logo {
    grid-area: logo;
    display: flex;
    font-size: 23px;
    align-items: center;
    gap: 9px;

    @include up(xl) {
      flex: 0 0 auto;
    }

    @include between(md, xl) {
      justify-self: start;
    }

    @include down(md) {
      justify-content: center;
      justify-self: center;
      font-size: 20px;
    }
  }

  &__locale {
    grid-area: locale;

    @include up(xl) {
      flex: 0 0 auto;
    }

    @include between(md, xl) {
      justify-self: start;
    }

    @include down(md) {
      justify-self: center;
    }
  }

  &__text {
    font-size: 16px;
    letter-spacing: -0.48px;
    line-height: 24px;
    white-space: nowrap;

    @include down(sm) {
      font-size: 15px;
      line-height: 22px;
      white-space: normal;
    }
  }

  &__item {
    @include up(xl) {
      flex: 0 0 auto;
    }

    @include between(md, xl) {
      justify-self: start;
      text-align: left;
    }
  }

  &__item--terms {
    grid-area: terms;
  }

  &__item--privacy {
    grid-area: privacy;
  }

  &__item--contact {
    grid-area: contact;
  }

  &__company {
    grid-area: company;

    @include up(xl) {
      margin-left: auto;
      text-align: right;
    }

    @include between(md, xl) {
      justify-self: start;
      text-align: left;
    }

    @include down(md) {
      justify-self: center;
      text-align: center;
    }
  }
}
</style>
