<script setup lang="ts">
// import { ref } from "vue";
import { RouterLink } from "vue-router";
import GreyLogo from "@/assets/img/icons/greylogo.svg"
import Container from "@/components/Container.vue";

const items = [
  { to: null, href: "", label: "English" },
  { to: { path: "/docs", hash: "#terms" }, href: null, label: "Terms of Service" },
  { to: { path: "/docs", hash: "#privacy" }, href: null, label: "Privacy Policy" },
  { to: null, href: "https://t.me/AlexPG_BizDev", label: "Contact" },
];
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
              :key="item.label"
              :is="item.to ? RouterLink : 'a'"
              class="footer__text"
              v-bind="item.to ? { to: item.to } : { href: item.href, target: '_blank', rel: 'noopener' }"
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

    @include down(sm) {
      gap: 16px;
    }
  }
  &__text {
    font-size: 17px;
    letter-spacing: -0.68px;
    line-height: 24px;

    @include down(sm) {
      font-size: 16px;
    }
  }
}
</style>
