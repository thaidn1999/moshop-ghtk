<script setup>
import { ref } from "vue";
const { jobInfo, workAddress, pages } = defineProps([
  "jobInfo",
  "workAddress",
  "pages",
]);
const showPage = ref(true);
const numberDay = ref([0, 1, 2, 3, 4, 5, 6]);
const screens = ref([
  "sale",
  "chat_ops",
  "statistic",
  "order",
  "customer",
  "product",
  "staff",
]);
function mapNumberToDay(number) {
  switch (number) {
    case 0:
      return "Thứ 2";
    case 1:
      return "Thứ 3";
    case 2:
      return "Thứ 4";
    case 3:
      return "Thứ 5";
    case 4:
      return "Thứ 6";
    case 5:
      return "Thứ 7";
    case 6:
      return "Chủ nhật";
    default:
      return "Err";
  }
}
function mapScreen(item) {
  switch (item) {
    case "sale":
      return "Chat chốt đơn";
    case "chat_ops":
      return "Chat vận hành";
    case "statistic":
      return "Tổng quan";
    case "order":
      return "Đơn hàng";
    case "customer":
      return "Khách hàng";
    case "product":
      return "Kho sp";
    case "staff":
      return "Nhân viên";
  }
}
</script>
<template>
  <fieldset class="jobInfor">
    <legend>Thông tin công việc</legend>
    <div class="jobInfor-head mb-7">
      <div class="formInline mb-5 flex justify-between items-center">
        <label class="font-bold">Ngày bắt đầu làm việc</label>
        <div class="formInlin-inputBox bg-[#efefef] px-5 py-2">
          {{ jobInfo.created }}
        </div>
      </div>
      <div class="formInline mb-5 flex justify-between items-center">
        <label class="font-bold">Nơi làm việc</label>
        <div class="formInlin-inputBox bg-[#efefef] px-5 py-2">
          {{
            workAddress.find(function (element) {
              return element.id == jobInfo.work_address;
            })?.address
          }}
        </div>
      </div>
    </div>
    <div class="workingTime mb-5">
      <div class="workingTime-title mb-[25px] font-semibold">
        Thời gian làm việc
      </div>
      <div
        class="workingTime-box mb-[15px]"
        v-for="(time, index) in jobInfo.work_time_repeats"
      >
        <div class="workingTimeItem mb-5 flex items-center">
          <div class="mr-2.5">{{ index + 1 }}.</div>
          <div class="mr-5">Từ</div>
          <div class="workingTimeItem-input rounded flex items-center">
            <input
              type="text"
              name="date"
              class="bg-white outline-0"
              autocomplete="off"
              disabled="disabled"
              :value="time.start_time"
            />
            <i class="time-icon mr-2 w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-[#00000080]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </i>
          </div>
          <div class="mx-5">đến</div>
          <div class="workingTimeItem-input rounded flex items-center">
            <input
              type="text"
              name="date"
              class="bg-white outline-0"
              autocomplete="off"
              disabled="disabled"
              :value="time.end_time"
            />
            <i class="time-icon mr-2 w-4 h-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-4 w-4 text-[#00000080]"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
            </i>
          </div>
        </div>
        <div class="repeatDate flex justtify-start">
          <div v-for="n in numberDay">
            <div
              class="repeatDate-item"
              :class="{ dayActive: time?.repeats.includes(n) }"
            >
              {{ mapNumberToDay(n) }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pages">
      <div class="pages-title mb-5 font-bold">Màn hình được sử dụng</div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            v-model="showPage"
            :checked="jobInfo?.screens?.includes('sale')"
          />
          <span class="custom-checkmark"></span>
          <span>Chat chốt đơn</span>
        </label>
        <div class="pageBox" v-show="showPage" v-for="post of pages?.pages">
          <label class="checkbox-container items-center">
            <input
              class="page-checkbox"
              type="checkbox"
              disabled="disabled"
              :checked="
                jobInfo?.pages?.employee_pages?.find(
                  (employee_page) => employee_page.name === post.name
                )
              "
            />
            <span class="custom-checkmark"></span>
            <img class="rounded-full mr-2" v-bind:src="post.avatar" alt="" />
            <span>{{ post.name }}</span>
          </label>
        </div>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :checked="jobInfo?.screens?.includes('chat_ops')"
          />
          <span class="custom-checkmark"></span>
          <span>Chat vận hành</span>
        </label>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :checked="jobInfo?.screens?.includes('statistic')"
          />
          <span class="custom-checkmark"></span>
          <span>Tổng quan (Tổng quan shop)</span>
        </label>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :checked="jobInfo?.screens?.includes('order')"
          />
          <span class="custom-checkmark"></span>
          <span>Đơn hàng (Quản lý và đăng đơn GHTK)</span>
        </label>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :check="jobInfo?.screens?.includes('customer')"
          />
          <span class="custom-checkmark"></span>
          <span>Khách hàng (Quản lý và chăm sóc KH)</span>
        </label>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :checked="jobInfo?.screens?.includes('product')"
          />
          <span class="custom-checkmark"></span>
          <span>Kho và sản phẩn (Quản lý sản phẩm và xuất nhập)</span>
        </label>
      </div>
      <div class="screenBox">
        <label class="checkbox-container items-center">
          <input
            class="page-checkbox"
            type="checkbox"
            disabled="disabled"
            :checked="jobInfo?.screens?.includes('staff')"
          />
          <span class="custom-checkmark"></span>
          <span>Nhân viên (Quản lý nhân viên)</span>
        </label>
      </div>
    </div>
  </fieldset>
</template>
<style scoped>
@import "./css/fieldset.css";
@import "./css/inputPages.css";
.formInlin-inputBox {
  width: calc(100% - 200px);
  background-color: #efefef;
  border-radius: 4px;
}
.workingTimeItem-input {
  width: 175px;
  border: 1px solid #ced4da;
}
.workingTimeItem-input > input {
  width: 100%;
  padding: 6px 8px 6px 10px;
}
.repeatDate-item {
  padding: 2px 8px;
  margin: 0px 10px 5px 0px;
  background-color: white;
  color: #bdbdbd;
  border: 1px solid #bdbdbd;
  border-radius: 20px;
  font-size: 14px;
}
.dayActive {
  background-color: #06925594;
  color: #fff;
}
</style>
