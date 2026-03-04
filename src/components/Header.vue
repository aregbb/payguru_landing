<script setup lang="ts">
import { ref } from "vue";
import Container from "@/components/Container.vue";
import Logo from "@/assets/img/Logo.svg";
import Button from "@/components/Button.vue";
import { trackLinkClick } from "@/lib/analytics";

const items = ref([
  {
    id: "header_about",
    label: "О нас",
    link: "#",
  },
  {
    id: "header_api_docs",
    label: "API Документация",
    link: "#",
  },
  {
    id: "header_terms",
    label: "Условия",
    link: "#",
  },
  {
    id: "header_contacts",
    label: "Контакты",
    link: "#",
  },
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
        <img :src="Logo" alt="logo" />
        <span class="header__logo-text">PayGuru</span>
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
      <Button class="header__auth-btn">Sign in</Button>
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
