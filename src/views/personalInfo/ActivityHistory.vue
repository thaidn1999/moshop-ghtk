<script setup>
import { format } from "date-fns";
import viLocale from "date-fns/locale/vi";
const { history, AllDate } = defineProps(["history", "AllDate"]);
import { differenceInCalendarDays, fromUnixTime } from "date-fns";
const result = fromUnixTime(1330515905);
function currentDateTime(datePass) {
  const current = new Date(datePass);
  const per = Math.floor((new Date() - current) / (1000 * 60 * 60 * 24));
  const day =
    current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
  const month =
    current.getMonth() < 10 ? `0${current.getMonth() + 1}` : current.getMonth();
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
    <div class="filter flex flex-row mb-3">
      <button>Hôm nay</button>
      <button>Tuần này</button>
      <button>Tháng này</button>
      <button>Tùy chọn</button>
    </div>
    <div class="logList">
      <div class="logList-perDay" v-for="perDay in AllDate">
        <div class="perDay-title mb-[15px] font-medium">
          {{ differenceInCalendarDays(new Date(), new Date(perDay[0].time)) }}
          ngày trước -
          {{ format(new Date(perDay[0].time), " EEEE", { locale: viLocale }) }},
          ngày
          {{ format(new Date(perDay[0].time), "dd/MM/yyyy") }}
        </div>
        <div
          class="activity mb-[15px] flex justify-between"
          v-for="day in perDay"
        >
          <div class="activity-time w-[210px]">
            {{ currentDateTime(day.time).dateTime }}
          </div>
          <div class="activity-content text-left">
            {{ day.description }}
          </div>
        </div>
      </div>
    </div>
  </fieldset>
</template>
<style scoped>
@import "./css/button.css";
@import "./css/fieldset.css";
.logList {
  position: relative;
  max-height: 400px;
  overflow: auto;
}
.activity-content {
  width: calc(100% - 210px);
}
</style>
