<script setup>
import axios from "axios";
import { onMounted, ref } from "vue";
import HeaderInfo from "./HeaderInfo.vue";
import WorkResult from "./WorkResult.vue";
import JobInfo from "./JobInfo.vue";
import ActivityHistory from "./ActivityHistory.vue";
const info = ref([]);
const workAddress = ref([]);
const workResult = ref([]);
const history = ref([]);
const errors = ref([]);
const numberDay = ref([0, 1, 2, 3, 4, 5, 6]);
function log(message) {
  console.log(message);
}

// function currentDateTime(datePass) {
//   const current = new Date(datePass);
//   console.log(Math.floor((new Date() - current) / (1000 * 60 * 60 * 24)));
//   const day =
//     current.getDate() < 10 ? `0${current.getDate()}` : current.getDate();
//   const date =
//     day + "/" + (current.getMonth() + 1) + "/" + current.getFullYear();
//   const h = current.getHours();

//   const time = h + ":" + current.getMinutes();
//   const dateTime = time + " " + date;
//   return dateTime;
// }
onMounted(() => {
  axios
    .get(
      "https://x.ghtk.vn/api/v2/staff/detail?shop_user_id=611c92ce-8fe4-4b0f-bfc8-ad374bf18d55",
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
      `https://x.ghtk.vn/api/v2/staff/get-work-result?start_date=2021-07-20&end_date=2021-07-20&shop_user_id=611c92ce-8fe4-4b0f-bfc8-ad374bf18d55`,
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
      "https://x.ghtk.vn/api/v2/staff/get-history-action?page=1&limit=30&shop_user_id=611c92ce-8fe4-4b0f-bfc8-ad374bf18d55",
      {
        headers: {
          authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6IiJ9.eyJ0b2tlbiI6IjNkZDU5ZWE5MDgyYWQ5ODYyYWVmYTczYTE0OTE2ZDJlN2JmN2YxYjdhZWRiMmNlZGQxMThkZDg5YzQ3ODg3MmQiLCJleHBpcmVkX2F0IjoiMjAyMS0wOC0xOVQwNTozNzozOC41MTA0MzBaIiwibW9fdGVsIjoiODQzNTYyNjIxMjEiLCJtb19yb2xlIjoiYWRtaW4iLCJtb191c2VybmFtZSI6ImhuY3A3QGdtYWlsLmNvbSJ9.M7U2RSNivrc0wFDhmXiOJgvhj2oH6AGNVNGxJ1OxDvA",
        },
      }
    )

    .then((response) => {
      history.value = response.data.data;

      console.log(history.value);
    });
});
</script>

<template>
  <div>
    <section class="text-base pt-6 pb-2.5">
      <div class="wrap">
        <div>
          <HeaderInfo :headerInfo="info" />
        </div>
        <div class="main">
          <WorkResult :workResult="workResult" />
          <div class="row flex">
            <div class="w-1/2 pr-3.5 mr-px">
              <JobInfo :jobInfo="info" :workAddress="workAddress" />
            </div>
            <div class="w-1/2 pl-3.5 ml-px">
              <ActivityHistory :history="history" />
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
