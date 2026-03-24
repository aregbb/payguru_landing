<script setup lang="ts">
import { computed, onBeforeMount } from "vue";
import { useI18n } from "vue-i18n";
import { useRoute, useRouter } from "vue-router";

import Logo from "@/assets/img/logo-blue.svg";
import LocaleSwitcher from "@/components/LocaleSwitcher.vue";
import { trackLinkClick } from "@/lib/analytics";

const route = useRoute();
const router = useRouter();
const { t } = useI18n();

function setTab(tab: "privacy" | "terms") {
  router.replace({ hash: `#${tab}` });
}

const activeTab = computed<"privacy" | "terms">(() => {
  const hash = (route.hash || "").replace("#", "");
  return hash === "privacy" ? "privacy" : "terms";
});

const title = computed(() => (
  activeTab.value === "privacy"
    ? t("legal.privacy.title")
    : t("legal.terms.title")
));

const contentHtml = computed(() => (
  activeTab.value === "privacy"
    ? t("legal.privacy.contentHtml")
    : t("legal.terms.contentHtml")
));

const downloadHref = computed(() => (
  activeTab.value === "privacy" ? "/static/docs/Privacy.docx" : "/static/docs/Terms.docx"
));

const downloadLabel = computed(() => (
  activeTab.value === "privacy"
    ? t("legal.downloads.privacy")
    : t("legal.downloads.terms")
));

onBeforeMount(() => {
  if (!route.hash) {
    router.replace({ hash: "#terms" });
  }
});

function trackLegalDownload(linkId: string, linkText: string, linkUrl: string) {
  trackLinkClick({
    link_id: linkId,
    link_text: linkText,
    link_url: linkUrl,
    link_location: "legal_center",
  });
}

const onDownload = () => {
  trackLegalDownload(
    activeTab.value === "privacy" ? "legal_privacy_download" : "legal_terms_download",
    downloadLabel.value,
    downloadHref.value,
  );
};
</script>

<template>
  <div class="privacy-page">
    <header class="privacy-page__header header">
      <div class="privacy-page__container header__content">
        <router-link :to="'/'" class="header__logo">
          <img :src="Logo" alt="" />
          <span class="header__logo-text">{{ t("common.brandName") }}</span>
        </router-link>
        <div class="header__actions">
          <div class="header__text">{{ t("legal.center") }}</div>
          <LocaleSwitcher />
        </div>
      </div>
    </header>
    <section class="privacy-page__content-wrap">
      <div class="privacy-page__container">
        <div class="privacy-page__content">
          <ul class="privacy-page__content-left">
            <li class="tab" :class="{ 'tab--active': activeTab === 'terms' }" @click="setTab('terms')">
              {{ t("legal.tabs.terms") }}
            </li>
            <li class="tab" :class="{ 'tab--active': activeTab === 'privacy' }" @click="setTab('privacy')">
              {{ t("legal.tabs.privacy") }}
            </li>
          </ul>
          <div class="privacy-page__content-right">
            <div class="privacy-page__content-header flex justify-between items-baseline">
              <h1>{{ title }}</h1>
              <a
                :href="downloadHref"
                download
                class="btn-primary"
                @click="onDownload"
              >
                {{ t("actions.download") }}
              </a>
            </div>
            <div v-html="contentHtml" />
          </div>
        </div>
      </div>
    </section>
    <footer>
      <div class="privacy-page__container">
        {{ t("common.copyright") }}
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
.privacy-page {
  a {
    color: #3888c2;
  }

  &__container {
    width: 90%;
    margin: 0 auto;
    position: relative;

    @include down(md) {
      width: 85%;
      margin: 0 auto;
    }
  }

  .header {
    padding: 31.5px 0;
    border-bottom: 1px solid rgb(56, 136, 194);
    min-height: 133.5px;
    display: flex;
    align-items: center;

    &__content {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 24px;

      @include down(md) {
        flex-direction: column;
      }
    }

    &__logo {
      display: flex;
      align-items: center;
      color: #363FF9;
      gap: 9px;

      img {
        width: 60px;

        @include down(sm) {
          width: 34px;
        }
      }

      &-text {
        font-weight: 500;
        line-height: 60px;
        font-size: 50px;

        @include down(sm) {
          font-size: 28px;
        }
      }
    }

    &__actions {
      display: flex;
      align-items: center;
      gap: 16px;

      @include down(sm) {
        flex-direction: column;
      }
    }

    &__text {
      font-size: 32px;
      color: rgb(56, 136, 194);

      @include down(sm) {
        font-size: 28px;
      }
    }
  }

  h1 {
    font-size: 30px;
    font-weight: 400;
    color: rgb(93, 100, 111);
    line-height: 1;
    margin-top: 0;

    @include down(sm) {
      font-size: 28px;
    }
  }

  :deep(h4) {
    margin: 10px 0;
    font-size: 14px;
    text-transform: uppercase;
  }

  :deep(.chapter) {
    line-height: 28px;
  }

  &__content {
    padding-top: 40px;
    display: flex;
    gap: 45px;

    @include down(md) {
      flex-direction: column;
      gap: 16px;
      padding-top: 16px;
    }

    &-header {
      @include down(md) {
        flex-direction: column;
      }
    }

    :deep(ul) {
      margin: 10px;
      padding: 0 20px 0;
    }

    :deep(p) {
      font-size: 14px;
      color: rgb(67, 71, 78);
    }

    &-left {
      width: 250px;
      padding: 0 !important;
      list-style: none;
      margin: 0 !important;

      @include down(md) {
        display: flex;
        width: 100%;
        padding: 0 !important;
        gap: 20px;
        margin: 0 !important;
      }

      .tab {
        color: #3888c2;
        font-size: 15px;
        line-height: 24px;
        padding: 5px 0;

        &--active {
          color: #16354b;
          font-weight: bold;
        }

        &:hover {
          cursor: pointer;
          text-decoration: underline;
        }
      }
    }

    &-right {
      width: fit-content;
    }
  }

  footer {
    margin-top: 100px;
    padding: 13px 0 16px 0;
    border-top: 1px solid #d2dde5;
    text-align: right;
    font-size: 12px;

    @include down(md) {
      text-align: center;
    }
  }
}
</style>
