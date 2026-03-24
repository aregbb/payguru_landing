<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import Check from "@/assets/img/icons/Check.svg";
import WebIcon from "@/assets/img/icons/web.svg";
import GeographyBg from "@/assets/img/geographyBg.webp";
import Container from "@/components/Container.vue";

const { tm, t } = useI18n();

const items = computed(() => tm("geographyLegacy.items") as Array<{ textHtml: string }>);
</script>

<template>
  <section class="geography">
    <Container>
      <div class="geography__content">
        <div>
          <h2>{{ t("geographyLegacy.title") }}</h2>
          <div class="geography__card">
            <div class="geography__card-title">{{ t("geographyLegacy.cardTitle") }}</div>
            <div class="flex justify-between align-baseline" style="margin-top: 16px;">
              <div class="geography__card-text">{{ t("geographyLegacy.cardText") }}</div>
              <img alt="" :src="WebIcon" />
            </div>
          </div>
          <div class="geography__list">
            <div v-for="(item, index) in items" :key="index" class="geography__list-item">
              <img class="geography__list-item-check" :src="Check" alt="" />
              <div class="geography__list-item-text" v-html="item.textHtml" />
            </div>
          </div>
        </div>
        <div class="geography__image-bg" :style="{ backgroundImage: `url(${GeographyBg})` }" />
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.geography {
  background: #091734;
  color: #fff;
  padding: 100px 0;
  position: relative;

  @include down(sm) {
    padding: 40px 0 40px 0;
  }

  h2 {
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;

    @include down(sm) {
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.8px;
    }
  }

  &__content {
    @include down(sm) {
      display: flex;
      flex-direction: column-reverse;
    }
  }

  &__card {
    width: 382px;
    padding: 24px;
    border-radius: 20px;
    border: 1px solid #1D65FF;
    margin-top: 40px;
    box-shadow:
      0 26px 70px rgba(0, 0, 0, 0.50),
      0 18px 50px rgba(29, 101, 255, 0.16);
    background:
      radial-gradient(
        140% 170% at 10% 40%,
        rgba(30, 85, 200, 0.45) 0%,
        rgba(10, 35, 90, 0.28) 42%,
        rgba(6, 18, 45, 0.18) 62%,
        transparent 78%
      ),
      radial-gradient(
        90% 120% at 60% 40%,
        rgba(255, 255, 255, 0.06) 0%,
        transparent 55%
      ),
      linear-gradient(
        135deg,
        #0a1e46 0%,
        #081a3a 40%,
        #061229 100%
      );

    @include down(sm) {
      margin-top: 300px;
      width: 100%;
      padding: 16px;
    }

    &-title {
      font-size: 21px;
      font-weight: 500;
      letter-spacing: -0.63px;
      line-height: 1;
    }

    &-text {
      font-size: 24px;
      letter-spacing: -0.48px;
      color: #1D65FF;
      line-height: 1;
      font-weight: bold;
    }
  }

  &__list {
    display: flex;
    flex-direction: column;
    gap: 40px;
    max-width: 563px;
    margin-top: 60px;

    @include down(sm) {
      margin-top: 24px;
      gap: 16px;
    }

    &-item {
      display: flex;
      gap: 10px;

      &-check {
        width: 24px;
        height: 24px;
      }

      &-text {
        font-size: 21px;
        letter-spacing: -0.84px;
        color: #FFFFFFBF;
        opacity: 0.75;

        @include down(sm) {
          font-size: 18px;
        }
      }
    }
  }

  &__image-bg {
    position: absolute;
    width: 1025px;
    height: 560px;
    top: 176px;
    right: 100px;
    background-size: contain;
    background-repeat: no-repeat;

    @include down(sm) {
      width: 95%;
      height: 220px;
      top: 110px;
      left: 50%;
      transform: translateX(-50%);
    }
  }
}
</style>
