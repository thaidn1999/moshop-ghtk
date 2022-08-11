import axios from 'axios'
import { defineStore } from 'pinia'

const token = localStorage.getItem('accessToken')

export const useStaffStore = defineStore({
  id: 'staff',
  state: () => ({
    staffs: [],
    messageStatus: '',
    checkStatus: false,
    kpiOnl: '',
    kpiOff: '',
    hour: '',
    minute: ''
  }),
  getters: {
    listStaffs: (state) => state.staffs
  },
  actions: {
    async getStaff() {
      try {
        const res = await axios.get('https://x.ghtk.vn/api/v2/staff?start_date=2021-07-20&end_date=2021-07-20',
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
        this.staffs = res.data.data;
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
              authorization: `Bearer ${token}`
            }
          })
        this.messageStatus = res.data.message
        this.getStaff()
      } catch (error) {
        console.log(error);
      }
    },
    async getKpiStaff() {
      try {
        const res = await axios.get('https://x.ghtk.vn/api/v2/staff/get-config-message-type', {
          headers: {
            authorization: `Bearer ${token}`
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
              authorization: `Bearer ${token}`
            }
          });
        const resOff = await axios.post('https://x.ghtk.vn/api/v2/staff/update-offline-message-type',
          {
            message_type: this.kpiOff,
          },
          {
            headers: {
              authorization: `Bearer ${token}`
            }
          })
        if ((resOnl.data.success === true) && (resOff.data.success === true)) {
          this.checkStatus = true
          this.messageStatus = resOnl.data.message
        }
        else if ((resOnl.data.success === false) && (resOff.data.success === true)) {
          this.checkStatus = false
          this.messageStatus = resOnl.data.message
        }
        else {
          this.checkStatus = false
          this.messageStatus = resOff.data.message
        }
      } catch (error) {
        console.log(error);
      };
    },
    getTimeLive() {
      let date = new Date();
      this.hour = date.getHours()
      this.minute = date.getMinutes()
      if (this.hour < 10) {
        this.hour = '0' + this.hour
      } else {
        return this.hour
      }
      if (this.minute < 10) {
        this.minute = '0' + this.minute
      } else {
        return this.minute
      }
    }
  }
})
