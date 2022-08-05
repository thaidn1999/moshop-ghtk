<script setup></script>
<template>
  <div
    class="page-header mb-[15px] grid grid-cols-1 md:grid-cols-3 gap-x-[15px]"
  >
    <div class="left-content md:col-span-2">
      <div class="info flex items-center">
        <h2
          class="info__title text-[40px] font-bold mr-[26px] mb-2 leading-[1.2]"
        >
          Quản lý nhân viên
        </h2>
        <div class="live relative italic">
          <div class="ringring"></div>
          <div class="circle"></div>
          <div class="pl-[30px] text-base">Live (cập nhật 09:49)</div>
        </div>
      </div>
      <div class="option-date">
        <div class="filter">
          <button class="btn-filter btn-success">Hôm nay</button>
          <button class="btn-filter">Tuần này</button>
          <button class="btn-filter">Tháng này</button>
          <button class="btn-filter">Tùy chọn</button>
        </div>
        <!-- <div
                data-v-df601146=""
                id="historyDatePickerModal2"
                tabindex="-1"
                role="dialog"
                aria-labelledby="datePickerModalLabel"
                aria-hidden="true"
                class="modal date-picker-modal"
              >
                <div
                  data-v-df601146=""
                  role="document"
                  class="modal-dialog modal-dialog-centered"
                >
                  <div data-v-df601146="" class="modal-content">
                    <div data-v-df601146="" class="modal-header">
                      <h5
                        data-v-df601146=""
                        id="exampleModalLabel"
                        class="modal-title"
                      >
                        Tùy chọn hiển thị
                      </h5>
                    </div>
                    <div data-v-df601146="" class="modal-body">
                      <div data-v-df601146="" class="mx-datepicker">
                        <div class="mx-input-wrapper">
                          <input
                            name="date"
                            type="text"
                            autocomplete="off"
                            placeholder="Chọn ngày bắt đầu"
                            class="mx-input"
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
                      <div data-v-df601146="" class="mx-datepicker">
                        <div class="mx-input-wrapper">
                          <input
                            name="date"
                            type="text"
                            autocomplete="off"
                            placeholder="Chọn ngày kết thúc"
                            class="mx-input"
                          /><i class="mx-icon-calendar"
                            ><svg
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
                    <div data-v-df601146="" class="modal-footer">
                      <div data-v-df601146="" class="apply">
                        <button
                          data-v-df601146=""
                          disabled="disabled"
                          type="button"
                          class="btn btn-secondary"
                        >
                          Xác nhận
                        </button>
                      </div>
                      <div data-v-df601146="" class="cancel">
                        <button
                          data-v-df601146=""
                          type="button"
                          class="btn btn-primary"
                        >
                          Hủy bỏ
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div> -->
      </div>
    </div>
    <div class="action flex flex-col flex-wrap items-end">
      <button
        class="btn-filter btn-success btn-utility hover:bg-[#218838] hover:border-[#1e7e34]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
        <span>KPIs nhân viên</span>
      </button>
      <button
        href="/quan-ly-nhan-vien-v2/create"
        class="btn-filter btn-success btn-utility hover:bg-[#218838] hover:border-[#1e7e34]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6 mr-3"
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
        <span>Thêm nhân viên</span>
      </button>
    </div>
  </div>
</template>
<style scoped>
.btn-filter {
  padding: 4px 20px;
  margin-bottom: 10px;
  margin-right: 15px;
  background: #efefef;
  color: #069255;
}
.btn-success {
  background-color: #069255;
  color: white;
}
.btn-utility {
  font-weight: 500;
  border-radius: 18px;
  padding: 8px 15px;
  display: flex;
  align-items: center;
  width: 176px;
  font-size: 14px;
  margin-right: 0;
}
.circle {
  width: 10px;
  height: 10px;
  background-color: red;
  border-radius: 50%;
  position: absolute;
  top: 7px;
  left: 8px;
}
.ringring {
  border: 2px solid red;
  -webkit-border-radius: 30px;
  height: 18px;
  width: 18px;
  position: absolute;
  left: 3px;
  top: 2px;
  -webkit-animation: pulsate 1s ease-out;
  -webkit-animation-iteration-count: infinite;
  opacity: 0;
}
@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(0.1, 0.1);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: scale(1.1, 1.1);
    opacity: 0;
  }
}
</style>
