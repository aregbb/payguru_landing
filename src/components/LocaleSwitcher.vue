<script setup lang="ts">
import { computed, onMounted, onUnmounted, ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/24/solid";
import { useI18n } from "vue-i18n";

import FlagIcon from "@/components/FlagIcon.vue";
import { localeOptions, setLocale, type AppLocale } from "@/i18n";

withDefaults(defineProps<{
  theme?: "light" | "dark";
  direction?: "up" | "down";
}>(), {
  theme: "light",
  direction: "down",
});

const { locale, t } = useI18n();

const isOpen = ref(false);
const rootEl = ref<HTMLElement | null>(null);

const currentOption = computed(() => (
  localeOptions.find((option) => option.value === locale.value) ?? localeOptions[0]
));

const onDocumentClick = (event: MouseEvent) => {
  if (!rootEl.value?.contains(event.target as Node)) {
    isOpen.value = false;
  }
};

const onKeydown = (event: KeyboardEvent) => {
  if (event.key === "Escape") {
    isOpen.value = false;
  }
};

const toggle = () => {
  isOpen.value = !isOpen.value;
};

const onSelect = (value: AppLocale) => {
  setLocale(value);
  isOpen.value = false;
};

onMounted(() => {
  document.addEventListener("click", onDocumentClick);
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  document.removeEventListener("click", onDocumentClick);
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <div
    ref="rootEl"
    class="locale-switcher"
    :class="[
      `locale-switcher--${theme}`,
      `locale-switcher--${direction}`,
      { 'locale-switcher--open': isOpen },
    ]"
  >
    <button
      type="button"
      class="locale-switcher__trigger"
      :aria-label="t('common.language')"
      :aria-expanded="isOpen"
      @click="toggle"
    >
      <span class="locale-switcher__value">
        <FlagIcon class="locale-switcher__flag" :country="currentOption.flag" aria-hidden="true" />
        <span>{{ currentOption.label }}</span>
      </span>
      <ChevronDownIcon class="locale-switcher__chevron" />
    </button>

    <div v-if="isOpen" class="locale-switcher__menu" role="listbox">
      <button
        v-for="option in localeOptions"
        :key="option.value"
        type="button"
        class="locale-switcher__option"
        :class="{ 'locale-switcher__option--active': option.value === currentOption.value }"
        @click="onSelect(option.value)"
      >
        <span class="locale-switcher__value">
          <FlagIcon class="locale-switcher__flag" :country="option.flag" aria-hidden="true" />
          <span>{{ option.label }}</span>
        </span>
      </button>
    </div>
  </div>
</template>

<style scoped lang="scss">
.locale-switcher {
  position: relative;
  display: inline-flex;

  &__trigger {
    height: 40px;
    min-width: 152px;
    border-radius: 10px;
    padding: 0 12px;
    border: 1px solid transparent;
    font-size: 15px;
    line-height: 1;
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 8px;
    cursor: pointer;
    transition: border-color .2s ease, background-color .2s ease, transform .2s ease;
  }

  &__chevron {
    width: 16px;
    transition: transform .2s ease;
  }

  &__menu {
    position: absolute;
    z-index: 20;
    min-width: 100%;
    width: max-content;
    display: grid;
    gap: 4px;
    padding: 8px;
    border-radius: 14px;
    box-shadow: 0 18px 40px rgba(15, 23, 42, 0.24);
    backdrop-filter: blur(16px);
  }

  &__value {
    display: inline-flex;
    align-items: center;
    gap: 10px;
    min-width: 0;
  }

  &__flag {
    flex: 0 0 auto;
  }

  &__option {
    height: 38px;
    width: 100%;
    border: none;
    border-radius: 10px;
    background: transparent;
    text-align: left;
    padding: 0 12px;
    font-size: 15px;
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: background-color .2s ease, color .2s ease;
  }

  &--open &__chevron {
    transform: rotate(180deg);
  }

  &--down &__menu {
    top: calc(100% + 8px);
    left: 0;
  }

  &--up &__menu {
    bottom: calc(100% + 8px);
    left: 0;
  }

  &--light &__trigger {
    background: #ffffff;
    border-color: #cbd5e1;
    color: #1e2632;
  }

  &--light &__menu {
    background: rgba(255, 255, 255, 0.96);
    border: 1px solid #dbe4f0;
  }

  &--light &__option {
    color: #1e2632;
  }

  &--light &__option:hover,
  &--light &__option--active {
    background: #eef4ff;
    color: #0f52ba;
  }

  &--dark &__trigger {
    background: rgba(255, 255, 255, 0.06);
    border-color: rgba(255, 255, 255, 0.18);
    color: #ffffff;
  }

  &--dark &__menu {
    background: rgba(10, 14, 24, 0.96);
    border: 1px solid rgba(255, 255, 255, 0.1);
  }

  &--dark &__option {
    color: #ffffff;
  }

  &--dark &__option:hover,
  &--dark &__option--active {
    background: rgba(56, 136, 194, 0.18);
    color: #ffffff;
  }
}
</style>
