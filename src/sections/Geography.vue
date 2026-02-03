<script setup lang="ts">
import Container from "@/components/Container.vue";
import WebIcon from "@/assets/img/icons/web.svg";
import Background from "@/assets/img/map.png"
import Check from "@/assets/img/icons/Check.svg"
import {ref} from "vue";

const items = ref([
  {
    text: "Поддержка локальных методов, <br /> банков и валют."
  },
  {
    text: "Маршрутизация по GEO, валюте, банку <br /> или платёжной системе получателя, диапазону <br> сумм и рисковому профилю."
  },
  {
    text: "Гибкая каскадная логика между исполнителями."
  },
  {
    text: "Трансграничные сценарии, конвертация, <br /> многоступенчатые лимиты."
  }
])
</script>

<template>
  <section class="geography">
    <Container>
      <div class="geography__content">
        <div>
          <h2>География и покрытие</h2>
          <div class="geography__card">
            <div class="geography__card-title">Мы работаем на всех континентах</div>
            <div class="flex justify-between align-baseline" style="margin-top: 16px;">
              <div class="geography__card-text">50+ стран</div>
              <img alt="icon" :src="WebIcon" />
            </div>
          </div>
          <div class="geography__list">
            <div v-for="item in items" class="geography__list-item">
              <img class="geography__list-item-check" :src="Check"  />
              <div class="geography__list-item-text" v-html="item.text" />
            </div>
          </div>
        </div>
        <div class="geography__image-bg" :style="{ backgroundImage: `url(${Background})` }" />
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

  @media (max-width: 640px) {
    padding: 40px 0 40px 0;
  }

  h2 {
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;

    @media (max-width: 640px) {
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.5px;
    }
  }

  &__content {
    @media (max-width: 640px) {
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

    @media (max-width: 640px) {
      margin-top: 300px;
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

    @media (max-width: 640px) {
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

        @media (max-width: 640px) {
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

    @media (max-width: 640px) {
      width: 100%;
      height: 220px;
      top: 110px;
      left: 53%;
      transform: translateX(-50%);
    }
  }
}
</style>
