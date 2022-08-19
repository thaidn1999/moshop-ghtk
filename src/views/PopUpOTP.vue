<script setup>
import { ref } from "vue";
const otp = ref("");
const emit = defineEmits(["closeModal"]);
const confirm = () => {
  // post OTP
  emit("closeModal");
};
</script>
<template>
  <div
    class="fixed top-0 left-0 z-[1000] w-full h-full overflow-x-hidden overflow-y-auto outline-0 bg-[rgba(0,0,0,0.3)]"
  >
    <div
      class="z-[1050] w-[500px] text-base flex flex-col justify-center h-full mx-auto modal-md modal-dialog-centered modal-dialog-scrollable"
    >
      <div
        class="relative flex flex-col w-full bg-white rounded-md outline-0 text-center"
      >
        <div>
          <div class="modal-header">
            <h5
              class="modal-title m-auto font-medium text-[18px] text-white leading-[1.5]"
            >
              Xác nhận đăng ký
            </h5>
            <button
              @click="$emit('closeModal')"
              class="float-right text-white ml-0 text-[26px] font-bold p-4 cursor-pointer -my-4 -mr-4 z-10 leading-[1]"
            >
              &times;
            </button>
          </div>
          <div class="p-[10px]">
            <div class="text-left text-black my-[10px] text-base">
              Mã OTP vừa được gửi đến số điện thoại quý khách đã đăng ký!
              <br />
              Vui lòng nhập đúng mã OTP để hoàn thành.
            </div>
            <div class="input-otp text-left mt-[20px]">
              <label for="otp">Mã OTP</label>
              <input
                type="text"
                v-model="otp"
                placeholder="Nhập mã OTP"
                id="otp"
                class="w-full border border-common-green px-3 py-[6px] rounded focus:bg-white focus:border-common-green focus:outline-none"
              />
            </div>
            <div class="note mt-[20px] text-left">
              Lưu ý: Nếu bạn không nhận được sms báo mã OTP, vui lòng thử lại
              hoặc email về cskh@ghtk.vn để được hỗ trợ nhanh nhất.
            </div>
          </div>
        </div>
        <footer class="p-[10px]">
          <button
            @click="confirm"
            :disabled="otp.length > 0 ? false : true"
            :class="otp.length > 0 ? 'bg-moshop-color' : 'bg-[#aaaaaa]'"
            class="text-white rounded h-10 w-full font-medium"
          >
            Xác nhận
          </button>
        </footer>
      </div>
    </div>
  </div>
</template>
<style scoped>
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
</style>
