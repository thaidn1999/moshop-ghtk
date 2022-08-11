<script setup>
import { useStaffStore } from "../../stores/staff";
import { onMounted } from "vue";
import Navbar from "../../components/header/Navbar.vue";
import FilterDate from "../../components/manager_staff/FilterDate.vue";
import RowTable from "../../components/manager_staff/RowTable.vue";
import HeadTable from "./HeadTable.vue";
const useStaff = useStaffStore();
onMounted(async () => {
  await useStaff.getStaff();
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
              class="border-collapse border-t-0 table-auto w-full border border-borderColor-tbl text-base text-center"
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
