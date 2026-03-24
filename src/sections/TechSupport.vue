<script setup lang="ts">
import { computed } from "vue";
import { useI18n } from "vue-i18n";

import Cloud from "@/assets/img/icons/cloud.svg";
import Eye from "@/assets/img/icons/eye.svg";
import Filter from "@/assets/img/icons/filter.svg";
import List from "@/assets/img/icons/list.svg";
import TechSupportLeftBg from "@/assets/img/TechSupportLeftBg.webp";
import Container from "@/components/Container.vue";

const { tm, t } = useI18n();

const icons = [List, Cloud, Eye, Filter];

const featuresList = computed(() => (
  (tm("techSupport.items") as Array<{ title: string; textHtml: string }>)
    .map((item, index) => ({ ...item, icon: icons[index] }))
));
</script>

<template>
  <section class="tech-support section-padding">
    <div class="tech-support__left-bg" :style="{ backgroundImage: `url(${TechSupportLeftBg})` }" />
    <Container class="tech-support__wrap">
      <div class="tech-support--left">
        <h3 v-html="t('techSupport.titleHtml')" />
        <div class="text-additional" v-html="t('techSupport.textHtml')" />
      </div>
      <div class="tech-support--right">
        <div v-for="item in featuresList" :key="item.title" class="tech-support__card">
          <img class="tech-support__card-icon" :src="item.icon" alt="" />
          <div class="tech-support__card-title">{{ item.title }}</div>
          <div class="tech-support__card-description" v-html="item.textHtml" />
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
    height: 920px;
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
      height: 750px;
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
    letter-spacing: -1.5px;
    font-weight: 500;

    @include down(sm) {
      font-size: 30px;
      line-height: 1.1;
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
      0 13.62px 24px -2.72px rgba(224, 224, 224, 0.25),
      0 5.45px 36.5px -2.72px rgba(224, 224, 224, 0.25);
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
        font-size: 20px;
        line-height: 1.2;
        margin: 10px 0;
      }
    }

    &-description {
      color: #65758A;
      font-size: 17px;
      letter-spacing: -0.68px;
      line-height: 24px;

      @include down(sm) {
        font-size: 16px;
        line-height: 22px;
      }
    }
  }

  .text-additional {
    font-size: 18px;
    line-height: 27px;
    letter-spacing: -0.54px;

    @include down(sm) {
      font-size: 16px;
      line-height: 24px;
      text-align: center;

      :deep(br) {
        display: none;
      }
    }
  }
}
</style>
