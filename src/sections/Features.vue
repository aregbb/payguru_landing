<script setup lang="ts">
import Container from "@/components/Container.vue";
import { ref } from "vue";

import FeaturesImg from "@/assets/img/featuresImg.png"
import Check from "@/assets/img/icons/whiteCheck.svg";
import Button from "@/components/Button.vue";
import ContactModal from "@/components/modals/ContactModal.vue";
import {ChevronRightIcon} from "@heroicons/vue/24/solid";

const items = ref([
  {
    title: "Круглосуточная поддержка 24/7",
    text: "Дежурная команда специалистов для оперативного реагирования"
  },
  {
    title: "Мониторинг",
    text: "Непрерывный контроль сервисов с автоматическими оповещениями в Telegram"
  },
  {
    title: "Полное логирование",
    text: "Детальные логи, аудит операций и прозрачная трассировка запросов"
  },
]);

const isContactModalVisible = ref(false);
</script>

<template>
  <div class="features">
    <Container>
      <div class="features__content">
        <img :src="FeaturesImg" alt="picture" />
        <div class="features__list">
          <div class="features__list-item" v-for="item in items">
            <img class="features__list-item-check" :src="Check" />
            <div>
              <div class="features__list-item-title">
                {{ item.title }}
              </div>
              <div class="features__list-item-text">
                {{ item.text }}
              </div>
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
  padding: 100px 0;
  background: #564CF1;
  color: #fff;

  &__content {
    display: flex;
    align-items: center;
    gap: 62px;
  }

  &__list {
    margin-top: 40px;
    display: flex;
    flex-direction: column;
    gap: 40px;

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
      }
      &-text {
        margin-top: 13px;
        letter-spacing: -0.84px;
        font-size: 21px;
        color: #FFFFFF;
        opacity: 0.7;
      }
    }
  }

  &__action {
    width: 240px;
    margin-left: 30px;
  }
}
</style>
