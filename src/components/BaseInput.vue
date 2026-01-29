<script setup lang="ts">
import { computed, useId } from "vue";

type InputType = "text" | "email" | "tel" | "password" | "number";

const props = withDefaults(
    defineProps<{
      modelValue: string | number | null | undefined;
      label?: string;
      required?: boolean;

      id?: string;
      name?: string;
      placeholder?: string;
      type?: InputType;
      disabled?: boolean;
      readonly?: boolean;
      autocomplete?: string;

      error?: string;
    }>(),
    {
      type: "text",
      required: false,
      disabled: false,
      readonly: false,
    }
);

const emit = defineEmits<{
  (e: "update:modelValue", value: string): void;
  (e: "blur", ev: FocusEvent): void;
  (e: "focus", ev: FocusEvent): void;
}>();

const uid = useId();
const inputId = computed(() => props.id ?? `input-${uid}`);

const value = computed({
  get: () => (props.modelValue ?? "") as string,
  set: (v: string) => emit("update:modelValue", v),
});
</script>

<template>
  <div class="base-input">
    <label v-if="label" class="base-input__label" :for="inputId">
      {{ label }}
      <span v-if="required" class="base-input__required">*</span>
    </label>

    <input
        :id="inputId"
        v-model="value"
        class="base-input__control"
        :class="{ 'base-input__control--error': !!error }"
        :name="name"
        :type="type"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :autocomplete="autocomplete"
        :aria-invalid="!!error"
        :aria-required="required || undefined"
        @blur="(e) => emit('blur', e)"
        @focus="(e) => emit('focus', e)"
    />

    <p v-if="error" class="base-input__error">{{ error }}</p>
  </div>
</template>

<style scoped>
.base-input {
  display: grid;
  gap: 6px;
}

.base-input__label {
  font-size: 14px;
  color: #555B64;
}

.base-input__required {
  color: #FF0000;
}

/* Инпут */
.base-input__control {
  width: 100%;
  padding: 12px 16px;

  border-radius: 8px;
  border: 1px solid #CBD5E1;
  background: #ffffff;

  font-size: 14px;
  color: #555B64;

  outline: none;
  transition: border-color 0.15s ease, box-shadow 0.15s ease;
}

.base-input__control::placeholder {
  color: rgba(31, 36, 48, 0.35);
  font-weight: 500;
}

.base-input__control:focus {
  border-color: #aeb8c7;
  box-shadow: 0 0 0 4px rgba(174, 184, 199, 0.25);
}

.base-input__control:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.base-input__control--error {
  border-color: #ff2b2b;
  box-shadow: 0 0 0 4px rgba(255, 43, 43, 0.15);
}

.base-input__error {
  margin: 0;
  font-size: 14px;
  color: #ff2b2b;
}
</style>
