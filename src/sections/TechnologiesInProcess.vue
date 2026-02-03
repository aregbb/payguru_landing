<script setup lang="ts">
import { ref } from "vue";

import Diagram from "@/assets/img/icons/diagramup.svg"
import Filters from "@/assets/img/icons/filters horizontal.svg"
import HandShake from "@/assets/img/icons/handshake.svg"
import Settings from "@/assets/img/icons/settings.svg"
import Shield from "@/assets/img/icons/shield-checkmark.svg"
import Unlock from "@/assets/img/icons/unlock.svg"
import Container from "@/components/Container.vue";

const items = ref([
  {
    icon: Settings,
    title: "Автоматизация",
    text: "99% операций без ручного вмешательства."
  },
  {
    icon: Diagram,
    title: "Производительность",
    text: "Стабильная работа <br> при пиковых нагрузках."
  },
  {
    icon: Shield,
    title: "Безопасность",
    text: "Соответствие PCI DSS, <br> встроенные меры защиты."
  },
  {
    icon: Filters,
    title: "Функциональность",
    text: "Сотни параметров в UI <br> для тонкой настройки."
  },
  {
    icon: Unlock,
    title: "Контроль",
    text: "Полный доступ к бизнес-логике, <br> API и параметрам."
  },
  {
    icon: HandShake,
    title: "Надежность",
    text: "Поддержка критически важного <br> бизнеса 24/7."
  },
])
</script>

<template>
  <section class="technologies">
    <Container>
      <div class="technologies__head">
        <h2>Технологии в действии</h2>
        <div class="technologies__head-text">Полный контроль над платежами и бизнес-процессами.</div>
      </div>
      <div class="technologies__list">
        <div class="technologies__item" v-for="item in items">
          <img class="technologies__item-icon" :src="item.icon" />
          <div class="technologies__item-title">{{ item.title }}</div>
          <div class="technologies__item-text" v-html="item.text" />
        </div>
      </div>
    </Container>
  </section>
</template>

<style scoped lang="scss">
.technologies {
  padding: 100px 0;

  @media (max-width: 640px) {
    padding: 40px 0;
  }

  &__head {
    text-align: center;

    h2 {
      font-size: 62px;
      letter-spacing: -1.24px;

      @media (max-width: 640px) {
        font-size: 36px;
        line-height: 1;
        letter-spacing: -0.5px;
      }
    }

    &-text {
      margin-top: 25px;
      color: #65758A;
      font-size: 24px;
      letter-spacing: -1.2px;

      @media (max-width: 640px) {
        font-size: 24px;
        margin-top: 16px;
      }
    }
  }

  &__list {
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
    margin-top: 40px;

    @media (max-width: 640px) {
      margin-top: 16px;
      gap: 16px;
    }
  }

  &__item {
    padding: 28px 32px;
    border-radius: 20px;
    width: 376px;
    box-shadow:
        0px 13.62px 24px -2.72px rgba(224, 224, 224, 0.25),
        0px 5.45px 36.5px -2.72px rgba(224, 224, 224, 0.25);

    @media (max-width: 640px) {
      width: 100%;
      padding: 24px 28px;
    }

    &-icon {
      @media (max-width: 640px) {
        width: 40px;
      };
    }

    &-title {
      margin-top: 24px;
      font-size: 22px;
      letter-spacing: -0.88px;
      line-height: 30px;
      font-weight: 500;
      margin-bottom: 16px;

      @media (max-width: 640px) {
        margin-top: 5px;
        margin-bottom: 10px;
      }
    }
    &-text {
      font-size: 17px;
      line-height: 23px;
      letter-spacing: -0.68px;
      color: #65758A;
    }
  }
}
</style>
