import axios from "axios";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";
const $toast = useToast();
import router from "../router";
export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    username: '',
    password: '',
  }),
  actions: {
    async login(username, password) {
      try {
        const res = await axios.post(
          "https://x.ghtk.vn/api/fulfilment/auth/login",
          {
            username: username,
            password: password,
          }
        );
        if (res.data.success) {
          localStorage.setItem("accessToken", res.data.data.access_token);
          router.push('/')
        }
        else {
          $toast.open({
            message: res.data.message,
            type: "error",
            position: "top",
          });
        }
      }
      catch (error) {
        router.push("/login");
        console.log(error);
      }
    },
    async logout() {
      localStorage.removeItem("accessToken");
      router.push("/login");
    }
  }
})