<script setup lang="ts">
import { ref } from "vue";

import LogoWithBrads from "@/assets/img/logo-with-brands.png"
import Check from "@/assets/img/icons/Check.svg";
import Container from "@/components/Container.vue";
import Button from "@/components/Button.vue";
import ContactModal from "@/components/modals/ContactModal.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";

const isContactModalVisible = ref(false);

const items = ref([
  {
    title: "Брендирование",
    text: "Полноценный старт под вашим брендом до 7 дней: домен, логотип и первичная конфигурация."
  },
  {
    title: "Настроенные бизнес-процессы",
    text: "Готовые операционные сценарии, регламенты для поддержки, алертов и онбординга."
  },
  {
    title: "Поддержка запуска",
    text: "Учебная документация, AI White Label Kit, Trello-доски, чек-листы и пошаговые инструкции."
  },
])

</script>

<template>
  <section class="first-start">
    <Container>
      <div class="first-start__content">
        <div class="first-start__left">
          <h2>Быстрый запуск</h2>
          <div class="first-start__list">
            <div class="first-start__list-item" v-for="item in items">
              <img class="first-start__list-item-check" :src="Check" />
              <div>
                <div class="first-start__list-item-title">
                  {{ item.title }}
                </div>
                <div class="first-start__list-item-text">
                  {{ item.text }}
                </div>
              </div>
            </div>
            <Button class="first-start__action" variant="secondary" @click="isContactModalVisible = true">
              <div class="flex items-end">
                <span>Запросить доступ к демо</span>
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
  padding: 100px 0;
  background: #020617;
  color: #fff;
  position: relative;

  @media (max-width: 640px) {
    padding: 40px 0;
  }

  h2 {
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;
    font-weight: 500;

    @media (max-width: 640px) {
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
    }
  }

  &__content {
    display: flex;

    @media (max-width: 640px) {
      flex-direction: column-reverse;
    }
  }

  &__left {
    width: 473px;

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  &__right {
    width: 712px;
    margin-top: -30px;
    height: 552px;
    background-size: cover;
    background-repeat: no-repeat;

    @media (max-width: 640px) {
      top: 135px;
      width: 390px;
      height: 280px;
      position: absolute;
      background-size: contain;
      left: 50%;
      transform: translateX(-61%);
    }
  }

  &__list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @media (max-width: 640px) {
      margin-top: 335px;
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
      }
      &-text {
        margin-top: 10px;
        font-size: 16px;
        color: #627286;
      }
    }
  }

  &__action {
    width: 261px;
    margin-left: 30px;

    @media (max-width: 640px) {
      margin: 16px auto 0;
    }
  }
}
</style>
