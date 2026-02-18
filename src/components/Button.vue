<script setup lang="ts">
// import { computed, useAttrs } from "vue";

withDefaults(defineProps<{
  disabled?: boolean;
  variant?: 'primary' | 'secondary' | 'blue';
}>(), {
  disabled: false,
  variant: 'primary',
});
</script>

<template>
  <button class="ui-btn" :class="`ui-btn--${variant}`" :disabled="disabled">
    <slot />
  </button>
</template>

<style lang="scss" scoped>
.ui-btn {
  font-family: "NT Somic", system-ui, sans-serif;
  font-size: 16px;
  height: 40px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  justify-content: center;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  line-height: 1;
  font-weight: 500;
  &--primary {
    background: linear-gradient(104.74deg, #1D65FF 0%, #A200FF 98.96%);
    color: white;
  }
  &--blue {
    background: #363FF9;
    color: white;
  }
  &--secondary {
    color: #1E2632;
    background: white;
  }
}
</style>
