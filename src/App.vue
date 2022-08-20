<script setup>
import { RouterView, useRoute } from "vue-router";
import Navbar from "./components/header/Navbar.vue";

const route = useRoute();
</script>
<template>
  <div class="wrapper">
    <Navbar v-if="route.name !== 'login'" />
    <div class="main-content">
      <section class="page">
        <RouterView />
      </section>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  overflow: hidden;
  height: 100vh;
}
.main-content {
  overflow: auto;
  min-height: calc(100% - 48px);
}
.page {
  padding-top: 30px;
  padding-bottom: 20px;
}
</style>
