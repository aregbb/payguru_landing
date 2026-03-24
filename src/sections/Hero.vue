<script setup lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";

import bgImg from "@/assets/img/DesktopBg.webp";
import HeroBg from "@/assets/img/heroBg.webp";
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactModalVisible = ref(false);
const { t } = useI18n();
</script>

<template>
  <section class="hero relative overflow-hidden">
    <div class="hero__bg" />
    <div class="hero__bg-figure" :style="{ backgroundImage: `url(${HeroBg})` }" />
    <Container>
      <div class="hero__content">
        <div class="hero__content--left">
          <h1 class="hero__title" v-html="t('hero.titleHtml')" />
          <p class="hero__text" v-html="t('hero.textHtml')" />
          <div class="hero__action">
            <Button @click="isContactModalVisible = true">{{ t("actions.scheduleCall") }}</Button>
          </div>
        </div>

        <img rel="preload" class="hero__content-picture" :src="bgImg" alt="">
      </div>
    </Container>
  </section>
  <ContactModal v-if="isContactModalVisible" @close="isContactModalVisible = false" />
</template>

<style lang="scss" scoped>
.hero {
  position: relative;
  height: 500px;

  @include down(md) {
    height: auto;
    padding: 40px 0;
  }

  @include between(md, xl) {
    height: auto;
  }

  h1 {
    margin: 0;

    @include down(sm) {
      text-align: center;
      :deep(br) {
        display: none;
      }
    }
  }

  &__bg {
    background: linear-gradient(180deg, rgba(204, 209, 219, 0.7) 0%, rgba(221, 228, 244, 0.7) 97.6%);
    width: 100%;
    position: absolute;
    height: 100%;
    z-index: -2;

    @include down(md) {
      top: 0;
    }
  }

  &__bg-figure {
    width: 100%;
    height: 100%;
    position: absolute;
    z-index: -1;
    background-repeat: no-repeat;
    background-size: cover;

    @include down(lg) {
      top: 0;
    }
  }

  &__content {
    display: flex;
    align-items: end;
    height: 100%;

    @include down(lg) {
      flex-direction: column-reverse;
      height: auto;
    }

    @include between(lg, xl) {
      padding: 20px 0 60px 0;
    }

    &--left {
      min-width: 46%;
      align-self: start;
      margin-top: 72px;

      @include down(md) {
        width: 100%;
        margin-top: 30px;
      }

      @include between(md, lg) {
        margin-top: 30px;
        margin-bottom: 60px;
      }

      @include between(lg, xl) {
        width: 35%;
        margin-top: 35px;
      }
    }

    &-picture {
      margin-left: -16px;

      @include down(md) {
        margin-left: 0;
        align-self: center;
        width: 100%;
      }

      @include between(md, lg) {
        margin: 40px auto 0 auto;
      }

      @include between(lg, xl) {
        width: 635px;
        position: absolute;
        right: 0;
        bottom: 0;
      }
    }
  }

  &__text {
    margin-top: 30px;
    line-height: 33px;
    font-size: 24px;
    letter-spacing: -0.96px;

    @include down(sm) {
      font-size: 18px;
      line-height: 28px;
      margin-top: 24px;
      text-align: center;
      margin-bottom: 0;

      :deep(br) {
        display: none;
      }
    }
  }

  &__action {
    margin-top: 36px;

    @include down(sm) {
      margin-top: 24px;
      display: flex;
      justify-content: center;
    }
  }
}
</style>
