<script setup lang="ts">
import { ref } from "vue";

import Cloud from "@/assets/img/icons/cloud.svg"
import Eye from "@/assets/img/icons/eye.svg"
import Filter from "@/assets/img/icons/filter.svg"
import List from "@/assets/img/icons/list.svg"
import TechSupportLeftBg from "@/assets/img/TechSupportLeftBg.png"
import TechSupportRightBg from "@/assets/img/TechSupportRightBg.svg"
import Container from "@/components/Container.vue";

const featuresList = ref([
  {
    icon: List,
    title: "Подробная документация",
    description: "С примерами запросов и ответов, подробными схемами <br/> интеграции, описанием ошибок и рекомендациями по <br /> обработке нестандартных сценариев.",
  },
  {
    icon: Cloud,
    title: "Тестовый сервер",
    description: "Полноценная песочница для отработки всей цепочки <br/> вызовов: от создания операции до финального колбэка <br/> и обработки статусов.",
  },
  {
    icon: Eye,
    title: "Прозрачные статус-коды",
    description: "Чёткая, логичная и предсказуемая система статусов <br/> с понятным поведением в каждом сценарии <br/> и документацией по каждому статусу.",
  },
  {
    icon: Filter,
    title: "Кастомизация API ",
    description: "Адаптация API и бизнес-логики под ваши процессы: <br/> дополнительные поля, нестандартные колбэки <br/> методы и функционал по запросу.",
  },
]);

</script>

<template>
  <section class="tech-support section-padding">
    <div class="tech-support__left-bg" :style="{ backgroundImage: `url(${TechSupportLeftBg})` }" />
    <div class="tech-support__right-bg" :style="{ backgroundImage: `url(${TechSupportRightBg})` }" />
    <Container class="tech-support__wrap">
      <div class="tech-support--left">
        <h3>
          Техническая поддержка
          <br/>
          <span class="text-gradient">White Label</span>
        </h3>
        <div class="text-additional">
          Команда опытных разработчиков для ваших <br /> интеграций, кастомизации функционала <br/>
          и решения любых задач.
        </div>
      </div>
      <div class="tech-support--right">
        <div v-for="(item, i) in featuresList" :key="i" class="tech-support__card">
          <img class="tech-support__card-icon" :src="item.icon" />
          <div class="tech-support__card-title">{{ item.title }}</div>
          <div class="tech-support__card-description" v-html="item.description" />
        </div>
      </div>
    </Container>
  </section>
</template>

<style lang="scss">
.tech-support {
  &__card {
    @include down(lg) {
      br {
        display: none;
      }
    }
  }
}
</style>
<style scoped lang="scss">
.tech-support {
  position: relative;
  background: #FBFCFE;

  &__wrap {
    display: flex;
    gap: 85px;

    @include down(md) {
      flex-direction: column;
      gap: 10px;
    }
    @include between(sm, lg) {
      gap: 40px;
      flex-direction: column;
    }
  }

  &__left-bg {
    width: 960px;
    height: 804px;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;

    @include down(sm) {
      width: 100%;
      height: 400px;
      z-index: -1;
    }

    @include between(sm, lg) {
      width: 100%;
      height: 600px;
    }
  }

  &--right {
    display: flex;
    gap: 15.5px;
    flex-direction: column;
    position: relative;

    @include between(md, xl) {
      max-width: 45%;
    }
    @include between(sm, lg) {
      flex-wrap: wrap;
      flex-direction: row;
      width: 100%;
      max-width: none;
    }
  }

  h3 {
    font-size: 50px;
    line-height: 60px;
    margin: 0 0 23px;
    letter-spacing: -2px;

    @include down(sm) {
      font-size: 32px;
      line-height: 1;
      letter-spacing: -0.5px;
      text-align: center;
      margin-bottom: 16px;
    }

    @include between(sm, xl) {
      font-size: 41px;
      line-height: 1.3;
    }
  }

  &__card {
    box-shadow:
        0px 13.62px 24px -2.72px rgba(224, 224, 224, 0.25),
        0px 5.45px 36.5px -2.72px rgba(224, 224, 224, 0.25);
    //backdrop-filter: blur(32px);
    padding: 29px 32px;
    background: white;
    border-radius: 20px;

    @include down(sm) {
      padding: 24px;
    }

    @include between(sm, lg) {
      padding: 24px;
      width: 345px;
    }

    &-icon {
      width: 44px;
      height: 44px;
    }
    &-title {
      margin: 16px 0;
      font-size: 23px;
      letter-spacing: -0.46px;
      line-height: 30px;
      font-weight: 500;

      @include down(sm) {
        font-size: 22px;
        line-height: 1;
        margin: 10px 0;
      }
    }
    &-description {
      color: #65758A;
      font-size: 17px;
      letter-spacing: -0.68px;
      line-height: 24px;
    }
  }

  .text-additional {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.54px;

    @include down(sm) {
      text-align: center;
      br {
        display: none;
      }
    }
  }
}
</style>
