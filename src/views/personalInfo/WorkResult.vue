<script setup>
import { defineProps } from "vue";
const { workResult } = defineProps(["workResult"]);
</script>
<template>
  <div class="main">
    <div class="work-result">
      <fieldset class="mb-7">
        <legend class="wr-title">Kết quả công việc</legend>
        <div class="filter flex flex-row mb-[15px]">
          <button>Hôm nay</button>
          <button>Tuần này</button>
          <button>Tháng này</button>
          <button>Tùy chọn</button>
        </div>
        <div class="wr-table">
          <table class="mb-2.5">
            <thead>
              <tr>
                <th>KH tương tác</th>
                <th>KH có SĐT</th>
                <th>KH đã gọi</th>
                <th>HĐ đã chốt</th>
                <th>Tỷ lệ chốt</th>
                <th>ĐH thành công</th>
                <th>ĐH hoàn</th>
                <th>Doanh thu</th>
                <th>Phí hoàn</th>
                <th>TG phản hồi TB</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{{ workResult.customer }}</td>
                <td>{{ workResult.customer_has_phone }}</td>
                <td>{{ workResult.call_log }}</td>
                <td>{{ workResult.customer_deal }}</td>
                <td>{{ workResult.rate_order }}%</td>
                <td>{{ workResult.order_success }}</td>
                <td>{{ workResult.order_return }}</td>
                <td>{{ workResult.revenue }} đ</td>
                <td>{{ workResult.fee }} đ</td>
                <td>{{ workResult.time_reply }}s</td>
              </tr>
            </tbody>
          </table>
        </div>
      </fieldset>
    </div>
  </div>
</template>
<style scoped>
@import "./css/button.css";
@import "./css/fieldset.css";
table,
th,
td {
  border: 1px solid #dee2e6;
}
th,
td {
  width: 8%;
  text-align: center;
  padding: 12px;
}
</style>
