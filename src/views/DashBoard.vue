<script setup>
import ModalNoStaff from "../components/manager_staff/ModalNoStaff.vue";
import FilterDate from "../components/manager_staff/FilterDate.vue";
import HeadTable from "../components/manager_staff/HeadTable.vue";
import RowTable from "../components/manager_staff/RowTable.vue";
import { useStaffStore } from "../stores/staff";
import { onMounted, onUnmounted } from "vue";
const useStaff = useStaffStore();
onMounted(async () => {
  await useStaff.getStaff(useStaff.date, useStaff.date);
  setInterval(() => {
    useStaff.getStaff(useStaff.date, useStaff.date);
  }, 600000);
});
onUnmounted(() => {
  useStaff.clearStaff();
});
</script>
<template>
  <div class="manager-staff w-full px-[15px]">
    <FilterDate />
    <div class="page-table-staff p-0">
      <div class="table-scroll">
        <table
          class="border-collapse border-t-0 table-auto w-full border border-borderColor-tbl text-sm lg:text-base text-center"
        >
          <HeadTable />
          <tbody
            class="table-body"
            v-for="staff in useStaff.staffs"
            :key="staff.id"
          >
            <RowTable :staff="staff" />
          </tbody>
        </table>
        <ModalNoStaff v-show="useStaff.listStaffs.length <= 0" />
      </div>
    </div>
  </div>
</template>
<style scoped>
.table-scroll {
  height: calc(100vh - 248px);
  overflow: auto;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
}
</style>
