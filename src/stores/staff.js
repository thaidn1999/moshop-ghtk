import axios from 'axios'
import { format } from 'date-fns'
import { defineStore } from 'pinia'
import { useToast } from "vue-toast-notification";
const $toast = useToast();
export const useStaffStore = defineStore({
  id: 'staff',
  state: () => ({
    staffs: [],
    token: localStorage.getItem('accessToken'),
    kpiOnl: '',
    kpiOff: '',
    start_date: '',
    end_date: '',
    currentDate: new Date(),
  }),
  getters: {
    listStaffs: (state) => state.staffs,
  },
  actions: {
    getCurrentDate() {
      this.currentDate = format(new Date(), 'HH:mm')
    },
    async getStaff(start_date, end_date) {
      try {
        const res = await axios.get(`https://x.ghtk.vn/api/v2/staff?start_date=${start_date}&end_date=${end_date}`,
          {
            headers: {
              authorization: `Bearer ${this.token}`
            }
          })
        this.staffs = res.data.data;
        this.getCurrentDate()
      } catch (error) {
        console.log(error);
      }
    },
    async updateStatus(id, status) {
      try {
        const res = await axios.post("https://x.ghtk.vn/api/v2/staff/set-status",
          {
            shop_user_id: id,
            status: status
          },
          {
            headers: {
              authorization: `Bearer ${this.token}`
            }
          })
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
        const res = await axios.get('https://x.ghtk.vn/api/v2/staff/get-config-message-type', {
          headers: {
            authorization: `Bearer ${this.token}`
          }
        })
        this.kpiOnl = res.data.data.message_type;
        this.kpiOff = res.data.data.offline_message_type;
      } catch (err) {
        console.log(err);
      }
    },
    async updateKpi() {
      try {
        const resOnl = await axios.post('https://x.ghtk.vn/api/v2/staff/update-online-message-type',
          {
            message_type: this.kpiOnl,
          },
          {
            headers: {
              authorization: `Bearer ${this.token}`
            }
          });
        const resOff = await axios.post('https://x.ghtk.vn/api/v2/staff/update-offline-message-type',
          {
            message_type: this.kpiOff,
          },
          {
            headers: {
              authorization: `Bearer ${this.token}`
            }
          })
        if ((resOnl.data.success) && (resOff.data.success)) {
          $toast.open({
            message: resOnl.data.message,
            type: "success",
            duration: 3000,
          });
        }
        else if ((resOnl.data.success === false) && (resOff.data.success === true)) {
          $toast.open({
            message: resOnl.data.message,
            type: "error",
            duration: 3000,
          });
        }
        else {
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
      };
    },
  }
})
