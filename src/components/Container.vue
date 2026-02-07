<script setup lang="ts">
withDefaults(defineProps<{
  as?: string;
  noXPadding?: boolean;
  noYPadding?: boolean;
}>(), {
  as: "div",
  size: "xl",
  noXPadding: false,
  noYPadding: true,
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
  >
    <slot />
  </component>
</template>

<style scoped lang="scss">
.container {
  height: 100%;
  width: 100%;
  margin: 0 auto;
  padding-inline: 16px;

  @media (min-width: 640px) {
    max-width: 640px;
    padding-inline: 24px;
  }

  @media (min-width: 768px) {
    max-width: 768px;
  }

  @media (min-width: 1024px) {
    max-width: 1024px;
  }

  @media (min-width: 1280px) {
    max-width: 1176px;
    padding: 0;
  }
}
</style>

