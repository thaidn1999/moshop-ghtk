import Vue from "vue";
import axios from "axios";
// axios.defaults.baseURL = 'http://localhost:8000/api/v1';
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=utf-8';
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';

let token = localStorage.getItem("accessToken");
if (token && token.length) {
  axios.defaults.headers.common["authorization"] = `Bearer ${token}`;
  // axios.defaults.headers = `Bearer ${token}`;

}

// axios.interceptors.response.use(
//   function (res) {
//     return res
//   },
//   function (errors) {
//     if (errors.response.status === 401) {
//       let token = localStorage.getItem("accessToken");
//       if (token && token.length) {
//         axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//         return axios.request(errors.config)
//       }
//     }
//     return Promise.reject(errors.response.data);
//   }
// );
Vue.prototype.$axios = axios;

export { axios };