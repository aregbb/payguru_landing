<script setup lang="ts">
import { computed } from "vue";

type Size = "sm" | "md" | "lg" | "xl";

const props = withDefaults(defineProps<{
  as?: string;
  size?: Size;
  noXPadding?: boolean;
  noYPadding?: boolean;
}>(), {
  as: "div",
  size: "xl",
  noXPadding: false,
  noYPadding: true,
});

const sizeClass = computed(() => {
  switch (props.size) {
    case "sm": return "container--sm";
    case "md": return "container--md";
    case "lg": return "container--lg";
    case "xl": return "container--desk";
    default: return "container--desk";
  }
});

// const paddingClass = computed(() => {
//   const x = props.noXPadding ? "" : "px-4 sm:px-6 lg:px-8";
//   const y = props.noYPadding ? "" : "py-10 sm:py-14";
//   return [x, y].filter(Boolean).join(" ");
// });
</script>

<template>
  <component
      :is="as"
      class="container mx-auto w-full"
      :class="[sizeClass]"
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.container {
  &--desk {
    width: 1176px;
    margin: 0 auto;
    height: 100%;
  }
}
</style>

