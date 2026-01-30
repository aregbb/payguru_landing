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
    description: "С примерами запросов и ответов, подробными схемами <br/> интеграции, описанием ошибок и рекомендациями по <br /> обработке нестандартных сценариев",
  },
  {
    icon: Cloud,
    title: "Тестовый сервер",
    description: "Полноценная песочница для отработки всей цепочки <br/> вызовов: от создания операции до финального колбэка <br/> и обработки статусов",
  },
  {
    icon: Eye,
    title: "Прозрачные статус-коды",
    description: "Чёткая, логичная и предсказуемая система статусов <br/> с понятным поведением в каждом сценарии <br/> и документацией по каждому статусу",
  },
  {
    icon: Filter,
    title: "Кастомизация API ",
    description: "Адаптация API и бизнес-логики под ваши процессы: <br/> дополнительные поля, нестандартные колбэки <br/> методы и функционал по запросу",
  },
]);

</script>

<template>
  <section class="tech-support">
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
          и решения любых задач
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

<style scoped lang="scss">
.tech-support {
  padding: 100px 0;
  position: relative;
  background: #FBFCFE;
  &__wrap {
    display: flex;
    gap: 85px;
  }

  &__left-bg {
    width: 960px;
    height: 804px;
    background-repeat: no-repeat;
    position: absolute;
    bottom: 0;
  }

  &--right {
    display: flex;
    gap: 15.5px;
    flex-direction: column;
  }

  h3 {
    font-size: 50px;
    line-height: 60px;
    margin: 0 0 23px;
    letter-spacing: -2px;
  }

  &__card {
    box-shadow:
        0px 13.62px 24px -2.72px rgba(224, 224, 224, 0.25),
        0px 5.45px 36.5px -2.72px rgba(224, 224, 224, 0.25);
    backdrop-filter: blur(32px);
    padding: 29px 32px;
    border-radius: 20px;

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
  }
}
</style>
