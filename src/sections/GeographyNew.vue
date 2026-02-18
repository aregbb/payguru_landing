<script setup lang="ts">
import { ref } from "vue";
import Container from "@/components/Container.vue";
import GeographyBg from "@/assets/img/geographyBg.webp";
import Button from "@/components/Button.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactModalVisible = ref(false);
</script>

<template>
  <section class="geography section-padding">
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
              <strong>Антифрод-фильтры: </strong>по суммам, частоте, BIN/<br>ISSUER, времени суток, гео, поведенческим
              <br> паттернам.
            </li>
            <li>
              <strong>Умные курсы/FX:</strong> внешний источник или фикс<br>
              по направлению.
            </li>
          </ul>
          <Button variant="blue" class="geography__action" @click="isContactModalVisible = true">
            <div class="flex items-end">
              <span>Консультация специалиста</span>
              <ChevronRightIcon style="margin-left: 3px; width: 14px; color: white" />
            </div>
          </Button>
        </div>
      </div>
    </Container>
  </section>
  <ContactModal v-if="isContactModalVisible" @close="isContactModalVisible = false" />
</template>

<style scoped lang="scss">
.geography {
  background: #E4E9F4;
  color: #65758A;
  position: relative;
  padding-bottom: 157px;
  padding-top: 81px;

  @include down(lg) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
  @include down(sm) {
    padding-top: 40px;
    padding-bottom: 40px;
  }
  @include between(lg, xl) {
    padding-bottom: 80px;
    padding-top: 80px;
  }

  h2 {
    text-align: center;
    color: #020617;
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;
    font-weight: 500;

    @include down(sm) {
      font-size: 34px;
      line-height: 1;
      letter-spacing: -0.8px;
    }

    @include between(sm, xl) {
      font-size: 52px;
      line-height: 1;
      letter-spacing: -1px;
    }
  }

  &__action {
    margin-top: 40px;

    @include down(sm) {
      margin-top: 24px;
      align-self: center;
    }

    @include between(sm, xl) {
      margin-top: 24px;
      width: fit-content;
    }
  }

  &__text {
    margin-top: 32px;
    text-align: center;
    font-size: 24px;
    letter-spacing: -0.96px;

    @include down(md) {
      font-size: 18px;
      margin-top: 24px;
      letter-spacing: -0.5px;
      padding-left: 14px;

      br {
        display: none;
      }
    }

    @include between(sm, xl) {
      margin-top: 16px;
      font-size: 22px;

      br {
        display: none;
      }
    }
  }

  h3 {
    color: #020617;
    font-size: 40px;
    letter-spacing: -1.6px;
    margin-top: 42px;

    @include down(sm) {
      font-size: 28px;
      text-align: center;
      margin-top: 0;
    }

    @include between(md, xl) {
      margin-top: 16px;
      font-size: 32px;
    }
    @include between(sm, lg) {
      margin-top: 16px;
    }
  }

  &__list {
    margin-top: 37px;
    margin-bottom: 0;
    padding-left: 19px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 10px;

    @include down(sm) {
      margin-top: 24px;
      padding-left: 30px;
    }

    @include between(sm, xl) {
      margin-top: 16px;
    }

    li {
      position: relative;
      font-size: 18px;
      letter-spacing: -0.72px;

      @include down(sm) {
        font-size: 16px;

        br {
          display: none;
        }
      }

      &::before {
        content: "";
        position: absolute;
        left: -18px;
        top: 8px;
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

    @include down(md) {
      flex-direction: column;
      margin-top: 30px;
    }

    @include between(md, xl) {
      margin-top: 40px;
      align-items: center;
    }

    &-text {
      margin-top: 43px;
      margin-right: 13px;
      line-height: 27px;
      font-size: 18px;
      letter-spacing: -0.8px;

      @include down(sm) {
        font-size: 18px;
        padding-left: 14px;
        text-align: center;
        margin-top: 16px;
        line-height: 20px;

        br {
          display: none;
        }
      }
      @include between(sm, xl) {
        margin-top: 16px;
      }
      @include between(md, lg) {
        br {
         display: none;
        }
      }
    }

    &-right {
      margin-left: auto;

      @include between(lg, xl) {
        max-width: 550px;
      }


      @include between(md, lg) {
        max-width: 380px;

        br {
          display: none;
        }
      }

      @include down(md) {
        width: fit-content;
        margin: 345px auto 0;
        display: flex;
        flex-direction: column;
      }
      @include down(sm) {
        margin: 250px auto 0;
      }
    }

    &-left {
      position: absolute;
      width: 733px;
      height: 452px;
      left: -75px;
      background-size: contain;
      background-repeat: no-repeat;

      @include between(md, lg) {
        left: -70px;
        width: 380px;
        margin: 0 auto;
        height: 300px;
      }
      @include down(md) {
        left: 50%;
        transform: translateX(-50%);
        width: 522px;
        height: 320px;
      }
      @include down(sm) {
        width: 350px;
        height: 250px;
      }
      @include between(lg, xl) {
        width: 50%;
        left: 0;
        height: 300px;
      }
    }
  }
}
</style>
