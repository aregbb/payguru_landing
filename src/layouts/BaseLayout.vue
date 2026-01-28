<script setup lang="ts">
import Footer from "@/sections/Footer.vue";
import Banner from "@/sections/Banner.vue";
import Header from "@/components/Header.vue";
</script>

<template>
  <Banner />
  <Header />
  <main>
    <slot />
  </main>
  <Footer />
</template>

<style scoped lang="scss">

</style>
