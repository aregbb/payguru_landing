<script setup lang="ts">
import { onMounted, onUnmounted } from "vue";
import { XMarkIcon } from "@heroicons/vue/24/solid";

defineProps<{
  modelValue: boolean;
  closeOnBackdrop?: boolean;
  title?: string,
}>();

const emit = defineEmits<{
  (e: "update:modelValue", value: boolean): void;
}>();

const close = () => {
  emit("update:modelValue", false);
};

const onKeydown = (e: KeyboardEvent) => {
  if (e.key === "Escape") close();
};

onMounted(() => {
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("keydown", onKeydown);
});
</script>

<template>
  <Teleport to="body">
    <Transition name="modal-fade">
      <div
          v-if="modelValue"
          class="modal-backdrop"
          @click="closeOnBackdrop !== false && close()"
      >
        <div class="modal-content" @click.stop>
          <button class="modal-close" @click="close" aria-label="Close">
            <XMarkIcon  class="modal-close-icon" />
          </button>
          <slot />
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped lang="scss">
.modal-backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;

  background: rgba(0, 0, 0, 0.25);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);

  display: flex;
  align-items: center;
  justify-content: center;
}

.modal-content {
  position: relative;
  background: #fff;
  border-radius: 16px;
  padding: 40px;
  max-width: 642px;
  width: 100%;
  box-shadow:
      0 10px 30px rgba(0, 0, 0, 0.15);

  @include down(sm) {
    padding: 24px;
    width: 100%;
    max-width: 100%;
  }
}

.modal-close {
  border: none;
  background: transparent;
  position: absolute;
  right: 20px;
  top: 20px;
  padding: 0;

  &-icon {
    width: 24px;
  }
}

.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.2s ease;
}

.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
