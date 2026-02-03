<script setup lang="ts">

</script>

<template>
  <a href="https://sigma.world/ru/summits/eurasia/" class="banner">
    Schedule a demo and see what we’re building. Meet us at SiGMA Eurasia in Dubai, February 9-11. <span style=" margin-left: 5px; text-decoration: underline"> See more.</span>
  </a>
</template>

<style scoped lang="scss">
.banner {
  transition: opacity .3s;
  animation: announcement-gradient 12s infinite;
  text-align: center;
  height: 46px;
  background-image: linear-gradient(270deg, #01b9f5, #4768fb 26.44%, #363ff9 51.44%, #4768fb 74.52%, #01b9f5);
  background-size: 400% 400%;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
@keyframes announcement-gradient {
  0% {
    background-position: 0;
  }
  50% {
    background-position: 100%;
  }
  100% {
    background-position: 0;
  }
}
</style>
