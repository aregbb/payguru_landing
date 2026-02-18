<script setup lang="ts">
import Container from "@/components/Container.vue";
import { ref } from "vue";

import FeaturesImg from "@/assets/img/featuresImg.webp"
import Check from "@/assets/img/icons/whiteCheck.svg";
import Button from "@/components/Button.vue";
import ContactModal from "@/components/modals/ContactModal.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";

const items = ref([
  {
    title: "Круглосуточная поддержка 24/7",
    text: "Дежурная команда специалистов <br> для оперативного реагирования."
  },
  {
    title: "Мониторинг",
    text: "Непрерывный контроль сервисов <br> с автоматическими оповещениями в Telegram."
  },
  {
    title: "Полное логирование",
    text: "Подробное логгирование, аудит операций <br> и прозрачная трассировка запросов."
  },
]);

const isContactModalVisible = ref(false);
</script>

<template>
  <div class="features section-padding">
    <Container>
      <div class="features__content">
        <img class="features__bg" :src="FeaturesImg" alt="picture" />
        <div class="features__list">
          <div class="features__list-item" v-for="item in items">
            <img class="features__list-item-check" :src="Check" />
            <div>
              <div class="features__list-item-title">
                {{ item.title }}
              </div>
              <div class="features__list-item-text" v-html="item.text" />
            </div>
        </div>
        <Button class="features__action" variant="secondary" @click="isContactModalVisible = true">
          <div class="flex items-end">
            <span>Запланировать звонок</span>
            <ChevronRightIcon style="margin-left: 3px; width: 15px;" />
          </div>
        </Button>
      </div>
      </div>
    </Container>
    <ContactModal v-if="isContactModalVisible" @close="isContactModalVisible = false" />
  </div>
</template>

<style scoped lang="scss">
.features {
  background: #564CF1;
  color: #fff;
  will-change: auto;
  transform: none;

  &__content {
    display: flex;
    align-items: center;
    gap: 62px;
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    will-change: transform;

    @include down(md) {
      flex-direction: column;
      gap: 20px;
    }
    @include between(md, xl) {
      justify-content: center;
    }
  }

  &__bg {
    transform: translate3d(0,0,0);
    backface-visibility: hidden;
    will-change: transform;
    @include down(md) {
      width: 300px;
    }

    @include between(md, xl) {
      width: 40%;
    }
  }

  &__list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

    @include down(sm) {
      margin-top: 0;
      gap: 24px;
    }

    @include between(md, xl) {
      width: 50%;
      margin-top: 0;
    }

    &-item {
      display: flex;
      gap: 10px;

      &-check {
        width: 22.5px;
        margin-top: 5px;
        height: 22.5px;
      }
      &-title {
        font-size: 28px;
        line-height: 30px;
        font-weight: 500;
        letter-spacing: -1.12px;

        @include down(sm) {
          font-size: 22px;
          letter-spacing: -0.5px;
        }
      }
      &-text {
        margin-top: 13px;
        letter-spacing: -0.84px;
        font-size: 21px;
        color: #FFFFFF;
        opacity: 0.7;

        @include down(sm) {
          margin-top: 6px;
          font-size: 18px;
        }
      }
    }
  }

  &__action {
    width: 240px;
    margin-left: 30px;

    @include down(sm) {
      margin: 0 auto;
    }
  }
}
</style>
