<template>
  <td class="border border-slate">
    <div class="staff flex flex-wrap justify-between">
      <div class="staff-info flex flex-wrap">
        <div class="staff-left">
          <div class="staff-left__avatar flex justify-center">
            <img
              src="https://cache.giaohangtietkiem.vn/image/show/201d61e0-4025-4202-a9e4-79f669f19908/ccfa8277-505c-444b-affd-57b9ce5112f9.jpg"
              alt=""
            />
          </div>
          <div class="staff__status">
            <div class="dropdown relative" :class="employeeStatus">
              <button @click="openDropDown = !openDropDown">
                {{ employeeStatusText }}
                <font-awesome-icon icon="fa-solid fa-angle-down" class="ml-1" />
              </button>
              <div class="dropdown__status absolute" v-show="openDropDown">
                <div
                  class="dropdown__status__item"
                  @click="changeEmployeeStatus('active')"
                >
                  <div class="dropdown__status__item--active">
                    <img
                      src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                      alt="statusCheck"
                      v-if="employeeStatus === 'active'"
                    />
                  </div>
                  <div>Đang làm việc</div>
                </div>
                <div
                  class="dropdown__status__item"
                  @click="changeEmployeeStatus('temporaryBreak')"
                >
                  <div class="dropdown__status__item--active">
                    <img
                      src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                      alt="statusCheck"
                      v-if="employeeStatus === 'temporaryBreak'"
                    />
                  </div>
                  <div>Nghỉ tạm thời</div>
                </div>
                <div
                  class="dropdown__status__item"
                  style="margin-bottom: 0px"
                  @click="changeEmployeeStatus('retired')"
                >
                  <div class="dropdown__status__item--active">
                    <img
                      src="https://moshop.com.vn/_nuxt/img/check-circle-green.af1a7f4.svg"
                      alt="statusCheck"
                      v-if="employeeStatus === 'retired'"
                    />
                  </div>
                  <div>Đã nghỉ việc</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="staff-center pl-2">
          <div class="staff__name text-left">ExNope</div>
          <ul class="staff-center__screen text-left">
            <li>Đơn hàng</li>
            <li>Chats vận hành</li>
            <li>Tổng quan</li>
            <li>Khách hàng</li>
            <li>Nhân viên</li>
          </ul>
        </div>
      </div>
      <div class="staff-right">
        <a href="#" class="viewButton">Xem</a>
      </div>
    </div>
  </td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
  <td class="border border-slate">0</td>
</template>
<script>
export default {
  name: "Employee",
  data() {
    return {
      openDropDown: false,
      employeeStatus: "active",
    };
  },
  computed: {
    employeeStatusText() {
      if (this.employeeStatus === "active") {
        return "Đang làm việc";
      } else if (this.employeeStatus === "temporaryBreak") {
        return "Nghỉ tạm thời";
      } else if (this.employeeStatus === "retired") {
        return "Đã nghỉ việc";
      }
    },
  },
  methods: {
    changeEmployeeStatus(status) {
      this.openDropDown = !this.openDropDown;
      this.employeeStatus = status;
    },
  },
};
</script>
<style scoped>
@import "Employee.css";
</style>
