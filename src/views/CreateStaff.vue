<script setup>
import { useToast } from "vue-toast-notification";
import PersonalInfoVue from "../components/create_staff/PersonalInfo.vue";
import WorkInfo from "../components/create_staff/WorkInfo.vue";
import { useInfoStaffStore } from "../stores/info-staff";
// import { format } from "date-fns";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import PopUpOTP from "./PopUpOTP.vue";
import ProfileInfo from "../components/create_staff/ProfileInfo.vue";
const $toast = useToast();
const router = useRouter();
const useInfoStaff = useInfoStaffStore();
const personalRef = ref();
const isPopUp = ref(false);
const closeModal = () => {
  isPopUp.value = false;
};
const addStaff = async () => {
  if (!(await personalRef.value.validForm())) return;

  if (
    useInfoStaff.formInfo.screens.includes("sale") &&
    useInfoStaff.formInfo.pages.length <= 0
  ) {
    $toast.open({
      message: "Vui lòng chọn pages",
      type: "error",
      position: "bottom",
      duration: 3000,
    });
    return;
  }
  console.log(
    useInfoStaff.formInfo.avatar,
    "-",
    useInfoStaff.formInfo.fullname,
    "-",
    useInfoStaff.formInfo.tel,
    "-",
    useInfoStaff.formInfo.password,
    "-",
    useInfoStaff.formInfo.work_address,
    "-",
    useInfoStaff.formInfo.live_address,
    "-",
    useInfoStaff.formInfo.birthday,
    "-",
    useInfoStaff.formInfo.work_first_date,
    "-",
    useInfoStaff.formInfo.screens,
    "-",
    useInfoStaff.formInfo.pages,
    "-",
    useInfoStaff.formInfo.repeats,
    "-",
    useInfoStaff.formInfo.start_time,
    "-",
    useInfoStaff.formInfo.end_time
  );
  isPopUp.value = true;
};
onMounted(() => {
  useInfoStaff.getListAddress();
});
</script>
<template>
  <PopUpOTP v-if="isPopUp" @closeModal="closeModal" />
  <div class="create-staff container mx-auto">
    <div class="head flex justify-between items-center mb-8">
      <div
        @click="router.push('/home')"
        class="head__back cursor-pointer text-moshop-color"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-10 w-10"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div class="head__action">
        <button
          @click="addStaff"
          class="py-2 px-[52px] rounded-[20px] font-medium border-[2px] text-white bg-moshop-color hover:bg-[#218838] hover:border-[#1e7e34]"
        >
          Lưu
        </button>
      </div>
    </div>
    <PersonalInfoVue ref="personalRef" />
    <div class="grid lg:grid-cols-2 gap-x-8">
      <WorkInfo />
      <ProfileInfo />
    </div>
  </div>
</template>
<style scoped>
@media screen and (min-width: 1280px) {
  .container {
    max-width: 1465px;
  }
}
</style>
