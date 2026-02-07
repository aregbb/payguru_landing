<script setup lang="ts">
import { ref } from "vue";

import GreyLogo from "@/assets/img/icons/greylogo.svg"
import Container from "@/components/Container.vue";

const items = ref([
  {
    link: "",
    label: "English"
  },
  {
    link: "/docs#terms",
    label: "Terms of Service"
  },
  {
    link: "/docs#privacy",
    label: "Privacy Policy"
  },
])
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
          <router-link class="footer__text" v-for="(item) in items" :to="item.link">{{ item.label }}</router-link>
        </div>
        <div class="footer__text">2026 Integranova Dynamics, LLC.</div>
      </div>
    </Container>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  background: black;
  padding: 100px 0;
  align-items: center;

  @media (max-width: 640px) {
    padding: 40px 0;
  }

  &__content {
    display: flex;
    justify-content: space-between;
    align-items: end;
    color: #FFFFFF;

    @media (max-width: 640px) {
      flex-wrap: wrap;
      flex-direction: column;
      align-items: center;
      gap: 20px;
    }
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

    @media (max-width: 640px) {
      gap: 20px;
    }
  }
  &__text {
    font-size: 17px;
    letter-spacing: -0.68px;
    line-height: 24px;

    @media (max-width: 640px) {
      font-size: 16px;
    }
  }
}
</style>
