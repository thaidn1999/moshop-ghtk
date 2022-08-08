<script setup>
import { defineProps } from "vue";
import StaffTable from "./StaffTable.vue";
const props = defineProps(["staff"]);
const propsStaff = props.staff;
</script>
<template>
  <tr class="table-row">
    <StaffTable :propsStaff="propsStaff" />
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.customer }}</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.customer_has_phone }}</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.call_log }}</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">
        {{ propsStaff.work_result.customer_deal }}
      </div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.rate_order }}%</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.order_success }}</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.order_return }}</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.revenue }} đ</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.fee }} đ</div>
    </td>
    <td class="table__td border border-borderColor-tbl">
      <div class="number">{{ propsStaff.work_result.time_reply }}s</div>
    </td>
  </tr>
</template>
<style scoped>
td {
  padding: 0.75rem;
  vertical-align: top;
}
</style>
