<script setup lang="ts">
import { ref } from "vue";

import Container from "@/components/Container.vue";
import Button from "@/components/Button.vue";
import Modal from "@/components/Modal.vue";
import BaseInput from "@/components/BaseInput.vue";

import { ChevronRightIcon } from "@heroicons/vue/24/solid";
import BaseCheckbox from "@/components/BaseCheckbox.vue";

const isContactFormVisible = ref(false);

const contactForm = ref({
  name: "",
  email: "",
  comment: ""
})

const isFormApproved = ref(false);
</script>

<template>
  <section class="contact-us">
    <div class="contact-us__gradient" />
    <Container>
      <h2>Консультация специалиста</h2>
      <div class="contact-us__info">
        Короткий звонок с экспертом поможет выбрать оптимальное решение, быстро запуститься <br>
        и избежать ошибок на старте и в процессе работы
      </div>
      <Button class="contact-us__action" variant="secondary" @click="isContactFormVisible = true">Запланировать звонок</Button>
    </Container>
  </section>
  <Modal class="contact-us__modal" v-model="isContactFormVisible">
    <h3>Связаться с нами</h3>
    <div class="contact-us__modal-content">
      <BaseInput v-model="contactForm.name" label="Имя" required />
      <BaseInput v-model="contactForm.email" label="Контакт (email или telegram)" placeholder="example@mail.com | @example" required />
    </div>
    <BaseCheckbox class="contact-us__modal-check" v-model="isFormApproved">
      Я соглашаюсь на обработку персональных данных <br> и соглашаюсь с <router-link :to="'/privacy'"> политикой конфиденциальности </router-link>
    </BaseCheckbox>
    <Button class="contact-us__modal-action">
      <div class="flex items-end">
        <span>Создать обращение</span> <ChevronRightIcon style="margin-left: 3px; width: 14px; color: white" />
      </div>
    </Button>
  </Modal>
</template>

<style scoped lang="scss">
.contact-us {
  background: #020617;
  padding: 100px 0;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  :deep(.container),
  > .container {
    position: relative;
    z-index: 1;
  }

  &__info {
    font-size: 19px;
    line-height: 27px;
    margin-top: 20px;
  }
  &__action {
    margin-top: 32px;
  }

  &__gradient {
    position: absolute;
    inset: -18%;              // запас под blur
    z-index: 0;
    pointer-events: none;

    background:
        /* главный синий прожектор снизу */
        radial-gradient(1920px 700px at 50% 112%,
            rgba(56, 138, 215, 1) 0%,
            rgba(56, 138, 215, 0.62) 34%,
            rgba(56, 138, 215, 0) 74%
        ),

          /* второй синий слой — поднимает подсвет вверх (ключевое отличие от твоего) */
        radial-gradient(1100px 620px at 55% 35%,
            rgba(56, 138, 215, 0.28) 0%,
            rgba(56, 138, 215, 0.14) 40%,
            rgba(56, 138, 215, 0) 78%
        ),

          /* мягкий фиолетовый слева снизу */
        radial-gradient(900px 620px at 8% 118%,
            rgba(201, 135, 253, 0.35) 0%,
            rgba(201, 135, 253, 0.16) 40%,
            rgba(201, 135, 253, 0) 78%
        ),

          /* верх чуть затемнён, но НЕ в ноль (у тебя сейчас он слишком давит) */
        linear-gradient(180deg,
            rgba(2, 6, 23, 0.35) 0%,
            rgba(2, 6, 23, 0.0) 55%
        );

    filter: blur(34px) saturate(1.18);
    transform: scale(1.08);
  }

  &__modal-content {
    margin-top: 24px;
    display: flex;
    flex-direction: column;
    gap: 16px;
  }
  &__modal-check {
    margin-top: 16px;
  }
  &__modal-action {
    margin-top: 24px;
  }
}
</style>
