<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

import Check from "@/assets/img/icons/Check.svg";
import LogoWithBrads from "@/assets/img/logo-with-brands.webp";
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactModalVisible = ref(false);
const { tm, t } = useI18n();

const items = computed(() => tm("fastStart.items") as Array<{ title: string; textHtml: string }>);
</script>

<template>
  <section class="first-start section-padding">
    <Container>
      <div class="first-start__content">
        <div class="first-start__left">
          <h2>{{ t("fastStart.title") }}</h2>
          <div class="first-start__list">
            <div
              v-for="item in items"
              :key="item.title"
              class="first-start__list-item"
            >
              <img class="first-start__list-item-check" :src="Check" alt="" />
              <div>
                <div class="first-start__list-item-title">{{ item.title }}</div>
                <div class="first-start__list-item-text" v-html="item.textHtml" />
              </div>
            </div>
            <Button class="first-start__action" variant="secondary" @click="isContactModalVisible = true">
              <div class="flex items-end">
                <span>{{ t("actions.requestDemo") }}</span>
                <ChevronRightIcon style="margin-left: 3px; width: 14px;" />
              </div>
            </Button>
          </div>
        </div>
        <div class="first-start__right" :style="{ backgroundImage: `url(${LogoWithBrads})` }" />
      </div>
    </Container>
  </section>
  <ContactModal v-if="isContactModalVisible" @close="isContactModalVisible = false" />
</template>

<style scoped lang="scss">
.first-start {
  background: #020617;
  color: #fff;
  position: relative;

  h2 {
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;
    font-weight: 500;

    @include down(md) {
      font-size: 30px;
      line-height: 1.1;
      letter-spacing: -0.5px;
      text-align: center;
    }

    @include between(md, xl) {
      font-size: 52px;
    }
  }

  &__content {
    display: flex;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    will-change: transform;

    @include down(md) {
      flex-direction: column-reverse;
    }
  }

  &__left {
    width: 473px;

    @include down(md) {
      width: 100%;
    }
  }

  &__right {
    width: 712px;
    margin-top: -30px;
    height: 552px;
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    transform: translate3d(0, 0, 0);
    backface-visibility: hidden;
    will-change: transform;

    @include down(md) {
      top: 135px;
      width: 320px;
      height: 240px;
      position: absolute;
      background-size: contain;
      left: 50%;
      transform: translateX(-50%);
    }

    @include between(sm, md) {
      transform: translateX(-50%);
    }

    @include between(md, lg) {
      width: 447px;
      height: 350px;
      position: absolute;
      right: -40px;
      top: 100px;
      background-size: cover;
    }

    @include between(lg, xl) {
      width: 55%;
      margin-top: 20px;
      margin-left: -35px;
      height: 420px;
      background-size: cover;
    }
  }

  &__list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include down(md) {
      margin-top: 280px;
      gap: 24px;
    }

    @include between(md, xl) {
      gap: 24px;
    }

    &-item {
      display: flex;
      gap: 7.5px;

      &-check {
        width: 22.5px;
        height: 22.5px;
      }

      &-title {
        font-size: 21px;
        line-height: 22.5px;

        @include down(sm) {
          font-size: 18px;
          line-height: 1.25;
        }
      }

      &-text {
        margin-top: 10px;
        font-size: 16px;
        color: #627286;

        @include down(sm) {
          line-height: 22px;
        }
      }
    }
  }

  &__action {
    width: 261px;
    margin-left: 30px;

    @include down(sm) {
      margin: 16px auto 0;
    }
  }
}
</style>
