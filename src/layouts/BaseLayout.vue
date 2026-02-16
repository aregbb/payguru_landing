<script setup lang="ts">
import Footer from "@/sections/Footer.vue";
import Banner from "@/sections/Banner.vue";
// import Header from "@/components/Header.vue";

import PageLoader from "@/components/PageLoader.vue";

import { isRouteLoading } from "@/router.ts";
</script>

<template>
  <Banner />
  <main class="layout-base">
      <div v-show="!isRouteLoading">
        <slot />
      </div>
      <PageLoader v-if="isRouteLoading" />
  </main>
  <Footer />
</template>

<style scoped lang="scss">

</style>
