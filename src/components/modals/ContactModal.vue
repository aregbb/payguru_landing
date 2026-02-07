<script setup lang="ts">
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import BaseInput from "@/components/BaseInput.vue";
import {ref, computed} from "vue";

const contactForm = ref({
  name: "",
  email: "",
  comment: "",
  website: "",
})

const isLoading = ref(false);

const emit = defineEmits(['close']);

const model = ref(true)

const isFormApproved = ref(false);

const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // email

const telegramRegex = /^@[a-zA-Z0-9_]{5,32}$/; // Telegram username

const wasSubmitted = ref(false);

const validateName = (name: string): string => {
  const v = name.trim();
  if (!v) return "Введите имя";
  if (v.length < 2) return "Имя должно быть минимум 2 символа";
  return "";
};

const nameError = computed(() => (wasSubmitted.value ? validateName(contactForm.value.name) : ""));
const contactError = computed(() => (wasSubmitted.value ? validateContact(contactForm.value.email) : ""));
const approveError = computed(() => (wasSubmitted.value && !isFormApproved.value ? "Нужно согласие на обработку данных" : ""));

const validateContact = (contact: string): string => {
  const v = contact.trim();
  if (!v) return "Введите контакт (email или Telegram)";
  if (emailRegex.test(v)) return "";
  if (telegramRegex.test(v)) return "";
  return "Введите корректный email или Telegram (@username)";
};

const isFormValid = computed(() => {
  return !validateName(contactForm.value.name) &&
      !validateContact(contactForm.value.email) &&
      isFormApproved.value;
});

const onChangeModelVal = (val: boolean) => {
  if (!val) emit("close");
}

const onSubmit = async () => {
  wasSubmitted.value = true;
  if (!isFormValid.value) return;

  isLoading.value = true;

  try {
    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: contactForm.value.name,
        contact: contactForm.value.email,
        comment: contactForm.value.comment,
      })
    });

    if (!res.ok) throw new Error("Failed");

    contactForm.value = { name: "", email: "", comment: "", website: "" };
    isFormApproved.value = false;
    wasSubmitted.value = false;
    emit("close");
  } catch (e) {
    console.log('Error fetch form: ', e)
  } finally {
    isLoading.value = false;
  }
}
</script>

<template>
  <Modal class="contact-us-modal" v-model="model" @update:modelValue="onChangeModelVal">
    <h3>Связаться с нами</h3>
    <div>{{ nameError, contactError, isFormApproved, isFormValid }}</div>
    <div class="contact-us-modal__content">
      <BaseInput v-model="contactForm.name" label="Имя" required :error="nameError" />
      <BaseInput v-model="contactForm.email" label="Контакт (email или telegram)" placeholder="example@mail.com | @example" required :error="contactError" />
      <input
          v-model="contactForm.website"
          type="text"
          tabindex="-1"
          autocomplete="off"
          class="hp"
      />
      <div class="ui-textarea-wrap">
        <div class="ui-label">Комментарий</div>
        <textarea class="ul-textarea" v-model="contactForm.comment" rows="3" placeholder="Ваше сообщение..."></textarea>
      </div>
    </div>
    <BaseCheckbox class="contact-us-modal__check" v-model="isFormApproved">
      Я соглашаюсь на обработку персональных данных <br> и соглашаюсь с <router-link :to="'/privacy'"> политикой конфиденциальности </router-link>
    </BaseCheckbox>
    <div v-if="approveError" class="error-text">{{ approveError }}</div>
    <Button class="contact-us-modal__action" :disabled="isLoading" @click="onSubmit()">
      <div class="flex items-end">
        <span>Создать обращение</span> <ChevronRightIcon style="margin-left: 3px; width: 14px; color: white" />
      </div>
    </Button>
  </Modal>
</template>

<style scoped lang="scss">
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
    margin-top: 24px;
  }
}
</style>
