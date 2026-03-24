<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactFormVisible = ref(false);
const { t } = useI18n();
</script>

<template>
  <section class="contact-us section-padding">
    <div class="contact-us__gradient" />
    <Container>
      <h2>{{ t("contactUs.title") }}</h2>
      <div class="contact-us__info" v-html="t('contactUs.textHtml')" />
      <Button class="contact-us__action" variant="secondary" @click="isContactFormVisible = true">
        {{ t("actions.scheduleCall") }}
      </Button>
    </Container>
  </section>
  <ContactModal v-if="isContactFormVisible" @close="isContactFormVisible = false" />
</template>

<style scoped lang="scss">
.contact-us {
  background: #020617;
  text-align: center;
  color: white;
  position: relative;
  overflow: hidden;

  :deep(.container),
  > .container {
    position: relative;
    z-index: 1;
  }

  h2 {
    letter-spacing: -2px;
    font-weight: 500;

    @include down(sm) {
      font-size: 30px;
      line-height: 1.1;
      letter-spacing: -0.5px;
      text-align: center;
    }

    @include between(sm, lg) {
      font-size: 48px;
    }
  }

  &__info {
    font-size: 19px;
    line-height: 27px;
    margin-top: 20px;
    letter-spacing: -1.14px;

    @include down(sm) {
      font-size: 17px;
      line-height: 24px;
      margin-top: 16px;
      letter-spacing: -0.5px;

      :deep(br) {
        display: none;
      }
    }

    @include between(sm, lg) {
      :deep(br) {
        display: none;
      }
    }
  }

  &__action {
    margin: 32px auto 0 auto;

    @include down(sm) {
      margin-top: 24px;
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
