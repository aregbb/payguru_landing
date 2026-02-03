<script setup lang="ts">
import { ref } from "vue";

import Container from "@/components/Container.vue";
import Button from "@/components/Button.vue";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactFormVisible = ref(false);
</script>

<template>
  <section class="contact-us">
    <div class="contact-us__gradient" />
    <Container>
      <h2>Консультация специалиста</h2>
      <div class="contact-us__info">
        Короткий звонок с экспертом поможет выбрать оптимальное решение, быстро запуститься <br>
        и избежать ошибок на старте и в процессе работы.
      </div>
      <Button class="contact-us__action" variant="secondary" @click="isContactFormVisible = true">Запланировать звонок</Button>
    </Container>
  </section>
  <ContactModal v-if="isContactFormVisible" />
</template>

<style scoped lang="scss">

.contact-us {
  background: #020617;
  padding: 100px 0;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  @media (max-width: 640px) {
    padding: 40px 0;
  }

  :deep(.container),
  > .container {
    position: relative;
    z-index: 1;
  }

  h2 {
    letter-spacing: -2px;

    @media (max-width: 640px) {
      font-size: 32px;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
    }
  }

  &__info {
    font-size: 19px;
    line-height: 27px;
    margin-top: 20px;
    letter-spacing: -1.14px;

    @media (max-width: 640px) {
      font-size: 17px;
      line-height: 24px;
      margin-top: 16px;
      letter-spacing: -0.5px;
    }
  }
  &__action {
    margin-top: 32px;

    @media (max-width: 640px) {
      margin-top: 16px;
    }
  }

  &__gradient {
    position: absolute;
    inset: 0;
    z-index: 0;
    pointer-events: none;

    background:
        radial-gradient(
                75% 185% at 50% 115%,
                rgba(54, 138, 215, 1) 0%,
                rgba(54, 138, 215, 0.62) 28%,
                rgba(54, 138, 215, 0.22) 52%,
                rgba(54, 138, 215, 0) 72%
        ),
        radial-gradient(
                55% 140% at 62% 112%,
                rgba(54, 138, 215, 0.22) 0%,
                rgba(54, 138, 215, 0) 70%
        ),

        #020617;

    background-repeat: no-repeat;
  }
}
</style>
