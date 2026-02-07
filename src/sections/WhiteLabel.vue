<script setup lang="ts">
import Container from "@/components/Container.vue";
import { ref } from "vue";

import Rocket from "@/assets/img/rocket.png"
import SettingsBlue from "@/assets/img/settings-blue.png"
import SettingsPurple from "@/assets/img/settings-purple.png"

const items = ref([
  {
    icon: SettingsBlue,
    title: "Готовая инфраструктура",
    text: "Брендирование под клиента: домен, логотип."
  },
  {
    icon: SettingsPurple,
    title: "Постоянные обновления",
    text: "Новый функционал и методы <br> оплаты без остановки сервисов."
  },
  {
    icon: Rocket,
    title: "Быстрый запуск",
    text: "С возможностью кастомизации методов и бизнес-логики."
  }
])
</script>

<template>
  <section class="white-label">
    <Container>
      <div class="white-label__head">
        <h2>White Label PayGuru</h2>
        <div class="white-label__head-text">
          Готовая платёжная инфраструктура для обработки и управления <br />
          денежными потоками enterprise-уровня.
        </div>
        <div class="white-label__list">
          <div v-for="item in items" class="white-label__item">
            <img :src="item.icon" />
            <div class="white-label__item-title">{{ item.title }}</div>
            <div class="white-label__item-text" v-html="item.text" />
          </div>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.white-label {
  background: #020617;
  padding: 100px 0;
  color: #fff;

  @media(max-width: 640px) {
    padding: 40px 0;
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

  &__head {
    text-align: center;
    &-text {
      margin-top: 25px;
      font-size: 24px;
      letter-spacing: -1.2px;
      font-weight: lighter;
      color: #FFFFFF;
      opacity: 0.75;

      @media (max-width: 640px) {
        font-size: 18px;
        letter-spacing: -0.5px;
        margin-top: 24px;

        br {
          display: none;
        }
      }
    }
  }

  &__list {
    display: flex;
    gap: 24px;
    margin-top: 40px;

    @media (max-width: 640px) {
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &__item {
    width: 376px;
    border: 1px solid #FFFFFF1A;
    border-radius: 20px;
    background: #FFFFFF0D;

    img {
      @media (max-width: 640px) {
        width: 290px;
      }
    }

    &-title {
      font-size: 27px;
      font-weight: bold;
      line-height: 30px;
      letter-spacing: -1.08px;
      margin-top: 27px;
      margin-bottom: 16px;
      text-align: left;
      padding-left: 28px;

      @media (max-width: 640px) {
        font-size: 22px;
        line-height: 1;
        letter-spacing: -0.5px;
        margin-top: 0px;
        margin-bottom: 10px;
      }
    }

    &-text {
      text-align: left;
      padding: 0 28px;
      color: #627286;
      font-size: 18px;
      line-height: 26px;
      letter-spacing: -0.72px;
      margin-bottom: 51px;

      @media (max-width: 640px) {
        line-height: 24px;
        margin-bottom: 30px;
      }
    }
  }
}
</style>
