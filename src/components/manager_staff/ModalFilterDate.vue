<script setup>
import { format } from "date-fns";
import { computed } from "vue";
import { useToast } from "vue-toast-notification";
import { useStaffStore } from "../../stores/staff";
const useStaff = useStaffStore();
const $toast = useToast();
const emit = defineEmits(["closeFilter", "changeTitle"]);
const isDisabled = computed(() => {
  return useStaff.start_date === "" || useStaff.end_date === "";
});
const getDateOption = () => {
  if (useStaff.start_date > useStaff.end_date) {
    $toast.open({
      type: "error",
      message: "Ngày bắt đầu không thể lớn hơn ngày kết thúc",
      position: "bottom",
      duration: 3000,
    });
  } else {
    useStaff.getStaff(
      format(useStaff.start_date.$d, "yyyy-MM-dd"),
      format(useStaff.end_date.$d, "yyyy-MM-dd")
    );
    emit("closeFilter");
    emit("changeTitle");
  }
};
</script>
<template>
  <div>
    <div class="modal date-picker-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="text-white modal-title m-auto text-[18px] font-bold leading-[1.5]"
            >
              Tùy chọn hiển thị
            </h5>
          </div>
          <div class="modal-body">
            <a-space direction="horizontal">
              <a-date-picker
                style="width: 200px"
                placeholder="Chọn ngày bắt đầu"
                v-model:value="useStaff.start_date"
              />
              <a-date-picker
                style="width: 200px"
                placeholder="Chọn ngày kết thúc"
                v-model:value="useStaff.end_date"
              />
            </a-space>
          </div>
          <div class="modal-footer">
            <div class="apply m-1">
              <button
                @click="getDateOption"
                type="button"
                :disabled="isDisabled"
                :class="isDisabled ? 'opacity-60' : 'opacity-100'"
                class="bg-moshop-color border-moshop-color text-white w-[70%] text-sm rounded-[0.25rem] py-[0.375rem] px-[0.75rem]"
              >
                Xác nhận
              </button>
            </div>
            <div class="cancel m-1">
              <button
                @click="$emit('closeFilter')"
                type="button"
                class="bg-[#aaa] border-[#aaa] text-white w-[70%] text-sm rounded-[0.25rem] opacity-60 py-[0.375rem] px-[0.75rem]"
              >
                Hủy bỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.date-picker-modal {
  background: rgba(0, 0, 0, 0.6);
  z-index: 1001;
}
.modal-dialog-centered {
  display: flex;
  align-items: center;
  min-height: calc(100% - 3.5rem);
}
.modal-dialog {
  position: relative;
  pointer-events: none;
  width: auto;
  max-width: 500px;
  margin: 1.75rem auto;
}
.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  pointer-events: auto;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}
.modal-header {
  background-color: #069255;
  color: #fff;
  padding: 12px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.modal-body {
  position: relative;
  text-align: center;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
}
.mx-datepicker {
  position: relative;
  display: inline-block;
  width: 210px;
}
.mx-icon-calendar {
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  font-size: 16px;
  line-height: 1;
  color: rgba(0, 0, 0, 0.5);
  vertical-align: middle;
}
.mx-datepicker svg {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
.modal-footer {
  display: block;
  text-align: center;
  padding: 12px;
  border: unset;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
/* .ant-space-item {
  margin-right: 20px;
} */
</style>
