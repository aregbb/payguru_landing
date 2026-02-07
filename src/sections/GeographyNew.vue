<script setup lang="ts">
import Container from "@/components/Container.vue";

import GeographyBg from "@/assets/img/geographyBg.png"
import Button from "@/components/Button.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
</script>

<template>
  <section class="geography">
    <Container>
      <h2>Мы работаем на всех континентах</h2>
      <div class="geography__text">
        Многолетний опыт сотрудничества с проверенными компаниями по всему миру даёт <br> возможность выбрать действительно надёжные решения для бизнеса.
      </div>
      <div class="geography__content">
        <div class="geography__content-left" :style="{ backgroundImage: `url(${GeographyBg})`}" />
        <div class="geography__content-right">
          <h3>Глобальное покрытие</h3>
          <div class="geography__content-text">
            Поддержка локальных методов с гибкой каскадной <br> маршрутизацией по GEO, банку, валюте, сумме и риску.
          </div>
          <ul class="geography__list">
            <li>
              <strong>Антифрод-фильтры:</strong> по суммам, частоте, BIN/<br>ISSUER, времени суток, гео, поведенческим
              <br> паттернам.
            </li>
            <li>
              <strong>Умные курсы/FX:</strong> внешний источник или фикс<br>
              по направлению.
            </li>
          </ul>
          <Button variant="blue" class="geography__action">
            <div class="flex items-end">
              <span>Консультация специалиста</span><ChevronRightIcon style="margin-left: 3px; width: 14px; color: white" />
            </div>
          </Button>
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.geography {
  background: #E4E9F4;
  color: #65758A;
  padding: 100px 0 155px 0;
  position: relative;

  @media (max-width: 640px) {
    padding: 40px 0 40px 0;
  }

  h2 {
    text-align: center;
    color: #020617;
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;

    @media (max-width: 640px) {
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.8px;
    }
  }

  &__action {
    margin-top: 44px;

    @media (max-width: 640px) {
      margin-top: 24px;
      align-self: center;
    }
  }

  &__text {
    margin-top: 32px;
    text-align: center;
    font-size: 24px;
    letter-spacing: -0.96px;

    @media (max-width: 640px) {
      font-size: 18px;
      margin-top: 24px;
      letter-spacing: -0.5px;
      padding-left: 14px;

      br {
        display: none;
      }
    }
  }

  h3 {
    color: #020617;
    font-size: 40px;
    letter-spacing: -1.6px;
    margin-top: 32px;

    @media (max-width: 640px) {
      font-size: 28px;
      text-align: center;
    }
  }

  &__list {
    margin-top: 37px;
    margin-bottom: 0;
    padding-left: 15px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @media (max-width: 640px) {
      margin-top: 24px;
      padding-left: 30px;
    }

    li {
      position: relative;
      font-size: 18px;

      @media (max-width: 640px) {
        font-size: 16px;

        br {
          display: none;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: -15px;
        top: 0.6em; /* вертикальное выравнивание */
        width: 6px;
        height: 6px;
        background-color: #1D65FF;
        border-radius: 2px;
      }
    }
  }

  &__content {
    display: flex;
    margin-top: 100px;
    position: relative;
    justify-content: space-between;

    @media (max-width: 640px) {
      flex-direction: column;
      margin-top: 20px;
    }

    &-text {
      margin-top: 31px;
      line-height: 27px;
      font-size: 18px;
      letter-spacing: -0.8px;

      @media (max-width: 640px) {
        font-size: 18px;
        padding-left: 14px;
        text-align: center;
        margin-top: 16px;
        line-height: 20px;

        br {
          display: none;
        }
      }
    }

    &-right {
      margin-left: auto;

      @media (max-width: 640px) {
        margin-top: 220px;
        display: flex;
        flex-direction: column;
      }
    }

    &-left {
      position: absolute;
      width: 733px;
      height: 452px;
      left: -75px;
      background-size: contain;
      background-repeat: no-repeat;

      @media (max-width: 640px) {
        left: 0;
        width: 100%;
        height: 250px;
      }
    }
  }
}
</style>
