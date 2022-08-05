<script setup>
import { RouterView, RouterLink } from "vue-router";
import Navbar from "./components/header/Navbar.vue";
</script>

<template>
  <div class="wrapper">
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
