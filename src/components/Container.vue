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
  @include container();
}
</style>

