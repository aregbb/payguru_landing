<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router"

import BaseLayout from "@/layouts/BaseLayout.vue";
import EmptyLayout from "@/layouts/EmptyLayout.vue";

const route = useRoute();

const layout = computed(() => {
  const key = (route.meta.layout as keyof typeof layouts) || "default";
  return layouts[key];
});

const layouts = {
  default: BaseLayout,
  empty: EmptyLayout,
} as const;

</script>

<template>
  <component :is="layout">
    <RouterView v-slot="{ Component }">
      <component :is="Component" />
    </RouterView>
  </component>
</template>

<style scoped>
</style>
