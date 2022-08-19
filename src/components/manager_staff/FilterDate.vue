<script setup>
import {
  startOfToday,
  format,
  startOfWeek,
  endOfWeek,
  startOfMonth,
  endOfMonth,
} from "date-fns";
import { ref } from "vue";
import ModalKpiStaff from "./ModalKpiStaff.vue";
import ModalFilterDate from "./ModalFilterDate.vue";
import { useStaffStore } from "../../stores/staff";
const date = format(startOfToday(new Date()), "yyyy-MM-dd");
const startWeek = format(startOfWeek(new Date()), "yyyy-MM-dd");
const endWeek = format(endOfWeek(new Date()), "yyyy-MM-dd");
const startMonth = format(startOfMonth(new Date()), "yyyy-MM-dd");
const endMonth = format(endOfMonth(new Date()), "yyyy-MM-dd");
const useStaff = useStaffStore();
const isFilterDate = ref(false);
const isModalKpiStaff = ref(false);
const titleBtn = ref("today");
const getKpiStaff = () => {
  isModalKpiStaff.value = !isModalKpiStaff.value;
  useStaff.getKpiStaff();
};
const handleDate = async (title) => {
  titleBtn.value = title;
  if (title === "today") {
    useStaff.clearStaff();
    await useStaff.getStaff(date, date);
  }
  if (title === "week") {
    useStaff.clearStaff();
    await useStaff.getStaff(startWeek, endWeek);
  }
  if (title === "month") {
    useStaff.clearStaff();
    await useStaff.getStaff(startMonth, endMonth);
  }
};
const changeTitle = () => {
  titleBtn.value = "option";
};
const closeFilter = () => {
  isFilterDate.value = false;
};
const closeModal = () => {
  isModalKpiStaff.value = false;
};
</script>
<template>
  <div
    class="page-header mb-[15px] grid grid-cols-1 md:grid-cols-3 gap-x-[15px]"
  >
    <div class="left-content md:col-span-2">
      <div class="info flex items-center">
        <h2 class="info__title text-[40px] font-bold mr-7 mb-2 leading-[1.2]">
          Quản lý nhân viên
        </h2>
        <div class="live flex justify-center items-center relative italic">
          <div class="ringring1"></div>
          <div class="circle"></div>
          <div class="ringring2"></div>
        </div>
        <div class="ml-4 lg:text-base italic">
          Live (cập nhật {{ useStaff.currentDate }} )
        </div>
      </div>
      <div class="option-date">
        <div class="filter lg:text-base">
          <button
            class="btn-filter"
            :class="titleBtn === 'today' ? 'btn-success' : ''"
            @click="handleDate('today')"
          >
            Hôm nay
          </button>
          <button
            class="btn-filter"
            :class="titleBtn === 'week' ? 'btn-success' : ''"
            @click="handleDate('week')"
          >
            Tuần này
          </button>
          <button
            class="btn-filter"
            :class="titleBtn === 'month' ? 'btn-success' : ''"
            @click="handleDate('month')"
          >
            Tháng này
          </button>
          <button
            class="btn-filter"
            :class="titleBtn === 'option' ? 'btn-success' : ''"
            @click="
              isFilterDate = !isFilterDate;
              changeTitle;
            "
          >
            Tùy chọn
          </button>
        </div>
        <div v-if="isFilterDate">
          <ModalFilterDate
            @closeFilter="closeFilter"
            @changeTitle="changeTitle"
          />
        </div>
      </div>
    </div>
    <div class="action flex flex-col flex-wrap items-end">
      <button
        @click="getKpiStaff"
        class="btn-filter btn-success btn-utility hover:bg-[#218838] hover:border-[#1e7e34]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>KPIs nhân viên</span>
      </button>
      <ModalKpiStaff v-show="isModalKpiStaff" @closeModal="closeModal" />
      <RouterLink to="/create">
        <button
          class="btn-filter btn-success btn-utility hover:bg-[#218838] hover:border-[#1e7e34]"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 mr-3"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
          <span>Thêm nhân viên</span>
        </button>
      </RouterLink>
    </div>
  </div>
</template>
<style scoped>
.btn-filter {
  padding: 4px 20px;
  margin-bottom: 10px;
  margin-right: 15px;
  background: #efefef;
  color: #069255;
}
.btn-success {
  background-color: #069255;
  color: white;
}
.btn-utility {
  font-weight: 500;
  border-radius: 18px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  width: 176px;
  font-size: 14px;
  margin-right: 0;
}
.circle {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 500px;
}
.ringring2 {
  border: 2px solid red;
  border-radius: 30px;
  height: 26px;
  width: 26px;
  position: absolute;
  animation: pulsate 3s ease-out infinite;
  opacity: 0;
}
.ringring1 {
  border: 2px solid red;
  border-radius: 30px;
  height: 18px;
  width: 18px;
  position: absolute;
  animation: pulsate 3s ease-out infinite;
  opacity: 0;
}
@keyframes pulsate {
  0% {
    transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1.1, 1.1);
    opacity: 0;
  }
}
</style>
