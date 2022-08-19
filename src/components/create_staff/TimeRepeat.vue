<script setup>
import { ref, watchEffect } from "vue";
import { useToast } from "vue-toast-notification";
import { useInfoStaffStore } from "../../stores/info-staff";
const useInfoStaff = useInfoStaffStore();
const $toast = useToast();
const repeatsWait = ref([]);
const dateOptions = [
  "Thứ 2",
  "Thứ 3",
  "Thứ 4",
  "Thứ 5",
  "Thứ 6",
  "Thứ 7",
  "Chủ Nhật",
];
// watchEffect(() => {
//   if (start_time.value > end_time.value) {
//     $toast.open({
//       message: "Thời gian bắt đầu phải nhỏ hơn thời gian kết thúc!",
//       type: "error",
//       position: "bottom",
//       duration: 3000,
//     });
//     return;
//   }
// });
const handleTimeRepeats = (handleVal) => {
  repeatsWait.value = handleVal;
  useInfoStaff.formInfo.repeats = Object.keys(repeatsWait.value);
  console.log(useInfoStaff.formInfo.repeats);
};
</script>

<template>
  <div class="mb-4 text-base text-black">
    <a-space>
      <div class="xl:mr-3">1. Từ</div>
      <a-time-picker
        v-model:value="useInfoStaff.formInfo.start_time"
        value-format="HH:mm:ss"
        placeholder="Chọn thời gian"
      />
      <div class="xl:mx-3">đến</div>
      <a-time-picker
        v-model:value="useInfoStaff.formInfo.end_time"
        placeholder="Chọn thời gian"
        value-format="HH:mm:ss"
      />
      <div class="xl:ml-16 text-[#eb5757] cursor-pointer">Xóa</div>
    </a-space>
    <a-checkbox-group
      v-model:value="repeatsWait"
      :options="dateOptions"
      @change="handleTimeRepeats"
      name="checkboxgroup"
    />
  </div>
</template>
<style scoped>
@media screen and (min-width: 1420px) {
  :deep(.ant-picker) {
    width: 175px !important;
  }
}
@media screen and (min-width: 1280px) and (max-width: 1419.99px) {
  :deep(.ant-picker) {
    width: 160px !important;
  }
}

:deep(.ant-checkbox-group) {
  flex-direction: row !important;
  margin-top: 20px;
  flex-wrap: wrap;
}
:deep(.ant-checkbox-wrapper.ant-checkbox-group-item span:nth-child(2)) {
  font-size: 14px !important;
  color: #069255;
  border: 1px solid #069255;
  display: inline-table;
  flex-wrap: wrap;
  padding: 2px 8px;
  cursor: pointer;
  border-radius: 20px;
  margin-right: 5px;
}
:deep(.ant-checkbox-wrapper-checked span:nth-child(2)) {
  background-color: #069255;
  color: white !important;
}
:deep(.ant-checkbox) {
  display: none;
}
</style>
