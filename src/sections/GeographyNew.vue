<script setup lang="ts">
import { computed, ref } from "vue";
import { useI18n } from "vue-i18n";
import { ChevronRightIcon } from "@heroicons/vue/24/solid";

import geoBg from "@/assets/img/geoBg.webp";
import GeographyBg from "@/assets/img/geographyBg.webp";
import Button from "@/components/Button.vue";
import Container from "@/components/Container.vue";
import ContactModal from "@/components/modals/ContactModal.vue";

const isContactModalVisible = ref(false);
const { tm, t } = useI18n();

const bullets = computed(() => tm("geographyNew.bullets") as Array<{ title: string; textHtml: string }>);
</script>

<template>
  <section class="geography section-padding" :style="{ '--geo-bg': `url(${geoBg})` }">
    <Container>
      <h2>{{ t("geographyNew.title") }}</h2>
      <div class="geography__text" v-html="t('geographyNew.textHtml')" />
      <div class="geography__content">
        <div class="geography__content-left" :style="{ backgroundImage: `url(${GeographyBg})` }" />
        <div class="geography__content-right">
          <h3>{{ t("geographyNew.coverageTitle") }}</h3>
          <div class="geography__content-text" v-html="t('geographyNew.coverageTextHtml')" />
          <ul class="geography__list">
            <li v-for="item in bullets" :key="item.title">
              <strong>{{ item.title }} </strong>
              <span v-html="item.textHtml" />
            </li>
          </ul>
          <Button variant="blue" class="geography__action" @click="isContactModalVisible = true">
            <div class="flex items-end">
              <span>{{ t("actions.expertConsultation") }}</span>
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
  background: #0B1024;
  color: #B1C3DB;
  position: relative;
  padding-bottom: 157px;
  padding-top: 81px;

  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: var(--geo-bg);
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    opacity: 0.1;
    pointer-events: none;
    z-index: 0;
  }

  > * {
    position: relative;
    z-index: 1;
  }

  @include down(lg) {
    padding-top: 60px;
    padding-bottom: 60px;
  }

  @include down(sm) {
    padding-top: 72px;
    padding-bottom: 72px;
    overflow-x: hidden;
  }

  @include between(lg, xl) {
    padding-bottom: 80px;
    padding-top: 80px;
  }

  h2 {
    text-align: center;
    color: #FFFFFF;
    font-size: 62px;
    line-height: 60px;
    letter-spacing: -2.48px;
    font-weight: 500;

    @include down(sm) {
      font-size: 30px;
      line-height: 1.1;
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
      margin-top: 32px;
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
    font-size: 21px;
    letter-spacing: -0.96px;
    color: #B1C3DB;

    @include down(md) {
      font-size: 17px;
      line-height: 24px;
      margin-top: 30px;
      letter-spacing: -0.5px;
      padding-left: 0;

      :deep(br) {
        display: none;
      }
    }

    @include between(sm, xl) {
      margin-top: 16px;
      font-size: 22px;

      :deep(br) {
        display: none;
      }
    }
  }

  h3 {
    color: #FFFFFF;
    font-size: 40px;
    letter-spacing: -1.6px;
    margin-top: 42px;

    @include down(sm) {
      font-size: 24px;
      line-height: 1.2;
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

        :deep(br) {
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
        border-radius: 50%;
      }
    }
  }

  &__content {
    display: flex;
    margin-top: 70px;
    position: relative;
    justify-content: space-between;

    @include down(md) {
      flex-direction: column;
      margin-top: 40px;
    }

    @include down(sm) {
      margin-top: 56px;
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
      color: #B1C3DB;

      @include down(sm) {
        font-size: 18px;
        text-align: center;
        margin-top: 16px;
        line-height: 24px;

        :deep(br) {
          display: none;
        }
      }

      @include between(sm, xl) {
        margin-top: 16px;
      }
    }

    &-right {
      margin-left: auto;

      @include between(lg, xl) {
        max-width: 550px;
      }

      @include between(md, lg) {
        max-width: 380px;
      }

      @include down(md) {
        width: fit-content;
        margin: 380px auto 0;
        display: flex;
        flex-direction: column;
      }

      @include down(sm) {
        width: 100%;
        margin: 300px auto 0;
      }
    }

    &-left {
      position: absolute;
      width: 700px;
      height: 600px;
      left: -50px;
      top: -80px;
      background-size: contain;
      background-repeat: no-repeat;
      background-position: center;

      @include between(md, lg) {
        left: -40px;
        top: 0;
        width: 380px;
        margin: 0 auto;
        height: 320px;
      }

      @include down(md) {
        left: 50%;
        transform: translateX(-50%);
        top: -60px;
        width: 520px;
        height: 430px;
      }

      @include down(sm) {
        top: -20px;
        width: 360px;
        height: 300px;
      }

      @include between(lg, xl) {
        width: 55%;
        left: -30px;
        top: -50px;
        height: 420px;
      }
    }
  }
}
</style>
