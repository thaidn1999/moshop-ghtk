<script setup>
import { onMounted, ref } from "vue";
import { useInfoStaffStore } from "../../stores/info-staff";
const useInfoStaff = useInfoStaffStore();
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
const propTime = defineProps(["time", "index"]);
const emit = defineEmits(["onDelete"]);
const deleteTime = () => {
  emit("onDelete", propTime.index);
};
const handleTimeRepeats = (handleVal) => {
  repeatsWait.value = handleVal;
  const arr = Object.keys(repeatsWait.value);
  useInfoStaff.formInfo.repeats = arr.map(Number);
};

const timeWait = ref({
  start_time: null,
  end_time: null,
  repeatsWait: [],
});
const onInput = () => {
  emit("onChangeTime", propTime.index, timeWait);
};
onMounted(() => {
  timeWait.value = propTime.time;
});
</script>

<template>
  <div class="mb-4 text-base text-black">
    <a-space>
      <div class="xl:mr-3">{{ propTime.index + 1 }}. Từ</div>
      <a-time-picker
        v-model:value="timeWait.start_time"
        value-format="HH:mm:ss"
        placeholder="Chọn thời gian"
        @input="onInput"
      />
      <div class="xl:mx-3">đến</div>
      <a-time-picker
        v-model:value="timeWait.end_time"
        placeholder="Chọn thời gian"
        value-format="HH:mm:ss"
        @input="onInput"
      />
      <div class="xl:ml-16 text-[#eb5757] cursor-pointer" @click="deleteTime">
        Xóa
      </div>
    </a-space>
    <a-checkbox-group
      v-model:value="timeWait.repeatsWait"
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
