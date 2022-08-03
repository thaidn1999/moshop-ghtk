<script setup>
import { RouterLink, RouterView } from "vue-router";
import Test from "./components/TestComponent.vue";
import TestComponent from "./components/TestComponent.vue";
</script>

<template>
  <header>
    <TestComponent />
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>
  <div>
    <p>Thais</p>
  </div>

  <RouterView />
</template>

<style scoped></style>
