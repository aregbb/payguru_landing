<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";

import BaseCheckbox from "@/components/BaseCheckbox.vue";
import BaseInput from "@/components/BaseInput.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";

const contactForm = ref({
  name: "",
  email: "",
  comment: "",
  website: "",
});

const isLoading = ref(false);
const submitStatus = ref<"idle" | "success" | "error">("idle");
const emit = defineEmits(["close"]);
const model = ref(true);
const isFormApproved = ref(false);
const wasSubmitted = ref(false);

const { t } = useI18n();

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/;

const validateName = (name: string): string => {
  const value = name.trim();

  if (!value) return t("contactModal.validation.nameRequired");
  if (value.length < 2) return t("contactModal.validation.nameTooShort");
  if (value.length > 100) return t("contactModal.validation.nameTooLong");

  return "";
};

const validateContact = (contact: string): string => {
  const value = contact.trim();

  if (!value) return t("contactModal.validation.contactRequired");
  if (emailRegex.test(value) || telegramRegex.test(value)) return "";

  return t("contactModal.validation.contactInvalid");
};

const validateComment = (comment: string): string => {
  const value = comment.trim();

  if (value.length > 2000) return t("contactModal.validation.commentTooLong");

  return "";
};

const nameError = computed(() => (wasSubmitted.value ? validateName(contactForm.value.name) : ""));
const contactError = computed(() => (wasSubmitted.value ? validateContact(contactForm.value.email) : ""));
const commentError = computed(() => (wasSubmitted.value ? validateComment(contactForm.value.comment) : ""));
const approveError = computed(() => (
  wasSubmitted.value && !isFormApproved.value
    ? t("contactModal.validation.consentRequired")
    : ""
));

const isFormValid = computed(() => {
  return !validateName(contactForm.value.name) &&
    !validateContact(contactForm.value.email) &&
    !validateComment(contactForm.value.comment) &&
    isFormApproved.value;
});

const resetForm = () => {
  contactForm.value = { name: "", email: "", comment: "", website: "" };
  isFormApproved.value = false;
  wasSubmitted.value = false;
};

const onChangeModelVal = (value: boolean) => {
  if (!value) {
    emit("close");
  }
};

const onSubmit = async () => {
  wasSubmitted.value = true;
  submitStatus.value = "idle";

  if (!isFormValid.value) {
    return;
  }

  isLoading.value = true;

  try {
    const body = new URLSearchParams({
      name: contactForm.value.name.trim(),
      contact: contactForm.value.email.trim(),
      comment: contactForm.value.comment.trim(),
      website: contactForm.value.website,
    });

    const response = await fetch("/api/send.php", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      },
      body: body.toString(),
    });

    const result = await response.json().catch(() => ({ ok: false }));

    if (!response.ok || !result?.ok) {
      throw new Error("send_failed");
    }

    submitStatus.value = "success";
    resetForm();
  } catch (error) {
    console.error("Error sending form", error);
    submitStatus.value = "error";
  } finally {
    isLoading.value = false;
  }
};
</script>

<template>
  <Modal class="contact-us-modal" v-model="model" @update:modelValue="onChangeModelVal">
    <h3>{{ t("contactModal.title") }}</h3>
    <form class="contact-us-modal__content" @submit.prevent="onSubmit">
      <BaseInput
        v-model="contactForm.name"
        :label="t('contactModal.fields.name')"
        required
        :error="nameError"
      />
      <BaseInput
        v-model="contactForm.email"
        :label="t('contactModal.fields.contact')"
        :placeholder="t('contactModal.fields.contactPlaceholder')"
        required
        :error="contactError"
      />
      <input
        v-model="contactForm.website"
        type="text"
        tabindex="-1"
        autocomplete="off"
        class="hp"
      />
      <div class="ui-textarea-wrap">
        <div class="ui-label">{{ t("contactModal.fields.comment") }}</div>
        <textarea
          v-model="contactForm.comment"
          class="ul-textarea"
          rows="3"
          :placeholder="t('contactModal.fields.commentPlaceholder')"
        />
        <p v-if="commentError" class="error-text">{{ commentError }}</p>
      </div>
      <BaseCheckbox class="contact-us-modal__check" v-model="isFormApproved">
        {{ t("contactModal.consent.lead") }}
        <br>
        {{ t("contactModal.consent.join") }}
        <router-link :to="{ path: '/docs', hash: '#privacy' }">
          {{ t("contactModal.consent.link") }}
        </router-link>
      </BaseCheckbox>
      <div v-if="approveError" class="error-text">{{ approveError }}</div>
      <p v-if="submitStatus === 'success'" class="success-text">{{ t("contactModal.status.success") }}</p>
      <p v-if="submitStatus === 'error'" class="error-text">{{ t("contactModal.status.error") }}</p>
      <Button class="contact-us-modal__action" :disabled="isLoading">
        <div class="flex items-end">
          <span>{{ t("actions.send") }}</span>
        </div>
      </Button>
    </form>
  </Modal>
</template>

<style scoped lang="scss">
.success-text {
  margin-top: 8px;
  font-size: 12px;
  color: #16a34a;
}

.error-text {
  margin-top: 8px;
  font-size: 12px;
  color: #ef4444;
}

.ui-textarea-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.hp {
  position: absolute;
  left: -9999px;
  opacity: 0;
  pointer-events: none;
}

.ui-label {
  font-size: 14px;
  color: #555B64;
}

.ul-textarea {
  font-family: "NT Somic", system-ui, sans-serif;
  width: 100%;
  padding: 12px 16px;
  resize: none;
  border-radius: 8px;
  border: 1px solid #CBD5E1;
  background: #ffffff;
  font-size: 14px;
  color: #555B64;
  outline: none;
}

.ul-textarea:focus {
  border-color: #aeb8c7;
  box-shadow: 0 0 0 4px rgba(174, 184, 199, 0.25);
}

.ul-textarea::placeholder {
  font-family: "NT Somic", system-ui, sans-serif;
  color: rgba(31, 36, 48, 0.35);
  font-weight: 500;
}

.contact-us-modal {
  &__content {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }

  &__check {
    margin-top: 16px;
  }

  &__action {
    margin-top: 10px;
    align-self: flex-start;
  }
}
</style>
