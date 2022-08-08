<script setup>
import { RouterView } from "vue-router";
</script>

<template>
  <div class="wrapper">
    <!-- <button v-tooltip.left="'You have new messages.'">AAAA</button> -->
    <RouterView />
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
</style>
