<script setup>
import { ref } from "vue";
import Navbar from "../components/header/Navbar.vue";
const isClose = ref(false);
const close = () => {
  isClose.value = !isClose.value;
};
</script>
<template>
  <Navbar class="absolute w-full h-full" />
  <div
    v-if="!isClose"
    class="fixed top-0 left-0 z-[1000] w-full h-full overflow-x-hidden overflow-y-auto outline-0 bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="z-[1050] w-[400px] text-base flex flex-col justify-center h-full mx-auto modal-md modal-dialog-centered modal-dialog-scrollable"
    >
      <div
        class="relative flex flex-col w-full bg-white rounded-md outline-0 text-center pt-[10px] px-[10px]"
      >
        <div>
          <div class="font-medium mb-[5px]">Oops!!!</div>
          <div class="mb-[10px] flex justify-center items-center">
            <img src="../assets/images/error_icon.png" />
          </div>
          <div class="text-sm text-black mb-[20px]">
            Nhân viên không tồn tại
          </div>
        </div>
        <footer class="p-[10px]">
          <button
            @click="close"
            class="bg-moshop-color text-white rounded-md h-10 w-full font-medium"
          >
            Đóng
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>
