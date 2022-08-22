<script setup>
import axios from "axios";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import HeaderInfo from "./HeaderInfo.vue";
import WorkResult from "./WorkResult.vue";
import JobInfo from "./JobInfo.vue";
import ActivityHistory from "./ActivityHistory.vue";
import { format } from "date-fns";
const info = ref([]);
const workAddress = ref([]);
const workResult = ref([]);
const history = ref([]);
const AllDate = ref([]);
const errors = ref([]);
const pages = ref([]);
const route = useRoute();
function log(message) {
  console.log(message);
}
function groupArrayOfObjects(list, key) {
  return list.reduce(function (rv, x) {
    console.log(format(new Date(x[key]), "dd-MM-yyyy"));
    (rv[format(new Date(x[key]), "dd-MM-yyyy")] =
      rv[format(new Date(x[key]), "dd-MM-yyyy")] || []).push(x);
    return rv;
  }, {});
}
onMounted(() => {
  axios
    .get(
      `https://x.ghtk.vn/api/v2/staff/detail?shop_user_id=${route.params.id}`,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      }
    )
    .then((response) => {
      console.log(response);
      info.value = response.data.data;
    })
    .catch((e) => {
      errors.value.push(e);
    });
  axios
    .get(
      `https://x.ghtk.vn/api/v2/staff/get-work-result?start_date=2021-07-20&end_date=2021-07-20&shop_user_id=${route.params.id}`,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      }
    )
    .then((response) => {
      workResult.value = response.data.data;
      // console.log(response);
    })
    .catch((e) => {
      errors.value.push(e);
    });
  axios
    .get("https://x.ghtk.vn/api/fulfilment/v1/shops/get-pick-addresses", {
      headers: {
        authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
      },
    })
    .then((response) => {
      console.log(response);
      workAddress.value = response.data.data;
      console.log(workAddress.value);
    });
  axios
    .get(
      `https://x.ghtk.vn/api/v2/staff/get-history-action?page=1&limit=30&shop_user_id=${route.params.id}`,
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      }
    )
    .then((response) => {
      history.value = response.data.data;
      AllDate.value = groupArrayOfObjects(history.value, "time");
      console.log(AllDate);
    });
  axios
    .get(`https://wh.ghtk.vn/api/v3/page/get-all-page-by-shop-code`, {
      headers: {
        Authorization: `Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC93aC5naHRrLnZuXC9hcGlcL3YxXC9jaGVjay1zaG9wLWhhcy1wYWdlIiwiaWF0IjoxNjI2NzU5NDU5LCJleHAiOjE2MjczNjQyNTksIm5iZiI6MTYyNjc1OTQ1OSwianRpIjoiaUJES05HM2M5ZXJjb0RaeSIsInN1YiI6MzI5ODgsInBydiI6ImM4ZWUxZmM4OWU3NzVlYzRjNzM4NjY3ZTViZTE3YTU5MGI2ZDQwZmMiLCJtb190ZWwiOiI4NDM1NjI2MjEyMSIsIm1vX3VzZXJuYW1lIjoiaG5jcDdAZ21haWwuY29tIiwibW9fcm9sZSI6ImFkbWluIn0.bYRqpi3W6qqTUV5uqpgoRXa_5jLfrGCtttC0hND_3IE`,
      },
    })
    .then((response) => {
      pages.value = response.data.data;
    });
});
</script>

<template>
  <div>
    <section class="text-base pt-6 pb-2.5 mt-[-30px]">
      <div class="wrap">
        <div>
          <HeaderInfo :headerInfo="info" />
        </div>
        <div class="main">
          <WorkResult :workResult="workResult" />
          <div class="row flex">
            <div class="w-1/2 pr-[15px]">
              <JobInfo
                :jobInfo="info"
                :workAddress="workAddress"
                :pages="pages"
              />
            </div>
            <div class="w-1/2 pl-[15px]">
              <ActivityHistory :history="history" :AllDate="AllDate" />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<style scoped>
.wrap {
  margin: 0px 65px;
  padding: 0px 15px;
}
</style>
