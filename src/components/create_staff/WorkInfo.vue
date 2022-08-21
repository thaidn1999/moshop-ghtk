<script setup>
import { onMounted, ref } from "vue";
import { filterOption } from "../../helpers/utils";
import { useInfoStaffStore } from "../../stores/info-staff";
import TimeRepeat from "./TimeRepeat.vue";
const useInfoStaff = useInfoStaffStore();
const handleChangeAddress = (value) => {
  useInfoStaff.formInfo.work_address = value;
};
const addTimeRepeat = () => {
  let id = 1;
  if (timeWorking.value.length > 1) {
    const lastIndex = timeWorking.value[timeWorking.value.length - 1];
    id = lastIndex.id + 1;
  }
  timeWorking.value.push({
    id,
    start_time: null,
    end_time: null,
    repeatsWait: [],
  });
};
onMounted(() => {
  useInfoStaff.getPages();
});
const filterAddress = (input, option) => filterOption(input, option.content);
const isChecked = ref(false);
const handleChange = (checkedScreen) => {
  useInfoStaff.formInfo.screens = checkedScreen;
  if (useInfoStaff.formInfo.screens.includes("sale")) {
    isChecked.value = true;
  } else {
    isChecked.value = false;
  }
};
const handleChangePage = (checkedPage) => {
  useInfoStaff.formInfo.pages = checkedPage;
};
const onDelete = (index) => {
  timeWorking.value.splice(index, 1);
};
const timeWorking = ref([]);
const onChangeTime = (index, timeWait) => {
  timeWorking.value[index] = timeWait;
};
</script>
<template>
  <div class="job-info mb-5">
    <fieldset style="padding-top: 36px" class="wrap-form text-base text-black">
      <legend class="form-title">Thông tin công việc</legend>
      <a-form :colon="false" :model="useInfoStaff.formInfo">
        <a-form-item label="Ngày bắt đầu làm việc" name="jobTimeStart">
          <a-date-picker
            v-model:value="useInfoStaff.formInfo.work_first_date"
            placeholder="Chọn ngày bắt đầu làm việc"
          />
        </a-form-item>
        <a-form-item name="jobAddress" label="Nơi làm việc">
          <a-select
            v-model:value="useInfoStaff.formInfo.work_address"
            show-search
            allowClear
            placeholder="Chọn nơi làm việc"
            :filter-option="filterAddress"
            style="max-width: 500px"
            @change="handleChangeAddress"
          >
            <a-select-option
              v-for="workAddress in useInfoStaff.listAddress"
              :key="workAddress.id"
              :value="workAddress.id"
              :content="workAddress.address"
            >
              {{ workAddress.address }}
            </a-select-option>
          </a-select>
        </a-form-item>
        <a-form-item>
          <!-- work - time -->
          <div class="workingTime">
            <div class="workingTime__title font-medium text-base mb-6">
              Thời gian làm việc
            </div>
            <template v-if="timeWorking.length">
              <TimeRepeat
                v-for="(time, index) in timeWorking"
                :key="time.id"
                :time="time"
                :index="index"
                @onDelete="onDelete"
                @onChangeTime="onChangeTime"
              />
            </template>
            <div class="workingTime__action">
              <button
                @click="addTimeRepeat"
                class="flex items-center rounded-sm text-[#28a745] border-[#28a745] hover:text-white hover:bg-[#28a745] hover:border-[#28a745] font-medium py-2 px-[22px]"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-5 w-5"
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
                Thêm thời gian
              </button>
            </div>
          </div>
        </a-form-item>
        <a-form-item>
          <div class="workingPage">
            <div class="workingPage__title font-medium text-base mb-5">
              Màn hình được sử dụng
            </div>
            <a-checkbox-group @change="handleChange" name="checkboxgroup">
              <a-checkbox value="sale"> Chats chốt đơn </a-checkbox>
              <a-checkbox-group
                v-show="isChecked"
                class="listPages"
                @change="handleChangePage"
                name="checkboxgroup2"
              >
                <a-checkbox
                  v-for="(page, index) in useInfoStaff.listPages"
                  :key="index"
                  :value="page.pid"
                >
                  <div class="flex items-center">
                    <img
                      :src="page.avatar"
                      alt="avatar"
                      class="w-[24px] h-[24px] rounded-[50%] mr-2"
                    />
                    <span>{{ page.name }}</span>
                  </div>
                </a-checkbox>
              </a-checkbox-group>
              <a-checkbox value="chat_ops"> Chats vận hành</a-checkbox>
              <a-checkbox value="statistic">
                Tổng quan (Tổng quan shop)
              </a-checkbox>
              <a-checkbox value="order">
                Đơn hàng (Quản lý và đăng đơn GHTK)
              </a-checkbox>
              <a-checkbox value="customer">
                Khách hàng (Quản lý và chăm sóc khách hàng)</a-checkbox
              >
              <a-checkbox value="product">
                Nhân viên (Quản lý nhân viên)
              </a-checkbox>
              <a-checkbox value="staff">
                Kho và sản phẩm (Quản lý sản phẩm và xuất nhập)
              </a-checkbox>
            </a-checkbox-group>
          </div>
        </a-form-item>
      </a-form>
    </fieldset>
  </div>
</template>
<style scoped>
.wrap-form {
  padding: 18px 30px 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  box-shadow: 0 1px 3px rgb(0 0 0 / 25%);
  position: relative;
}
.form-title {
  display: block;
  width: auto;
  padding: 6px 20px;
  margin-bottom: 0;
  font-weight: 500;
  font-size: 16px;
  border: 1px solid #ccc;
  background: #fff;
}
:deep(.ant-form-item-label > label) {
  width: 200px;
  text-align: left;
  font-size: 1rem;
  font-weight: 500;
}
:deep(.ant-picker) {
  padding: 0.375rem 0.75rem;
  width: 100%;
}
:deep(.ant-checkbox-wrapper + .ant-checkbox-wrapper) {
  margin-left: 0;
}
:deep(.ant-checkbox-group) {
  display: flex;
  flex-direction: column;
}
:deep(.ant-checkbox-wrapper) {
  margin-bottom: 14px;
  font-size: 1rem;
  align-items: center;
}
:deep(.ant-checkbox + span) {
  height: 18px;
}
:deep(.ant-checkbox-inner) {
  width: 24px;
  height: 24px;
  border-color: #069255;
  border-radius: 5px;
}
:deep(.ant-checkbox-wrapper:hover .ant-checkbox-inner, .ant-checkbox:hover
    .ant-checkbox-inner, .ant-checkbox-input:focus + .ant-checkbox-inner) {
  border-color: #069255;
  border-radius: 5px;
}
:deep(.ant-checkbox-checked .ant-checkbox-inner) {
  background-color: #069255;
  border-color: #069255;
}
:deep(.ant-checkbox-checked::after) {
  border-color: #069255;
  border-radius: 5px;
}
:deep(.ant-checkbox-inner::after) {
  top: 44%;
  left: 27%;
  width: 7px;
  height: 12px;
}
.listPages {
  margin-left: 30px;
}
</style>
