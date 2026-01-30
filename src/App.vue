<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useRoute } from "vue-router"

import BaseLayout from "@/layouts/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const route = useRoute();

const layouts = {
  default: BaseLayout,
  empty: EmptyLayout,
} as const;

const layoutComponent = computed(() => {
  const key = (route.meta.layout as keyof typeof layouts) || "default";
  return layouts[key] ?? layouts.default;
});

onBeforeMount(() => {

})

</script>

<template>
  <component :is="layoutComponent">
    <router-view />
  </component>
</template>

<style scoped>
</style>
