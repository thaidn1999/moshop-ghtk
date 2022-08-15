<script setup>
import { defineProps } from "vue";
const { history } = defineProps(["history"]);
function currentDateTime(datePass) {
  const current = new Date(datePass);
  const per = Math.floor((new Date() - current) / (1000 * 60 * 60 * 24));
  // return per;
  const day =
    current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
  const month =
    current.getMonth() < 10 ? `0${current.getMonth()}` : current.getMonth();
  const year =
    current.getFullYear() < 10
      ? `0${current.getFullYear()}`
      : current.getFullYear();
  const h =
    current.getHours() < 10 ? `0${current.getHours()}` : current.getHours();
  const m =
    current.getMinutes() < 10
      ? `0${current.getMinutes()}`
      : current.getMinutes();
  const date = day + "/" + month + "/" + year;
  // (current.getMonth() + 1)
  const time = h + ":" + m;
  const dateTime = time + " " + date;
  return {
    dateTime,
    per,
  };
}
</script>
<template>
  <fieldset class="history">
    <legend>Lịch sử hoạt động</legend>
    <div class="filter flex flex-row">
      <button>Hôm nay</button>
      <button>Tuần này</button>
      <button>Tháng này</button>
      <button>Tùy chọn</button>
    </div>
    <div class="logList">
      <div class="logList-perDay" v-for="perDay in history">
        <div class="perDay-title">
          {{ currentDateTime(perDay.time).per }} ngày trước-
        </div>
        <div class="activity flex justify-between">
          <div class="activity-time">
            {{ currentDateTime(perDay.time).dateTime }}
          </div>
          <div class="activity-content text-left">
            {{ perDay.description }}
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<style scoped>
@import "./css/button.css";
@import "./css/fieldset.css";
</style>
