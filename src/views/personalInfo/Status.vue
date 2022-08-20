<script setup>
import { ref, reactive, defineProps } from "vue";
import { useRoute } from "vue-router";
import axios from "axios";
const route = useRoute();
const { headerInfo } = defineProps(["headerInfo"]);
console.log(headerInfo);
const statusShow = ref(false);
const statusWorking = reactive({
  0: "Nghỉ tạm thời",
  1: "Đang làm việc",
  2: "Đã nghỉ việc",
});
const isRerender = ref(false);
function changeStatusWorking(value) {
  axios
    .post(
      "https://x.ghtk.vn/api/v2/staff/set-status",
      {
        shop_user_id: route.params.id,
        status: value,
      },
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      }
    )
    .then((res) => {
      console.log(res);
      isRerender.value = !isRerender.value;
      location.reload();
    });
}
</script>
<template>
  <div class="dropdownStatus">
    <div class="dropdown">
      <button
        class="btn-staff-status border-[#28a745] flex justify-center"
        @click="statusShow = !statusShow"
        :class="
          headerInfo?.active === 2
            ? 'retired'
            : headerInfo?.active === 1
            ? 'active'
            : 'temporary'
        "
        name="cd-dropdown"
      >
        <span>{{ statusWorking[headerInfo.active] }}</span>
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

      <div class="dropdown-list" :class="statusShow ? 'block' : 'hidden'">
        <div>
          <div
            class="dropdownMenuStaff__item mb-5"
            @click="changeStatusWorking(1)"
          >
            <div class="dropdownMenuStaff__item--active">
              <img
                v-show="headerInfo?.active == 1"
                src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
              />
            </div>
            Đang làm việc
          </div>
          <div
            class="dropdownMenuStaff__item mb-5"
            @click="changeStatusWorking(0)"
          >
            <div class="dropdownMenuStaff__item--active">
              <img
                v-show="headerInfo?.active == 0"
                src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
              />
            </div>
            Nghỉ tạm thời
          </div>
          <div
            class="dropdownMenuStaff__item mb-5"
            @click="changeStatusWorking(2)"
          >
            <div class="dropdownMenuStaff__item--active">
              <img
                v-show="headerInfo?.active == 2"
                src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
              />
            </div>
            Đã nghỉ việc
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.dropdown {
  position: relative;
}
.dropdown-list {
  position: absolute;
  top: 100%;
  left: 0px;
  z-index: 100;
  float: left;
  background: #fff;
  box-shadow: 0 4px 20px #00000040;
  border-radius: 10px;
  min-width: 186px;
  padding: 20px 20px 0px 15px;
}
.dropdown-list img {
  z-index: -1;
}
.btn-staff-status {
  padding: 4px 18px;
  margin: 0px;
  border: 1px solid;
  border-radius: 20px;
  background-color: white;
}
.dropdownMenuStaff__item {
  display: flex;
  align-items: center;
  cursor: pointer;
  font-weight: 400;
}
.dropdownMenuStaff__item--active {
  display: flex;
  align-items: center;
  width: 24px;
  margin-right: 10px;
}
.active {
  color: #28a745;
  border: 1px solid #28a745;
}
.temporary {
  color: #ffc107;
  border: 1px solid #ffc157;
}
.retired {
  color: #dc3545;
  border: 1px solid #dc3545;
}
</style>
