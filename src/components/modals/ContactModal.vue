<script setup lang="ts">
import BaseCheckbox from "@/components/BaseCheckbox.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import Modal from "@/components/Modal.vue";
import Button from "@/components/Button.vue";
import BaseInput from "@/components/BaseInput.vue";
import {ref} from "vue";

const contactForm = ref({
  name: "",
  email: "",
  comment: ""
})

const emit = defineEmits(['close']);

const model = ref(true)

const isFormApproved = ref(false);

const onChangeModelVal = (val: boolean) => {
  if (!val) emit("close");
}
</script>

<template>
  <Modal class="contact-us-modal" v-model="model" @update:modelValue="onChangeModelVal">
    <h3>Связаться с нами</h3>
    <div class="contact-us-modal__content">
      <BaseInput v-model="contactForm.name" label="Имя" required />
      <BaseInput v-model="contactForm.email" label="Контакт (email или telegram)" placeholder="example@mail.com | @example" required />
      <div class="ui-textarea-wrap">
        <div class="ui-label">Комментарий</div>
        <textarea class="ul-textarea" v-model="contactForm.comment" rows="3" placeholder="Ваше сообщение..."></textarea>
      </div>
    </div>
    <BaseCheckbox class="contact-us-modal__check" v-model="isFormApproved">
      Я соглашаюсь на обработку персональных данных <br> и соглашаюсь с <router-link :to="'/privacy'"> политикой конфиденциальности </router-link>
    </BaseCheckbox>
    <Button class="contact-us-modal__action" @click="emit('close')">
      <div class="flex items-end">
        <span>Создать обращение</span> <ChevronRightIcon style="margin-left: 3px; width: 14px; color: white" />
      </div>
    </Button>
  </Modal>
</template>

<style scoped lang="scss">
.ui-textarea-wrap {
  display: flex;
  flex-direction: column;
  gap: 6px;
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
