<script setup>
import { ref, reactive } from "vue";
import { useStaffStore } from "../../stores/staff";
const useStaff = useStaffStore();
const isShow = ref(false);
const props = defineProps(["propsStaff"]);
const propsStaffInfo = props.propsStaff;
const statusWorking = reactive({
  0: "Nghỉ tạm thời",
  1: "Đang làm việc",
  2: "Đã nghỉ việc",
});
const screenCheck = reactive({
  order: "Đơn hàng",
  chat_ops: "Chats vận hành",
  statistic: "Tổng quan",
  customer: "Khách hàng",
  staff: "Nhân viên",
  sale: "Chats chốt đơn",
  product: "Kho và sản phẩm",
});
const changeStatusWorking = async (status) => {
  propsStaffInfo.active = status;
  await useStaff.updateStatus(propsStaffInfo.id, status);
  isShow.value = false;
};
</script>
<template>
  <td class="table__td border border-borderColor-tbl">
    <div class="staff flex flex-wrap justify-between">
      <div class="staffInfo flex flex-wrap">
        <div class="staffLeft text-center w-[128px]">
          <div class="staffLeft__avatar flex justify-center">
            <img
              :src="propsStaffInfo.avatar"
              alt="Avatar"
              class="w-16 h-16 rounded-[50%] mb-[10px] object-cover align-middle"
            />
          </div>
          <div class="staffStatus mb-[10x]">
            <div class="dropdown relative">
              <button
                @click="isShow = !isShow"
                :class="
                  propsStaffInfo.active === 2
                    ? 'retired'
                    : propsStaffInfo.active === 1
                    ? 'active'
                    : 'temporary'
                "
                class="btn staffStatus__btn flex items-center mb-2 xl:mb-0 rounded-[20px] text-[13px] px-2 py-[2px] leading-[1.25] whitespace-nowrap"
              >
                <span>{{ statusWorking[propsStaffInfo.active] }} </span>
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
                <div
                  class="dropdownMenuStaff__item mb-5"
                  @click="changeStatusWorking(1)"
                >
                  <div class="dropdownMenuStaff__item--active">
                    <img
                      v-if="propsStaffInfo.active === 1"
                      src="../../assets/images/check-circle-green.svg"
                    />
                  </div>
                  <div>Đang làm việc</div>
                </div>
                <div
                  class="dropdownMenuStaff__item mb-5"
                  @click="changeStatusWorking(0)"
                >
                  <div class="dropdownMenuStaff__item--active">
                    <img
                      v-if="propsStaffInfo.active === 0"
                      src="../../assets/images/check-circle-green.svg"
                    />
                  </div>
                  <div>Nghỉ tạm thời</div>
                </div>
                <div
                  class="dropdownMenuStaff__item"
                  @click="changeStatusWorking(2)"
                >
                  <div class="dropdownMenuStaff__item--active">
                    <img
                      v-if="propsStaffInfo.active === 2"
                      src="../../assets/images/check-circle-green.svg"
                    />
                  </div>
                  <div>Đã nghỉ việc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staffCenter text-left">
          <div class="staffCenter__name mb-[10px] font-bold">
            {{ propsStaffInfo.fullname }}
          </div>
          <ul
            class="staffCenter__screens text-grey"
            v-for="screen in propsStaffInfo.screens"
            :key="screen"
          >
            <li>{{ screenCheck[screen] }}</li>
          </ul>
        </div>
      </div>
      <div class="staffRight">
        <button
          class="staffRight__viewButton mt-2 xl:mt-0 px-[18px] rounded-[12px] text-sm text-common-green border border-common-green hover:text-white hover:bg-common-green"
        >
          <RouterLink
            :to="{ path: '/home/' + propsStaffInfo.id }"
            class="hover:text-white"
          >
            Xem
          </RouterLink>
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
