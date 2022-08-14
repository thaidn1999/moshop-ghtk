<script setup>
import { format, startOfToday } from "date-fns";
import { useStaffStore } from "../../stores/staff";
import Navbar from "../../components/header/Navbar.vue";
import FilterDate from "../../components/manager_staff/FilterDate.vue";
import RowTable from "../../components/manager_staff/RowTable.vue";
import HeadTable from "./HeadTable.vue";
const date = format(startOfToday(new Date()), "yyyy-MM-dd");
import { onMounted } from "vue";
const useStaff = useStaffStore();
onMounted(() => {
  setInterval(useStaff.getStaff(date, date), 300000);
});
</script>
<template>
  <Navbar />
  <div class="main-content">
    <section class="page">
      <div class="w-full px-[15px]">
        <FilterDate />
        <div class="page-table-staff p-0">
          <div class="table-scroll">
            <table
              class="border-collapse border-t-0 table-auto w-full border border-borderColor-tbl text-sm lg:text-base text-center"
            >
              <HeadTable />
              <tbody
                class="table-body"
                v-for="staff in useStaff.listStaffs"
                :key="staff.id"
              >
                <RowTable :staff="staff" />
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.main-content {
  overflow: auto;
  min-height: calc(100% - 48px);
}
.page {
  padding-top: 30px;
  padding-bottom: 20px;
}
.table-scroll {
  height: calc(100vh - 248px);
  overflow: auto;
  border-top: 1px solid #e4e4e4;
  border-bottom: 1px solid #e4e4e4;
  position: relative;
}
</style>
