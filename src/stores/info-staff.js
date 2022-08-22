import { axios } from "../helpers/axios";
import { defineStore } from "pinia";
import { format } from "date-fns";
export const useInfoStaffStore = defineStore({
  id: "info-staff",
  state: () => ({
    formInfo: {
      birthday: null,
      fullname: null,
      tel: null,
      password: null,
      live_address: null,
      avatar: null,
      work_first_date: null,
      work_address: null,
      work_time_repeats: [],
      screens: [],
      pages: [],
      cmnd_images: [],
      syll_images: [],
      hdld_images: [],
      work_time_repeats: [],
      start_time: null,
      end_time: null,
      repeats: [],
      deleted_image_ids: []
    },
    listAddress: [],
    listPages: [],
    isSuccess: false
  }),
  actions: {
    async getListAddress() {
      try {
        const res = await axios.get(`fulfilment/v1/shops/get-pick-addresses`)
        this.listAddress = res.data.data
      } catch (error) {
        console.log(error);
      }
    },
    async getPages() {
      try {
        const res = await axios.get(`https://wh.ghtk.vn/api/v3/page/get-all-page-by-shop-code`)
        this.listPages = res.data.data.pages
      } catch (error) {
        console.log(error);
      }
    },
    async addNewStaff() {
      try {
        const res = await axios.post(`v2/staff/create`,
          {
            avatar: this.formInfo.avatar,
            fullname: this.formInfo.fullname,
            tel: this.formInfo.tel,
            password: this.formInfo.password,
            birthday: format(this.formInfo.birthday.$d, "yyyy-MM-dd"),
            live_address: this.formInfo.live_address,
            work_first_date: format(this.formInfo.work_first_date.$d, "yyyy-MM-dd"),
            work_address: this.formInfo.work_address,
            screens: this.formInfo.screens,
            pages: this.formInfo.pages,
            work_time_repeats: [
              {
                start_time: this.formInfo.start_time,
                end_time: this.formInfo.end_time,
                repeats: this.formInfo.repeats,
              }
            ],

            cmnd_images: this.formInfo.cmnd_images,
            syll_images: this.formInfo.syll_images,
            hdld_images: this.formInfo.hdld_images,
            deleted_image_ids: this.formInfo.deleted_image_ids
          }
        )
        if (res.data.success) {
          this.isSuccess = true
        }
      } catch (error) {
        console.log(error);
      }
    }
  }
})
