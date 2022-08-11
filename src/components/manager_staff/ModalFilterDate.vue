<script setup>
import Datepicker from "vue3-datepicker";
import { ref } from "vue";
const dateTo = ref(new Date());
const dateFrom = ref(new Date());
</script>
<template>
  <div>
    <div class="modal date-picker-modal">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title m-auto text-[18px] font-bold leading-[1.5]">
              Tùy chọn hiển thị
            </h5>
          </div>
          <div class="modal-body">
            <div class="mx-datepicker">
              <div class="mx-input-wrapper relative">
                <Datepicker
                  v-model="dateTo"
                  :typeable="true"
                  placeholder="Chọn ngày bắt đầu"
                  class="w-full h-[34px] py-[6px] pl-[10px] pr-[30px] rounded border border-[#ccc] shadow-md focus:outline-none focus:border-[#409aff] hover:border-[#409aff]"
                />
                <i class="mx-icon-calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                  >
                    <path
                      d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
            <div class="mx-datepicker">
              <div class="mx-input-wrapper">
                <Datepicker
                  v-model="dateFrom"
                  :typeable="true"
                  placeholder="Chọn ngày kết thúc"
                  class="w-full h-[34px] py-[6px] pl-[10px] pr-[30px] rounded border border-[#ccc] shadow-md focus:outline-none focus:border-[#409aff] hover:border-[#409aff]"
                />
                <i class="mx-icon-calendar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 1024 1024"
                    width="1em"
                    height="1em"
                  >
                    <path
                      d="M940.218182 107.054545h-209.454546V46.545455h-65.163636v60.50909H363.054545V46.545455H297.890909v60.50909H83.781818c-18.618182 0-32.581818 13.963636-32.581818 32.581819v805.236363c0 18.618182 13.963636 32.581818 32.581818 32.581818h861.090909c18.618182 0 32.581818-13.963636 32.581818-32.581818V139.636364c-4.654545-18.618182-18.618182-32.581818-37.236363-32.581819zM297.890909 172.218182V232.727273h65.163636V172.218182h307.2V232.727273h65.163637V172.218182h176.872727v204.8H116.363636V172.218182h181.527273zM116.363636 912.290909V442.181818h795.927273v470.109091H116.363636z"
                    ></path>
                  </svg>
                </i>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <div class="apply m-1">
              <button
                @click="$emit('closeFilter')"
                type="button"
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
  z-index: 1050;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
}
.date-picker-modal {
  background: rgba(0, 0, 0, 0.6);
  z-index: 1051;
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
</style>
