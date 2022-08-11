<script setup>
import { useToast } from "vue-toast-notification";
import { useStaffStore } from "../../stores/staff";
const $toast = useToast();
const emit = defineEmits(["closeModal"]);
const useStaff = useStaffStore();
const updateKpi = async () => {
  await useStaff.updateKpi();
  if (useStaff.checkStatus) {
    $toast.open({
      message: useStaff.messageStatus,
      type: "success",
      duration: 3000,
    });
  } else {
    $toast.open({
      message: useStaff.messageStatus,
      type: "error",
      duration: 3000,
    });
  }

  emit("closeModal");
};
</script>
<template>
  <div class="modal kpi-picker-modal">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title m-auto text-[18px] font-bold leading-[1.5]">
            Cài đặt KPIs nhân viên
          </h5>
          <button
            @click="$emit('closeModal')"
            class="float-right text-white ml-0 text-[26px] font-bold p-4 cursor-pointer -my-4 -mr-4 z-10 leading-[1]"
          >
            &times;
          </button>
        </div>
        <div class="modal-body relative text-base">
          <div class="setting">
            <div class="setting__title">Phân công NV Chat</div>
          </div>
          <div class="onlineList px-10 py-[10px]">
            <div class="onlineList__title mb-[10px] font-semibold">
              NV Online
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                value="all"
                v-model="useStaff.kpiOnl"
                id="all"
              />
              <label for="all">Nhận tất cả hội thoại</label>
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                id="same"
                value="share_work"
                v-model="useStaff.kpiOnl"
              />
              <label for="same">Nhận phần hội thoại được chia đều</label>
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                id="clickFirst"
                value="first_view"
                v-model="useStaff.kpiOnl"
              />
              <label for="clickFirst">
                Nhận phần hội thoại bấm xem trước tiên
              </label>
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                id="replyFirst"
                value="first_reply"
                v-model="useStaff.kpiOnl"
              />
              <label for="replyFirst">
                Nhận phần hội thoại trả lời trước tiên
              </label>
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                id="orderFirst"
                value="first_deal"
                v-model="useStaff.kpiOnl"
              />
              <label for="orderFirst">
                Nhận phần hội thoại chốt đơn trước tiên
              </label>
            </div>
          </div>
          <div
            class="onlineList px-10 py-[10px]"
            v-if="useStaff.kpiOnl != 'all'"
          >
            <div class="onlineList__title mb-[10px] font-semibold">
              NV Offline
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                value="keep"
                v-model="useStaff.kpiOff"
                id="continue"
              />
              <label for="continue"> Tiếp tục hội thoại sau khi Offline </label>
            </div>
            <div class="onlineList__item">
              <input
                type="radio"
                value="share"
                v-model="useStaff.kpiOff"
                id="redirectOnl"
              />
              <label for="redirectOnl">
                Chuyển hội thoại chưa trả lời cho NV Online
              </label>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button
            @click="updateKpi"
            class="py-2 font-semibold text-[18px] text-center bg-moshop-color border border-moshop-color hover:bg-[#218838] hover:border-[#1e7e34] w-full rounded text-white"
          >
            Lưu
          </button>
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
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.kpi-picker-modal {
  background: rgba(0, 0, 0, 0.6);
  z-index: 1040;
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
  padding: 4px 10px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  text-align: center;
  border-bottom: 1px solid #dee2e6;
  border-top-left-radius: calc(0.3rem - 1px);
  border-top-right-radius: calc(0.3rem - 1px);
}
.setting__title {
  display: flex;
  align-items: center;
  height: 40px;
  background: #d6d6d6;
  font-size: 18px;
  font-weight: 600;
  padding: 0 40px;
}
.onlineList__item {
  display: flex;
  align-items: center;
  margin-bottom: 12px;
}
.onlineList__item:last-child {
  margin-bottom: 0;
}
.onlineList__item input[type="radio"] {
  width: 17px;
  height: 17px;
  accent-color: #069255;
}
.onlineList__item label {
  cursor: pointer;
  margin-left: 10px;
}
.modal-footer {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-end;
  padding: 0.75rem;
  border-top: 0;
  border-bottom-right-radius: calc(0.3rem - 1px);
  border-bottom-left-radius: calc(0.3rem - 1px);
}
</style>
