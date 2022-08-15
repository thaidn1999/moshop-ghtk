<script setup>
import { defineProps } from "vue";
const { headerInfo } = defineProps(["headerInfo"]);
</script>
<template>
  <div class="head flex justify-between mb-5">
    <div class="head-back">
      <a class="w-5" href="#" onclick="history.back()">
        <img
          class="mt-3.5 pt-px"
          src="https://moshop.com.vn/_nuxt/img/caret-left-green.977777e.svg"
          alt=""
        />
      </a>
    </div>
    <div class="head-infor">
      <div class="infor-avatar mb-2.5 flex justify-center">
        <img
          name="avatar"
          class="avatar w-32 h-32 rounded-full object-cover ra"
          v-bind:src="headerInfo?.avatar"
          alt=""
        />
      </div>
      <div class="font-bold text-xl mb-2.5 flex justify-center">
        <h3 class="infor-name" name="fullname">{{ headerInfo?.fullname }}</h3>
        <p class="px-2">/</p>
        <h3 class="infor-name" name="tel">{{ headerInfo?.tel }}</h3>
      </div>
      <div class="infor-status flex justify-center items-center">
        <div class="infor-status-title mr-px pr-6 font-bold">Trạng thái</div>
        <div class="staff-status">
          <button class="btn-staff-status border-[#28a745] flex justify-center">
            Đang làm việc
            <i>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-3.5 mt-1 ml-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </i>
          </button>
        </div>
      </div>
    </div>
    <div class="head-action mt-3.5 pt-px">
      <button class="edit-button text-common-green text-sm">Sửa</button>
    </div>
  </div>
</template>
<style scoped>
.avatar {
  object-fit: cover;
}
.btn-staff-status {
  padding: 4px 18px;
  margin: 0px;
  border: 1px solid;
  border-radius: 20px;
  background-color: white;
}
.edit-button {
  padding: 7px 52px;
  margin: 0px;
  background-color: white;
  border: 2px solid #28a745;
  border-radius: 20px;
  font-weight: 600;
}
.edit-button:hover {
  background-color: #28a745;
  color: white;
}
.edit-button:focus {
  border: 4px soild #93d3a2;
}
</style>
