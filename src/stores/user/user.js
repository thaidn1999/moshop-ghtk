import axios from 'axios'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore({
  id: 'user',
  state: () => ({
    users: []
  }),
  getters: {
    listUsers: (state) => state.users
  },
  actions: {
    async getUser() {
      // const res = await axios.get('')
    }
  }
})
