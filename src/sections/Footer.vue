<script setup lang="ts">
import { ref } from "vue";

import GreyLogo from "@/assets/img/icons/greylogo.svg"
import Container from "@/components/Container.vue";

const items = ref([
  {
    link: "#",
    label: "О нас"
  },
  {
    link: "#",
    label: "API Документация"
  },
  {
    link: "#",
    label: "Условия"
  },
  {
    link: "#",
    label: "Контакты"
  },
])
</script>

<template>
  <div class="footer">
    <Container>
      <div class="footer__content">
        <div class="footer__logo">
          <img :src="GreyLogo" />
          <span>PayGuru</span>
        </div>
        <div class="footer__nav">
          <a v-for="(item) in items" :href="item.link">{{ item.label }}</a>
        </div>
        <div class="footer__text">2026 Integranova Dynamics, LLC.</div>
      </div>
    </Container>
  </div>
</template>

<style scoped lang="scss">
.footer {
  background: black;
  padding: 100px 0;
  align-items: center;

  &__content {
    display: flex;
    justify-content: space-between;
    color: #FFFFFF;
  }
  &__logo {
    display: flex;
    font-size: 23px;
    align-items: center;
    gap: 9px;
  }
  &__nav {
    display: flex;
    gap: 60px;
    align-items: center;
  }
}
</style>
