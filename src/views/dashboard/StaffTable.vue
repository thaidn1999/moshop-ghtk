<script setup>
import { ref } from "vue";
const isShow = ref(false);
</script>
<template>
  <td class="table__td border border-borderColor-tbl">
    <div class="staff flex flex-wrap justify-between">
      <div class="staffInfo flex flex-wrap">
        <div class="staffLeft text-center w-[128px]">
          <div class="staffLeft__avatar flex justify-center">
            <img
              src="../../assets/images/babyna.jpg"
              alt="Avatar"
              class="w-16 h-16 rounded-[50%] mb-[10px] object-cover align-middle"
            />
          </div>
          <div class="staffStatus mb-[10x]">
            <div class="dropdown relative">
              <button
                @click="isShow = !isShow"
                class="btn staffStatus__btn flex items-center rounded-[20px] text-[13px] px-2 py-[2px] leading-[1.25] text-common-green border-common-green whitespace-nowrap"
              >
                <span>Đang làm việc</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fill-rule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
              </button>
              <div
                :class="isShow ? 'block' : 'hidden'"
                class="dropdownMenuStaff dropdown-menu bg-white shadowStaff rounded-[10px] py-5 pl-[20px] pr-[15px] min-w-[186px]"
              >
                <div class="dropdownMenuStaff__item mb-5">
                  <div class="dropdownMenuStaff__item--active">
                    <img src="../../assets/images/check-circle-green.svg" />
                  </div>
                  <div>Đang làm việc</div>
                </div>
                <div class="dropdownMenuStaff__item mb-5">
                  <div class="dropdownMenuStaff__item--active">
                    <!--  -->
                  </div>
                  <div>Nghỉ tạm thời</div>
                </div>
                <div class="dropdownMenuStaff__item">
                  <div class="dropdownMenuStaff__item--active">
                    <!--  -->
                  </div>
                  <div>Đã nghỉ việc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staffCenter text-left">
          <div class="staffCenter__name mb-[10px] font-bold">Puuuu</div>
          <ul class="staffCenter__screens text-grey">
            <li>Đơn hàng</li>
            <li>Chats vận hành</li>
            <li>Tổng quan</li>
            <li>Khách hàng</li>
            <li>Nhân viên</li>
          </ul>
        </div>
      </div>
      <div class="staffRight">
        <button
          class="staffRight__viewButton px-[18px] rounded-[12px] text-sm text-common-green border border-common-green hover:text-white hover:bg-common-green"
        >
          <a href="/quan-ly-nhan-vien-v2/..."> Xem</a>
        </button>
      </div>
    </div>
  </td>
</template>
<style scoped>
.shadowStaff {
  box-shadow: 0 4px 20px rgb(0 0 0 / 25%);
}
.dropdown-menu {
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 1000;
  float: left;
  margin: 0.125rem 0 0;
  font-size: 1rem;
  color: #212529;
  text-align: left;
  list-style: none;
  border: 1px solid rgba(0, 0, 0, 0.15);
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
li::before {
  content: "•";
  font-size: 34px;
  padding-right: 10px;
  vertical-align: middle;
  line-height: 0;
  color: #999;
  border-radius: 50%;
}
</style>
