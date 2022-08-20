import { axios } from "../helpers/axios";
import { format, startOfToday } from "date-fns";
import { defineStore } from "pinia";
import { useToast } from "vue-toast-notification";

const $toast = useToast();
export const useStaffStore = defineStore({
  id: "staff",
  state: () => ({
    staffs: [],
    kpiOnl: "",
    kpiOff: "",
    start_date: "",
    end_date: "",
    currentDate: format(new Date(), "HH:mm"),
    date: format(startOfToday(new Date()), "yyyy-MM-dd")
  }),
  getters: {
    listStaffs: (state) => state.staffs,
  },
  actions: {
    clearStaff() {
      this.staffs = [];
    },

    async getStaff(start_date, end_date) {
      try {
        const res = await axios.get(
          `v2/staff?start_date=${start_date}&end_date=${end_date}`
        );
        this.currentDate
        this.staffs = res.data.data;
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatus(id, status) {
      try {
        const res = await axios.post("v2/staff/set-status", {
          shop_user_id: id,
          status: status,
        });
        $toast.open({
          message: res.data.message,
          type: "success",
          duration: 3000,
        });
      } catch (error) {
        $toast.open({
          message: "Cập nhật thất bại",
          type: "error",
          duration: 3000,
        });
        console.log(error);
      }
    },
    async getKpiStaff() {
      try {
        const res = await axios.get("v2/staff/get-config-message-type");
        this.kpiOnl = res.data.data.message_type;
        this.kpiOff = res.data.data.offline_message_type;
      } catch (err) {
        console.log(err);
      }
    },
    async updateKpi() {
      try {
        const resOnl = await axios.post("v2/staff/update-online-message-type", {
          message_type: this.kpiOnl,
        });
        const resOff = await axios.post("v2/staff/update-offline-message-type", {
          message_type: this.kpiOff,
        });
        if (resOnl.data.success && resOff.data.success) {
          $toast.open({
            message: resOnl.data.message,
            type: "success",
            duration: 3000,
          });
        } else if (
          resOnl.data.success === false &&
          resOff.data.success === true
        ) {
          $toast.open({
            message: resOnl.data.message,
            type: "error",
            duration: 3000,
          });
        } else {
          $toast.open({
            message: resOff.data.message,
            type: "error",
            duration: 3000,
          });
        }
      } catch (error) {
        $toast.open({
          message: "Cập nhật thất bại",
          type: "error",
          duration: 3000,
        });
        console.log(error);
      }
    },
  },
});
