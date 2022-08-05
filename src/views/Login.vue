<template>
  <body class="w-screen h-screen bg-[#219653] flex justify-center items-center">
    <div class="login">
      <div class="screen">
        <div>
          <div class="header mb-11 flex justify-center">
            <img
              src="https://moshop.com.vn/_nuxt/img/moshop.5640f4d.png"
              alt="moshop logo"
            />
          </div>
          <div class="main bg-white rounded-xl">
            <div class="section-heading text-lg text-center font-bold p-2.5">
              Đăng nhập
            </div>
            <div class="section-form">
              <div class="mb-4">
                <label for="username" class="title"
                  >Số điện thoại hoặc email</label
                >
                <input
                  type="text"
                  name="ures"
                  placeholder="Nhập tên cửa hàng"
                />
              </div>
              <label for="password" class="title">Mật khẩu</label>
              <div class="pass-input">
                <input
                  v-if="showPassword"
                  placeholder="Nhập mật khẩu"
                  type="text"
                  class="input"
                  v-model="password"
                />
                <input
                  v-else
                  placeholder="Nhập mật khẩu"
                  type="password"
                  class="input"
                  v-model="password"
                />

                <div class="field-pass flex">
                  <span class="forget-password text-moshop-color underline pr-1"
                    >Quên mật khẩu?</span
                  >
                  <button class="button" @click="toggleShow">
                    <span class="eye-off" v-if="showPassword">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 text-moshop-color"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                      </svg>
                    </span>
                    <span class="eye-off" v-else>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-6 w-6 rotate-180"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                      >
                        <path
                          class="text-[#7a7a7a]"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.88 9.88l-3.29-3.29m7.532 7.532l3.29 3.29M3 3l3.59 3.59m0 0A9.953 9.953 0 0112 5c4.478 0 8.268 2.943 9.543 7a10.025 10.025 0 01-4.132 5.411m0 0L21 21"
                        />
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div class="section-footer">
              <button
                class="bg-moshop-color text-white w-80 h-10 py-px px-1.5 rounded-md"
              >
                Đăng nhập
              </button>
            </div>
            <div class="sign-up pb-4 text-center">
              Bạn chưa có tài khoản?
              <span class="text-moshop-color">Đăng ký ngay!</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>

<script>
export default {
  data() {
    return {
      showPassword: false,
      password: null,
    };
  },
  computed: {
    buttonLabel() {
      return this.showPassword ? "Show" : "Hide";
    },
  },
  methods: {
    toggleShow() {
      this.showPassword = !this.showPassword;
    },
  },
};
</script>

<style scoped>
body {
  font-size: 16px;
}
img {
  width: 214px;
  height: 62px;
}
.section-form,
.section-footer {
  padding: 15px;
}
.section-heading {
  border-bottom: 1px solid #e5e5e5;
}
.title {
  color: #5c5c5c;
  font-weight: 600;
  margin-bottom: 5px;
}
.main {
  width: 350px;
  height: auto;
}
input {
  width: 100%;
  height: 27px;
  outline: none;
  border-bottom: 1px solid #e8e8e8;
}
input:focus {
  border-bottom-color: #069255;
}
.pass-input {
  position: relative;
}
.field-pass {
  position: absolute;
  right: 5px;
  top: 2px;
}
path {
  width: 18.33px;
  height: 13.33px;
}
</style>
