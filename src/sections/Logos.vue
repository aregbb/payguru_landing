<script setup lang="ts">
import Amazon from "@/assets/img/amazon.svg"
import Bkash from "@/assets/img/bkash.svg"
import Cloudflare from "@/assets/img/cloudflare.svg"
import Easypaisa from "@/assets/img/easypaisa.svg"
import Google from "@/assets/img/google.svg"
import Humo from "@/assets/img/humo.svg"
import MasterCard from "@/assets/img/mastercard.svg"
import Mercado from "@/assets/img/mercado.svg"
import Papara from "@/assets/img/papara.svg"
import Upi from "@/assets/img/upi.svg"
import Viza from "@/assets/img/visa.svg"

import { ref } from "vue";
import Container from "@/components/Container.vue";

const firstRowItems = ref([
  {
    url: Viza,
    index: 1
  },
  {
    url: MasterCard,
    index: 2
  },
  {
    url: Mercado,
    index: 3
  },
  {
    url: Google,
    index: 4
  },
  {
    url: Cloudflare,
    index: 5
  },
  {
    url: Easypaisa,
    index: 6
  },
])

const secondRowItems = ref([
  {
    url: Humo,
    index: 1
  },
  {
    url: Bkash,
    index: 2
  },
  {
    url: Papara,
    index: 3
  },
  {
    url: Amazon,
    index: 4
  },
  {
    url: Upi,
    index: 5
  },
])
</script>

<template>
  <Container>
    <section class="logos">
      <div class="logos__first-row">
        <img v-for="logo in firstRowItems" alt="logo" :key="logo.index" class="logos__img" :src="logo.url" />
      </div>
      <div class="logos__second-row">
        <img v-for="logo in secondRowItems" alt="logo" :key="logo.index" class="logos__img" :src="logo.url" />
      </div>
    </section>
  </Container>
</template>

<style lang="scss" scoped>
.logos {
  padding: 61.5px 0;
  display: flex;
  flex-direction: column;
  gap: 60px;
  align-items: center;

  @include down(md) {
    gap: 30px;
    padding: 40px 0;
  }

  @include between(md, lg) {
    gap: 30px;
  }

  &__first-row, &__second-row {
    display: flex;
    align-items: center;
    gap: 40px;

    @include down(md) {
      flex-wrap: wrap;
      align-items: center;
      justify-content: center;
      gap: 20px;
      row-gap: 30px;
    }

    @include between(md, xl) {
      flex-wrap: wrap;
      align-self: center;
      justify-content: center;
      gap: 20px;
      row-gap: 20px;
    }
  }
}
</style>
