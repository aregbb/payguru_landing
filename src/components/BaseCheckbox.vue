<script setup lang="ts">
import { computed, useId } from "vue";

const props = withDefaults(
    defineProps<{
      modelValue: boolean;
      label?: string;
      required?: boolean;

      id?: string;
      name?: string;
      disabled?: boolean;
      error?: string;
    }>(),
    {
      required: false,
      disabled: false,
    }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
  (e: "change", value: boolean): void;
}>();

const uid = useId();
const inputId = computed(() => props.id ?? `checkbox-${uid}`);

const value = computed({
  get: () => props.modelValue,
  set: (v: boolean) => {
    emit("update:modelValue", v);
    emit("change", v);
  },
});
</script>

<template>
  <div class="base-checkbox">
    <label class="base-checkbox__label" :for="inputId">
      <input
          :id="inputId"
          v-model="value"
          class="base-checkbox__input"
          type="checkbox"
          :name="name"
          :required="required"
          :disabled="disabled"
          :aria-invalid="!!error"
      />

      <span class="base-checkbox__box" aria-hidden="true" />

      <span class="base-checkbox__text">
        <slot>
          {{ label }}
        </slot>
      </span>

      <span v-if="required" class="base-checkbox__required" aria-hidden="true">*</span>
    </label>

    <p v-if="error" class="base-checkbox__error">{{ error }}</p>
  </div>
</template>

<style scoped>
.base-checkbox {
  display: grid;
  gap: 8px;
}

.base-checkbox__label {
  display: grid;
  grid-template-columns: 18px 1fr;
  gap: 10px;
  align-items: start;

  cursor: pointer;
  user-select: none;
}

.base-checkbox__input {
  position: absolute;
  opacity: 0;
  pointer-events: none;
}

.base-checkbox__box {
  width: 18px;
  height: 18px;
  border-radius: 5px;

  border: 1px solid #CBD5E1;
  background: #fff;

  margin-top: 2px;
  transition: background 0.15s ease, border-color 0.15s ease, box-shadow 0.15s ease;
}
.base-checkbox__box::after {
  content: "";
  display: block;
  width: 9px;
  height: 5px;

  border-left: 2px solid #fff;
  border-bottom: 2px solid #fff;
  transform: rotate(-45deg);

  position: relative;
  left: 3px;
  top: 5px;

  opacity: 0;
  transition: opacity 0.12s ease;
}

.base-checkbox__text {
  font-size: 14px;
  color: #555B64;
}

/* Ссылки внутри текста (как на скрине) */
.base-checkbox__text :deep(a) {
  color: #2f5bff;
  text-decoration: none;
}

.base-checkbox__text :deep(a:hover) {
  text-decoration: underline;
}

/* checked */
.base-checkbox__input:checked + .base-checkbox__box {
  background: #2f5bff;
  border-color: #2f5bff;
}

.base-checkbox__input:checked + .base-checkbox__box::after {
  opacity: 1;
}

/* focus */
.base-checkbox__input:focus-visible + .base-checkbox__box {
  box-shadow: 0 0 0 4px rgba(47, 91, 255, 0.2);
}

/* disabled */
.base-checkbox__input:disabled + .base-checkbox__box {
  opacity: 0.6;
}

.base-checkbox__input:disabled ~ .base-checkbox__text {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-checkbox__required {
  display: none; /* обычно звёздочку для чекбокса не ставят рядом */
}

.base-checkbox__error {
  margin: 0;
  font-size: 12px;
  color: #ff2b2b;
}
</style>
