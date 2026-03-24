<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import Logo from "@/assets/img/Logo.svg";
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import { trackLinkClick } from "@/lib/analytics";

const { t } = useI18n();

const items = computed(() => [
  { id: "header_about", label: t("nav.about"), link: "#" },
  { id: "header_api_docs", label: t("nav.api"), link: "#" },
  { id: "header_terms", label: t("nav.terms"), link: "#" },
  { id: "header_contacts", label: t("nav.contacts"), link: "#" },
]);

const onHeaderLinkClick = (item: { id: string; label: string; link: string }) => {
  trackLinkClick({
    link_id: item.id,
    link_text: item.label,
    link_url: item.link,
    link_location: "header",
  });
};
</script>

<template>
  <Container>
    <header class="header">
      <div class="header__logo">
        <img :src="Logo" alt="" />
        <span class="header__logo-text">{{ t("common.brandName") }}</span>
      </div>
      <div class="header__nav">
        <a
          v-for="item in items"
          :key="item.id"
          class="header__nav-item"
          :href="item.link"
          @click="onHeaderLinkClick(item)"
        >
          {{ item.label }}
        </a>
      </div>
      <Button class="header__auth-btn">{{ t("actions.signIn") }}</Button>
    </header>
  </Container>
</template>

<style lang="scss" scoped>
.header {
  display: flex;
  height: 80px;
  align-items: center;

  &__logo {
    display: flex;
    align-items: center;
    gap: 9px;

    &-text {
      font-weight: bold;
      font-size: 23px;
    }
  }

  &__nav {
    display: flex;
    align-items: center;
    gap: 60px;
    margin-left: 80px;
  }

  &__nav-item {
    font-size: 16px;
  }

  &__auth-btn {
    margin-left: auto;
  }
}
</style>
