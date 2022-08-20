<template>
  <div class="w-full h-full flex flex-col justify-center">
    <div
      class="w-[500px] h-[200px] mx-auto text-base flex flex-col justify-center text-black"
    >
      <div class="wrap_modal mt-[100px]">
        <div
          class="flex items-center text-center justify-center font-medium my-5"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-7 w-7 text-moshop-color"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
              clip-rule="evenodd"
            />
          </svg>
          <span class="inline-block pl-2 font-medium">
            Shop chưa có nhân viên !
          </span>
        </div>
        <div class="mb-8 flex justify-center items-center">
          Thêm nhân viên ngay để phân quyền và theo dõi kết quả công việc.
        </div>

        <div>
          <RouterLink
            to="/create"
            class="flex items-center text-center justify-center mb-8"
          >
            <button
              class="flex items-center text-center justify-center text-moshop-color border-moshop-color hover:bg-moshop-color hover:text-white w-[240px] h-10 rounded-md"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                />
              </svg>
              <span class="pl-1"> Thêm nhân viên </span>
            </button>
          </RouterLink>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.wrap_modal {
  background: #ffffff;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
}
</style>
