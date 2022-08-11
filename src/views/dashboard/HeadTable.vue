<script setup></script>
<template>
  <thead class="table-header h-[50px]">
    <tr>
      <th
        class="w-[25%] py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        Nhân viên
      </th>
      <th
        v-tooltip="'Số khách nhắn tin, bình luận NV nhận'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">KH tương tác</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Số khách nhắn tin, bình luận cho SĐT'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">KH có SĐT</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Số khách nhân viên đã gọi'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">KH đã gọi</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Số khách NV đã chốt'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">ĐH đã chốt</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'ĐH đã chốt / (KH tương tác + KH đã gọi)'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">Tỷ lệ chốt</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Số đơn giao thành công của NV'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">ĐH thành công</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Số đơn bị hoàn trả của NV'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">ĐH hoàn</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Giá trị đơn giao thành công của NV'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">Doanh thu</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Phí ship đơn hoàn của NV'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">Phí hoàn</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
      <th
        v-tooltip="'Trung bình thời gian trả lời tin nhắn của NV'"
        class="py-[10px] border border-borderColor-tbl border-t-0 sticky top-0 z-50 bg-white text-center pr-5"
      >
        <div class="head_name">TG phản hồi TB</div>
        <div class="head_sort">
          <div class="head__sort--asc flex top-[10px] right-[11px] absolute">
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84358 0L0.850586 5.55556H4.59533V15.2778H7.09183V5.55556H10.8366L5.84358 0Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
          <div
            class="head__sort--desc active flex top-[18px] right-[3px] absolute"
          >
            <svg
              width="11"
              height="16"
              viewBox="0 0 11 16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.84343 15.2773L10.8364 9.72179H7.09168L7.09168 -0.000434875H4.59518L4.59518 9.72179H0.850438L5.84343 15.2773Z"
                fill="#BDBDBD"
              ></path>
            </svg>
          </div>
        </div>
      </th>
    </tr>
  </thead>
</template>
<style scoped>
th {
  color: #000;
  font-weight: 500;
}
th:hover {
  cursor: pointer;
}
</style>
