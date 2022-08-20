import { axios } from "../helpers/axios";
import { defineStore } from "pinia";
export const useInfoStaffStore = defineStore({
  id: "info-staff",
  state: () => ({
    formInfo: {
      birthday: null,
      fullname: null,
      tel: null,
      password: null,
      live_address: null,
      avatar: 'https://moshop.com.vn/default-avatar.jpg',
      work_first_date: null,
      work_address: null,
      work_time_repeats: [],
      screens: [],
      pages: [],
      cmnd_images: [],
      syll_images: [],
      hdld_images: [],
      deleted_image_ids: [],
      start_time: null,
      end_time: null,
      repeats: [],
    },
    listAddress: [],
    listPages: [],
  }),
  actions: {
    async getListAddress() {
      const res = await axios.get(`fulfilment/v1/shops/get-pick-addresses`)
      this.listAddress = res.data.data
    },
    async getPages() {
      const res = await axios.get(`https://wh.ghtk.vn/api/v3/page/get-all-page-by-shop-code`)
      this.listPages = res.data.data.pages
    }
  }
})
// format(useInfoStaff.formInfo.birthday.$d, "yyyy-MM-dd"),
// format(useInfoStaff.formInfo.work_first_date.$d, "yyyy-MM-dd"),
