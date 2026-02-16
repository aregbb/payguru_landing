<script setup lang="ts">
import { ref } from "vue";

import Container from "@/components/Container.vue";
import bgImg from "@/assets/img/DesktopBg.png"
import Button from "@/components/Button.vue";
import HeroBg from "@/assets/img/heroBg.png"
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactModalVisible = ref(false);
</script>

<template>
  <section class="hero relative overflow-hidden">
    <div class="hero__bg" />
    <div class="hero__bg-figure" :style="{ backgroundImage: `url(${HeroBg})` }" />
    <Container>
      <div class="hero__content">
        <div class="hero__content--left">
          <h1 class="hero__title">
            Полный контроль <br />
            над денежными потоками
          </h1>
          <p class="hero__text">
            <strong>Pay Guru</strong> — это многофункциональная система
            оркестрации платежей с глобальным покрытием.
          </p>
          <div class="hero__action">
            <Button @click="isContactModalVisible = true">Запланировать звонок</Button>
          </div>
        </div>

        <img class="hero__content-picture" :src="bgImg" alt="">
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
      br {
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
      //flex-direction: column-reverse;
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
      font-size: 21px;
      margin-top: 24px;
      text-align: center;
      margin-bottom: 0;

      br {
        display: none;
      }
    }
  }
  &__action {
    margin-top: 36px;

    @include down(sm) {
      margin-top: 24px;
      justify-self: center;
    }
  }
}
</style>
